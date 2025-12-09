import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Ferrari Upholstery Dubai | Exotic Ferrari Interior | Al Ettisam',
  description: 'Exclusive Ferrari interior upholstery and restoration in Dubai. Expert craftsmanship for all Ferrari models including 488, F8, SF90, Roma, Portofino. Prancing Horse excellence.',
  keywords: 'Ferrari upholstery Dubai, Ferrari interior, Ferrari seat repair, exotic car upholstery, Ferrari 488 seats, Ferrari restoration, luxury car interior',
};

export default function FerrariPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/ferrari.jpg"
          alt="Ferrari Upholstery"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-slide-up">Ferrari Upholstery Specialists</h1>
            <p className="text-lg sm:text-xl md:text-2xl animate-slide-up delay-200">Passion & Performance - Italian Craftsmanship Excellence</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Exotic Ferrari Interior Services in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Al Ettisam provides specialized interior services for Ferrari owners who demand perfection. Our master craftsmen understand the passion behind the Prancing Horse, delivering Italian-inspired quality that honors Ferrari's legendary heritage and racing pedigree.
            </p>

            <div className="bg-gradient-to-r from-red-600 via-yellow-500 to-red-600 text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🏁 Racing Heritage, Luxury Interior</h3>
              <p className="mb-4">
                Every Ferrari interior combines racing DNA with Italian luxury. From classic Testarossas to modern SF90s, we preserve the spirit of Maranello while providing contemporary comfort and style.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Complete Ferrari Interior Services:</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🏎️ Racing Seat Restoration</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Carbon fiber racing seat recovery</li>
                  <li>✓ Leather and Alcantara combinations</li>
                  <li>✓ Cavallino Rampante embroidery</li>
                  <li>✓ Racing harness integration</li>
                  <li>✓ Sport bucket seat restoration</li>
                  <li>✓ Comfort seat reupholstery</li>
                  <li>✓ Scuderia shield embroidery</li>
                  <li>✓ Custom racing stripes</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🎨 Italian Luxury Trim</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Full leather dashboard wrapping</li>
                  <li>✓ Carbon fiber interior accents</li>
                  <li>✓ Alcantara headliner installation</li>
                  <li>✓ Door panel leather restoration</li>
                  <li>✓ Center console refinishing</li>
                  <li>✓ Steering wheel re-trimming</li>
                  <li>✓ Gear selector leather renewal</li>
                  <li>✓ Pillar trim upholstery</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-yellow-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">⚡ Performance Interiors</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Pista racing seat upgrades</li>
                  <li>✓ Challenge Stradale interior</li>
                  <li>✓ Speciale lightweight materials</li>
                  <li>✓ Track-focused configurations</li>
                  <li>✓ Fire-resistant fabrics</li>
                  <li>✓ Roll cage padding</li>
                  <li>✓ Custom race livery stitching</li>
                  <li>✓ Lightweight door panels</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-red-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🔧 Classic Ferrari Restoration</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Period-correct materials sourcing</li>
                  <li>✓ Vintage leather rehabilitation</li>
                  <li>✓ Original pattern replication</li>
                  <li>✓ Testarossa interior restoration</li>
                  <li>✓ Classic color combinations</li>
                  <li>✓ Heritage trim restoration</li>
                  <li>✓ Concours-level finishing</li>
                  <li>✓ Authentication documentation</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Ferrari Models We Service:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">SF90 Stradale</h5>
                <p className="text-xs md:text-sm text-gray-600">Hybrid Supercar</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">F8 Tributo</h5>
                <p className="text-xs md:text-sm text-gray-600">V8 Mid-Engine</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">296 GTB</h5>
                <p className="text-xs md:text-sm text-gray-600">Hybrid V6</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Roma</h5>
                <p className="text-xs md:text-sm text-gray-600">Grand Tourer</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Portofino</h5>
                <p className="text-xs md:text-sm text-gray-600">Convertible GT</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">812 Superfast</h5>
                <p className="text-xs md:text-sm text-gray-600">V12 Grand Tourer</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">488 GTB/Spider</h5>
                <p className="text-xs md:text-sm text-gray-600">Previous Gen</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">458 Italia</h5>
                <p className="text-xs md:text-sm text-gray-600">Naturally Aspirated</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">California</h5>
                <p className="text-xs md:text-sm text-gray-600">Convertible GT</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Purosangue</h5>
                <p className="text-xs md:text-sm text-gray-600">First SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">LaFerrari</h5>
                <p className="text-xs md:text-sm text-gray-600">Hypercar</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">F12 Berlinetta</h5>
                <p className="text-xs md:text-sm text-gray-600">V12 Berlinetta</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">599 GTB</h5>
                <p className="text-xs md:text-sm text-gray-600">Grand Tourer</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Enzo</h5>
                <p className="text-xs md:text-sm text-gray-600">Legendary</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">360 Modena</h5>
                <p className="text-xs md:text-sm text-gray-600">Classic Modern</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Testarossa</h5>
                <p className="text-xs md:text-sm text-gray-600">Icon Restoration</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-black via-red-900 to-black text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🏆 Special Edition & Limited Models</h3>
              <p className="mb-4">
                We specialize in rare Ferrari models and special editions requiring period-specific materials and authentic craftsmanship.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-bold mb-2">Pista Series:</h4>
                  <ul className="space-y-1">
                    <li>• 488 Pista</li>
                    <li>• F8 Tributo</li>
                    <li>• Track-spec interiors</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Speciale Editions:</h4>
                  <ul className="space-y-1">
                    <li>• 458 Speciale</li>
                    <li>• 360 Challenge Stradale</li>
                    <li>• Lightweight materials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Aperta Models:</h4>
                  <ul className="space-y-1">
                    <li>• 458 Speciale Aperta</li>
                    <li>• LaFerrari Aperta</li>
                    <li>• Convertible specialists</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Authentic Ferrari Materials:</h3>
            <p className="text-gray-700 mb-4">We source materials that match Maranello's exacting standards:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold mb-2 text-lg">🐂 Premium Leathers</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Frau leather - Ferrari's traditional choice</li>
                  <li>• Full-grain Italian leather</li>
                  <li>• Semi-aniline finishes</li>
                  <li>• Perforated leather for ventilation</li>
                  <li>• Two-tone leather combinations</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-bold mb-2 text-lg">🏁 Performance Materials</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Alcantara for racing applications</li>
                  <li>• Carbon fiber weave accents</li>
                  <li>• Nomex fire-resistant fabrics</li>
                  <li>• Lightweight foam alternatives</li>
                  <li>• Racing-grade Cordura</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Ferrari Color Combinations:</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Rosso Corsa</h4>
                <p className="text-sm">With Nero or Crema</p>
              </div>
              <div className="bg-black text-white p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Nero</h4>
                <p className="text-sm">With Rosso accents</p>
              </div>
              <div className="bg-yellow-400 text-black p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Giallo Modena</h4>
                <p className="text-sm">With Nero interior</p>
              </div>
              <div className="bg-blue-900 text-white p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Blu Tour de France</h4>
                <p className="text-sm">With Cuoio</p>
              </div>
              <div className="bg-gray-700 text-white p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Grigio Silverstone</h4>
                <p className="text-sm">With Rosso interior</p>
              </div>
              <div className="bg-amber-100 text-black p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Beige Tradizione</h4>
                <p className="text-sm">Classic elegance</p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Choose Al Ettisam for Your Ferrari?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-5xl mb-3">🏎️</div>
                <h4 className="font-bold mb-2 text-lg">Exotic Car Specialists</h4>
                <p className="text-gray-700 text-sm">Dedicated experience with Italian supercars</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-5xl mb-3">🇮🇹</div>
                <h4 className="font-bold mb-2 text-lg">Italian Quality</h4>
                <p className="text-gray-700 text-sm">Authentic materials and techniques</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-5xl mb-3">⚡</div>
                <h4 className="font-bold mb-2 text-lg">Racing Heritage</h4>
                <p className="text-gray-700 text-sm">Understanding performance requirements</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 Ferrari Interior Care</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Use only premium Italian leather care products</li>
                <li>✓ Condition leather monthly in Dubai's climate</li>
                <li>✓ Protect carbon fiber from UV exposure</li>
                <li>✓ Clean Alcantara with proper microfiber techniques</li>
                <li>✓ Garage storage essential for preservation</li>
                <li>✓ Professional detailing every 2-3 months</li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Restore Your Ferrari's Interior</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Your Ferrari represents Italian passion and performance. Contact Al Ettisam to discuss your interior project. We serve discerning Ferrari owners throughout Dubai and the UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:0554969599" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300 text-center text-lg">
                Call: 055 4969599
              </a>
              <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300 text-center text-lg">
                WhatsApp Us
              </a>
            </div>

            <div className="text-center">
              <Link href="/" className="text-red-600 hover:text-red-800 font-semibold text-lg">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


