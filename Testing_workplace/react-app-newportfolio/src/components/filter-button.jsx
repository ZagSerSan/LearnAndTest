import React from 'react';

const FilterButton = ({button, filterState, onFilterSwitch}) => {
  return (
    <button
      onClick={()=>onFilterSwitch(button)}
      className={"filter__link btn_all" + (filterState===button.type ? ' active' : '')}
      >
        {button.name}
    </button>
  )
}
 
export default FilterButton;