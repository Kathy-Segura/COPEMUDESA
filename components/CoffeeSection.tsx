"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Coffee, Sun, Droplets, Flame } from "lucide-react"

export default function CoffeeSection() {
  const [activeStep, setActiveStep] = useState(0)
  const [animateStep, setAnimateStep] = useState(false)

  useEffect(() => {
    setAnimateStep(true)
    const timer = setTimeout(() => setAnimateStep(false), 500)
    return () => clearTimeout(timer)
  }, [activeStep])

  const steps = [
    {
      title: "Cultivo",
      description:
        "Cultivamos variedades de café arábica en altitudes superiores a los 1,200 metros sobre el nivel del mar, bajo sombra de árboles nativos que protegen las plantas y enriquecen el suelo.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Selección cuidadosa de semillas de alta calidad",
        "Manejo orgánico del suelo con compost y abonos naturales",
        "Sistemas de riego eficientes y sostenibles",
      ],
      icon: <Coffee className="w-6 h-6" />,
      color: "bg-green-200",
      lightColor: "bg-green-50",
      textColor: "text-green-700",
      borderColor: "border-green-200",
    },
    {
      title: "Cosecha",
      description:
        "Realizamos una cosecha selectiva, recogiendo únicamente los granos maduros para garantizar la calidad y uniformidad del café. Este proceso se realiza manualmente para asegurar la integridad del grano.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Recolección manual de cerezas maduras",
        "Selección rigurosa por color y tamaño",
        "Técnicas de cosecha que preservan la planta",
      ],
      icon: <Sun className="w-6 h-6" />,
      color: "bg-amber-100",
      lightColor: "bg-amber-50",
      textColor: "text-amber-700",
      borderColor: "border-amber-200",
    },
    {
      title: "Procesamiento",
      description:
        "Procesamos el café utilizando diferentes métodos según las características deseadas: lavado, honey o natural. Cada método aporta perfiles de sabor únicos que destacan las cualidades de nuestro café.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Despulpado cuidadoso para preservar el grano",
        "Fermentación controlada para desarrollar sabores",
        "Secado al sol en patios o camas africanas",
      ],
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-teal-100",
      lightColor: "bg-teal-50",
      textColor: "text-teal-700",
      borderColor: "border-teal-200",
    },
    {
      title: "Tostado",
      description:
        "El tostado es un arte que dominamos con precisión. Cada lote se tuesta cuidadosamente para resaltar sus características únicas, monitoreando temperatura y tiempo para lograr el perfil de sabor ideal.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Tostado artesanal en pequeños lotes",
        "Perfiles de tueste adaptados a cada variedad",
        "Control de calidad en cada etapa del proceso",
      ],
      icon: <Flame className="w-6 h-6" />,
      color: "bg-rose-100",
      lightColor: "bg-rose-50",
      textColor: "text-rose-700",
      borderColor: "border-rose-200",
    },
  ]

  return (
    <section id="cafe" className="py-24 bg-[#f8f9f7] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full opacity-70 -translate-x-20 -translate-y-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-50 rounded-full opacity-50 -translate-x-40 translate-y-20 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-green-100 rounded-full opacity-70"></div>
      <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-amber-100 rounded-full opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-teal-100 rounded-full opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center flex flex-col items-center">
          <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-700 mb-4">
            Proceso de Producción
          </span>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Café de Estelí</h2>
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute inset-1 bg-green-50 rounded-full opacity-70 flex items-center justify-center">
                <Coffee className="w-6 h-6 text-green-700" />
              </div>
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Nuestro café es cultivado, cosechado y procesado con técnicas tradicionales combinadas con innovación,
            respetando el medio ambiente y asegurando la más alta calidad en cada etapa del proceso.
          </p>
        </div>

        {/* Process Steps Navigation - Horizontal Timeline */}
        <div className="mb-16 max-w-5xl mx-auto">
          <div className="relative">
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 rounded-full"></div>
            <div
              className="absolute top-1/2 left-0 h-0.5 bg-green-200 -translate-y-1/2 rounded-full transition-all duration-500"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
            <div className="relative flex justify-between">
              {steps.map((step, index) => (
                <button
                  key={index}
                  className={`relative flex flex-col items-center group z-10 transition-all duration-300 ${
                    index <= activeStep ? "scale-110" : "opacity-80"
                  }`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 border-2 ${
                      index <= activeStep ? step.borderColor : "border-gray-200"
                    } ${index === activeStep ? "ring-4 ring-green-50" : ""} bg-white`}
                  >
                    <div className={index <= activeStep ? step.textColor : "text-gray-400"}>{step.icon}</div>
                  </div>
                  <span
                    className={`mt-3 text-sm font-bold transition-all duration-300 ${
                      index <= activeStep ? step.textColor : "text-gray-400"
                    }`}
                  >
                    {step.title}
                  </span>
                  <span className="absolute -bottom-6 text-xs font-medium text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    Paso {index + 1}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Process Step Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center mb-16">
          <div className="md:col-span-5 order-2 md:order-1">
            <div
              className={`p-8 rounded-2xl shadow-sm bg-white border-l-4 ${steps[activeStep].borderColor} transition-all duration-500 ${
                animateStep ? "transform -translate-y-2" : ""
              }`}
            >
              <div className="flex items-center gap-4 mb-6">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center ${steps[activeStep].color} ${steps[activeStep].textColor}`}
                >
                  {steps[activeStep].icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{steps[activeStep].title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{steps[activeStep].description}</p>
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
          <div className="md:col-span-7 order-1 md:order-2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-50 rounded-full opacity-70"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-md aspect-[16/9]">
                <Image
                  src={steps[activeStep].image || "/placeholder.svg"}
                  alt={`Proceso de ${steps[activeStep].title} de café`}
                  fill
                  className="object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2 text-sm font-medium text-gray-700">
                  {steps[activeStep].title} de Café
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-amber-50 rounded-full opacity-70"></div>
            </div>
          </div>
        </div>

        {/* Coffee Varieties */}
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-16 relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-40 h-40 bg-green-50 rounded-full opacity-50"></div>
          <div className="absolute -bottom-12 -left-12 w-40 h-40 bg-amber-50 rounded-full opacity-50"></div>

          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center relative z-10">
            Nuestras Variedades de Café
          </h3>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            <div className="group">
              <div className="bg-green-50 rounded-xl p-6 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4 group-hover:bg-green-200 transition-all">
                  <Coffee className="w-6 h-6 text-green-700" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Bourbon Rojo</h4>
                <p className="text-sm text-gray-600">
                  Variedad tradicional con notas de chocolate, caramelo y un delicado toque frutal.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-amber-50 rounded-xl p-6 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mb-4 group-hover:bg-amber-200 transition-all">
                  <Coffee className="w-6 h-6 text-amber-700" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Caturra</h4>
                <p className="text-sm text-gray-600">
                  Sabor balanceado con acidez brillante y notas cítricas refrescantes.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-teal-50 rounded-xl p-6 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center mb-4 group-hover:bg-teal-200 transition-all">
                  <Coffee className="w-6 h-6 text-teal-700" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Pacamara</h4>
                <p className="text-sm text-gray-600">
                  Grano grande con perfil complejo, notas florales y cuerpo sedoso.
                </p>
              </div>
            </div>

            <div className="group">
              <div className="bg-rose-50 rounded-xl p-6 transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-rose-100 flex items-center justify-center mb-4 group-hover:bg-rose-200 transition-all">
                  <Coffee className="w-6 h-6 text-rose-700" />
                </div>
                <h4 className="font-bold text-gray-800 mb-2">Maragogipe</h4>
                <p className="text-sm text-gray-600">
                  Conocido como "elefante" por su tamaño, ofrece sabores profundos y complejos.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Coffee Facts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-gradient-to-br from-green-50 to-green-100 text-gray-800 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute -top-8 -right-8 w-24 h-24 bg-green-200 rounded-full opacity-30"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-3 text-green-800">Altitud</h4>
              <p className="text-gray-600 mb-4">
                Nuestro café crece entre 1,200 y 1,600 metros sobre el nivel del mar, lo que le confiere características
                únicas.
              </p>
              <div className="text-3xl font-bold text-green-700">1,200-1,600m</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-amber-100 text-gray-800 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-amber-200 rounded-full opacity-30"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-3 text-amber-800">Variedades</h4>
              <p className="text-gray-600 mb-4">
                Cultivamos múltiples variedades de café arábica, cada una con perfiles de sabor únicos.
              </p>
              <div className="text-3xl font-bold text-amber-700">6+ Variedades</div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 text-gray-800 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-teal-200 rounded-full opacity-30"></div>
            <div className="relative z-10">
              <h4 className="text-xl font-bold mb-3 text-teal-800">Certificaciones</h4>
              <p className="text-gray-600 mb-4">
                Nuestro café cuenta con certificaciones que avalan su calidad y sostenibilidad.
              </p>
              <div className="text-3xl font-bold text-teal-700">100% Orgánico</div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="#contacto"
            className="inline-flex items-center rounded-full border-2 border-green-200 px-8 py-3.5 text-sm font-medium text-green-700 transition hover:bg-green-50 shadow-sm"
          >
            Conoce Más Sobre Nuestro Café
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
