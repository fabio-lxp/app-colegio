import React from 'react';
import '../styles/Admisiones.css'; 
import Footer from "../components/Footer";

const Admisiones = () => {
  return (
    <div className="admisiones-page">
      <h1>Admisiones</h1>

      {/* Sección de Oferta Académica */}
      <section className="section-oferta-academica">
        <h2>Oferta Académica</h2>
        <p>
        Brinda el servicio de educación preescolar privado, 
        en los grados de Prejardín, jardín y transición en 
        el desarrollo de  la inteligencia para la excelencia 
        </p>
        <ul>
          <li>PRE JARDÍN: Brindamos educación para los niños 
            de 3 años de edad en la búsqueda de explorar los 
            hará cada día más independiente marcando  el ritmo 
            para el desarrollo integral de las dimensiones del 
            ser humano 
          </li> <br />
          <li>JARDÍN: Brindamos educación para los niños de 4 
            años de edad en el desarrollo integral, llenos de 
            energía con torrentes de ideas imaginativas que le 
            forjan su pensar apoyados por las dimensiones del 
            ser humano.
            </li> <br />
          <li>TRANSICIÓN: Brindamos educación para los niños de
            5 años de edad en el desarrollo integral en la coordinación
            de sus movimientos, son atentos y más reales acorde a las
            dimensiones del ser humano 
          </li>
        </ul>
      </section>

      {/* Sección de Inscripciones */}
      <section className="section-inscripciones">
        <h2>Inscripciones</h2>
        <p>
          El proceso de inscripción está diseñado para ser rápido y sencillo. <br />
          Para los grados de Prejardín, Jardín y Transición. <br /> 
          Ingresa <a href="/admisiones/formulario">aquí</a>, diligencia el formulario 
          de inscripción y matricula en las fechas asignadas.

        </p>
         <img className='img-inscripcion' src="/images/admisiones/inscripcion.jpg" alt="inscripcion" title='inscripción' />
      </section>

      {/* Sección de Requisitos de Matrícula */}
      <section className="section-requisitos">
        <h2>Requisitos de Matrícula</h2>
        <p>
          Asegúrate de contar con los siguientes documentos para completar el proceso
          de matrícula:
        </p>
        <ol>
          <li>Diligenciamiento del formulario de inscripción.</li>
          <li>Fotocopia del Registro Civil.</li>
          <li>Fotocopia del Registro de Vacunación.</li>
          <li>Fotocopia del certificado actualizado de afiliación de la EPS.</li>
          <li>Fotocopia de la cedula de uno de los padres en ambos lados.</li>
        </ol>
        <p>
         En caso de haber estudiado en otra Institución anexar:
        </p>
        <ol>
          <li>Paz y salvo de la Institución.</li>
          <li>Fotocopia del Observador del estudiante .</li>
          <li>Fotocopia del último Informe Académico.</li>
          <li>Recibo de servicio público.</li>
          <li>Liberación del simat.</li>
        </ol>
        <h4>
        ¡OJO! Señor Padre de Familia, Con este número de cuenta puede pagar matrícula, pensión escolar u otros pagos <br />
        A nombre de <span className='datos'>Carmen Velásquez</span>, Cancelar el costo de la matrícula (En el Preescolar en efectivo o en la cuenta bancaria) <br />
        <span className='datos'>Número de cédula: 34961153</span> Cuenta Bancolombia en  <span className='datos'>número de cuenta 091835353-39</span> <br />
        Puede consignar en Servientrega Efecty Sucursal Bancolombia o realizar transferencia en línea 

        </h4>
      </section>
      {/* Footer */}
      <Footer /> 
    </div>
  );
};

export default Admisiones;
