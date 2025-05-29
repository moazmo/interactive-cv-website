# Quick GitHub Publication Script
# This script will help you publish your CV website to GitHub

Write-Host "🚀 Publishing Interactive CV Website to GitHub" -ForegroundColor Cyan
Write-Host "=============================================" -ForegroundColor Cyan
Write-Host ""

# Step 1: Create the repository on GitHub
Write-Host "📋 Step 1: Create GitHub Repository" -ForegroundColor Yellow
Write-Host "1. Go to: https://github.com/new" -ForegroundColor White
Write-Host "2. Repository name: interactive-cv-website" -ForegroundColor White
Write-Host "3. Description: Modern, responsive CV/Resume website for Moaz Muhammad" -ForegroundColor White
Write-Host "4. Set to PUBLIC (required for GitHub Pages)" -ForegroundColor White
Write-Host "5. Do NOT check any initialization options" -ForegroundColor White
Write-Host "6. Click 'Create repository'" -ForegroundColor White
Write-Host ""

# Open GitHub in browser
$openGitHub = Read-Host "Would you like me to open GitHub in your browser? (y/n)"
if ($openGitHub -eq "y" -or $openGitHub -eq "Y") {
    Start-Process "https://github.com/new"
    Write-Host "✅ GitHub opened in browser" -ForegroundColor Green
}

Write-Host ""
$continue = Read-Host "Press Enter when you've created the repository..."

# Step 2: Push the code
Write-Host ""
Write-Host "📤 Step 2: Pushing your code to GitHub..." -ForegroundColor Yellow

try {
    # Check current branch
    $currentBranch = git branch --show-current
    Write-Host "Current branch: $currentBranch" -ForegroundColor Gray
    
    # Push to GitHub
    Write-Host "Pushing to GitHub..." -ForegroundColor Gray
    git push -u origin main
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "✅ Code successfully pushed to GitHub!" -ForegroundColor Green
        
        Write-Host ""
        Write-Host "🌐 Step 3: Enable GitHub Pages" -ForegroundColor Yellow
        Write-Host "1. Go to your repository: https://github.com/moazmo/interactive-cv-website" -ForegroundColor White
        Write-Host "2. Click 'Settings' tab" -ForegroundColor White
        Write-Host "3. Scroll to 'Pages' in left sidebar" -ForegroundColor White
        Write-Host "4. Under 'Source': Deploy from a branch" -ForegroundColor White
        Write-Host "5. Select 'main' branch and '/ (root)' folder" -ForegroundColor White
        Write-Host "6. Click 'Save'" -ForegroundColor White
        Write-Host ""
        Write-Host "🎉 Your website will be live at:" -ForegroundColor Green
        Write-Host "https://moazmo.github.io/interactive-cv-website" -ForegroundColor Cyan
        
        # Open repository
        $openRepo = Read-Host "Would you like me to open your repository to enable Pages? (y/n)"
        if ($openRepo -eq "y" -or $openRepo -eq "Y") {
            Start-Process "https://github.com/moazmo/interactive-cv-website/settings/pages"
        }
        
    } else {
        Write-Host "❌ Error pushing to GitHub. Make sure the repository exists." -ForegroundColor Red
    }
} catch {
    Write-Host "❌ Error: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "📊 Repository Summary:" -ForegroundColor Cyan
Write-Host "• Repository: https://github.com/moazmo/interactive-cv-website" -ForegroundColor White
Write-Host "• Website URL: https://moazmo.github.io/interactive-cv-website" -ForegroundColor White
Write-Host "• Features: Contact modal, dark/light theme, responsive design" -ForegroundColor White
Write-Host ""
Write-Host "🎊 Congratulations! Your professional CV website is ready to impress!" -ForegroundColor Green
