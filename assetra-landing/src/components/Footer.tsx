"use client";

import { Twitter, Instagram, Github, Mail } from "lucide-react";

export default function Footer() {
  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  const footerLinks = {
    Product: [
      { label: "How it works", href: "#how-it-works" },
      { label: "Featured drops", href: "#featured" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" }
    ],
    Company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Press", href: "#" }
    ],
    Legal: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
      { label: "Cookie Policy", href: "#" },
      { label: "GDPR", href: "#" }
    ],
    Support: [
      { label: "Help Center", href: "#" },
      { label: "Contact Us", href: "#" },
      { label: "Discord", href: "#" },
      { label: "Status", href: "#" }
    ]
  };

  return (
    <footer className="border-t border-white/10 bg-white/[0.02]">
      <div className="container py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8 lg:gap-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-brand-from to-brand-to rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <span className="text-xl font-bold gradient-text">Assetra</span>
            </div>
            
            <p className="text-text-muted leading-relaxed max-w-sm">
              Own fractions of iconic cultural collectibles. Join thousands of collectors 
              building diverse portfolios with authenticated pieces starting at just $1.
            </p>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 bg-white/5 border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 hover:border-brand-from/50 transition-all duration-200 group"
                  >
                    <Icon size={18} className="text-text-muted group-hover:text-brand-from transition-colors" />
                  </a>
                );
              })}
            </div>

            {/* Newsletter Signup */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-white mb-2">Stay updated</h4>
              <p className="text-xs text-text-muted mb-3">
                Get notified about new drops and platform updates
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-white placeholder-text-muted focus-ring focus:border-brand-from/50 transition-all"
                />
                <button className="px-4 py-2 bg-gradient-to-r from-brand-from to-brand-to rounded-lg text-sm font-medium text-white hover:brightness-105 transition">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-sm font-semibold text-white mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-sm text-text-muted hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-6">
              <p className="text-sm text-text-muted">
                © 2024 Assetra. All rights reserved.
              </p>
              <div className="hidden md:flex items-center space-x-4 text-xs text-text-muted">
                <span>Made with ❤️ for collectors</span>
                <span>•</span>
                <span>Powered by blockchain technology</span>
              </div>
            </div>

            {/* Status Indicators */}
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-xs text-text-muted">Platform Status: Operational</span>
              </div>
              <div className="flex items-center space-x-1 text-xs text-text-muted">
                <span>⚡</span>
                <span>99.9% Uptime</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}