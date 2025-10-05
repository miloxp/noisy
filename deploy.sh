#!/bin/bash

# Noisy App Deployment Script for Vercel

echo "🚀 Starting deployment process for Noisy app..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Run build
echo "🔨 Building the project..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🎯 Next steps:"
    echo "1. Push your code to GitHub/GitLab/Bitbucket"
    echo "2. Connect your repository to Vercel"
    echo "3. Deploy!"
    echo ""
    echo "📖 For detailed instructions, see DEPLOYMENT.md"
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
