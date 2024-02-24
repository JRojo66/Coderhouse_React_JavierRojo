const Carousel = () => {
  return (
    <div id="carouselExample" className="carousel slide">
      <div className="carousel-inner banner-altura-400">
        <div className="carousel-item active">
          <img src="https://i.ibb.co/3C1hPK3/Carousel1.jpg" className="d-block w-100" alt="Expats"/>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/sWkHJPr/Carousel2.jpg" className="d-block w-100" alt="Alexa"/>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/j8bNnMd/Carousel3.jpg" className="d-block w-100" alt="Whole foods"/>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/wgbm8Ls/Carousel4.jpg" className="d-block w-100" alt="Valentine's day"/>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/m02SyCZ/Carousel5.jpg" className="d-block w-100" alt="Lego"/>
        </div>
        <div className="carousel-item">
          <img src="https://i.ibb.co/hYWsTgj/Carousel6.jpg" className="d-block w-100" alt="One medical" />
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
