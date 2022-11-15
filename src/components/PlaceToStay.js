import { Link } from "react-router-dom";

import Inspiration from "./Inspiration";
import Slider from "../images/setting-5.svg";
import Star from "../images/cardImages/star.png"
import Frame1 from "../images/cardImages/frame_1.png";
import Frame2 from "../images/cardImages/frame_2.png";
import Frame3 from "../images/cardImages/frame_3.png";
import Frame4 from "../images/cardImages/frame_4.png";
import Frame5 from "../images/cardImages/frame_5.png";
import Frame6 from "../images/cardImages/frame_6.png";
import Frame7 from "../images/cardImages/frame_7.png";
import Frame8 from "../images/cardImages/frame_8.png";
import Frame9 from "../images/cardImages/frame_9.png";
import Frame10 from "../images/cardImages/frame_10.png";
import Frame11 from "../images/cardImages/frame_11.png";
import Frame12 from "../images/cardImages/frame_12.png";
import Frame13 from "../images/cardImages/frame_13.png";
import Frame14 from "../images/cardImages/frame_14.png";
import Frame15 from "../images/cardImages/frame_15.png";
import Frame16 from "../images/cardImages/frame_16.png";

const images = [
  {photo : Frame1}, 
  {photo : Frame2}, 
  {photo : Frame3}, 
  {photo : Frame4}, 
  {photo : Frame5}, 
  {photo : Frame6}, 
  {photo : Frame7},
  {photo : Frame8},
  {photo : Frame9}, 
  {photo : Frame10}, 
  {photo : Frame11}, 
  {photo : Frame12}, 
  {photo : Frame13}, 
  {photo : Frame14}, 
  {photo : Frame15},
  {photo : Frame16},  
];

const categories = [
  {title : "Restaurant"}, 
  {title : "Cottage"}, 
  {title : "Cattle"}, 
  {title : "Fantasy city"}, 
  {title : "Beach"}, 
  {title : "Carbins"}, 
  {title : "Off-grid"},
  {title : "Farm"}  
];

const PlaceToStay = () => {
  return (
    <section className="container">
      <nav className="nav nav-pills flex-column flex-sm-row mt-5 pt-3 mb-5">
        {categories.map((category, id) => (
          <Link className="flex-sm-fill text-sm nav-link mt-2" to="#" key={id}>{category.title}</Link>
        ))}
        <Link className="flex-sm-fill text-sm nav-link" to="#">
          <button type="button" className="btn location justify-content-between">
            Location <img src={Slider} alt="Slider icon" />
          </button>
        </Link>
      </nav>
      <Inspiration images={images} Star={Star} />
    </section>
  );
};

export default PlaceToStay;
