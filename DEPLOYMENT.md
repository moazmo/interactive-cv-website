# 🚀 GitHub Deployment Guide

This guide will help you publish your interactive CV website to GitHub and deploy it using GitHub Pages.

## 📋 Prerequisites

- [Git](https://git-scm.com/) installed on your computer
- [GitHub account](https://github.com/signup)
- Your project is already initialized as a Git repository ✅

## 🔄 Publishing to GitHub

### Step 1: Create a New Repository on GitHub

1. **Go to [GitHub](https://github.com)** and sign in
2. **Click the "+" button** in the top right corner
3. **Select "New repository"**
4. **Choose a repository name**:
   - For personal website: `your-username.github.io`
   - For project website: `interactive-cv-website` or any name you prefer
5. **Set visibility to Public** (required for free GitHub Pages)
6. **Do NOT initialize** with README, .gitignore, or license (we already have these)
7. **Click "Create repository"**

### Step 2: Connect Your Local Repository

```powershell
# Navigate to your project directory (if not already there)
cd "D:\github_projects\interactive-cv-website"

# Add GitHub repository as remote origin
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPOSITORY_NAME.git

# Rename main branch (GitHub's default)
git branch -M main

# Push your code to GitHub
git push -u origin main
```

**Replace `YOUR_USERNAME` and `YOUR_REPOSITORY_NAME` with your actual GitHub username and repository name.**

### Step 3: Enable GitHub Pages

1. **Go to your repository** on GitHub
2. **Click "Settings"** tab
3. **Scroll down to "Pages"** in the left sidebar
4. **Under "Source"**, select **"Deploy from a branch"**
5. **Choose branch**: `main`
6. **Choose folder**: `/ (root)`
7. **Click "Save"**

### Step 4: Access Your Website

- Your website will be available at:
  - Personal site: `https://YOUR_USERNAME.github.io`
  - Project site: `https://YOUR_USERNAME.github.io/YOUR_REPOSITORY_NAME`

- **Note**: It may take a few minutes for the site to become available

## 🔄 Making Updates

After making changes to your website:

```powershell
# Add changes
git add .

# Commit changes
git commit -m "Update website content"

# Push to GitHub
git push origin main
```

Changes will automatically deploy to GitHub Pages within a few minutes.

## 🎯 Custom Domain (Optional)

To use a custom domain like `yourname.com`:

1. **Buy a domain** from a domain registrar
2. **In your repository**, create a file named `CNAME` with your domain:
   ```
   yourname.com
   ```
3. **Configure DNS** with your domain registrar:
   - Add CNAME record pointing to `YOUR_USERNAME.github.io`
4. **In GitHub Pages settings**, enter your custom domain

## 🛠️ Development Workflow

### Local Development
```powershell
# Start live development server
npx live-server --port=3000 --host=localhost --open=/
```

### Before Publishing Updates
1. **Test locally** to ensure everything works
2. **Update version** in package.json (optional)
3. **Commit and push** changes

### File Structure for GitHub Pages
```
your-repository/
├── index.html          # Main page (required for GitHub Pages)
├── css/
│   └── styles.css
├── js/
│   └── script.js
├── package.json
├── README.md
├── .gitignore
└── CNAME              # Only if using custom domain
```

## 🔍 Troubleshooting

### Common Issues

**Site not loading:**
- Check that `index.html` is in the root directory
- Ensure repository is public
- Wait a few minutes for deployment

**404 errors:**
- Verify all file paths are relative (no leading `/`)
- Check file names match exactly (case-sensitive)

**CSS/JS not loading:**
- Ensure paths in HTML are correct
- Check browser console for errors

### Getting Help

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Community Forum](https://github.community/)

## ✅ Checklist

- [ ] Created GitHub repository
- [ ] Connected local repository to GitHub
- [ ] Pushed code to GitHub
- [ ] Enabled GitHub Pages
- [ ] Verified website is accessible
- [ ] Tested all functionality online
- [ ] Updated README with live site URL

## 📞 Next Steps

After successful deployment:

1. **Share your website URL** on social media
2. **Add the link** to your GitHub profile
3. **Include it** in your email signature
4. **Reference it** in job applications

**Congratulations! Your interactive CV is now live on the internet! 🎉**
