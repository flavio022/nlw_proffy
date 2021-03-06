import React from "react";
import logoImg from "../../assets/images/logo.svg";
import ladingImg from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClassesIcon from "../../assets/images/icons/give-classes.svg";
import purbleHeartIcon from "../../assets/images/icons/purple-heart.svg";

import "./styles.css";

function Landing() {
  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy" />
          <h2>Sua plataforma de estudos online</h2>
        </div>

        <img src={ladingImg} alt="" className="hero-image" />

        <div className="buttons-container">
          <a href="/study" className="study">
            <img src={studyIcon} alt="Estudar" />
            Estudar
          </a>
          <a href="give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aula" />
            Dar aula
          </a>
        </div>

        <span className="total-connections">
          Total de 200 conexões já realizadas{" "}
          <img src={purbleHeartIcon} alt="Coração roxo" />
        </span>
      </div>
    </div>
  );
}

export default Landing;
