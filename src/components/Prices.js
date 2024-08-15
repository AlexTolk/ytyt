import '../styles/Prices.css'
import payment from '../assets/payment.png'
import rouble from '../assets/rouble.png'
import webpage from '../assets/webpage.png'
import megaphone from '../assets/megaphone.png'


export default function Prices() {
  return(
    <div className='prices-wrapper'>
      <h2>Стоимость обучения</h2>
      <div className='points'>
        <div className='point'>
          <img src={webpage} alt=''/>
          <p>Весь курс разбит на несколько блоков. Оплата поэтапная вы платите только за тот блок, который сейчас проходите.</p>
        </div>
        <div className='point'>
          <img src={rouble} alt=''/>
          <p>Любой из блоков вы можете оплатить в рассрочку</p>
        </div>
        <div className='point'>
          <img src={payment} alt=''/>
          <p>Если передумаете учиться, то возврат можно оформить в любой момент. Возвращаем деньги за 3 рабочих дня.</p>
        </div>
      </div>
      <table>
        <thead>
          <tr>
            <td>Блок</td>
            <td>Стоимость (₽)</td>
            <td>Расчетное время обучения (мес.) *</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Введение в программирование</td>
            <td>Бесплатно</td>
            <td>0.5</td>
          </tr>
          <tr>
            <td>Основы программирования на Python</td>
            <td>9 900</td>
            <td>1</td>
          </tr>
          <tr>
            <td>Python, продвинутый уровень</td>
            <td>14 900</td>
            <td>2.5</td>
          </tr>
          <tr>
            <td>Сети + фреймворк Flask</td>
            <td>14 900</td>
            <td>2.5</td>
          </tr>
          <tr>
            <td>Базы данных</td>
            <td>14 900</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Фреймворк Django</td>
            <td>14 900</td>
            <td>2</td>
          </tr>
          <tr>
            <td>Разработка «боевого» проекта</td>
            <td>9 900</td>
            <td>1.5</td>
          </tr>
        </tbody>
        <tfoot>
        <tr>
            <td>Итого</td>
            <td>79 400</td>
            <td>12</td>
          </tr>
        </tfoot>
      </table>
      <p className='footnote'>* если занятиям уделяется около 20 часов в неделю</p>
      <div className='disclaimer'>
        <img src={megaphone} alt='megaphone icon' />
        <p>Все блоки проходятся строго по порядку. Пропустить какой-то блок или начать обучение с середины нельзя, даже если вы считаете, что уже знаете какую-то часть материала. Только так мы можем гарантировать, что вы получите все знания, предусмотренные учебной программой.</p>
        <button>Начать обучение</button>
      </div>
    </div>
  );
}
