import React from 'react'
import ModalSlider from './modalSlider'

const Modal = ({currentModal, onCloseModal}) => {
  return (<>
    <svg style={{display: "none"}}>
      <symbol id="close" viewBox="0 0 330 330">
        <path id="XMLID_29_" d="M165,0C120.926,0,79.492,17.163,48.328,48.327c-64.334,64.333-64.334,169.011-0.002,233.345
        C79.49,312.837,120.926,330,165,330c44.072,0,85.508-17.163,116.672-48.328c64.334-64.334,64.334-169.012,0-233.345
        C250.508,17.163,209.072,0,165,0z M239.246,239.245c-2.93,2.929-6.768,4.394-10.607,4.394c-3.838,0-7.678-1.465-10.605-4.394
        L165,186.213l-53.033,53.033c-2.93,2.929-6.768,4.394-10.607,4.394c-3.838,0-7.678-1.465-10.605-4.394
        c-5.859-5.857-5.859-15.355,0-21.213L143.787,165l-53.033-53.033c-5.859-5.857-5.859-15.355,0-21.213
        c5.857-5.857,15.355-5.857,21.213,0L165,143.787l53.031-53.033c5.857-5.857,15.355-5.857,21.213,0
        c5.859,5.857,5.859,15.355,0,21.213L186.213,165l53.033,53.032C245.104,223.89,245.104,233.388,239.246,239.245z"/>   
      </symbol>
    </svg>
    <div className="modal-work" id="modal_2">
      
      <button 
          type="button"
          className="modal-work__btn-close"
          id="btn_work_close"
          onClick={onCloseModal}
        >
          <svg><use href="#close"></use></svg>
      </button>

      <div className="modal-work__preview">
        <ModalSlider currentModal={currentModal}/>
        {/* <div className="slider">

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
            
        </div> */}
      </div>

      <div className="modal-work__content">
        <h3 className="modal-work__projectname">{currentModal.name}</h3>
        <h4 className="modal-work__category">CATEGORY: {currentModal.category}<span>|</span>{currentModal.date}</h4>
        <div className="modal-work__client">
          <a href="portfolio/2-mogo/index.html" target="_blank">Open website</a>
        </div>
        <div className="modal-work__textbox">
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
    </div>
  </>)
}
 
export default Modal