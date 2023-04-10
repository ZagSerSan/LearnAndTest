import React,{useState} from "react"

const Page = () => {
   const [menuItems, setMenuItems] = useState([
     "Главная",
     "Блог",
     "Контакты"
   ]);
   let [open, setOpen] = useState(false) 
    // Стрелочка вверх
    const arrowTop = (
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="16"
       height="16"
       fill="currentColor"
       className="bi bi-arrow-up"
       viewBox="0 0 16 16"
     >
       <path
         fillRule="evenodd"
         d="M8 15a.5.5 0 0 0 .5-.5V2.707l3.146 3.147a.5.5 0 0 0 .708-.708l-4-4a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L7.5 2.707V14.5a.5.5 0 0 0 .5.5z"
      />
     </svg>
   );
   // Стрелочка вниз
   const arrowDown = (
     <svg
       xmlns="http://www.w3.org/2000/svg"
       width="16"
       height="16"
       fill="currentColor"
       className="bi bi-arrow-down"
       viewBox="0 0 16 16"
     >
       <path
         fillRule="evenodd"
         d="M8 1a.5.5 0 0 1 .5.5v11.793l3.146-3.147a.5.5 0 0 1 .708.708l-4 4a.5.5 0 0 1-.708 0l-4-4a.5.5 0 0 1 .708-.708L7.5 13.293V1.5A.5.5 0 0 1 8 1z"
       />
     </svg>
   );
 
   // меню
   const toggleOpen = () => {
     setOpen(prevState => !prevState)
   }
   const handleMenuItems = (item) => {
     console.log(item);
   }
   // стили для пунктов меню
   const liStyle = {
     display: 'block',
     maxWidth: '100px',
     border: '1px solid #ccc'
   }
   const renderMenu = () => {
     return (
       open ? (
       <ul>
         {menuItems.map(item => <li 
         onClick={()=>handleMenuItems(item)}
         key={item}
         className="btn btn-light"
         style={liStyle}
         >
           {item}
         </li>)}
       </ul>
       ) : null
     )
   }
   const renderArrow = () => {
     return open ? arrowDown : arrowTop
   }
   if (menuItems.length === 0) {
     return "Not menu items"
   }
  
   return (
     <>
       <h3>
         <button
           onClick={toggleOpen}
           className="badge btn btn-primary btn-sm m-2"
           >
             Menu {renderArrow()}
         </button>
       </h3>
       {renderMenu()}
     </>
   )
 }
 export default Page