import React,{useState} from "react"

const Counter = (props) => {
  const {value} = props

  const formatValue = () => {
    return value === 0 ? 'empty' : value
  }
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    return classes += (value === 0 ? 'text-bg-warning' : 'text-bg-primary')
  }
  function handleIncrement() {
    // value === 10 ? console.log('value не может быть больше 10') : setValue( (prevState) => prevState + 1)
    console.log('handleIncrement()');
  }
  function handleDecrement() {
    // value === 0 ? console.log('value не может быть меньше нуля') : setValue( (prevState) => prevState - 1)
    console.log('handleDecrement()');
  }
 
  const handleDelete = () => {
    console.log('handleDelete')
 }
  return (
    <div>
      <span>{props.name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button 
        className="badge btn btn-primary btn-sm m-1"
        onClick={handleIncrement}
      >
        +
      </button>
      <button 
        className="badge btn btn-primary btn-sm m-1"
        onClick={handleDecrement}
      >
        -
      </button>
      <button className="btn btn-danger btn-sm m-1" onClick={props.onDelete}>delete</button>
    </div>
  )
}
export default Counter
