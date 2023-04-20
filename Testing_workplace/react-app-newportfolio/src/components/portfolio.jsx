import React from 'react';
import IMG_ActiveBox from "../img/works/1-activebox/preview.png"
import IMG_MoGo from "../img/works/2-mogo/preview.png"
import IMG_DesignerPortfolio from "../img/works/3-designer-portfolio/preview.png"
import PortfolioItem from './portfolioItem'
// import IMG_Calc from "../img/works/4-calculator/preview.png"
// import IMG_TodoList from "../img/works/5-TodoList/preview.png"
// import PortfolioItem from './portfolio-item';

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      name: 'ActiveBox',
      img: IMG_ActiveBox,
      category: 'Lending',
      date: 2022
    },
    {
      id: 2,
      name: 'MoGo',
      img: IMG_MoGo,
      category: 'Lending',
      date: 2022
    },
    {
      id: 3,
      name: 'Designer Portfolio',
      img: IMG_DesignerPortfolio,
      category: 'Lending',
      date: 2022
    }
  ]
  return (
    <div className="work" id="work">
      <div className="container">
        <div className="filter">
          <a href="#all" data-filter className="filter__link btn_all active">All</a>
          <a href="#lending" data-filter className="filter__link btn_lending">Lending</a>
          {/* <a href="#website" data-filter className="filter__link btn_website">Store</a> */}
          <a href="#app" data-filter className="filter__link btn_app">App</a>
        </div>
        
        <div className="portfolio portfolioJS">
          {/* string 1 */}
          {portfolioItems.map(item => (
            <PortfolioItem key={item.id} item={item}/>
          ))}
          {/* <div className="portfolio-item" id="lending" data-filter="#lending" data-modal="modal_1">
              <img className="portfolio-item__image" src={IMG_ActiveBox} alt="preview"/>
              <div className="portfolio-item__suptitle">CATEGORY: Lending</div>
              <div className="portfolio-item__title">
                ActiveBox
                <time dateTime="2022-11-23">2022</time>
              </div>
          </div>
          <div className="portfolio-item" id="lending" data-filter="#lending" data-modal="modal_2">
              <img className="portfolio-item__image" src={IMG_MoGo}/>
              <div className="portfolio-item__suptitle">CATEGORY: Lending</div>
              <div className="portfolio-item__title">
                MoGo
                <time dateTime="2022-11-23">2022</time>
              </div>
          </div>
          <div className="portfolio-item" id="lending" data-filter="#lending" data-modal="modal_3">
              <img className="portfolio-item__image" src={IMG_DesignerPortfolio} alt="preview"/>
              <div className="portfolio-item__suptitle">CATEGORY: Lending</div>
              <div className="portfolio-item__title">
                Designer Portfolio
                <time dateTime="2022-11-23">2022</time>
              </div>
          </div> */}
          {/* string 2  */}
          {/* <div className="portfolio-item" id="app" data-filter="#app" data-modal="modal_4">
              <img className="portfolio-item__image" src={IMG_Calc} alt="preview"/>
              <div className="portfolio-item__suptitle">CATEGORY: App</div>
              <div className="portfolio-item__title">
                Custom calculator
                <time dateTime="2022-11-23">2023</time>
              </div>
          </div>
          <div className="portfolio-item" id="app" data-filter="#app" data-modal="modal_5">
              <img className="portfolio-item__image" src={IMG_TodoList} alt="preview"/>
              <div className="portfolio-item__suptitle">CATEGORY: App</div>
              <div className="portfolio-item__title">
                Todo list
                <time dateTime="2022-11-23">2023</time>
              </div>
          </div> */}
          
        </div>
        {/* <button type="button" id="loadmoreworks" className="work__btn btn-black">LOAD MORE WORK</button> */}
      </div>
    </div>
  )
}
 
export default Portfolio