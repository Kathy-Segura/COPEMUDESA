"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Leaf, Sprout, Droplets, ShoppingBasket } from "lucide-react"

export default function VegetablesSection() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    {
      title: "Semilleros",
      description:
        "Iniciamos el proceso con la preparación de semilleros, donde germinamos las semillas en condiciones controladas para asegurar un desarrollo óptimo de las plántulas.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Selección de semillas orgánicas y locales",
        "Sustratos especiales para cada tipo de hortaliza",
        "Control de temperatura y humedad para germinación óptima",
      ],
      icon: <Sprout className="w-6 h-6" />,
      color: "bg-green-100",
      lightColor: "bg-green-50",
      textColor: "text-green-600",
      borderColor: "border-green-200",
    },
    {
      title: "Trasplante",
      description:
        "Cuando las plántulas alcanzan el tamaño adecuado, las trasplantamos cuidadosamente a los campos de cultivo, asegurando la distancia óptima entre plantas según cada especie.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Preparación previa del terreno con abonos orgánicos",
        "Trasplante en momentos del día con menor estrés para las plantas",
        "Sistemas de riego por goteo para establecimiento eficiente",
      ],
      icon: <Leaf className="w-6 h-6" />,
      color: "bg-teal-100",
      lightColor: "bg-teal-50",
      textColor: "text-teal-600",
      borderColor: "border-teal-200",
    },
    {
      title: "Manejo de Cultivos",
      description:
        "Durante el ciclo de crecimiento, implementamos prácticas agroecológicas que favorecen el desarrollo saludable de las plantas y previenen plagas y enfermedades de manera natural.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Asociación de cultivos para control natural de plagas",
        "Uso de preparados botánicos para protección de plantas",
        "Manejo de coberturas vegetales para conservar humedad",
      ],
      icon: <Droplets className="w-6 h-6" />,
      color: "bg-cyan-100",
      lightColor: "bg-cyan-50",
      textColor: "text-cyan-600",
      borderColor: "border-cyan-200",
    },
    {
      title: "Cosecha",
      description:
        "Cosechamos cada hortaliza en su punto óptimo de madurez, asegurando así la máxima calidad, sabor y valor nutritivo. La recolección se realiza manualmente con gran cuidado.",
      image: "/placeholder.svg?height=400&width=600",
      details: [
        "Determinación precisa del momento ideal de cosecha",
        "Técnicas de recolección que preservan la integridad del producto",
        "Manejo post-cosecha que mantiene la frescura y calidad",
      ],
      icon: <ShoppingBasket className="w-6 h-6" />,
      color: "bg-amber-100",
      lightColor: "bg-amber-50",
      textColor: "text-amber-600",
      borderColor: "border-amber-200",
    },
  ]

  return (
    <section id="hortalizas" className="py-24 bg-[#f8f9f7] relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-50 rounded-full opacity-50 -translate-x-20 -translate-y-20 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-50 rounded-full opacity-40 -translate-x-40 translate-y-20 blur-3xl"></div>
      <div className="absolute top-1/3 left-1/4 w-6 h-6 bg-green-100 rounded-full opacity-70"></div>
      <div className="absolute top-2/3 right-1/3 w-4 h-4 bg-teal-100 rounded-full opacity-70"></div>
      <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-cyan-100 rounded-full opacity-70"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-16 text-center flex flex-col items-center">
          <span className="inline-block rounded-full bg-green-50 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-700 mb-4">
            Proceso de Producción
          </span>
          <div className="flex items-center gap-4 mb-6">
            <h2 className="text-4xl font-bold text-gray-900 md:text-5xl">Hortalizas</h2>
            <div className="relative w-12 h-12">
              <div className="absolute inset-0 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute inset-1 bg-green-50 rounded-full opacity-70 flex items-center justify-center">
                <Leaf className="w-6 h-6 text-green-600" />
              </div>
            </div>
          </div>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Producimos hortalizas frescas y orgánicas utilizando métodos que respetan los ciclos naturales y el
            equilibrio del ecosistema, resultando en productos de excepcional sabor y valor nutritivo.
          </p>
        </div>

        {/* Process Steps Tabs */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-5">
            <div className="lg:col-span-2 bg-gradient-to-br from-green-50 to-teal-50 p-6">
              <h3 className="text-xl font-bold mb-6 text-gray-800">Nuestro Proceso</h3>
              <div className="space-y-2">
                {steps.map((step, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-4 rounded-lg transition-all border ${
                      activeStep === index
                        ? `${step.borderColor} ${step.lightColor} shadow-sm`
                        : "border-transparent hover:border-gray-100 hover:bg-white/50"
                    }`}
                    onClick={() => setActiveStep(index)}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                          activeStep === index ? `${step.color} ${step.textColor}` : "bg-white text-gray-400"
                        }`}
                      >
                        {index + 1}
                      </div>
                      <span className={`font-medium ${activeStep === index ? step.textColor : "text-gray-600"}`}>
                        {step.title}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            </div>
            <div className="lg:col-span-3 p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className={`w-10 h-10 rounded-full ${steps[activeStep].color} flex items-center justify-center`}
                    >
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
                <div className="relative rounded-xl overflow-hidden aspect-square shadow-sm">
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
              </div>
            </div>
          </div>
        </div>

        {/* Vegetable Types */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 mb-16">
          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Tomates Orgánicos"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-600">
                Orgánico
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-bold text-gray-900">Tomates</h3>
              <p className="mb-4 text-sm text-gray-600">
                Cultivamos diversas variedades de tomates, desde cherry hasta tomates grandes para ensalada, todos con
                sabor intenso y cultivados sin químicos sintéticos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                  Rico en licopeno
                </span>
                <span className="inline-block rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                  Cultivo protegido
                </span>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Lechugas"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 rounded-full bg-teal-100 px-3 py-1 text-xs font-semibold text-teal-600">
                Hidropónico
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-bold text-gray-900">Lechugas</h3>
              <p className="mb-4 text-sm text-gray-600">
                Producimos lechugas crujientes y frescas mediante sistemas hidropónicos que optimizan el uso del agua y
                garantizan productos limpios y saludables.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600">
                  Bajo consumo de agua
                </span>
                <span className="inline-block rounded-full bg-teal-50 px-3 py-1 text-xs font-medium text-teal-600">
                  Múltiples variedades
                </span>
              </div>
            </div>
          </div>

          <div className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all hover:shadow-md">
            <div className="relative h-64 w-full overflow-hidden">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Chiltomas (Pimientos)"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute top-4 right-4 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-600">
                Local
              </div>
            </div>
            <div className="p-6">
              <h3 className="mb-2 text-lg font-bold text-gray-900">Chiltomas (Pimientos)</h3>
              <p className="mb-4 text-sm text-gray-600">
                Cultivamos chiltomas dulces tradicionales de Nicaragua, con excelente sabor y color. Ideales para
                sofritos y rellenos.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                  Rico en vitamina C
                </span>
                <span className="inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-600">
                  Variedades locales
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
