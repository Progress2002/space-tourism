import React from 'react'
import NavLink from "./NavLink";

const DesktopNav = ({isActiveRoute}) => {
  return (
    <div className='text-white hidden md:flex items-center  lg:w-5/6 '>
      <div className='opacity-25 md:hidden lg:block z-10 relative left-7' style={{width: '483px',}}><hr className='' style={{}} /></div>
      <ul
        className="text-base -tracking-tighter font-thin text-white flex  gap-11 md:gap-12 lg:pr-36  lg:pl-28 md:px-9"
        style={{ fontFamily: "'Barlow Condensed', sans-serif",backdropFilter: "blur(40.7742px)", background: 'rgba(255, 255, 255, 0.04)' }}>
        <NavLink
          isActive={isActiveRoute}
          address={"/"}
          span={"00"}
          value={"HOME"}
        />
        <NavLink
          isActive={isActiveRoute}
          address={"/destination"}
          span={"01"}
          value={"DESTINATION"}
        />
        <NavLink
          isActive={isActiveRoute}
          address={"/crew"}
          span={"02"}
          value={"CREW"}
        />
        <NavLink
          isActive={isActiveRoute}
          address={"/technology"}
          span={"03"}
          value={"TECHNOLOGY"}
        />
      </ul>
    </div>
  )
}

export default DesktopNav
