import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Porsche Upholstery Dubai | Custom Porsche Interior | Al Ettisam',
  description: 'Expert Porsche interior upholstery in Dubai. Specialized services for all Porsche models including 911, Cayenne, Panamera, Macan, Taycan. Stuttgart quality craftsmanship.',
  keywords: 'Porsche upholstery Dubai, Porsche 911 interior, Porsche Cayenne seats, Porsche interior restoration, custom Porsche seats',
};

export default function PorschePage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/por.png"
          alt="Porsche Upholstery"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-slide-up">Porsche Upholstery Specialists</h1>
            <p className="text-lg sm:text-xl md:text-2xl animate-slide-up delay-200">There Is No Substitute - Stuttgart Excellence</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Premium Porsche Interior Services in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Al Ettisam brings German precision to Porsche interior restoration and customization. From classic air-cooled 911s to modern Taycans, our craftsmen deliver Stuttgart-quality results that honor Porsche's legendary engineering heritage and sports car DNA.
            </p>

            <div className="bg-gradient-to-r from-black via-yellow-500 to-red-600 text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🏁 Racing Heritage Meets Luxury</h3>
              <p className="mb-4">
                Every Porsche interior balances racing performance with refined luxury. We understand this unique combination, delivering craftsmanship that respects both the motorsport legacy and daily usability.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Complete Porsche Interior Services:</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-gradient-to-br from-yellow-50 to-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🏎️ Sport Seat Restoration</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Sport bucket seat reupholstery</li>
                  <li>✓ 18-way adjustable seat recovery</li>
                  <li>✓ Racing seat restoration</li>
                  <li>✓ Adaptive sport seat refurbishment</li>
                  <li>✓ Perforated leather replacement</li>
                  <li>✓ Alcantara and leather combinations</li>
                  <li>✓ Porsche crest embroidery</li>
                  <li>✓ Custom color combinations</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🎨 Interior Trim & Panels</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Dashboard leather wrapping</li>
                  <li>✓ Door panel reupholstery</li>
                  <li>✓ Center console restoration</li>
                  <li>✓ PCM surround refinishing</li>
                  <li>✓ Gear selector leather renewal</li>
                  <li>✓ Steering wheel re-trimming</li>
                  <li>✓ Carbon fiber accent installation</li>
                  <li>✓ Wood trim restoration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">⚡ GT & Performance Models</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ GT3/GT4 racing seat restoration</li>
                  <li>✓ GT2 RS lightweight interior</li>
                  <li>✓ Turbo S sport seat refurbishment</li>
                  <li>✓ GTS interior packages</li>
                  <li>✓ Roll cage padding</li>
                  <li>✓ Racing harness integration</li>
                  <li>✓ Alcantara dashboard conversion</li>
                  <li>✓ Fire-resistant materials</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🔧 Classic Porsche Restoration</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Air-cooled 911 restoration</li>
                  <li>✓ Period-correct materials</li>
                  <li>✓ Original pattern replication</li>
                  <li>✓ Vintage leather rehabilitation</li>
                  <li>✓ Classic color combinations</li>
                  <li>✓ Houndstooth fabric restoration</li>
                  <li>✓ Concours-level finishing</li>
                  <li>✓ Certificate of authenticity</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Porsche Models We Service:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">911</h5>
                <p className="text-xs md:text-sm text-gray-600">Iconic Sports Car</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">718 Cayman</h5>
                <p className="text-xs md:text-sm text-gray-600">Mid-Engine Coupe</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">718 Boxster</h5>
                <p className="text-xs md:text-sm text-gray-600">Roadster</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Cayenne</h5>
                <p className="text-xs md:text-sm text-gray-600">Luxury SUV</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Macan</h5>
                <p className="text-xs md:text-sm text-gray-600">Compact SUV</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Panamera</h5>
                <p className="text-xs md:text-sm text-gray-600">Grand Tourer</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Taycan</h5>
                <p className="text-xs md:text-sm text-gray-600">Electric Sports</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">GT3 / GT3 RS</h5>
                <p className="text-xs md:text-sm text-gray-600">Track Focused</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">GT2 RS</h5>
                <p className="text-xs md:text-sm text-gray-600">Ultimate 911</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">GT4</h5>
                <p className="text-xs md:text-sm text-gray-600">Cayman Track</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Turbo / Turbo S</h5>
                <p className="text-xs md:text-sm text-gray-600">Performance</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">GTS Models</h5>
                <p className="text-xs md:text-sm text-gray-600">Sport Package</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Carrera</h5>
                <p className="text-xs md:text-sm text-gray-600">911 Variants</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Targa</h5>
                <p className="text-xs md:text-sm text-gray-600">Open-Top 911</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Classic 911</h5>
                <p className="text-xs md:text-sm text-gray-600">Air-Cooled Era</p>
              </div>
              <div className="bg-yellow-50 p-3 md:p-4 rounded-lg text-center border-2 border-yellow-200 hover:border-yellow-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">928 / 944</h5>
                <p className="text-xs md:text-sm text-gray-600">Heritage Models</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-yellow-500 via-black to-red-600 text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🏁 Motorsport Heritage Services</h3>
              <p className="mb-4">
                Porsche's racing DNA runs through every model. We specialize in GT and motorsport-inspired interiors that combine track performance with everyday usability.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-bold mb-2">GT Models:</h4>
                  <ul className="space-y-1">
                    <li>• GT3 carbon buckets</li>
                    <li>• GT2 RS lightweight</li>
                    <li>• GT4 racing seats</li>
                    <li>• Roll cage padding</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Club Sport:</h4>
                  <ul className="space-y-1">
                    <li>• Race seat restoration</li>
                    <li>• 6-point harness install</li>
                    <li>• Fire suppression trim</li>
                    <li>• Nomex materials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Heritage Racing:</h4>
                  <ul className="space-y-1">
                    <li>• Classic race livery</li>
                    <li>• Period materials</li>
                    <li>• Martini striping</li>
                    <li>• Gulf color schemes</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Authentic Porsche Materials:</h3>
            <p className="text-gray-700 mb-4">We source materials matching Porsche's Stuttgart standards:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-bold mb-2 text-lg">🐂 Premium Leathers</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Full natural leather - Standard option</li>
                  <li>• Semi-aniline leather - Luxury choice</li>
                  <li>• Club leather - Sport Package</li>
                  <li>• Exclusive leather - Personalization</li>
                  <li>• Two-tone combinations</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="font-bold mb-2 text-lg">🏁 Performance Materials</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Alcantara Race-Tex for GT models</li>
                  <li>• Carbon weave accents</li>
                  <li>• Houndstooth fabric (classic)</li>
                  <li>• Leather/Alcantara combinations</li>
                  <li>• Fire-resistant Nomex</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Classic Porsche Colors:</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-black text-white p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Black</h4>
                <p className="text-sm">With Guards Red accents</p>
              </div>
              <div className="bg-red-600 text-white p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Guards Red</h4>
                <p className="text-sm">With black interior</p>
              </div>
              <div className="bg-gray-600 text-white p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Graphite Gray</h4>
                <p className="text-sm">Modern sophistication</p>
              </div>
              <div className="bg-yellow-400 text-black p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Racing Yellow</h4>
                <p className="text-sm">Track heritage</p>
              </div>
              <div className="bg-green-700 text-white p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">British Racing Green</h4>
                <p className="text-sm">Classic elegance</p>
              </div>
              <div className="bg-amber-100 text-black p-6 rounded-lg text-center">
                <h4 className="font-bold mb-2">Cognac</h4>
                <p className="text-sm">Timeless luxury</p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Choose Al Ettisam for Your Porsche?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="text-5xl mb-3">🏎️</div>
                <h4 className="font-bold mb-2 text-lg">Sports Car Specialists</h4>
                <p className="text-gray-700 text-sm">Expert knowledge of Porsche engineering</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="text-5xl mb-3">🇩🇪</div>
                <h4 className="font-bold mb-2 text-lg">German Quality</h4>
                <p className="text-gray-700 text-sm">Stuttgart-level precision and craftsmanship</p>
              </div>
              <div className="text-center p-6 bg-yellow-50 rounded-lg">
                <div className="text-5xl mb-3">🏁</div>
                <h4 className="font-bold mb-2 text-lg">Racing Heritage</h4>
                <p className="text-gray-700 text-sm">Understanding motorsport requirements</p>
              </div>
            </div>

            <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 Porsche Interior Care</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Use Porsche-approved leather care products</li>
                <li>✓ Condition leather quarterly</li>
                <li>✓ Clean Alcantara with soft brush only</li>
                <li>✓ Protect from UV with ceramic tint</li>
                <li>✓ Immediate spill treatment essential</li>
                <li>✓ Professional detailing every 3 months</li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Restore Your Porsche's Interior Excellence</h3>
            <p className="text-gray-700 mb-6 text-lg">
              From classic air-cooled 911s to modern Taycans, Al Ettisam delivers Porsche interior services that honor Stuttgart's legendary standards. Contact us for a consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:0554969599" className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300 text-center text-lg">
                Call: 055 4969599
              </a>
              <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300 text-center text-lg">
                WhatsApp Us
              </a>
            </div>

            <div className="text-center">
              <Link href="/" className="text-yellow-600 hover:text-yellow-800 font-semibold text-lg">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

