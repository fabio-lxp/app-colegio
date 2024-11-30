import React from 'react';
import '../styles/Preescolar.css';
import Footer from "../components/Footer"; // Importa el footer

const Preescolar = () => {
    return (
      <div className="preescolar-page">
        <section className="section-preescolar">
          <h2>Preescolar</h2>
          <p>
            El Preescolar “CASITA DE LOS NIÑOS“ viene trabajando en el municipio y brindando educación 
            a la Primera Infancia con la necesidad de ir poco a poco mejorando los procesos pedagógicos 
            que son bandera a forjar unas herramientas propias a la niñez de 3 a 5 años. Ese proceso de 
            empoderamiento condujo a la reformulación del Proyecto Educativo Institucional, al amparo 
            de lo que ordena la Ley 115 de 1994 en sus artículos: <br />
          </p>
          <strong className='strong-preescolar'>3, Sobre la prestación del servicio educativo</strong><br />
          <strong className='strong-preescolar'>73, Sobre el Proyecto Educativo Institucional</strong> <br />
          <strong className='strong-preescolar'>138, Sobre la naturaleza y condiciones del establecimiento educativo.</strong>
        </section>
  
        <section id='section-mision' className="section-mision">
          <h2>Misión</h2>
          <p>
            Es una organización de la sociedad civil que se articula con otros actores institucionales 
            para contribuir al desarrollo integral de la niñez, la juventud y la familia, a partir de la
            promoción, el reconocimiento y defensa de sus derechos.
          </p>
        </section>
  
        <section id='section-vision' className="section-vision">
          <h2>Visión</h2>
          <p>
            Para el año 2030, Fundación “Casita de los niños” será reconocida como una institución que consolida 
            información analítica sobre la situación de la niñez, la juventud y la familia en entornos rurales y 
            urbanos, la difunden, ejecuta proyecto de intervención, compromete recursos de distintos sectores para 
            incidir en la formulación y aplicación de acciones de política pública en beneficio de las poblaciones 
            que atiende.
          </p>
        </section>
  
        <section id='section-manual' className="section-manual">
          <h2>Manual de Convivencia</h2>
          <p>
            El Manual de Convivencia regula las relaciones entre los miembros de la comunidad
            educativa. Consulta el manual completo aquí: <a href="/manual-convivencia.pdf" target="_blank">Ver Manual</a>
          </p>
        </section>
  
        {/* Sección de Actividades */}
        <section id='section-actividades' className="section-actividades">
          <h2>Actividades</h2>
          <div className="actividades-grid">
            {actividades.map((actividad) => (
              <div className="card" key={actividad.id}>
                <img
                  src={actividad.imagen}
                  alt={actividad.nombre}
                  className="card-image"
                />
                <h3 className="card-title">{actividad.nombre}</h3>
                <p className="card-description">{actividad.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}

       <Footer /> 

      </div>
     
    );
  }

const actividades = [
  {
    id: 1,
    nombre: 'Actividades cotidianas o de rutina',
    descripcion: 'Se producen cada día con carácter ineludible y de forma regular, periódica y sistemática, ellas producen ambientes de seguridad, estables y alegres, permitiendo a los niños prever y anticipar a estas situaciones, orientarse en el espacio, crear hábitos y modos de actuar de los niños.',
    imagen: '/images/card-preescolar/imagen1.jpg', 
  },
  {
    id: 2,
    nombre: 'Actividades Permanentes',
    descripcion: 'Se realizan en forma periódica todos los días, dos o tres veces al día por semana, con el propósito de atender determinadas competencias que se consideran importantes de acuerdo con la situación del grupo y los propósitos del grado.',
    imagen: '/images/card-preescolar/imagen2.jpg',
  },
  {
    id: 3,
    nombre: 'Actividades Libres',
    descripcion: 'Son las actividades que el niño selecciona y realiza el niño por su cuenta, decidiendo el sitio, los objetos y con quienes quiere jugar',
    imagen: '/images/card-preescolar/imagen3.jpg',
  },
  {
    id: 4,
    nombre: 'Canto, cuento, poesía, juegos tradicionales y de cuna',
    descripcion: 'Que nos llegan como trasmisión oral de unas generaciones a otras, por lo que un mismo juego podemos encontrar más de una versión además tiene un componente popular que permite interiorizar el medio cultural',
    imagen: '/images/card-preescolar/imagen4.jpg',
  },
  {
    id: 5,
    nombre: 'La representación, la imitación, en las artes escénicas y movimiento de la expresión corporal ',
    descripcion: 'Juegos el niño hace que un objeto se convierta en otra cosa muy diferente, o bien el mismo representa el papel de distintos personajes',
    imagen: '/images/card-preescolar/imagen5.jpg',
  },
  {
    id: 6,
    nombre: 'Juegos Recreativos',
    descripcion: 'Generan diversión entre ellos encontramos una variedad: los juegos libres: espontáneos, que aparecen por la naturalidad en los movimientos, que aparecen por la naturalidad en los movimientos y la libertad en su escogencia de acuerdo con los gusto y las habilidades; juego pre deportivos: es la práctica de un deporte, las reglas son muy elásticas y su práctica se realiza con el objetivo de inducir un deporte',
    imagen: '/images/card-preescolar/imagen6.jpg',
  },
  {
    id: 7,
    nombre: 'Juegos de competencia - El hecho de perder',
    descripcion: 'Supone una decepción para el niño y más en estas edades, es interesante, pero puede dar lugar de conflicto por el hecho de haber un solo ganador, se pueden cambiar las reglas, sin que no sea posible quitarle importancia a este hecho, haciendo ver lo fundamental del juego y que nos divertimos mientras este dure.',
    imagen: '/images/card-preescolar/imagen7.jpg',
  },
  {
    id: 8,
    nombre: 'Juegos de construcción a partir de la exploración y juegos de mezcla',
    descripcion: 'Este es el juego más enriquecedor de los niños, aprende a descubrir a través de sus sentidos como están constituido, funciones e importancia de los objetos, los seres de la naturaleza y la vida, comprende que son necesarios para seguir en la búsqueda y razón de la existencia en los contextos sociales y culturales ',
    imagen: '/images/card-preescolar/imagen8.jpg',
  },
  {
    id: 9,
    nombre: 'Culturales',
    descripcion: 'Son los espacios programados para los encuentros culturales donde el canto, el baile y la idiosincrasia de los pueblos son mostrados y se dan entre los niños con otros grupos, entre padres y docentes',
    imagen: '/images/card-preescolar/imagen9.jpg',
  },
  {
    id: 10,
    nombre: 'Deportivas',
    descripcion: 'Sabemos que el Preescolar es la fuente de la mayor destreza física y los niños siempre se muestran para ser arte de su coordinación y equilibrio con diferentes objetos ',
    imagen: '/images/card-preescolar/imagen10.jpg',
  },
  {
    id: 11,
    nombre: 'Semana cultural',
    descripcion: 'Se resaltará las diversas manifestaciones de la cultura como el baile, canto y drama que los niños a través de ellas tienen la oportunidad de mostrarse ante un público',
    imagen: '/images/card-preescolar/imagen11.jpg',
  },
  {
    id: 12,
    nombre: 'Festivales',
    descripcion: 'Están dados por el contexto, el espacio cronológico donde estamos inmerso, según el mes en que nos encontremos: ¿Cuántos y cuáles son los meritorios en el año?',
    imagen: '/images/card-preescolar/imagen12.jpg',
  },
  {
    id: 13,
    nombre: 'Académicas:',
    descripcion: 'Los espacios donde aflora la tertulia pedagógica y donde se aclaran las dificultades y las fortalezas del docente siendo conceptual, estratégica o metodológica  ',
    imagen: '/images/card-preescolar/imagen13.jpg',
  },
];

export default Preescolar;
