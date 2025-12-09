import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'All Car Brands Upholstery Dubai | Interior Restoration | Al Ettisam',
  description: 'Expert upholstery services for all car brands in Dubai. Honda, Mazda, Chevrolet, Hyundai, Kia, and more. Professional seat repair, leather restoration, full interior services.',
  keywords: 'car upholstery Dubai, Honda upholstery, Mazda interior, Chevrolet seats, Hyundai upholstery, Kia interior, car seat repair Dubai',
};

export default function AllBrandsPage() {
  return (
    <main className="pt-20 md:pt-28 min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <Image
          src="/interior.jpg"
          alt="All Car Brands Upholstery"
          fill
          style={{ objectFit: 'cover' }}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 animate-fade-in">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-3 md:mb-4 animate-slide-up">All Car Brands Welcome</h1>
            <p className="text-lg sm:text-xl md:text-2xl animate-slide-up delay-200">Expert Upholstery for Every Make & Model</p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Complete Interior Services for All Car Brands</h2>
            
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              At Al Ettisam, we provide professional upholstery and interior restoration services for all car brands in Dubai. Whether you drive a Honda, Mazda, Chevrolet, Hyundai, Kia, or any other make, our expert craftsmen deliver quality results that restore your vehicle's interior to pristine condition.
            </p>

            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🚗 No Brand Left Behind</h3>
              <p className="mb-4">
                From economy cars to premium vehicles, we treat every car with the same level of care and expertise. Our team has experience working with all major car manufacturers and uses materials specifically suited to your vehicle's requirements.
              </p>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Car Brands We Service:</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4 mb-8">
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Honda</h5>
                <p className="text-xs md:text-sm text-gray-600">Civic, Accord, CR-V</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Mazda</h5>
                <p className="text-xs md:text-sm text-gray-600">CX-5, CX-9, Mazda 3</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Chevrolet</h5>
                <p className="text-xs md:text-sm text-gray-600">Tahoe, Suburban, Camaro</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Hyundai</h5>
                <p className="text-xs md:text-sm text-gray-600">Tucson, Santa Fe, Elantra</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Kia</h5>
                <p className="text-xs md:text-sm text-gray-600">Sportage, Sorento, Optima</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Ford</h5>
                <p className="text-xs md:text-sm text-gray-600">Explorer, F-150, Mustang</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Jeep</h5>
                <p className="text-xs md:text-sm text-gray-600">Wrangler, Grand Cherokee</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Volkswagen</h5>
                <p className="text-xs md:text-sm text-gray-600">Golf, Tiguan, Passat</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Mitsubishi</h5>
                <p className="text-xs md:text-sm text-gray-600">Pajero, Outlander, Lancer</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Subaru</h5>
                <p className="text-xs md:text-sm text-gray-600">Outback, Forester, WRX</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Volvo</h5>
                <p className="text-xs md:text-sm text-gray-600">XC90, XC60, S90</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">GMC</h5>
                <p className="text-xs md:text-sm text-gray-600">Yukon, Sierra, Terrain</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Dodge</h5>
                <p className="text-xs md:text-sm text-gray-600">Durango, Charger, RAM</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Chrysler</h5>
                <p className="text-xs md:text-sm text-gray-600">300, Pacifica, Voyager</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Renault</h5>
                <p className="text-xs md:text-sm text-gray-600">Duster, Koleos, Megane</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Peugeot</h5>
                <p className="text-xs md:text-sm text-gray-600">3008, 5008, 508</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Citroën</h5>
                <p className="text-xs md:text-sm text-gray-600">C5 Aircross, C4</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Skoda</h5>
                <p className="text-xs md:text-sm text-gray-600">Octavia, Superb, Kodiaq</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">SEAT</h5>
                <p className="text-xs md:text-sm text-gray-600">Leon, Ateca, Ibiza</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Suzuki</h5>
                <p className="text-xs md:text-sm text-gray-600">Vitara, Swift, Jimny</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Fiat</h5>
                <p className="text-xs md:text-sm text-gray-600">500, 500X, Tipo</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Alfa Romeo</h5>
                <p className="text-xs md:text-sm text-gray-600">Giulia, Stelvio</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Mini Cooper</h5>
                <p className="text-xs md:text-sm text-gray-600">Cooper, Countryman</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Genesis</h5>
                <p className="text-xs md:text-sm text-gray-600">G80, GV80, G70</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Infiniti</h5>
                <p className="text-xs md:text-sm text-gray-600">QX80, QX60, Q50</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Acura</h5>
                <p className="text-xs md:text-sm text-gray-600">MDX, RDX, TLX</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Buick</h5>
                <p className="text-xs md:text-sm text-gray-600">Enclave, Encore</p>
              </div>
              <div className="bg-blue-50 p-3 md:p-4 rounded-lg text-center border-2 border-blue-200 hover:border-blue-500 transition-colors">
                <h5 className="font-bold text-sm md:text-base text-gray-900">Lincoln</h5>
                <p className="text-xs md:text-sm text-gray-600">Navigator, Aviator</p>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Complete Interior Services:</h3>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-8">
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🪑 Seat Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Complete seat reupholstery</li>
                  <li>✓ Leather seat restoration</li>
                  <li>✓ Fabric seat repair</li>
                  <li>✓ Custom seat covers</li>
                  <li>✓ Foam replacement and reshaping</li>
                  <li>✓ Seat heating/cooling installation</li>
                  <li>✓ Sports seat conversion</li>
                  <li>✓ Color change and customization</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🎨 Full Interior</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Dashboard restoration</li>
                  <li>✓ Door panel reupholstery</li>
                  <li>✓ Headliner replacement</li>
                  <li>✓ Steering wheel re-trimming</li>
                  <li>✓ Carpet replacement</li>
                  <li>✓ Center console refurbishment</li>
                  <li>✓ Trim piece restoration</li>
                  <li>✓ Armrest repair and replacement</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">🔧 Repair Services</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leather crack and tear repair</li>
                  <li>✓ Burn hole restoration</li>
                  <li>✓ Color restoration and matching</li>
                  <li>✓ Stitching repair</li>
                  <li>✓ Bolster reconstruction</li>
                  <li>✓ Seat frame welding</li>
                  <li>✓ Recliner mechanism repair</li>
                  <li>✓ Water damage restoration</li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-blue-50 p-6 rounded-lg border-l-4 border-purple-500">
                <h4 className="text-lg md:text-xl font-bold mb-3 text-gray-900">✨ Premium Upgrades</h4>
                <ul className="space-y-2 text-gray-700">
                  <li>✓ Leather upgrade from cloth</li>
                  <li>✓ Perforated leather installation</li>
                  <li>✓ Two-tone color schemes</li>
                  <li>✓ Contrast stitching</li>
                  <li>✓ Logo embroidery</li>
                  <li>✓ Alcantara accents</li>
                  <li>✓ Carbon fiber trim</li>
                  <li>✓ Custom piping details</li>
                </ul>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6 md:p-8 rounded-lg mb-8 animate-slide-in-left hover:shadow-2xl transition-shadow duration-300">
              <h3 className="text-2xl font-bold mb-4">🌟 Material Options for Every Budget</h3>
              <p className="mb-4">
                We offer a wide range of materials to suit every budget and preference, from economy-friendly synthetic leather to premium genuine leather and exotic materials.
              </p>
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div>
                  <h4 className="font-bold mb-2">Economy Range:</h4>
                  <ul className="space-y-1">
                    <li>• High-quality PU leather</li>
                    <li>• Premium fabric options</li>
                    <li>• Vinyl with textile backing</li>
                    <li>• UV-resistant materials</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Mid-Range:</h4>
                  <ul className="space-y-1">
                    <li>• Top-grain leather</li>
                    <li>• Perforated leather</li>
                    <li>• Nappa-style leather</li>
                    <li>• Suede/Alcantara</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Premium:</h4>
                  <ul className="space-y-1">
                    <li>• Full-grain Nappa</li>
                    <li>• Semi-aniline leather</li>
                    <li>• Genuine Alcantara</li>
                    <li>• Exotic materials</li>
                  </ul>
                </div>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Popular Services by Vehicle Type:</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-lg text-gray-900">🚗 Sedans & Hatchbacks</h4>
                <p className="text-gray-700 text-sm mb-2">Honda Civic, Mazda 3, Hyundai Elantra</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Front seat restoration</li>
                  <li>• Leather upgrade packages</li>
                  <li>• Sport seat installation</li>
                  <li>• Color customization</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-lg text-gray-900">🚙 SUVs & Crossovers</h4>
                <p className="text-gray-700 text-sm mb-2">Honda CR-V, Mazda CX-5, Kia Sportage</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Full 7-seater reupholstery</li>
                  <li>• Third-row seat restoration</li>
                  <li>• Captain seat conversion</li>
                  <li>• Cargo area lining</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-bold mb-3 text-lg text-gray-900">🛻 Trucks & Large SUVs</h4>
                <p className="text-gray-700 text-sm mb-2">Chevrolet Tahoe, Ford F-150, GMC Yukon</p>
                <ul className="space-y-1 text-sm text-gray-700">
                  <li>• Heavy-duty materials</li>
                  <li>• Bench seat conversion</li>
                  <li>• Work truck durability</li>
                  <li>• Family comfort packages</li>
                </ul>
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Why Choose Al Ettisam?</h3>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-5xl mb-3">🏆</div>
                <h4 className="font-bold mb-2 text-lg">Expert Craftsmanship</h4>
                <p className="text-gray-700 text-sm">Years of experience with all car brands</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-5xl mb-3">💰</div>
                <h4 className="font-bold mb-2 text-lg">Competitive Pricing</h4>
                <p className="text-gray-700 text-sm">Quality service at fair prices</p>
              </div>
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <div className="text-5xl mb-3">⚡</div>
                <h4 className="font-bold mb-2 text-lg">Quick Turnaround</h4>
                <p className="text-gray-700 text-sm">Fast service without compromising quality</p>
              </div>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
              <h3 className="text-lg md:text-xl font-bold mb-3 text-gray-900">💡 Interior Care Tips</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Clean spills immediately to prevent staining</li>
                <li>✓ Use UV protection to prevent fading</li>
                <li>✓ Regular conditioning for leather seats</li>
                <li>✓ Vacuum weekly to remove debris</li>
                <li>✓ Avoid harsh chemicals on interior surfaces</li>
                <li>✓ Professional cleaning every 6 months</li>
              </ul>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">Transform Your Car's Interior Today</h3>
            <p className="text-gray-700 mb-6 text-lg">
              No matter what car brand you drive, Al Ettisam delivers professional upholstery and interior restoration services in Dubai. Contact us for a free consultation and quote.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <a href="tel:0554969599" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300 text-center text-lg">
                Call: 055 4969599
              </a>
              <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:scale-105 transition-all duration-300 text-center text-lg">
                WhatsApp Us
              </a>
            </div>

            <div className="text-center">
              <Link href="/" className="text-blue-600 hover:text-blue-800 font-semibold text-lg">
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}


