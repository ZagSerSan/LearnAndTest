import React, {useState} from 'react';
import PortfolioItem from './portfolio-item';
import FilterButton from './filter-button';

import IMG_ActiveBox from "../img/works/1-activebox/preview.png"
import IMG_MoGo from "../img/works/2-mogo/preview.png"
import IMG_DesignerPortfolio from "../img/works/3-designer-portfolio/preview.png"
import IMG_Calc from "../img/works/4-calculator/preview.png"
import IMG_TodoList from "../img/works/5-TodoList/preview.png"
import ModalsList from './modalsList';

const PortfolioList = () => {
  //? Идея: переключать класс 'hide' по фильтру а не ренендерить, для анимации

  // состояние фильтра, может быть: all || lending || app
  const [filterState, setFilterState] = useState('all')
  // кнопки фильтра
  const filterButtons = [
    {
      description: 'filter the all page',
      type: 'all',
      name: 'All'
    },
    {
      description: 'filter the landing page',
      type: 'lending',
      name: 'Lending'
    },
    {
      description: 'filter the app page',
      type: 'app',
      name: 'App'
    }
  ]
  // айтемы и состояние айтемов для рендера
  const portfolioItems = [
    {
      id: 1,
      name: 'ActiveBox',
      img: IMG_ActiveBox,
      category: 'Lending',
      type: 'lending',
      date: 2022,
      modal: "activebox"
    },
    {
      id: 2,
      name: 'MoGo',
      img: IMG_MoGo,
      category: 'Lending',
      type: 'lending',
      date: 2022,
      modal: "mogo"
    },
    {
      id: 3,
      name: 'Designer Portfolio',
      img: IMG_DesignerPortfolio,
      category: 'Lending',
      type: 'lending',
      date: 2022,
      modal: "designerPortfolio"
    },
    {
      id: 4,
      name: 'Custom calculator',
      img: IMG_Calc,
      category: 'App',
      type: 'app',
      date: 2021,
      modal: "customCalculator"
    },
    {
      id: 5,
      name: 'Todo list',
      img: IMG_TodoList,
      category: 'App',
      type: 'app',
      date: 2023,
      modal: "todolist"
    },
    
  ]
  const [currentItemsState, setCurrentItemsState] = useState(portfolioItems)
  function filterSwitch(button) {
    // если состояние фильтра не 'all', то перебрать под другой фильтр
    if (button.type !== 'all') {
      // меняем статус фильтра на статус типа кнопки ('lending' || 'app')
      setFilterState(button.type)
      // меняем массив айтемов под статус фильтра и выводим в рендер
      const newItemState = portfolioItems.filter( item => item.type === button.type)
      setCurrentItemsState(newItemState)
    } else {
      // меняем статус фильтра на статус типа кнопки ('all')
      setFilterState(button.type)
      // если состояние фильтра 'all', то обновить состояние как "все айтемы"
      setCurrentItemsState(portfolioItems)
    }
  }

  //todo
  const [modalState, setModalState] = useState(null)
  const testFunc = (itemModalState) => {
    setModalState(itemModalState)
  }
  function closeModal() {
    setModalState(null)
  }

  return (
    <div className="work" id="work">
      <div className="container">
        <div className="filter">
          {filterButtons.map(button => (
            <FilterButton
              key={button.type}
              button={button}
              onFilterSwitch={filterSwitch}
              filterState={filterState}
            />
          ))}
        </div>
        <div className="portfolio portfolioJS">
          {currentItemsState.map(item => (
            <PortfolioItem
              key={item.id}
              item={item}
              onTestFunc={testFunc}
            />
          ))}
        </div>
        {modalState
          ? <ModalsList onCloseModal={closeModal} modalState={modalState} portfolioItems={portfolioItems}/>
          : null
        }
        {/* <button type="button" id="loadmoreworks" className="work__btn btn-black">LOAD MORE WORK</button> */}
      </div>
    </div>
  )
}
 
export default PortfolioList