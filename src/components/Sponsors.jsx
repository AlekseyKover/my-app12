import tinkof from "../images/image 41.svg";

export default function Sponsors() {
  return (
    <section className="sponsors">
      <div className="sponsors__block">
        <div className="sponsors__info">
          <h2 className="sponsors__title">Партнеры</h2>
        </div>
        <ul className="sponsors__columns">
          <li className="sponsors__item">
            <img src={tinkof} alt="ВТБ24" className="sponsors__img" />
          </li>
          <li className="sponsors__item">
            <img src={tinkof} alt="Газпромбанк" className="sponsors__img" />
          </li>
          <li className="sponsors__item">
            <img src={tinkof} alt="Тинькофф Банк" className="sponsors__img" />
          </li>
          <li className="sponsors__item">
            <img src={tinkof} alt="Сбербанк" className="sponsors__img" />
          </li>
          <li className="sponsors__item">
            <img src={tinkof} alt="Nordgold" className="sponsors__img" />
          </li>
          <li className="sponsors__item">
            <img src={tinkof} alt="Лукойл" className="sponsors__img" />
          </li>
          <li className="sponsors__item">
            <img src={tinkof} alt="Лигастрой" className="sponsors__img" />
          </li>
          <li className="sponsors__item">
            <img src={tinkof} alt="Ключ" className="sponsors__img" />
          </li>
        </ul>
      </div>
    </section>
  );
}
