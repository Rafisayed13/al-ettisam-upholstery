"use client";

import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Social Media Bar */}
      <div className="hidden md:block bg-blue-100 text-gray-800 py-2 px-4 w-full fixed left-0 right-0 z-50" style={{ top: "0px", position: "fixed" }}>
        <div className="container mx-auto flex justify-between items-center gap-4">
          {/* Left - Location and Phone */}
          <div className="flex items-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-red-600">📍</span>
              <span>Umm Ramool, Dubai</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-red-600">📞</span>
              <a href="tel:055-4969599" className="hover:text-blue-600 transition-colors text-gray-800">055 4969599</a>
            </div>
          </div>

          {/* Right - Social Icons */}
          <div className="flex items-center gap-4">
          <a 
            href="https://www.facebook.com/profile.php?id=61578155746837" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:text-blue-600 transition-colors text-gray-800"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          
          <a 
            href="https://www.instagram.com/al_ettisam_carseatsupholstery?igsh=MWlpMHA3NWVmdzJu" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:text-pink-600 transition-colors text-gray-800"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.588.147-1.079.35-1.56.831-.481.481-.684.972-.831 1.56-.267.788-.468 1.658-.527 2.936C.039 8.333.024 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.527 2.936.147.588.35 1.079.831 1.56.481.481.972.684 1.56.831.788.267 1.658.468 2.936.527C8.333 23.961 8.74 23.976 12 23.976s3.667-.015 4.947-.072c1.277-.06 2.148-.261 2.936-.527.588-.147 1.079-.35 1.56-.831.481-.481.684-.972.831-1.56.267-.788.468-1.658.527-2.936.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.261-2.148-.527-2.936-.147-.588-.35-1.079-.831-1.56-.481-.481-.972-.684-1.56-.831-.788-.267-1.658-.468-2.936-.527C15.667.039 15.26.024 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.561.217.96.477 1.382.896.419.42.679.821.896 1.381.164.422.354 1.057.408 2.228.061 1.264.07 1.645.07 4.849 0 3.203-.009 3.585-.07 4.849-.054 1.171-.244 1.805-.408 2.227-.217.561-.477.96-.896 1.382-.42.419-.821.679-1.381.896-.422.164-1.057.354-2.228.408-1.264.061-1.645.07-4.849.07-3.203 0-3.585-.009-4.849-.07-1.171-.054-1.805-.244-2.227-.408-.561-.217-.96-.477-1.382-.896-.419-.42-.679-.821-.896-1.381-.164-.422-.354-1.057-.408-2.228-.061-1.264-.07-1.645-.07-4.849 0-3.203.009-3.585.07-4.849.054-1.171.244-1.805.408-2.227.217-.561.477-.96.896-1.382.42-.419.821-.679 1.381-.896.422-.164 1.057-.354 2.228-.408 1.264-.061 1.645-.07 4.849-.07zm0 3.678c-3.401 0-6.162 2.761-6.162 6.162 0 3.401 2.761 6.162 6.162 6.162 3.401 0 6.162-2.761 6.162-6.162 0-3.401-2.761-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          
          <a 
            href="https://www.tiktok.com/@al.ettisam.car.se?_r=1&_t=ZS-924Tpd4paAH" 
            target="_blank" 
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="hover:text-gray-600 transition-colors text-gray-800"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.498 3.094c1.7.894 2.894 2.672 3.097 4.733.02.23.02.462.02.694 0 .233 0 .465-.02.695-.203 2.061-1.397 3.839-3.097 4.733v3.844c1.504-.755 2.85-1.874 3.807-3.267.957-1.393 1.504-3.005 1.504-4.713 0-1.708-.547-3.32-1.504-4.713-.957-1.393-2.303-2.512-3.807-3.267v3.844zm-8.52 12.914c-.704.607-1.628.971-2.645.971-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95c1.017 0 1.941.364 2.645.971v3.958zm0-8.868V3.5c-1.057-.14-2.131-.14-3.188 0v12.54c-.704.607-1.628.971-2.645.971-2.18 0-3.95-1.77-3.95-3.95s1.77-3.95 3.95-3.95c1.017 0 1.941.364 2.645.971v3.958c1.007-.857 2.339-1.377 3.788-1.377 2.18 0 3.95 1.77 3.95 3.95s-1.77 3.95-3.95 3.95c-1.449 0-2.781-.52-3.788-1.377z"/>
            </svg>
          </a>
          </div>
        </div>
      </div>

      {/* Main navbar only (top red bar removed completely) */}
      <nav
        className="bg-white text-gray-900 w-full shadow-lg fixed left-0 right-0 z-40 md:top-[32px] top-0"
        style={{ height: "80px", position: "fixed" }}
      >
        <div className="container mx-auto flex items-center justify-between px-3 sm:px-4 md:px-6 h-20">

          {/* Logo */}
          <a href="/" className="flex items-center h-10 sm:h-12">
            <img
              src="/al-ettisam-banner.png"
              alt="Al Ettisam"
              width={320}
              height={56}
              className="object-contain w-48 sm:w-64 md:w-80 h-auto"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6">
            <a href="/#services" className="hover:text-yellow-400 transition-colors">Services</a>
            <a href="/#gallery" className="hover:text-yellow-400 transition-colors">Gallery</a>
            <a href="/#reviews" className="hover:text-yellow-400 transition-colors">Reviews</a>
            <a href="/#contact" className="hover:text-yellow-400 transition-colors">Contact</a>
          </div>

          {/* Mobile Hamburger */}
          <div className="md:hidden flex items-center">
            <button
              aria-label="Open menu"
              className="focus:outline-none text-gray-900"
              onClick={() => setMenuOpen((open) => !open)}
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>

        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <>
            <div
              className="fixed inset-0 z-40 bg-black bg-opacity-80 md:hidden"
              onClick={() => setMenuOpen(false)}
            ></div>

            <div
              className="md:hidden fixed left-0 right-0 bg-white z-50 flex flex-col justify-center items-center animate-slide-down top-20"
              style={{ height: "calc(100vh - 80px)", position: "fixed" }}
            >
              <button
                aria-label="Close menu"
                className="absolute top-4 right-4 text-gray-900 text-3xl focus:outline-none"
                onClick={() => setMenuOpen(false)}
              >
                &times;
              </button>

              <nav className="w-full flex flex-col items-center gap-6 mt-8 text-gray-900">
                <a href="/#services" className="text-lg py-3 px-8 rounded hover:bg-yellow-500 hover:text-white transition-colors w-4/5 text-center" onClick={() => setMenuOpen(false)}>Services</a>
                <a href="/#gallery" className="text-lg py-3 px-8 rounded hover:bg-yellow-500 hover:text-white transition-colors w-4/5 text-center" onClick={() => setMenuOpen(false)}>Gallery</a>
                <a href="/#reviews" className="text-lg py-3 px-8 rounded hover:bg-yellow-500 hover:text-white transition-colors w-4/5 text-center" onClick={() => setMenuOpen(false)}>Reviews</a>
                <a href="/#contact" className="text-lg py-3 px-8 rounded hover:bg-yellow-500 hover:text-white transition-colors w-4/5 text-center" onClick={() => setMenuOpen(false)}>Contact</a>
              </nav>
            </div>
          </>
        )}
      </nav>
    </>
  );
};

export default Navbar;
