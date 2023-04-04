import React from "react"

const Counter = () => {
  let counter = 1

  const formatCount = () => {
    return counter === 0 ? 'empty' : counter
  }
  const getBageClasses = () => {
    let classes = 'badge m-2 '
    classes += counter === 0 ? 'text-bg-warning' : 'text-bg-primary'
    return classes
  }

  return (
    <>
        <span className={getBageClasses()}>{formatCount()}</span>
        <button className="badge btn btn-primary btn-sm m-1">+</button>
    </>
  );
}
export default Counter
