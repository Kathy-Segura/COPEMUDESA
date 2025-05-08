import Image from "next/image"
import { Calendar, Award, Users, Sprout } from "lucide-react"

export default function HistorySection() {
  return (
    <section id="historia" className="py-24 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-amber-800 mb-4">
            Nuestra Trayectoria
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Historia de la Cooperativa</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Descubre cómo nuestra cooperativa ha evolucionado a lo largo de los años, manteniendo siempre nuestro
            compromiso con la comunidad y la agricultura sostenible.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Línea de tiempo horizontal */}
          <div className="flex flex-col md:flex-row gap-8 mb-16 relative">
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-amber-200 -translate-y-1/2 z-0"></div>

            {/* Hito 1 */}
            <div className="md:w-1/4 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-amber-400 flex items-center justify-center mb-4">
                  <Calendar className="h-8 w-8 text-amber-600" />
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 text-center h-full">
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-2">
                    1985
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Fundación</h3>
                  <p className="text-sm text-gray-600">
                    25 pequeños agricultores se unieron para enfrentar los desafíos económicos y sociales.
                  </p>
                </div>
              </div>
            </div>

            {/* Hito 2 */}
            <div className="md:w-1/4 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-amber-400 flex items-center justify-center mb-4">
                  <Users className="h-8 w-8 text-amber-600" />
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 text-center h-full">
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-2">
                    1995
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Crecimiento</h3>
                  <p className="text-sm text-gray-600">
                    Expansión a más de 100 miembros y diversificación de cultivos con prácticas sostenibles.
                  </p>
                </div>
              </div>
            </div>

            {/* Hito 3 */}
            <div className="md:w-1/4 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-amber-400 flex items-center justify-center mb-4">
                  <Award className="h-8 w-8 text-amber-600" />
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 text-center h-full">
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-2">
                    2005
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Certificación</h3>
                  <p className="text-sm text-gray-600">
                    Primera certificación orgánica, abriendo puertas a mercados internacionales.
                  </p>
                </div>
              </div>
            </div>

            {/* Hito 4 */}
            <div className="md:w-1/4 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border-4 border-amber-400 flex items-center justify-center mb-4">
                  <Sprout className="h-8 w-8 text-amber-600" />
                </div>
                <div className="bg-white rounded-xl shadow-md p-5 text-center h-full">
                  <span className="inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-2">
                    Hoy
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Actualidad</h3>
                  <p className="text-sm text-gray-600">
                    Más de 500 familias asociadas, innovando con tecnologías que respetan tradiciones.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagen y narrativa */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white rounded-2xl shadow-md overflow-hidden">
            <div className="lg:col-span-5 relative h-64 lg:h-full">
              <Image
                src="/placeholder.svg?height=600&width=500"
                alt="Historia de la Cooperativa"
                fill
                className="object-cover"
              />
            </div>
            <div className="lg:col-span-7 p-8">
              <h3 className="text-2xl font-bold text-amber-800 mb-4">Nuestra Historia</h3>
              <p className="text-gray-700 mb-4">
                La Cooperativa de Matagalpa nació en 1985, cuando un grupo de 25 pequeños agricultores decidieron unir
                fuerzas para enfrentar los desafíos económicos y sociales de la época. En medio de un contexto difícil
                para el país, estos visionarios sentaron las bases de lo que hoy es una de las cooperativas agrícolas
                más importantes de Nicaragua.
              </p>
              <p className="text-gray-700 mb-4">
                Durante la década de 1990, la cooperativa experimentó un crecimiento significativo, expandiéndose a más
                de 100 miembros y diversificando sus cultivos. Fue en esta época cuando comenzamos a implementar
                prácticas más sostenibles de producción, sentando las bases para nuestro compromiso con el medio
                ambiente.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="text-center p-3 rounded-lg bg-amber-50">
                  <p className="text-2xl font-bold text-amber-700">35+</p>
                  <p className="text-xs text-gray-700">Años de historia</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-amber-50">
                  <p className="text-2xl font-bold text-amber-700">500+</p>
                  <p className="text-xs text-gray-700">Familias asociadas</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-amber-50">
                  <p className="text-2xl font-bold text-amber-700">4</p>
                  <p className="text-xs text-gray-700">Líneas de producción</p>
                </div>
                <div className="text-center p-3 rounded-lg bg-amber-50">
                  <p className="text-2xl font-bold text-amber-700">12</p>
                  <p className="text-xs text-gray-700">Comunidades</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}