import React, {useState} from "react";

const NavLink = (props) => {
  const [active, setActive] = useState(props.active)

  // Отслеживание нажатия
  const handleClick = () => {
    setActive((prevState) => !prevState)
  }

  // Создание стиля
  const getClasses = () => {
    let classes = "list-group-item"
    return classes += (active ? " active" : "")
  }

  return (
    <li className={getClasses()} onClick={handleClick}>
        {props.text}
    </li>
  );
};

export default NavLink;