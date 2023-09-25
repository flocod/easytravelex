import React from 'react';
import imgBanner from "../images/banner.png";

const Banner = (props) => {

    return (
        <div className='banner'>
            <div className="image">
                <img src={imgBanner} alt={imgBanner} />
            </div>
            <div className="text">
                <div className="value" after={props.after}>{props.title}</div>
            </div>
        </div>
    );
};

export default Banner;