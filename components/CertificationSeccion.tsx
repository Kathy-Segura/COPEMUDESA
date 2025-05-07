import Image from "next/image"

export default function GrainsSection(){
  return (
    <section id="certificaciones" className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
            <div className="mb-16 text-center">
                <span className="inline-block rounded-full bg-purple-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-purple-800 mb-4">
                Garantía de Calidad
                </span>
                <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Nuestras Certificaciones</h2>
                <p className="mx-auto max-w-3xl text-lg text-gray-600">
                Nuestros productos cuentan con certificaciones que garantizan su calidad, sostenibilidad y
                responsabilidad social.
                </p>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                {/* Certification 1 */}
                <div className="rounded-2xl bg-white p-8 shadow-md">
                <div className="mb-6 h-16 w-16">
                    <Image
                    src="/organico.jpg?height=100&width=100"
                    alt="Certificación Orgánica"
                    width={64}
                    height={64}
                    />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Certificación Orgánica</h3>
                <p className="text-gray-600">
                    Nuestros productos orgánicos están certificados por organismos internacionales que garantizan que han
                    sido cultivados sin el uso de pesticidas ni fertilizantes químicos.
                </p>
                </div>

                {/* Certification 2 */}
                <div className="rounded-2xl bg-white p-8 shadow-md">
                <div className="mb-6 h-16 w-16">
                    <Image src="/comercio.jpg?height=100&width=100" alt="Comercio Justo" width={64} height={64} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Comercio Justo</h3>
                <p className="text-gray-600">
                    Trabajamos bajo los principios del comercio justo, asegurando precios justos para nuestros
                    agricultores y condiciones laborales dignas.
                </p>
                </div>

                {/* Certification 3 */}
                <div className="rounded-2xl bg-white p-8 shadow-md">
                <div className="mb-6 h-16 w-16">
                    <Image src="/rainforest.jpg?height=100&width=100" alt="Rainforest Alliance" width={64} height={64} />
                </div>
                <h3 className="mb-3 text-xl font-bold text-gray-900">Rainforest Alliance</h3>
                <p className="text-gray-600">
                    Nuestro café cuenta con la certificación Rainforest Alliance, que promueve la conservación de la
                    biodiversidad y los medios de vida sostenibles.
                </p>
                </div>
            </div>
        </div>
    </section>
 )
}
