import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Car Carpet Replacement & Cleaning Dubai | Al Ettisam',
  description: 'Professional car carpet replacement and restoration in Dubai. Replace carpets, floor mats, trunk mats with premium materials.',
};

export default function CarpetsPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/carpets.jpg"
          alt="Car Carpet Replacement and Restoration"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Car Carpet Replacement</h1>
            <p className="text-lg md:text-xl">Fresh Flooring for Your Vehicle</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Professional Car Carpet Services in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Replace worn, stained, or damaged car carpeting with fresh, premium materials. At Al Ettisam, we provide complete carpet replacement services for all vehicle types, ensuring a perfect fit and premium finish that revitalizes your car's interior.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Carpet Services:</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
              <li>Complete car carpet replacement</li>
              <li>Floor mat replacement (custom fit)</li>
              <li>Trunk carpet replacement</li>
              <li>Molded carpet installation</li>
              <li>Custom carpet color options</li>
              <li>Sound deadening underlay installation</li>
              <li>Water damage carpet restoration</li>
              <li>Carpet dyeing and color restoration</li>
              <li>Floor pan rust treatment before installation</li>
              <li>Premium automotive-grade materials</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Why Replace Your Car Carpet?</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">💧 Water Damage</h4>
                <p className="text-gray-700 text-sm">Leaks or flooding cause permanent stains and odors</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">👃 Odor Issues</h4>
                <p className="text-gray-700 text-sm">Musty smells that won't go away with cleaning</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🔧 Wear & Tear</h4>
                <p className="text-gray-700 text-sm">Years of use create holes and fraying</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🚗 Resale Value</h4>
                <p className="text-gray-700 text-sm">New carpet significantly increases vehicle value</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Carpet Material Options:</h3>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Premium Cut Pile</h4>
                <p className="text-gray-700 text-sm">Soft, luxurious feel similar to OEM factory carpets. Available in various colors.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Loop Pile</h4>
                <p className="text-gray-700 text-sm">Durable and stain-resistant, perfect for high-traffic vehicles.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Molded Carpet</h4>
                <p className="text-gray-700 text-sm">Pre-formed for specific vehicle models ensuring perfect fit.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Waterproof Backing</h4>
                <p className="text-gray-700 text-sm">Moisture barrier prevents rust and mold development.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3">Complete Floor Restoration!</h3>
              <p className="mb-4">We don't just replace carpet - we prepare your floor properly. This includes rust treatment, sound deadening, and moisture barrier installation for long-lasting results.</p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Color Options:</h3>
            <p className="text-gray-700 mb-4">
              Choose from a wide range of colors to match or upgrade your interior:
            </p>
            <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-8 text-gray-700">
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-black rounded"></span> Black
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-gray-400 rounded"></span> Gray
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-900 rounded"></span> Navy Blue
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-amber-900 rounded"></span> Tan/Beige
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-red-900 rounded"></span> Burgundy
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 bg-blue-950 rounded"></span> Charcoal
              </li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Installation Process:</h3>
            <ol className="list-decimal list-inside space-y-3 mb-8 text-gray-700">
              <li><strong>Complete Removal:</strong> Remove all seats, console, and trim to access entire floor</li>
              <li><strong>Floor Preparation:</strong> Clean, treat rust, and apply sound deadening</li>
              <li><strong>Custom Cutting:</strong> Precision cutting and fitting of new carpet</li>
              <li><strong>Professional Installation:</strong> Secure carpet with proper adhesives and fasteners</li>
              <li><strong>Reassembly:</strong> Reinstall all components and trim</li>
              <li><strong>Final Details:</strong> Clean and inspect for perfect finish</li>
            </ol>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Additional Floor Services:</h3>
            <div className="bg-gray-50 p-6 rounded-lg mb-8">
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <strong>Sound Deadening:</strong> Reduce road noise with quality sound deadening materials
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <strong>Heat Insulation:</strong> Keep interior cooler with heat barrier installation
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <strong>Waterproofing:</strong> Prevent moisture issues with proper barriers
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-600 text-xl">✓</span>
                  <div>
                    <strong>Rust Treatment:</strong> Fix and prevent rust before carpet installation
                  </div>
                </li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Perfect for:</h3>
            <ul className="space-y-2 mb-8 text-gray-700">
              <li>✓ Classic car restorations</li>
              <li>✓ Water-damaged vehicles</li>
              <li>✓ High-mileage vehicles</li>
              <li>✓ Pre-sale vehicle improvement</li>
              <li>✓ Custom interior builds</li>
              <li>✓ Commercial fleet vehicles</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 mb-8 hover:shadow-lg transition-shadow duration-300 animate-zoom-in">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 Maintenance Tips</h3>
              <p className="text-gray-700 mb-3">Keep your new carpet looking fresh:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Use quality floor mats to protect high-traffic areas</li>
                <li>✓ Regular vacuuming prevents dirt buildup</li>
                <li>✓ Clean spills immediately to prevent stains</li>
                <li>✓ Professional carpet cleaning once a year</li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Transform Your Car's Interior</h3>
            <p className="text-gray-700 mb-6">
              New carpet makes a dramatic difference in your car's appearance and value. Contact Al Ettisam for professional carpet replacement services in Dubai.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:0554969599" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-center">
                Call: 055 4969599
              </a>
              <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-full transition-colors duration-300 text-center">
                WhatsApp Us
              </a>
            </div>

            <div className="text-center">
              <Link href="/#services" className="text-blue-600 hover:text-blue-800 font-semibold">
                ← Back to All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

