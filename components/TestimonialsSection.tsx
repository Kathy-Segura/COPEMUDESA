import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-green-800 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white mb-4">
            Testimonios
          </span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Lo Que Dicen Nuestros Clientes</h2>
          <p className="mx-auto max-w-3xl text-lg text-green-100">
            Descubre por qué nuestros productos son apreciados por clientes de todo el mundo.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-green-700/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full bg-green-600">
                <Image src="/placeholder.svg?height=100&width=100" alt="Cliente" width={56} height={56} />
              </div>
              <div>
                <h4 className="font-semibold">María González</h4>
                <p className="text-sm text-green-200">Dueña de Cafetería, Madrid</p>
              </div>
            </div>
            <p className="mb-4 text-green-100">
              "El café de Estelí ha transformado mi negocio. Mis clientes notan la diferencia y siempre preguntan de
              dónde viene este café tan especial. La calidad y consistencia son excepcionales."
            </p>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
          </div>

          <div className="rounded-2xl bg-green-700/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full bg-green-600">
                <Image src="/placeholder.svg?height=100&width=100" alt="Cliente" width={56} height={56} />
              </div>
              <div>
                <h4 className="font-semibold">Carlos Martínez</h4>
                <p className="text-sm text-green-200">Chef, Restaurante Raíces</p>
              </div>
            </div>
            <p className="mb-4 text-green-100">
              "Las hortalizas de Estelí son incomparables en frescura y sabor. Han elevado la calidad de mis platos y
              mis clientes lo notan. Además, me encanta apoyar a productores que trabajan de manera sostenible."
            </p>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
            </div>
          </div>

          <div className="rounded-2xl bg-green-700/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full bg-green-600">
                <Image src="/placeholder.svg?height=100&width=100" alt="Cliente" width={56} height={56} />
              </div>
              <div>
                <h4 className="font-semibold">Ana Rodríguez</h4>
                <p className="text-sm text-green-200">Importadora, Sabores del Mundo</p>
              </div>
            </div>
            <p className="mb-4 text-green-100">
              "Llevo años importando granos básicos de Estelí y la calidad siempre es consistente. Mis clientes en
              Europa aprecian el sabor auténtico y la historia detrás de cada producto."
            </p>
            <div className="flex items-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              <Star className="h-5 w-5 text-green-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
