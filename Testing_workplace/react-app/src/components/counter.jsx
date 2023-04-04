import React,{useState} from "react"

const Counter = () => {
  const [count, setCount] = useState(0)
  const [tags, setTag] = useState(['tag1', 'tag2', 'tag3'])

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
  const handleTagChange = () => {
    setTag(['tag4', 'tag5'])
    // console.log('тут');
  }

  return (
    <>
      <ul>{
            tags.map(tag => (
              <li key={tag} 
                className="btn btn-primary btn-sm m-1" onClick={handleTagChange}>{tag}</li>)
            )
          }
      </ul>
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
