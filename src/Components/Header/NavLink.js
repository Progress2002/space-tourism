import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { address, span, value, toggleMenu } = props;
  return (
    <li onClick={() => toggleMenu()}>
      <Link to={address}>
        <span className="mr-3 font-bold">{span}</span>
        {value}
      </Link>
    </li>
  );
};

export default NavLink;
