import React, { useEffect, useState} from "react";
import { NavLink} from "react-router-dom";
import { gsap } from "gsap";
import Boutons from "./Boutons";
import logo from "../images/logo.png";
import MobileNav from "./MobileNav";

const navItems = [
  { path: "/", label: "Home" },
  { path: "/visas", label: "Visas" },
  { path: "/tours", label: "Tours Packages" },
  { path: "/cars", label: "Car rental" },
  { path: "/contacts", label: "Contact us" },
];

const Header = () => {
  const [menuIsActive, setmenuIsActive] = useState(false);

  const handleMenu = () => {
    setmenuIsActive(!menuIsActive);
  };

  const window_Width = window.innerWidth;

  window.onresize = () => {
    if (window.innerWidth > 1000) {
      setmenuIsActive(false);
    }
  };

  function handleClickLogo() {
    document.querySelector(".GoHome").click();
  }

  useEffect(() => {
    let ctx = gsap.context(() => {
      const handleDisplayMenu = gsap.timeline();
      handleDisplayMenu.from(".mobil_nav ", {
        duration: 1,
      });
      if (menuIsActive) {
        handleDisplayMenu.play(-1);
        console.log("play handleDisplayMenu");
      } else {
        handleDisplayMenu.reverse(1);
        console.log("reverse handleDisplayMenu");
      }
    });

    return () => {
      ctx.revert();
    };
  }, [menuIsActive]);

  const location = window.location.pathname;

  useEffect(() => {
    // Écoute les changements de routage
    console.log("Nouvelle route :", location);
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <header className="header">
      {window_Width <= 1000 && (
        <MobileNav navItems={navItems} menuIsActive={menuIsActive}></MobileNav>
      )}

      <div className="struct_header">
        <img
          onClick={handleClickLogo}
          className="logo"
          src={logo}
          alt="logo Easy Travelex"
        />

        <div className="Hidden_link">
          <NavLink
            to={"/visasapplication"}
            className={"GoTo-visasapplication"}
          ></NavLink>
          <NavLink
            to={"/toursapplication"}
            className={"GoTo-toursapplication"}
          ></NavLink>
        </div>

        <div className="other">
          <nav className="nav">
            <ul>
              {navItems.map(function (item, index) {
                if (index === 0) {
                  return (
                    <li key={index}>
                      <NavLink to={item.path} className={"link GoHome"}>
                        <span className="value">{item.label}</span>
                        <span className="design">
                          <div className="carret"></div>
                        </span>
                      </NavLink>
                    </li>
                  );
                } else {
                  return (
                    <li key={index}>
                      <NavLink to={item.path} className={"link"}>
                        <span className="value">{item.label}</span>
                        <span className="design">
                          <div className="carret"></div>
                        </span>
                      </NavLink>
                    </li>
                  );
                }
              })}
            </ul>
          </nav>

          <NavLink to={"/visas"} className="btn_marg">
            <Boutons text="Apply visa" isIcon={1}></Boutons>
          </NavLink>

          <div id="btn_menu" onClick={handleMenu} className="btn_menu">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
