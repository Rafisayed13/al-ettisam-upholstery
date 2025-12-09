import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Dashboard Repair & Restoration Dubai | Al Ettisam',
  description: 'Professional dashboard repair and restoration in Dubai. Restore cracked, faded, or damaged dashboards to OEM finish or custom preference.',
};

export default function DashboardPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/dashboard.jpg"
          alt="Dashboard Repair and Restoration"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Dashboard Repair & Restoration</h1>
            <p className="text-lg md:text-xl">Restore Your Dashboard to Perfect Condition</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Expert Dashboard Repair & Restoration Services</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your dashboard is one of the most visible parts of your car's interior. Sun damage, cracks, and wear can make even a well-maintained vehicle look dated. Al Ettisam specializes in restoring dashboards to their original glory or creating custom finishes that transform your interior.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Dashboard Services We Offer:</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
              <li>Dashboard crack repair and filling</li>
              <li>Sun damage restoration</li>
              <li>Fading and discoloration correction</li>
              <li>Vinyl and leather dashboard wrapping</li>
              <li>Color restoration and dyeing</li>
              <li>Texture matching and refinishing</li>
              <li>Custom dashboard covering</li>
              <li>Dashboard padding replacement</li>
              <li>Alcantara dashboard conversion</li>
              <li>Carbon fiber dashboard accents</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Common Dashboard Problems:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">☀️</span>
                <div>
                  <h4 className="font-bold text-gray-900">Sun Damage</h4>
                  <p className="text-gray-700 text-sm">Dubai's intense sun causes fading, cracking, and warping</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔨</span>
                <div>
                  <h4 className="font-bold text-gray-900">Cracks & Splits</h4>
                  <p className="text-gray-700 text-sm">Age and temperature changes create unsightly cracks</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-bold text-gray-900">Fading Color</h4>
                  <p className="text-gray-700 text-sm">Original color loses vibrancy over time</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">📏</span>
                <div>
                  <h4 className="font-bold text-gray-900">Warping</h4>
                  <p className="text-gray-700 text-sm">Heat causes dashboard to warp and deform</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Restoration Methods:</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🔧 Crack Repair</h4>
                <p className="text-gray-700 text-sm">Professional filling and color-matching of dashboard cracks using specialized materials that flex with temperature changes.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🎨 Color Restoration</h4>
                <p className="text-gray-700 text-sm">UV-resistant dyes and coatings restore original color or allow complete color changes.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🔄 Complete Covering</h4>
                <p className="text-gray-700 text-sm">Full dashboard wrapping with premium materials like leather, Alcantara, or carbon fiber for a brand new look.</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 mb-8 hover:shadow-lg transition-shadow duration-300 animate-zoom-in">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 Prevention Tips</h3>
              <p className="text-gray-700 mb-3">
                Dubai's climate is harsh on dashboards. After restoration, we recommend:
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Use windshield sunshades when parked</li>
                <li>✓ Apply UV protectant regularly</li>
                <li>✓ Park in covered areas when possible</li>
                <li>✓ Clean dashboard with appropriate products</li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Custom Dashboard Options:</h3>
            <p className="text-gray-700 mb-4">
              Looking to upgrade beyond OEM? We offer custom dashboard transformations:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>Alcantara dashboard covering for racing look</li>
              <li>Carbon fiber accents and trim</li>
              <li>Two-tone color schemes</li>
              <li>Contrast stitching patterns</li>
              <li>Custom textures and finishes</li>
            </ul>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3">OEM Quality Guarantee</h3>
              <p className="mb-4">Our restoration work matches or exceeds original equipment manufacturer standards. We use materials specifically designed for automotive interiors that withstand Dubai's extreme temperatures.</p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Process:</h3>
            <ol className="list-decimal list-inside space-y-3 mb-8 text-gray-700">
              <li><strong>Inspection:</strong> Thorough assessment of damage and restoration needs</li>
              <li><strong>Preparation:</strong> Cleaning and prep work for optimal results</li>
              <li><strong>Repair:</strong> Crack filling, leveling, and structural repairs</li>
              <li><strong>Finishing:</strong> Color matching, texturing, and protective coating</li>
              <li><strong>Quality Check:</strong> Final inspection and customer approval</li>
            </ol>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Restore Your Dashboard Today</h3>
            <p className="text-gray-700 mb-6">
              Don't let a damaged dashboard reduce your car's value and appeal. Contact Al Ettisam for professional dashboard restoration in Dubai.
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


