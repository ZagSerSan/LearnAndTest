import React from 'react'
import Slider from "react-slick"
import IMAGE from "../img/works/2-mogo/slide-1.png"

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
  const slides = [
    {
      modalType: 'activebox',
      images: {
        slide: '../img/works/2-mogo/slide-1.png'
      }
    }
  ]
  console.log(currentModal.name);

  return (
    <Slider {...settings}>
      <div>
        <div className="modal-work__preview-item">
          <img src={IMAGE} alt="slide_1"/>
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
      </div>
    </Slider>
  )
}
 
export default ModalSlider