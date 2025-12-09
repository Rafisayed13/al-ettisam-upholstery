import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Toyota Upholstery Dubai | Toyota Seat Repair & Interior | Al Ettisam',
  description: 'Professional Toyota car seat upholstery in Dubai. Expert interior services for all Toyota models including Land Cruiser, Camry, Corolla, RAV4, Prado. Quality & reliability.',
  keywords: 'Toyota upholstery Dubai, Toyota Land Cruiser interior, Toyota seat repair, Toyota Camry upholstery, Toyota interior restoration',
};

export default function ToyotaPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/Toyota.jpg"
          alt="Toyota Upholstery"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-slide-up">Toyota Upholstery Specialists</h1>
            <p className="text-lg sm:text-xl md:text-2xl animate-slide-up delay-200">Built to Last - Quality Interior Solutions</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Professional Toyota Interior Services in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              Al Ettisam provides comprehensive interior upholstery services for all Toyota models. From the legendary Land Cruiser to reliable Camry and Corolla, we deliver quality workmanship that matches Toyota's reputation for durability and reliability.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Complete Toyota Interior Services:</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-gradient-to-br from-red-50 to-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🪑 Seat Upholstery</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Front and rear seat restoration</li>
                  <li>✓ Fabric to leather conversion</li>
                  <li>✓ Leather repair and color restoration</li>
                  <li>✓ Sport seat customization</li>
                  <li>✓ Heated seat reupholstery</li>
                  <li>✓ Captain seat installation (Land Cruiser)</li>
                  <li>✓ Third-row seat recovery</li>
                  <li>✓ Heavy-duty truck seat restoration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-lg border-l-4 border-gray-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🎨 Interior Upgrades</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Premium leather packages</li>
                  <li>✓ Two-tone leather combinations</li>
                  <li>✓ Custom stitching patterns</li>
                  <li>✓ Diamond quilting designs</li>
                  <li>✓ TRD logo embroidery</li>
                  <li>✓ Perforated leather inserts</li>
                  <li>✓ Color-matched piping</li>
                  <li>✓ VIP luxury upgrades</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-red-50 to-gray-50 p-6 rounded-lg border-l-4 border-red-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🚗 Interior Components</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Door panel reupholstery</li>
                  <li>✓ Dashboard repair and wrapping</li>
                  <li>✓ Center console restoration</li>
                  <li>✓ Armrest padding replacement</li>
                  <li>✓ Steering wheel leather renewal</li>
                  <li>✓ Gear selector wrapping</li>
                  <li>✓ Headliner replacement</li>
                  <li>✓ Carpet and floor mat replacement</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-red-50 p-6 rounded-lg border-l-4 border-gray-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🏜️ Land Cruiser VIP Packages</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Premium captain seat installation</li>
                  <li>✓ Luxury VIP lounge conversion</li>
                  <li>✓ Rear entertainment system trim</li>
                  <li>✓ Desert-ready durable materials</li>
                  <li>✓ Climate-controlled seat leather</li>
                  <li>✓ Wood grain accent installation</li>
                  <li>✓ Ambient lighting integration</li>
                  <li>✓ Custom storage solutions</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Toyota Models We Service:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Land Cruiser</h5>
                <p className="text-xs md:text-sm text-gray-600">Legendary SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Prado</h5>
                <p className="text-xs md:text-sm text-gray-600">Mid-Size SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Fortuner</h5>
                <p className="text-xs md:text-sm text-gray-600">Popular SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">RAV4</h5>
                <p className="text-xs md:text-sm text-gray-600">Compact SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Highlander</h5>
                <p className="text-xs md:text-sm text-gray-600">Family SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Camry</h5>
                <p className="text-xs md:text-sm text-gray-600">Midsize Sedan</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Corolla</h5>
                <p className="text-xs md:text-sm text-gray-600">Compact Sedan</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Avalon</h5>
                <p className="text-xs md:text-sm text-gray-600">Full-Size Sedan</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Yaris</h5>
                <p className="text-xs md:text-sm text-gray-600">Subcompact</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Hilux</h5>
                <p className="text-xs md:text-sm text-gray-600">Pickup Truck</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Supra</h5>
                <p className="text-xs md:text-sm text-gray-600">Sports Car</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">86</h5>
                <p className="text-xs md:text-sm text-gray-600">Sports Coupe</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Sequoia</h5>
                <p className="text-xs md:text-sm text-gray-600">Full-Size SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">4Runner</h5>
                <p className="text-xs md:text-sm text-gray-600">Off-Road SUV</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">C-HR</h5>
                <p className="text-xs md:text-sm text-gray-600">Crossover</p>
              </div>
              <div className="bg-red-50 p-3 md:p-4 rounded-lg text-center border-2 border-red-200 hover:border-red-600 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Prius</h5>
                <p className="text-xs md:text-sm text-gray-600">Hybrid</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-red-600 via-gray-900 to-red-600 text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🏜️ Land Cruiser: Desert King Specialist Services</h3>
              <p className="mb-4">
                The Toyota Land Cruiser is iconic in the UAE. We offer specialized VIP interior packages that transform your Land Cruiser into a luxury lounge while maintaining its legendary off-road capability.
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold mb-2">VIP Package Includes:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ Premium captain seats with massage</li>
                    <li>✓ Full leather interior upgrade</li>
                    <li>✓ Wood grain trim accents</li>
                    <li>✓ Custom ambient lighting</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Desert Ready:</h4>
                  <ul className="space-y-1 text-sm">
                    <li>✓ UV-resistant materials</li>
                    <li>✓ Sand-proof finishes</li>
                    <li>✓ Easy-clean surfaces</li>
                    <li>✓ Heat-resistant leather</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Popular Toyota Interior Packages:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Family Comfort Package</h4>
                <p className="text-sm text-gray-700 mb-2">Perfect for Camry, Corolla, RAV4</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Durable stain-resistant leather</li>
                  <li>• Easy-clean surfaces</li>
                  <li>• Reinforced seams</li>
                  <li>• Child-friendly materials</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Luxury Upgrade Package</h4>
                <p className="text-sm text-gray-700 mb-2">Premium Land Cruiser, Camry</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Premium Nappa leather</li>
                  <li>• Diamond quilting patterns</li>
                  <li>• Contrast stitching</li>
                  <li>• Wood grain accents</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Off-Road Ready</h4>
                <p className="text-sm text-gray-700 mb-2">Land Cruiser, Prado, Hilux</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Heavy-duty materials</li>
                  <li>• Waterproof backing</li>
                  <li>• Reinforced stitching</li>
                  <li>• TRD badge embroidery</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold mb-2">Sport Package</h4>
                <p className="text-sm text-gray-700 mb-2">Supra, 86, TRD models</p>
                <ul className="text-xs text-gray-600 space-y-1">
                  <li>• Alcantara inserts</li>
                  <li>• Racing seat bolsters</li>
                  <li>• Red accent stitching</li>
                  <li>• Carbon fiber accents</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Dubai-Tough Materials:</h3>
            <p className="text-gray-700 mb-4">Materials specifically chosen for UAE's demanding climate:</p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>UV-resistant leather treatments</li>
              <li>Heat-reflective backing materials</li>
              <li>Fade-resistant dyes</li>
              <li>Sand-resistant finishes</li>
              <li>Breathable perforated options</li>
              <li>Stain-resistant coatings</li>
              <li>Reinforced for daily use</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Choose Al Ettisam for Your Toyota?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-3">🔧</div>
                <h4 className="font-bold mb-2">Toyota Specialists</h4>
                <p className="text-gray-700 text-sm">Expert knowledge of all Toyota models</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-3">💪</div>
                <h4 className="font-bold mb-2">Reliable Quality</h4>
                <p className="text-gray-700 text-sm">Durable work matching Toyota standards</p>
              </div>
              <div className="text-center p-6 bg-red-50 rounded-lg">
                <div className="text-4xl mb-3">💰</div>
                <h4 className="font-bold mb-2">Fair Pricing</h4>
                <p className="text-gray-700 text-sm">Excellent value for quality work</p>
              </div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 Toyota Interior Care Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Clean leather with mild soap solution monthly</li>
                <li>✓ Use sunshades to protect dashboard</li>
                <li>✓ Condition leather every 3 months in Dubai heat</li>
                <li>✓ Vacuum regularly to remove sand</li>
                <li>✓ Address spills immediately</li>
                <li>✓ Consider UV window tinting</li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Upgrade Your Toyota Interior</h3>
            <p className="text-gray-700 mb-6 text-lg">
              From reliable Corolla to legendary Land Cruiser, Al Ettisam delivers quality Toyota interior services throughout Dubai. Contact us for a consultation.
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


