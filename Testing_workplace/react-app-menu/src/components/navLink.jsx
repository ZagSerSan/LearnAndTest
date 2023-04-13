import React, {useState} from "react";

const NavLink = (props) => {

  // Отслеживание нажатия
  const handleClick = () => {
    props.onActiveChange(props.id)
  }

  // Создание стиля
  const getClasses = () => {
    let classes = "nav-link"
    return classes += (props.active ? " active" : "")
  }

  return (
    <li
      className="nav-item"
      onClick={handleClick}
      style={{listStyle: 'none'}}
        >
          <a href={props.link} className={getClasses()}>
              {props.text}
          </a>
    </li>
  );
};

export default NavLink;