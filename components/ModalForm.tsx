import { useEffect, useState } from "react";

const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-start bg-black bg-opacity-60 px-2 pt-6 sm:px-4">
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg max-h-[90vh] overflow-hidden ml-4">
        {/* Botón de cierre */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold z-10"
        >
          &times;
        </button>

        {/* Contenido del modal */}
        <div className="p-2 sm:p-4">
          <div className="w-full h-[600px] sm:h-[700px] overflow-hidden rounded-md border border-gray-300 shadow-inner">
            <iframe
              src="https://docs.google.com/forms/d/e/1FAIpQLSfC-Ul8VAeUUKEUCIRuk-ryK0874uWrE_YpEoPB0hwxA2kZZA/viewform?embedded=true"
              className="w-full h-full border-none"
              allowFullScreen
            >
              Cargando…
            </iframe>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ModalForm;