// components/ModalForm.tsx
import { useEffect, useState } from "react";

const ModalForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Mostrar el modal 3 segundos después de que la página se cargue
  useEffect(() => {
    const timer = setTimeout(() => setIsOpen(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 px-4">
      <div className="relative bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Botón de cierre */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-3 text-gray-500 hover:text-red-600 text-2xl font-bold"
        >
          &times;
        </button>

        {/* Contenido del modal */}
        <div className="p-4">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSfC-Ul8VAeUUKEUCIRuk-ryK0874uWrE_YpEoPB0hwxA2kZZA/viewform?embedded=true"
            width="100%"
            height="600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            className="w-full rounded-md border border-gray-300 shadow-inner"
          >
            Cargando…
          </iframe>
        </div>
      </div>
    </div>
  );
};

export default ModalForm;