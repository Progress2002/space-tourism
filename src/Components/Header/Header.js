import React, { useState } from "react";
import MobileMenu from "./MobileMenu";
import DesktopNav from "./DesktopNav";
import logo from "../images/logo.svg";
import hamburger from "../images/icon-hamburger.svg"
import icon_close from "../images/icon-close.svg"

const Header = () => {
  const [ isToggled, setIsToggled ] = useState(false)

  const toggleMenu = () => setIsToggled(!isToggled)

  return (
    <header className="flex justify-between container items-center h-24 sticky">
      <div className="Logo">
        <img className="h-12 w-12" src={logo} />
      </div>
      <div className="text-gr lg:hidden z-10">
        <img className="h-7 w-7" onClick={toggleMenu} src={isToggled ? icon_close : hamburger} />
      </div>
      {
        isToggled && <MobileMenu toggleMenu={toggleMenu} isToggled={isToggled} />
      }
      <DesktopNav/>
    </header>
  );
};

export default Header;
