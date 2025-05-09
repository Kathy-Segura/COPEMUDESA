import Image from "next/image"
import Link from "next/link"
import { Coffee, Wheat,Droplet, Leaf, ArrowRight, Flower} from "lucide-react"

export default function CategorySection() {
  return (
    <section id="category" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-green-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-green-800 mb-4">
            Categorías
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Nuestras Categorías de Productos</h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Matagalpa ofrece una diversidad de productos agrícolas de alta calidad, cultivados con técnicas tradicionales y
            sostenibles.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Category 1 */}
          <Link href="#cafe" className="group">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl">
              <Image
                src="/cafe-oro.jpeg?height=800&width=600"
                alt="Café"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Coffee className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Café</h3>
                <p className="mb-4 text-gray-200">Café de altura con sabores únicos y aromas intensos.</p>
                <span className="inline-flex items-center text-sm font-medium text-white">
                  Explorar
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          {/* Category 2 */}
          <Link href="#granos" className="group">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl">
              <Image
                src="/granosbasicosejemplo.jpg?height=800&width=600"
                alt="Granos Básicos"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Wheat className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Granos Básicos</h3>
                <p className="mb-4 text-gray-200">Frijoles, maíz y arroz de la mejor calidad.</p>
                <span className="inline-flex items-center text-sm font-medium text-white">
                  Explorar
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

          {/* Category 3 */}
          <Link href="#hortalizas" className="group">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl">
              <Image
                src="/hortalizasejemplo.jpg?height=800&width=600"
                alt="Hortalizas"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Leaf className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Hortalizas</h3>
                <p className="mb-4 text-gray-200">Hortalizas frescas y orgánicas de los valles de Estelí.</p>
                <span className="inline-flex items-center text-sm font-medium text-white">
                  Explorar
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>

           {/* Miel */}
          <Link href="#miel" className="group">
            <div className="relative h-96 w-full overflow-hidden rounded-2xl">
              <Image
                src="/miel.jpg?height=800&width=600"
                alt="Miel"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
              <div className="absolute bottom-0 left-0 p-8">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-700">
                  <Flower className="h-8 w-8" /> {/* Usa un ícono adecuado */}
                </div>
                <h3 className="mb-2 text-2xl font-bold text-white">Miel</h3>
                <p className="mb-4 text-gray-200">Miel natural y pura, cosechada de colmenas sostenibles.</p>
                <span className="inline-flex items-center text-sm font-medium text-white">
                  Explorar
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </Link>
        </div> 
      </div>
    </section>
  )
}
