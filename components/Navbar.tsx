"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ChevronDown,
  Search,
  Lightbulb,
  Briefcase,
  FileText,
  Trophy,
  Target,
  Cpu,
  Palette,
  Users,
  UserPlus,
  Handshake,
  Building2,
  GraduationCap,
  Calendar,
  DollarSign,
  Wrench,
  Info,
  HelpCircle,
  Mail,
} from "lucide-react";

// Navigation Data
const navItems = [
  {
    label: "Explore",
    items: [
      { label: "Discover Projects", href: "/explore/projects", icon: Search },
      {
        label: "Featured Innovations",
        href: "/explore/innovations",
        icon: Lightbulb,
      },
      {
        label: "Student Portfolios",
        href: "/explore/portfolios",
        icon: Briefcase,
      },
      { label: "Research Papers", href: "/explore/research", icon: FileText },
    ],
  },
  {
    label: "Competitions",
    items: [
      { label: "Hackathons", href: "/competitions/hackathons", icon: Trophy },
      {
        label: "Business Challenges",
        href: "/competitions/business",
        icon: Target,
      },
      {
        label: "Engineering Competitions",
        href: "/competitions/engineering",
        icon: Cpu,
      },
      {
        label: "Creative Arts Contests",
        href: "/competitions/arts",
        icon: Palette,
      },
    ],
  },
  {
    label: "Collaborate",
    items: [
      { label: "Find Teammates", href: "/collaborate/teammates", icon: Users },
      { label: "Join Groups", href: "/collaborate/groups", icon: UserPlus },
      {
        label: "Mentorship Programs",
        href: "/collaborate/mentorship",
        icon: Handshake,
      },
      {
        label: "Partner With Institutions",
        href: "/collaborate/partners",
        icon: Building2,
      },
    ],
  },
  {
    label: "Resources",
    items: [
      {
        label: "Courses & Learning",
        href: "/resources/courses",
        icon: GraduationCap,
      },
      {
        label: "Events & Workshops",
        href: "/resources/events",
        icon: Calendar,
      },
      {
        label: "Funding Opportunities",
        href: "/resources/funding",
        icon: DollarSign,
      },
      { label: "Tools & Templates", href: "/resources/tools", icon: Wrench },
    ],
  },
  {
    label: "About",
    items: [
      { label: "Our Mission", href: "/about/mission", icon: Info },
      { label: "Team", href: "/about/team", icon: Users },
      { label: "FAQ", href: "/about/faq", icon: HelpCircle },
      { label: "Contact", href: "/about/contact", icon: Mail },
    ],
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);

  // Scroll Effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Toggle Mobile Dropdown
  const toggleMobileDropdown = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-bg shadow-xl border-b glass-border" : "glass-bg"
      }`}
    >
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-primary hover:text-accent transition-colors duration-200"
        >
          CAMPAS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-2 h-full">
          {navItems.map((category) => (
            <div
              key={category.label}
              className="relative h-full flex items-center group"
              onMouseEnter={() => setActiveDropdown(category.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button
                className={`px-4 py-2 text-sm font-semibold transition-all duration-200 flex items-center gap-1 hover:bg-surface ${
                  activeDropdown === category.label
                    ? "text-primary bg-surface"
                    : "text-foreground hover:text-primary"
                }`}
              >
                {category.label}
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === category.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Modern Dropdown Menu with Glass Effect */}
              <div
                className={`absolute top-full left-0 mt-2 w-72 dropdown-modern transition-all duration-300 origin-top-left ${
                  activeDropdown === category.label
                    ? "opacity-100 scale-100 visible translate-y-0"
                    : "opacity-0 scale-95 invisible -translate-y-2"
                }`}
              >
                <div className="p-3 grid gap-1">
                  {category.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/10 transition-all duration-200 group/item"
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover/item:scale-110 transition-transform duration-200">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <span className="flex-1">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            href="/join"
            className="btn-primary px-6 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl"
          >
            Join the Community
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 glass-bg transition-all duration-300 lg:hidden flex flex-col pt-20 px-6 overflow-y-auto ${
          mobileMenuOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        {/* Close button inside mobile menu for better UX */}
        <div className="flex justify-end mb-4">
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 text-foreground hover:text-primary hover:bg-surface transition-colors duration-200 rounded-lg"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="flex flex-col gap-6 pb-10">
          {navItems.map((category) => (
            <div
              key={category.label}
              className="border-b border-border pb-4 last:border-0"
            >
              <button
                onClick={() => toggleMobileDropdown(category.label)}
                className="flex items-center justify-between w-full text-lg font-bold text-foreground py-3 hover:text-primary transition-colors duration-200"
              >
                {category.label}
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    mobileExpanded === category.label ? "rotate-180" : ""
                  }`}
                />
              </button>

              <div
                className={`grid transition-all duration-300 ease-in-out overflow-hidden ${
                  mobileExpanded === category.label
                    ? "grid-rows-[1fr] opacity-100 mt-3"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="min-h-0 flex flex-col gap-2">
                  {category.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-4 px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-muted/10 transition-all duration-200"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <div className="flex-shrink-0 w-7 h-7 bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        <item.icon className="w-3.5 h-3.5 text-white" />
                      </div>
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="pt-4">
            <Link
              href="/join"
              className="btn-primary block w-full text-center py-4 font-semibold shadow-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Join the Community
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
