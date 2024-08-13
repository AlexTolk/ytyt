import '../styles/Features.css';
import coder from '../assets/coder.png';
import calendar from '../assets/calendar.png';
import code from '../assets/code.png';
import dialogue from '../assets/dialogue.png';
import monitor from '../assets/monitor.png';
import payment from '../assets/payment.png';
import rouble from '../assets/rouble.png';
import whirlpool from '../assets/whirlpool.png';

export default function Feature() {
  return(
    <div className="features">
      <h2>Какие технологии вы изучите:</h2>
      <div className="stack">
        <img src={coder} alt="man coding" />
        <div className='stack__list'>
          <ul>
            <li style={{backgroundColor:'#5096FF'}}>Язык программирования Python</li>
            <li style={{backgroundColor:'#4BD071'}}>Сети</li>
            <li style={{backgroundColor:'#FF6F50'}}>Базы данных</li>
            <li style={{backgroundColor:'#4BD071'}}>Фреймворки Flask и Django</li>
            <li style={{backgroundColor:'#50C0FF'}}>Отладка и тестирование</li>
            <li style={{backgroundColor:'#4B77B9'}}>Docker</li>
            <li style={{backgroundColor:'#AF93FF'}}>Git</li>
          </ul>
          <p>Это необходимый минимум для современного backend-разработчика</p>
        </div>
      </div>
      <h2>Обучение в YtYt – это удобно и результативно</h2>
      <div className='features__cards'>
        <div className='card'>
          <img src={code} alt='html code icon'/>
          <h3>Огромное количество практики</h3>
          <p>Более 500 самостоятельных заданий и 20 полноценных больших проектов</p>
        </div>
        <div className='card'>
          <img src={whirlpool} alt='html code icon'/>
          <h3>Современные методики обучения</h3>
          <p>Спиральное обучение: погружаемся в материал постепенно, виток за витком</p>
        </div>
        <div className='card'>
          <img src={monitor} alt='html code icon'/>
          <h3>Простое и понятное изложение</h3>
          <p>Вместо заумных терминов – примеры из реального мира</p>
        </div>
        <div className='card'>
          <img src={calendar} alt='html code icon'/>
          <h3>Гибкий график занятий</h3>
          <p>Учитесь в любое время в удобном для вас темпе</p>
        </div>
        <div className='card'>
          <img src={dialogue} alt='html code icon'/>
          <h3>Прямая связь с опытными программистами</h3>
          <p>Задавайте вопросы и отправляйте свой код на проверку</p>
        </div>
        <div className='card'>
          <img src={rouble} alt='html code icon'/>
          <h3>Оплата небольшими частями</h3>
          <p>Платите только за тот материал, который сейчас изучаете, а не за весь курс сразу</p>
        </div>
        <div className='card'>
          <img src={payment} alt='html code icon'/>
          <h3>Быстрый и легкий возврат</h3>
          <p>Если передумаете учиться – вернем деньги за 3 рабочих дня</p>
        </div>
      </div>
    </div>
  );
}
