import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Cabecalho from './components/Cabecalho';
import Introducao from './components/Introducao';
import FormacaoAcademica from './components/FormacaoAcademica';
import ExperienciaProfissional from './components/ExperienciaProfissional';
import AbordagemTerapeutica from './components/AbordagemTerapeutica';
import ServicosOferecidos from './components/ServicosOferecidos';
import Rodape from './components/Rodape';

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });

    const sections = document.querySelectorAll('section');
    const body = document.body;

    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionClass = entry.target.className;
          if (sectionClass.includes('introducao')) {
            body.style.backgroundColor = '#F5D6D6';
          } else if (sectionClass.includes('formacao-academica')) {
            body.style.backgroundColor = '#8B1E3F';
          } else if (sectionClass.includes('experiencia-profissional')) {
            body.style.backgroundColor = '#FFFFFF';
          } else if (sectionClass.includes('abordagem-terapeutica')) {
            body.style.backgroundColor = '#8B1E3F';
          } else if (sectionClass.includes('servicos-oferecidos')) {
            body.style.backgroundColor = '#F5D6D6';
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <div className="app-container">
      <Cabecalho />
      <main style={{ paddingTop: '70px' }}>
        <Introducao />
        <FormacaoAcademica />
        <ExperienciaProfissional />
        <AbordagemTerapeutica />
        <ServicosOferecidos />
      </main>
      <Rodape />
    </div>
  );
}

export default App;