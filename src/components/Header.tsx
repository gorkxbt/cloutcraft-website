'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-white via-[#CCCCFF]/10 to-white backdrop-blur-md z-50 border-b border-[#DDDDDD]/30 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo with colorful gradient */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center group hover:scale-105 transition-all duration-300">
              <div className="w-10 h-10 bg-gradient-to-r from-[#FF99CC] via-[#FFCC00] to-[#66CCFF] rounded-lg flex items-center justify-center mr-3 shadow-lg group-hover:shadow-xl transform group-hover:rotate-12 transition-all duration-300">
                <div className="text-white font-bold text-lg">C</div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF99CC] via-[#FFCC00] to-[#66CCFF] bg-clip-text text-transparent">
                CloutCraft
              </span>
            </Link>
          </div>

          {/* Desktop Navigation with enhanced styling */}
          <nav className="hidden md:flex space-x-8">
            <Link 
              href="/" 
              className="text-[#333333] hover:bg-gradient-to-r hover:from-[#FF99CC] hover:to-[#66CCFF] hover:bg-clip-text hover:text-transparent font-semibold transition-all duration-300 hover:scale-110 transform"
            >
              Home
            </Link>
            <Link 
              href="/demo" 
              className="text-[#333333] hover:bg-gradient-to-r hover:from-[#FFCC00] hover:to-[#FF9933] hover:bg-clip-text hover:text-transparent font-semibold transition-all duration-300 hover:scale-110 transform"
            >
              Demo
            </Link>
            <Link 
              href="/about" 
              className="text-[#333333] hover:bg-gradient-to-r hover:from-[#66CCFF] hover:to-[#33CCCC] hover:bg-clip-text hover:text-transparent font-semibold transition-all duration-300 hover:scale-110 transform"
            >
              About
            </Link>
          </nav>

          {/* Enhanced CTA Button */}
          <div className="hidden md:block">
            <Link 
              href="/early-access" 
              className="bg-gradient-to-r from-[#FF99CC] via-[#FFCC00] to-[#FF9933] text-[#333333] px-6 py-3 rounded-full font-bold hover:shadow-xl hover:scale-110 transition-all duration-300 transform hover:rotate-1 shadow-lg"
            >
              Early Access
            </Link>
          </div>

          {/* Enhanced Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-[#333333] p-2 rounded-lg bg-gradient-to-r from-[#FF99CC]/20 to-[#66CCFF]/20 hover:from-[#FF99CC]/40 hover:to-[#66CCFF]/40 transition-all duration-300 hover:scale-110 transform shadow-md"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Enhanced Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-br from-white via-[#CCCCFF]/10 to-white backdrop-blur-lg rounded-3xl shadow-2xl border border-[#DDDDDD]/40 mx-4 mb-4 p-6">
            <div className="space-y-4">
              <Link 
                href="/" 
                className="block text-[#333333] font-semibold py-3 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#FF99CC]/20 hover:to-[#66CCFF]/20 transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/demo" 
                className="block text-[#333333] font-semibold py-3 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#FFCC00]/20 hover:to-[#FF9933]/20 transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Demo
              </Link>
              <Link 
                href="/about" 
                className="block text-[#333333] font-semibold py-3 px-4 rounded-2xl hover:bg-gradient-to-r hover:from-[#66CCFF]/20 hover:to-[#33CCCC]/20 transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/early-access" 
                className="block bg-gradient-to-r from-[#FF99CC] via-[#FFCC00] to-[#FF9933] text-[#333333] py-4 px-6 rounded-2xl font-bold text-center hover:shadow-xl hover:scale-105 transition-all duration-300 transform hover:rotate-1 shadow-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                Early Access
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 