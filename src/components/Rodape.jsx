import React from 'react';
import '../styles/Rodape.css';
import logoIcon from '../assets/game-icons_brain.svg';
import githubIcon from '../assets/Vector.svg';

const Rodape = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="rodape">
      <div className="rodape-conteudo">
        <div className="rodape-logo">
          <img src={logoIcon} alt="Logo Icon" />
          <div className="logo-text">
            <span className="logo-wy">Wy</span>
            <span className="logo-psicologia">Psicologia</span>
          </div>
        </div>
        <button className="scroll-to-top" onClick={scrollToTop}>
          ↑
        </button>
      </div>
      <p>
        Feito por{' '}
        <a href="https://github.com/WURST1one" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="GitHub" className="github-icon" />
        </a>
      </p>
      <p className="direitos-reservados">Direitos reservados</p>
    </footer>
  );
};

export default Rodape;