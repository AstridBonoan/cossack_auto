# GitHub Pages Setup Instructions

## ⚠️ IMPORTANT: Enable GitHub Actions for Pages

Your site is currently showing the README because GitHub Pages needs to be configured to use GitHub Actions.

### Steps to Fix:

1. **Go to your repository settings:**
   - Visit: https://github.com/AstridBonoan/cossack_auto/settings/pages

2. **Change the Source:**
   - Under "Source", you'll see options like "Deploy from a branch"
   - **Change it to: "GitHub Actions"**
   - Save

3. **Check the Actions tab:**
   - Go to: https://github.com/AstridBonoan/cossack_auto/actions
   - You should see a workflow run after you change the source
   - Wait for it to complete (takes 1-2 minutes)

4. **Your site will be at:**
   - https://astridbonoan.github.io/cossack_auto/

## If the workflow fails:

1. Check the Actions tab for error messages
2. Make sure the workflow file is in `.github/workflows/deploy.yml`
3. Try pushing a new commit to trigger the workflow again

## Manual Trigger (if needed):

1. Go to Actions tab
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button
4. Select "main" branch and run

