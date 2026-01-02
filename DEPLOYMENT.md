# GitHub Pages Deployment Guide

## Setup Instructions

### 1. Enable GitHub Pages

1. Go to your repository: https://github.com/AstridBonoan/cossack_auto
2. Click **Settings** → **Pages**
3. Under **Source**, select **GitHub Actions**
4. Save

### 2. Push Changes

The GitHub Actions workflow will automatically deploy when you push to the `main` branch:

```bash
git add .
git commit -m "Configure for GitHub Pages deployment"
git push origin main
```

### 3. Access Your Site

After deployment (takes 1-2 minutes), your site will be available at:
**https://astridbonoan.github.io/cossack_auto/**

## What's Configured

- ✅ Vite base path set to `/cossack_auto/`
- ✅ Services data works without backend (falls back to static data)
- ✅ Reservation form shows success message (demo mode)
- ✅ Automatic deployment on push to main branch

## Notes

- **Backend not available**: GitHub Pages only serves static files, so the Flask backend won't work
- **Services**: Will use static data if API is unavailable
- **Reservation Form**: Shows success message for demo purposes (doesn't actually submit)
- **For production**: You'll need to deploy the backend separately (Railway, Render, etc.)

## Manual Build (Optional)

If you want to test the build locally:

```bash
cd frontend
npm run build
```

The built files will be in `frontend/dist/` and can be served with any static file server.

