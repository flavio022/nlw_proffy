import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

import "./styles.css";
import Header from "../../components/Header";
function TeacherList() {
  return (
    <div id="page-teacher-list" className="container">
      <Header title="Estes são os proffys disponívies.">
        <form id="search-teachers">
          <div className="input-block">
            <label htmlFor="subject">Matéria</label>
            <input type="text" id="subject" />
          </div>

          <div className="input-block">
            <label htmlFor="week_day">Dia da Semana</label>
            <input type="text" id="week_day" />
          </div>

          <div className="input-block">
            <label htmlFor="time">Hora</label>
            <input type="text" id="time" />
          </div>
        </form>
      </Header>
      <main>
        <article className="teacher-item">
          <header>
            <img
              src="https://avatars3.githubusercontent.com/u/20016088?s=460&u=dc6eb1d15e9c6f3ef394633fe68fbfa46f52bb16&v=4"
              alt=""
            />
            <div>
              <strong>Flávio Costa </strong>
              <span>Dança</span>
            </div>
          </header>
          <p>
            Entusiasta das melhores tecnologias de musica avançada.abs
            Apaixonado por dança indiana e forro. Tenho a missão de levar a
            dança idiana para vida das pessoas.
          </p>
          <footer>
            <p>
              Preço/hora
              <strong>R$ 80,00</strong>
            </p>
            <button type="button">
              <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
          </footer>
        </article>
      </main>
    </div>
  );
}

export default TeacherList;
