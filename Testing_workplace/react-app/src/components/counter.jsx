import React from "react"

const Counter = () => {
  let counter = 1

  // const formatCont = () => {
  //    return counter === 0 ? 'empty' : counter
  // }
  let editCount = () => {
    document.body.addEventListener('click', (event) => {
      // event.preventDefault()
      // event.stopPropagation()
      event.stopImmediatePropagation()
      const h1 = document.querySelector('h1');
      const remCount_btn = document.querySelector('.remCount');

      if (event.target.className === 'addCount' && counter >= 0) {
          counter += 1
          h1.textContent = counter

          remCount_btn.style.removeProperty('background-color')
          remCount_btn.style.removeProperty('cursor')
      } else if (event.target.className === 'remCount' && counter >= 0) {
        if (counter === 0) {
          h1.textContent = 'empty'
        } else {
          counter -= 1
          h1.textContent = counter;
          if (counter === 0){
            h1.textContent = 'empty'
            remCount_btn.style.backgroundColor = '#969696'
            remCount_btn.style.cursor = 'not-allowed'
          } else {
            h1.textContent = counter
          }
        }
      }

    })
   }

   return (
      <>
         <h1>{counter}</h1>
         <button className="addCount">+{editCount()}</button>
         <button className="remCount">-{editCount()}</button>
      </>
   );
}
export default Counter