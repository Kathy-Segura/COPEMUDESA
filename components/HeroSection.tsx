"use client"

import { useState, useEffect, useCallback } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

// Estilo personalizado para el clip-path
const styles = {
  clipPathHero: {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 20% 100%)",
  },
}

// Tipo para las imágenes del carrusel
type CarouselImage = {
  main: string
  topRight: string
  bottomRight: string
  mainAlt: string
  topRightAlt: string
  bottomRightAlt: string
  mainLabel: string
}

export default function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Arreglo de imágenes para el carrusel
  const images: CarouselImage[] = [
    {
      main: "/cafe-oro.jpeg?height=600&width=400",
      topRight: "/granos.jpg?height=200&width=200",
      bottomRight: "/hortalizas.jpg?height=300&width=200",
      mainAlt: "Café de Estelí",
      topRightAlt: "Granos de Estelí",
      bottomRightAlt: "Hortalizas de Estelí",
      mainLabel: "Café Premium",
    },
    {
      main: "/granosbasicos3.jpg?height=600&width=400",
      topRight: "/miel01.jpg?height=200&width=200",
      bottomRight: "/cafe04.jpg?height=300&width=200",
      mainAlt: "Granos de Estelí",
      topRightAlt: "Hortalizas de Estelí",
      bottomRightAlt: "Café de Estelí",
      mainLabel: "Granos Selectos",
    },
    {
      main: "/hortalizas001.jpg?height=600&width=400",
      topRight: "/cafe-oro.jpeg??height=200&width=200",
      bottomRight: "/granos3.jpg?height=300&width=200",
      mainAlt: "Hortalizas de Estelí",
      topRightAlt: "Café de Estelí",
      bottomRightAlt: "Granos de Estelí",
      mainLabel: "Hortalizas Frescas",
    },
  ]

  // Función para cambiar a la siguiente imagen
  const nextImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [images.length])

  // Función para cambiar a la imagen anterior
  const prevImage = useCallback(() => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
  }, [images.length])

  // Efecto para cambiar automáticamente las imágenes cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextImage()
    }, 5000)

    return () => clearInterval(interval)
  }, [nextImage])

  return (
    <section className="relative py-4 overflow-hidden bg-white border-b border-gray-100">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-green-50/50" style={styles.clipPathHero}></div>
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-1/4 w-32 h-32 bg-amber-100/40 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 pt-2">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Content */}
          <div className="lg:col-span-5 relative z-10">
            <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-6">
              Productos de Nicaragua
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">
              Productos Agrícolas de <span className="text-green-600">Matagalpa</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-lg">
              Descubre la excelencia agrícola del norte de Nicaragua: café de altura, granos básicos tradicionales y
              hortalizas frescas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="#productos"
                className="group rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-all hover:bg-green-500 shadow-sm"
              >
                Explorar Productos
                <ArrowRight className="ml-2 inline-block h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="#contacto"
                className="rounded-full border-2 border-green-600 px-6 py-3 font-medium text-green-600 transition-all hover:bg-green-50"
              >
                Contactar
              </Link>
            </div>
          </div>

          {/* Right Images - Interactive Grid Layout */}
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-6 grid-rows-5 gap-3 h-[400px]">
              {/* Main Image */}
              <div className="col-span-4 row-span-5 rounded-2xl overflow-hidden shadow-lg relative">
                <div className="relative w-full h-full transition-transform duration-700 transform">
                  <Image
                    src={images[currentImageIndex].main || "/placeholder.svg"}
                    alt={images[currentImageIndex].mainAlt}
                    fill
                    className="object-cover transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-green-800">
                    {images[currentImageIndex].mainLabel}
                  </div>
                </div>

                {/* Navigation Controls */}
                <button
                  onClick={prevImage}
                  className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 text-green-800 hover:bg-white transition-all z-10"
                  aria-label="Imagen anterior"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={nextImage}
                  className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-1.5 text-green-800 hover:bg-white transition-all z-10"
                  aria-label="Siguiente imagen"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>

                {/* Indicators */}
                <div className="absolute bottom-4 right-4 flex gap-1.5 z-10">
                  {images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        currentImageIndex === index ? "bg-white scale-125" : "bg-white/50"
                      }`}
                      aria-label={`Ir a imagen ${index + 1}`}
                    />
                  ))}
                </div>
              </div>

              {/* Top Right Image */}
              <div className="col-span-2 row-span-2 rounded-xl overflow-hidden shadow-md">
                <div className="relative w-full h-full">
                  <Image
                    src={images[currentImageIndex].topRight || "/placeholder.svg"}
                    alt={images[currentImageIndex].topRightAlt}
                    width={200}
                    height={200}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              </div>

              {/* Bottom Right Image */}
              <div className="col-span-2 row-span-3 rounded-xl overflow-hidden shadow-md">
                <div className="relative w-full h-full">
                  <Image
                    src={images[currentImageIndex].bottomRight || "/placeholder.svg"}
                    alt={images[currentImageIndex].bottomRightAlt}
                    width={200}
                    height={300}
                    className="w-full h-full object-cover transition-opacity duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Stats Bar */}
            <div className="mt-6 bg-white rounded-xl shadow-md p-4 flex justify-between items-center">
              <div className="text-center px-4 border-r border-gray-200">
                <p className="text-2xl font-bold text-green-600">25+</p>
                <p className="text-xs text-gray-600">Años de experiencia</p>
              </div>
              <div className="text-center px-4 border-r border-gray-200">
                <p className="text-2xl font-bold text-green-600">100%</p>
                <p className="text-xs text-gray-600">Productos naturales</p>
              </div>
              <div className="text-center px-4">
                <p className="text-2xl font-bold text-green-600">500+</p>
                <p className="text-xs text-gray-600">Clientes satisfechos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
