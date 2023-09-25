import React from 'react';
import { NavLink } from 'react-router-dom';
import twitter from "../images/svg/twitter.svg";
import facebook from "../images/svg/facebook.svg";
import linkedin from "../images/svg/linkedin.svg";

const MobileNav = (props) => {
    return (
        <nav
          className={`mobil_nav ${props.menuIsActive ? "mobil_nav_active" : ""}`}
        >
          <ul>
            {props.navItems.map((item, index) => (
              <li key={index}>
                <NavLink to={item.path} className={`link`}>
                  <span className="value" nbre={`0${index + 1}`}>
                    {item.label ==="Tours Packages" ? "Tours" : item.label}
                  </span>
                  <span className="design">
                    <div className="carret"></div>
                  </span>
                </NavLink>
              </li>
            ))}
          </ul>
    
          <div className="menu_social">
            {/* <Boutons text="Apply now" isIcon={true}></Boutons> */}
    
            <div className="social_link_container">
              <span>
                <img src={facebook} alt={facebook} />
              </span>
              <span>
                <img src={twitter} alt={twitter} />
              </span>
              <span>
                <img src={linkedin} alt={linkedin} />
              </span>
            </div>
          </div>
        </nav>
      );
};

export default MobileNav;