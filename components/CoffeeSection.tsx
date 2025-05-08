"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ArrowRight, Coffee, Sun, Droplet, Flame, Wind} from "lucide-react"

export default function CoffeeSection() {
  const [activeStep, setActiveStep] = useState(1)

  return (
    <section className="py-24 bg-[#f8f5f1]">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 mb-4">
            Proceso del Café
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Café de Matagalpa</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Nuestro café es cultivado en altitudes superiores a los 1,200 metros sobre el nivel del mar, siguiendo un
            proceso cuidadoso que garantiza la calidad en cada etapa.
          </p>
        </div>

        {/* Proceso de producción - Estilo horizontal con tarjetas */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-amber-800 mb-8 text-center">Proceso de Producción</h3>

          {/* Selector de pasos */}
          <div className="flex justify-center mb-12">
            <div className="bg-white rounded-full shadow-md p-1 inline-flex">
              <button
                onClick={() => setActiveStep(1)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition ${
                  activeStep === 1 ? "bg-amber-100 text-amber-800" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Cultivo
              </button>
              <button
                onClick={() => setActiveStep(2)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition ${
                  activeStep === 2 ? "bg-amber-100 text-amber-800" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Cosecha
              </button>
              <button
                onClick={() => setActiveStep(3)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition ${
                  activeStep === 3 ? "bg-amber-100 text-amber-800" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Procesamiento
              </button>
              <button
                onClick={() => setActiveStep(4)}
                className={`rounded-full px-6 py-3 text-sm font-medium transition ${
                  activeStep === 4 ? "bg-amber-100 text-amber-800" : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                Tostado
              </button>
            </div>
          </div>

          {/* Contenido del paso - Estilo horizontal */}
          <div className="bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
              {/* Imagen lateral */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src={`/placeholder.svg?height=600&width=400&text=Paso ${activeStep}`}
                  alt={`Paso ${activeStep} del proceso del café`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
                    Paso {activeStep}
                  </span>
                </div>
              </div>

              {/* Contenido */}
              <div className="md:col-span-2 p-8">
                {activeStep === 1 && (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 shrink-0">
                        <Coffee className="h-6 w-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-amber-800">Cultivo</h4>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Cultivamos café bajo sombra, utilizando árboles nativos que protegen las plantas y mantienen la
                      biodiversidad. Nuestras plantaciones se encuentran en altitudes ideales para el desarrollo de
                      granos de alta calidad.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-amber-50 rounded-lg p-4">
                        <div className="flex items-start gap-3 mb-2">
                          <Sun className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                          <h5 className="font-bold text-gray-900">Cultivo Bajo Sombra</h5>
                        </div>
                        <p className="text-sm text-gray-600">Protege los cafetos y enriquece el sabor del grano</p>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <div className="flex items-start gap-3 mb-2">
                          <Droplet className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                          <h5 className="font-bold text-gray-900">Riego Controlado</h5>
                        </div>
                        <p className="text-sm text-gray-600">
                          Optimizamos el uso del agua para un desarrollo sostenible
                        </p>
                      </div>
                    </div>
                  </>
                )}

                {activeStep === 2 && (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 shrink-0">
                        <Coffee className="h-6 w-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-amber-800">Cosecha</h4>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Realizamos una cosecha selectiva, recogiendo únicamente los granos maduros para garantizar la
                      mejor calidad. Este proceso se realiza manualmente por recolectores experimentados que seleccionan
                      solo las cerezas en su punto óptimo.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-amber-50 rounded-lg p-4">
                        <div className="flex items-start gap-3 mb-2">
                          <Sun className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                          <h5 className="font-bold text-gray-900">Selección Manual</h5>
                        </div>
                        <p className="text-sm text-gray-600">Solo cerezas maduras para garantizar calidad</p>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-4">
                        <div className="flex items-start gap-3 mb-2">
                          <Wind className="h-5 w-5 text-amber-600 mt-1 flex-shrink-0" />
                          <h5 className="font-bold text-gray-900">Transporte Cuidadoso</h5>
                        </div>
                        <p className="text-sm text-gray-600">Del campo al beneficio en el mismo día</p>
                      </div>
                    </div>
                  </>
                )}

                {activeStep === 3 && (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 shrink-0">
                        <Coffee className="h-6 w-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-amber-800">Procesamiento</h4>
                    </div>
                    <p className="text-gray-700 mb-6">
                      Utilizamos diferentes métodos de procesamiento: lavado, honey y natural, para resaltar las
                      características únicas de cada variedad. El secado se realiza lentamente para desarrollar los
                      mejores sabores en el grano.
                    </p>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-amber-50 rounded-lg p-4 text-center">
                        <h5 className="font-bold text-gray-900 mb-2">Lavado</h5>
                        <p className="text-sm text-gray-600">Limpio y brillante</p>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-4 text-center">
                        <h5 className="font-bold text-gray-900 mb-2">Honey</h5>
                        <p className="text-sm text-gray-600">Dulce y afrutado</p>
                      </div>
                      <div className="bg-amber-50 rounded-lg p-4 text-center">
                        <h5 className="font-bold text-gray-900 mb-2">Natural</h5>
                        <p className="text-sm text-gray-600">Intenso y complejo</p>
                      </div>
                    </div>
                  </>
                )}

                {activeStep === 4 && (
                  <>
                    <div className="flex items-center gap-4 mb-6">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-700 shrink-0">
                        <Coffee className="h-6 w-6" />
                      </div>
                      <h4 className="text-2xl font-bold text-amber-800">Tostado</h4>
                    </div>
                    <p className="text-gray-700 mb-6">
                      El tostado se realiza en pequeños lotes para mantener el control de calidad. Cada variedad tiene
                      su propio perfil de tueste, diseñado para resaltar sus características únicas y desarrollar los
                      mejores aromas y sabores.
                    </p>
                    <div className="bg-amber-50 rounded-lg p-4">
                      <h5 className="font-bold text-gray-900 mb-2">Perfiles de Tueste</h5>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-amber-300"></div>
                        <span className="text-sm text-gray-700">Claro: Para resaltar acidez y notas florales</span>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                        <span className="text-sm text-gray-700">Medio: Balance entre acidez y cuerpo</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-amber-800"></div>
                        <span className="text-sm text-gray-700">
                          Oscuro: Para resaltar cuerpo y notas achocolatadas
                        </span>
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Variedades de café */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-amber-800 mb-8 text-center">Nuestras Variedades</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Variedad 1 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=400" alt="Café Bourbon" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Bourbon</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-amber-800">Perfil:</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: "85%" }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Notas de chocolate, caramelo y frutas rojas. Cuerpo medio-alto con acidez brillante.
                </p>
              </div>
            </div>

            {/* Variedad 2 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=400" alt="Café Caturra" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Caturra</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-amber-800">Perfil:</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: "90%" }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Notas cítricas, manzana verde y miel. Acidez vibrante con cuerpo medio.
                </p>
              </div>
            </div>

            {/* Variedad 3 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image src="/placeholder.svg?height=300&width=400" alt="Café Pacamara" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Pacamara</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-amber-800">Perfil:</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: "95%" }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Notas florales, frutas tropicales y especias. Complejo, con acidez elegante.
                </p>
              </div>
            </div>

            {/* Variedad 4 */}
            <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all">
              <div className="relative h-48">
                <Image
                  src="/placeholder.svg?height=300&width=400"
                  alt="Café Maragogipe"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h4 className="text-white font-bold">Maragogipe</h4>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-medium text-amber-800">Perfil:</span>
                  <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                    <div className="bg-amber-500 h-full rounded-full" style={{ width: "88%" }}></div>
                  </div>
                </div>
                <p className="text-sm text-gray-600">
                  Notas de nuez, chocolate negro y un toque de especias. Cuerpo completo.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="#"
            className="inline-flex items-center rounded-full border border-amber-700 px-6 py-3 text-sm font-medium text-amber-700 transition hover:bg-amber-50"
          >
            Conoce más sobre nuestro café
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  )
}
