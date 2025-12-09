import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Customised Leather Seats Dubai | Al Ettisam Car Upholstery',
  description: 'Premium customised leather seats for unmatched comfort and style. Expert car seat customization services in Dubai by Al Ettisam.',
};

export default function CustomisedLeatherSeatsPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/service-1.jpg"
          alt="Customised Leather Seats"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Customised Leather Seats</h1>
            <p className="text-lg md:text-xl">Premium Luxury & Comfort for Your Vehicle</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Transform Your Car's Interior with Custom Leather Seats</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              At Al Ettisam, we specialize in creating premium customised leather seats that combine luxury, comfort, and durability. Whether you're looking to upgrade your daily driver or restore a classic vehicle, our expert craftsmen deliver exceptional results.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Services Include:</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
              <li>Full leather seat reupholstery with premium materials</li>
              <li>Custom color and design options to match your style</li>
              <li>Perforated leather for enhanced breathability</li>
              <li>Diamond stitching and quilted patterns</li>
              <li>Contrast stitching in various colors</li>
              <li>Embroidered logos and custom emblems</li>
              <li>Two-tone and multi-color designs</li>
              <li>Alcantara and suede combinations</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Why Choose Custom Leather Seats?</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✓ Premium Quality</h4>
                <p className="text-gray-700 text-sm">High-grade leather that lasts for years</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✓ Enhanced Comfort</h4>
                <p className="text-gray-700 text-sm">Superior cushioning and ergonomic design</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✓ Increased Value</h4>
                <p className="text-gray-700 text-sm">Boost your vehicle's resale value</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✓ Personal Style</h4>
                <p className="text-gray-700 text-sm">Unique design tailored to your preferences</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Process:</h3>
            <ol className="list-decimal list-inside space-y-3 mb-8 text-gray-700">
              <li><strong>Consultation:</strong> We discuss your vision, preferences, and budget</li>
              <li><strong>Material Selection:</strong> Choose from our premium leather options</li>
              <li><strong>Design & Customization:</strong> Select colors, stitching, and patterns</li>
              <li><strong>Expert Installation:</strong> Skilled craftsmen ensure perfect fit and finish</li>
              <li><strong>Quality Check:</strong> Thorough inspection before delivery</li>
            </ol>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3">Special Offer!</h3>
              <p className="mb-4">Get a free consultation and 10% off on complete leather seat customization for sedans and SUVs.</p>
              <p className="text-sm">*Terms and conditions apply. Valid until end of month.</p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Contact Us Today</h3>
            <p className="text-gray-700 mb-6">
              Ready to upgrade your car seats? Visit our showroom in Umm Ramool, Dubai, or contact us for a free quote.
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


