import { Target, Eye, Heart, Check } from "lucide-react"
import Image from "next/image"

export default function MisionVisionValores() {
  return (
    <section id="misionvision" className="py-20 bg-gradient-to-b from-white to-green-50 relative overflow-hidden">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-green-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-100/20 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="mb-12 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
            Nuestra Esencia
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Misión, Visión y Valores</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Estos principios fundamentales guían nuestro trabajo diario y nuestro compromiso con la comunidad, el medio
            ambiente y la calidad de nuestros procesos.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Misión - Diseño mejorado y compacto */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg">
            <div className="h-32 relative">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Misión de la Cooperativa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-600 flex-shrink-0">
                    <Target className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Misión</h3>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-700 text-sm">
                Somos una cooperativa agrícola comprometida con el desarrollo sostenible de Matagalpa, implementando
                procesos de producción que respetan el medio ambiente, preservan nuestras tradiciones y mejoran la
                calidad de vida de nuestros asociados y sus familias.
              </p>
            </div>
          </div>

          {/* Visión - Diseño mejorado y compacto */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg">
            <div className="h-32 relative">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Visión de la Cooperativa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-600 flex-shrink-0">
                    <Eye className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Visión</h3>
                </div>
              </div>
            </div>
            <div className="p-5">
              <p className="text-gray-700 text-sm">
                Ser una cooperativa líder en la producción agrícola sostenible en Nicaragua, reconocida
                internacionalmente por la excelencia de nuestros procesos, la calidad de nuestros productos y nuestro
                impacto positivo en la comunidad y el medio ambiente.
              </p>
            </div>
          </div>

          
          {/* Valores - Diseño mejorado y compacto */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:shadow-lg">
            <div className="h-32 relative">
              <Image
                src="/placeholder.svg?height=300&width=500"
                alt="Valores de la Cooperativa"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/80 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-green-600 flex-shrink-0">
                    <Heart className="h-4 w-4" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Valores</h3>
                </div>
              </div>
            </div>
            <div className="p-5">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Sostenibilidad</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Cooperación</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Transparencia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                  <span className="text-sm text-gray-700">Innovación</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
