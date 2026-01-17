import logo from "figma:asset/49ac52dcf0d3ff2db0dabe26273b5ca09c3f7967.png";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="py-16 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: "var(--charity-dark-plum)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Logo and About */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Jeewana Lanka Foundation" className="h-12 w-12" />
              <span className="text-xl text-white">
                Jeewana Lanka Foundation
              </span>
            </div>
            <p className="text-white opacity-90">
              Transforming lives through compassion and sustainable development. Together, we create lasting change
              across Sri Lankan communities.
            </p>
            <div className="flex gap-4 pt-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <Facebook size={20} color="white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <Twitter size={20} color="white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <Instagram size={20} color="white" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:opacity-80"
                style={{ backgroundColor: "rgba(255, 255, 255, 0.2)" }}
              >
                <Linkedin size={20} color="white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white opacity-90 hover:opacity-100 transition-opacity"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="text-white opacity-90 hover:opacity-100 transition-opacity"
                >
                  Our Impact
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("what-we-do")}
                  className="text-white opacity-90 hover:opacity-100 transition-opacity"
                >
                  Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("donate")}
                  className="text-white opacity-90 hover:opacity-100 transition-opacity"
                >
                  Donate
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg mb-4 text-white">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={20} color="white" className="flex-shrink-0 mt-1" />
                <span className="text-white opacity-90">
                  123 Main Street, Colombo, Sri Lanka
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} color="white" className="flex-shrink-0" />
                <span className="text-white opacity-90">
                  +94 11 234 5678
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} color="white" className="flex-shrink-0" />
                <span className="text-white opacity-90">
                  info@jeewanalanka.org
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="pt-8 text-center"
          style={{ borderTop: "1px solid rgba(255, 255, 255, 0.2)" }}
        >
          <p className="text-white opacity-75">
            2026 Jeewana Lanka Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
