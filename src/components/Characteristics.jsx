import baby from "../images/018.svg";
export default function Characteristics() {
  return (
    <section className="characteristics">
      <div className="characteristics__block">
        <div className="characteristics__info">
          <h2 className="characteristics__title">Характеристики</h2>
        </div>
        <div className="characteristics__colums">
          <ul className="characteristics__list">
            <li className="characteristics__link">
              <h3 className="characteristics__name">Система безопасности</h3>
              <p className="characteristics__subbtitle">
                Видеонаблюдение, охранная сигнализация по периметру дома,
                современная система контроля доступа
              </p>
            </li>
            <li className="characteristics__link">
              <h3 className="characteristics__name">Пожарная сигнализация</h3>
              <p className="characteristics__subbtitle">
                Автоматическая система пожаротушения в каждом апартаменте
              </p>
            </li>
            <li className="characteristics__link">
              <h3 className="characteristics__name">Территория</h3>
              <p className="characteristics__subbtitle">
                Огороженная и охраняемая территория
              </p>
            </li>
            <li className="characteristics__link">
              <h3 className="characteristics__name">Сервис</h3>
              <p className="characteristics__subbtitle">
                Две зоны ресепшн 24/7
              </p>
            </li>
            <li className="characteristics__link">
              <h3 className="characteristics__name">Кондиционирование</h3>
              <p className="characteristics__subbtitle">
                Центральная Системы кондиционирования
              </p>
            </li>
          </ul>
          <ul className="characteristics__list">
            <li className="characteristics__link">
              <h3 className="characteristics__name">Окна</h3>
              <p className="characteristics__subbtitle">
                Высококачественные стеклопакеты с повышенным уровнем
                шумоизоляции
              </p>
            </li>
            <li className="characteristics__link">
              <h3 className="characteristics__name">Паркинг</h3>
              <p className="characteristics__subbtitle">
                Наземный, охраняемый паркинг
              </p>
            </li>
            <li className="characteristics__link">
              <h3 className="characteristics__name">Лифты</h3>
              <p className="characteristics__subbtitle">
                Бесшумные премиальные лифты OTIS
              </p>
            </li>
            <li className="characteristics__link">
              <h3 className="characteristics__name">Вентиляция</h3>
              <p className="characteristics__subbtitle">
                Система принудительной приточно-вытяжной вентиляции
              </p>
            </li>
            <li className="characteristics__link">
              <h3 className="characteristics__name">Инфраструктура</h3>
              <p className="characteristics__subbtitle">
                Продуктовые магазины, собственная охраняемая детская площадка
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
