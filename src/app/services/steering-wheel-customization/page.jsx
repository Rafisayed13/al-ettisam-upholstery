import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Steering Wheel Customization Dubai | Al Ettisam',
  description: 'Professional steering wheel customization in Dubai. Carbon fiber, leather wrapping, and custom finishes for a sporty, luxurious feel.',
};

export default function SteeringWheelPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[40vh] md:h-[50vh]">
        <Image
          src="/service-3.png"
          alt="Steering Wheel Customization"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">Steering Wheel Customization</h1>
            <p className="text-lg md:text-xl">Upgrade Your Driving Experience</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-4xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Premium Steering Wheel Customization</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed">
              Your steering wheel is the most touched part of your car. Make it stand out with our premium customization services. From luxury leather wrapping to sporty carbon fiber accents, we create steering wheels that match your style and enhance your driving experience.
            </p>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Customization Options:</h3>
            <ul className="list-disc list-inside space-y-3 mb-8 text-gray-700">
              <li>Premium leather wrapping (Nappa, perforated, smooth)</li>
              <li>Carbon fiber inserts and trim</li>
              <li>Alcantara covering for racing feel</li>
              <li>Custom stitching colors (contrast or matching)</li>
              <li>Diamond stitching patterns</li>
              <li>Wood grain finishes</li>
              <li>Piano black or matte finishes</li>
              <li>Colored leather options</li>
              <li>Heated steering wheel installation</li>
              <li>Custom emblems and logos</li>
            </ul>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Popular Styles:</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-8">
              <div className="bg-gradient-to-br from-gray-900 to-gray-700 text-white p-4 md:p-6 rounded-lg border-l-4 hover:shadow-xl transition-all duration-300 animate-zoom-in">
                <h4 className="font-bold mb-2 text-lg">Sport Style</h4>
                <p className="text-sm">Alcantara with carbon fiber trim and red stitching for performance enthusiasts</p>
              </div>
              <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white p-4 md:p-6 rounded-lg border-l-4 hover:shadow-xl transition-all duration-300 animate-zoom-in">
                <h4 className="font-bold mb-2 text-lg">Luxury Style</h4>
                <p className="text-sm">Premium Nappa leather with wood accents for elegant comfort</p>
              </div>
              <div className="bg-gradient-to-br from-red-900 to-red-700 text-white p-4 md:p-6 rounded-lg border-l-4 hover:shadow-xl transition-all duration-300 animate-zoom-in">
                <h4 className="font-bold mb-2 text-lg">Racing Style</h4>
                <p className="text-sm">Perforated leather with flat bottom design and contrast stitching</p>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Why Customize Your Steering Wheel?</h3>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎯</span>
                <div>
                  <h4 className="font-bold text-gray-900">Better Grip</h4>
                  <p className="text-gray-700 text-sm">Enhanced texture provides superior control</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">✨</span>
                <div>
                  <h4 className="font-bold text-gray-900">Luxury Feel</h4>
                  <p className="text-gray-700 text-sm">Premium materials elevate your interior</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">🎨</span>
                <div>
                  <h4 className="font-bold text-gray-900">Personal Style</h4>
                  <p className="text-gray-700 text-sm">Express your unique taste and personality</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-2xl">💎</span>
                <div>
                  <h4 className="font-bold text-gray-900">Increased Value</h4>
                  <p className="text-gray-700 text-sm">Premium upgrades boost resale value</p>
                </div>
              </div>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Our Process:</h3>
            <ol className="list-decimal list-inside space-y-3 mb-8 text-gray-700">
              <li><strong>Consultation:</strong> Discuss your style preferences and budget</li>
              <li><strong>Material Selection:</strong> Choose from premium leather, Alcantara, or carbon fiber</li>
              <li><strong>Design:</strong> Select colors, stitching patterns, and finishes</li>
              <li><strong>Expert Installation:</strong> Precise wrapping and fitting by skilled craftsmen</li>
              <li><strong>Quality Assurance:</strong> Thorough inspection for perfect finish</li>
            </ol>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 md:p-6 mb-8 hover:shadow-lg transition-shadow duration-300 animate-zoom-in">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 Did You Know?</h3>
              <p className="text-gray-700">
                A customized steering wheel not only looks amazing but also provides better grip and control, especially during spirited driving. Many of our customers report improved driving comfort on long journeys!
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-900 to-blue-700 text-white p-6 rounded-lg mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3">Special Package Offer!</h3>
              <p className="mb-4">Get steering wheel customization + gear shift boot wrapping at 15% discount. Limited time offer!</p>
            </div>

            <h3 className="text-xl md:text-2xl font-bold mb-4 text-gray-900">Ready to Upgrade?</h3>
            <p className="text-gray-700 mb-6">
              Transform your steering wheel today. Visit our Dubai showroom or contact us for a consultation and quote.
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


