import React from "react"
import PropTypes from "prop-types"

const GroupList = ({
  items,
  filter,
  valueProperty,
  contentProperty,
  onFilterChange,
  onCleanFilter
}) => {
  return (
    <div className="list-group">
      {items.map((item) =>
        <button key={item[valueProperty]}
          onClick={()=>onFilterChange(item[valueProperty])}
          className={
            "list-group-item list-group-item-action"+
            (item[valueProperty]===filter?' active':'')
          }
        >
          {item[contentProperty]}
        </button>
      )}
      {items.length > 0 && <button
          onClick={()=>onCleanFilter()}
          className={"list-group-item list-group-item-action"}
        >
          Очистить фильтр
        </button>
      }
    </div>
  )
}
GroupList.defaultProps = {
  valueProperty: "id",
  contentProperty: "text"
}
GroupList.propTypes = {
  items: PropTypes.array.isRequired,
  filter: PropTypes.string,
  valueProperty: PropTypes.string.isRequired,
  contentProperty: PropTypes.string.isRequired,
  // функции
  onFilterChange: PropTypes.func.isRequired,
  onCleanFilter: PropTypes.func.isRequired
}
export default GroupList
