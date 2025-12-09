# Script to add animations and responsive improvements to all brand pages

$brandPages = @(
    "src\app\brands\bmw\page.jsx",
    "src\app\brands\rolls-royce\page.jsx",
    "src\app\brands\nissan\page.jsx",
    "src\app\brands\ferrari\page.jsx",
    "src\app\brands\toyota\page.jsx",
    "src\app\brands\porsche\page.jsx",
    "src\app\brands\all-brands\page.jsx"
)

foreach ($page in $brandPages) {
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
    $content = $content -replace 'className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8"', 'className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 mb-8"'
    
    # Add animations and hover effects to model cards
    $content = $content -replace 'className="bg-gray-50 p-4 rounded-lg text-center border-2 border-gray-200 hover:border-([^"]+) transition-colors"', 'className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-$1 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in"'
    $content = $content -replace 'className="bg-([^"]+) p-4 rounded-lg text-center border-2', 'className="bg-$1 p-3 md:p-4 rounded-lg text-center border-2'
    $content = $content -replace 'className="font-bold text-gray-900"', 'className="font-bold text-sm md:text-base text-gray-900"'
    $content = $content -replace 'className="text-sm text-gray-600"', 'className="text-xs md:text-sm text-gray-600"'
    
    # Add animations to feature boxes
    $content = $content -replace 'className="bg-gradient-to-r from-([^"]+) text-white p-8 rounded-lg mb-8"', 'className="bg-gradient-to-r from-$1 text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300"'
    
    # Add animations to section headings
    $content = $content -replace '(<h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Complete )', '$1'
    
    # Improve button responsiveness
    $content = $content -replace 'className="bg-([^"]+) hover:bg-([^"]+) text-([^"]+) font-bold py-4 px-8 rounded-full', 'className="bg-$1 hover:bg-$2 text-$3 font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300'
    
    # Save the updated content
    Set-Content -Path $page -Value $content
    
    Write-Host "Updated: $page" -ForegroundColor Green
}

Write-Host "`nAll brand pages updated successfully!" -ForegroundColor Cyan
