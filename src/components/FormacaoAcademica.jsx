import React from 'react';
import '../styles/FormacaoAcademica.css';
import iconeCerebro from '../assets/Brain.svg';

const FormacaoAcademica = () => {
  return (
    <section className="formacao-academica">
      <div className="formacao-titulo">
        <h2 data-aos="fade-up">Formação Acadêmica</h2>
        <div className="formacao-lista" data-aos="fade-up" data-aos-delay="100">
          <p>Graduação em Psicologia - Universidade XYZ, 2008</p>
          <p>Pós-Graduação em Terapia Cognitivo-Comportamental - Instituto ABC, 2011</p>
          <p>Mestrado em Psicologia Clínica - Universidade DEF, 2015</p>
        </div>
      </div>
      <div className="formacao-imagem" data-aos="fade-right">
        <img src={iconeCerebro} alt="Ícone de Cérebro" />
      </div>
    </section>
  );
};

export default FormacaoAcademica;