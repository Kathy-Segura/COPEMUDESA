import Link from "next/link"
import Image from "next/image"
import { Target, Award, ArrowRight, Globe, Users, Leaf } from "lucide-react"

export default function MissionVisionSection() {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-green-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-green-800 mb-3">
            Quiénes Somos
          </span>
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">Misión, Visión y Valores</h2>
          <p className="mx-auto max-w-2xl text-base text-gray-600">
            Conoce los principios que guían nuestro trabajo diario y nuestra visión para el futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Misión - Versión compacta */}
          <div className="bg-green-50 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 relative h-40 md:h-full">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Nuestra Misión"
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-transparent"></div>
                <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <Target className="w-5 h-5 text-green-700" />
                </div>
              </div>
              <div className="md:col-span-3 p-5 flex flex-col justify-center">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nuestra Misión</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Producir y procesar productos agrícolas de la más alta calidad, utilizando prácticas sostenibles que
                  respeten el medio ambiente y promuevan el desarrollo económico y social de nuestros miembros y
                  comunidades.
                </p>
                <p className="text-sm text-gray-600">
                  Nos dedicamos a preservar las técnicas tradicionales mientras adoptamos innovaciones que mejoran la
                  eficiencia y calidad de nuestros procesos.
                </p>
              </div>
            </div>
          </div>

          {/* Visión - Versión compacta */}
          <div className="bg-amber-50 rounded-xl overflow-hidden shadow-sm transition-all hover:shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 relative h-40 md:h-full order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="Nuestra Visión"
                  fill
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-amber-900/30 to-transparent"></div>
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <Globe className="w-5 h-5 text-amber-700" />
                </div>
              </div>
              <div className="md:col-span-3 p-5 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-xl font-bold text-gray-900 mb-2">Nuestra Visión</h3>
                <p className="text-sm text-gray-600 mb-3">
                  Ser reconocidos internacionalmente como un modelo de cooperativa agrícola sostenible, innovadora y
                  socialmente responsable, que contribuye significativamente al bienestar de sus miembros y al
                  desarrollo de Nicaragua.
                </p>
                <p className="text-sm text-gray-600">
                  Aspiramos a ser líderes en procesos que equilibren la tradición con la innovación, generando valor
                  para toda la cadena productiva.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores - Versión compacta */}
        <div className="mb-10">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-6">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <div className="bg-blue-50 rounded-xl p-5 shadow-sm transition-all hover:shadow-md hover:translate-y-[-3px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center">
                  <Leaf className="w-5 h-5 text-blue-700" />
                </div>
                <h4 className="text-base font-bold text-blue-700">Sostenibilidad</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Nos comprometemos a implementar prácticas agrícolas que preserven el medio ambiente, conserven los
                recursos naturales y garanticen la viabilidad a largo plazo.
              </p>
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span>Agricultura orgánica certificada</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span>Conservación de suelos y agua</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500"></div>
                  <span>Biodiversidad en nuestros cultivos</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-xl p-5 shadow-sm transition-all hover:shadow-md hover:translate-y-[-3px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                  <Award className="w-5 h-5 text-green-700" />
                </div>
                <h4 className="text-base font-bold text-green-700">Calidad y Compromiso</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Buscamos la excelencia en todos nuestros procesos productivos, manteniendo un compromiso inquebrantable
                con nuestros miembros y clientes.
              </p>
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>Estándares rigurosos de calidad</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>Trazabilidad en toda la cadena productiva</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                  <span>Mejora continua de procesos</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-xl p-5 shadow-sm transition-all hover:shadow-md hover:translate-y-[-3px]">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                  <Users className="w-5 h-5 text-amber-700" />
                </div>
                <h4 className="text-base font-bold text-amber-700">Comunidad e Innovación</h4>
              </div>
              <p className="text-sm text-gray-600 mb-3">
                Fomentamos la solidaridad entre nuestros miembros y la innovación constante, buscando soluciones
                creativas a los desafíos de la agricultura moderna.
              </p>
              <ul className="space-y-1.5">
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span>Apoyo mutuo entre cooperativistas</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span>Programas de desarrollo comunitario</span>
                </li>
                <li className="flex items-center gap-2 text-xs text-gray-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div>
                  <span>Adopción de tecnologías apropiadas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="#contacto"
            className="inline-flex items-center rounded-full bg-green-600 px-6 py-2.5 text-sm font-medium text-white transition-all hover:bg-green-500 shadow-sm hover:shadow-green-500/25"
          >
            Únete a Nuestra Comunidad
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

