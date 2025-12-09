import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Rolls Royce Upholstery Dubai | Bespoke Rolls Royce Interior | Al Ettisam',
  description: 'Exclusive Rolls Royce interior upholstery and restoration in Dubai. Bespoke leather craftsmanship for Phantom, Ghost, Wraith, Cullinan. Ultimate luxury interiors.',
  keywords: 'Rolls Royce upholstery Dubai, Rolls Royce interior, Rolls Royce Phantom seats, Rolls Royce restoration, bespoke Rolls Royce, luxury car upholstery',
};

export default function RollsRoycePage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/rolls2.jpg"
          alt="Rolls Royce Upholstery"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-slide-up">Rolls Royce Bespoke Upholstery</h1>
            <p className="text-lg sm:text-xl md:text-2xl animate-slide-up delay-200">Strive for Perfection - The Art of Luxury Craftsmanship</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Bespoke Rolls Royce Interior Services in Dubai</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              At Al Ettisam, we understand that a Rolls Royce represents the pinnacle of automotive luxury. Our master craftsmen provide bespoke interior services that honor Rolls Royce's century-old tradition of perfection, delivering results worthy of the Spirit of Ecstasy.
            </p>

            <div className="bg-gradient-to-r from-purple-900 via-gray-900 to-black text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">✨ The Rolls Royce Standard</h3>
              <p className="mb-4">
                Every Rolls Royce interior is a masterpiece of craftsmanship. We maintain these exacting standards through meticulous attention to detail, use of the finest materials, and traditional hand-crafting techniques passed down through generations.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Exclusive Services for Rolls Royce:</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-gradient-to-br from-purple-50 to-gray-50 p-6 rounded-lg border-t-4 border-purple-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">👑 Bespoke Seat Upholstery</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Hand-stitched leather restoration</li>
                  <li>✓ Box grain leather rehabilitation</li>
                  <li>✓ Perforated leather replacement</li>
                  <li>✓ Custom embroidery and monograms</li>
                  <li>✓ Piping and welt restoration</li>
                  <li>✓ Lambswool floor mat recovery</li>
                  <li>✓ Massage seat function preservation</li>
                  <li>✓ Color-matched thread selection</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-lg border-t-4 border-gray-700">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🎨 Bespoke Interior Trim</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Starlight headliner installation</li>
                  <li>✓ Wood veneer restoration</li>
                  <li>✓ Leather dashboard wrapping</li>
                  <li>✓ Door panel reupholstery</li>
                  <li>✓ Picnic table restoration</li>
                  <li>✓ Umbrellas compartment lining</li>
                  <li>✓ Champagne cooler restoration</li>
                  <li>✓ Rear entertainment system trim</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-gray-50 p-6 rounded-lg border-t-4 border-purple-600">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💎 Bespoke Features</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Custom leather color matching</li>
                  <li>✓ Personalized embroidery designs</li>
                  <li>✓ Coachline-inspired piping</li>
                  <li>✓ Monogram creation and placement</li>
                  <li>✓ Custom quilting patterns</li>
                  <li>✓ Two-tone leather combinations</li>
                  <li>✓ Bespoke headrest embroidery</li>
                  <li>✓ Custom carpeting installation</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-lg border-t-4 border-gray-700">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🛠️ Restoration Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Classic Rolls Royce restoration</li>
                  <li>✓ Vintage leather rehabilitation</li>
                  <li>✓ Period-correct materials sourcing</li>
                  <li>✓ Original pattern replication</li>
                  <li>✓ Wood and leather coordination</li>
                  <li>✓ Chrome and leather accent</li>
                  <li>✓ Heritage color restoration</li>
                  <li>✓ Concours-level finishing</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Rolls Royce Models We Service:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200 hover:border-purple-600 transition-colors">
                <h5 className="font-bold text-xl text-gray-900 mb-2">Phantom</h5>
                <p className="text-xs md:text-sm text-gray-600">The ultimate luxury sedan</p>
                <p className="text-xs text-gray-500 mt-1">Series I-VIII, Extended Wheelbase</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200 hover:border-purple-600 transition-colors">
                <h5 className="font-bold text-xl text-gray-900 mb-2">Ghost</h5>
                <p className="text-xs md:text-sm text-gray-600">Contemporary luxury</p>
                <p className="text-xs text-gray-500 mt-1">Standard & Extended Wheelbase</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200 hover:border-purple-600 transition-colors">
                <h5 className="font-bold text-xl text-gray-900 mb-2">Wraith</h5>
                <p className="text-xs md:text-sm text-gray-600">Powerful grand tourer</p>
                <p className="text-xs text-gray-500 mt-1">Fastback coupe styling</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200 hover:border-purple-600 transition-colors">
                <h5 className="font-bold text-xl text-gray-900 mb-2">Dawn</h5>
                <p className="text-xs md:text-sm text-gray-600">Convertible elegance</p>
                <p className="text-xs text-gray-500 mt-1">Open-top luxury motoring</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200 hover:border-purple-600 transition-colors">
                <h5 className="font-bold text-xl text-gray-900 mb-2">Cullinan</h5>
                <p className="text-xs md:text-sm text-gray-600">Luxury SUV</p>
                <p className="text-xs text-gray-500 mt-1">Effortless, everywhere</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200 hover:border-purple-600 transition-colors">
                <h5 className="font-bold text-xl text-gray-900 mb-2">Spectre</h5>
                <p className="text-xs md:text-sm text-gray-600">Electric luxury coupe</p>
                <p className="text-xs text-gray-500 mt-1">The first electric Rolls</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200 hover:border-purple-600 transition-colors">
                <h5 className="font-bold text-xl text-gray-900 mb-2">Silver Shadow</h5>
                <p className="text-xs md:text-sm text-gray-600">Classic restoration</p>
                <p className="text-xs text-gray-500 mt-1">1965-1980</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200 hover:border-purple-600 transition-colors">
                <h5 className="font-bold text-xl text-gray-900 mb-2">Silver Spirit</h5>
                <p className="text-xs md:text-sm text-gray-600">Heritage models</p>
                <p className="text-xs text-gray-500 mt-1">1980-1998</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-lg text-center border-2 border-purple-200 hover:border-purple-600 transition-colors">
                <h5 className="font-bold text-xl text-gray-900 mb-2">Corniche</h5>
                <p className="text-xs md:text-sm text-gray-600">Convertible classic</p>
                <p className="text-xs text-gray-500 mt-1">Multiple generations</p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">The Finest Materials:</h3>
            <p className="text-gray-700 mb-4">We source and work with materials worthy of Rolls Royce heritage:</p>
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-600">
                <h4 className="font-bold mb-2 text-lg">🐂 Premium Leathers</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Box Grain Leather - Rolls Royce signature</li>
                  <li>• Vaumol Hide - Softest automotive leather</li>
                  <li>• Perforated Leather - For ventilation</li>
                  <li>• Full-grain natural leather</li>
                  <li>• Semi-aniline finishes</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-700">
                <h4 className="font-bold mb-2 text-lg">🌳 Wood & Accents</h4>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Matched wood veneer sets</li>
                  <li>• Lambswool floor mats</li>
                  <li>• Finest mohair carpeting</li>
                  <li>• Silk-blend roof lining</li>
                  <li>• Chrome and leather coordination</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-100 via-gray-100 to-purple-100 p-8 rounded-lg mb-8 border-2 border-purple-200">
              <h3 className="text-2xl font-bold mb-4 text-gray-900">⭐ The Bespoke Process</h3>
              <p className="text-gray-700 mb-4">
                Creating a Rolls Royce interior is an art form. Our process mirrors the Goodwood factory's attention to detail:
              </p>
              <ol className="space-y-3 text-gray-700">
                <li><strong>1. Consultation:</strong> Understanding your vision and requirements</li>
                <li><strong>2. Material Selection:</strong> Choosing from premium hides and finishes</li>
                <li><strong>3. Color Matching:</strong> Precise color coordination with existing elements</li>
                <li><strong>4. Pattern Creation:</strong> Custom templates for perfect fitment</li>
                <li><strong>5. Hand Crafting:</strong> Traditional techniques by master craftsmen</li>
                <li><strong>6. Quality Control:</strong> Rigorous inspection at every stage</li>
                <li><strong>7. Installation:</strong> Precise fitting and final detailing</li>
              </ol>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Trust Al Ettisam with Your Rolls Royce?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-5xl mb-3">🎩</div>
                <h4 className="font-bold mb-2 text-lg">Luxury Expertise</h4>
                <p className="text-gray-700 text-sm">Specialized experience with ultra-luxury marques</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-5xl mb-3">✋</div>
                <h4 className="font-bold mb-2 text-lg">Hand Craftsmanship</h4>
                <p className="text-gray-700 text-sm">Traditional techniques for authentic results</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <div className="text-5xl mb-3">💎</div>
                <h4 className="font-bold mb-2 text-lg">Finest Materials</h4>
                <p className="text-gray-700 text-sm">Only the best leathers and materials</p>
              </div>
            </div>

            <div className="bg-purple-50 border-l-4 border-purple-600 p-6 mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 Caring for Your Rolls Royce Interior</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Use only Rolls Royce-approved leather care products</li>
                <li>✓ Condition box grain leather monthly</li>
                <li>✓ Protect from direct sunlight with window shades</li>
                <li>✓ Clean spills immediately with soft, damp cloth</li>
                <li>✓ Professional detailing every 3 months</li>
                <li>✓ Store in climate-controlled environment</li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Experience Bespoke Perfection</h3>
            <p className="text-gray-700 mb-6 text-lg">
              Your Rolls Royce deserves nothing less than perfection. Contact Al Ettisam to discuss your bespoke interior project. We serve discerning Rolls Royce owners throughout Dubai and the UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:0554969599" className="bg-purple-900 hover:bg-purple-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300 text-center text-lg">
                Call: 055 4969599
              </a>
              <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300 text-center text-lg">
                WhatsApp Us
              </a>
            </div>

            <div className="text-center">
              <Link href="/" className="text-purple-700 hover:text-purple-900 font-semibold text-lg">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


