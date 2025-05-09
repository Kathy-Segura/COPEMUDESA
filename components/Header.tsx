"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-10 overflow-hidden rounded-full bg-green-100">
            <Image
              src="/coop.png?height=40&width=40"
              alt="Logo"
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold text-green-800">Cooperativa Mujeres en Desarrollo R.L</span>
        </div>
        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            <li>
              <Link href="#misionvision" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                Misión & Visión
              </Link>
            </li>
            <li>
              <Link href="#historia" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                Historía
              </Link>
            </li>
            <li>
              <Link href="#category" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
               Categorías
              </Link>
            </li>
            <li>
              <Link href="#certificaciones" className="text-sm font-medium text-green-800 hover:text-green-600 transition">
                Certificaciones
              </Link>
            </li>
            <li>
              <Link
                href="#contacto"
                className="rounded-full bg-green-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-600 transition shadow-sm"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
        <button className="block md:hidden text-green-800" onClick={() => setIsMenuOpen(true)}>
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="relative h-10 w-10 overflow-hidden rounded-full bg-green-100">
                  <Image
                    src="/coop.png?height=40&width=40"
                    alt="Logo"
                    width={40}
                    height={40}
                    className="object-cover"
                  />
                </div>
                <span className="text-xl font-bold text-green-800">Estelí Agrícola</span>
              </div>
              <button className="text-green-800" onClick={() => setIsMenuOpen(false)}>
                <X className="h-6 w-6" />
              </button>
            </div>
            <nav className="mt-10">
                <ul className="flex flex-col gap-6">
                  <li>
                    <Link
                      href="#misionvision"
                      className="text-lg font-medium text-green-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Misión & Visión
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#historia"
                      className="text-lg font-medium text-green-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Historia
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#category"
                      className="text-lg font-medium text-green-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Categorías
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="#certificaciones"
                      className="text-lg font-medium text-green-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Certificaciones
                    </Link>
                  </li>
                  <li className="mt-4">
                    <Link
                      href="#contacto"
                      className="inline-block rounded-full bg-green-700 px-6 py-3 text-base font-medium text-white"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contacto
                    </Link>
                  </li>
                </ul>
              </nav>
          </div>
        </div>
      )}
    </header>
  )
}
