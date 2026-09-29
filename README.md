# RKM - Rent Keeping Manager Website

Static public website for RKM, including the home page, Privacy Policy and Terms of Service. It is designed for GitHub Pages and requires no server runtime, backend, API, package installation or build step.

## Pages

- `index.html` — product home page
- `privacy.html` — privacy policy
- `terms.html` — terms of service

## GitHub Pages

1. Push this repository to GitHub when ready.
2. In repository **Settings → Pages**, select **Deploy from a branch**, branch `main`, folder `/ (root)`.
3. Wait for the Pages deployment, then verify:
   - `https://hermet900.github.io/RKM-Website/`
   - `https://hermet900.github.io/RKM-Website/privacy.html`
   - `https://hermet900.github.io/RKM-Website/terms.html`
4. In Google Auth Platform, use `hermet900.github.io` as the intended authorized domain and add the published home page, privacy policy and terms URLs where requested. Complete any Google domain ownership or OAuth verification steps required by the console; GitHub Pages publication alone does not guarantee Google approval.

Navigation is relative (`./`, `./privacy.html`, `./terms.html`) so the repository subpath works. No OAuth IDs, client secrets, API keys, analytics or tracking scripts belong in this website.

## Languages and content

The EN/SW control switches the bilingual page copy locally in the browser and remembers only the language preference in local storage. Keep corresponding English and Kiswahili sections together when editing. Product and backup statements must remain consistent with RKM's offline-first architecture and optional encrypted Drive `appDataFolder` backup. Do not describe appDataFolder as permanent storage.

## Local preview

Open `index.html` directly in a browser. The pages use only relative local assets and do not require a development server.