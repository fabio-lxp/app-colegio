import React from 'react';
import '../styles/Gestion.css'; 
import Footer from "../components/Footer"; 

const Gestion = () => {
  return (
    <div className="gestion-page">
      <h1>Gestión Educativa</h1>

      {/* Sección Directiva */}
      <section id='section-directiva' className="section-directiva">
        <h2>Directiva</h2>
        <p>
        La gestión directiva, se centra en el direccionamiento estratégico, 
        la cultura institucional, el clima y el gobierno escolar, además de 
        las relaciones con el entorno.
        </p>

      </section>

      {/* Sección Académica */}
      <section id='section-academica' className="section-academica">
        <h2>Académica</h2>
        <p>
        Es la propuesta de estrategia pedagógica que coloca al centro de sus acciones 
        la formación del pensamiento complejo del niño, ya que es gratificante, produce 
        placer, despierta emociones y hacer libre a los niños y las niñas en las  diferentes 
        actividades
        </p>
        <p>
        MODELO PEDAGÓGICO <br /> <br />
        Es una institución que  al desarrollo de las inteligencias para la excelencia, para tal fin,
        la pedagogía conceptual o la cognitiva es la que manifiesta y desarrolla las habilidades del 
        pensamiento en los estudiantes donde los aprendizajes son por procesos,  flexibles , participativos, 
        secuenciales y lúdicos , cada etapa parte de la sencillez a la complejidad; de lo particular a lo 
        general y se establecen metas para transformar su personalidad con el pensamiento y el lenguaje 
        a medida que se desarrolla y crece socialmente. <br /><br />
        ENFOQUE PEDAGÓGICO <br /> <br />
        La pedagogía conceptual o la cognitiva es la que manifiesta y desarrolla las 
        habilidades del pensamiento en los estudiantes donde los aprendizajes son por procesos,  flexibles,
        participativos, secuenciales y lúdicos, cada etapa parte de la sencillez a la complejidad; de lo 
        particular a lo general y se establecen metas para transformar su personalidad con el pensamiento 
        y el lenguaje  a medida que se desarrolla y crece socialmente. La Secuencia de la Pedagogía Conceptual 
        propone siempre un orden invariable al enseñar: uno y único, dado por el orden genético en que se 
        escalonan los sucesivos instrumentos de conocimiento y sus operaciones intelectuales. En cualquier
        caso, al elaborar un Currículo es necesario respetar la secuencia evolutiva natural. (PROCESO)<br /> <br />
        ESTRATEGIAS PEDAGÓGICAS <br /> <br />
        Es la propuesta de estrategia pedagógica que coloca al centro de sus 
        acciones la formación del pensamiento complejo del niño, ya que es gratificante, produce placer, 
        despierta emociones y hacer libre a los niños y las niñas en las  diferentes actividades, Es la
        que surge por los docentes, propone, selecciona y dirige la actividad; a  partir de ella, se 
        posibilita la actuación y el enriquecimiento de la actividad por la acción de los niños
        </p>

      </section>

      {/* Sección Comunitaria */}
      <section id='section-comunitaria' className="section-comunitaria">
        <h2>Comunitaria</h2>
        <p>
        Es el encuentro de la comunidad con el Preescolar “Casita de los niños“ creando 
        espacios de alegría y muestra de talentos, donde se visualiza el desarrollo de 
        competencias y aprendizajes de los niños, para que la comunidad externa aprecie 
        las habilidades y destreza en los estudiantes.
        </p>

      </section>

    {/* Footer */}

    <Footer /> 

    </div>
  );
};

export default Gestion;
