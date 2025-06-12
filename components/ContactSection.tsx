import Image from "next/image"


export default function ContactSection() {
  return (
    <section id="contacto" className="py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-blue-800 mb-4">
            Contáctanos
          </span>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
            ¿Interesado en Nuestros Productos?
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-gray-600">
            Ponte en contacto con nosotros para más información o para realizar un pedido. Estamos aquí para ayudarte.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Ubicación de Copemudes"
                src="https://www.google.com/maps?q=Comunidad+de+Payacuca,+Matagalpa,+Nicaragua&output=embed"
                width="100%"
                height="100%"
                className="h-[500px] w-full border-0"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            <div>
              <div className="rounded-2xl bg-white p-8 shadow-lg">
                <h3 className="mb-6 text-2xl font-bold text-gray-900">Información de Contacto</h3>
                <div className="space-y-6">
                  {/* Dirección */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                      {/* Icono ubicación */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Dirección</h4>
                      <p className="text-gray-600">Comunidad de Payacuca, Matagalpa, Nicaragua</p>
                    </div>
                  </div>

                  {/* Teléfono */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Teléfono</h4>
                      <p className="text-gray-600">+505 8216 4229</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Correo Electrónico</h4>
                      <p className="text-gray-600">copemudesarl@gmail.com</p>
                    </div>
                  </div>

                  {/* Horario */}
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-700">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="h-6 w-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-900">Horario de Atención</h4>
                      <p className="text-gray-600">Lunes a Viernes: 8:00 AM - 5:00 PM</p>
                      <p className="text-gray-600">Sábados: 8:00 AM - 12:00 PM</p>
                    </div>
                  </div>
                </div>

                {/* Redes Sociales */}
                <div className="mt-8">
                  <h4 className="mb-4 text-lg font-medium text-gray-900">Síguenos en Redes Sociales</h4>
                  <div className="flex gap-4">
                    <a href="https://www.facebook.com/profile.php?id=61576828705436" className="rounded-full bg-green-100 p-3 text-green-700 transition hover:bg-green-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                    </a>
                    <a href="https://www.instagram.com/copemudesa_r.l?igsh=cjAybXp5eWhmZHlj" className="rounded-full bg-green-100 p-3 text-green-700 transition hover:bg-green-200">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-5 w-5"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                    </a>
                  <a href="https://www.tiktok.com/@copemudesa.r.l?_t=ZM-8wdEx9yv7or&_r=1" className="rounded-full bg-green-100 p-3 text-green-700 transition hover:bg-green-200" target="_blank" rel="noopener noreferrer">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 256 256"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M232 64.07v41.85a95.86 95.86 0 0 1-64-24V168a72 72 0 1 1-72-72 71.06 71.06 0 0 1 16.45 1.94v33.6A40 40 0 1 0 152 168V24h32a64.07 64.07 0 0 0 48 40.07Z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}