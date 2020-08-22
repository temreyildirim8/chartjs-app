import React from "react";

import "./HeaderStyles.css";

const Header = () => {
  return (
    <div className="header_wrapper">
      <div className="header_left">
        <img src={require("../../Assets/Img/hedwig-logo.png")} alt="" />
      </div>
      <div className="header_right">
        <img src={require("../../Assets/Icon/user-circle-solid.svg")} alt="" />
        {/*  There will be a opening modal here, react-modal library can be used */}
      </div>
    </div>
  );
};

export default Header;
