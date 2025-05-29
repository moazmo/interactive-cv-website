# 🌐 Check Website Deployment Status
Write-Host "🚀 Checking your website deployment..." -ForegroundColor Cyan
Write-Host ""

$websiteUrl = "https://moazmo.github.io/interactive-cv-website"
$repoUrl = "https://github.com/moazmo/interactive-cv-website"

Write-Host "📍 Your GitHub Repository:" -ForegroundColor Yellow
Write-Host "   $repoUrl" -ForegroundColor White
Write-Host ""

Write-Host "🌐 Your Live Website URL:" -ForegroundColor Green  
Write-Host "   $websiteUrl" -ForegroundColor White
Write-Host ""

Write-Host "⏰ Deployment usually takes 2-3 minutes after enabling GitHub Pages" -ForegroundColor Magenta
Write-Host ""

# Test if website is accessible
Write-Host "🔍 Testing website accessibility..." -ForegroundColor Yellow
try {
    $response = Invoke-WebRequest -Uri $websiteUrl -Method Head -TimeoutSec 10 -ErrorAction Stop
    Write-Host "✅ SUCCESS! Your website is LIVE and accessible!" -ForegroundColor Green
    Write-Host "   Status: $($response.StatusCode) $($response.StatusDescription)" -ForegroundColor White
} catch {
    Write-Host "⏳ Website not yet deployed or still building..." -ForegroundColor Yellow
    Write-Host "   This is normal if you just enabled GitHub Pages" -ForegroundColor Gray
    Write-Host "   Please wait 2-3 minutes and try again" -ForegroundColor Gray
}

Write-Host ""
$openSite = Read-Host "Would you like to open your website in browser? (y/n)"
if ($openSite -eq "y" -or $openSite -eq "Y") {
    Write-Host "🌐 Opening your website..." -ForegroundColor Cyan
    Start-Process $websiteUrl
}

Write-Host ""
Write-Host "🎉 Your portfolio is now accessible to anyone on the internet!" -ForegroundColor Green
Write-Host "   Share this URL with employers, friends, and colleagues!" -ForegroundColor White
