import React,{useState} from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [tags, setTags] = useState(['tag11', 'tag22', 'tag33'])
  // const [menuItems, setMenuItems] = useState([
  //   "Главная",
  //   "Блог",
  //   "Контакты",
  // ]);
  // let [open, setOpen] = useState(false) 

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
  const handleTagChange = (id) => {
    console.log(id);
    setTags(prevState => prevState.filter(item => item !== id))
  }
  // const toggleOpen = () => {
  //   setOpen(prevState => !prevState)
  // }

  return (
    <>
      {/* <h3><button onClick={toggleOpen}>Menu</button></h3> */}
      {/* <ul>
        {(
          open && menuItems.map(item => <li key={item}><a href="#">{item}</a></li>)
        )}
      </ul> */}
      {
        tags.map(item => (
          <li 
          key={item}
          className="btn btn-primary btn-sm m-1"
          onClick={()=>handleTagChange(item)}>
            {item}
          </li>
        ))
      }
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
