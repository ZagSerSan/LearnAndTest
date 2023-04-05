import React,{useState} from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  // const [tags, setTags] = useState(['tag11', 'tag22', 'tag33'])
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

  const formatCount = () => {
    return count === 0 ? 'empty' : count
  }
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += count === 0 ? 'text-bg-warning' : 'text-bg-primary'
    return classes
  }
  function handleIncrement() {
    count === 10 ? console.log('count не может быть больше 10') : setCount( (prevState) => prevState + 1)
    // setCount( (prevState) => prevState + 1)
  }
  function handleDecrement() {
    count === 0 ? console.log('count не может быть меньше нуля') : setCount( (prevState) => prevState - 1)
  }

  // теги
  // const handleTagChange = (id) => {
  //   console.log(id);
  //   setTags(prevState => prevState.filter(item => item !== id))
  // }
  // const renderTags = () => {
  //   return tags.length !== 0 
  //     ? tags.map(item => (
  //       <li 
  //       key={item}
  //       className="btn btn-primary btn-sm m-1"
  //       onClick={()=>handleTagChange(item)}>
  //         {item}
  //       </li>
  //   )): 'No tags'
  // }
  // if (tags.length !== 0) {
  //   return <ul>{renderTags()}</ul>
  // }

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
      <span className={getBageClasses()}>{formatCount()}</span>
      <button 
        className="badge btn btn-primary btn-sm m-1"
        onClick={handleIncrement}
      >+</button>
      <button 
        className="badge btn btn-primary btn-sm m-1"
        onClick={handleDecrement}
      >-</button>
    </>
  );
}
export default Counter
