import React,{useState} from "react"

const Counter = ({value,name,onIncrement,onDecrement,onDelete}) => {

  const formatValue = () => {
    return value === 0 ? 'empty' : value
  }
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    return classes += (value === 0 ? 'text-bg-warning' : 'text-bg-primary')
  }
 
  const handleDelete = () => {
    console.log('handleDelete')
  }
  return (
    <div>
      <span>{name}</span>
      <span className={getBageClasses()}>{formatValue()}</span>
      <button 
        className="badge btn btn-primary btn-sm m-1"
        onClick={onIncrement}
      >
        +
      </button>
      <button 
        className="badge btn btn-primary btn-sm m-1"
        onClick={onDecrement}
      >
        -
      </button>
      <button className="btn btn-danger btn-sm m-1" onClick={onDelete}>delete</button>
    </div>
  )
}
export default Counter
