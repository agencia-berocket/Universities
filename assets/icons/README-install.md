# Installing the favicon and social images

Theme: **black background, white mark.**

## 1. Upload these files to your site root

Drop these into the root of your site (so they live at `https://signtheact.datareserve.org/favicon.ico`, etc.):

- `favicon.ico` — multi-size icon for older browsers
- `favicon-16x16.png` — modern browsers (browser tab)
- `favicon-32x32.png` — modern browsers (tab, retina)
- `favicon-48x48.png` — modern browsers, Windows tiles
- `apple-touch-icon.png` (180×180) — iOS home screen
- `icon-192.png` — Android / PWA
- `icon-512.png` — Android / PWA, splash screens
- `og-image.png` (1200×630) — social link previews
- `site.webmanifest` — PWA metadata
- `logo-mark.png` — white mark on transparent background, full resolution, for any other use

## 2. Add this to the `<head>` of every page

```html
<!-- Favicon / browser tab icon -->
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="48x48" href="/favicon-48x48.png">
<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta name="theme-color" content="#000000">

<!-- Open Graph / Facebook / LinkedIn / iMessage / Slack / Discord -->
<meta property="og:type" content="website">
<meta property="og:site_name" content="The Data Savings Act">
<meta property="og:title" content="The Data Savings Act — A Treaty of Detroit for the AI Economy">
<meta property="og:description" content="Every citizen an owner, every data contribution an asset, every American a stakeholder in the AI economy. Sign the Declaration.">
<meta property="og:url" content="https://signtheact.datareserve.org/">
<meta property="og:image" content="https://signtheact.datareserve.org/og-image.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="The Data Savings Act — A Treaty of Detroit for the AI Economy">

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="The Data Savings Act — A Treaty of Detroit for the AI Economy">
<meta name="twitter:description" content="Every citizen an owner, every data contribution an asset, every American a stakeholder in the AI economy. Sign the Declaration.">
<meta name="twitter:image" content="https://signtheact.datareserve.org/og-image.png">
<meta name="twitter:image:alt" content="The Data Savings Act — A Treaty of Detroit for the AI Economy">
```

## 3. Test it

- **Favicon**: hard-refresh the page (Cmd/Ctrl+Shift+R). It can take a minute. Browsers cache aggressively — if it doesn't show, try in a private/incognito window.
- **Social previews**: paste your URL into:
  - Facebook: https://developers.facebook.com/tools/debug/
  - LinkedIn: https://www.linkedin.com/post-inspector/
  - Twitter/X: just paste into a draft tweet
  - Both Facebook and LinkedIn cache previews aggressively. Use the Sharing Debugger to force a re-scrape after upload.

## Quality notes

- All sizes from 32px and up render with **every individual dot crisply visible** — no blur, no anti-aliasing artifacts. The high-resolution source (4000×4000) was downscaled in a single LANCZOS pass to each target size, which is the sharpest method available.
- The 16×16 favicon uses a heavier dot weight than the rest. At 16 actual pixels, an arrangement of ~28 dots cannot be reproduced literally — there isn't enough pixel space. Bolder dots merge into a clear infinity silhouette, which is what's needed for tab recognition. This is the standard trick used by every major brand whose mark has fine detail.
- Background is pure black (`#000000`). The OG image and favicons all share this so they read as one design system.
