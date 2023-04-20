import React from 'react';
import PortfolioItem from './portfolio-item';

import IMG_ActiveBox from "../img/works/1-activebox/preview.png"
import IMG_MoGo from "../img/works/2-mogo/preview.png"
import IMG_DesignerPortfolio from "../img/works/3-designer-portfolio/preview.png"
import IMG_Calc from "../img/works/4-calculator/preview.png"
import IMG_TodoList from "../img/works/5-TodoList/preview.png"

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      name: 'ActiveBox',
      img: IMG_ActiveBox,
      category: 'Lending',
      type: 'lending',
      date: 2022,
      dataFilter: "lending",
      dataModal: "modal_1"
    },
    {
      id: 2,
      name: 'MoGo',
      img: IMG_MoGo,
      category: 'Lending',
      type: 'lending',
      date: 2022,
      dataFilter: "lending",
      dataModal: "modal_2"
    },
    {
      id: 3,
      name: 'Designer Portfolio',
      img: IMG_DesignerPortfolio,
      category: 'Lending',
      type: 'lending',
      date: 2022,
      dataFilter: "lending",
      dataModal: "modal_3"
    },
    {
      id: 4,
      name: 'Custom calculator',
      img: IMG_Calc,
      category: 'App',
      type: 'app',
      date: 2021,
      dataFilter: "app",
      dataModal: "modal_4"
    },
    {
      id: 5,
      name: 'Todo list',
      img: IMG_TodoList,
      category: 'App',
      type: 'app',
      date: 2023,
      dataFilter: "app",
      dataModal: "modal_5"
    },
    
  ]

  return (
    <div className="work" id="work">
      <div className="container">
        <div className="filter">
          <button href="#all" data-filter className="filter__link btn_all active">All</button>
          <button href="#lending" data-filter className="filter__link btn_lending">Lending</button>
          <button href="#app" data-filter className="filter__link btn_app">App</button>
        </div>
        
        <div className="portfolio portfolioJS">
          {portfolioItems.map(item => (
            <PortfolioItem key={item.id} item={item}/>
          ))}
          {/* string 1 */}
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