# CISSP en clair — application Android (APK)

Coque Android native minimale qui embarque **tout** le cours « CISSP en clair »
dans un `WebView` plein écran. L'application fonctionne **100 % hors ligne** :
aucune permission réseau, aucune donnée envoyée, la progression est stockée
localement sur l'appareil.

- **Package** : `com.cisspenclair.app`
- **Android minimum** : 8.0 (API 26) — couvre la quasi-totalité du parc
- **Taille** : quelques Mo (le contenu du cours, aucune bibliothèque tierce)
- **Source unique** : le site à la racine du dépôt (`index.html`, `css/`, `js/`,
  `data/`) est copié dans les assets de l'APK au build. Aucun contenu n'est
  dupliqué ici — toute mise à jour du cours part automatiquement dans l'app.

## Obtenir l'APK

### Option A — sans rien installer (recommandé) : via GitHub Actions
1. Un push sur la branche déclenche le workflow **« Build Android APK »**
   (`.github/workflows/android-apk.yml`). On peut aussi le lancer à la main :
   onglet **Actions → Build Android APK → Run workflow**.
2. À la fin du build, ouvrir le run et télécharger l'artefact
   **`cissp-en-clair-apk`** (contient `cissp-en-clair.apk`).

### Option B — build local (Android SDK requis)
```bash
cd android
./gradlew assembleDebug
# APK produit :  app/build/outputs/apk/debug/app-debug.apk
```
Pré-requis : JDK 17+ et le SDK Android (platform 34, build-tools 34).
Un simple `local.properties` avec `sdk.dir=/chemin/vers/Android/Sdk` suffit,
ou ouvrir le dossier `android/` dans **Android Studio** (Run ▶).

## Installer sur un téléphone
- **En USB** : `adb install -r android/app/build/outputs/apk/debug/app-debug.apk`
- **Sans PC** : transférer le `.apk` sur le téléphone (mail, cloud, câble) puis
  l'ouvrir. Autoriser au besoin « Installer des applications inconnues » pour la
  source utilisée.

> L'APK est **signé avec la clé de debug** : parfait pour l'usage personnel et
> le partage direct. Pour une publication sur le Play Store, générer un APK/AAB
> `release` signé avec votre propre keystore (voir ci-dessous).

## Narration vocale (TTS)
La narration des leçons utilise la synthèse vocale du système (Web Speech API
relayée vers le moteur TTS Android). Pour une voix française, installer/activer
une voix « français » dans **Paramètres → Système → Langues → Synthèse vocale**.
Sans voix française, l'appareil utilise sa voix par défaut ; le cours reste
entièrement utilisable.

## Publier une version release (optionnel)
1. Créer un keystore :
   ```bash
   keytool -genkey -v -keystore cissp.jks -keyalg RSA -keysize 2048 \
     -validity 10000 -alias cissp
   ```
2. Ajouter un `signingConfig` dans `app/build.gradle` (bloc `release`) pointant
   sur ce keystore, puis :
   ```bash
   ./gradlew assembleRelease   # ou bundleRelease pour un .aab Play Store
   ```

## Pourquoi un WebView et pas une réécriture native ?
Le cours est déjà une application web autonome (routage par ancre, `localStorage`,
répétition espacée, examens adaptatifs). L'embarquer tel quel garantit une
parité 1:1 avec la version web, une seule base de code à maintenir, et un binaire
minuscule sans dépendance.
