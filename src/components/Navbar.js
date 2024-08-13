import React from 'react';
import '../styles/Navbar.css'
import logo from '../assets/logo.png'
import { FaBars } from "react-icons/fa6";

export default function Navbar() {
  return (
    <div className='nav'>
      <div className='nav__logo'>
        <img src={logo} alt='ytyt logo'/>
      </div>
      <div className='nav__items'>
        <ul>
          <li>Чему вы научитесь</li>
          <li>Процесс обучения</li>
          <li>Стоимость</li>
          <li>Контакты</li>
        </ul>
      </div>
      <div className='nav__buttons'>
        <a href='/'>Регистрация</a>
        <button className="login-button">Войти</button>
      </div>
      <div className='hamburger'>
        <FaBars />
      </div>
    </div>
  );
}
