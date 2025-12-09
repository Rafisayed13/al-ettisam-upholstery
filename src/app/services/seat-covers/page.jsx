import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Custom Car Seat Covers Dubai | Al Ettisam Upholstery',
  description: 'Premium custom car seat covers in Dubai. Protect and enhance your car interior with stylish, durable seat covers designed for comfort and style.',
};

export default function SeatCoversPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/seat-covers.jpg"
          alt="Custom Car Seat Covers"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Custom Seat Covers</h1>
            <p className="text-lg md:text-xl">Protection Meets Style</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Premium Custom Car Seat Covers in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Protect your car seats while adding style with our custom-designed seat covers. At Al Ettisam, we create seat covers that perfectly fit your vehicle and match your personal style, providing both protection and aesthetic appeal.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Seat Cover Options:</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
              <li>Custom-fit seat covers for all car models</li>
              <li>Premium leather seat covers</li>
              <li>Fabric and textile options</li>
              <li>Waterproof and stain-resistant materials</li>
              <li>Breathable perforated designs</li>
              <li>Color-matched or custom colors</li>
              <li>Logo embroidery and personalization</li>
              <li>UV-resistant materials</li>
              <li>Easy-to-clean surfaces</li>
              <li>Temperature-regulating fabrics</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Benefits of Custom Seat Covers:</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🛡️ Protection</h4>
                <p className="text-gray-700 text-sm">Shield original seats from wear, spills, and sun damage</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">💎 Style Enhancement</h4>
                <p className="text-gray-700 text-sm">Upgrade your interior aesthetics instantly</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">💰 Cost-Effective</h4>
                <p className="text-gray-700 text-sm">Affordable alternative to full reupholstery</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">🧼 Easy Maintenance</h4>
                <p className="text-gray-700 text-sm">Removable and machine-washable options</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Material Options:</h3>
            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Premium Leather</h4>
                <p className="text-gray-700 text-sm">Luxurious feel with durability and easy cleaning. Available in multiple colors and finishes.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Neoprene</h4>
                <p className="text-gray-700 text-sm">Water-resistant, ideal for active lifestyles, beach trips, and outdoor activities.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Canvas</h4>
                <p className="text-gray-700 text-sm">Heavy-duty protection perfect for work vehicles and outdoor enthusiasts.</p>
              </div>
              <div className="border-l-4 border-blue-600 pl-4">
                <h4 className="font-bold text-gray-900 mb-2">Velour/Suede</h4>
                <p className="text-gray-700 text-sm">Soft, comfortable, and elegant for luxury vehicle interiors.</p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3">Perfect Fit Guarantee!</h3>
              <p className="mb-4">All our seat covers are custom-made to fit your exact vehicle make and model. We ensure perfect fitment with professional installation available.</p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Popular Applications:</h3>
            <ul className="space-y-2 mb-8 text-gray-700">
              <li>✓ <strong>Family Vehicles:</strong> Protect against spills and stains from kids</li>
              <li>✓ <strong>Pet Owners:</strong> Keep seats clean from pet hair and scratches</li>
              <li>✓ <strong>Taxi/Uber:</strong> Professional look with easy-clean materials</li>
              <li>✓ <strong>Work Vehicles:</strong> Heavy-duty protection for daily wear</li>
              <li>✓ <strong>Luxury Cars:</strong> Preserve original seats while adding style</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Installation & Care:</h3>
            <p className="text-gray-700 mb-4">
              Professional installation ensures perfect fit and appearance. Most covers are designed for easy removal and cleaning. We provide detailed care instructions with every purchase.
            </p>

            <div className="bg-blue-50 p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">Why Choose Al Ettisam Seat Covers?</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Custom-made for perfect fit</li>
                <li>✓ Premium quality materials</li>
                <li>✓ Wide range of colors and styles</li>
                <li>✓ Professional installation available</li>
                <li>✓ Affordable pricing</li>
                <li>✓ Fast turnaround time</li>
              </ul>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Get Your Custom Seat Covers Today</h3>
            <p className="text-gray-700 mb-6">
              Visit our Dubai showroom or contact us for a free consultation. We'll help you choose the perfect seat covers for your needs and budget.
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


