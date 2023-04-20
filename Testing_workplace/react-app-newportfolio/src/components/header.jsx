import React from 'react';
import AVATAR from '../img/header/avatarSmall.png'

const Header = () => {
  return (
    <header className='header'>
      <div  className='container'>
        <div className='header__inner'>
          <div className='header-avatar'>
            <img className='header-avatar__img' src={AVATAR} alt="avatar" />
            <div className="header-avatar-info">
              <h1>Serhii Zagorskyi</h1>
              <p>Frontend developer</p>
            </div>
          </div>
          <nav className='header-nav'>
            <a className='header-nav__link' href="#">nav-link</a>
            <a className='header-nav__link' href="#">nav-link</a>
          </nav>
        </div>
      </div>
    </header> 
   );
}
 
export default Header;