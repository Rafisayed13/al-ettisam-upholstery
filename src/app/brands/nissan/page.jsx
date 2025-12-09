import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Nissan Seat Upholstery Dubai | Custom Nissan Interior | Al Ettisam',
  description: 'Professional Nissan car seat upholstery and interior services in Dubai. Full interior restoration for all Nissan models including Patrol, Pathfinder, X-Trail, GT-R, Altima.',
  keywords: 'Nissan upholstery Dubai, Nissan seat repair, Nissan Patrol interior, Nissan GT-R seats, Nissan X-Trail upholstery, custom Nissan seats',
};

export default function NissanPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/Nissan.png"
          alt="Nissan Car Upholstery"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-slide-up">Nissan Upholstery Specialists</h1>
            <p className="text-lg sm:text-xl md:text-2xl animate-slide-up delay-200">Innovation That Excites - Quality Interior Services</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Professional Nissan Interior Upholstery in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Al Ettisam provides expert interior upholstery services for all Nissan models. From the legendary Patrol and performance GT-R to family-friendly X-Trail and Altima, we deliver quality workmanship that enhances comfort and style.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Complete Nissan Interior Services:</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🪑 Seat Upholstery</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Front and rear seat restoration</li>
                  <li>✓ Leather seat repair and dyeing</li>
                  <li>✓ Fabric to leather conversion</li>
                  <li>✓ Sport seat customization</li>
                  <li>✓ Zero gravity seat reupholstery</li>
                  <li>✓ Heated seat integration</li>
                  <li>✓ Captain seat restoration (Patrol)</li>
                  <li>✓ Third-row seat recovery</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-lg border-l-4 border-gray-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🎨 Custom Interiors</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Two-tone leather combinations</li>
                  <li>✓ Diamond quilting patterns</li>
                  <li>✓ Custom stitching colors</li>
                  <li>✓ Logo embroidery (GT-R, Nismo)</li>
                  <li>✓ Alcantara accents</li>
                  <li>✓ Perforated leather inserts</li>
                  <li>✓ Color-matched piping</li>
                  <li>✓ Custom headrest designs</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🚗 Interior Components</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Door panel reupholstery</li>
                  <li>✓ Dashboard repair and wrapping</li>
                  <li>✓ Center console restoration</li>
                  <li>✓ Armrest padding replacement</li>
                  <li>✓ Gear selector leather renewal</li>
                  <li>✓ Steering wheel restoration</li>
                  <li>✓ Headliner replacement</li>
                  <li>✓ Sun visor repair</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-lg border-l-4 border-gray-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🏜️ Patrol Specialist Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Patrol captain seat luxury upgrade</li>
                  <li>✓ Desert-ready durable materials</li>
                  <li>✓ Easy-clean leather for off-road use</li>
                  <li>✓ Premium SUV interior packages</li>
                  <li>✓ Third-row comfort enhancement</li>
                  <li>✓ Rear entertainment system trim</li>
                  <li>✓ Cargo area leather lining</li>
                  <li>✓ All-weather floor protection</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Nissan Models We Service:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Patrol</h5>
                <p className="text-xs md:text-sm text-gray-600">Legend SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Pathfinder</h5>
                <p className="text-xs md:text-sm text-gray-600">Family SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">X-Trail</h5>
                <p className="text-xs md:text-sm text-gray-600">Compact SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Kicks</h5>
                <p className="text-xs md:text-sm text-gray-600">Urban Crossover</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Altima</h5>
                <p className="text-xs md:text-sm text-gray-600">Midsize Sedan</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Maxima</h5>
                <p className="text-xs md:text-sm text-gray-600">Sports Sedan</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Sentra</h5>
                <p className="text-xs md:text-sm text-gray-600">Compact Sedan</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">GT-R</h5>
                <p className="text-xs md:text-sm text-gray-600">Supercar</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">370Z / 400Z</h5>
                <p className="text-xs md:text-sm text-gray-600">Sports Cars</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Armada</h5>
                <p className="text-xs md:text-sm text-gray-600">Full-Size SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Murano</h5>
                <p className="text-xs md:text-sm text-gray-600">Luxury Crossover</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Leaf</h5>
                <p className="text-xs md:text-sm text-gray-600">Electric Vehicle</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-900 via-black to-red-900 text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🏁 Nissan GT-R & Nismo Performance Interiors</h3>
              <p className="mb-4">
                We specialize in GT-R and Nismo interiors, understanding the unique requirements of these legendary performance machines. From race-inspired Recaro seats to carbon fiber accents.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">GT-R Spec:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Recaro seat restoration</li>
                    <li>✓ Alcantara dashboard</li>
                    <li>✓ Carbon fiber door panels</li>
                    <li>✓ Race-spec materials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Nismo Edition:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Red accent stitching</li>
                    <li>✓ Nismo badge embroidery</li>
                    <li>✓ Racing seat upgrades</li>
                    <li>✓ Performance trim packages</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Popular Nissan Interior Upgrades:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Patrol VIP Package</h4>
                <p className="text-sm text-gray-700 mb-2">Transform your Patrol into a luxury lounge</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Premium leather captain seats</li>
                  <li>• Rear entertainment console</li>
                  <li>• Ambient lighting integration</li>
                  <li>• Custom wood grain accents</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Family SUV Package</h4>
                <p className="text-sm text-gray-700 mb-2">Durable and easy-clean materials</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Stain-resistant leather</li>
                  <li>• Reinforced seams</li>
                  <li>• Easy-clean surfaces</li>
                  <li>• All-weather protection</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Off-Road Ready</h4>
                <p className="text-sm text-gray-700 mb-2">Built for desert adventures</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Heavy-duty seat covers</li>
                  <li>• Sand-resistant materials</li>
                  <li>• Waterproof backing</li>
                  <li>• Reinforced stitching</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Performance Package</h4>
                <p className="text-sm text-gray-700 mb-2">For Z and GT-R owners</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Alcantara steering wheel</li>
                  <li>• Racing seat reupholstery</li>
                  <li>• Carbon fiber accents</li>
                  <li>• Custom embroidery</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Quality Materials for Dubai Climate:</h3>
            <p className="text-gray-700 mb-4">We use materials specifically chosen for the UAE's harsh climate:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>UV-resistant leather and thread</li>
              <li>Heat-reflective backing materials</li>
              <li>Fade-resistant dyes and coatings</li>
              <li>Breathable perforated leather options</li>
              <li>Stain-resistant treatments</li>
              <li>Sand-resistant finishes</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Choose Al Ettisam for Your Nissan?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-3">🔧</div>
                <h4 className="font-bold mb-2">Nissan Expertise</h4>
                <p className="text-gray-700 text-sm">Extensive experience with all Nissan models</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-3">💪</div>
                <h4 className="font-bold mb-2">Durable Quality</h4>
                <p className="text-gray-700 text-sm">Materials built for UAE conditions</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="font-bold mb-2">Fair Pricing</h4>
                <p className="text-gray-700 text-sm">Quality work at competitive rates</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 Nissan Interior Care Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Clean leather monthly with pH-neutral cleaner</li>
                <li>✓ Use sunshades to protect from UV damage</li>
                <li>✓ Condition leather every 3 months</li>
                <li>✓ Vacuum regularly to remove sand and debris</li>
                <li>✓ Treat spills immediately</li>
                <li>✓ Consider ceramic window tint for heat protection</li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Upgrade Your Nissan Interior Today</h3>
            <p className="text-gray-700 mb-6 text-lg">
              From rugged Patrol to performance GT-R, Al Ettisam delivers quality Nissan interior services throughout Dubai. Contact us for a consultation and quote.
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


