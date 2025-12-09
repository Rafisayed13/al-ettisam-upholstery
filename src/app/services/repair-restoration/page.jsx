import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Car Seat Repair & Restoration Dubai | Al Ettisam',
  description: 'Professional car seat repair and restoration services in Dubai. Expert repair of torn or damaged seats, restoration of classic car interiors.',
};

export default function RepairRestorationPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/service-2.jpg"
          alt="Car Seat Repair & Restoration"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Repair & Restoration</h1>
            <p className="text-lg md:text-xl">Expert Repair Services for All Vehicle Types</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Professional Car Seat Repair & Restoration</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Don't replace your damaged car seats – restore them! At Al Ettisam, we provide expert repair and restoration services that bring your seats back to life. From minor tears to complete restoration of classic car interiors, we handle it all.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Repair Services We Offer:</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
              <li>Leather tear and rip repair</li>
              <li>Fabric seat damage repair</li>
              <li>Cigarette burn repair</li>
              <li>Color restoration and dyeing</li>
              <li>Seam repair and re-stitching</li>
              <li>Foam replacement and padding</li>
              <li>Water damage restoration</li>
              <li>Sun damage repair</li>
              <li>Worn seat bolster repair</li>
              <li>Classic car interior restoration</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Common Issues We Fix:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Tears & Rips</h4>
                <p className="text-gray-700 text-sm">Expert repair of leather and fabric tears with color matching</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Faded Colors</h4>
                <p className="text-gray-700 text-sm">Professional dyeing and color restoration services</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Worn Seats</h4>
                <p className="text-gray-700 text-sm">Complete restoration of heavily worn driver seats</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Damaged Foam</h4>
                <p className="text-gray-700 text-sm">Foam replacement for improved comfort and support</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Classic Car Restoration Specialists</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              We take pride in restoring classic and vintage car interiors to their original glory. Using period-correct materials and techniques, we ensure your classic vehicle maintains its authentic character while enjoying modern durability.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Why Repair Instead of Replace?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ <strong>Cost-effective:</strong> Save up to 70% compared to replacement</li>
                <li>✓ <strong>Environmentally friendly:</strong> Reduce waste and carbon footprint</li>
                <li>✓ <strong>Preserve originality:</strong> Keep your car's authentic interior</li>
                <li>✓ <strong>Quick turnaround:</strong> Most repairs completed in 1-3 days</li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Restoration Process:</h3>
            <ol className="list-decimal list-inside space-y-3 mb-8 text-gray-700">
              <li><strong>Assessment:</strong> Free inspection and damage evaluation</li>
              <li><strong>Quote:</strong> Transparent pricing with no hidden fees</li>
              <li><strong>Repair:</strong> Expert craftsmanship using premium materials</li>
              <li><strong>Finishing:</strong> Color matching and protective treatment</li>
              <li><strong>Quality Check:</strong> Final inspection and customer approval</li>
            </ol>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3">Free Damage Assessment!</h3>
              <p className="mb-4">Visit us for a free inspection and quote. We'll provide honest advice on whether repair or replacement is best for your seats.</p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Get Your Seats Repaired Today</h3>
            <p className="text-gray-700 mb-6">
              Don't let damaged seats reduce your car's value and comfort. Contact Al Ettisam for professional repair services in Dubai.
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


