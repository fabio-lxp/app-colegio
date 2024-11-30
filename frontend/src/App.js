import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import InformacionColegio from "./pages/Home";
import AdminDashboard from "./pages/AdminDashboard";
import Preescolar from "./pages/Preescolar"; 
import Gestion from './pages/Gestion';
import Admisiones from "./pages/Admisiones";
import FormularioInscripcion from "./pages/InscripcionForm";
import AdminLogin from "./components/AdminLogin"; // Importa el login del admin
import "./styles/App.css";
import Contacto from "./pages/Contacto";

const App = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleAdminLogin = (token) => {
    setIsAdmin(true);
    console.log("Admin logged in with token:", token); // Puedes guardar el token en el estado o localStorage
  };

  const handleAdminLogout = () => {
    setIsAdmin(false);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Página principal */}
        <Route path="/" element={<InformacionColegio />} />

        {/* Página de Preescolar */}
        <Route path="/preescolar" element={<Preescolar />} />

        {/* Página de Gestión */}
        <Route path="/gestion" element={<Gestion />} />

        {/*Página de Admisiones*/}
        <Route path="/admisiones" element={<Admisiones />} />

        {/*Página de contacto*/}
        <Route path="/contacto" element={<Contacto />} />


        {/* Login del admin */}
        <Route path="/login" element={<AdminLogin onLogin={handleAdminLogin} />} />

        {/* Formulario de inscripción */}
        <Route path="/admisiones/formulario" element={<FormularioInscripcion />} />

        {/* Panel del admin (solo se muestra si está logueado) */}
        <Route
          path="/admin-dashboard"
          element={
            isAdmin ? (
              <AdminDashboard onLogout={handleAdminLogout} />
            ) : (
              <p>Acceso denegado. Por favor, inicia sesión.</p>
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
