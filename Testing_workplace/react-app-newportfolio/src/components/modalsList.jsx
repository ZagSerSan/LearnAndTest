import React from 'react'
import Modal from './modal'

const ModalsList = ({modalState, portfolioItems, onCloseModal}) => {
  // массив модальных окон
  const modals = [
    {
      name: 'ActiveBox',
      modal: "activebox"
    },
    {
      name: 'MoGo',
      modal: "mogo"
    },
    {
      name: 'Design Portfolio',
      modal: "designerPortfolio"
    },
    {
      name: 'Custom Calculator',
      modal: "customCalculator"
    },
    {
      name: 'Todo List',
      modal: "todolist"
    }
  ]
  const currentModal = () => {
    const currentModal = portfolioItems.find(item => item.modal === modalState)
    return currentModal
  }
  
  return (
    <div
      className="modal-bg--work bg"
      id="modal_bg"
      style={modalState !== 'null' ? {display: 'flex'} : {display: 'none'}}
    >
    {modalState !== ' null'
      ? <Modal onCloseModal={onCloseModal} currentModal={currentModal()}/>
      : null
    }

    {/* LENDINGS */}
      {/* ActiveBox */}
        
      {/* MoGo */}
      {/* <div className="modal-work" id="modal_2">
          
          <button type="button" className="modal-work__btn-close" id="btn_work_close">
            <svg><use href="#close"></use></svg>
          </button>

          <div className="modal-work__preview">
            <div className="slider">

                <div>
                  <div className="modal-work__preview-item">
                      <img src="img/works/2-mogo/slide-1.png" alt="slide_1"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item">
                      <img src="img/works/2-mogo/slide-2.png" alt="slide_2"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item">
                      <img src="img/works/2-mogo/slide-3.png" alt="slide_3"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item">
                      <img src="img/works/2-mogo/slide-4.png" alt="slide_4"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item">
                      <img src="img/works/2-mogo/slide-5.png" alt="slide_5"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item last-slide--align">
                      <img src="img/works/2-mogo/slide-6.png" alt="slide_6"/>
                  </div>
                </div>
                

            </div>
          </div>

          <div className="modal-work__content">
            <h3 className="modal-work__projectname">MoGo</h3>
            <h4 className="modal-work__category">CATEGORY: Lending <span>|</span> 2022</h4>
            <div className="modal-work__client">
                <a href="portfolio/2-mogo/index.html" target="_blank">Open website</a>
            </div>
            <div className="modal-work__textbox">
                <p className="modal-work__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut sapiente, optio accusantium? Sunt sed praesentium est minima.</p>
                <p className="modal-work__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut sapiente, optio accusantium? Sunt sed praesentium est minima.</p>
            </div>
            <div className="modal-work__btnbox">
                <div className="modal-work__btnbox-prev">
                  <button className="modal-work__btn" id="btn_prev" data-openmodal="modal_2" data-prev="modal_1">previous</button>
                </div>
                <div className="modal-work__btnbox-next">
                  <button className="modal-work__btn" id="btn_next" data-openmodal="modal_2" data-next="modal_3">next</button>
                </div>
            </div>
          </div>
      </div> */}
      {/* Design Portfolio */}
      {/* <div className="modal-work" id="modal_3">
          
          <button type="button" className="modal-work__btn-close" id="btn_work_close">
            <svg><use href="#close"></use></svg>
          </button>

          <div className="modal-work__preview">
            <div className="slider">
                <div>
                  <div className="modal-work__preview-item">
                      <img src="img/works/3-designer-portfolio/slide-1.png" alt="slide-1"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item">
                      <img src="img/works/3-designer-portfolio/slide-2.png" alt="slide-2"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item">
                      <img src="img/works/3-designer-portfolio/slide-3.png" alt="slide-3"/>
                  </div>
                </div>
                <div>
                  <div className="modal-work__preview-item last-slide--align">
                      <img src="img/works/3-designer-portfolio/slide-4.png" alt="slide-4"/>
                  </div>
                </div>
            </div>
          </div>
          <div className="modal-work__content">
            <h3 className="modal-work__projectname">Designer Portfolio</h3>
            <h4 className="modal-work__category">CATEGORY: Lending <span>|</span> 2022</h4>
            <div className="modal-work__client">
                <a href="portfolio/3-designer-portfolio/index.html" target="_blank">Open website</a>
            </div>
            <div className="modal-work__textbox">
                <p className="modal-work__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut sapiente, optio accusantium? Sunt sed praesentium est minima.</p>
                <p className="modal-work__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut sapiente, optio accusantium? Sunt sed praesentium est minima.</p>
            </div>
            <div className="modal-work__btnbox">
                <div className="modal-work__btnbox-prev">
                  <button className="modal-work__btn" id="btn_prev" data-openmodal="modal_3" data-prev="modal_2">previous</button>
                </div>
                <div className="modal-work__btnbox-next">
                  <button className="modal-work__btn" id="btn_next" data-openmodal="modal_3" data-next="modal_4">next</button>
                </div>
            </div>
          </div>
      </div> */}

    {/* APPS */}
      {/* Custom Calculator */}
      {/* <div className="modal-work" id="modal_4">
          
          <button type="button" className="modal-work__btn-close" id="btn_work_close">
            <svg><use href="#close"></use></svg>
          </button>

          <div className="modal-work__preview flex--center calculatop">
            <img src="img/works/4-calculator/preview.png" alt="image"/>
          </div>
          <div className="modal-work__content">
            <h3 className="modal-work__projectname">Custom Calculator</h3>
            <h4 className="modal-work__category">CATEGORY: App<span>|</span> 2023</h4>
            <div className="modal-work__client">
                <a href="portfolio/4-calculator/index.html" target="_blank">Open website</a>
            </div>
            <div className="modal-work__textbox">
                <p className="modal-work__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut sapiente, optio accusantium? Sunt sed praesentium est minima.</p>
                <p className="modal-work__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut sapiente, optio accusantium? Sunt sed praesentium est minima.</p>
            </div>
            <div className="modal-work__btnbox">
                <div className="modal-work__btnbox-prev">
                  <button className="modal-work__btn" id="btn_prev" data-openmodal="modal_4" data-prev="modal_3">previous</button>
                </div>
                <div className="modal-work__btnbox-next">
                  <button className="modal-work__btn" id="btn_next" data-openmodal="modal_4" data-next="modal_5">next</button>
                </div>
            </div>
          </div>
      </div> */}
      {/* Todo List */}
      {/* <div className="modal-work" id="modal_5">
          
          <button type="button" className="modal-work__btn-close" id="btn_work_close">
            <svg><use href="#close"></use></svg>
          </button>

          <div className="modal-work__preview flex--center todo-list">
            <img src="img/works/5-TodoList/slider1.png" alt="image"/>
          </div>
          <div className="modal-work__content">
            <h3 className="modal-work__projectname">Todo list</h3>
            <h4 className="modal-work__category">CATEGORY: App<span>|</span> 2023</h4>
            <div className="modal-work__client">
                <a href="portfolio/APP/2 todoList/index.html" target="_blank">Open website</a>
            </div>
            <div className="modal-work__textbox">
                <p className="modal-work__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut sapiente, optio accusantium? Sunt sed praesentium est minima.</p>
                <p className="modal-work__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur dicta, recusandae debitis iusto quos voluptatum at. Dolorum a, velit rerum dicta aut sapiente, optio accusantium? Sunt sed praesentium est minima.</p>
            </div>
            <div className="modal-work__btnbox">
                <div className="modal-work__btnbox-prev">
                  <button className="modal-work__btn" id="btn_prev" data-openmodal="modal_5" data-prev="modal_4">previous</button>
                </div>
                <div className="modal-work__btnbox-next">
                  <button className="modal-work__btn" id="btn_next" data-openmodal="modal_5" data-next="modal_1">next</button>
                </div>
            </div>
          </div>
      </div> */}

    </div>
  )
}
 
export default ModalsList