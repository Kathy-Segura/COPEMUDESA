"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, Leaf, Sprout, Droplet, Sun } from "lucide-react"

export default function VegetablesSection() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="py-24 bg-green-50">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
            Proceso de Hortalizas
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Hortalizas</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Nuestras hortalizas son cultivadas con métodos agroecológicos, garantizando productos frescos, saludables y
            respetuosos con el medio ambiente en cada etapa del proceso.
          </p>
        </div>

        {/* Proceso de producción - Estilo de pestañas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">Proceso de Producción</h3>

          {/* Pestañas */}
          <div className="bg-white rounded-t-xl shadow-md">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveStep(1)}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeStep === 1
                    ? "text-green-700 border-b-2 border-green-500"
                    : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                Semilleros
              </button>
              <button
                onClick={() => setActiveStep(2)}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeStep === 2
                    ? "text-green-700 border-b-2 border-green-500"
                    : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                Transplante
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeStep === 3
                    ? "text-green-700 border-b-2 border-green-500"
                    : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                Manejo
              </button>
              <button
                onClick={() => setActiveStep(4)}
                className={`flex-1 py-4 px-6 text-center font-medium transition-colors ${
                  activeStep === 4
                    ? "text-green-700 border-b-2 border-green-500"
                    : "text-gray-600 hover:text-green-600 hover:bg-green-50"
                }`}
              >
                Cosecha
              </button>
            </div>

            {/* Contenido de la pestaña */}
            <div className="p-8">
              {activeStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 shrink-0">
                        <Sprout className="h-6 w-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-green-800">Semilleros</h4>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Iniciamos con la preparación de semilleros protegidos, utilizando sustratos orgánicos y semillas
                      de alta calidad, muchas de ellas producidas por la propia cooperativa para garantizar su
                      adaptación.
                    </p>
                    <div className="bg-green-50 rounded-lg p-5">
                      <h5 className="font-bold text-gray-900 mb-3">Proceso de Semilleros</h5>
                      <div className="space-y-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-green-800">1</span>
                          </div>
                          <p className="text-gray-700">Preparación de sustrato orgánico rico en nutrientes</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-green-800">2</span>
                          </div>
                          <p className="text-gray-700">Siembra en bandejas o camas a la profundidad adecuada</p>
                        </div>
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                            <span className="font-bold text-green-800">3</span>
                          </div>
                          <p className="text-gray-700">Protección con malla antiáfidos para evitar plagas</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="relative h-64 md:h-full rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="/semilleros.jpg?height=600&width=400"
                        alt="Semilleros de Hortalizas"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                  <div className="md:col-span-5 order-2 md:order-1">
                    <div className="relative h-64 md:h-full rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="/trasplante2.jpg?height=600&width=400"
                        alt="Transplante de Hortalizas"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 order-1 md:order-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 shrink-0">
                        <Leaf className="h-6 w-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-green-800">Transplante</h4>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Cuando las plántulas alcanzan el tamaño adecuado, son trasplantadas cuidadosamente al campo
                      definitivo, preparado previamente con abonos orgánicos para asegurar un buen desarrollo.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-start gap-3 mb-2">
                          <Sun className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <h5 className="font-bold text-gray-900">Momento Óptimo</h5>
                        </div>
                        <p className="text-sm text-gray-600">Trasplante en horas frescas para reducir el estrés</p>
                      </div>
                      <div className="bg-green-50 rounded-lg p-4">
                        <div className="flex items-start gap-3 mb-2">
                          <Droplet className="h-5 w-5 text-green-600 mt-1 flex-shrink-0" />
                          <h5 className="font-bold text-gray-900">Riego Inmediato</h5>
                        </div>
                        <p className="text-sm text-gray-600">Aseguramos la hidratación adecuada tras el trasplante</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm">
                  <div className="md:col-span-7">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 shrink-0">
                        <Leaf className="h-6 w-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-green-800">Manejo de Cultivo</h4>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Durante el crecimiento, implementamos prácticas agroecológicas para el manejo de plagas y
                      enfermedades, utilizando biopreparados y fomentando la biodiversidad para un cultivo saludable.
                    </p>
                    <div className="bg-green-50 rounded-lg p-3">
                      <h5 className="font-bold text-gray-900 text-sm mb-0">Técnicas de Manejo Sostenible</h5>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="text-center p-2 rounded-lg bg-white shadow-sm">
                          <Sprout className="h-4 w-4 text-green-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-gray-700">Cultivos trampa</p>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-white shadow-sm">
                          <Leaf className="h-4 w-4 text-green-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-gray-700">Extractos botánicos</p>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-white shadow-sm">
                          <Sun className="h-4 w-4 text-green-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-gray-700">Podas sanitarias</p>
                        </div>
                        <div className="text-center p-3 rounded-lg bg-white shadow-sm">
                          <Droplet className="h-4 w-4 text-green-600 mx-auto mb-2" />
                          <p className="text-sm font-medium text-gray-700">Riego por goteo</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-span-5">
                    <div className="relative h-64 md:h-full rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="/manejocultivos.jpg?height=600&width=300"
                        alt="Manejo de Cultivo de Hortalizas"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 text-sm">
                  <div className="md:col-span-5 order-2 md:order-1">
                    <div className="relative h-64 md:h-full rounded-xl overflow-hidden shadow-md">
                      <Image
                        src="/cosechacultivos.jpg?height=600&width=400"
                        alt="Cosecha de Hortalizas"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-7 order-1 md:order-2">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700 shrink-0">
                        <Leaf className="h-6 w-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-green-800">Cosecha</h4>
                    </div>
                    <p className="text-gray-700 mb-6">
                      La cosecha se realiza en el momento óptimo de madurez para cada hortaliza, garantizando la máxima
                      frescura y valor nutricional de nuestros productos para el consumidor final.
                    </p>
                    <div className="bg-green-50 rounded-lg p-5">
                      <h5 className="font-bold text-gray-900 mb-3">Del Campo a la Mesa</h5>
                      <p className="text-gray-700 mb-4">
                        Nuestro proceso de cosecha está diseñado para preservar la frescura y calidad de las hortalizas,
                        minimizando el tiempo entre la recolección y la llegada al consumidor.
                      </p>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                          <span className="font-bold text-green-800">✓</span>
                        </div>
                        <p className="text-gray-700">Cosecha manual en el punto óptimo de madurez</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Variedades de hortalizas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-green-800 mb-8 text-center">Nuestras Hortalizas</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* Hortaliza 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/tomates.jpg?height=300&width=400" alt="Tomates" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Tomates</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-green-800">Cultivo:</span>
                  <span className="text-xs font-medium text-gray-700">Orgánico</span>
                </div>
                <p className="text-sm text-gray-600">
                  Variedades seleccionadas por su sabor, resistencia y adaptación a nuestro clima.
                </p>
              </div>
            </div>

            {/* Hortaliza 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/pepinos.jpg?height=300&width=400" alt="Pepinos" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Pepinos</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-green-800">Cultivo:</span>
                  <span className="text-xs font-medium text-gray-700">Hidropónico</span>
                </div>
                <p className="text-sm text-gray-600">
                  Lechugas crujientes y frescas, cultivadas en sistemas hidropónicos y bajo sombra.
                </p>
              </div>
            </div>

            {/* Hortaliza 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/chiltomas.jpg?height=300&width=400" alt="Chiltomas" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Chiltomas</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-green-800">Cultivo:</span>
                  <span className="text-xs font-medium text-gray-700">Invernadero</span>
                </div>
                <p className="text-sm text-gray-600">
                  Pimientos dulces tradicionales de Nicaragua, con excelente sabor y color.
                </p>
              </div>
            </div>

            {/* Hortaliza 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/repollo.jpg?height=300&width=400" alt="Repollo" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Repollo</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-green-800">Cultivo:</span>
                  <span className="text-xs font-medium text-gray-700">Orgánico</span>
                </div>
                <p className="text-sm text-gray-600">
                  Repollo fresco de hojas compactas y firmes, cultivados en suelos sueltos y ricos en materia orgánica.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-green-700 px-6 py-3 text-sm font-medium text-green-700 transition hover:bg-green-50"
          >
            Conoce más sobre nuestras hortalizas
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
