# Landing Page for Mobile App

A beautiful, modern single-page landing page built with React and Vite.

## Features

- ✨ Modern, attractive design with gradient backgrounds
- 📱 Fully responsive (mobile, tablet, desktop)
- 🎨 Smooth animations and hover effects
- 🚀 Fast and optimized with Vite
- 📦 Easy to customize

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update App Information

Edit `src/App.jsx` and update:

1. **App Name**: Change "Your App Name" in the header
2. **Logo**: Replace `/logo.png` with your app logo (place in `public/` folder)
3. **Headline**: Update the headline text (5-7 words)
4. **Description**: Update the description line
5. **Features**: Update feature images and text
6. **Play Store Link**: Replace the `playStoreLink` variable with your actual Google Play Store URL
7. **Privacy Policy**: Update the `privacyPolicyLink` variable
8. **Contact Email**: Update the `contactEmail` variable

### Add Images

Place your images in the `public/` folder:
- `public/logo.png` - App logo (50x50px recommended)
- `public/app-screenshot.png` - Main hero screenshot
- `public/feature1.png` - Feature 1 image
- `public/feature2.png` - Feature 2 image
- `public/feature3.png` - Feature 3 image

### Styling

All styles are in `src/App.css`. You can customize:
- Colors and gradients
- Font sizes
- Spacing and padding
- Animations

## Project Structure

```
landingpage-meta/
├── public/          # Static assets (images, etc.)
├── src/
│   ├── App.jsx      # Main component
│   ├── App.css      # Styles
│   ├── index.css    # Global styles
│   └── main.jsx     # Entry point
├── index.html       # HTML template
├── package.json     # Dependencies
└── vite.config.js   # Vite configuration
```

## License

MIT
