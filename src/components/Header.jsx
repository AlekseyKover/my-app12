import button from "../images/watchs.svg";
import logo from "../images/Logo.svg";
export default function Header() {
  return (
    <header className="header">
      <div className="header_title">
        <img src={logo} className="header_logo"></img>
        <nav className="header_titleInfo1">
          <li className="header_text">
            <a href="#"></a>О проекте
          </li>
          <li className="header_text">
            <a href="#"></a>Предложения
          </li>
          <li className="header_text">
            <a href="#"></a>Контакты
          </li>
        </nav>
        <div className="header_titleInfo2">
          <h3 className="header_number">8 800 400 40 05</h3>
          <img src={button} className="header_button"></img>
        </div>
      </div>
      <section className="section">
        <div className="section__title">
          <h1 className="section__text">Тихий дом в самом центре Москвы</h1>
        </div>

        <h3 className="section__subbtitleText">
          Пресненский район, ул. Климашкина, 16
        </h3>
      </section>
    </header>
  );
}
