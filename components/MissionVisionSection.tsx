import Link from "next/link"
import Image from "next/image"
import { Target, Award, ArrowRight, Globe, Users, Leaf, Eye, Heart} from "lucide-react"


export default function MissionVisionSection() {
  return (
    <section id="misionvision" className="py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
            Nuestra Esencia
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Misión, Visión y Valores</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Estos principios fundamentales guían nuestro trabajo diario y nuestro compromiso con la comunidad, el medio
            ambiente y la calidad de nuestros procesos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Misión */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Misión</h3>
            </div>
            <p className="text-gray-700">
              Somos una cooperativa agrícola comprometida con el desarrollo sostenible de Matagalpa, implementando
              procesos de producción que respetan el medio ambiente, preservan nuestras tradiciones y mejoran la calidad
              de vida de nuestros asociados y sus familias.
            </p>
          </div>

          {/* Visión */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                <Eye className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Visión</h3>
            </div>
            <p className="text-gray-700">
              Ser una cooperativa líder en la producción agrícola sostenible en Nicaragua, reconocida internacionalmente
              por la excelencia de nuestros procesos, la calidad de nuestros productos y nuestro impacto positivo en la
              comunidad y el medio ambiente.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 flex-shrink-0">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-gray-900">Valores</h3>
            </div>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <strong>Sostenibilidad:</strong> Respetamos y protegemos el medio ambiente.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <strong>Cooperación:</strong> Trabajamos juntos por el bien común.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <strong>Transparencia:</strong> Actuamos con honestidad y claridad.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600 font-bold">•</span>
                <span>
                  <strong>Innovación:</strong> Mejoramos respetando tradiciones.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
