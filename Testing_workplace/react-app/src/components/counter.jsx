import React from "react"

const Counter = () => {
  let counter = 1

  

   return (
      <>
         <h1>{counter}</h1>
         <button id="addCount" className="badge btn btn-primary btn-sm m-1">+{editCount()}</button>
         <button id="remCount" className="badge btn btn-primary btn-sm m-1">-{editCount()}</button>
      </>
   );
}
export default Counter