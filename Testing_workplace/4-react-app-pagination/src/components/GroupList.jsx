import React from 'react'

const GroupList = ({items, filter, onFilterChange, onCleanFilter}) => {
  return (
    <div className="list-group">
      {items.map(item =>
        <button key={item}
          onClick={()=>onFilterChange(item)}
          className={
            "list-group-item list-group-item-action"+
            (item===filter?' active':'')
          }
        >
          {item}
        </button>
      )}
      {items.length > 0 && <button
          onClick={()=>onCleanFilter()}
          className={"list-group-item list-group-item-action"}
        >
          clear filter
        </button>
      }
    </div>
  )
}
GroupList.propTypes = {
  // массив строк
  items: PropTypes.arrayOf(PropTypes.string).isRequired,
  // строка
  filter: PropTypes.string, 
  // функция
  onFilterChange: PropTypes.func.isRequired,
  onCleanFilter: PropTypes.func.isRequired
}
export default GroupList
