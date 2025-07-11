'use client';

import Link from "next/link";
import { useState, useEffect } from "react";
import { personalData } from "@/utils/data/personal-data";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { href: "/#about", label: "ABOUT" },
    { href: "/#experience", label: "EXPERIENCE" },
    { href: "/#skills", label: "SKILLS" },
    { href: "/#education", label: "EDUCATION" },
    { href: "/#projects", label: "PROJECTS" },
  ];

  // Close mobile menu when clicking outside or pressing escape
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const navbar = document.querySelector('nav');
      if (navbar && !navbar.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isMobileMenuOpen]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-dark-900/80 backdrop-blur-md border-b border-primary-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-full">
        <div className="flex items-center justify-between py-4 w-full">
          {/* Logo */}
          <div className="flex flex-shrink-0 items-center min-w-0">
            <Link
              href="/"
              className="text-primary-400 text-xl md:text-2xl lg:text-3xl font-bold heading-primary hover:text-primary-300 transition-colors duration-300 truncate"
            >
              {personalData.name.split(' ').map((word, index) => (
                <span key={index} className={index === 0 ? 'text-primary-400' : 'text-accent-400'}>
                  {word}{index === 0 ? ' ' : ''}
                </span>
              ))}
            </Link>
          </div>

          {/* Desktop Navigation */}
          <ul className="hidden md:flex md:space-x-1 flex-shrink-0">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  className="block px-4 py-2 no-underline outline-none group" 
                  href={item.href}
                >
                  <div className="text-sm text-secondary-200 transition-all duration-300 hover:text-primary-400 font-medium relative">
                    {item.label}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-white hover:text-primary-400 transition-colors duration-300 z-50"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen 
            ? 'max-h-96 opacity-100' 
            : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-4 pb-6 bg-dark-900/95 backdrop-blur-md border-t border-primary-500/20">
            <ul className="space-y-3">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    className="block px-4 py-3 no-underline outline-none group" 
                    href={item.href}
                    onClick={closeMobileMenu}
                  >
                    <div className="text-base text-secondary-200 transition-all duration-300 hover:text-primary-400 font-medium relative">
                      {item.label}
                      <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-400 transition-all duration-300 group-hover:w-full"></span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
