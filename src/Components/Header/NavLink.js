import React from "react";
import { Link } from "react-router-dom";

const NavLink = (props) => {
  const { address, span, value, isActive } = props;
  return (
    <li className=" md:py-10 cursor-pointer border-primaryColor tracking-widest">
      <Link to={address}className={isActive(address)
         ? 'lg:py-9 md:hover:border-b-4 border-b-4' : 'lg:py-9 md:hover:border-b-4' }>
        <span className="mr-3 font-bold md:hidden lg:inline">{span}</span>
        {value}
      </Link>
    </li>
  );
};

export default NavLink;
