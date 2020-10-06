import React from "react";
import backIcon from "../../assets/images/icons/back.svg";
import logoImg from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";
import "./styles.css";

interface HeaderProps {
  title: string;
}
const Header: React.FC<HeaderProps> = props => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImg} alt="Proffy" />
      </div>

      <div className="header-content">
        <strong>{props.title}</strong>
        {props.children}
      </div>
    </header>
  );
};

export default Header;