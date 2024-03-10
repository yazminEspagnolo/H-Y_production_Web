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
            <img src='/images/community.png' alt='Community Manager' className='section1-image'/>
            <button className='button'>Ver más...</button>
        </div>
      </div>
      <div className="section section2">
        Creación y Edición de Contenido Digital
        <div className="section2-text">
          <p>Ofrecemos servicios de creación y edición de contenido digital para satisfacer todas tus necesidades 
            de marketing y comunicación. Desde la creación de imágenes y videos atractivos hasta la redacción de 
            textos persuasivos, nuestro objetivo es ayudarte a destacar en el mundo digital. Con un enfoque en la 
            calidad y la creatividad, nos aseguramos de que tu contenido sea relevante, impactante y memorable.
            <br/><br/>
            Nuestro objetivo es ayudarte a transmitir tu mensaje de manera efectiva y atractiva.</p>
            <img src='/images/Edicion.png' alt='Creation and Edition' className='section2-image'/>
            <button className='button'>Ver más...</button>
        </div>
        </div>
      <div className="section section3">
        Desarrollo Web
        <div className="section3-text">
          <p>Ofrecemos servicios de desarrollo web que incluyen la creación de sitios web, 
            la optimización de la experiencia del usuario, la implementación de estrategias 
            de SEO y la integración de herramientas de análisis y seguimiento. 
            <br/><br/>
            Nuestro objetivo es ayudarte a crear una presencia digital atractiva, 
            funcional y efectiva.</p>
            <img src='/images/Web.png' alt='Web Development' className='section3-image'/>
            <button className='button'>Ver más...</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
