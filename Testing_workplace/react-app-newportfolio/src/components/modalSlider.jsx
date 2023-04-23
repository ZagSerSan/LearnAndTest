import React from 'react'
import Slider from "react-slick"

//1 activebox
import ActiveboxSlide_1 from "../img/works/1-activebox/slide_1.jpg"
import ActiveboxSlide_2 from "../img/works/1-activebox/slide_2.jpg"
import ActiveboxSlide_3 from "../img/works/1-activebox/slide_3.jpg"
import ActiveboxSlide_4 from "../img/works/1-activebox/slide_4.jpg"
//2 mogo
import MogoSlide_1 from "../img/works/2-mogo/slide-1.png"
import MogoSlide_2 from "../img/works/2-mogo/slide-2.png"
import MogoSlide_3 from "../img/works/2-mogo/slide-3.png"
import MogoSlide_4 from "../img/works/2-mogo/slide-4.png"
import MogoSlide_5 from "../img/works/2-mogo/slide-5.png"
import MogoSlide_6 from "../img/works/2-mogo/slide-6.png"
//3 designer-portfolio
import DesPortfSlide_1 from "../img/works/3-designer-portfolio/slide-1.png"
import DesPortfSlide_2 from "../img/works/3-designer-portfolio/slide-2.png"
import DesPortfSlide_3 from "../img/works/3-designer-portfolio/slide-3.png"
import DesPortfSlide_4 from "../img/works/3-designer-portfolio/slide-4.png"
//4 calculator
import calcPreview from "../img/works/4-calculator/preview.png"
//5 todo list
import todoListPreview from "../img/works/5-TodoList/slider1.png"

const ModalSlider = ({currentModal}) => {
  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }
  const slidersArray = [
    {
      modalName: 'activebox',
      modalSlides: [ActiveboxSlide_1, ActiveboxSlide_2, ActiveboxSlide_3, ActiveboxSlide_4]
    },
    {
      modalName: 'mogo',
      modalSlides: [MogoSlide_1, MogoSlide_2, MogoSlide_3, MogoSlide_4, MogoSlide_5, MogoSlide_6]
    },
    {
      modalName: 'designerPortfolio',
      modalSlides: [DesPortfSlide_1, DesPortfSlide_2, DesPortfSlide_3, DesPortfSlide_4]
    },
    {
      modalName: 'customCalculator',
      modalSlides: [calcPreview]
    },
    {
      modalName: 'todolist',
      modalSlides: [todoListPreview]
    }
  ]
  // новый массив отобранных слайдов для текущего окна
  let currentSlidersArray = (slidersArray.find(item => item.modalName === currentModal.modal)).modalSlides

  return (
    <Slider {...settings}>
      {currentSlidersArray.map(src => (
        <div>
          <div className="modal-work__preview-item">
            <img src={src} alt="slide_1"/>
          </div>
        </div>
      ))}
    </Slider>
  )
}
 
export default ModalSlider