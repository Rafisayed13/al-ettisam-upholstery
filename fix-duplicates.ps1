# Fix duplicate transition classes

$files = Get-ChildItem -Path "src\app\brands\*\page.jsx" -Recurse
$files += Get-ChildItem -Path "src\app\services\*\page.jsx" -Recurse

foreach ($file in $files) {
    $content = Get-Content $file.FullName -Raw
    
    # Remove duplicate transition classes
    $content = $content -replace 'transition-all duration-300 transition-colors duration-300', 'transition-all duration-300'
    $content = $content -replace 'transition-colors duration-300 duration-300', 'transition-all duration-300'
    
    Set-Content -Path $file.FullName -Value $content
    Write-Host "Fixed: $($file.FullName)" -ForegroundColor Green
}

Write-Host "`nAll duplicate classes removed!" -ForegroundColor Cyan
