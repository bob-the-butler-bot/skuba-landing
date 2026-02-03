# Skuba Landing Page

Professional landing page for Skuba, a scuba diving app.

## Features

- ✅ **Pure HTML/CSS/JS** - No build tools required
- ✅ **Mobile-first responsive design** - Works on all devices
- ✅ **High contrast UI** - Easy to read in bright sunlight
- ✅ **Fast load times** - Optimized performance
- ✅ **SEO optimized** - Meta tags, semantic HTML
- ✅ **Accessible** - ARIA labels, keyboard navigation
- ✅ **Cross-browser compatible** - Works on all modern browsers

## Structure

```
skuba-landing/
├── index.html          # Main HTML file
├── styles.css          # All CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Local Development

Simply open `index.html` in your browser, or use a local server:

```bash
# Python 3
python3 -m http.server 8000

# Node.js
npx serve

# PHP
php -S localhost:8000
```

Then visit: http://localhost:8000

## Deployment

### GitHub Pages
1. Push to GitHub
2. Settings → Pages → Select branch
3. Your site will be live at: `https://username.github.io/repo-name`

### Netlify/Vercel
1. Connect your GitHub repo
2. Deploy (no build command needed)
3. Done!

### Traditional Hosting
Upload all files to your web server's public directory.

## Performance Optimizations

- Minimal external dependencies (only Google Fonts)
- Lazy loading for images
- Optimized CSS animations
- Reduced motion support
- Preconnect to external resources

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile browsers (iOS Safari, Chrome Mobile)

## Key Design Principles

1. **High Contrast** - Easy to read in bright sunlight (boat-ready)
2. **Large Touch Targets** - Buttons are 48px+ for wet thumbs
3. **Clear Hierarchy** - Important info stands out
4. **Fast** - Loads quickly even on slow connections
5. **Professional** - Modern, clean aesthetic

## Screenshots

The landing page includes:
- Hero section with app icon and CTA
- Feature grid highlighting FREE vs PRO
- "Why Choose" section with benefits
- Screenshot gallery/carousel
- Pricing comparison
- Download CTA
- Footer with links

## Customization

### Colors
Edit CSS variables in `styles.css`:
```css
:root {
    --primary: #0066ff;
    --secondary: #00d4ff;
    /* etc. */
}
```

### Content
Edit `index.html` directly. All content is semantic and easy to find.

## Credits

Built by [Your Name] for Skuba
App by Ronny Majani

## License

All rights reserved © 2026 Skuba
