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

         <div className="mb-16 text-center">
              <h3 className="text-2xl font-bold text-amber-500 mb-8 text-center">Proceso de Producción</h3>
         </div>
      
        {/* Proceso de producción - Navegación lateral */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-10 gap-8">
            
            {/* Navegación lateral - Ahora más ancha (4 columnas) */}
            <div className="md:col-span-4">
              <div className="bg-white rounded-xl shadow-md h-full">
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

            {/* Tarjetas con informacion*/}
            <div className="md:col-span-6">
              <div className="bg-white rounded-xl shadow-md overflow-hidden">

                {activeStep === 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-sm">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/prepararterreno.jpg?height=400&width=600"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-sm">
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
                        src="/sembriofrijoles.jpg?height=400&width=600"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-sm">
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src="/cultivocosecha.jpg?height=400&width=600"
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
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-0 text-sm"> {/*con la prop text-sm reducimos el tamaño del grid*/}
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
                        src="/cultivofrijoles.jpg?height=400&width=600"
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

         {/* Basic Grains Section */}
          <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
              <h3 className="text-2xl font-bold text-amber-500 mb-8 text-center">Nuestras Variedades</h3>
            </div>

            <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
              {/* Imágenes pequeñas alineadas a la derecha */}
              <div className="space-y-8 ml-auto">
                {/* Grain Product 1 */}
                <div className="group flex gap-6 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src="/frijoles.jpg?height=200&width=200" alt="Frijol Rojo" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Frijol Rojo</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Frijol rojo tradicional nicaragüense, con excelente sabor y textura. Ideal para gallo pinto y otros platos típicos.
                    </p>
                  </div>
                </div>

                {/* Grain Product 2 */}
                <div className="group flex gap-6 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src="/maiz.jpg?height=200&width=200" alt="Maíz Criollo" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Maíz Criollo</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Maíz de variedades locales, perfecto para tortillas, tamales y otros platillos tradicionales.
                    </p>
                  </div>
                </div>

                {/* Grain Product 3 */}
                <div className="group flex gap-6 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src="/frijoldor.jpg?height=200&width=200" alt="Frijol Dor" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Frijol Dor</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Frijoles cultivados con técnicas tradicionales, con excelente rendimiento y sabor característico.
                    </p>
                   
                  </div>
                </div>

                {/* Grain Product 4 */}
                <div className="group flex gap-6 rounded-xl bg-white p-4 shadow-sm transition-all hover:shadow-md">
                  <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg">
                    <Image src="/sorgo.jpg?height=200&width=200" alt="Sorgo" fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-bold text-gray-900">Sorgo-millón</h3>
                    <p className="mb-3 text-sm text-gray-600">
                      Cereal resistente a la sequía, utilizado para alimentación animal y elaboración de productos tradicionales.
                    </p>
                  </div>
                </div>
              </div>

              {/* Contenedor de imágenes grandes */}
              <div className="space-y-8">
                {/* Imagen grande 1 */}
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/granosmaiz.jpg"
                    alt="Granos Básicos"
                    width={800}
                    height={600}
                    className="w-full rounded-2xl object-cover"
                  />
                </div>

                {/* Imagen grande 2 (Debajo de la primera) */}
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src="/granosfrijoles.jpg"
                    alt="Granos Básicos Adicional"
                    width={800}
                    height={600}
                    className="w-full rounded-2xl object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
      </div>
    </section>
  )
}
