"use client"

import Image from "next/image"
import { ArrowRight, Wheat, Sprout, Tractor } from "lucide-react"
import { useState } from "react"

export default function GranosSection() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-yellow-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-yellow-800 mb-4">
            Proceso de Granos Básicos
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Granos Básicos</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Los granos básicos de nuestra cooperativa son cultivados por pequeños productores que mantienen vivas las
            tradiciones agrícolas de la región, utilizando técnicas sostenibles.
          </p>
        </div>

        {/* Proceso de producción - Navegación lateral */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-yellow-800 mb-8 text-center">Proceso de Producción</h3>

          <div className="grid grid-cols-1 md:grid-cols-10 gap-6">
            {/* Navegación lateral - Ahora más ancha (4 columnas) */}
            <div className="md:col-span-4">
              <div className="bg-white rounded-xl shadow-md h-full">
                <div className="p-5 border-b border-yellow-100">
                  <h4 className="text-lg font-bold text-yellow-800">Etapas del Proceso</h4>
                </div>
                <div className="p-4 flex flex-col h-[calc(100%-70px)]">
                  <div className="flex flex-col divide-y divide-yellow-50 h-full justify-between">
                    <button
                      onClick={() => setActiveStep(1)}
                      className={`flex items-center gap-4 p-5 rounded-lg text-left transition-all ${
                        activeStep === 1 ? "bg-yellow-50 text-yellow-800" : "hover:bg-yellow-50/50 text-gray-700"
                      }`}
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full ${
                          activeStep === 1 ? "bg-yellow-500 text-white" : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        <Tractor className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-lg">Preparación</p>
                        <p className="text-sm text-gray-500">Preparación del terreno</p>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveStep(2)}
                      className={`flex items-center gap-4 p-5 rounded-lg text-left transition-all ${
                        activeStep === 2 ? "bg-yellow-50 text-yellow-800" : "hover:bg-yellow-50/50 text-gray-700"
                      }`}
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full ${
                          activeStep === 2 ? "bg-yellow-500 text-white" : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        <Wheat className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-lg">Siembra</p>
                        <p className="text-sm text-gray-500">Siembra de semillas</p>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveStep(3)}
                      className={`flex items-center gap-4 p-5 rounded-lg text-left transition-all ${
                        activeStep === 3 ? "bg-yellow-50 text-yellow-800" : "hover:bg-yellow-50/50 text-gray-700"
                      }`}
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full ${
                          activeStep === 3 ? "bg-yellow-500 text-white" : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        <Sprout className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-medium text-lg">Cultivo</p>
                        <p className="text-sm text-gray-500">Mantenimiento del cultivo</p>
                      </div>
                    </button>

                    <button
                      onClick={() => setActiveStep(4)}
                      className={`flex items-center gap-4 p-5 rounded-lg text-left transition-all ${
                        activeStep === 4 ? "bg-yellow-50 text-yellow-800" : "hover:bg-yellow-50/50 text-gray-700"
                      }`}
                    >
                      <div
                        className={`flex h-14 w-14 items-center justify-center rounded-full ${
                          activeStep === 4 ? "bg-yellow-500 text-white" : "bg-yellow-100 text-yellow-600"
                        }`}
                      >
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p className="font-medium text-lg">Cosecha</p>
                        <p className="text-sm text-gray-500">Recolección y almacenamiento</p>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contenido principal - Ahora 6 columnas */}
            <div className="md:col-span-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">
                {activeStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Preparación de Terreno"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                          Paso 1
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 shrink-0">
                          <Tractor className="h-6 w-6" />
                        </div>
                        <h4 className="text-2xl font-bold text-yellow-800">Preparación del Terreno</h4>
                      </div>
                      <p className="text-gray-700 mb-6">
                        Preparamos el terreno respetando los ciclos naturales y utilizando técnicas de conservación de
                        suelos para mantener su fertilidad a largo plazo y garantizar cultivos saludables.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Limpieza selectiva del terreno</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Construcción de barreras vivas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Incorporación de abonos orgánicos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeStep === 2 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="p-8 order-2 md:order-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 shrink-0">
                          <Wheat className="h-6 w-6" />
                        </div>
                        <h4 className="text-2xl font-bold text-yellow-800">Siembra</h4>
                      </div>
                      <p className="text-gray-700 mb-6">
                        La siembra se realiza siguiendo el calendario lunar y las tradiciones locales, utilizando
                        semillas criollas seleccionadas por generaciones de agricultores para garantizar su adaptación a
                        nuestro clima.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Selección de semillas criollas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Siembra manual o con tracción animal</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Siembra asociada de cultivos</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-64 md:h-auto order-1 md:order-2">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Siembra de Granos"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                          Paso 2
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {activeStep === 3 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Cultivo de Granos"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                      <div className="absolute top-4 left-4">
                        <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                          Paso 3
                        </span>
                      </div>
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 shrink-0">
                          <Sprout className="h-6 w-6" />
                        </div>
                        <h4 className="text-2xl font-bold text-yellow-800">Cultivo</h4>
                      </div>
                      <p className="text-gray-700 mb-6">
                        Durante el cultivo, implementamos prácticas agroecológicas para el manejo de plagas y
                        enfermedades, evitando el uso de químicos sintéticos y promoviendo el equilibrio natural del
                        ecosistema.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Control manual de malezas</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Uso de biopreparados naturales</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Rotación de cultivos</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                )}

                {activeStep === 4 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                    <div className="p-8 order-2 md:order-1">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 shrink-0">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                            />
                          </svg>
                        </div>
                        <h4 className="text-2xl font-bold text-yellow-800">Cosecha</h4>
                      </div>
                      <p className="text-gray-700 mb-6">
                        La cosecha se realiza en el momento óptimo de madurez, utilizando métodos tradicionales que
                        preservan la calidad de los granos y minimizan las pérdidas, asegurando el mejor producto final.
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Cosecha manual en el punto óptimo</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Secado natural al sol</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-yellow-600 font-bold">•</span>
                          <span className="text-gray-700">Almacenamiento en silos mejorados</span>
                        </li>
                      </ul>
                    </div>
                    <div className="relative h-64 md:h-auto order-1 md:order-2">
                      <Image
                        src="/placeholder.svg?height=400&width=600"
                        alt="Cosecha de Granos"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-l from-black/40 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="inline-block rounded-full bg-yellow-100 px-3 py-1 text-xs font-semibold text-yellow-800">
                          Paso 4
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tipos de granos */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-yellow-800 mb-8 text-center">Nuestros Granos Básicos</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Frijol */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Frijol Rojo" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Frijol Rojo</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-yellow-800">Rendimiento:</span>
                  <span className="text-sm font-medium text-gray-700">15-20 qq/mz</span>
                </div>
                <p className="text-sm text-gray-600">
                  Pilar de la dieta nicaragüense, cultivamos variedades criollas adaptadas a nuestro clima con alto
                  valor nutricional.
                </p>
              </div>
            </div>

            {/* Maíz */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Maíz Criollo" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Maíz Criollo</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-yellow-800">Rendimiento:</span>
                  <span className="text-sm font-medium text-gray-700">25-35 qq/mz</span>
                </div>
                <p className="text-sm text-gray-600">
                  Cultivado siguiendo tradiciones ancestrales, preservamos variedades locales como el Olote Rojo y
                  Pujagua.
                </p>
              </div>
            </div>

            {/* Sorgo */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=400&width=600" alt="Sorgo" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Sorgo</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex justify-between items-center mb-3">
                  <span className="text-sm font-medium text-yellow-800">Rendimiento:</span>
                  <span className="text-sm font-medium text-gray-700">30-40 qq/mz</span>
                </div>
                <p className="text-sm text-gray-600">
                  Cultivo resistente a la sequía, utilizado tanto para consumo humano como animal, fundamental para la
                  seguridad alimentaria.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-yellow-700 px-6 py-3 text-sm font-medium text-yellow-700 transition hover:bg-yellow-50"
          >
            Conoce más sobre nuestros granos básicos
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
