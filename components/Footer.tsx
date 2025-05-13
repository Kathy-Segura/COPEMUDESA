import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 py-16 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-6 flex items-center gap-2">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-green-100">
                <Image
                  src="/coop.png?height=40&width=40"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="object-cover"
                />
              </div>
              <span className="text-xl font-bold text-white">Matagalpa Agrícola</span>
            </div>
            <p className="mb-6 text-gray-400">
              Ofreciendo los mejores productos agrícolas de Matagalpa, Nicaragua, al mundo entero. Calidad, tradición y
              sostenibilidad en cada producto.
            </p>
            <p className="text-gray-400">
              &copy; {new Date().getFullYear()} Matagalpa Agrícola. Todos los derechos reservados.
            </p>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Productos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#cafe" className="text-gray-400 transition hover:text-white">
                  Café
                </Link>
              </li>
              <li>
                <Link href="#granos" className="text-gray-400 transition hover:text-white">
                  Granos Básicos
                </Link>
              </li>
              <li>
                <Link href="#hortalizas" className="text-gray-400 transition hover:text-white">
                  Hortalizas
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition hover:text-white">
                  Productos Orgánicos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition hover:text-white">
                  Productos Especiales
                </Link>
              </li>
               <li>
                <Link href="#" className="text-gray-400 transition hover:text-white">
                  Miel de abeja
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Enlaces Rápidos</h3>
            <ul className="space-y-4">
              <li>
                <Link href="#historia" className="text-gray-400 transition hover:text-white">
                  Nuestra Historia
                </Link>
              </li>
              <li>
                <Link href="#nosotros" className="text-gray-400 transition hover:text-white">
                  Misión y Visión
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 transition hover:text-white">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-gray-400 transition hover:text-white">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="mb-6 text-lg font-semibold">Boletín Informativo</h3>
            <p className="mb-6 text-gray-400">
              Suscríbete para recibir noticias sobre nuestros productos, ofertas especiales y eventos.
            </p>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Tu correo electrónico"
                className="w-full rounded-lg bg-gray-800 px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-green-700 px-4 py-3 font-medium text-white transition hover:bg-green-600"
              >
                Suscribirse
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-sm text-gray-400">Diseñado y desarrollado con ❤️ para los agricultores de Matagalpa</p>
            <div className="flex gap-6">
              <Link href="#" className="text-sm text-gray-400 transition hover:text-white">
                Términos y Condiciones
              </Link>
              <Link href="#" className="text-sm text-gray-400 transition hover:text-white">
                Política de Privacidad
              </Link>
              <Link href="#" className="text-sm text-gray-400 transition hover:text-white">
                Cookies
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
