# Telebook App

A React + Vite project containing the Telebook website:

- `/` — Landing page (hero, features, how-it-works, APK download)
- `/download` — same landing page (shareable download link)
- `/about` — About App
- `/terms` — Terms & Conditions
- `/privacy` — Privacy Policy
- `/delete-account` — Delete Account (with working form state, validation, and disabled submit until both checkboxes are ticked)

## Project structure

```
telebook-app/
├── index.html
├── package.json
├── vite.config.js
├── public/                     # copied to dist/ as-is by Vite
│   ├── telebook-logo.png       # logo used across the landing page
│   └── downloads/
│       └── telebook.apk        # <-- PUT THE APK HERE (not committed)
└── src/
    ├── main.jsx                # React entry point
    ├── index.css               # global reset (kills the default body margin)
    ├── App.jsx                 # Router, wires the pages together
    ├── config.js               # download URL, source URL, support email
    └── pages/
        ├── LandingPage.jsx
        ├── AboutApp.jsx
        ├── TermsAndConditions.jsx
        ├── PrivacyPolicy.jsx
        └── DeleteAccount.jsx
```

## APK download

Drop the APK at `public/downloads/telebook.apk`. Every "Download App" button on the
landing page points at `/downloads/telebook.apk`.

To use a different filename (e.g. versioned builds), update `downloadUrl` in
`src/config.js`:

```js
export const TELEBOOK_CONFIG = {
  downloadUrl: "/downloads/telebook-v1.2.apk",
  ...
};
```

### The APK is NOT in git

`.gitignore` excludes `*.apk`, because GitHub rejects any single file over
**100 MB** and the APK is ~109 MB. Both `public/downloads/` and the built
`dist/downloads/` are covered — a build copies `public/` into `dist/`, so
without the ignore rule the APK would sneak back in through `dist/` (which this
repo does track) and the push would fail again.

### Deploying the APK

`npm run build` produces a `dist/` **without** the APK. Upload it to the server
by hand, next to the built site:

```
<webroot>/
├── index.html
├── assets/
└── downloads/
    └── telebook.apk   <-- upload separately (FTP / SSH / cPanel)
```

Checklist for each release:

1. `npm run build`
2. Deploy `dist/`
3. Upload the new APK to `<webroot>/downloads/telebook.apk`
4. Open `https://<site>/downloads/telebook.apk` and confirm it downloads

Also make sure the server sends APKs as
`Content-Type: application/vnd.android.package-archive`. The buttons carry the
HTML `download` attribute so same-origin downloads work regardless, but some
hosts serve unknown extensions as `text/plain`, which makes Android refuse to
install the file.

## Setup

Requires **Node 18+** (Vite 5).

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

## Notes

- Each page is self-contained: its CSS lives in a `<style>` tag scoped under a wrapper
  class (e.g. `.telebook-terms`, `.telebook-privacy`), so pages won't clash with each
  other's styles.
- `DeleteAccount.jsx` currently just logs the submitted form data to the console
  (see the `handleSubmit` function). Replace that with a real API call, e.g.:

  ```js
  await fetch("/api/account/delete", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  ```

- Navigation uses `react-router-dom`. Add more routes in `src/App.jsx` as needed.

- `BrowserRouter` needs an SPA fallback on the server (unknown paths -> `index.html`),
  otherwise a direct hit on `/terms` returns 404. Keep `/downloads/*` out of that
  fallback so a missing APK 404s instead of quietly serving HTML.

- Unknown in-app routes redirect to `/` via the catch-all `<Route path="*">` in
  `src/App.jsx`.

- `src/index.css` zeroes the `<body>` margin. Without it every page renders with an
  8px white gutter down both edges while the landing page's fixed nav spans the full
  viewport — they visibly disagree.
