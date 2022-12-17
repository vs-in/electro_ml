import React from "react";
import "./styles.css";

const Carrousel = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="true"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        {/* Foto1 */}
        <div className="carousel-item active">
          <img
            src="https://img.freepik.com/fotos-premium/concepto-vista-superior-electricista-o-herramientas-electricas_185193-80640.jpg?w=2000"
            className="d-block w-100 carrouselImg"
            alt="foto1"
            height={450}
            width={450}
            
          />
        </div>
        {/* Foto2 */}
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/foto-gratis/electricista-masculino-trabaja-centralita-cable-conexion-electrica_169016-15086.jpg?w=1380&t=st=1671243909~exp=1671244509~hmac=96138f464343ed5f8ba4212d9041e49654b6b709b2903415b31863c3dc553dfd"
            className="d-block w-100 carrouselImg"
            alt="foto2"
            height={450}
            width={450}
          />
        </div>
        {/* Foto3 */}
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/foto-gratis/electricista-herramientas-trabajando-sitio-construccion-concepto-reparacion-manitas_169016-5888.jpg?w=1800&t=st=1671244008~exp=1671244608~hmac=92c492295e459fd81fa169bf875fb70c45e2fad72aec7d95b0092eab63270e7a"
            className="d-block w-100 carrouselImg"
            alt="foto3"
            height={450}
            width={450}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleIndicators"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carrousel;
