import React from "react"

const Counter = () => {
  let counter = 1

  let editCount = () => {
    document.body.addEventListener('click', (event) => {
      event.stopImmediatePropagation()
      const h1 = document.querySelector('h1');
      const remCount_btn = document.querySelector('#remCount');

      if (event.target.id === 'addCount' && counter >= 0) {
        counter += 1
        h1.textContent = counter

        remCount_btn.classList.remove('btn-secondary')
        remCount_btn.classList.add('btn-primary')

        // remCount_btn.style.removeProperty('background-color')
        remCount_btn.style.removeProperty('cursor')
      } else if (event.target.id === 'remCount' && counter >= 0) {
        if (counter === 0) {
          h1.textContent = 'empty'
        } else {
          counter -= 1
          h1.textContent = counter;
          if (counter === 0){
            h1.textContent = 'empty'

            remCount_btn.classList.remove('btn-primary')
            remCount_btn.classList.add('btn-secondary')

            // remCount_btn.style.backgroundColor = '#969696'
            remCount_btn.style.cursor = 'not-allowed'
          } else {
            h1.textContent = counter
          }
        }
      } // else if
    })// addEventListener
  }// editCount

   return (
      <>
         <h1>{counter}</h1>
         <button id="addCount" className="badge btn btn-primary btn-sm m-1">+{editCount()}</button>
         <button id="remCount" className="badge btn btn-primary btn-sm m-1">-{editCount()}</button>
      </>
   );
}
export default Counter