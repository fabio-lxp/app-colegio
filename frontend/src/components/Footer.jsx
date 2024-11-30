// Footer.js
import React from "react";
import "../styles/Footer.css"; // Asegúrate de importar los estilos del footer

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <p>&copy; 2024 Preescolar Casita De Los Niños. Todos los derechos reservados.</p>
        <nav>
          <ul>
            <li><a href="/">Aviso Legal</a></li>
            <li><a href="/">Política de Privacidad</a></li>
            <li><a href="https://github.com/fabio-lxp">Contacto</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
