import React from "react"
import NavLink from "./navLink";

const Navbar = ({menuItems, onItemClick}) => {
  
  return (
    <div>
      <ul className="nav nav-pills flex-column mb-auto">
        {menuItems.map((item) => (
          <NavLink
            key={item.id}
            {...item}
            onActiveChange={onItemClick}
          />
        ))}
      </ul>
    </div>
  );
};
 
export default Navbar;