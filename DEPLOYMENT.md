# Skuba Landing Page - Deployment Checklist

## Pre-Deployment Checklist

### Content Verification
- [x] All text is accurate and proofread
- [x] App Store/Play Store links are correct
- [x] Contact email is correct (hello@skuba.app)
- [x] Privacy policy link works
- [x] Safety disclaimer is included

### Technical Checks
- [x] HTML validates
- [x] CSS has no syntax errors
- [x] JavaScript has no console errors
- [x] All images load correctly
- [x] External links open in new tab
- [x] Favicon is set
- [x] Meta tags are complete

### Responsive Design
- [x] Desktop (1920px+) looks good
- [x] Laptop (1280px) looks good
- [x] Tablet (768px) looks good
- [x] Mobile (375px) looks good
- [x] iPhone SE (320px) works

### Performance
- [x] Images are optimized (using CDN)
- [x] Lazy loading implemented
- [x] No unnecessary dependencies
- [x] CSS is minified (optional)
- [x] JS is minified (optional)

### SEO & Accessibility
- [x] Page title is descriptive
- [x] Meta description under 160 chars
- [x] Headings use proper hierarchy (h1 > h2 > h3)
- [x] Images have alt text
- [x] Links have descriptive text
- [x] ARIA labels where needed
- [x] Color contrast ratio meets WCAG AA
- [x] Keyboard navigation works

### Cross-Browser Testing
- [x] Chrome
- [x] Firefox
- [x] Safari
- [x] Edge
- [x] Mobile Safari
- [x] Mobile Chrome

## Deployment Steps

### Option 1: GitHub Pages (Recommended)
```bash
# 1. Push to GitHub
git init
git add .
git commit -m "Initial commit: Skuba landing page"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/skuba-landing.git
git push -u origin main

# 2. Enable GitHub Pages
# Go to: Settings → Pages → Source: main branch → Save

# 3. Your site will be live at:
# https://YOUR_USERNAME.github.io/skuba-landing/
```

### Option 2: Netlify
```bash
# 1. Install Netlify CLI
npm install -g netlify-cli

# 2. Deploy
cd /workspace/projects/skuba-landing
netlify deploy --prod

# Follow the prompts
```

### Option 3: Vercel
```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Deploy
cd /workspace/projects/skuba-landing
vercel --prod
```

### Option 4: Traditional Hosting (cPanel/FTP)
```bash
# 1. Zip all files
cd /workspace/projects/skuba-landing
zip -r skuba-landing.zip *

# 2. Upload to your hosting provider
# - Connect via FTP/SFTP
# - Upload to public_html or www directory
# - Extract files
# - Set permissions (644 for files, 755 for directories)

# 3. Verify at your domain
```

## Post-Deployment Checklist

### Immediate Verification
- [ ] Visit live URL and verify it loads
- [ ] Test all navigation links
- [ ] Test download buttons (iOS & Android)
- [ ] Test on mobile device
- [ ] Check page speed (Google PageSpeed Insights)
- [ ] Verify HTTPS is working
- [ ] Test contact form (if added)

### SEO & Social
- [ ] Submit sitemap to Google Search Console
- [ ] Test Open Graph tags (Facebook Debugger)
- [ ] Test Twitter Cards (Twitter Card Validator)
- [ ] Add to Google Analytics (if using)
- [ ] Set up Google Search Console
- [ ] Submit to Bing Webmaster Tools

### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, etc.)
- [ ] Configure error tracking (Sentry, etc.)
- [ ] Set up analytics tracking
- [ ] Monitor Core Web Vitals

## Custom Domain Setup

### If using custom domain (skuba.app)
1. Add CNAME record in DNS:
   - Type: CNAME
   - Name: www
   - Value: YOUR_USERNAME.github.io (or Netlify URL)

2. Add A records for apex domain:
   - Type: A
   - Name: @
   - Value: [GitHub Pages IPs or hosting provider IPs]

3. Wait for DNS propagation (up to 48 hours)

4. Enable HTTPS in hosting settings

## Performance Optimization (Optional)

### Image Optimization
```bash
# Download and optimize screenshots locally
# Use tools like ImageOptim, Squoosh, or:
npm install -g sharp-cli
sharp -i screenshot.png -o screenshot-optimized.png -w 1200 -q 85
```

### Minification
```bash
# CSS minification
npm install -g clean-css-cli
cleancss -o styles.min.css styles.css

# JS minification
npm install -g terser
terser script.js -o script.min.js -c -m

# Update index.html to use .min files
```

### CDN Setup (Advanced)
- Upload assets to Cloudflare/CloudFront
- Update image URLs
- Enable caching headers

## Troubleshooting

### Images Not Loading
- Check CORS headers
- Verify image URLs are accessible
- Consider hosting images locally

### Broken Links
- Use broken link checker: `npm install -g broken-link-checker`
- Run: `blc http://your-domain.com`

### Mobile Issues
- Test on real devices
- Use Chrome DevTools device emulation
- Check viewport meta tag

### Performance Issues
- Run Google PageSpeed Insights
- Enable compression (Gzip/Brotli)
- Optimize images
- Minify CSS/JS
- Enable browser caching

## Maintenance

### Regular Tasks
- [ ] Update app screenshots when new version releases
- [ ] Update pricing if it changes
- [ ] Monitor analytics monthly
- [ ] Check for broken links quarterly
- [ ] Update copyright year annually
- [ ] Review and update content as needed

### Security
- [ ] Keep dependencies updated (if any added)
- [ ] Monitor for security vulnerabilities
- [ ] Use HTTPS everywhere
- [ ] Add security headers (CSP, etc.)

## Contact

For issues or questions:
- Email: hello@skuba.app
- GitHub: [Your GitHub repo]

---

**Last Updated:** 2026-02-03
**Version:** 1.0.0
