# Noisy - Soundboard App Landing Page

A playful and modern landing page for the Noisy soundboard app, built with React and Tailwind CSS.

## Features

- **Responsive Design**: Optimized for all screen sizes
- **Modern UI**: Playful design with rounded corners, soft shadows, and bright accent colors
- **Interactive Elements**: Hover effects, animations, and smooth transitions
- **Background Illustrations**: Subtle soundwave and speaker elements
- **Accessibility**: Proper semantic HTML and ARIA labels

## Sections

1. **Hero Section**: App name "Noisy", tagline "Tap. Laugh. Repeat.", and call-to-action button
2. **Sounds Grid**: Colorful cards representing sound categories (Animals, Instruments, Objects)
3. **Features Section**: Icons and descriptions explaining app benefits
4. **Footer**: Copyright and social links

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm start
```

3. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Build for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## Design System

### Colors
- Primary: `#FF6B6B` (Coral Red)
- Secondary: `#4ECDC4` (Teal)
- Accent: `#45B7D1` (Blue)
- Additional: Warm Orange, Cool Green, Purple, Pink, Yellow

### Typography
- Font Family: Inter (Google Fonts)
- Weights: 300, 400, 500, 600, 700, 800, 900

### Animations
- Float animations for background elements
- Hover scale effects on cards
- Pulse animations for decorative elements
- Bounce animations for musical notes

## Project Structure

```
src/
├── components/
│   ├── Hero.js              # Hero section with app name and CTA
│   ├── SoundsGrid.js        # Sound categories grid
│   ├── Features.js          # Features section with benefits
│   ├── Footer.js            # Footer with copyright
│   └── BackgroundElements.js # Animated background elements
├── App.js                   # Main app component
├── index.js                 # React entry point
└── index.css               # Global styles and Tailwind imports
```

## Customization

The design uses a custom Tailwind configuration with extended colors and animations. You can modify:

- Colors in `tailwind.config.js`
- Animations in `src/index.css`
- Component content in individual component files

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Deployment

### Quick Deploy to Vercel

1. **Push to Git Repository:**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your repository
   - Click "Deploy"

3. **Or use Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

### Local Testing
```bash
npm install
npm start
```

### Production Build
```bash
npm run build
```

## License

This project is for demonstration purposes.
