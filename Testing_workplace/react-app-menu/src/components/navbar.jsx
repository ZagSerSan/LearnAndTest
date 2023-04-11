import React,{useState} from "react"
import NavLink from "./navLink";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [menuItems, setMenuItems] = useState([
    {
      id: 'main',
      text: 'Главная',
      active: true,
      link: "#main"
    },
    {
      id: 'blog',
      text: 'Блог',
      active: false,
      link: "#blog"
    },
    {
      id: 'contacts',
      text: 'Контакты',
      active: false,
      link: "#contacts"
    },
  ]);
 
  const handleMenuClick = () => {
    setOpen((prevState) => !prevState);
  };
 
  return (
    <div>
      <button
        className="btn btn-sm btn-primary"
        onClick={handleMenuClick}
      >
        меню
      </button>
      {open && (
        <ul className="list-group">
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              text={item.text}
              active={item.active}
              link={item.link}
            />
          ))}
        </ul>
      )}
    </div>
  );
};
 
 export default Navbar;