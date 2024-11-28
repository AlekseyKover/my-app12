
import baby from '../images/018.svg';
export default function Advantages() {
    return (
        <section className="advantages">
           <div className="advantages__block">
                <div className="advantages__info">
                    <h2 className="advantages__title">
                    Преимущества
                    </h2>
                    <ul className="advantages__list">
                        <li className="advantages__link">Видовые характеристики</li>
                        <li className="advantages__link">Детская зона</li>
                        <li className="advantages__link">Пентхаусы: 5м высота потолка</li>
                        <li className="advantages__link">Просторные террасы</li>
                        <li className="advantages__link">Приватность</li>
                        <li className="advantages__link">Собственный ритейл</li>
                        <li className="advantages__link">Уникальная архитектура</li>
                        <li className="advantages__link">Фитнес зона</li>
                    </ul>
                </div>
                <div className="advantages__image">
                    <img className="advantages__imageBaby "src={baby} />
                </div>
           </div>
        </section>
        
      
    );
    
  }