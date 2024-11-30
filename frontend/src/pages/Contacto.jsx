import React from 'react';
import '../styles/Contacto.css'; 

const Contacto = () => {
  return (
    <div className="contacto-page">
      <h1>Contacto</h1>

      {/* Sección de Datos de Contacto */}
      <section  id='datos-contacto' className="section-datos-contacto">
        <h2>Datos de Contacto</h2>
        <p>
          Si tienes alguna duda, puedes comunicarte con nosotros a través de los
          siguientes medios:
        </p>
        <ul>
          <li><strong>Teléfono:</strong> +57  314 567 8613</li>
          <li><strong>Email:</strong> aprecadni2005@gmail.com</li>
          <li><strong>Horario de Atención:</strong> Lunes a Viernes, 6:00 AM - 5:00 PM</li>
        </ul>
      </section>

      {/* Sección de Ubicación */}
      <section id='ubicacion' className="section-ubicacion">
        <h2>Ubicación</h2>
        <p>Nos encontramos en:</p>
        <address>
        Diagonal 4 TRAN 8 #3-30, Barrio la Granja<br />
          Montería<br />
        </address>
        {/* Mapa embebido (opcional) */}
        <div className="map-container" style={{ textAlign: 'center', marginTop: '20px' }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!4v1732934766410!6m8!1m7!1slJnvT7P1WBww_zoy_mg5rg!2m2!1d8.733993434272259!2d-75.88934722218302!3f196.63690769337845!4f0.887979021009528!5f0.7820865974627469"
          width="600"
          height="450"
          style={{ border: 0 }} // Estilo como objeto en JSX
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Ubicación en Google Maps"
        ></iframe>
        </div>
      </section>
    </div>
  );
};

export default Contacto;
