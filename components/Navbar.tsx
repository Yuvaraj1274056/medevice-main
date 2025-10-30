"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<number | null>(null);

  const navItems = [
    { name: "Home", href: "/" },
    {
      name: "About",
      href: "/about",
      submenu: [
        { name: "Company Overview", href: "/about/company" },
        { name: "Leadership", href: "/about/leadership" },
        { name: "Careers", href: "/about/careers" },
      ],
    },
    {
      name: "Consulting",
      href: "/consulting",
      submenu: [
        { name: "Healthcare", href: "/consulting/healthcare" },
        { name: "IT Consulting", href: "/consulting/it" },
        { name: "Strategy", href: "/consulting/strategy" },
      ],
    },
    {
      name: "Staffing",
      href: "/staffing",
      submenu: [
        { name: "Permanent Staffing", href: "/staffing/permanent" },
        { name: "Contract Staffing", href: "/staffing/contract" },
      ],
    },
    { name: "Solutions", href: "/integrated-solutions" },
    { name: "Training", href: "/training" },
    { name: "Contact", href: "/contact" },
    { name: "Dashboard", href: "/dashboard" },
    { name: "Command Center", href: "/dashboard/command-center" },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-red-700">
          MeDevice
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 relative">
          {navItems.map((item, i) => (
            <div
              key={i}
              className="relative group"
              onMouseEnter={() => setActiveMenu(i)}
              onMouseLeave={() => setActiveMenu(null)}
            >
              <Link
                href={item.href}
                className="text-gray-700 hover:text-red-700 transition font-medium flex items-center gap-1"
              >
                {item.name}
                {item.submenu && <span className="text-xs">&#9662;</span>}
              </Link>

              {/* Dropdown menu with animation */}
              {item.submenu && (
                <div
                  className={`absolute left-0 mt-2 w-52 bg-white border border-gray-200 rounded-md shadow-lg transform transition-all duration-300 ease-out origin-top
                    ${
                      activeMenu === i
                        ? "opacity-100 translate-y-0 visible"
                        : "opacity-0 -translate-y-2 invisible"
                    }`}
                >
                  {item.submenu.map((sub, j) => (
                    <Link
                      key={j}
                      href={sub.href}
                      className="block px-4 py-2 text-gray-700 hover:bg-red-50 hover:text-red-700 transition"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-red-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg animate-slide-down">
          {navItems.map((item, i) => (
            <div key={i}>
              <Link
                href={item.href}
                onClick={() => setOpen(false)}
                className="block px-6 py-3 text-gray-700 hover:bg-red-50 hover:text-red-700 transition"
              >
                {item.name}
              </Link>

              {/* Mobile Submenu */}
              {item.submenu && (
                <div className="pl-6">
                  {item.submenu.map((sub, j) => (
                    <Link
                      key={j}
                      href={sub.href}
                      onClick={() => setOpen(false)}
                      className="block px-6 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-red-700 transition"
                    >
                      {sub.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  );
}
