import Image from "next/image"
import { Calendar, Award, Building } from "lucide-react"

export default function HistorySection() {
  return (
    <section id="historia" className="py-16 bg-gradient-to-b from-[#f8f7f4] to-[#f5f3ee]">
      <div className="container mx-auto px-4">
        <div className="mb-8 text-center">
          <span className="inline-block rounded-full bg-stone-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-stone-700 mb-2">
            Nuestra Historia
          </span>
          <h2 className="text-3xl font-bold text-gray-900 md:text-4xl mb-3">Trayectoria de Excelencia</h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600">
            Un viaje de dedicación, innovación y compromiso con la agricultura sostenible
          </p>
        </div>

        {/* Línea de tiempo horizontal con diseño creativo */}
        <div className="relative mb-12">
          {/* Línea conectora */}
          <div className="absolute left-0 right-0 top-1/2 h-0.5 bg-gradient-to-r from-amber-200 via-green-200 to-teal-200 transform -translate-y-1/2 hidden md:block"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Etapa 1: Orígenes */}
            <div className="relative group">
              {/* Círculo conector en la línea de tiempo */}
              <div className="absolute left-1/2 top-0 w-6 h-6 rounded-full bg-amber-100 border-2 border-amber-300 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Fundadores de la cooperativa"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-amber-700 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    1995
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-sm">Nuestros Orígenes</h3>
                    <div className="w-12 h-1 bg-amber-300 rounded-full"></div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Nacimos de la unión de 15 pequeños agricultores de Estelí con una visión compartida: preservar
                    técnicas tradicionales y mejorar la calidad de vida de nuestras familias. Comenzamos produciendo
                    café y granos básicos para mercados locales, superando juntos los primeros desafíos.
                  </p>
                </div>
              </div>
            </div>

            {/* Etapa 2: Crecimiento */}
            <div className="relative group">
              {/* Círculo conector en la línea de tiempo */}
              <div className="absolute left-1/2 top-0 w-6 h-6 rounded-full bg-green-100 border-2 border-green-300 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Certificación orgánica"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-green-700 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    2001-2010
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-sm">Crecimiento</h3>
                    <div className="w-12 h-1 bg-green-300 rounded-full"></div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Implementamos prácticas de agricultura sostenible y obtuvimos nuestras primeras certificaciones.
                    Expandimos la producción a hortalizas orgánicas y comenzamos a exportar café a Europa. Iniciamos
                    programas comunitarios construyendo escuelas y centros de salud.
                  </p>
                </div>
              </div>
            </div>

            {/* Etapa 3: Consolidación */}
            <div className="relative group">
              {/* Círculo conector en la línea de tiempo */}
              <div className="absolute left-1/2 top-0 w-6 h-6 rounded-full bg-teal-100 border-2 border-teal-300 transform -translate-x-1/2 -translate-y-1/2 z-10 hidden md:block"></div>

              <div className="bg-white rounded-xl shadow-sm overflow-hidden transform transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1 h-full">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src="/placeholder.svg?height=300&width=500"
                    alt="Cooperativa actual"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-teal-700 flex items-center">
                    <Calendar className="w-3 h-3 mr-1" />
                    Actualidad
                  </div>
                  <div className="absolute bottom-0 left-0 w-full p-4">
                    <h3 className="text-xl font-bold text-white mb-1 drop-shadow-sm">Consolidación</h3>
                    <div className="w-12 h-1 bg-teal-300 rounded-full"></div>
                  </div>
                </div>

                <div className="p-5">
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Hoy contamos con más de 200 miembros y alianzas estratégicas internacionales. Implementamos
                    tecnologías respetuosas con el medio ambiente y mantenemos nuestro compromiso con la calidad,
                    sostenibilidad y desarrollo comunitario.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}