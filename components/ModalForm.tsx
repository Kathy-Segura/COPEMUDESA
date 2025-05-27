'use client';

import { useEffect, useState } from "react";
import { FaSeedling } from "react-icons/fa";

type FormData = {
  nombre: string;
  apellido: string;
  sexo: string;
  edad: string;
  correo: string;
  dominioCorreo: "gmail.com" | "hotmail.com";
};

const ModalForm = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    nombre: "",
    apellido: "",
    sexo: "",
    edad: "",
    correo: "",
    dominioCorreo: "gmail.com",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setShowModal(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setShowModal(false);
    setFormData({
      nombre: "",
      apellido: "",
      sexo: "",
      edad: "",
      correo: "",
      dominioCorreo: "gmail.com",
    });
    setError("");
    setSuccess(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Valida que el inicio del correo no esté vacío y no contenga '@'
  const validateEmail = (email: string, dominio: string) => {
    if (email.trim() === "") return false;
    if (email.includes("@")) return false;
    if (dominio !== "gmail.com" && dominio !== "hotmail.com") return false;
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { nombre, apellido, sexo, edad, correo, dominioCorreo } = formData;

    if (!nombre || !apellido || !sexo || !edad || !correo) {
      setError("Todos los campos son obligatorios.");
      setSuccess(false);
      return;
    }

    if (!validateEmail(correo, dominioCorreo)) {
      setError("Ingresa solo el inicio del correo, sin @ y con el dominio seleccionado.");
      setSuccess(false);
      return;
    }

    setSubmitting(true);
    setError("");

    try {
        const fullCorreo = correo + "@" + dominioCorreo;

        const response = await fetch(
            "https://script.google.com/macros/s/AKfycbyeZeNYKseSbcbybqKbzuaXZgspcCgnfaafKsdF_BZgREZ0mYCRMLLzu2TT-kE1cDjuDg/exec",
            {
            method: "POST",
            body: JSON.stringify({ nombre, apellido, sexo, edad, correo: fullCorreo }),
            headers: {
                "Content-Type": "application/json",
            },
            }
        );

        // Verificamos si la respuesta fue exitosa HTTP (200-299)
        if (!response.ok) {
            const text = await response.text();
            throw new Error(`HTTP error! status: ${response.status}, body: ${text}`);
        }

        const result = await response.json();

        if (result.success) {
            setSuccess(true);
            setFormData({
            nombre: "",
            apellido: "",
            sexo: "",
            edad: "",
            correo: "",
            dominioCorreo: "gmail.com",
            });
        } else {
            setError("Error al registrar: " + (result.message || ""));
        }
        } catch (err: any) {
        setError("Hubo un problema al enviar los datos: " + err.message);
        } finally {
        setSubmitting(false);
        }
    };

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl shadow-2xl w-full max-w-md animate-fade-in relative border-2 border-green-400">
            <button
              onClick={handleClose}
              className="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl"
              aria-label="Cerrar formulario"
            >
              ✕
            </button>

            <div className="flex items-center justify-center mb-6">
              <FaSeedling className="text-green-600 text-4xl mr-3" />
              <h2 className="text-3xl font-bold text-green-800">Regístrate</h2>
            </div>

            <form className="space-y-4" onSubmit={handleSubmit} noValidate>
              <input
                name="nombre"
                placeholder="Nombre"
                value={formData.nombre}
                onChange={handleChange}
                className="w-full border-b-2 border-green-400 p-2 placeholder-green-600 focus:outline-none focus:border-green-600"
                required
              />
              <input
                name="apellido"
                placeholder="Apellido"
                value={formData.apellido}
                onChange={handleChange}
                className="w-full border-b-2 border-green-400 p-2 placeholder-green-600 focus:outline-none focus:border-green-600"
                required
              />

              <div className="flex flex-col">
                <label className="text-green-700 font-semibold mb-1">Sexo:</label>
                <div className="flex space-x-6 mt-1">
                  {["Masculino", "Femenino", "Otro"].map((sexoOption) => (
                    <label key={sexoOption} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="radio"
                        name="sexo"
                        value={sexoOption}
                        checked={formData.sexo === sexoOption}
                        onChange={handleChange}
                        className="accent-green-600"
                        required
                      />
                      <span>{sexoOption}</span>
                    </label>
                  ))}
                </div>
              </div>

              <input
                name="edad"
                type="number"
                placeholder="Edad"
                min={1}
                max={120}
                value={formData.edad}
                onChange={handleChange}
                className="w-full border-b-2 border-green-400 p-2 placeholder-green-600 focus:outline-none focus:border-green-600"
                required
              />

              <div>
                <label className="text-green-700 font-semibold mb-1 block">Correo:</label>
                <div className="flex items-center space-x-3">
                  <input
                    name="correo"
                    type="text"
                    placeholder="Inicio del correo"
                    value={formData.correo}
                    onChange={handleChange}
                    className="flex-grow border-b-2 border-green-400 p-2 placeholder-green-600 focus:outline-none focus:border-green-600"
                    required
                  />
                  <select
                    name="dominioCorreo"
                    value={formData.dominioCorreo}
                    onChange={handleChange}
                    className="border-b-2 border-green-400 p-2 bg-white text-green-700 font-semibold focus:outline-none focus:border-green-600 cursor-pointer"
                    aria-label="Seleccionar dominio de correo"
                  >
                    <option value="gmail.com">@gmail.com</option>
                    <option value="hotmail.com">@hotmail.com</option>
                  </select>
                </div>
              </div>

              {error && <p className="text-red-600 text-sm">{error}</p>}
              {success && <p className="text-green-700 text-sm font-medium">¡Registro exitoso!</p>}

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-green-600 text-white p-3 rounded-md hover:bg-green-700 transition duration-300"
              >
                {submitting ? "Registrando..." : "Registrarse"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default ModalForm;