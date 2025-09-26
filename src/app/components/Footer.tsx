"use client";

import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-herbal-dark text-white">
      <div className="max-w-[1400px] mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-herbal-gold mb-4">
              Asthimeru
            </h3>
            <p className="text-white/80 md:mb-6 leading-relaxed lg:pr-16 xl:pr-24">
              Experience the power of Ayurveda with India&#39;s premium pain
              relief oil. Natural healing for muscle and joint pain. Crafted
              with time-tested herbal ingredients following ancient Ayurvedic
              traditions. Fast-acting relief for back pain, knee pain, and
              shoulder discomfort. Trusted by thousands across India for safe
              and effective pain management.
            </p>
          </div>

          {/* Links and Contact Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-herbal-gold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/"
                    className="text-white/80 hover:text-herbal-gold transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href="/about"
                    className="text-white/80 hover:text-herbal-gold transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-white/80 hover:text-herbal-gold transition-colors"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-white/80 hover:text-herbal-gold transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-herbal-gold mb-4">
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-herbal-gold mt-1 flex-shrink-0" />
                  <div className="text-white/80">
                    <p>123 Herbal Street</p>
                    <p>Ayurveda District</p>
                    <p>New Delhi, India - 110001</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-herbal-gold flex-shrink-0" />
                  <a
                    href="tel:+919876543210"
                    className="text-white/80 hover:text-herbal-gold transition-colors"
                  >
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-herbal-gold flex-shrink-0" />
                  <a
                    href="mailto:info@asthimeru.com"
                    className="text-white/80 hover:text-herbal-gold transition-colors"
                  >
                    info@asthimeru.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-white/60 mb-4 md:mb-0">
              <p>&copy; 2025 Asthimeru. All rights reserved.</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-white/60 hover:text-herbal-gold transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-herbal-gold transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-herbal-gold transition-colors"
              >
                Shipping Policy
              </Link>
              <Link
                href="#"
                className="text-white/60 hover:text-herbal-gold transition-colors"
              >
                Return Policy
              </Link>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-8 pt-8 border-t border-white/20">
          <div className="flex flex-wrap justify-center items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-herbal-gold rounded-full flex items-center justify-center">
                <span className="text-herbal-dark font-bold text-sm">✓</span>
              </div>
              <span className="text-white/80 text-sm">100% Safe</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-herbal-gold rounded-full flex items-center justify-center">
                <span className="text-herbal-dark font-bold text-sm">✓</span>
              </div>
              <span className="text-white/80 text-sm">AYUSH Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-herbal-gold rounded-full flex items-center justify-center">
                <span className="text-herbal-dark font-bold text-sm">✓</span>
              </div>
              <span className="text-white/80 text-sm">Quality Approved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-herbal-gold rounded-full flex items-center justify-center">
                <span className="text-herbal-dark font-bold text-sm">✓</span>
              </div>
              <span className="text-white/80 text-sm">Authentic</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
