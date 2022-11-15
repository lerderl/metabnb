const Inspiration = ({ images, Star }) => {
  return (
    <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
      {images.map((image, id) => (
        <div className="col-sm-12 col-md-6 col-lg-3 mb-5 mx-auto" key={id}>
          <div className="card frame">
            <div className="card-body">
              <img
                src={image.photo}
                className="card-img-top"
                alt="Adventure inspiration images"
              />
            </div>
            <div className="style-card">
              <div className="d-flex justify-content-between desert">
                <span>Desert king</span>
                <span className="one-mbt">1MBT per night</span>
              </div>
              <div
                className="d-flex justify-content-between desert km-away"
              >
                <span>2345km away</span>
                <span>available for 2weeks stay</span>
              </div>
              <div
                className="d-flex justify-content-between star"
              >
                <span>
                  <img src={Star} alt="Star icon" className="me-2" />
                  <img src={Star} alt="Star icon" className="me-2" />
                  <img src={Star} alt="Star icon" className="me-2" />
                  <img src={Star} alt="Star icon" className="me-2" />
                  <img src={Star} alt="Star icon" className="me-2" />
                </span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Inspiration;
