import '../styles/Info.css'
import laptop from '../assets/laptop_video.png'

export default function Info(){
  return(
    <div className="info-wrapper">
      <h2 className='info-title'>Как происходит обучение на YtYt?</h2>
      <p className='info-paragraph'>Обучение должно быть комфортным. Поэтому мы разработали собственную платформу для обучения программированию. На ней вы можете не только изучать теорию, но и запускать готовые примеры и даже писать свой собственный код.</p>
      <img src={laptop} alt="laptop with a video inside" />
      <div className='method-cards'>
        <div className='info-card'>
          <h1>01</h1>
          <h3>Весь материал разбит на небольшие уроки</h3>
          <p>Теория и практика подаются маленькими порциями. Так вам будет легче усваивать новые знания.</p>
        </div>
        <div className='info-card'>
          <h1>02</h1>
          <h3>Обучение через практику</h3>
          <p>Всё, что вы узнали, вы тут же начинаете применять на практике. Вы сразу видите результаты своего труда.</p>
        </div>
        <div className='info-card'>
          <h1>03</h1>
          <h3>Нет ограничений по времени</h3>
          <p>Можно совмещать учёбу с работой и другими делами. Не нужно выпрашивать академический отпуск, если пришлось сделать перерыв.</p>
        </div>
      </div>
      <div className='action-container'>
        <button className='action-button'>Начать обучение</button>
        <p className='action-text'>Попробуйте, первые уроки бесплатны, но нужно пройти тестирование</p>
      </div>
    </div>
  );
}
