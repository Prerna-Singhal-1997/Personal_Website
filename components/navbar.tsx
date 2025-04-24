"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Expertise", href: "#expertise" },
    { name: "Projects", href: "#projects" },
    { name: "Certification", href: "#certification" },
    { name: "Toolkit", href: "#toolkit" },
    { name: "Engagements", href: "#engagements" },
    { name: "Hobbies", href: "#hobbies" },
  ]

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const targetId = href.substring(1)
    const targetElement = document.getElementById(targetId)
    if (targetElement) {
      const yOffset = -80 // Adjust this value based on your navbar height
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white shadow-md py-2" : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href="/" className={`text-xl font-bold ${isScrolled ? "text-slate-800" : "text-white"}`}>
            Prerna Singhal
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className={`font-medium hover:text-blue-500 transition-colors ${
                  isScrolled ? "text-slate-700" : "text-white"
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Navigation Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
            {isMenuOpen ? (
              <X className={isScrolled ? "text-slate-800" : "text-white"} />
            ) : (
              <Menu className={isScrolled ? "text-slate-800" : "text-white"} />
            )}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute left-4 right-4">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-slate-800 font-medium hover:text-blue-500 transition-colors py-2"
                  onClick={(e) => handleLinkClick(e, link.href)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

