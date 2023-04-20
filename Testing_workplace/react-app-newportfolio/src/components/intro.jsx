import React from 'react';
import PHOTO from "../img/intro/photo.png"
import Social from './social';

const Intro = () => {
  return (
    <div className="intro">
      <div className="container">
        <div className="intro__inner">

        <div className="intro-content">
            <div>
              <h2 className="intro-content__greeting">Hello, I’m</h2>
              <h1 className="intro-content__name">Serhii Zahorskyi</h1>
              <p className="intro-content__prof">Frontend developer</p>
              <Social/>
            </div>
         </div>
         <div className="intro-photo">
            <img src={PHOTO} alt="photo"/>
         </div>

        </div>
      </div>
    </div>
  )
}
 
export default Intro