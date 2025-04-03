import React from 'react';
import '../styles/ExperienciaProfissional.css';
import iconeAbraco from '../assets/woman.svg';
import iconeTelefone from '../assets/Telephone.svg';

const ExperienciaProfissional = () => {
  return (
    <section className=" experiencia-profissional">
      <h2 data-aos="fade-up">Experiência Profissional</h2>
      <div className=" experiencia-item psicologa-clinica" data-aos="fade-up" data-aos-delay="100">
        <div className=" experiencia-texto">
          <h3>Psicóloga Clínica (2010 - Presente)</h3>
          <ul>
            <li>Atendimento individual de adultos e adolescentes em terapia</li>
            <li>Desenvolvimento de programas de bem-estar emocional para empresas</li>
            <li>Coordenação de grupos de apoio para transtornos de ansiedade e depressão</li>
          </ul>
        </div>
        <img src={iconeAbraco} alt="Ícone de Abraço" />
      </div>
      <div className=" experiencia-item hospital-sao-lucas" data-aos="fade-up" data-aos-delay="200">
        <img src={iconeTelefone} alt="Ícone de Telefone" />
        <div className=" experiencia-texto">
          <h3>Hospital São Lucas (2008 - 2010)</h3>
          <ul>
            <li>Atendimento psicológico a pacientes internados e seus familiares</li>
            <li>Colaboração com equipes multidisciplinares para planejamento de tratamentos</li>
            <li>Condução de workshops e palestras sobre saúde mental</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ExperienciaProfissional;