import React, {useState} from "react";

const NavLink = (props) => {
  const [active, setActive] = useState(props.active)

  // Отслеживание нажатия
  const handleClick = () => {
    // setActive((prevState) => !prevState)
  }

  // Создание стиля
  const getClasses = () => {
    let classes = "list-group-item"
    return classes += (props.active ? " active" : "")
  }

  return (
    <li style={{cursor: 'pointer'}} className={getClasses()} onClick={handleClick}>
      <button onClick={()=>props.onActiveChange(props.id)}>toggle active</button>
      {/* <a style={{color: "black"}} href={props.link}>{props.text}</a> */}
    </li>
  );
};

export default NavLink;