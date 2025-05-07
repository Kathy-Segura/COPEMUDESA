import Image from "next/image"
import { History, Award } from "lucide-react"

export default function HistorySection() {
  return (
    <section id="historia" className="py-24 bg-[#f8f5f1]">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 mb-4">
            Nuestra Historia
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">La Evolución de Nuestra Cooperativa</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Desde nuestros humildes inicios hasta convertirnos en un referente de la agricultura sostenible en
            Nicaragua.
          </p>
        </div>

        {/* Timeline Section */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 h-full w-1 -translate-x-1/2 bg-amber-200 md:block hidden"></div>

          {/* Timeline Items */}
          <div className="space-y-16">
            {/* 1995-2000 */}
            <div className="relative">
              <div className="md:grid md:grid-cols-2 items-center gap-8 flex flex-col">
                <div className="md:text-right order-2 md:order-1 md:pr-12">
                  <div className="bg-white p-6 rounded-xl shadow-md relative">
                    <div className="absolute top-6 -right-12 w-8 h-8 rounded-full bg-amber-400 border-4 border-white hidden md:block"></div>
                    <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-3">
                      1995-2000
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Los Inicios</h3>
                    <p className="text-gray-600">
                      Nuestra cooperativa nació de la unión de 15 pequeños agricultores de Estelí que buscaban mejorar
                      sus condiciones de vida y preservar las técnicas tradicionales de cultivo. Con recursos limitados
                      pero con una visión clara, comenzamos a producir café y granos básicos para el mercado local.
                    </p>
                    <div className="mt-4 flex md:justify-end justify-start">
                      <div className="flex items-center gap-2 text-amber-700 text-sm font-medium">
                        <History className="w-4 h-4" />
                        <span>15 agricultores fundadores</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:pl-12 order-1 md:order-2">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full opacity-50"></div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Fundadores de la cooperativa"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-green-100 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2001-2010 */}
            <div className="relative">
              <div className="md:grid md:grid-cols-2 items-center gap-8 flex flex-col">
                <div className="md:pl-12 order-1">
                  <div className="relative">
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-100 rounded-full opacity-50"></div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Crecimiento y desarrollo"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -left-3 w-16 h-16 bg-amber-100 rounded-full opacity-50"></div>
                  </div>
                </div>
                <div className="md:text-left md:pl-12 order-2">
                  <div className="bg-white p-6 rounded-xl shadow-md relative">
                    <div className="absolute top-6 -left-12 w-8 h-8 rounded-full bg-amber-400 border-4 border-white hidden md:block"></div>
                    <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-3">
                      2001-2010
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Crecimiento y Desarrollo</h3>
                    <p className="text-gray-600">
                      Durante esta década, implementamos prácticas de agricultura sostenible y obtuvimos nuestras
                      primeras certificaciones. Expandimos nuestra producción para incluir hortalizas orgánicas y
                      comenzamos a exportar nuestro café a mercados internacionales, principalmente en Europa.
                    </p>
                    <div className="mt-4 flex justify-start">
                      <div className="flex items-center gap-2 text-green-700 text-sm font-medium">
                        <Award className="w-4 h-4" />
                        <span>Primera certificación orgánica en 2005</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 2011-Presente */}
            <div className="relative">
              <div className="md:grid md:grid-cols-2 items-center gap-8 flex flex-col">
                <div className="md:text-right order-2 md:order-1 md:pr-12">
                  <div className="bg-white p-6 rounded-xl shadow-md relative">
                    <div className="absolute top-6 -right-12 w-8 h-8 rounded-full bg-amber-400 border-4 border-white hidden md:block"></div>
                    <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-3">
                      2011-Presente
                    </span>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">Consolidación</h3>
                    <p className="text-gray-600">
                      Hoy, nuestra cooperativa cuenta con más de 200 miembros y ha establecido alianzas estratégicas con
                      distribuidores en América y Europa. Hemos implementado tecnologías que respetan el medio ambiente
                      y seguimos comprometidos con el desarrollo de nuestra comunidad a través de programas educativos y
                      de salud.
                    </p>
                    <div className="mt-4 flex md:justify-end justify-start">
                      <div className="flex items-center gap-2 text-amber-700 text-sm font-medium">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                          <circle cx="9" cy="7" r="4"></circle>
                          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                        </svg>
                        <span>Más de 200 miembros activos</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:pl-12 order-1 md:order-2">
                  <div className="relative">
                    <div className="absolute -top-4 -left-4 w-24 h-24 bg-amber-100 rounded-full opacity-50"></div>
                    <div className="relative rounded-xl overflow-hidden shadow-lg aspect-[4/3]">
                      <Image
                        src="/placeholder.svg?height=600&width=800"
                        alt="Cooperativa actual"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-3 -right-3 w-16 h-16 bg-green-100 rounded-full opacity-50"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Photo Gallery */}
        <div className="mt-16 mb-12">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">Galería Histórica</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative rounded-xl overflow-hidden aspect-[16/9]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Primera sede de la cooperativa"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Primera sede (1995)</h4>
                <p className="text-sm">Donde comenzó nuestra historia</p>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Primera cosecha"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Primera cosecha</h4>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Certificación orgánica"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Certificación (2005)</h4>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Expansión internacional"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Primera exportación</h4>
              </div>
            </div>
            <div className="relative rounded-xl overflow-hidden aspect-square">
              <Image
                src="/placeholder.svg?height=300&width=300"
                alt="Nuevas tecnologías"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Innovación tecnológica</h4>
              </div>
            </div>
            <div className="md:col-span-2 relative rounded-xl overflow-hidden aspect-[16/9]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Cooperativa actual"
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <h4 className="font-bold">Nuestra cooperativa hoy</h4>
                <p className="text-sm">Creciendo juntos hacia el futuro</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
