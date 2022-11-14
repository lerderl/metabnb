import NFTs from "../images/nfts.png";
import Image3 from "../images/image_3.png";
import Image4 from "../images/image_4.png";
import Image5 from "../images/image_5.png";
import Image6 from "../images/image_6.png";
import MbtToken from "../images/mbtoken.png";
import Opensea from "../images/subtract.png";
import Metamask from "../images/metamask.svg";
import Star from "../images/cardImages/star.png"
import Frame1 from "../images/cardImages/frame_1.png";
import Frame2 from "../images/cardImages/frame_2.png";
import Frame3 from "../images/cardImages/frame_3.png";
import Frame4 from "../images/cardImages/frame_4.png";
import Frame5 from "../images/cardImages/frame_5.png";
import Frame6 from "../images/cardImages/frame_6.png";
import Frame7 from "../images/cardImages/frame_7.png";
import Frame8 from "../images/cardImages/frame_8.png";

const images = [
  {photo : Frame1}, 
  {photo : Frame2}, 
  {photo : Frame3}, 
  {photo : Frame4}, 
  {photo : Frame5}, 
  {photo : Frame6}, 
  {photo : Frame7},
  {photo : Frame8}  
];

const Home = () => {
  return (
    <>
      {/* Rent a place */}
      <section className="container mt-5 mb-5">
        <div className="row">
          <div className="col-md-6 col-lg-7 rent-col">
            <h1 className="rent">
              Rent a <span className="purple">Place</span> away from{" "}
              <span className="purple">Home</span> in the{" "}
              <span className="purple">Metaverse</span>
            </h1>
            <p className="we">
              we provide you access to luxury and affordable houses in the
              metaverse, get a chance to turn your imagination to reality at
              your comfort zone
            </p>
            <form className="d-flex" role="search">
              <input
                type="search"
                aria-label="Search"
                className="form-control input"
                placeholder="Search for location"
              />
              <button className="btn button" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="col-md-6 col-lg-5">
            <div className="img-flex">
              <div className="column img-col">
                <img className="mt-5 pt-5 column-img" src={Image4} alt="" />
                <img src={Image3} className="column-img" alt="" />
              </div>
              <div className="column img-col">
                <img src={Image6} alt="" className="mt-1 column-img" />
                <img src={Image5} alt="" className="column-img mb-3" />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Icons */}
      <section className="purple-bg">
        <div className="container purple-bg-icon">
          <div className="row ">
            <div className="mt-4 col-sm-12 col-md-6 col-lg-4 mb-5 mx-auto">
              <div className="mbtoken">
                <img src={MbtToken} alt="mbtoken icon" />
                <span>MBToken</span>
              </div>
            </div>
            <div className="mt-4 col-sm-12 col-md-6 col-lg-4 mb-5 mx-auto">
              <img src={Metamask} alt="metamask icon" />
            </div>
            <div className="mt-4 col-sm-12 col-md-6 col-lg-4 mb-5 mx-auto">
              <div className="opensea">
                <img src={Opensea} alt="opensea icon" />
                <span>OpenSea</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Inspiration */}
      <section className="container">
        <p className="inspiration text-center mt-5">
          Inspiration for your next adventure
        </p>
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
      </section>
      {/* NFTs */}
      <section className="purple-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 col-md-6">
              <p className="nft-text">Metabnb NFTs</p>
              <p className="discover-nft">
                Discover our NFT gift cards collection. Loyal customers gets
                amazing gift cards which are traded as NFTs. These NFTs gives
                our cutomer access to loads of our exclusive services.
              </p>
              <button type="button" className="btn learn-button purple">Primary</button>
            </div>
            <div className="col-sm-5 offset-sm-2 col-md-6 offset-md-0">
              <img src={NFTs} alt="NFT images" className="img-fluid nft-img" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
