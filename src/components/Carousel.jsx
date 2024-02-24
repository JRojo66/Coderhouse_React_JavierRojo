const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner banner-altura-400">
        <div className="carousel-item active">
          <img src="../../src/assets/Carousel1.jpg" className="d-block w-100" alt="Expats"/>
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/Carousel2.jpg" className="d-block w-100" alt="Alexa"/>
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/Carousel3.jpg" className="d-block w-100" alt="Whole foods"/>
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/Carousel4.jpg" className="d-block w-100" alt="Valentine's day"/>
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/Carousel5.jpg" className="d-block w-100" alt="Lego"/>
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/Carousel6.jpg" className="d-block w-100" alt="One medical" />
        </div>
        <div className="carousel-item">
          <img src="../../src/assets/Carousel7.jpg" className="d-block w-100" alt="Winter sale"/>
        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
