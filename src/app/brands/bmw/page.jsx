import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'BMW Seat Upholstery Dubai | Custom BMW Interior | Al Ettisam',
  description: 'Expert BMW car seat upholstery and interior customization in Dubai. Full interior restoration, leather seats, M Sport designs for all BMW models including 3, 5, 7 Series, X5, X7.',
  keywords: 'BMW upholstery Dubai, BMW seat repair, BMW leather seats, BMW interior, BMW M Sport seats, BMW X5 interior, custom BMW seats',
};

export default function BMWPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/bmw.png"
          alt="BMW Car Upholstery"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-slide-up">BMW Upholstery Specialists</h1>
            <p className="text-lg sm:text-xl md:text-2xl animate-slide-up delay-200">The Ultimate Driving Machine Deserves the Ultimate Interior</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Premium BMW Interior Upholstery in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Al Ettisam is Dubai's premier destination for BMW interior restoration and customization. We work on all BMW models from classic E30s to the latest G-Series, delivering craftsmanship that matches BMW's legendary engineering excellence.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Complete BMW Interior Services:</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🪑 Seat Upholstery & Restoration</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Sport seat restoration (all models)</li>
                  <li>✓ Dakota leather repair and dyeing</li>
                  <li>✓ Nappa leather upgrades</li>
                  <li>✓ Merino leather installation</li>
                  <li>✓ M Sport seat customization</li>
                  <li>✓ Perforated leather replacement</li>
                  <li>✓ Heated/ventilated seat integration</li>
                  <li>✓ Massage seat reupholstery</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🎨 M Performance Interiors</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ M Sport seat bolster reinforcement</li>
                  <li>✓ Alcantara & Nappa combinations</li>
                  <li>✓ M-stripe stitching patterns</li>
                  <li>✓ Carbon fiber seat backs</li>
                  <li>✓ Custom M badge embroidery</li>
                  <li>✓ Competition seat upgrades</li>
                  <li>✓ Racing harness installation</li>
                  <li>✓ Fire-resistant materials</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-6 rounded-lg border-l-4 border-blue-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🚗 Interior Trim & Panels</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Door panel reupholstery</li>
                  <li>✓ Shadowline trim restoration</li>
                  <li>✓ Wood trim refinishing</li>
                  <li>✓ Carbon fiber panel wrapping</li>
                  <li>✓ Armrest leather renewal</li>
                  <li>✓ iDrive controller surround</li>
                  <li>✓ Door pull strap replacement</li>
                  <li>✓ Ambient lighting integration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-6 rounded-lg border-l-4 border-gray-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🎛️ Dashboard & Console</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Dashboard leather wrapping</li>
                  <li>✓ Dashboard crack repair</li>
                  <li>✓ Center console restoration</li>
                  <li>✓ Gear selector leather renewal</li>
                  <li>✓ Alcantara dash conversion</li>
                  <li>✓ Cup holder restoration</li>
                  <li>✓ Air vent trim repair</li>
                  <li>✓ Display screen protection</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">BMW Models We Service:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">1 Series</h5>
                <p className="text-xs md:text-sm text-gray-600">F20, F40, G42</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">2 Series</h5>
                <p className="text-xs md:text-sm text-gray-600">F22, F23, G42</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">3 Series</h5>
                <p className="text-xs md:text-sm text-gray-600">E30-E90, F30, G20</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">4 Series</h5>
                <p className="text-xs md:text-sm text-gray-600">F32, G22, G82 M4</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">5 Series</h5>
                <p className="text-xs md:text-sm text-gray-600">E39-E60, F10, G30</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">6 Series</h5>
                <p className="text-xs md:text-sm text-gray-600">E63, F12, F13</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">7 Series</h5>
                <p className="text-xs md:text-sm text-gray-600">E38-E65, F01, G11</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">8 Series</h5>
                <p className="text-xs md:text-sm text-gray-600">G15, G16</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">X1 / X2</h5>
                <p className="text-xs md:text-sm text-gray-600">Compact SAVs</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">X3 / X4</h5>
                <p className="text-xs md:text-sm text-gray-600">Mid SAVs</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">X5 / X6</h5>
                <p className="text-xs md:text-sm text-gray-600">Large SAVs</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">X7</h5>
                <p className="text-xs md:text-sm text-gray-600">Flagship SAV</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">M Models</h5>
                <p className="text-xs md:text-sm text-gray-600">M2, M3, M4, M5</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">i Series</h5>
                <p className="text-xs md:text-sm text-gray-600">i3, i4, iX, i7</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Z Series</h5>
                <p className="text-xs md:text-sm text-gray-600">Z3, Z4 Roadsters</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Classics</h5>
                <p className="text-xs md:text-sm text-gray-600">E30, E36, E39</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-blue-900 text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🏁 M Performance & Motorsport Heritage</h3>
              <p className="mb-4">
                We specialize in authentic M Sport and M Performance interiors, understanding the unique requirements of BMW's legendary performance division. From classic M3s to the latest M Competition models.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">M Sport Package:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Sport seat restoration</li>
                    <li>✓ M-striped stitching</li>
                    <li>✓ Alcantara steering wheels</li>
                    <li>✓ M Sport door sills</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Competition Spec:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Carbon bucket seats</li>
                    <li>✓ Roll cage padding</li>
                    <li>✓ Fire-resistant materials</li>
                    <li>✓ Race harness installation</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Authentic BMW Materials:</h3>
            <p className="text-gray-700 mb-4">We source premium materials that match BMW's exacting standards:</p>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Dakota Leather</h4>
                <p className="text-sm text-gray-700">BMW's standard leather with natural grain</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Nappa Leather</h4>
                <p className="text-sm text-gray-700">Premium soft leather for luxury models</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Merino Leather</h4>
                <p className="text-sm text-gray-700">Extended leather package material</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Alcantara</h4>
                <p className="text-sm text-gray-700">Microfiber suede for sport applications</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Sensatec</h4>
                <p className="text-sm text-gray-700">BMW's premium synthetic leather</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Perforated Leather</h4>
                <p className="text-sm text-gray-700">For ventilated seat applications</p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Choose Al Ettisam for Your BMW?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-3">🔧</div>
                <h4 className="font-bold mb-2">BMW Specialists</h4>
                <p className="text-gray-700 text-sm">Extensive experience with all BMW generations and models</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-3">✨</div>
                <h4 className="font-bold mb-2">OEM Quality</h4>
                <p className="text-gray-700 text-sm">Factory-grade results using premium materials</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Fast Service</h4>
                <p className="text-gray-700 text-sm">Quick turnaround without quality compromise</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 BMW Interior Care Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Use BMW-approved leather cleaners</li>
                <li>✓ Condition leather quarterly</li>
                <li>✓ Protect from sun with ceramic tint</li>
                <li>✓ Clean Alcantara with soft brush</li>
                <li>✓ Avoid harsh chemicals on Sensatec</li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Restore Your BMW's Interior Excellence</h3>
            <p className="text-gray-700 mb-6 text-lg">
              From classic restorations to modern M Sport customizations, Al Ettisam delivers BMW interior services that honor the brand's sporting heritage and luxury reputation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:0554969599" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300 text-center text-lg">
                Call: 055 4969599
              </a>
              <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300 text-center text-lg">
                WhatsApp Us
              </a>
            </div>

            <div className="text-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


