import React from "react";
import logoWhite from "../assets/images/mtw-white.png";
import logoBlue from "../assets/images/mtw-blue.png";
import Icofont from "react-icofont";

const MainLogo = ({ collapse, showMenu }) => {
  return (
    <div className="navbar-header">
      <button
        type="button"
        className={"navbar-toggle " + (collapse ? "collapsed" : "")}
        data-toggle="dropdown"
        data-target="#navbar-menu"
        onClick={showMenu}
      >
        <Icofont icon="navigation-menu" />
      </button>
      <div className="logo">
        <a href="index.html">
          <img className="logo logo-display" src={logoWhite} alt="" />
          <img className="logo logo-scrolled" src={logoBlue} alt="" />
        </a>
      </div>
    </div>
  );
};

export default MainLogo;
