import React from "react";
import "../styles/Navbar.css"; 
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTiktok,
} from "@fortawesome/free-brands-svg-icons";
import { faSignInAlt } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <div className="navbar-container">
      {/* Sub barra de navegación */}
      <div className="sub-navbar">
        <div className="sub-navbar-left">
          <p className="contact-info">
            📍Diagonal 4 TRAN 8 #3-30 Barrio la Granja | ☎️ Teléfono: 314 567 8613
          </p>
        </div>
        <div className="sub-navbar-center">
          <a href="https://www.instagram.com/preescolarcasitadelosninos?igsh=MXF4b2txbWN5MTg3dg==" 
           target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href="https://www.facebook.com/share/1ExzJPhGEe/?mibextid=LQQJ4d" 
            target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebook} />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
        </div>
        <div className="sub-navbar-right">
          <Link to="/login" className="login-link">
            <FontAwesomeIcon icon={faSignInAlt} /> Ingresar
          </Link>
        </div>
      </div>

      {/* Navbar principal */}
      <nav className="navbar">
        <div className="navbar-left">
          <img
            src="/logo.png"
            alt="Logo"
            className="navbar-logo"
          />
        </div>
        <div className="navbar-center">
          <ul className="navbar-links">
            <li className="dropdown navbar-item">
              <a href="/" className="navbar-link">INICIO</a>
              <div className="dropdown-content">
                <a href="#quienes-somos">¿Quiénes somos?</a>
                <a href="#Insignias">Insignias</a>
              </div>
            </li>
            <li className="dropdown navbar-item">
             <a href="/preescolar" className="navbar-link">PREESCOLAR</a>
              <div className="dropdown-content">
                <a href="#section-mision">Misión</a>
                <a href="#section-vision">Visión</a>
                <a href="#section-manual">Manual de Convivencia</a>
                <a href="#section-actividades">Actividades</a>
              </div>
            </li>
            <li className="dropdown navbar-item">
             <a href="/gestion" className="navbar-link">GESTIÓN</a>
              <div className="dropdown-content">
                <a href="#section-directiva">Directiva</a>
                <a href="#section-academica">Académica</a>
                <a href="#section-comunitaria">Comunitaria</a>
              </div>
            </li>
            <li className="dropdown navbar-item">
              <a href="/admisiones" className="navbar-link">ADMISIONES</a>
              <div className="dropdown-content">
                <Link to="/admisiones/oferta">Oferta Académica</Link>
                <Link to="/admisiones/inscripciones">Inscripciones</Link>
                <Link to="/admisiones/requisitos">Requisitos de Matrícula</Link>
              </div>
            </li>
            <li className="dropdown navbar-item">
              <a href="/contacto" className="navbar-link">CONTACTO</a>
              <div className="dropdown-content">
                <a href="/admisiones/formulario">Formulario</a>
                <a href="#datos-contacto">Datos de contacto</a>
                <a href="#ubicacion">Ubicación</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
