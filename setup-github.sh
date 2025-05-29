#!/bin/bash

# 🚀 GitHub Publication Setup Script
# This script helps you quickly publish your CV website to GitHub

echo "🚀 Interactive CV Website - GitHub Publication Setup"
echo "=================================================="
echo ""

# Check if we're in the right directory
if [ ! -f "index.html" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    echo "   Make sure you can see index.html in the current folder"
    exit 1
fi

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "❌ Error: Git is not installed"
    echo "   Please install Git from https://git-scm.com/"
    exit 1
fi

echo "✅ Project structure verified"
echo "✅ Git is installed"
echo ""

# Get user input
read -p "Enter your GitHub username: " github_username
read -p "Enter your repository name (e.g., interactive-cv-website): " repo_name

echo ""
echo "📋 Setup Summary:"
echo "   GitHub Username: $github_username"
echo "   Repository Name: $repo_name"
echo "   Repository URL: https://github.com/$github_username/$repo_name"
echo ""

read -p "Is this correct? (y/n): " confirm
if [ "$confirm" != "y" ] && [ "$confirm" != "Y" ]; then
    echo "❌ Setup cancelled"
    exit 1
fi

echo ""
echo "🔄 Setting up Git repository..."

# Check if remote origin already exists
if git remote get-url origin &> /dev/null; then
    echo "⚠️  Remote origin already exists. Removing it..."
    git remote remove origin
fi

# Add new remote
git remote add origin "https://github.com/$github_username/$repo_name.git"

# Rename branch to main (GitHub's default)
git branch -M main

echo "✅ Git remote configured"
echo ""

echo "📋 Next Steps:"
echo "1. Create a repository on GitHub:"
echo "   - Go to https://github.com/new"
echo "   - Repository name: $repo_name"
echo "   - Set to Public"
echo "   - Do NOT initialize with README"
echo ""
echo "2. Push your code to GitHub:"
echo "   git push -u origin main"
echo ""
echo "3. Enable GitHub Pages:"
echo "   - Go to your repository Settings → Pages"
echo "   - Source: Deploy from a branch"
echo "   - Branch: main"
echo "   - Folder: / (root)"
echo ""
echo "4. Your website will be available at:"
echo "   https://$github_username.github.io/$repo_name"
echo ""
echo "🎉 Setup complete! Follow the steps above to publish your website."
