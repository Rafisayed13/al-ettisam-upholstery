
'use client';

import React from 'react';
import Image from 'next/image';
import Head from 'next/head';


const HomePage = () => {
  const localBusinessSchema = '';
  
  return (
    <>
      <Head>
        <title>Car Seat Upholstery Dubai | Car Seats, Seat Repair & Custom Interiors | Al Ettisam</title>
        <meta name="description" content="Looking for car seats, car seat upholstery, seat repair, or custom leather interiors in Dubai? Al Ettisam provides expert car seat repair, upholstery, restoration, and custom interiors for all vehicles. Transform your car’s interior with our quality craftsmanship and professional service." />
        <meta name="keywords" content="car seats, car seat upholstery, seat repair, car seat repair Dubai, car upholstery Dubai, leather car seats, custom car interiors, car seat restoration, car seat replacement, car seat covers, Al Ettisam" />
        <meta property="og:title" content="Car Seat Upholstery Dubai | Car Seats, Seat Repair & Custom Interiors | Al Ettisam" />
        <meta property="og:description" content="Find car seats, car seat upholstery, seat repair, and custom interiors in Dubai. Al Ettisam offers expert car seat repair, restoration, and luxury leather interiors." />
        <meta property="og:url" content="https://al-ettisam-upholstery.com" />
        <meta property="og:image" content="/hero-car.jpg" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="canonical" href="https://al-ettisam-upholstery.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: localBusinessSchema }} />
        
        {/* Services Schema */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Al Ettisam Car Seat Upholstery",
          "image": "/hero-car.jpg",
          "logo": {
            "@type": "ImageObject",
            "url": "https://alettisamcarseatsupholstery.com/logo.png",
            "width": 250,
            "height": 250
          },
          "description": "Expert car seat upholstery, repair, and custom leather interiors in Dubai",
          "telephone": "+971-55-4969599",
          "email": "mdullah163@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "Umm Ramool, Al Rashidiya",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "postalCode": "",
            "addressCountry": "AE"
          },
          "areaServed": {
            "@type": "City",
            "name": "Dubai"
          },
          "priceRange": "$$",
          "sameAs": [
            "https://www.facebook.com/profile.php?id=61578155746837",
            "https://www.instagram.com/al_ettisam_carseatsupholstery",
            "https://www.tiktok.com/@al.ettisam.car.se"
          ],
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Car Seat Upholstery Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "name": "Car Seat Upholstery",
                "description": "Professional car seat upholstery and reupholstering services"
              },
              {
                "@type": "Offer",
                "name": "Seat Repair",
                "description": "Expert car seat repair and restoration"
              },
              {
                "@type": "Offer",
                "name": "Custom Leather Interiors",
                "description": "Custom leather interior design and installation"
              }
            ]
          }
        }) }} />
      </Head>
      {/* Navbar is now included globally in layout.jsx */}
      <main className="pt-0 md:pt-0">
        {/* Hero Section */}
        <div className="relative h-[50vh] sm:h-[60vh] md:h-[80vh] flex items-center justify-center text-white animate-fade-in">
          <Image
            src="/hero-car.jpg"
            alt="Dubai car seat upholstery - luxury interior by Al Ettisam"
            fill
            style={{ objectFit: 'cover' }}
            priority
            className="absolute inset-0 z-0"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
          <div className="relative z-20 text-center px-4 sm:px-6 md:px-8 animate-slide-up mt-4 sm:mt-8">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold mb-3 sm:mb-4 leading-tight text-blue-400">
              Al Ettisam Car Seat Upholstery in Dubai
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl mb-4 sm:mb-6 max-w-2xl mx-auto px-2">
              Transform your car's interior with our expert custom upholstery, leather interiors, and professional repair services.
            </p>
            <a href="#contact" className="inline-block" aria-label="Get a Free Quote">
              <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-full shadow-lg transition-colors duration-300 text-sm sm:text-base">
                Get a Free Quote
              </button>
            </a>
          </div>
        </div>
        {/* Why Choose Us Section */}
        <section className="py-10 sm:py-14 md:py-20 bg-white animate-fade-in">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Experienced Card */}
              <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Experienced</h3>
                <p className="text-gray-600">We are a leading provider of upholstery services and specialize in car interior upholstery since 2006.</p>
              </div>
              {/* Quality Service Card */}
              <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m0 0l-2-1m2 1v2.5M14 4l-2 1m0 0L10 4m2 1v2.5" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Quality Service</h3>
                <p className="text-gray-600">Our experienced auto upholstery professionals know how to take incredible care of your vehicle.</p>
              </div>
              {/* Affordable Prices Card */}
              <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg text-center">
                <div className="flex justify-center mb-6">
                  <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center">
                    <svg className="w-12 h-12 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">Affordable Prices</h3>
                <p className="text-gray-600">Our goal is to offer services that deliver outstanding value for your money, all while maintaining competitive pricing.</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services Section - Redesigned */}
        <section className="py-10 sm:py-14 md:py-20 bg-[##E3F2FD] text-gray-900 animate-fade-in" id="services">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services in Dubai</h2>
            <p className="text-lg md:text-xl text-gray-700 mb-12 max-w-3xl mx-auto">
              Choose from a wide range of custom upholstery, repairs, and interior designs tailored to your style.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
              {/* Service Card 1 */}
              <a href="/services/customised-leather-seats" className="block">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-gradient-to-b from-blue-900 to-blue-700 transition-transform duration-500 hover:scale-105 animate-zoom-in mb-6">
                  <div className="w-full h-40 relative">
                    <Image src="/service-1.jpg" alt="Customised Leather Seats" fill style={{ objectFit: 'cover' }} className="object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900 to-blue-900 opacity-70"></div>
                  <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Customised Leather Seats</h3>
                    <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Premium customised leather seats for unmatched comfort and style. Click to learn more.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                      <a href="tel:0554969599" onClick={(e) => e.stopPropagation()} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                        Call Us
                      </a>
                      <a href="https://wa.me/971551010341" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              {/* Service Card 2 */}
              <a href="/services/repair-restoration" className="block">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-gradient-to-b from-blue-900 to-blue-700 transition-transform duration-500 hover:scale-105 animate-zoom-in">
                  <div className="w-full h-40 relative">
                    <Image src="/service-2.jpg" alt="Repair & Restoration" fill style={{ objectFit: 'cover' }} className="object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900 to-blue-900 opacity-70"></div>
                  <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Repair & Restoration</h3>
                    <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Professional repair of torn or damaged seats, restoration of classic car interiors. Click to learn more.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                      <a href="tel:0554969599" onClick={(e) => e.stopPropagation()} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                        Call Us
                      </a>
                      <a href="https://wa.me/971551010341" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              {/* Service Card 3 */}
              <a href="/services/steering-wheel-customization" className="block">
                <div className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-gradient-to-b from-blue-900 to-blue-700 transition-transform duration-500 hover:scale-105 animate-zoom-in">
                  <div className="w-full h-40 relative">
                    <Image src="/service-3.png" alt="Steering Wheel Customization" fill style={{ objectFit: 'cover' }} className="object-cover" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900 to-blue-900 opacity-70"></div>
                  <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 relative z-10">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Steering Wheel Customization</h3>
                    <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Premium materials like carbon fiber, leather wrapping, and custom finishes. Click to learn more.</p>
                    <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                      <a href="tel:0554969599" onClick={(e) => e.stopPropagation()} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                        Call Us
                      </a>
                      <a href="https://wa.me/971551010341" target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </div>
              </a>
              {/* Service Card 4 - Seat Covers */}
              <a href="/services/seat-covers" className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-gradient-to-b from-blue-900 to-blue-700 transition-transform duration-500 hover:scale-105 animate-zoom-in cursor-pointer">
                <div className="w-full h-40 relative">
                  <Image src="/seat-covers.jpg" alt="Seat Covers" fill style={{ objectFit: 'cover' }} className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900 to-blue-900 opacity-70"></div>
                <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Seat Covers</h3>
                  <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Custom designed seat covers to protect and enhance your car's interior with style and comfort.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='tel:0554969599'; }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      Call Us
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='https://wa.me/971551010341'; }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </a>
              {/* Service Card 5 - Dashboard */}
              <a href="/services/dashboard" className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-gradient-to-b from-blue-900 to-blue-700 transition-transform duration-500 hover:scale-105 animate-zoom-in cursor-pointer">
                <div className="w-full h-40 relative">
                  <Image src="/dashboard.jpg" alt="Dashboard" fill style={{ objectFit: 'cover' }} className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900 to-blue-900 opacity-70"></div>
                <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Dashboard</h3>
                  <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Restore or repair you dashboard to OEM finishes or custom preference.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='tel:0554969599'; }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      Call Us
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='https://wa.me/971551010341'; }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </a>
              {/* Service Card 8 - Door Panel */}
              <a href="/services/door-panel" className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-gradient-to-b from-blue-900 to-blue-700 transition-transform duration-500 hover:scale-105 animate-zoom-in cursor-pointer">
                <div className="w-full h-40 relative">
                  <Image src="/door-panel.jpg" alt="Door Panel" fill style={{ objectFit: 'cover' }} className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900 to-blue-900 opacity-70"></div>
                <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Door Panel</h3>
                  <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">We repair and restore all your door panel to original condition or custom preference.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='tel:0554969599'; }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      Call Us
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='https://wa.me/971551010341'; }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </a>
              {/* Service Card 9 - Carpets */}
              <a href="/services/carpets" className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-gradient-to-b from-blue-900 to-blue-700 transition-transform duration-500 hover:scale-105 animate-zoom-in cursor-pointer">
                <div className="w-full h-40 relative">
                  <Image src="/carpets.jpg" alt="Carpets" fill style={{ objectFit: 'cover' }} className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900 to-blue-900 opacity-70"></div>
                <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Carpets</h3>
                  <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Repair or replace your carpet, floor mats, trunk mats, sound deadener mats etc.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='tel:0554969599'; }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      Call Us
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='https://wa.me/971551010341'; }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </a>
              {/* Service Card 10 - Seat Belts */}
              <a href="/services/seat-belts" className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-gradient-to-b from-blue-900 to-blue-700 transition-transform duration-500 hover:scale-105 animate-zoom-in cursor-pointer">
                <div className="w-full h-40 relative">
                  <Image src="/seat-belts.jpg" alt="Seat Belts" fill style={{ objectFit: 'cover' }} className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900 to-blue-900 opacity-70"></div>
                <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Seat Belts</h3>
                  <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Change your existing seat belt to custom colored webbing seat belt.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='tel:0554969599'; }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      Call Us
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='https://wa.me/971551010341'; }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </a>
              {/* Service Card 11 - Boat & Yacht Seat Upholstery */}
              <a href="/services/boat-yacht" className="relative h-96 rounded-lg overflow-hidden shadow-xl flex flex-col bg-gradient-to-b from-blue-900 to-blue-700 transition-transform duration-500 hover:scale-105 animate-zoom-in cursor-pointer">
                <div className="w-full h-40 relative">
                  <Image src="/boat-yacht.jpg" alt="Boat & Yacht Seat Upholstery" fill style={{ objectFit: 'cover' }} className="object-cover" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900 to-blue-900 opacity-70"></div>
                <div className="flex-1 flex flex-col justify-end p-4 sm:p-6 relative z-10">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">Boat & Yacht Seat Upholstery</h3>
                  <p className="text-blue-100 text-xs sm:text-sm mb-3 sm:mb-4">Professional upholstery services for boat and yacht seats with marine-grade materials and expert craftsmanship.</p>
                  <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='tel:0554969599'; }} className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      Call Us
                    </button>
                    <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); window.location.href='https://wa.me/971551010341'; }} className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 sm:px-6 rounded-full transition-colors duration-300 text-sm text-center">
                      WhatsApp
                    </button>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>
        {/* Gallery Section */}
        <section className="py-10 sm:py-14 md:py-20 animate-fade-in" id="gallery">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Curious about our work?  – Our Projects</h2>
            <p className="text-gray-600 mb-12 max-w-3xl mx-auto">
              Browse our portfolio of recent car seat upholstery, seat repair, and custom interior projects in Dubai. See how Al Ettisam transforms car seats, repairs damaged upholstery, and creates luxury interiors for all vehicle types. If you’re searching for car seats, car seat upholstery, or seat repair in Dubai, our gallery showcases the best results and craftsmanship.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 sm:gap-3 md:gap-4 mb-8">
              {/* Gallery Image 1 */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image 
                  src="/gallery-image-1.jpg"
                  alt="Car seat before upholstery repair - Al Ettisam Dubai, car seat repair, car seat upholstery"
                  fill
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              {/* Gallery Image 2 */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image 
                  src="/gallery-image-2.jpg"
                  alt="Custom leather car seat after upholstery - Al Ettisam Dubai, car seats, leather car seats"
                  fill
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              {/* Gallery Image 3 */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image 
                  src="/gallery-image-3.jpg"
                  alt="Embroidered logo on car seat headrest - Al Ettisam Dubai, custom car interiors"
                  fill
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              {/* Gallery Image 4 */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image 
                  src="/gallery-image-4.jpg"
                  alt="Restored classic car interior - Al Ettisam Dubai, seat restoration, car seat covers"
                  fill
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              {/* Add more images here... */}
              {/* Gallery Image - Rolls */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image
                  src="/rolls.png"
                  alt="Rolls upholstery example"
                  fill
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              {/* Gallery Image - Pors */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image
                  src="/pors1.jpg"
                  alt="Pors upholstery example"
                  fill
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              {/* Gallery Image - Boat Seat */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image
                  src="/Boat seat.jpg"
                  alt="Boat seat upholstery example"
                  fill
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
              {/* Gallery Image - Purple */}
              <div className="relative aspect-square transition-transform duration-500 hover:scale-105 animate-zoom-in">
                <Image
                  src="/purple.jpg"
                  alt="Purple upholstery example"
                  fill
                  className="rounded-lg object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Luxury Cars Brands Section */}
        <section className="py-10 sm:py-14 md:py-20 bg-white animate-fade-in" id="brands">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900"> Car Brands We Service in Dubai</h2>
              <p className="text-lg md:text-xl text-gray-700 font-semibold">
                Luxury, American, German, British, European, Exotic, Classic & High-End Japanese Cars<br />
                Interior and Seat Upholstery
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Audi */}
              <a href="/brands/audi" className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 text-center block">
                <div className="relative aspect-square mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/audi.jpg"
                    alt="Audi car upholstery"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Audi</h3>
                <span className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
                  See More <span>&rarr;</span>
                </span>
              </a>

              {/* BMW */}
              <a href="/brands/bmw" className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 text-center block">
                <div className="relative aspect-square mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/bmw.png"
                    alt="BMW car upholstery"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">BMW</h3>
                <span className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
                  See More <span>&rarr;</span>
                </span>
              </a>

              {/* Rolls Royce */}
              <a href="/brands/rolls-royce" className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 text-center block">
                <div className="relative aspect-square mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/rolls2.jpg"
                    alt="Rolls Royce car upholstery"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Rolls Royce</h3>
                <span className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
                  See More <span>&rarr;</span>
                </span>
              </a>

              {/* Nissan */}
              <a href="/brands/nissan" className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 text-center block">
                <div className="relative aspect-square mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/Nissan.png"
                    alt="Nissan car upholstery"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Nissan</h3>
                <span className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
                  See More <span>&rarr;</span>
                </span>
              </a>

              {/* Ferrari */}
              <a href="/brands/ferrari" className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 text-center block">
                <div className="relative aspect-square mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/ferrari.jpg"
                    alt="Ferrari car upholstery"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Ferrari</h3>
                <span className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
                  See More <span>&rarr;</span>
                </span>
              </a>

              {/* Toyota */}
              <a href="/brands/toyota" className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 text-center block">
                <div className="relative aspect-square mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/Toyota.jpg"
                    alt="Toyota car upholstery"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Toyota</h3>
                <span className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
                  See More <span>&rarr;</span>
                </span>
              </a>

              {/* Porsche */}
              <a href="/brands/porsche" className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 text-center block">
                <div className="relative aspect-square mb-4 bg-gray-200 rounded-lg overflow-hidden">
                  <Image
                    src="/por.png"
                    alt="Porsche car upholstery"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">Porsche</h3>
                <span className="text-blue-600 hover:text-blue-800 flex items-center justify-center gap-2">
                  See More <span>&rarr;</span>
                </span>
              </a>

              {/* View All */}
              <a href="/brands/all-brands" className="bg-gray-900 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow p-6 text-center block">
                <div className="relative aspect-square mb-4 bg-gray-800 rounded-lg overflow-hidden">
                  <Image
                    src="/multiple.jpg"
                    alt="Multiple cars upholstery"
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-white">View All</h3>
                <span className="text-blue-400 hover:text-blue-300 flex items-center justify-center gap-2">
                  See More <span>&rarr;</span>
                </span>
              </a>
            </div>
          </div>
        </section>
        {/* Google Reviews Section */}
        <section className="py-10 sm:py-14 md:py-20 bg-gray-100 animate-fade-in" id="reviews">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 flex items-center justify-center gap-2 text-gray-900">
              <span>Google Reviews</span>
              <Image src="/google-logo.png" alt="Google logo" width={32} height={32} className="inline-block align-middle" />
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              See what our customers are saying about our premium car upholstery services.
            </p>
            <div className="bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-2">EXCELLENT</h3>
              <div className="flex justify-center text-yellow-400 text-3xl mb-2 space-x-1">
                <span className="relative z-10">★</span>
                <span className="relative z-10">★</span>
                <span className="relative z-10">★</span>
                <span className="relative z-10">★</span>
                <span className="relative z-10">★</span>
              </div>
              <p className="text-sm text-gray-500 mb-6">Based on 72 reviews</p>
              <div className="text-center mb-6">
                <p className="italic text-gray-700">"The service is excellent and fast, and the staff are very professional."</p>
                <p className="text-sm text-gray-500 mt-2">- Farida Ali</p>
              </div>
              <a 
                href="https://share.google/LDuBXkLoSUHXu24j4"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center justify-center bg-[#123A5A] hover:bg-[#0F3148] text-white font-bold py-3 px-6 rounded-full shadow-lg transition-colors duration-300"
              >
                <span className="mr-2">Click here to leave a review on Google!</span>
              </a>
            </div>
          </div>
        </section>
        {/* Visit Us Section */}
        <section className="py-10 sm:py-14 md:py-20 bg-blue-50 animate-fade-in" id="visit">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
              {/* Left Content */}
              <div className="text-gray-900">
                <div className="flex items-start gap-4 mb-8">
                  <span className="text-4xl text-red-600 mt-2">&gt;&gt;&gt;</span>
                  <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">VISIT AL ETTISAM CAR UPHOLSTERY</h2>
                    <p className="text-lg mb-8 leading-relaxed text-gray-700">
                      Visit us at our Shop in Dubai. Conveniently located in Umm Ramool, Al Rashidiya, we're ready to serve you!
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex items-start gap-4">
                        <span className="text-red-600 text-2xl mt-1">📍</span>
                        <div>
                          <h3 className="font-bold text-lg mb-1 text-gray-900">Address</h3>
                          <p className="text-gray-700">Umm Ramool, Al Rashidiya, Dubai, UAE</p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <span className="text-red-600 text-2xl mt-1">📞</span>
                        <div>
                          <h3 className="font-bold text-lg mb-1 text-gray-900">Call Us</h3>
                          <p className="text-gray-700"><a href="tel:+971-55-4969599" className="hover:text-blue-600 transition-colors">055 4969599</a></p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-4">
                        <span className="text-red-600 text-2xl mt-1">✉️</span>
                        <div>
                          <h3 className="font-bold text-lg mb-1 text-gray-900">Email Us</h3>
                          <p className="text-gray-700"><a href="mailto:mdullah163@gmail.com" className="hover:text-blue-600 transition-colors">mdullah163@gmail.com</a></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right - Google Maps Embed */}
              <div className="rounded-lg overflow-hidden shadow-2xl" style={{ height: '400px', width: '100%' }}>
                <iframe
                  title="Al Ettisam Car Upholstery Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.321042559243!2d55.35856267437787!3d25.226109630530935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d8251f87a59%3A0xe1caba45a8352419!2sAl%20Ettisam%20Car%20Seats%20Upholstery!5e0!3m2!1sen!2sae!4v1765227395320!5m2!1sen!2sae"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section - SEO Optimized */}
        <section className="py-10 sm:py-14 md:py-20 bg-gray-100 animate-fade-in" id="contact">
          <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Contact Al Ettisam – Car Seat Upholstery & Repair Dubai</h2>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Looking for car seat upholstery, car seat repair, or custom leather interiors in Dubai? Fill out the form below to get a free quote or expert advice from Al Ettisam’s professional team. We specialize in car seat restoration, seat covers, leather interiors, and all types of car upholstery services in Dubai.
            </p>
            <div className="max-w-2xl mx-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-xl mb-8">
              <form
                action="https://formspree.io/f/xpwljzlo"
                method="POST"
                className="space-y-6 text-left"
                aria-label="Contact form for car seat upholstery, repair, and custom interiors in Dubai"
              >
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name (required)
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    autoComplete="name"
                    placeholder="Your Name"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                    aria-label="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email (required)
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="_replyto"
                    required
                    autoComplete="email"
                    placeholder="you@email.com"
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                    aria-label="Your Email Address"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message (required)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows="4"
                    required
                    placeholder="Tell us about your car seat repair, upholstery, or custom interior needs in Dubai..."
                    className="mt-1 block w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
                    aria-label="Your Message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-3 px-8 rounded-full shadow-lg transition-colors duration-300"
                  aria-label="Submit contact form for car seat upholstery and repair in Dubai"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-8">
        <div className="container w-full max-w-none mx-auto px-2 sm:px-4 md:px-8">
          <h3 className="text-xl font-bold mb-2">Our Location – Al Ettisam Car Seat Upholstery Dubai</h3>
          <p className="mb-4">
            Dubai 1 Street 23/1, Umm Ramool, Dubai, UAE<br />
            <a href="https://maps.google.com/?cid=16270021412166902809&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" target="_blank" rel="noopener noreferrer" className="text-[#3da0c6] hover:text-yellow-500 transition-colors">
              Get Directions on Google Maps
            </a>
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 mb-4">
            <a href="tel:0554969599" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300 w-full sm:w-auto text-center">
              Call Al Ettisam
            </a>
            <a href="https://wa.me/971551010341" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300 w-full sm:w-auto text-center">
              WhatsApp Al Ettisam
            </a>
            <a href="https://maps.google.com/?cid=16270021412166902809&g_mp=Cidnb29nbGUubWFwcy5wbGFjZXMudjEuUGxhY2VzLlNlYXJjaFRleHQ" target="_blank" rel="noopener noreferrer" className="bg-[#123A5A] hover:bg-[#0F3148] text-white font-bold py-2 px-6 rounded-full shadow-lg transition-colors duration-300 w-full sm:w-auto text-center">
              Directions
            </a>
          </div>
          <p className="text-lg font-bold">
            Email: <a href="mailto:alettisamcarseatsupholstery@gmail.com" className="hover:text-yellow-500 transition-colors">alettisamcarseatupholstery@gmail.com</a>
          </p>
          
          {/* Social Media Icons */}
          <div className="flex justify-center items-center gap-6 my-6">
            <a 
              href="https://www.facebook.com/profile.php?id=61578155746837" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="hover:text-blue-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.instagram.com/al_ettisam_carseatsupholstery?igsh=MWlpMHA3NWVmdzJu" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="hover:text-pink-400 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.588.147-1.079.35-1.56.831-.481.481-.684.972-.831 1.56-.267.788-.468 1.658-.527 2.936C.039 8.333.024 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.527 2.936.147.588.35 1.079.831 1.56.481.481.972.684 1.56.831.788.267 1.658.468 2.936.527C8.333 23.961 8.74 23.976 12 23.976s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.527.588-.147 1.079-.35 1.56-.831.481-.481.684-.972.831-1.56.267-.788.468-1.658.527-2.936.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.527-2.936-.147-.588-.35-1.079-.831-1.56-.481-.481-.972-.684-1.56-.831-.788-.267-1.658-.468-2.936-.527C15.667.039 15.26.024 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.821.896 1.381.164.422.354 1.057.408 2.228.061 1.264.07 1.645.07 4.849 0 3.203-.009 3.585-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.164-1.057.354-2.228.408-1.264.061-1.645.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.164-.422-.354-1.057-.408-2.228-.061-1.264-.07-1.645-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.171.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.164 1.057-.354 2.228-.408 1.264-.061 1.645-.07 4.849-.07zm0 3.678c-3.401 0-6.162 2.761-6.162 6.162 0 3.401 2.761 6.162 6.162 6.162 3.401 0 6.162-2.761 6.162-6.162 0-3.401-2.761-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            
            <a 
              href="https://www.tiktok.com/@al.ettisam.car.se?_r=1&_t=ZS-924Tpd4paAH" 
              target="_blank" 
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-gray-300 transition-colors"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.498 3.094c1.7.894 2.894 2.672 3.097 4.733.02.23.02.462.02.694 0 .233 0 .465-.02.695-.203 2.061-1.397 3.839-3.097 4.733v3.844c1.504-.755 2.85-1.874 3.807-3.267.957-1.393 1.504-3.005 1.504-4.713 0-1.708-.547-3.32-1.504-4.713-.957-1.393-2.303-2.512-3.807-3.267v3.844zm-8.52 12.914c-.704.607-1.628.971-2.645.971-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95c1.017 0 1.941.364 2.645.971v3.958zm0-8.868V3.5c-1.057-.14-2.131-.14-3.188 0v12.54c-.704.607-1.628.971-2.645.971-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95c1.017 0 1.941.364 2.645.971v3.958c1.007-.857 2.339-1.377 3.788-1.377 2.18 0 3.95 1.77 3.95 3.95s-1.77 3.95-3.95 3.95c-1.449 0-2.781-.52-3.788-1.377z"/>
              </svg>
            </a>
          </div>
          
          <p className="mt-4 text-sm text-gray-500">&copy; {new Date().getFullYear()} Al Ettisam Car Seat Upholstery Dubai. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
