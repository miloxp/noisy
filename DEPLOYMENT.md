# Vercel Deployment Guide for Noisy

## Prerequisites
- Node.js (version 14 or higher)
- Git repository
- Vercel account

## Deployment Steps

### 1. Prepare the Repository
```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Noisy soundboard app"

# Push to GitHub/GitLab/Bitbucket
git remote add origin <your-repository-url>
git push -u origin main
```

### 2. Deploy to Vercel

#### Option A: Vercel CLI
```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy from project directory
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? (your account)
# - Link to existing project? No
# - What's your project's name? noisy
# - In which directory is your code located? ./
```

#### Option B: Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "New Project"
3. Import your Git repository
4. Vercel will auto-detect it's a React app
5. Click "Deploy"

### 3. Environment Variables (if needed)
No environment variables are required for this project.

### 4. Build Configuration
The project is already configured with:
- `vercel.json` for routing
- `package.json` with proper build scripts
- Assets in `public/` folder

### 5. Custom Domain (Optional)
1. Go to your project dashboard on Vercel
2. Click "Settings" → "Domains"
3. Add your custom domain
4. Follow DNS configuration instructions

## Project Structure
```
noisy/
├── public/
│   ├── assets/
│   │   ├── images/ (16 image files)
│   │   └── sounds/ (16 MP3 files)
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Hero.js
│   │   ├── SoundboardGrid.js
│   │   ├── Footer.js
│   │   └── BackgroundElements.js
│   ├── App.js
│   ├── index.js
│   └── index.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vercel.json
└── README.md
```

## Troubleshooting

### Build Issues
- Ensure all dependencies are in `package.json`
- Check that `npm run build` works locally
- Verify asset paths are correct

### Asset Loading Issues
- Assets are in `public/assets/` folder
- Paths use `/assets/` (absolute from root)
- Check browser network tab for 404 errors

### Performance
- Images are optimized for web
- Audio files are compressed MP3s
- Consider CDN for better global performance

## Post-Deployment
1. Test all sound buttons work
2. Check responsive design
3. Test on mobile devices
4. Verify all assets load correctly

## Support
- Vercel Documentation: https://vercel.com/docs
- React Deployment: https://create-react-app.dev/docs/deployment/
