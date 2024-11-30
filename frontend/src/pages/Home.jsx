import React from "react";
import ImageCarousel from "../components/ImageCarousel"; // Asegúrate de importar el carrusel
import Footer from "../components/Footer"; // Importa el footer


const Home = () => {
  return (
    <div>
      {/* Contenido Principal */}
      <header>
        <h1 className="titulo-home">PREESCOLAR CASITA DE LOS NIÑOS</h1>
      </header>

      {/* Contenido Carousel */}

      <div className="carousel-section">
       <ImageCarousel />
      </div>

      {/* Sección: Quiénes Somos */}
      <section id="quienes-somos" className="info-section">
        <div className="info-content">
          <div className="text-content">
            <h1>¿Quiénes somos?</h1>
            <p>
              Somos una institución de desarrollo educativo, técnico y cultural, 
              preferiblemente de la niñez y la juventud carente de recursos. 
              En cumplimiento de esta labor adelantamos proyectos de niñez, familia y juventud, 
              la acción social de la fundación contribuye a fortalecer el marco institucional democrático 
              y representativo que rige el país dentro de las libertades que garantiza nuestra constitución.
              <br />
              <br />
              <strong>¡Conócenos y sé parte de nuestra familia!</strong>
            </p>
          </div>
          <div className="cards-container-home">
            <div className="card-home">
              <img className="img-card1-home" src="/images/cards/img-card1.png" alt="Descripción 1" />
              
            </div>
            <div className="card-home">
              <img src="/images/cards/img-card2.png" alt="Descripción 2" />

            </div>
            <div className="card-home">
              <img className="img-card1-home" src="/images/cards/img-card3.png" alt="Descripción 3" />
            
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Insignias */}
      <section id="Insignias" className="insignias">
      <h1 id="titulo-insignia">Insignias</h1>
      <div className="insignias-content">
        <div className="images">
          <div>
            <h3 className="insig-h3">Escudo</h3>
          <img src="/logo.png" alt="Logo del colegio" className="insignia-img" />
          </div>
          <div>
            <h3 className="insig-h3">Logo</h3>
          <img src="/logooo.png" alt="Escudo del colegio" className="insignia-img" />
          </div>
        </div>
        <div className="video">
          <h3 className="insig-h3">Video Del Himno</h3>
          <iframe 
          width="560" 
          height="315" 
          src="https://www.youtube.com/embed/TTVaIO6wUho?si=6TwlfAp6Z8nbfSiP" 
          title="YouTube video player" 
          frameborder="0" 
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
          referrerpolicy="strict-origin-when-cross-origin" 
          allowfullscreen>
          </iframe>
        </div> 
      </div>
      <div className="himno">
        <h3 className="insig-h3">Letra Del Himno Del Colegio</h3>
        <p>
          <strong>Verso 1:</strong> <br />
           La casita de los niños<br />
           Es mi segundo hogar <br />
           En ella yo crezco y <br />
           Despierto mi creatividad <br />
          <strong>Verso 2:</strong> <br />
           Moviendo las manos<br />
           Escribo con agilidad<br /> 
           Creando ideas para soñar.<br />
          <strong>Verso 3:</strong> <br />
           Casita de los niños <br />
           Estudio lúdica veraz<br />
           Con un poco de esfuerzo <br />
           Aprenderás actuar.<br />
        </p>
        <br />
        <h3 className="insig-h3">Audio Del Himno Del Colegio</h3>
        <audio controls>
          <source src="/himno-colegio.mp3" type="audio/mpeg" />
          Tu navegador no soporta el elemento de audio.
        </audio>
      </div>
    </section>

      {/* Footer */}
      <Footer /> 
    </div>

  );
};

export default Home;
