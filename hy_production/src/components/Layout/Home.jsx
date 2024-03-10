import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <div className="section section1">
        Community Manager
        <div className="section1-text">
          <p>Ofrecemos un servicio de Community Manager que incluye la creación de contenido, 
            la planificación de estrategias de comunicación, la interacción con la comunidad, 
            el análisis de métricas y el manejo de la reputación online. 
            <br/><br/>
            Nuestro objetivo es construir y mantener una comunidad activa y comprometida en torno a tu marca.</p>
            <img src='/images/community-manager.png' alt='Community Manager' className='section1-image'/>
        </div>
      </div>
      <div className="section section2">Creación y Edición de Contenido Digital</div>
      <div className="section section3">Desarrollo Web</div>
    </div>
  );
};

export default Home;
