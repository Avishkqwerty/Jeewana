import logo from "figma:asset/49ac52dcf0d3ff2db0dabe26273b5ca09c3f7967.png";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center gap-3">
            <img src={logo} alt="Jeewana Lanka Foundation" className="h-12 w-12" />
            <span className="text-xl" style={{ color: "var(--charity-dark-plum)" }}>
              Jeewana Lanka Foundation
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="hover:opacity-80 transition-opacity"
              style={{ color: "var(--charity-text-primary)" }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="hover:opacity-80 transition-opacity"
              style={{ color: "var(--charity-text-primary)" }}
            >
              Our Impact
            </button>
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="hover:opacity-80 transition-opacity"
              style={{ color: "var(--charity-text-primary)" }}
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("donate")}
              className="px-6 py-2 rounded-lg text-white transition-all"
              style={{
                backgroundColor: "var(--charity-plum)",
                boxShadow: "0 4px 12px rgba(155, 92, 119, 0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--charity-dark-plum)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--charity-plum)";
              }}
            >
              Donate Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            style={{ color: "var(--charity-plum)" }}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4" style={{ borderTop: "1px solid var(--charity-divider)" }}>
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left py-2"
              style={{ color: "var(--charity-text-primary)" }}
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="block w-full text-left py-2"
              style={{ color: "var(--charity-text-primary)" }}
            >
              Our Impact
            </button>
            <button
              onClick={() => scrollToSection("what-we-do")}
              className="block w-full text-left py-2"
              style={{ color: "var(--charity-text-primary)" }}
            >
              What We Do
            </button>
            <button
              onClick={() => scrollToSection("donate")}
              className="w-full px-6 py-2 rounded-lg text-white"
              style={{
                backgroundColor: "var(--charity-plum)",
                boxShadow: "0 4px 12px rgba(155, 92, 119, 0.3)",
              }}
            >
              Donate Now
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
