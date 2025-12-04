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
  const [isVisible, setIsVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Advanced Scroll Effect (Mobile Only)
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Basic scroll detection for styling
      setIsScrolled(currentScrollY > 10);

      // Navbar visibility logic (Mobile Only)
      if (window.innerWidth < 1024) {
        // Only apply to mobile (lg breakpoint)
        const scrollDifference = Math.abs(currentScrollY - lastScrollY);

        if (scrollDifference > 3) {
          // Respond to any meaningful scroll movement
          if (currentScrollY < lastScrollY && currentScrollY > 10) {
            // Show navbar when scrolling up (except at very top)
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY) {
            // Hide navbar when scrolling down
            setIsVisible(false);
          }
        }

        // Hide when at the very top
        if (currentScrollY <= 10) {
          setIsVisible(false);
        }
      } else {
        // Always show on desktop
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    // Initial check
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, [lastScrollY]);

  // Toggle Mobile Dropdown
  const toggleMobileDropdown = (label: string) => {
    setMobileExpanded(mobileExpanded === label ? null : label);
  };

  return (
    <>
      {/* Desktop Navigation - Always Sticky */}
      <header
        className={`hidden lg:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
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
          <nav className="flex items-center gap-2 h-full">
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
          <div className="flex items-center">
            <Link
              href="/join"
              className="btn-primary px-6 py-2.5 text-sm font-semibold shadow-lg hover:shadow-xl"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </header>

      {/* Mobile Navigation - Special Layout with Scroll Behavior */}
      <div
        className={`lg:hidden fixed top-0 left-0 right-0 z-50 bg-surface border-b-4 border-b-primary transition-all duration-500 ease-in-out ${
          isVisible
            ? "translate-y-0 opacity-100"
            : "-translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        {/* Mobile Logo Section */}
        <div className="bg-surface border-b border-border">
          <div className="container mx-auto px-6 py-4 text-center">
            <Link
              href="/"
              className="text-3xl font-bold tracking-tight text-primary hover:text-accent transition-colors duration-200"
            >
              CAMPAS
            </Link>
          </div>
        </div>

        {/* Mobile Scrollable Navigation */}
        <div className="bg-surface">
          <div className="container mx-auto px-4 py-3">
            <div className="flex gap-1 overflow-x-auto scrollbar-hide">
              {navItems.map((category) => (
                <div key={category.label} className="relative group">
                  <button
                    onClick={() =>
                      setActiveDropdown(
                        activeDropdown === category.label
                          ? null
                          : category.label
                      )
                    }
                    className={`px-3 py-2 text-xs font-medium whitespace-nowrap transition-all duration-200 flex items-center gap-1 ${
                      activeDropdown === category.label
                        ? "text-primary bg-surface"
                        : "text-foreground hover:text-primary hover:bg-surface/50"
                    }`}
                  >
                    {category.label}
                    <ChevronDown
                      className={`w-3 h-3 transition-transform duration-200 ${
                        activeDropdown === category.label ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="bg-surface border-t border-border">
          <div className="container mx-auto px-6 py-3">
            <Link
              href="/join"
              className="btn-primary block w-full text-center py-3 text-sm font-semibold"
            >
              Join the Community
            </Link>
          </div>
        </div>

        {/* Mobile Dropdown Modal */}
        {activeDropdown && (
          <div className="absolute top-full left-0 right-0 bg-background border-t border-border shadow-2xl z-40">
            <div className="container mx-auto px-6 py-4">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-sm font-semibold text-primary">
                  {activeDropdown}
                </h3>
                <button
                  onClick={() => setActiveDropdown(null)}
                  className="p-1 text-foreground hover:text-primary transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <div className="grid gap-2">
                {navItems
                  .find((item) => item.label === activeDropdown)
                  ?.items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-foreground hover:text-primary hover:bg-surface transition-all duration-200 rounded-lg"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-br from-primary to-accent flex items-center justify-center rounded-lg">
                        <item.icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-medium">{item.label}</div>
                      </div>
                    </Link>
                  ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
