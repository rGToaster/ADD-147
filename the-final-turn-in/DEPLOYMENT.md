# cPanel Deployment Guide

## Build locally
```bash
cd the-final-turn-in
npm install
npm run build
```
This produces the production-ready `build/` folder.

## Upload to cPanel
1) Log in to cPanel → **File Manager** → your domain’s `public_html` (or target subfolder).  
2) Upload **all contents inside `build/`** (not the `build` folder itself).  
3) Ensure the `.htaccess` file is present at the root of the upload; it handles SPA routing.

## If deploying to a subfolder
- Add a homepage entry in `package.json` before building, e.g. `"homepage": "/subfolder"`.
- Then rerun `npm run build` and re-upload the new `build/` contents.

## Troubleshooting
- 404s on refresh: confirm `.htaccess` is uploaded and Apache mod_rewrite is enabled.
- Missing assets: re-upload all files from `build/` and clear browser cache.
- Blank page: confirm `index.html` is in the upload root and JavaScript is allowed.

