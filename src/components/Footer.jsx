import logo from "../images/AVENUE.svg";
import React, { useState } from "react";

export default function Footer() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState(""); // Ошибка для имени
  const [phoneError, setPhoneError] = useState(""); // Ошибка для телефона

  const [isSubmitted, setIsSubmitted] = useState(false); // Состояние успешной отправки

  const handleNameChange = (e) => {
    setName(e.target.value);
    setNameError("");
  };

  const handlePhoneChange = (e) => {
    let value = e.target.value;

    if (value === "") {
      value = "+7";
    } else if (!value.startsWith("+7")) {
      value = `+7${value.replace(/[^0-9]/g, "")}`;
    }

    setPhone(value);
    setPhoneError("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let isValid = true;

    if (name.trim() === "") {
      setNameError("Введите имя.");
      return;
    }

    if (!/^\+7\d{10}$/.test(phone)) {
      setPhoneError("Введите корректный номер телефона.");
      return;
    }

    if (!isValid) {
      return;
    }

    setIsSubmitted(true); // Устанавливаем состояние отправки
    setName("");
    setPhone("");
    setNameError("");
    setPhoneError("");
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName("");
    setPhone("");
  };

  return (
    <section className="footer">
      <div className="footer__block">
        <div className="footer__colums">
          <div className="footer__logo">
            <img className="footer__img" src={logo} alt="Логотип" />
          </div>
          <ul className="footer__list">
            <li className="footer__links">
              <p className="footer__subbtitle">О проекте</p>
            </li>
            <li className="footer__links">
              <p className="footer__subbtitle">Расположение</p>
            </li>
            <li className="footer__links">
              <p className="footer__subbtitle">Преимущества</p>
            </li>
            <li className="footer__links">
              <p className="footer__subbtitle">Стиль</p>
            </li>
            <li className="footer__links">
              <p className="footer__subbtitle">Предложения</p>
            </li>
            <li className="footer__links">
              <p className="footer__subbtitle">Зона комфорта</p>
            </li>
            <li className="footer__links">
              <p className="footer__subbtitle">Характеристики</p>
            </li>
            <li className="footer__links">
              <p className="footer__subbtitle">Партнеры</p>
            </li>
          </ul>
          <div className="footer__info">
            <h3 className="footer__title">Контакты</h3>
            <p className="footer__address">
              Москва, Пресненский район ул.Климашкина 16
            </p>
            <p className="footer__phone">8 800 400 40 05</p>
          </div>
          <h3 className="footer__infoName">Записаться на просмотр</h3>
          <form className="footer__inputMenu" onSubmit={handleSubmit}>
            {isSubmitted ? (
              <div>
                <p className="footer__successMessage">
                  В ближайшее время наш менеджер свяжется с Вами.
                </p>
                <button
                  className="footer__button footer__button--reset"
                  type="button"
                  onClick={handleReset}
                >
                  Отправить ещё раз
                </button>
              </div>
            ) : (
              <>
                <input
                  className="footer__input"
                  type="text"
                  placeholder="Имя"
                  value={name}
                  onChange={handleNameChange}
                />
                {nameError && <p className="footer__error">{nameError}</p>}
                <input
                  className="footer__input"
                  type="tel"
                  placeholder="Телефон"
                  value={phone}
                  onChange={handlePhoneChange}
                />
                {phoneError && <p className="footer__error">{phoneError}</p>}
                <button className="footer__button" type="submit">
                  Записаться
                </button>
              </>
            )}
            <p className="footer__agreement">
              Нажимая кнопку «Записаться» я принимаю условия Политики
              конфиденциальности
            </p>
          </form>
        </div>
        <div className="footer__infocompany">
          <p className="footer__signature">© AVENUE 2022</p>
          <p className="footer__signature">Разработка сайта UPROCK</p>
        </div>
      </div>
    </section>
  );
}
