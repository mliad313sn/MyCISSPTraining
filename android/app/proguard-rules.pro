# Application WebView minimale : rien à obscurcir côté Java, contenu 100 % web.
# On garde les points d'entrée WebView par prudence si le minify est activé un jour.
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}
