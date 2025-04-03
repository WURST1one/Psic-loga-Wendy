import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cabecalho.css';
import logoIcon from '../assets/game-icons_brain.svg';

const Cabecalho = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    setIsMenuOpen(false);
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('.cabecalho').offsetHeight;
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - headerHeight - 20,
        behavior: 'smooth',
      });
    }
  };

  return (
    <header className="cabecalho">
      <div className="logo-container">
        <img src={logoIcon} alt="Logo Icon" className="logo-icon" />
        <div className="logo-text">
          <span className="logo-wy">Wy</span>
          <span className="logo-psicologia">Psicologia</span>
        </div>
      </div>
      <button className="menu-toggle" onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>
      <nav className={`navegacao ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsMenuOpen(false)}>Home</Link>
        <a
          href="#abordagem-terapeutica"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('abordagem-terapeutica');
          }}
        >
          Sobre
        </a>
        <a
          href="#servicos-oferecidos"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection('servicos-oferecidos');
          }}
        >
          Serviços
        </a>
      </nav>
    </header>
  );
};

export default Cabecalho;
