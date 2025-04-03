import React from 'react';
import '../styles/ServicosOferecidos.css';
import fotoPsicologa from '../assets/Rectangle 9.png';
import instagramIcon from '..//assets/Instagram.svg';
import whatsappIcon from '../assets/WhatsApp.svg';

const ServicosOferecidos = () => {
  return (
    <section className="servicos-oferecidos" id="servicos-oferecidos">
      <div className="servicos-conteudo">
        <div className="servicos-imagem" data-aos="fade-right">
          <img src={fotoPsicologa} alt="Psicóloga" />
        </div>
        <div className="servicos-texto" data-aos="fade-left">
          <h2>Serviços Oferecidos</h2>
          <ul>
            <li>Terapia Individual: Sessões focadas no desenvolvimento pessoal e no tratamento de transtornos emocionais.</li>
            <li>Terapia de Casal: Auxílio a casais na resolução de conflitos e na melhora da comunicação.</li>
            <li>Terapia de Grupo: Grupos de apoio para pessoas com experiências e desafios semelhantes.</li>
            <li>Workshops e Palestras: Eventos sobre temas variados de saúde mental e bem-estar.</li>
          </ul>
        </div>
      </div>
      <div className="contato" data-aos="fade-up">
        <h3>Contato:</h3>
        <p>
          Estou à disposição para agendar uma consulta ou responder a qualquer pergunta que você possa ter. Entre em contato comigo através do{' '}
          <a href="https://www.instagram.com/psico_wendy?igsh=bDVhbWh3ajd6N3dw" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>{' '}
          ou pelo{' '}
          <a href="https://wa.me/+5511991605088" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" className="social-icon" />
          </a>{' '}
          (12) 3456-7890.
        </p>
      </div>
    </section>
  );
};

export default ServicosOferecidos;