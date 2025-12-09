import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Door Panel Repair & Restoration Dubai | Al Ettisam',
  description: 'Professional door panel repair and restoration in Dubai. We repair and restore all door panels to original condition or custom preference.',
};

export default function DoorPanelPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/door-panel.jpg"
          alt="Door Panel Repair and Restoration"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Door Panel Repair & Restoration</h1>
            <p className="text-lg md:text-xl">Complete Interior Door Solutions</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Expert Door Panel Services in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Door panels are subjected to constant use and can suffer from scratches, tears, and general wear. At Al Ettisam, we restore door panels to their original condition or completely transform them with custom finishes that enhance your vehicle's interior aesthetics.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Door Panel Services:</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
              <li>Door panel upholstery repair and replacement</li>
              <li>Leather and vinyl door panel recovery</li>
              <li>Door panel padding replacement</li>
              <li>Armrest repair and restoration</li>
              <li>Door panel color restoration</li>
              <li>Custom door panel design and fabrication</li>
              <li>Door card trim replacement</li>
              <li>Speaker grill repair and upgrade</li>
              <li>Door pocket restoration</li>
              <li>Accent stitching and embroidery</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Common Door Panel Issues:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Torn Upholstery</h4>
                <p className="text-gray-700 text-sm">Fabric or leather tears from regular use and door handle operation</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Worn Armrests</h4>
                <p className="text-gray-700 text-sm">Frequent contact causes discoloration and material breakdown</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Sagging Panels</h4>
                <p className="text-gray-700 text-sm">Adhesive failure causes door panels to sag or separate</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Sun Damage</h4>
                <p className="text-gray-700 text-sm">UV exposure causes fading and material deterioration</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Restoration vs. Replacement:</h3>
            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h4 className="font-bold text-gray-900 mb-3">When to Restore:</h4>
              <ul className="space-y-2 text-gray-700 mb-4">
                <li>✓ Minor tears and scratches</li>
                <li>✓ Color fading or discoloration</li>
                <li>✓ Worn armrests but intact panel</li>
                <li>✓ Cost-effective solution needed</li>
              </ul>
              
              <h4 className="font-bold text-gray-900 mb-3">When to Replace/Recover:</h4>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Extensive damage or multiple tears</li>
                <li>✓ Structural damage to panel board</li>
                <li>✓ Desire for complete interior upgrade</li>
                <li>✓ Changing to different material or color</li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Custom Door Panel Options:</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🎨 Material Upgrade</h4>
                <p className="text-gray-700 text-sm">Transform fabric door panels to premium leather or Alcantara for a luxury feel.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🔷 Carbon Fiber Accents</h4>
                <p className="text-gray-700 text-sm">Add carbon fiber inserts for a sporty, high-performance appearance.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✨ Contrast Stitching</h4>
                <p className="text-gray-700 text-sm">Enhance visual appeal with custom-colored stitching patterns.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🎭 Two-Tone Design</h4>
                <p className="text-gray-700 text-sm">Combine colors for a unique, personalized interior aesthetic.</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Complete Interior Coordination:</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              For the best results, we recommend coordinating your door panels with your seat upholstery. We can match materials, colors, and stitching patterns to create a cohesive, factory-quality appearance throughout your vehicle's interior.
            </p>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3">Factory-Quality Fitment</h3>
              <p className="mb-4">All our door panel work maintains proper fitment of clips, switches, handles, and speakers. We ensure everything functions perfectly while looking brand new.</p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Process:</h3>
            <ol className="list-decimal list-inside space-y-3 mb-8 text-gray-700">
              <li><strong>Assessment:</strong> Complete evaluation of all door panels and components</li>
              <li><strong>Removal:</strong> Careful removal of panels without damaging clips or wiring</li>
              <li><strong>Repair/Fabrication:</strong> Fix damage or create new custom panels</li>
              <li><strong>Upholstery:</strong> Apply new covering with professional techniques</li>
              <li><strong>Reinstallation:</strong> Proper fitting and testing of all functions</li>
              <li><strong>Final Inspection:</strong> Quality check and customer approval</li>
            </ol>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Why Choose Al Ettisam for Door Panels?</h3>
            <ul className="space-y-2 mb-8 text-gray-700">
              <li>✓ <strong>Expert Craftsmanship:</strong> Years of experience with all vehicle types</li>
              <li>✓ <strong>Quality Materials:</strong> Premium automotive-grade materials</li>
              <li>✓ <strong>Perfect Fit:</strong> Factory-quality installation and fitment</li>
              <li>✓ <strong>Color Matching:</strong> Precise color matching to existing interior</li>
              <li>✓ <strong>Fast Turnaround:</strong> Efficient service without compromising quality</li>
              <li>✓ <strong>Competitive Pricing:</strong> Affordable rates for premium work</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Get Your Door Panels Restored</h3>
            <p className="text-gray-700 mb-6">
              Transform your car's interior with professionally restored or custom door panels. Visit Al Ettisam in Dubai for a free consultation and quote.
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


