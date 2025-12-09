import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Seat Belt Repair & Customization Dubai | Al Ettisam',
  description: 'Professional seat belt repair and custom webbing replacement in Dubai. Change seat belt color, repair retractors, and restore safety systems.',
};

export default function SeatBeltsPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/seat-belts.jpg"
          alt="Seat Belt Repair and Customization"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Seat Belt Services</h1>
            <p className="text-lg md:text-xl">Safety Meets Customization</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Professional Seat Belt Repair & Customization</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your seat belts are critical safety components, but they can also be customized to match your interior design. At Al Ettisam, we offer seat belt webbing replacement, retractor repair, and custom color options while maintaining full safety compliance.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Seat Belt Services:</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
              <li>Custom colored seat belt webbing replacement</li>
              <li>Seat belt retractor repair and replacement</li>
              <li>Buckle repair and replacement</li>
              <li>Seat belt pre-tensioner servicing</li>
              <li>Frayed or damaged webbing replacement</li>
              <li>Seat belt cleaning and restoration</li>
              <li>Custom embroidery on webbing</li>
              <li>Logo embossing on buckles</li>
              <li>Racing harness installation</li>
              <li>Safety compliance certification</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">When to Service Your Seat Belts:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">⚠️</span>
                <div>
                  <h4 className="font-bold text-gray-900">Frayed Webbing</h4>
                  <p className="text-gray-700 text-sm">Visible wear or cuts in the belt material</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔄</span>
                <div>
                  <h4 className="font-bold text-gray-900">Retractor Issues</h4>
                  <p className="text-gray-700 text-sm">Belt doesn't retract properly or gets stuck</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🔒</span>
                <div>
                  <h4 className="font-bold text-gray-900">Buckle Problems</h4>
                  <p className="text-gray-700 text-sm">Difficulty latching or releasing buckle</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🚗</span>
                <div>
                  <h4 className="font-bold text-gray-900">After Accident</h4>
                  <p className="text-gray-700 text-sm">Seat belts must be replaced after deployment</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Custom Color Options:</h3>
            <p className="text-gray-700 mb-4">
              Match your seat belts to your interior with custom colored webbing:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
              <div className="bg-red-600 text-white p-3 rounded text-center font-bold">Red</div>
              <div className="bg-blue-600 text-white p-3 rounded text-center font-bold">Blue</div>
              <div className="bg-yellow-400 text-black p-3 rounded text-center font-bold">Yellow</div>
              <div className="bg-green-600 text-white p-3 rounded text-center font-bold">Green</div>
              <div className="bg-orange-500 text-white p-3 rounded text-center font-bold">Orange</div>
              <div className="bg-purple-600 text-white p-3 rounded text-center font-bold">Purple</div>
              <div className="bg-pink-400 text-white p-3 rounded text-center font-bold">Pink</div>
              <div className="bg-gray-800 text-white p-3 rounded text-center font-bold">Black</div>
            </div>

            <div className="bg-red-50 border-l-4 border-red-600 p-4 md:p-6 mb-8 hover:shadow-lg transition-shadow duration-300 animate-zoom-in">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">⚠️ Safety First</h3>
              <p className="text-gray-700 mb-3">
                All our seat belt replacements use automotive-grade webbing that meets or exceeds safety standards. We never compromise safety for aesthetics.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ OEM-quality webbing materials</li>
                <li>✓ Proper tension and retractor testing</li>
                <li>✓ Safety compliance certification</li>
                <li>✓ Professional installation only</li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Custom Seat Belt Features:</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🎨 Color Matching</h4>
                <p className="text-gray-700 text-sm">Match seat stitching, interior accents, or exterior paint colors.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">✍️ Custom Embroidery</h4>
                <p className="text-gray-700 text-sm">Add logos, names, or text embroidered on the webbing.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🏁 Racing Style</h4>
                <p className="text-gray-700 text-sm">Bold colors popular in performance and racing applications.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">💎 Premium Finish</h4>
                <p className="text-gray-700 text-sm">High-quality webbing with superior feel and appearance.</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Retractor Repair & Replacement:</h3>
            <p className="text-gray-700 mb-4">
              Faulty retractors are more than an inconvenience - they're a safety issue. We repair or replace:
            </p>
            <ul className="list-disc list-inside space-y-2 mb-8 text-gray-700">
              <li>Emergency locking retractors (ELR)</li>
              <li>Automatic locking retractors (ALR)</li>
              <li>Pre-tensioner systems</li>
              <li>Retractor springs and mechanisms</li>
              <li>Seat belt sensors and warning systems</li>
            </ul>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3">Complete Interior Coordination</h3>
              <p className="mb-4">For the ultimate custom interior, coordinate your seat belt colors with your seat stitching, door panel accents, and steering wheel design.</p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Racing Harness Installation:</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              For track use or show cars, we install professional racing harnesses including 4-point, 5-point, and 6-point configurations. All installations meet racing safety standards.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Popular Applications:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🏎️ Sports Cars</h4>
                <p className="text-gray-700 text-sm">Bold colors matching performance aesthetics</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🚙 Luxury Vehicles</h4>
                <p className="text-gray-700 text-sm">Subtle colors coordinating with premium interiors</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🏁 Track Cars</h4>
                <p className="text-gray-700 text-sm">Racing harnesses for safety and style</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🎪 Show Cars</h4>
                <p className="text-gray-700 text-sm">Eye-catching colors for maximum visual impact</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Upgrade Your Seat Belts</h3>
            <p className="text-gray-700 mb-6">
              Whether you need safety repairs or custom styling, Al Ettisam provides professional seat belt services in Dubai. Contact us for consultation and quotes.
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


