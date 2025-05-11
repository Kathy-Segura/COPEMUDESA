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
      image: "/apiarios.jpg?height=400&width=600",
      details: [
        "Selección cuidadosa de ubicaciones con flora melífera diversa",
        "Diseño de colmenas adaptadas al clima local",
        "Mantenimiento de distancias adecuadas entre apiarios",
      ],
      icon: <Beehive className="w-6 h-6" />,
      color: "bg-rose-100",
      lightColor: "bg-rose-50",
      textColor: "text-rose-600",
      borderColor: "border-rose-200",
    },
    {
      title: "Cosecha de Miel",
      description:
        "Cosechamos la miel en el momento óptimo de maduración, cuando las abejas han completado el proceso de transformación del néctar y han sellado las celdas con cera, garantizando así su calidad.",
      image: "/cosechamiel.jpg?height=400&width=600",
      details: [
        "Selección de panales con miel madura y operculada",
        "Extracción mediante centrifugado en frío",
        "Cosecha parcial que deja reservas suficientes para las abejas",
      ],
      icon: <Droplet className="w-6 h-6" />,
      color: "bg-orange-100",
      lightColor: "bg-orange-50",
      textColor: "text-orange-600",
      borderColor: "border-orange-200",
    },
    {
      title: "Divisiones",
      description:
        "Realizamos divisiones estratégicas de las colmenas fuertes para aumentar el número de núcleos, controlar la enjambrazón natural y asegurar una población saludable y productiva.",
      image: "/divisiones.jpg?height=400&width=600",
      details: [
        "Identificación de colmenas con población y reservas adecuadas",
        "Creación de núcleos con cría, abejas y alimentos",
        "Uso de reinas fecundadas o celdas reales para nuevas colmenas",
      ],
      icon: <Flower className="w-6 h-6" />,
      color: "bg-green-100",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      title: "Transumancia",
      description:
        "Movemos nuestros apiarios según la floración estacional para aprovechar al máximo los recursos naturales, garantizando una alimentación continua y diversidad en la producción de miel.",
      image: "/transumancia.jpg?height=400&width=600",
      details: [
        "Planificación de rutas basadas en calendarios florales",
        "Transporte cuidadoso de colmenas con mínima alteración",
        "Adaptación rápida de las abejas al nuevo entorno",
      ],
      icon: <Flask className="w-6 h-6" />,
      color: "bg-purple-100",
      lightColor: "bg-purple-50",
      textColor: "text-purple-600",
      borderColor: "border-purple-200",
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

        
        <div className="text-center">
          <Link
            href="#contacto"
            className="inline-flex items-center rounded-full border-2 border-amber-200 px-8 py-3.5 font-medium text-amber-700 transition hover:bg-amber-50 shadow-sm"
          >
            Conoce Más Sobre Nuestra Miel
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}