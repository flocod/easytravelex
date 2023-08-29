import React from "react";
import arrowRight from "../images/svg/arrow-right.svg";
const Boutons = ({ text, isIcon }) => {
  return (
    <button className="btn">
      <span>{text}</span>
      {isIcon ? <img src={arrowRight} alt={arrowRight} /> : ""}
      <div className="hoverlay"></div>
    </button>
  );
};

export default Boutons;
