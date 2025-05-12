import Image from "next/image"
import { Star } from "lucide-react"

export default function TestimonialsSection() {
  return (
    <section className="py-24 bg-green-600 text-white">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-white/20 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-white mb-4">
            Testimonios
          </span>
          <h2 className="mb-6 text-4xl font-bold md:text-5xl">Lo Que Dicen Nuestras Socias</h2>
          <p className="mx-auto max-w-3xl text-lg text-green-100">
            Mujeres que transforman su comunidad a través del trabajo, el aprendizaje y la agricultura sostenible.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="rounded-2xl bg-green-700/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full bg-green-600">
                <Image src="/placeholder.svg?height=100&width=100" alt="Socia 1" width={56} height={56} />
              </div>
              <div>
                <h4 className="font-semibold">Rosa Hernández</h4>
                <p className="text-sm text-green-200">Productora de café</p>
              </div>
            </div>
            <p className="mb-4 text-green-100">
              "Antes no imaginaba que podía liderar. Desde que formo parte de la cooperativa, he aprendido sobre el cultivo
              sostenible y la gestión de mi finca. Hoy me siento empoderada y con voz dentro de mi comunidad."
            </p>
          </div>

          <div className="rounded-2xl bg-green-700/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full bg-green-600">
                <Image src="/placeholder.svg?height=100&width=100" alt="Socia 2" width={56} height={56} />
              </div>
              <div>
                <h4 className="font-semibold">Carmen López</h4>
                <p className="text-sm text-green-200">Responsable de secado</p>
              </div>
            </div>
            <p className="mb-4 text-green-100">
              "Gracias a las capacitaciones, ahora entiendo mejor los procesos del café y cómo lograr una mejor calidad. 
              Eso ha mejorado nuestros ingresos y ha cambiado la manera en que veo mi trabajo: con orgullo y conocimiento."
            </p>
          </div>

          <div className="rounded-2xl bg-green-700/50 p-8 backdrop-blur-sm">
            <div className="mb-6 flex items-center gap-4">
              <div className="h-14 w-14 overflow-hidden rounded-full bg-green-600">
                <Image src="/placeholder.svg?height=100&width=100" alt="Socia 3" width={56} height={56} />
              </div>
              <div>
                <h4 className="font-semibold">Julia Méndez</h4>
                <p className="text-sm text-green-200">Socia fundadora</p>
              </div>
            </div>
            <p className="mb-4 text-green-100">
              "Ser parte de esta cooperativa me ha cambiado la vida. He aprendido a trabajar en equipo, a valorar mi esfuerzo 
              y a transmitir estos valores a mis hijos. Hoy soy ejemplo para otras mujeres que quieren salir adelante."
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}