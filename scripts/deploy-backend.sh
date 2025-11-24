#!/bin/bash

# Deployment Script for Backend to AWS EC2
# This script builds the Docker image and pushes it to Docker Hub

set -e

echo "🚀 Starting Backend Deployment Process..."

# Configuration
DOCKER_USERNAME="mhieu100"
IMAGE_NAME="backend"
TAG="latest"
FULL_IMAGE_NAME="${DOCKER_USERNAME}/${IMAGE_NAME}:${TAG}"

# Navigate to backend directory
cd "$(dirname "$0")/../backend"

echo "📦 Building Docker image..."
docker build -t ${FULL_IMAGE_NAME} .

echo "✅ Docker image built successfully!"

# Ask user if they want to push to Docker Hub
read -p "Do you want to push to Docker Hub? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]
then
    echo "🔐 Logging in to Docker Hub..."
    docker login
    
    echo "⬆️  Pushing image to Docker Hub..."
    docker push ${FULL_IMAGE_NAME}
    
    echo "✅ Image pushed successfully!"
    echo "📝 Image name: ${FULL_IMAGE_NAME}"
    echo ""
    echo "🎯 Next steps:"
    echo "1. SSH into your EC2 instance"
    echo "2. Navigate to the infrastructure directory"
    echo "3. Run: docker-compose pull"
    echo "4. Run: docker-compose up -d"
else
    echo "⏭️  Skipping Docker Hub push"
    echo "💡 To test locally, run: docker run -p 8080:8080 --env-file .env ${FULL_IMAGE_NAME}"
fi

echo ""
echo "✨ Deployment script completed!"
