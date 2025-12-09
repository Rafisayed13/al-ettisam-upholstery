# Script to add animations and responsive improvements to all service pages

$servicePages = @(
    "src\app\services\customised-leather-seats\page.jsx",
    "src\app\services\repair-restoration\page.jsx",
    "src\app\services\steering-wheel-customization\page.jsx",
    "src\app\services\seat-covers\page.jsx",
    "src\app\services\dashboard\page.jsx",
    "src\app\services\door-panel\page.jsx",
    "src\app\services\carpets\page.jsx",
    "src\app\services\seat-belts\page.jsx",
    "src\app\services\boat-yacht\page.jsx"
)

foreach ($page in $servicePages) {
    $content = Get-Content $page -Raw
    
    # Add animation to hero section
    $content = $content -replace 'className="relative h-\[50vh\] md:h-\[60vh\]"', 'className="relative h-[50vh] md:h-[60vh] overflow-hidden"'
    $content = $content -replace 'className="text-center text-white px-4"', 'className="text-center text-white px-4 animate-fade-in"'
    $content = $content -replace 'className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4"', 'className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-slide-up"'
    $content = $content -replace 'className="text-xl md:text-2xl"', 'className="text-lg sm:text-xl md:text-2xl animate-slide-up delay-200"'
    
    # Add animations to service cards
    $content = $content -replace 'className="bg-gradient-to-br from-([^"]+) p-6 rounded-lg"', 'className="bg-gradient-to-br from-$1 p-4 md:p-6 rounded-lg border-l-4 hover:shadow-xl transition-all duration-300 animate-zoom-in"'
    $content = $content -replace 'className="text-xl font-bold mb-3', 'className="text-lg md:text-xl font-bold mb-3'
    
    # Improve grid responsiveness
    $content = $content -replace 'className="grid md:grid-cols-2 gap-6 mb-8"', 'className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8"'
    
    # Add animations to feature boxes
    $content = $content -replace 'className="bg-gradient-to-r from-([^"]+) text-white p-8 rounded-lg mb-8"', 'className="bg-gradient-to-r from-$1 text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300"'
    $content = $content -replace 'className="bg-([^"]+) border-l-4 border-([^"]+) p-6 mb-8"', 'className="bg-$1 border-l-4 border-$2 p-4 md:p-6 mb-8 hover:shadow-lg transition-shadow duration-300 animate-zoom-in"'
    
    # Improve button responsiveness
    $content = $content -replace 'className="bg-([^"]+) hover:bg-([^"]+) text-([^"]+) font-bold py-4 px-8 rounded-full', 'className="bg-$1 hover:bg-$2 text-$3 font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300'
    
    # Add responsiveness to images
    $content = $content -replace 'className="text-center p-6 bg-([^"]+) rounded-lg"', 'className="text-center p-4 md:p-6 bg-$1 rounded-lg hover:shadow-lg transition-shadow duration-300 animate-zoom-in"'
    
    # Save the updated content
    Set-Content -Path $page -Value $content
    
    Write-Host "Updated: $page" -ForegroundColor Green
}

Write-Host "`nAll service pages updated successfully!" -ForegroundColor Cyan
