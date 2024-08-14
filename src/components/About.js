import '../styles/About.css'
import learners from '../assets/learners.png'
import typing from '../assets/typing.png'

export default function About() {
  return(
    <div className="about-wrapper">
      <div className='image-box'>
        <img src={learners} alt='two people learning code'/>
      </div>
      <div className='text-box'>
        <h3 className='text-box__title'>Помощь и поддержка</h3>
        <p>Если в процессе обучения возникнут сложности, вы всегда сможете задать вопрос своему наставнику.<br/><br/>Раз в несколько уроков вы будете получать большое задание, которое нужно будет сдавать на проверку код-ревьюеру. Он внимательно изучит ваш код, найдет ошибки и поможет вам стать лучше.</p>
      </div>
      <div className='text-box'>
      <h3 className='text-box__title'>Методика обучения</h3>
      <p>Весь учебный материал структурирован по принципу «спирального обучения». Сначала вы получаете базовые знания, а затем на каждом витке спирали углубляетесь в изученные темы, доводя их понимание до совершенства. Такой подход упрощает обучение и гарантирует, что вы не пропустите ничего важного.</p>
      </div>
      <div className='image-box'>
        <img src={typing} alt='coding'/>
      </div>

    </div>
  );
}
