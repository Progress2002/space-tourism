import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-600">
      <ul className="flex gap-3">
        <li className="text-white hover:text-red-500">
          <Link to="/">HOME</Link>
        </li>
        <li className="text-white hover:text-red-500">
          <Link to="/destination">DESTINATION</Link>
        </li>
        <li className="text-white hover:text-red-500">
          <Link to="/crew">CREW</Link>
        </li>
        <li className="text-white hover:text-red-500">
          <Link to="/technology">TECHNOLOGY</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
