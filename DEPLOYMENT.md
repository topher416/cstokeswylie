# Deployment Guide

This guide explains how to deploy the portfolio website to GitHub Pages with the custom domain cassandrastokeswylie.com.

## Prerequisites

- Repository pushed to GitHub (✓ Done)
- Custom domain configured in DNS settings
- GitHub Pages enabled on the repository

## Method 1: GitHub Pages (Recommended)

### Step 1: Build the Production Bundle

```bash
npm run deploy
```

This command will:
- Build the optimized production bundle
- Copy the CNAME file to the `dist` folder

### Step 2: Deploy to GitHub Pages

You have two options:

#### Option A: Using gh-pages branch (Manual)

```bash
# Install gh-pages package
npm install -D gh-pages

# Add deploy script to package.json
# "deploy:gh": "npm run build && cp CNAME dist/ && gh-pages -d dist"

# Deploy
npm run deploy:gh
```

#### Option B: Using GitHub Actions (Automated)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm ci

      - name: Build
        run: npm run build

      - name: Copy CNAME
        run: cp CNAME dist/

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./dist

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

### Step 3: Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment":
   - **Source**: Deploy from a branch (or GitHub Actions if using Option B)
   - **Branch**: `gh-pages` / `root` (or leave as GitHub Actions)
4. Under "Custom domain":
   - Enter: `cassandrastokeswylie.com`
   - Check "Enforce HTTPS"

### Step 4: Configure DNS Settings

In your domain registrar (where you bought cassandrastokeswylie.com):

1. Add an **A record** pointing to GitHub Pages IPs:
   ```
   185.199.108.153
   185.199.109.153
   185.199.110.153
   185.199.111.153
   ```

2. Add a **CNAME record** (optional, for www subdomain):
   ```
   www → topher416.github.io
   ```

3. DNS propagation may take 24-48 hours

## Method 2: Manual Deployment

### Option A: Via GitHub Web Interface

1. Build the site: `npm run build`
2. Go to GitHub repository settings → Pages
3. Upload the `dist` folder contents
4. Configure custom domain as above

### Option B: Via Git Subtree

```bash
# Build the site
npm run build

# Copy CNAME
cp CNAME dist/

# Deploy
git subtree push --prefix dist origin gh-pages
```

## Verification

After deployment, verify:

1. ✅ Site loads at https://cassandrastokeswylie.com
2. ✅ All sections are visible and scrolling works
3. ✅ Images and styles load correctly
4. ✅ Mobile responsiveness works
5. ✅ Links work (email, phone, LinkedIn)

## Troubleshooting

### Issue: 404 Page Not Found

**Solution**: Ensure the `base` in `vite.config.js` is set to `'/'` (not a subdirectory).

### Issue: CSS/JS not loading

**Solution**: Check that all asset paths are relative and the build completed successfully.

### Issue: Custom domain not working

**Solution**:
1. Verify CNAME file exists in the `dist` folder
2. Check DNS records are correct
3. Wait for DNS propagation (up to 48 hours)
4. Ensure "Enforce HTTPS" is enabled in GitHub Pages settings

### Issue: Changes not appearing

**Solution**:
1. Clear browser cache (Cmd+Shift+R / Ctrl+F5)
2. Verify the latest commit is deployed
3. Check GitHub Actions/Pages deployment logs

## Updating the Site

To update content:

1. Make changes to the code
2. Commit and push to main branch
3. Run deployment command or wait for GitHub Actions
4. Verify changes at cassandrastokeswylie.com

## Local Testing

Before deploying, always test locally:

```bash
# Development mode
npm run dev

# Production preview
npm run build
npm run preview
```

## Next Steps

- [ ] Add high-quality images to replace placeholders
- [ ] Add portfolio project images/videos
- [ ] Test on multiple devices and browsers
- [ ] Set up Google Analytics (optional)
- [ ] Add contact form backend (optional)
- [ ] Consider adding a blog section (optional)

## Support

For issues or questions:
- Check GitHub repository issues
- Review Vite documentation: https://vitejs.dev
- Review Tailwind CSS docs: https://tailwindcss.com
- Review GitHub Pages docs: https://docs.github.com/pages

---

Website: https://cassandrastokeswylie.com
Repository: https://github.com/topher416/cstokeswylie
