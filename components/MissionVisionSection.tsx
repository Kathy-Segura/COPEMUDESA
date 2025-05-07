import Link from "next/link"
import Image from "next/image"
import { Target, Award, ArrowRight, Heart, Globe, Lightbulb, Users, Leaf, Shield } from "lucide-react"

export default function MissionVisionSection() {
  return (
    <section id="nosotros" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
            Quiénes Somos
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Misión, Visión y Valores</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Conoce los principios que guían nuestro trabajo diario y nuestra visión para el futuro.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Misión */}
          <div className="bg-green-50 rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 relative">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Nuestra Misión"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-green-900/30 to-transparent"></div>
                <div className="absolute top-6 left-6 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <Target className="w-8 h-8 text-green-700" />
                </div>
              </div>
              <div className="md:col-span-3 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Misión</h3>
                <p className="text-gray-600 mb-6">
                  Producir y procesar productos agrícolas de la más alta calidad, utilizando prácticas sostenibles que
                  respeten el medio ambiente y promuevan el desarrollo económico y social de nuestros miembros y
                  comunidades.
                </p>
                <p className="text-gray-600">
                  Nos dedicamos a preservar las técnicas tradicionales de cultivo mientras adoptamos innovaciones que
                  mejoran la eficiencia y calidad de nuestros procesos productivos.
                </p>
              </div>
            </div>
          </div>

          {/* Visión */}
          <div className="bg-amber-50 rounded-2xl overflow-hidden shadow-md transition-all hover:shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-5">
              <div className="md:col-span-2 relative order-1 md:order-2">
                <Image
                  src="/placeholder.svg?height=600&width=400"
                  alt="Nuestra Visión"
                  width={400}
                  height={600}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-amber-900/30 to-transparent"></div>
                <div className="absolute top-6 right-6 w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
                  <Globe className="w-8 h-8 text-amber-700" />
                </div>
              </div>
              <div className="md:col-span-3 p-8 flex flex-col justify-center order-2 md:order-1">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Nuestra Visión</h3>
                <p className="text-gray-600 mb-6">
                  Ser reconocidos internacionalmente como un modelo de cooperativa agrícola sostenible, innovadora y
                  socialmente responsable, que contribuye significativamente al bienestar de sus miembros y al
                  desarrollo de Nicaragua.
                </p>
                <p className="text-gray-600">
                  Aspiramos a ser líderes en procesos de producción agrícola que equilibren la tradición con la
                  innovación, generando valor para nuestros miembros y para toda la cadena productiva.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Valores */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-12">Nuestros Valores</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-2xl p-8 shadow-md transition-all hover:shadow-lg hover:translate-y-[-5px]">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="col-span-1 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Leaf className="w-8 h-8 text-blue-700" />
                </div>
                <div className="col-span-2 w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-blue-700" />
                </div>
                <div className="col-span-3 w-full h-16 rounded-xl bg-blue-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-blue-700">Sostenibilidad</span>
                </div>
              </div>
              <p className="text-gray-600">
                Nos comprometemos a implementar prácticas agrícolas que preserven el medio ambiente, conserven los
                recursos naturales y garanticen la viabilidad a largo plazo de nuestras actividades productivas.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Agricultura orgánica certificada</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Conservación de suelos y agua</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-blue-500"></div>
                  <span>Biodiversidad en nuestros cultivos</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 rounded-2xl p-8 shadow-md transition-all hover:shadow-lg hover:translate-y-[-5px]">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="col-span-1 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Award className="w-8 h-8 text-green-700" />
                </div>
                <div className="col-span-2 w-16 h-16 rounded-full bg-green-100 flex items-center justify-center">
                  <Heart className="w-8 h-8 text-green-700" />
                </div>
                <div className="col-span-3 w-full h-16 rounded-xl bg-green-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-green-700">Calidad y Compromiso</span>
                </div>
              </div>
              <p className="text-gray-600">
                Buscamos la excelencia en todos nuestros procesos productivos, desde la selección de semillas hasta el
                procesamiento final, manteniendo un compromiso inquebrantable con nuestros miembros y clientes.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Estándares rigurosos de calidad</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Trazabilidad en toda la cadena productiva</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Mejora continua de procesos</span>
                </li>
              </ul>
            </div>

            <div className="bg-amber-50 rounded-2xl p-8 shadow-md transition-all hover:shadow-lg hover:translate-y-[-5px]">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="col-span-1 w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <Users className="w-8 h-8 text-amber-700" />
                </div>
                <div className="col-span-2 w-16 h-16 rounded-full bg-amber-100 flex items-center justify-center">
                  <Lightbulb className="w-8 h-8 text-amber-700" />
                </div>
                <div className="col-span-3 w-full h-16 rounded-xl bg-amber-100 flex items-center justify-center">
                  <span className="text-lg font-bold text-amber-700">Comunidad e Innovación</span>
                </div>
              </div>
              <p className="text-gray-600">
                Fomentamos la solidaridad entre nuestros miembros y la innovación constante en nuestros métodos de
                trabajo, buscando soluciones creativas a los desafíos de la agricultura moderna.
              </p>
              <ul className="mt-4 space-y-2">
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span>Apoyo mutuo entre cooperativistas</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span>Programas de desarrollo comunitario</span>
                </li>
                <li className="flex items-center gap-2 text-gray-600">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <span>Adopción de tecnologías apropiadas</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
