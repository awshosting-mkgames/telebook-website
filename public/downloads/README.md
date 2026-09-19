# APK yahan daalein

Apni Telebook APK file ko is folder me rakhein aur naam `telebook.apk` rakhein:

    public/downloads/telebook.apk

Ye file build ke baad `dist/downloads/telebook.apk` par chali jaayegi aur
website par `/downloads/telebook.apk` URL se download hogi.

## Naam badalna ho to

`src/config.js` me `downloadUrl` update kar dein, e.g.:

    downloadUrl: "/downloads/telebook-v1.2.apk"

Note: Vite `public/` ko process nahi karta — file jaisi hai waisi hi copy hoti hai.
