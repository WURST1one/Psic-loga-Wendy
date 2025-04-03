import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Cabecalho.css';
import logoIcon from '../assets/game-icons_brain.svg';

const Cabecalho = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80, // Ajusta para não ficar colado no topo
        behavior: 'smooth', // Animação suave
      });
    }
    setIsMenuOpen(false);
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

      {/* Botão do menu hamburguer */}
      <button className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span className="menu-icon"></span>
      </button>

      {/* Menu de navegação */}
      <nav className={`navegacao ${isMenuOpen ? 'open' : ''}`}>
        <a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a>
        <a href="#abordagem-terapeutica" onClick={(e) => { e.preventDefault(); scrollToSection('abordagem-terapeutica'); }}>Sobre</a>
        <a href="#servicos-oferecidos" onClick={(e) => { e.preventDefault(); scrollToSection('servicos-oferecidos'); }}>Serviços</a>
      </nav>
    </header>
  );
};

export default Cabecalho;
