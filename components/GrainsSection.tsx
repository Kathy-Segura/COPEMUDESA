"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Wheat, Shovel, SproutIcon as Seedling, TreesIcon as Plant, Sun } from "lucide-react"

export default function GrainsSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    setIsAnimating(true)
    const timer = setTimeout(() => setIsAnimating(false), 500)
    return () => clearTimeout(timer)
  }, [activeStep])

  const steps = [
    {
      title: "Preparación de Terreno",
      description:
        "Preparamos cuidadosamente el suelo para asegurar condiciones óptimas de cultivo. Utilizamos técnicas de labranza mínima para conservar la estructura del suelo y su biodiversidad.",
      image: "/placeholder.svg?height=600&width=800",
      details: [
        "Análisis de suelo para determinar necesidades específicas",
        "Incorporación de abonos orgánicos y compost",
        "Técnicas de conservación de suelos en terrenos inclinados",
      ],
      icon: <Shovel className="w-6 h-6" />,
      color: "bg-stone-100",
      lightColor: "bg-stone-50",
      textColor: "text-stone-600",
      borderColor: "border-stone-200",
    },
    {
      title: "Siembra",
      description:
        "Seleccionamos semillas de alta calidad, muchas de ellas variedades criollas adaptadas a nuestro clima y condiciones locales, preservando así la biodiversidad agrícola de la región.",
      image: "/placeholder.svg?height=600&width=800",
      details: [
        "Selección de semillas nativas y adaptadas localmente",
        "Siembra directa o con mínima labranza",
        "Densidades óptimas según cada variedad de grano",
      ],
      icon: <Seedling className="w-6 h-6" />,
      color: "bg-green-100",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      title: "Cultivo",
      description:
        "Durante el ciclo de cultivo, implementamos prácticas agroecológicas que minimizan el uso de insumos externos y favorecen el equilibrio natural del ecosistema agrícola.",
      image: "/placeholder.svg?height=600&width=800",
      details: [
        "Control biológico de plagas y enfermedades",
        "Manejo integrado de malezas",
        "Rotación de cultivos para mantener la fertilidad del suelo",
      ],
      icon: <Plant className="w-6 h-6" />,
      color: "bg-teal-100",
      lightColor: "bg-teal-50",
      textColor: "text-teal-600",
      borderColor: "border-teal-200",
    },
    {
      title: "Cosecha",
      description:
        "La cosecha se realiza en el momento óptimo de madurez de cada grano, asegurando así la máxima calidad y rendimiento. Combinamos métodos tradicionales con tecnologías apropiadas.",
      image: "/placeholder.svg?height=600&width=800",
      details: [
        "Determinación precisa del momento óptimo de cosecha",
        "Técnicas de cosecha que minimizan pérdidas",
        "Secado natural aprovechando el sol de Estelí",
      ],
      icon: <Sun className="w-6 h-6" />,
      color: "bg-amber-100",
      lightColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
  ]

  return (
    <section id="granos" className="py-24 relative overflow-hidden bg-[#f9f9f7]">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-50 rounded-full opacity-40 -translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-amber-50 rounded-full opacity-40 translate-y-1/3 translate-x-1/3 blur-3xl"></div>
      <div className="absolute top-1/4 right-1/4 w-5 h-5 bg-green-100 rounded-full opacity-70"></div>
      <div className="absolute top-3/4 left-1/3 w-3 h-3 bg-teal-100 rounded-full opacity-70"></div>
      <div className="absolute bottom-1/3 right-1/2 w-6 h-6 bg-amber-100 rounded-full opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center flex flex-col items-center">
          <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-700 mb-4">
            Proceso de Producción
          </span>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Granos Básicos</h2>
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-amber-100 rounded-full opacity-50"></div>
              <div className="absolute inset-1 bg-amber-50 rounded-full opacity-70 flex items-center justify-center">
                <Wheat className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Producimos granos básicos utilizando técnicas sostenibles que respetan el medio ambiente y preservan las
            tradiciones agrícolas de nuestra región, asegurando productos de alta calidad nutritiva.
          </p>
        </div>

        {/* Interactive Process Display */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Left Side - Process Steps */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="p-6 bg-green-50 border-b border-green-100">
              <h3 className="text-xl font-bold text-gray-800">Proceso de Producción</h3>
              <p className="text-gray-600 text-sm">Selecciona una etapa para conocer más detalles</p>
            </div>

            <div className="p-6 space-y-4">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`w-full text-left p-4 rounded-xl transition-all duration-300 flex items-center gap-4 border ${
                    activeStep === index
                      ? `${step.borderColor} ${step.lightColor} shadow-sm`
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      activeStep === index ? step.color : "bg-gray-50"
                    }`}
                  >
                    <div className={activeStep === index ? step.textColor : "text-gray-400"}>{step.icon}</div>
                  </div>
                  <div>
                    <h4 className={`font-bold ${activeStep === index ? step.textColor : "text-gray-700"}`}>
                      {step.title}
                    </h4>
                    <p className={`text-xs ${activeStep === index ? "text-gray-600" : "text-gray-500"}`}>
                      Paso {index + 1} del proceso
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Step Details */}
          <div
            className={`bg-white rounded-2xl shadow-sm overflow-hidden transition-all duration-500 ${
              isAnimating ? "transform scale-105" : ""
            }`}
          >
            <div className="relative h-64">
              <Image
                src={steps[activeStep].image || "/placeholder.svg"}
                alt={steps[activeStep].title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-6">
                <div
                  className={`w-14 h-14 rounded-full ${steps[activeStep].color} flex items-center justify-center mb-3`}
                >
                  <div className={steps[activeStep].textColor}>{steps[activeStep].icon}</div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{steps[activeStep].title}</h3>
                <p className="text-white/80 text-sm">Paso {activeStep + 1} de 4</p>
              </div>
            </div>

            <div className="p-6">
              <p className="text-gray-600 mb-6">{steps[activeStep].description}</p>
              <h4 className="font-bold text-gray-800 mb-3">Características clave:</h4>
              <ul className="space-y-3">
                {steps[activeStep].details.map((detail, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div
                      className={`w-6 h-6 rounded-full ${steps[activeStep].lightColor} flex-shrink-0 flex items-center justify-center mt-0.5`}
                    >
                      <div className={`w-2 h-2 rounded-full ${steps[activeStep].color}`}></div>
                    </div>
                    <span className="text-gray-700">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Grain Types */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Nuestros Granos Básicos</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Frijol */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-rose-50 to-rose-100 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-90"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 z-10">
                <div className="h-48 relative">
                  <Image src="/placeholder.svg?height=300&width=400" alt="Frijol Rojo" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-xl font-bold text-white mb-1">Frijol Rojo</h4>
                    <p className="text-white/80 text-sm">Variedad tradicional nicaragüense</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Cultivamos variedades tradicionales de frijol rojo, apreciadas por su sabor, textura y alto valor
                    nutritivo. Ideal para el tradicional gallo pinto nicaragüense.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">
                      Rico en proteínas
                    </span>
                    <span className="inline-block rounded-full bg-rose-50 px-3 py-1 text-xs font-medium text-rose-600">
                      Cultivo sostenible
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Maíz */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-50 to-amber-100 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-90"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 z-10">
                <div className="h-48 relative">
                  <Image src="/placeholder.svg?height=300&width=400" alt="Maíz Criollo" fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-xl font-bold text-white mb-1">Maíz Criollo</h4>
                    <p className="text-white/80 text-sm">Semillas nativas de la región</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Preservamos variedades locales de maíz, fundamentales en la dieta nicaragüense. Nuestro maíz se
                    utiliza para tortillas, tamales y otros platillos tradicionales.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                      Semillas nativas
                    </span>
                    <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                      Sin transgénicos
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Arroz */}
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-teal-50 to-teal-100 rounded-2xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300 opacity-90"></div>
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-sm transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300 z-10">
                <div className="h-48 relative">
                  <Image
                    src="/placeholder.svg?height=300&width=400"
                    alt="Arroz de Secano"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-4">
                    <h4 className="text-xl font-bold text-white mb-1">Arroz de Secano</h4>
                    <p className="text-white/80 text-sm">Adaptado a condiciones locales</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-sm text-gray-600 mb-4">
                    Producimos arroz adaptado a condiciones de secano, utilizando variedades que requieren menos agua y
                    son más resistentes a las condiciones climáticas locales.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600">
                      Bajo consumo de agua
                    </span>
                    <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600">
                      Alta resistencia
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sustainable Practices */}
        <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-2xl p-8 shadow-sm">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Prácticas Sostenibles</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-green-50 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-green-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Rotación de Cultivos</h4>
              <p className="text-sm text-gray-600">
                Alternamos diferentes cultivos para mantener la fertilidad del suelo y romper ciclos de plagas.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-teal-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Conservación de Suelos</h4>
              <p className="text-sm text-gray-600">
                Implementamos barreras vivas, terrazas y otras técnicas para prevenir la erosión en terrenos inclinados.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-amber-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Control Biológico</h4>
              <p className="text-sm text-gray-600">
                Utilizamos enemigos naturales de las plagas y preparados botánicos para proteger nuestros cultivos.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 rounded-full bg-rose-50 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-rose-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Semillas Criollas</h4>
              <p className="text-sm text-gray-600">
                Preservamos y reproducimos semillas tradicionales adaptadas a nuestro clima y condiciones locales.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
