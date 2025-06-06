import Image from "next/image"
import { Calendar, Award, Users, Sprout } from "lucide-react"

export default function HistorySection() {
  return (
    <section id="historia" className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <span className="inline-block bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800 mb-3 rounded-full">
            Nuestra Trayectoria
          </span>
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Historia</h2>
          <p className="text-sm text-gray-600 max-w-xl mx-auto">
            Evolución de nuestra cooperativa y su impacto en la comunidad.
          </p>
        </div>

        {/* Línea de tiempo */}
        <div className="flex flex-col md:flex-row gap-6 mb-12 relative max-w-5xl mx-auto">
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-amber-200 -translate-y-1/2 z-0"></div>

          {/* Hitos */}
          {[
            { year: "2011", title: "Fundación", icon: <Calendar />, text: "18 mujeres agricultoras unidas por el cambio." },
            { year: "2019", title: "Certificación", icon: <Award />, text: "Primera certificación orgánica del MEFCCA." },
            { year: "2022", title: "Crecimiento", icon: <Users />, text: "25+ miembros y cultivos sostenibles." },
            { year: "2025", title: "Actualidad", icon: <Sprout />, text: "60+ familias innovando con tradición." }
          ].map((item, i) => (
            <div key={i} className="md:w-1/4 relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 bg-white border-4 border-amber-400 rounded-full flex items-center justify-center mb-3">
                  {item.icon}
                </div>
                <div className="bg-white rounded-lg shadow p-4 text-center">
                  <span className="text-xs font-semibold text-amber-800 bg-amber-100 px-2 py-0.5 rounded-full mb-1 inline-block">
                    {item.year}
                  </span>
                  <h3 className="text-sm font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Imagen + Resumen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-white rounded-xl shadow p-6">
          <div className="lg:col-span-5 h-60 relative">
            <Image
              src="/diosas.png?height=500&width=500"
              alt="Historia"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="lg:col-span-7">
            <h3 className="text-xl font-bold text-amber-800 mb-3">COPEMUDESA</h3>
            <p className="text-sm text-gray-700 mb-2">
                La cooperativa COPEMUDESA fue fundada el 11 de julio de 2011 en la comunidad Payacuca, en el departamento
                de Matagalpa, por un grupo de 18 mujeres emprendedoras decididas a mejorar sus condiciones de vida y las
                de sus familias
            </p>
            <p className="text-sm text-gray-700 mb-4">
              Hoy impulsa el empoderamiento femenino y la producción sostenible en 3 comunidades.
              Desde sus inicios, COPEMUDESA contó con el valioso apoyo médico, económico y material
              de parte de la Cooperativa Central Las Diosas, lo cual permitió a sus integrantes fortalecer sus capacidades
              organizativas y productivas. 
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <SummaryItem number="14+" label="Años" />
              <SummaryItem number="60+" label="Familias" />
              <SummaryItem number="4" label="Líneas" />
              <SummaryItem number="3" label="Comunidades" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function SummaryItem({ number, label }: { number: string, label: string }) {
  return (
    <div className="text-center p-2 bg-amber-50 rounded">
      <p className="text-xl font-bold text-amber-700">{number}</p>
      <p className="text-xs text-gray-600">{label}</p>
    </div>
  )
}