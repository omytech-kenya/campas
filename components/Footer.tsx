"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(2024);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <footer className="bg-surface border-t-4 border-t-primary">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="py-8">
          <div className="max-w-2xl mx-auto text-center space-y-4">
            {/* Brand Section */}
            <div className="space-y-4">
              <div>
                <Link href="/" className="text-3xl font-bold text-primary">
                  CAMPAS
                </Link>
                <p className="mt-4 text-foreground/70 leading-relaxed">
                  Empowering university innovation through global collaboration.
                  Connect, research, and build the future together.
                </p>
              </div>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center justify-center gap-3 text-foreground/70">
                  <Mail className="w-5 h-5 text-primary" />
                  <span>hello@campas.org</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-foreground/70">
                  <Phone className="w-5 h-5 text-primary" />
                  <span>+254 XXX XXX XXX</span>
                </div>
                <div className="flex items-center justify-center gap-3 text-foreground/70">
                  <MapPin className="w-5 h-5 text-primary" />
                  <span>Nairobi, Kenya</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="py-6 border-t border-border">
          <div className="max-w-md mx-auto text-center space-y-3">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-2">
                Stay Updated
              </h3>
              <p className="text-foreground/70">
                Get the latest updates on research opportunities, competitions,
                and innovation news.
              </p>
            </div>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-background border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:border-primary transition-colors"
              />
              <button className="btn-primary w-full px-8 py-3 font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-foreground/60 text-sm">
              © {currentYear} CAMPAS. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6 text-sm">
              <Link
                href="/privacy"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/cookies"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/accessibility"
                className="text-foreground/60 hover:text-primary transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
