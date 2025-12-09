import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Audi Seat Upholstery Dubai | Custom Audi Interior | Al Ettisam',
  description: 'Expert Audi car seat upholstery and interior customization in Dubai. Full interior restoration, leather seats, custom designs for all Audi models including A4, A6, Q5, Q7, R8.',
  keywords: 'Audi upholstery Dubai, Audi seat repair, Audi leather seats, Audi interior, Audi A4 seats, Audi Q5 interior, custom Audi seats',
  openGraph: {
    title: 'Audi Seat Upholstery Dubai | Custom Audi Interior | Al Ettisam',
    description: 'Expert Audi car seat upholstery and interior customization in Dubai. Full interior restoration, leather seats, custom designs for all Audi models.',
    url: 'https://www.alettisam.com/brands/audi',
    siteName: 'Al Ettisam Car Seats Upholstery',
    images: [{ url: '/audi.jpg', width: 1200, height: 630, alt: 'Audi Upholstery Dubai' }],
    locale: 'en_AE',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Audi Seat Upholstery Dubai | Al Ettisam',
    description: 'Expert Audi car seat upholstery and interior customization in Dubai',
    images: ['/audi.jpg'],
  },
};

export default function AudiPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/audi.jpg"
          alt="Audi Car Upholstery Dubai - Professional Interior Restoration"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-slide-up">Audi Upholstery Specialists</h1>
            <p className="text-lg sm:text-xl md:text-2xl animate-slide-up delay-200">Excellence in Every Stitch</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Premium Audi Interior Upholstery in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              At Al Ettisam, we specialize in restoring and customizing Audi interiors to match the brand's commitment to quality and innovation. Whether you own an A4, A6, Q5, Q7, or the legendary R8, our expert craftsmen deliver factory-quality results that preserve your Audi's luxury character.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 animate-slide-in-left">Complete Audi Interior Services:</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-gray-50 p-4 md:p-6 rounded-lg border-l-4 border-red-500 hover:shadow-xl transition-all duration-300 animate-zoom-in delay-100">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🪑 Seat Upholstery</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Front and rear seat restoration</li>
                  <li>✓ Leather repair and color restoration</li>
                  <li>✓ S-Line sport seat customization</li>
                  <li>✓ Heated seat integration</li>
                  <li>✓ Perforated leather replacement</li>
                  <li>✓ Nappa leather upgrades</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-blue-50 p-4 md:p-6 rounded-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 animate-zoom-in delay-200">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🎨 Custom Interiors</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Two-tone leather combinations</li>
                  <li>✓ Diamond quilting patterns</li>
                  <li>✓ Alcantara headliner installation</li>
                  <li>✓ RS badge embroidery</li>
                  <li>✓ Custom piping and stitching</li>
                  <li>✓ Carbon fiber accents</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-gray-50 p-4 md:p-6 rounded-lg border-l-4 border-gray-500 hover:shadow-xl transition-all duration-300 animate-zoom-in delay-300">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🚗 Door Panels & Trim</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Door panel re-upholstery</li>
                  <li>✓ Armrest repair and padding</li>
                  <li>✓ Door card trim restoration</li>
                  <li>✓ Ambient lighting integration</li>
                  <li>✓ Speaker grill replacement</li>
                  <li>✓ Soft-close mechanism preservation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-red-50 p-4 md:p-6 rounded-lg border-l-4 border-red-600 hover:shadow-xl transition-all duration-300 animate-zoom-in delay-400">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🎛️ Dashboard & Console</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Dashboard leather wrapping</li>
                  <li>✓ Center console restoration</li>
                  <li>✓ Gear selector leather renewal</li>
                  <li>✓ MMI control surround repair</li>
                  <li>✓ Air vent trim restoration</li>
                  <li>✓ Virtual cockpit protection</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900 animate-slide-in-right">Audi Models We Service:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in">
                <h5 className="font-bold text-gray-900">A1 / A3</h5>
                <p className="text-xs md:text-sm text-gray-600">Compact Luxury</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-100">
                <h5 className="font-bold text-sm md:text-base text-gray-900">A4 / A5</h5>
                <p className="text-xs md:text-sm text-gray-600">Executive Sedans</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-200">
                <h5 className="font-bold text-sm md:text-base text-gray-900">A6 / A7</h5>
                <p className="text-xs md:text-sm text-gray-600">Luxury Class</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-300">
                <h5 className="font-bold text-sm md:text-base text-gray-900">A8</h5>
                <p className="text-xs md:text-sm text-gray-600">Flagship Sedan</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-400">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Q2 / Q3</h5>
                <p className="text-xs md:text-sm text-gray-600">Compact SUVs</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-500">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Q5</h5>
                <p className="text-xs md:text-sm text-gray-600">Midsize SUV</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-600">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Q7 / Q8</h5>
                <p className="text-xs md:text-sm text-gray-600">Large SUVs</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-700">
                <h5 className="font-bold text-sm md:text-base text-gray-900">e-tron</h5>
                <p className="text-xs md:text-sm text-gray-600">Electric Series</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-800">
                <h5 className="font-bold text-sm md:text-base text-gray-900">RS3 / RS4</h5>
                <p className="text-xs md:text-sm text-gray-600">Performance</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-100">
                <h5 className="font-bold text-sm md:text-base text-gray-900">RS5 / RS6</h5>
                <p className="text-xs md:text-sm text-gray-600">Sport Models</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-200">
                <h5 className="font-bold text-sm md:text-base text-gray-900">RS7</h5>
                <p className="text-xs md:text-sm text-gray-600">Gran Turismo</p>
              </div>
              <div className="bg-gray-50 p-3 md:p-4 rounded-lg text-center border-2 border-gray-200 hover:border-red-500 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-bounce-in delay-300">
                <h5 className="font-bold text-sm md:text-base text-gray-900">R8</h5>
                <p className="text-xs md:text-sm text-gray-600">Supercar</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900 via-gray-900 to-black text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-4">Audi S-Line & RS Performance Interiors</h3>
              <p className="mb-4">
                Specializing in performance Audi models with sport seats, Alcantara inserts, and racing-inspired designs. We understand the unique requirements of S-Line and RS interiors.
              </p>
              <ul className="space-y-2">
                <li>✓ Sport seat bolster reinforcement</li>
                <li>✓ Alcantara steering wheel wrapping</li>
                <li>✓ Race-inspired quilting patterns</li>
                <li>✓ Custom RS badges and embroidery</li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Choose Al Ettisam for Your Audi?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-4xl mb-3">🏆</div>
                <h4 className="font-bold mb-2">Audi Expertise</h4>
                <p className="text-gray-700 text-sm">Deep understanding of Audi's design language and quality standards</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">🎯</div>
                <h4 className="font-bold mb-2">OEM Quality</h4>
                <p className="text-gray-700 text-sm">Factory-grade materials matching original specifications</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-3">⚡</div>
                <h4 className="font-bold mb-2">Fast Turnaround</h4>
                <p className="text-gray-700 text-sm">Efficient service without compromising quality</p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Authentic Audi Materials:</h3>
            <p className="text-gray-700 mb-4">We use premium automotive leather and materials that match or exceed Audi's standards:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>German-sourced Nappa leather</li>
              <li>Valcona leather alternatives</li>
              <li>Perforated Milano leather</li>
              <li>Alcantara for sport applications</li>
              <li>Original-spec thread and piping</li>
              <li>UV-resistant topcoat finishes</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 mb-8">
              <h3 className="text-xl font-bold mb-3 text-gray-900">💡 Maintaining Your Audi Interior</h3>
              <p className="text-gray-700 mb-3">Keep your restored Audi interior in perfect condition:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Use pH-neutral leather cleaners</li>
                <li>✓ Condition leather every 3-6 months</li>
                <li>✓ Protect from direct sunlight with window tint</li>
                <li>✓ Clean spills immediately to prevent staining</li>
                <li>✓ Use seat covers for daily protection</li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Transform Your Audi Interior Today</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Whether you need restoration, repair, or complete customization, Al Ettisam brings your Audi's interior back to showroom condition or beyond. Visit our Dubai workshop for a consultation.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:0554969599" className="bg-red-600 hover:bg-red-700 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 text-center text-lg">
                Call: 055 4969599
              </a>
              <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-full transition-colors duration-300 text-center text-lg">
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

