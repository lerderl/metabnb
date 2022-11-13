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
              <p className='footer-headers'>Community</p>
              <p className='footer-text'>NFT</p>
              <p className='footer-text'>Tokens</p>
              <p className='footer-text'>Landlords</p>
              <p className='footer-text'>Discord</p>
            </div>
            {/* Places */}
            <div className="col-md-6 col-lg-2 top-margin">
              <p className='footer-headers'>Places</p>
              <p className='footer-text'>Castle</p>
              <p className='footer-text'>Farms </p>
              <p className='footer-text'>Beach</p>
              <p className='footer-text'>Learn more</p>
            </div>
            {/* About us */}
            <div className="col-md-6 col-lg-2 top-margin">
              <p className='footer-headers'>About us</p>
              <p className='footer-text'>Road map</p>
              <p className='footer-text'>Creators</p>
              <p className='footer-text'>Career</p>
              <p className='footer-text'>Contact us</p>
            </div>
          </div>
          <div>&copy; 2022 Metabnb</div>
        </div>
      </section> 
    </footer>
  )
}

export default Footer;
