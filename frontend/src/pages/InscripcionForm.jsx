import React, { useState } from "react";
import Swal from "sweetalert2";

const InscripcionForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    direccion: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const confirm = await Swal.fire({
      title: "¿Estás seguro?",
      text: "¿Deseas enviar los datos?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, enviar",
      cancelButtonText: "Cancelar",
    });

    if (confirm.isConfirmed) {
      try {
        const response = await fetch("http://localhost:5000/api/inscribir", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        const result = await response.json();
        if (response.ok) {
          // Mostrar el mensaje de éxito y redirigir a la página principal
          await Swal.fire({
            title: "¡Éxito!",
            text: "Sus datos se registraron exitosamente, pronto nos contactaremos con usted.",
            icon: "success",
            confirmButtonText: "Cerrar",
          });
          window.location.href = "/"; // Redirigir a la página principal
        } else {
          Swal.fire("Error", result.error || "Error al enviar los datos", "error");
        }
      } catch (error) {
        Swal.fire("Error", "Error al conectar con el servidor", "error");
      }
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Formulario de Inscripción</h2>
      <form onSubmit={handleSubmit} className="form-horizontal p-3 border rounded shadow-sm mb-5">
        <fieldset>
          <legend className="text-center header mb-4">Ingrese los siguientes datos</legend>

          {/* Nombre */}
          <div className="form-group row mb-3">
            <div className="col-md-2 text-center">
              <i className="fa fa-user bigicon"></i>
            </div>
            <div className="col-md-8">
              <input
                id="nombre"
                name="nombre"
                type="text"
                placeholder="Nombres"
                value={formData.nombre}
                onChange={handleChange}
                className="form-control form-control-sm"
                required
              />
            </div>
          </div>

          {/* Apellido */}
          <div className="form-group row mb-3">
            <div className="col-md-2 text-center">
              <i className="fa fa-user bigicon"></i>
            </div>
            <div className="col-md-8">
              <input
                id="apellido"
                name="apellido"
                type="text"
                placeholder="Apellidos"
                value={formData.apellido}
                onChange={handleChange}
                className="form-control form-control-sm"
                required
              />
            </div>
          </div>

          {/* Email */}
          <div className="form-group row mb-3">
            <div className="col-md-2 text-center">
              <i className="fa fa-envelope bigicon"></i>
            </div>
            <div className="col-md-8">
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Correo Electrónico"
                value={formData.email}
                onChange={handleChange}
                className="form-control form-control-sm"
                required
              />
            </div>
          </div>

          {/* Teléfono */}
          <div className="form-group row mb-3">
            <div className="col-md-2 text-center">
              <i className="fa fa-phone bigicon"></i>
            </div>
            <div className="col-md-8">
              <input
                id="telefono"
                name="telefono"
                type="text"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="form-control form-control-sm"
              />
            </div>
          </div>

          {/* Dirección */}
          <div className="form-group row mb-3">
            <div className="col-md-2 text-center">
              <i className="fa fa-home bigicon"></i>
            </div>
            <div className="col-md-8">
              <textarea
                id="direccion"
                name="direccion"
                placeholder="Dirección"
                value={formData.direccion}
                onChange={handleChange}
                className="form-control form-control-sm"
                rows="4"
              ></textarea>
            </div>
          </div>

          {/* Botón de enviar */}
          <div className="form-group row">
            <div className="col-md-12 text-center">
              <button
                type="submit"
                className="btn btn-primary btn-sm w-50"
              >
                Enviar
              </button>
            </div>
          </div>
        </fieldset>
      </form>
    </div>
  );
};

export default InscripcionForm;
