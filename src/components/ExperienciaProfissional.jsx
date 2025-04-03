import React from 'react';
import '../styles/ExperienciaProfissional.css';
import psicologaClinicaImg from '../assets/woman.svg'; // Imagem "abraço"
import hospitalSaoLucasImg from '../assets/Telephone.svg'; // Imagem "telefone"

const ExperienciaProfissional = () => {
  return (
    <section className="experiencia-profissional" id="experiencia-profissional">
      <h2>Experiência Profissional</h2>
      <div className="experiencia-item psicologa-clinica">
        <div className="experiencia-texto">
          <h3>Psicóloga Clínica (2010 - Presente)</h3>
          <ul>
            <li>Atendimento individual e em grupo, com foco em saúde mental e bem-estar emocional.</li>
            <li>Desenvolvimento de planos terapêuticos personalizados para cada paciente.</li>
            <li>Supervisão de estagiários e colaboração com outros profissionais da saúde.</li>
          </ul>
        </div>
        <img src={psicologaClinicaImg} alt="Psicóloga Clínica" />
      </div>
      <div className="experiencia-item hospital-sao-lucas">
        <div className="experiencia-texto">
          <h3>Hospital São Lucas (2008 - 2010)</h3>
          <ul>
            <li>Atuação em psicologia hospitalar, com suporte a pacientes internados.</li>
            <li>Acompanhamento psicológico a familiares de pacientes em UTI.</li>
            <li>Participação em equipes multidisciplinares para planejamento de alta hospitalar.</li>
          </ul>
        </div>
        <img src={hospitalSaoLucasImg} alt="Hospital São Lucas" />
      </div>
    </section>
  );
};

export default ExperienciaProfissional;