import Image3 from "../images/image_3.png";
import Image4 from "../images/image_4.png";
import Image5 from "../images/image_5.png";
import Image6 from "../images/image_6.png";

const Home = () => {
  return (
    <>
      {/* Rent a place */}
      <section className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 col-lg-7 rent-col">
            <h1 className="rent">
              Rent a <span className="purple">Place</span> away from <span className="purple">Home</span> in the <span className="purple">Metaverse</span>
            </h1>
            <p className="we">
              we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone
            </p>
            <form className="d-flex" role="search">
              <input className="form-control input" type="search" placeholder="Search for location" aria-label="Search" />
              <button className="btn button" type="submit">Search</button>
            </form>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="img-flex">
              <div className="column img-col">
                <img className="mt-5 pt-5 column-img" src={Image4} alt=""/>
                <img src={Image3} className="column-img" alt=""/>
              </div>
              <div className="column img-col">
                <img src={Image6} alt="" className="mt-1 column-img"/>
                <img src={Image5} alt="" className="column-img mb-3"/>
              </div> 
            </div> 
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
