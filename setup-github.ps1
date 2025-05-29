# 🚀 Interactive CV Website - GitHub Publication Setup Script
# PowerShell version for Windows

Write-Host "🚀 Interactive CV Website - GitHub Publication Setup" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host ""

# Check if we're in the right directory
if (!(Test-Path "index.html")) {
    Write-Host "❌ Error: Please run this script from the project root directory" -ForegroundColor Red
    Write-Host "   Make sure you can see index.html in the current folder" -ForegroundColor Red
    exit 1
}

# Check if Git is installed
try {
    git --version | Out-Null
} catch {
    Write-Host "❌ Error: Git is not installed" -ForegroundColor Red
    Write-Host "   Please install Git from https://git-scm.com/" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Project structure verified" -ForegroundColor Green
Write-Host "✅ Git is installed" -ForegroundColor Green
Write-Host ""

# Get user input
$githubUsername = Read-Host "Enter your GitHub username"
$repoName = Read-Host "Enter your repository name (e.g., interactive-cv-website)"

Write-Host ""
Write-Host "📋 Setup Summary:" -ForegroundColor Yellow
Write-Host "   GitHub Username: $githubUsername" -ForegroundColor White
Write-Host "   Repository Name: $repoName" -ForegroundColor White
Write-Host "   Repository URL: https://github.com/$githubUsername/$repoName" -ForegroundColor White
Write-Host ""

$confirm = Read-Host "Is this correct? (y/n)"
if ($confirm -ne "y" -and $confirm -ne "Y") {
    Write-Host "❌ Setup cancelled" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "🔄 Setting up Git repository..." -ForegroundColor Yellow

# Check if remote origin already exists
try {
    git remote get-url origin 2>$null
    Write-Host "⚠️  Remote origin already exists. Removing it..." -ForegroundColor Yellow
    git remote remove origin
} catch {
    # Remote doesn't exist, which is fine
}

# Add new remote
git remote add origin "https://github.com/$githubUsername/$repoName.git"

# Rename branch to main (GitHub's default)
git branch -M main

Write-Host "✅ Git remote configured" -ForegroundColor Green
Write-Host ""

Write-Host "📋 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Create a repository on GitHub:" -ForegroundColor White
Write-Host "   - Go to https://github.com/new" -ForegroundColor Gray
Write-Host "   - Repository name: $repoName" -ForegroundColor Gray
Write-Host "   - Set to Public" -ForegroundColor Gray
Write-Host "   - Do NOT initialize with README" -ForegroundColor Gray
Write-Host ""
Write-Host "2. Push your code to GitHub:" -ForegroundColor White
Write-Host "   git push -u origin main" -ForegroundColor Yellow
Write-Host ""
Write-Host "3. Enable GitHub Pages:" -ForegroundColor White
Write-Host "   - Go to your repository Settings → Pages" -ForegroundColor Gray
Write-Host "   - Source: Deploy from a branch" -ForegroundColor Gray
Write-Host "   - Branch: main" -ForegroundColor Gray
Write-Host "   - Folder: / (root)" -ForegroundColor Gray
Write-Host ""
Write-Host "4. Your website will be available at:" -ForegroundColor White
Write-Host "   https://$githubUsername.github.io/$repoName" -ForegroundColor Green
Write-Host ""
Write-Host "🎉 Setup complete! Follow the steps above to publish your website." -ForegroundColor Cyan

# Offer to open GitHub in browser
$openBrowser = Read-Host "`nWould you like to open GitHub in your browser to create the repository? (y/n)"
if ($openBrowser -eq "y" -or $openBrowser -eq "Y") {
    Start-Process "https://github.com/new"
}
