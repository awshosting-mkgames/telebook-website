# Telebook App

A React + Vite project containing the four Telebook pages:

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
└── src/
    ├── main.jsx        # React entry point
    ├── App.jsx         # Router + top nav, wires the 4 pages together
    └── pages/
        ├── AboutApp.jsx
        ├── TermsAndConditions.jsx
        ├── PrivacyPolicy.jsx
        └── DeleteAccount.jsx
```

## Setup

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
