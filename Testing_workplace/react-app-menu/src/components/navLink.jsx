import React, {useState} from "react";

const NavLink = ({id, active, link, text, onActiveChange}) => {

  // Отслеживание нажатия
  const handleClick = () => {
    onActiveChange(id)
  }

  // Создание стиля
  const getClasses = () => {
    let classes = "nav-link"
    return classes += (active ? " active" : "")
  }

  return (
    <li
      className="nav-item"
      onClick={handleClick}
      style={{listStyle: 'none'}}
      >
        <a href={link} className={getClasses()}>
            {text}
        </a>
    </li>
  );
};

export default NavLink;