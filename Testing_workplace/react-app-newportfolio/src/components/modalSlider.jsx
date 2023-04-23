import React from 'react'
import Slider from "react-slick"

// activebox
import ActiveboxSlide_1 from "../img/works/1-activebox/slide_1.jpg"
import ActiveboxSlide_2 from "../img/works/1-activebox/slide_2.jpg"
import ActiveboxSlide_3 from "../img/works/1-activebox/slide_3.jpg"
// mogo
import MogoSlide_1 from "../img/works/2-mogo/slide-1.png"
import MogoSlide_2 from "../img/works/2-mogo/slide-2.png"
import MogoSlide_3 from "../img/works/2-mogo/slide-3.png"

const ModalSlider = ({currentModal}) => {
  // slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  }

  //todo массив слайдов.
  /*
  * Сделать отдельный компонент слайдера,
  * в который передавать определённые изображения
  * активного модального окна
  */
  // const slides = [
  //   {
  //     modalType: 'activebox',
  //     images: {
  //       slide: '../img/works/2-mogo/slide-1.png'
  //     }
  //   }
  // ]
  const slidersArray = [
    {
      modalName: 'activebox',
      modalSlides: [ActiveboxSlide_1, ActiveboxSlide_2, ActiveboxSlide_3]
    },
    {
      modalName: 'mogo',
      modalSlides: [MogoSlide_1, MogoSlide_2, MogoSlide_3]
    }
  ]
  let currentSlidersArray = (slidersArray.find(item => item.modalName === currentModal.modal)).modalSlides
  console.log(currentSlidersArray);

  return (
    <Slider {...settings}>
      {currentSlidersArray.map(src => (
        <div>
          <div className="modal-work__preview-item">
            <img src={src} alt="slide_1"/>
          </div>
        </div>
      ))}
      {/*
      <div>
        <div className="modal-work__preview-item">
          <img src={MogoSlide_1} alt="slide_1"/>
        </div>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
      <div>
        <h3>5</h3>
      </div>
      <div>
        <h3>6</h3>
      </div> */}
    </Slider>
  )
}
 
export default ModalSlider