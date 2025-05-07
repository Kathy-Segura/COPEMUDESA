"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Droplet, Flower, BeakerIcon as Beehive, FlaskRoundIcon as Flask } from "lucide-react"

export default function HoneySection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Establecimiento de Apiarios",
      description:
        "Ubicamos estratégicamente nuestros apiarios en zonas con abundante floración y lejos de fuentes de contaminación, asegurando un ambiente ideal para nuestras abejas y la producción de miel de alta calidad.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Selección cuidadosa de ubicaciones con flora melífera diversa",
        "Diseño de colmenas adaptadas al clima local",
        "Mantenimiento de distancias adecuadas entre apiarios",
      ],
      icon: <Beehive className="w-6 h-6" />,
      color: "bg-amber-100",
      lightColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
    {
      title: "Manejo de Colmenas",
      description:
        "Realizamos un manejo respetuoso de las colmenas, monitoreando constantemente la salud de las abejas y asegurando que tengan los recursos necesarios para su desarrollo óptimo.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Revisiones periódicas sin perturbar excesivamente a las abejas",
        "Control natural de plagas y enfermedades",
        "Suplementación alimenticia en épocas de escasez",
      ],
      icon: <Flower className="w-6 h-6" />,
      color: "bg-rose-100",
      lightColor: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-200",
    },
    {
      title: "Cosecha de Miel",
      description:
        "Cosechamos la miel en el momento óptimo de maduración, cuando las abejas han completado el proceso de transformación del néctar y han sellado las celdas con cera, garantizando así su calidad.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Selección de panales con miel madura y operculada",
        "Extracción mediante centrifugado en frío",
        "Cosecha parcial que deja reservas suficientes para las abejas",
      ],
      icon: <Droplet className="w-6 h-6" />,
      color: "bg-yellow-100",
      lightColor: "bg-yellow-50",
      textColor: "text-yellow-600",
      borderColor: "border-yellow-200",
    },
    {
      title: "Procesamiento y Envasado",
      description:
        "Procesamos la miel de manera mínima para preservar todas sus propiedades naturales. Filtramos suavemente para eliminar impurezas y envasamos en recipientes que mantienen su calidad.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Filtrado que preserva el polen y propiedades naturales",
        "Control de calidad riguroso en cada lote",
        "Envasado en recipientes de vidrio que conservan propiedades",
      ],
      icon: <Flask className="w-6 h-6" />,
      color: "bg-orange-100",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
  ]

  return (
    <section id="miel" className="py-24 bg-[#f9f8f5] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-amber-50 rounded-full opacity-40 -translate-x-20 -translate-y-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-yellow-50 rounded-full opacity-30 -translate-x-40 translate-y-20 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-amber-100 rounded-full opacity-50"></div>
      <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-yellow-100 rounded-full opacity-50"></div>
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-orange-100 rounded-full opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center flex flex-col items-center">
          <span className="inline-block rounded-full bg-amber-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-700 mb-4">
            Proceso de Producción
          </span>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Miel de Abeja</h2>
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-amber-100 rounded-full opacity-50"></div>
              <div className="absolute inset-1 bg-amber-50 rounded-full opacity-70 flex items-center justify-center">
                <Droplet className="w-6 h-6 text-amber-600" />
              </div>
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Producimos miel pura y natural mediante prácticas apícolas sostenibles que respetan a las abejas y su
            entorno, contribuyendo a la conservación de estos importantes polinizadores.
          </p>
        </div>

        {/* Honey Production Process */}
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`rounded-2xl overflow-hidden shadow-sm transition-all cursor-pointer border ${
                  activeStep === index
                    ? `${step.borderColor} ${step.lightColor} transform scale-105 z-10`
                    : "border-transparent bg-white hover:border-gray-100"
                }`}
                onClick={() => setActiveStep(index)}
              >
                <div className="relative h-48">
                  <Image src={step.image || "/placeholder.svg"} alt={step.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-sm font-bold text-amber-600">
                    {index + 1}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-10 h-10 rounded-full ${step.color} flex items-center justify-center ${
                        activeStep === index ? "" : "opacity-70"
                      }`}
                    >
                      <div className={step.textColor}>{step.icon}</div>
                    </div>
                    <h3 className={`text-lg font-bold ${activeStep === index ? step.textColor : "text-gray-800"}`}>
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-2">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Step Details */}
          <div className="mt-12 bg-white rounded-2xl p-8 shadow-sm border border-amber-100">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-full ${steps[activeStep].color} flex items-center justify-center`}>
                    <div className={steps[activeStep].textColor}>{steps[activeStep].icon}</div>
                  </div>
                  <h3 className={`text-2xl font-bold ${steps[activeStep].textColor}`}>{steps[activeStep].title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{steps[activeStep].description}</p>
                <ul className="space-y-3">
                  {steps[activeStep].details.map((detail, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div
                        className={`w-5 h-5 rounded-full ${steps[activeStep].lightColor} flex-shrink-0 flex items-center justify-center mt-0.5`}
                      >
                        <div className={`w-2 h-2 rounded-full ${steps[activeStep].color}`}></div>
                      </div>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-amber-50 rounded-full opacity-50"></div>
                <div className="relative rounded-xl overflow-hidden aspect-video shadow-sm">
                  <Image
                    src={steps[activeStep].image || "/placeholder.svg"}
                    alt={steps[activeStep].title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg px-3 py-1.5 text-sm font-medium text-gray-700">
                    {steps[activeStep].title}
                  </div>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-yellow-50 rounded-full opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Honey Types */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Tipos de Miel que Producimos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-1 border border-transparent hover:border-amber-100">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Miel Multifloral"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-amber-600">
                  Popular
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Miel Multifloral</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Producida a partir del néctar de diversas flores silvestres de la región, ofrece un sabor equilibrado
                  y propiedades nutritivas excepcionales.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                    Sabor equilibrado
                  </span>
                  <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                    Rica en antioxidantes
                  </span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-1 border border-transparent hover:border-amber-100">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Miel de Café"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-amber-600">
                  Edición limitada
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Miel de Café</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Recolectada durante la floración de los cafetales, esta miel especial tiene notas sutiles que
                  recuerdan al café, con un aroma único y propiedades distintivas.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                    Edición limitada
                  </span>
                  <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                    Sabor único
                  </span>
                </div>
              </div>
            </div>

            <div className="group bg-white rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md hover:-translate-y-1 border border-transparent hover:border-amber-100">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Miel de Bosque"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                <div className="absolute top-4 right-4 rounded-full bg-white/90 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-amber-600">
                  Premium
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Miel de Bosque</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Proveniente de apiarios ubicados en zonas boscosas, esta miel oscura tiene un sabor intenso y es
                  especialmente rica en minerales y propiedades medicinales.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                    Alta mineralización
                  </span>
                  <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                    Sabor intenso
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Honey Benefits */}
        <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-2xl p-8 shadow-sm mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Beneficios de Nuestra Miel</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
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
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Propiedades Medicinales</h4>
              <p className="text-sm text-gray-600">
                Nuestra miel posee propiedades antibacterianas, antiinflamatorias y antioxidantes que contribuyen al
                bienestar general.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-yellow-50 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-yellow-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">100% Natural</h4>
              <p className="text-sm text-gray-600">
                No añadimos aditivos ni procesamos nuestra miel a altas temperaturas, preservando así todas sus
                propiedades naturales.
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
              <div className="w-14 h-14 rounded-full bg-orange-50 flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-orange-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 01-.659 1.591l-5.432 5.432a2.25 2.25 0 00-.659 1.591v2.927a2.25 2.25 0 01-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 00-.659-1.591L3.659 7.409A2.25 2.25 0 013 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3z"
                  />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 mb-2">Producción Sostenible</h4>
              <p className="text-sm text-gray-600">
                Nuestras prácticas apícolas respetan a las abejas y su entorno, contribuyendo a la conservación de estos
                importantes polinizadores.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
