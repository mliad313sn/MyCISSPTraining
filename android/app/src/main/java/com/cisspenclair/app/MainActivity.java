package com.cisspenclair.app;

import android.app.Activity;
import android.content.ContentValues;
import android.content.Intent;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Environment;
import android.provider.MediaStore;
import android.view.KeyEvent;
import android.webkit.JavascriptInterface;
import android.webkit.ValueCallback;
import android.webkit.WebChromeClient;
import android.webkit.WebResourceRequest;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.Toast;

import java.io.File;
import java.io.FileOutputStream;
import java.io.OutputStream;
import java.nio.charset.StandardCharsets;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Locale;

/**
 * Coque native minimale : un seul WebView plein écran qui charge le site
 * « CISSP en clair » embarqué dans les assets de l'APK. Aucune dépendance
 * externe (pas d'AndroidX), aucune permission — l'application tourne
 * entièrement hors ligne. Un pont natif léger rend l'export/import de
 * sauvegarde fonctionnel dans la coque.
 */
public class MainActivity extends Activity {

    private static final int FILE_CHOOSER_REQ = 42;

    private WebView web;
    private ValueCallback<Uri[]> filePathCallback;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        web = new WebView(this);
        setContentView(web);

        WebSettings s = web.getSettings();
        s.setJavaScriptEnabled(true);                    // l'app est une SPA JS
        s.setDomStorageEnabled(true);                    // localStorage : progression, streak, Leitner
        s.setDatabaseEnabled(true);
        s.setLoadWithOverviewMode(true);
        s.setUseWideViewPort(true);
        s.setBuiltInZoomControls(false);
        s.setSupportZoom(false);
        s.setMediaPlaybackRequiresUserGesture(false);    // narration TTS sans geste préalable
        s.setCacheMode(WebSettings.LOAD_DEFAULT);
        s.setAllowFileAccess(true);

        // Pont natif : appelé UNIQUEMENT par le contenu de confiance embarqué
        // (file:///android_asset). Les liens externes s'ouvrent hors WebView.
        web.addJavascriptInterface(new AndroidBridge(), "AndroidBridge");

        // WebChromeClient : synthèse vocale fiable + sélecteur de fichier (restauration).
        web.setWebChromeClient(new WebChromeClient() {
            @Override
            public boolean onShowFileChooser(WebView view, ValueCallback<Uri[]> cb,
                                             FileChooserParams params) {
                if (filePathCallback != null) filePathCallback.onReceiveValue(null);
                filePathCallback = cb;
                try {
                    startActivityForResult(params.createIntent(), FILE_CHOOSER_REQ);
                } catch (Exception e) {
                    filePathCallback = null;
                    return false;
                }
                return true;
            }
        });

        web.setWebViewClient(new WebViewClient() {
            @Override
            public boolean shouldOverrideUrlLoading(WebView view, WebResourceRequest request) {
                Uri uri = request.getUrl();
                String scheme = uri.getScheme();
                // Liens externes (ex. crédit GitHub en pied de page) -> navigateur système.
                if ("http".equals(scheme) || "https".equals(scheme)) {
                    try {
                        startActivity(new Intent(Intent.ACTION_VIEW, uri));
                    } catch (Exception ignored) { }
                    return true;
                }
                // Le routage interne se fait par ancre (#/...) sur file:// : géré par le WebView.
                return false;
            }
        });

        if (savedInstanceState != null) {
            web.restoreState(savedInstanceState);
        } else {
            web.loadUrl("file:///android_asset/index.html");
        }
    }

    /** Résultat du sélecteur de fichier (restauration d'une sauvegarde). */
    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        if (requestCode == FILE_CHOOSER_REQ) {
            Uri[] results = null;
            if (resultCode == RESULT_OK && data != null && data.getData() != null) {
                results = new Uri[]{ data.getData() };
            }
            if (filePathCallback != null) filePathCallback.onReceiveValue(results);
            filePathCallback = null;
        }
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        super.onSaveInstanceState(outState);
        web.saveState(outState);
    }

    /** Le bouton Retour recule dans l'historique du cours avant de quitter l'app. */
    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK && web.canGoBack()) {
            web.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onPause() {
        super.onPause();
        web.onPause();          // met en pause la narration vocale en arrière-plan
    }

    @Override
    protected void onResume() {
        super.onResume();
        web.onResume();
    }

    @Override
    protected void onDestroy() {
        if (web != null) {
            web.destroy();
            web = null;
        }
        super.onDestroy();
    }

    /** Pont JS -> natif pour l'export de sauvegarde (le téléchargement blob
     *  d'un WebView n'écrit aucun fichier). Écrit le JSON dans les
     *  Téléchargements sans aucune permission. */
    private class AndroidBridge {
        @JavascriptInterface
        public void saveBackup(final String json) {
            String result;
            try {
                String name = "cissp-en-clair-sauvegarde-"
                        + new SimpleDateFormat("yyyy-MM-dd", Locale.US).format(new Date()) + ".json";
                byte[] bytes = json.getBytes(StandardCharsets.UTF_8);

                if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.Q) {
                    ContentValues cv = new ContentValues();
                    cv.put(MediaStore.Downloads.DISPLAY_NAME, name);
                    cv.put(MediaStore.Downloads.MIME_TYPE, "application/json");
                    cv.put(MediaStore.Downloads.IS_PENDING, 1);
                    Uri item = getContentResolver()
                            .insert(MediaStore.Downloads.EXTERNAL_CONTENT_URI, cv);
                    if (item == null) throw new Exception("insertion impossible");
                    try (OutputStream os = getContentResolver().openOutputStream(item)) {
                        os.write(bytes);
                    }
                    cv.clear();
                    cv.put(MediaStore.Downloads.IS_PENDING, 0);
                    getContentResolver().update(item, cv, null, null);
                    result = "Sauvegarde enregistrée dans Téléchargements/" + name;
                } else {
                    File dir = getExternalFilesDir(Environment.DIRECTORY_DOWNLOADS);
                    File out = new File(dir, name);
                    try (FileOutputStream fos = new FileOutputStream(out)) {
                        fos.write(bytes);
                    }
                    result = "Sauvegarde enregistrée : " + out.getAbsolutePath();
                }
            } catch (Exception e) {
                result = "Échec de la sauvegarde : " + e.getMessage();
            }
            final String msg = result;
            runOnUiThread(() -> Toast.makeText(MainActivity.this, msg, Toast.LENGTH_LONG).show());
        }
    }
}
