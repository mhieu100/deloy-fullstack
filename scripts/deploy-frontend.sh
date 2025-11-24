#!/bin/bash

# Deployment Script for Frontend to Vercel
# This script builds and deploys the frontend to Vercel

set -e

echo "🚀 Starting Frontend Deployment Process..."

# Navigate to frontend directory
cd "$(dirname "$0")/../frontend"

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null
then
    echo "⚠️  Vercel CLI not found. Installing..."
    npm install -g vercel
fi

# Build the project first to check for errors
echo "🔨 Building project..."
npm run build

echo "✅ Build successful!"

# Ask user which deployment type
echo ""
echo "Select deployment type:"
echo "1) Preview deployment (for testing)"
echo "2) Production deployment"
read -p "Enter choice (1 or 2): " choice

case $choice in
    1)
        echo "📤 Deploying to Vercel (Preview)..."
        vercel
        ;;
    2)
        echo "📤 Deploying to Vercel (Production)..."
        vercel --prod
        ;;
    *)
        echo "❌ Invalid choice. Exiting."
        exit 1
        ;;
esac

echo ""
echo "✨ Frontend deployment completed!"
echo ""
echo "📝 Don't forget to:"
echo "1. Set environment variable in Vercel dashboard:"
echo "   VITE_API_BASE_URL=https://api.mhieu100.me/api"
echo "2. Configure custom domain: mhieu100.me"
