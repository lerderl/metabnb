import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

import Metabnb from "../images/metabnb.png";
import MetaFooter from "../images/meta_footer.png";

const Footer = () => {
  return (
    <footer>
      <section className="container">
        <div className="py-5">
          <div className="row justify-content-between">
            {/* Logo and Icons */}
            <div className="col-md-6 col-lg-3 top-margin">                
              <img src={MetaFooter} alt="Meta icon" />
              <img src={Metabnb} alt="Metabnb text" />
              <div className='icons'>
                <span className='mx-2 text-white'><FaFacebook className='size' /></span>
                <span className='mx-2 text-white'><FaInstagram className='size' /></span>
                <span className='mx-2 text-white'><FaTwitter className='size' /></span>
              </div>                
            </div>
            <div className="col-md-6 col-lg-2 top-margin">
            </div>
            {/* Community */}
            <div className="col-md-6 col-lg-2 top-margin">
              <p style={{fontWidth:'bolder',fontSize:'18px'}}>Community</p>
              <p style={{fontSize:'14px'}}>NFT</p>
              <p style={{fontSize:'14px'}}>Tokens</p>
              <p style={{fontSize:'14px'}}>Landlords</p>
              <p style={{fontSize:'14px'}}>Discord</p>
            </div>
            {/* Places */}
            <div className="col-md-6 col-lg-2 top-margin">
              <p style={{fontWidth:'bolder',fontSize:'18px'}}>Places</p>
              <p style={{fontSize:'14px'}}>Castle</p>
              <p style={{fontSize:'14px'}}>Farms </p>
              <p style={{fontSize:'14px'}}>Beach</p>
              <p style={{fontSize:'14px'}}>Learn more</p>
            </div>
            {/* About us */}
            <div className="col-md-6 col-lg-2 top-margin">
              <p style={{fontWidth:'bolder',fontSize:'18px'}}>About us</p>
              <p style={{fontSize:'14px'}}>Road map</p>
              <p style={{fontSize:'14px'}}>Creators</p>
              <p style={{fontSize:'14px'}}>Career</p>
              <p style={{fontSize:'14px'}}>Contact us</p>
            </div>
          </div>
          <div>&copy; 2022 Metabnb</div>
        </div>
      </section> 
    </footer>
  )
}

export default Footer;
