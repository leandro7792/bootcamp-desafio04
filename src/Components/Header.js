import React from "react";

import FaceLogo from "../assets/facebook-1.png";

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img id="logo" src={FaceLogo} />
      </div>
      <div className="user">
        <span>Meu Perfil</span>

        <img
          className="useravatar"
          src="https://avatars1.githubusercontent.com/u/42878400?s=400&u=14bbdc0dcf1c8fc1276cd1252bb9ddcac2add2fd&v=4"
        />
      </div>
    </header>
  );
};

export default Header;
