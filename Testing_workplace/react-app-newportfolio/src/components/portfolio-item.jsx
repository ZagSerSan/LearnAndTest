import React from 'react'

const PortfolioItem = ({item}) => {
  return (
    <div className="portfolio-item" id="lending" data-filter="#lending" data-modal="modal_1">
      <img className="portfolio-item__image" src={item.img} alt="preview"/>
      <div className="portfolio-item__suptitle">{item.category}</div>
      <div className="portfolio-item__title">
        {item.name}
        <time dateTime="2022-11-23">{item.date}</time>
      </div>
    </div>
  )
}
 
export default PortfolioItem