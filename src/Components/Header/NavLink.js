import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { address, span, value } = props;
  return (
    <li className="lg:py-9 md:py-10 cursor-pointer md:hover:border-b-4 border-primaryColor tracking-widest">
      <Link to={address}>
        <span className="mr-3 font-bold md:hidden lg:inline">{span}</span>
        {value}
      </Link>
    </li>
  );
};

export default NavLink;
