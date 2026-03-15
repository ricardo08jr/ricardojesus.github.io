
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

const EXPERIENCES = [
  {
    title: "Desenvolvedor Fullstack",
    org: "Freelancer / Projetos Próprios",
    period: "2023 — Atual"
  },
  {
    title: "Desenvolvedor .NET",
    org: "Projetos Acadêmicos e Colaborativos",
    period: "2022 — 2023"
  },
  {
    title: "Início da Jornada em Programação",
    org: "Estudos e Projetos Pessoais",
    period: "2020 — 2022"
  }
];

const EDUCATION = [
  {
    title: "Análise e Desenvolvimento de Sistemas",
    org: "Universidade / Formação Superior",
    period: "2023 — 2025"
  },
  {
    title: "Cursos de Desenvolvimento Web",
    org: "Alura, Rocketseat e Udemy",
    period: "2021 — 2023"
  },
  {
    title: "Base técnica em lógica e banco de dados",
    org: "Estudos práticos e projetos reais",
    period: "2020 — 2021"
  }
];

export default function ExperienceTimeline() {
  return (
    <section id="experience" className="experience-section reveal">
      <div className="container">
        <div className="resume-grid">
          <div>
            <h2 className="section-title resume-title">
              <FaBriefcase aria-hidden="true" /> Minha Experiência
            </h2>
            <div className="resume-list">
              {EXPERIENCES.map((item) => (
                <article key={`${item.title}-${item.period}`} className="resume-card reveal">
                  <p className="resume-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                </article>
              ))}
            </div>
          </div>

          <div id="education">
            <h2 className="section-title resume-title">
              <FaGraduationCap aria-hidden="true" /> Minha Formação
            </h2>
            <div className="resume-list">
              {EDUCATION.map((item) => (
                <article key={`${item.title}-${item.period}`} className="resume-card reveal">
                  <p className="resume-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p>{item.org}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
