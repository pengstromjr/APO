"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-lg border-b border-white/10">
      <div className="container flex items-center justify-between py-4">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-brand-from to-brand-to rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <span className="text-xl font-bold gradient-text">Assetra</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#how-it-works" className="text-text-muted hover:text-white transition">
            How it works
          </a>
          <a href="#featured" className="text-text-muted hover:text-white transition">
            Featured
          </a>
          <a href="#waitlist" className="text-text-muted hover:text-white transition">
            Join waitlist
          </a>
          <button className="btn btn-gradient px-6 py-2">
            Early Access
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-white"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-bg-soft border-b border-white/10 md:hidden">
            <div className="container py-4 space-y-4">
              <a 
                href="#how-it-works" 
                className="block text-text-muted hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                How it works
              </a>
              <a 
                href="#featured" 
                className="block text-text-muted hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Featured
              </a>
              <a 
                href="#waitlist" 
                className="block text-text-muted hover:text-white transition"
                onClick={() => setIsOpen(false)}
              >
                Join waitlist
              </a>
              <button className="btn btn-gradient px-6 py-2 w-full">
                Early Access
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}