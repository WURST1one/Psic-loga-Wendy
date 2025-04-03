import React from 'react';
import '../styles/Introducao.css';
import fotoPsicologa from '../assets/Picture.svg';

const Introducao = () => {
  return (
    <section className="introducao" id="home">
      <div className="introducao-conteudo aos-init aos-animate" data-aos="fade-right">
        <h1>Psicóloga Wendy Yope</h1>
        <p>
          Olá, sou Wendy, psicóloga com mais de 10 anos de experiência na área clínica. Minha missão é ajudar pessoas a superarem desafios emocionais e a encontrarem equilíbrio e bem-estar.
          Atuo com uma abordagem acolhedora, empática e personalizada, sempre respeitando a individualidade de cada cliente.
        </p>
        <a href="https://wa.me/+5511991605088" target="_blank" rel="noopener noreferrer">
          <button>Agende sua consulta</button>
        </a>
      </div>
      <div className="introducao-imagem aos-init aos-animate" data-aos="fade-left">
        <img src={fotoPsicologa} alt="Wendy Yope" />
      </div>
    </section>
  );
};

export default Introducao;
