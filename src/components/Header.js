import computer from '../assets/computer_img.png'
import '../styles/Header.css'

export default function Header() {
  return(
    <div className='header'>
      <div className="CTA">
      <div className="CTA__big">Школа <strong><strong className='red-brackets'>&#123;</strong><em>программирования</em><strong className='red-brackets'>&#125;</strong></strong><br/>для тех, кому нужны<br/>реальные навыки,<br/>а не просто сертификат</div>
      <div className="button-caption">
        <hr class='solid'></hr>
        <p>Пройдите тестирование, чтобы получить доступ к бесплатным вводным урокам</p>
      </div>
      <button className='test-button'>Пройти тестирование</button>
      </div>
      <img src={computer} alt="computer" className='header-img'/>
    </div>
  );
}
