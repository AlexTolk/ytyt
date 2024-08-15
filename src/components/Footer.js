import logo from '../assets/logo.png'
import social from '../assets/social.png'
import '../styles/Footer.css'

export default function Footer() {
  return(
    <div className="footer-wrapper">
      <div className="top">
        <div className='left'>
          <div className="main-logo">
            <img src={logo} alt='company logo'/>
            <p>Школа<br/>программирования</p>
          </div>
          <img src={social} alt='social media icons' />
        </div>
        <div className='right'>
          <div className='nav-list'>
            <ul>
              <li>Чему вы научитесь</li>
              <li>Процесс обучения</li>
              <li>Стоимость</li>
              <li>Контакты</li>
              <li>Регистрация</li>
            </ul>
          </div>
          <div className='contact-info'>
            <div className='phone-email'>
              <p>+7 (499) 348 93 96</p>
              <p>info@ytyt.ru</p>
            </div>
            <div className='company-info'>
              <p>ИП Умаров Т. А.</p>
              <p>ИНН 745216229809</p>
              <p>ОГРНИП 315745200001358</p>
            </div>
          </div>
        </div>
      </div>
      <div className='bottom'>
        <p className='copyright'>© 2022 ytyt — Все права защищены</p>
        <p>Пользовательское соглашение</p>
        <p>Политика конфиденциальности</p>
      </div>
    </div>
  );
}
