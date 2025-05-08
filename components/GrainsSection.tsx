"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Wheat, Shovel, SproutIcon as Seedling, TreesIcon as Plant, Sun } from "lucide-react"
import { ArrowRight, Sprout, Tractor } from "lucide-react"

export default function GrainsSection() {
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

        {/* Proceso de producción - Estilo vertical con números */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-yellow-800 mb-8 text-center">Proceso de Producción</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Paso 1 */}
            <div
              className={`rounded-xl shadow-md overflow-hidden transition-all ${
                activeStep === 1 ? "ring-2 ring-yellow-500 transform scale-105" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setActiveStep(1)}
            >
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Preparación de Terreno"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                    1
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Preparación</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  Preparamos el terreno respetando los ciclos naturales y utilizando técnicas de conservación de suelos.
                </p>
              </div>
            </div>

            {/* Paso 2 */}
            <div
              className={`rounded-xl shadow-md overflow-hidden transition-all ${
                activeStep === 2 ? "ring-2 ring-yellow-500 transform scale-105" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setActiveStep(2)}
            >
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Siembra de Granos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                    2
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Siembra</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  La siembra se realiza siguiendo el calendario lunar y las tradiciones locales, utilizando semillas
                  criollas.
                </p>
              </div>
            </div>

            {/* Paso 3 */}
            <div
              className={`rounded-xl shadow-md overflow-hidden transition-all ${
                activeStep === 3 ? "ring-2 ring-yellow-500 transform scale-105" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setActiveStep(3)}
            >
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Cultivo de Granos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Cultivo</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  Implementamos prácticas agroecológicas para el manejo de plagas y enfermedades, evitando químicos
                  sintéticos.
                </p>
              </div>
            </div>

            {/* Paso 4 */}
            <div
              className={`rounded-xl shadow-md overflow-hidden transition-all ${
                activeStep === 4 ? "ring-2 ring-yellow-500 transform scale-105" : "bg-white hover:shadow-lg"
              }`}
              onClick={() => setActiveStep(4)}
            >
              <div className="relative h-40">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Cosecha de Granos"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute top-4 left-4">
                  <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center text-white font-bold">
                    4
                  </div>
                </div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Cosecha</h4>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600">
                  La cosecha se realiza en el momento óptimo de madurez, utilizando métodos tradicionales que preservan
                  la calidad.
                </p>
              </div>
            </div>
          </div>

          {/* Detalle del paso seleccionado */}
          <div className="mt-8 bg-white rounded-2xl shadow-md p-8">
            {activeStep === 1 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
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
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Preparación de Terreno"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {activeStep === 2 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Siembra de Granos"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 shrink-0">
                      <Wheat className="h-6 w-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-yellow-800">Siembra</h4>
                  </div>
                  <p className="text-gray-700 mb-6">
                    La siembra se realiza siguiendo el calendario lunar y las tradiciones locales, utilizando semillas
                    criollas seleccionadas por generaciones de agricultores para garantizar su adaptación a nuestro
                    clima.
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
              </div>
            )}

            {activeStep === 3 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 shrink-0">
                      <Sprout className="h-6 w-6" />
                    </div>
                    <h4 className="text-2xl font-bold text-yellow-800">Cultivo</h4>
                  </div>
                  <p className="text-gray-700 mb-6">
                    Durante el cultivo, implementamos prácticas agroecológicas para el manejo de plagas y enfermedades,
                    evitando el uso de químicos sintéticos y promoviendo el equilibrio natural del ecosistema.
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
                <div className="relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Cultivo de Granos"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            )}

            {activeStep === 4 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1 relative h-64 rounded-xl overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=400&width=600"
                    alt="Cosecha de Granos"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-yellow-100 text-yellow-700 shrink-0">
                      <Wheat className="h-6 w-6" />
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
              </div>
            )}
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
