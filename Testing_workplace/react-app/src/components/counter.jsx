import React,{useState} from "react"

const Counter = () => {
  const [count, setCount] = useState(0)

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
  }
  function handleDecrement() {
    count === 0 ? console.log('count не может быть меньше нуля') : setCount( (prevState) => prevState - 1)
  }
 
  return (
    <div>
      <span className={getBageClasses()}>{formatCount()}</span>
      <button 
        className="badge btn btn-primary btn-sm m-1"
        onClick={handleIncrement}
      >+</button>
      <button 
        className="badge btn btn-primary btn-sm m-1"
        onClick={handleDecrement}
      >-</button>
    </div>
  )
}
export default Counter
