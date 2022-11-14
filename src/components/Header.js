import { Link } from "react-router-dom";

import meta from "../images/meta.png";
import logo from "../images/favicon.png";
import metamask from "../images/metamask.png";
import walletConnect from "../images/wallet_connect.png";
import breadcrumbDivider from "../images/breadcrumb_divider.png";

const Header = () => {
  return (
    <header className="container">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Metabnb logo" width="30" height="24" />
            <img src={meta} alt="Metabnb text" height="24" />
          </Link>
          <button
            type="button"
            aria-expanded="false"
            aria-controls="navbarNav"
            data-bs-toggle="collapse"
            className="navbar-toggler"
            data-bs-target="#navbarNav"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="mx-auto navbar-nav">
              <li className="nav-item">
                <Link className="nav-link text-black" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/">Place to stay</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/">NFTs</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-black" to="/">Community</Link>
              </li>
            </ul>
            <div className="navbar-nav">
              <button className="btn connect text-white" type="button" data-bs-toggle="modal" data-bs-target="#exampleModal">Connect wallet</button>
            </div>
          </div>
        </div>
      </nav>
      {/* Modal */}
      <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5 connect-modal" id="exampleModalLabel">Connect wallet</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p className="modal-text">Choose your preferred wallet:</p>
              <div className="modal-item">
                <div>
                  <img src={metamask} alt="Metamask icon" width="44px" height="44px" />
                  <span className="left-margin icon-text">Metamask</span>
                </div>
                <img src={breadcrumbDivider} alt="Right arrow" />
              </div>
              <div className="modal-item mt-2">
                <div>
                  <img src={walletConnect} alt="Wallet connect icon" width="44px" height="44px" />
                  <span className="left-margin icon-text">WalletConnect</span>
                </div>
                <img src={breadcrumbDivider} alt="Right arrow" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
