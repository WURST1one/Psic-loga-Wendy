import React from 'react';
import '../styles/Cabecalho.css';
import logoIcon from '../assets/game-icons_brain.svg';

const Cabecalho = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const headerHeight = document.querySelector('.cabecalho').offsetHeight; // Altura do cabeçalho fixo
      const sectionPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: sectionPosition - headerHeight - 20, // Ajustar para o cabeçalho fixo e adicionar um pequeno espaço
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
      <nav className="navegacao">
        <a href="#home" onClick={scrollToTop}>Home</a>
        <a href="#abordagem-terapeutica" onClick={(e) => { e.preventDefault(); scrollToSection('abordagem-terapeutica'); }}>Sobre</a>
        <a href="#servicos-oferecidos" onClick={(e) => { e.preventDefault(); scrollToSection('servicos-oferecidos'); }}>Serviços</a>
      </nav>
    </header>
  );
};

export default Cabecalho;