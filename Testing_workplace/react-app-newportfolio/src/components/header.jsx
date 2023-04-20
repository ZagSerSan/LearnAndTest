import React from 'react'
import AVATAR from '../img/header/avatarSmall.png'

const Header = () => {
  return (
    <header className='header'>
      <div  className='container'>

        <div className='header__inner'>
          <div className='header-avatar'>
            <img className='header-avatar__img' src={AVATAR} alt="avatar" />
            <div className="header-avatar__content">
              <h1 className='header-avatar__name'>Serhii<br/>Zagorskyi</h1>
              <p className='header-avatar__prof'>Frontend dev</p>
            </div>
          </div>

          <nav className='header-nav'>
            <a className='header-nav__link' href="#">Portfolio</a>
            <a className='header-nav__link' href="#">About me</a>
          </nav>
        </div>

      </div>
    </header>
   )
}
 
export default Header