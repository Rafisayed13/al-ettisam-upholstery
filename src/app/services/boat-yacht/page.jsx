import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Boat & Yacht Upholstery Dubai | Al Ettisam Marine Interiors',
  description: 'Professional boat and yacht seat upholstery in Dubai. Marine-grade materials, custom cushions, and complete interior restoration for all watercraft.',
};

export default function BoatYachtPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/boat-yacht.jpg"
          alt="Boat and Yacht Upholstery"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Boat & Yacht Upholstery</h1>
            <p className="text-lg md:text-xl">Marine Interior Excellence</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Professional Marine Upholstery Services in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Al Ettisam brings automotive upholstery expertise to the marine world. We specialize in boat and yacht interior restoration using marine-grade materials designed to withstand sun, salt, and water exposure. From intimate fishing boats to luxury yachts, we deliver premium craftsmanship.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Marine Upholstery Services:</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
              <li>Captain and passenger seat upholstery</li>
              <li>Cushion and bolster fabrication</li>
              <li>Salon seating restoration</li>
              <li>Helm seat customization</li>
              <li>Outdoor deck cushions</li>
              <li>Bimini top and canvas work</li>
              <li>Carpet and flooring replacement</li>
              <li>Headliner restoration</li>
              <li>Cabin interior upholstery</li>
              <li>Custom storage solutions</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Marine-Grade Materials:</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">💧 Marine Vinyl</h4>
                <p className="text-gray-700 text-sm">UV-resistant, mildew-resistant vinyl specifically designed for marine environments. Available in hundreds of colors and textures.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">☀️ Sunbrella Fabric</h4>
                <p className="text-gray-700 text-sm">Premium solution-dyed acrylic fabric that resists fading, mildew, and water. Perfect for cushions and covers.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🌊 Marine Foam</h4>
                <p className="text-gray-700 text-sm">Closed-cell foam that won't absorb water, resists mildew, and maintains shape in marine conditions.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🧵 Marine-Grade Thread</h4>
                <p className="text-gray-700 text-sm">UV-resistant polyester thread designed to withstand saltwater and sun exposure.</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Types of Vessels We Service:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">⛵ Yachts</h4>
                <p className="text-gray-700 text-sm">Luxury yacht interiors with premium materials and custom designs</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">🚤 Speedboats</h4>
                <p className="text-gray-700 text-sm">Performance-focused seating with sporty styling</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">🎣 Fishing Boats</h4>
                <p className="text-gray-700 text-sm">Durable, easy-clean materials for working vessels</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">⚓ Sailboats</h4>
                <p className="text-gray-700 text-sm">Cabin and cockpit upholstery for comfort and style</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">🚢 Pontoons</h4>
                <p className="text-gray-700 text-sm">Large seating areas and entertainment spaces</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">🛥️ Jet Skis</h4>
                <p className="text-gray-700 text-sm">Custom seat covers and grip materials</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3">Built for the Arabian Gulf!</h3>
              <p className="mb-4">Our materials are specifically chosen to withstand the intense UV radiation, high temperatures, and salt exposure of the Arabian Gulf. We understand Dubai's unique marine environment.</p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Popular Marine Projects:</h3>
            <ul className="space-y-3 mb-8 text-gray-700">
              <li>✓ <strong>Complete Interior Renovation:</strong> Transform aging yacht interiors with modern materials</li>
              <li>✓ <strong>Helm Seat Upgrade:</strong> Comfort and style for extended cruising</li>
              <li>✓ <strong>Cockpit Cushions:</strong> Custom-fit outdoor seating with quick-dry foam</li>
              <li>✓ <strong>Cabin Upholstery:</strong> Sleeping quarters and salon seating restoration</li>
              <li>✓ <strong>Sun Pad Creation:</strong> Luxury lounging areas with premium materials</li>
              <li>✓ <strong>Fishing Seat Bolsters:</strong> Functional leaning posts and seating</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Why Choose Marine-Grade Materials?</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <h4 className="font-bold text-gray-900">UV Resistance</h4>
                  <p className="text-gray-700 text-sm">Won't fade or deteriorate in intense sunlight</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💦</span>
                <div>
                  <h4 className="font-bold text-gray-900">Water Repellent</h4>
                  <p className="text-gray-700 text-sm">Sheds water and dries quickly</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🦠</span>
                <div>
                  <h4 className="font-bold text-gray-900">Mildew Resistant</h4>
                  <p className="text-gray-700 text-sm">Prevents mold and mildew growth</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🧂</span>
                <div>
                  <h4 className="font-bold text-gray-900">Salt Resistant</h4>
                  <p className="text-gray-700 text-sm">Withstands saltwater exposure</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Custom Design Options:</h3>
            <p className="text-gray-700 mb-4">
              Personalize your marine interior with:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>Custom color combinations and patterns</li>
              <li>Embroidered boat names and logos</li>
              <li>Piping and contrast stitching</li>
              <li>Diamond and pleat patterns</li>
              <li>Storage pockets and cup holders</li>
              <li>Non-slip surfaces for safety</li>
            </ul>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 mb-8 hover:shadow-lg transition-shadow duration-300 animate-zoom-in">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 Maintenance Tips for Marine Upholstery</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Rinse with fresh water after saltwater exposure</li>
                <li>✓ Clean regularly with marine-safe cleaners</li>
                <li>✓ Use protective covers when not in use</li>
                <li>✓ Store cushions in dry areas when possible</li>
                <li>✓ Apply UV protectant spray periodically</li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Marine Upholstery Process:</h3>
            <ol className="list-decimal list-inside space-y-3 mb-8 text-gray-700">
              <li><strong>Consultation:</strong> Discuss your needs, style preferences, and usage</li>
              <li><strong>Measurement:</strong> Precise templating of seats and cushions</li>
              <li><strong>Material Selection:</strong> Choose from our extensive marine fabric collection</li>
              <li><strong>Fabrication:</strong> Expert cutting, sewing, and assembly</li>
              <li><strong>Installation:</strong> Professional fitting and quality inspection</li>
            </ol>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Restore Your Marine Interior</h3>
            <p className="text-gray-700 mb-6">
              Whether you need repairs or a complete transformation, Al Ettisam delivers marine upholstery excellence in Dubai. Contact us for a consultation and quote for your boat or yacht.
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


