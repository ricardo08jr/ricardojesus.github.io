import { FaBriefcase, FaGraduationCap, FaReact, FaPython, FaPhp } from "react-icons/fa";
import { 
  SiPostgresql, 
  SiTypescript, 
  SiDocker, 
  SiGithubactions, 
  SiRedis,
  SiMysql,
  SiCpanel,
  SiHtml5,
  SiCss,
  SiJavascript,


} from "react-icons/si";
import DesignPattern from "../assets/CourseraDesignPatterns.png"
import ObjectOriented from "../assets/CourseraObjectOrientedDesign.png"


type EducationItem = {
  title: string;
  org: string;
  period: string;
  certificateImage?: string;
  certificateAlt?: string;
  learned?: string
};

const EXPERIENCES = [
  {
    title: "Analista Desenvolvedor — Sistema Jurídico",
    org: "Freelancer contratado por projeto",
    period: "Out 2025 — Atual",
    description:
      `Nessa experiência, analisei e desenvolvi uma RESTful API para um produto jurídico utilizando Python e FastApi,
estruturada em arquitetura em camadas e orientada a eventos. O sistema foi containerizado com Docker para garantir
ambientes reprodutíveis e padronização entre desenvolvimento, testes e deploy. Modelei fluxos Event-Driven (EDA)
utilizando Redis para mensageria e implementei o padrão Outbox para assegurar entrega confiável de eventos. Em
partes críticas do domínio, defini estratégias de retry e dead-letter. Automatizei o ciclo de entrega com pipelines de CI
via GitHub Actions, incluindo execução de testes unitários e de integração (inclusive fluxos assíncronos com Pytest).
Mantive foco constante em qualidade, cobertura de testes e documentação técnica, com participação ativa junto ao
cliente.`,
    technologies: [
      {name: "Python", icon:FaPython},
      { name: "PostgreSQL", icon: SiPostgresql },
      {name: "Redis", icon:SiRedis},
      { name: "Docker", icon: SiDocker },
      { name: "Github Actions", icon: SiGithubactions },
      { name: "React", icon: FaReact },
      { name: "TypeScript", icon: SiTypescript }
    ]
  },
  {
    title: "Desenvolvedor de Software ",
    org: "Daoster",
    period: "Mar 2025 - Atual",
    description:
      `Desenvolvi aplicação web full-stack com php com experiência na integração do motor de templates Smarty e forte
atuação em front-end (HTML, CSS, JavaScript). Analisei sistemas pré-existentes, mapeando fluxos entre back e front, e
projetei/implementei o backend completo com foco em manutenibilidade, boas práticas e resolução de problemas
reais. Realizei modelagem e otimização de banco de dados MySQL, deploy e administração de servidores via cPanel,
além de integrações com APIs. Atuei no atendimento direto ao cliente, levantamento de requisitos e definição de
funcionalidades, entregando manutenção corretiva e evolutiva em ambiente com metodologias ágeis`,
    technologies: [
      {name: "PHP", icon:FaPhp},
      { name: "MySQL", icon: SiMysql },
      { name: "cPanel", icon: SiCpanel },
      { name: "Smarty" , icon: null},
      { name: "HTML", icon: SiHtml5 },
      { name: "CSS", icon: SiCss },
      { name: "JavaScript", icon: SiJavascript }
    ]
  },
  {
    title: "Monitoria de Estudos de Matemática",
    org: "Etec Aristóteles Ferreira",
    period: "2022",
    description:
      `Liderei um grupo de estudos e atuei como monitor de Matemática para turmas do ensino médio. Planejei trilhas
      semanais, produzi listas de exercícios e simulados, corrigi atividades e ofereci atendimento individual para reforço de
      conteúdos. Facilitei encontros ao vivo, acompanhei a evolução dos alunos com indicadores simples de desempenho e
      ajustei a metodologia conforme feedbacks, promovendo participação, autonomia e melhor preparo para provas.`,
    technologies: [
      { name: "Comunicação didática", icon: null },
      { name: "Liderança de grupos", icon: null },
      { name: "Planejamento de aulas", icon: null }
    ]
  }
];

const EDUCATION: EducationItem[] = [
  {
    title: "Design Pattern",
    org: "University of Alberta",
    period: "2026",
    learned:
      "Segundo curso da especialização em Software Design & Architecture, focado em Design Patterns, princípios SOLID e Code Smells, com ênfase em estruturar sistemas orientados a objetos de forma modular e sustentável."
    ,certificateImage: DesignPattern,
    certificateAlt: "Certificado "
  },
  {
    title: "Object-Oriented Design",
    org: "University of Alberta",
    period: "2026",
    learned:
      "Curso focado em design orientado a objetos, modelagem com UML e técnicas de análise como User Stories e CRC Cards, enfatizando a importância de entender as regras de negócio antes da implementação."
    ,certificateImage: ObjectOriented,
    certificateAlt: "Certificado "
  },
  {
    title: "Ensino Médio com Habilitação Técnica em Desenvolvimento de Sistemas",
    org: "Etec Aristóteles Ferreira",
    period: "2022 - 2024",
    learned:
      `Durante 3 anos no Ensino Médio Técnico em Desenvolvimento de Sistemas, aprofundei lógica de programação e desenvolvi projetos com C#, ASP.NET, HTML, CSS, JavaScript, além de WinForms, UML, redes, segurança e criptografia.`
  },
  {
    title: "Análise e Desenvolvimento de Sistemas (Noturno)",
    org: "Fatec Rubens Lara “Santos”",
    period: "2025 - 2027",
    learned:
      `Atualmente cursando o 3º ciclo da graduação em Análise e Desenvolvimento de Sistemas, aprofundando conhecimentos em engenharia de software, arquitetura de sistemas e desenvolvimento de aplicações.`
  }
  
];

export default function ExperienceTimeline() {
  return (
    <>
      <section id="experience" className="experience-section reveal">
        <div className="container">
          <h2 className="section-title resume-title">
            <FaBriefcase aria-hidden="true" /> Minha Experiência
          </h2>

          <div className="experience-timeline">
            {EXPERIENCES.map((item) => (
              <article key={`${item.title}-${item.period}`} className="experience-item reveal">
                <span className="experience-dot" aria-hidden="true" />
                <div className="experience-content">
                  <p className="experience-period">{item.period}</p>
                  <h3>{item.title}</h3>
                  <p className="experience-org">{item.org}</p>
                  <p className="experience-description">{item.description}</p>

                  <div className="experience-tech" aria-label={`Tecnologias usadas em ${item.title}`}>
                    {item.technologies.map((tech) => {
                      const Icon = tech.icon;

                      return (
                        <span key={tech.name} className="experience-tech-item" title={tech.name}>
                          {Icon && <Icon aria-hidden="true" />}
                          <small>{tech.name}</small>
                        </span>
                      );
                    })}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="experience-section reveal">
        <div className="container">
          <h2 className="section-title resume-title">
            <FaGraduationCap aria-hidden="true" /> Minha Formação
          </h2>

          <div className="education-grid">
            {EDUCATION.map((item) => (
              <article key={`${item.title}-${item.period}`} className="education-card reveal">
                <p className="education-period">{item.period}</p>
                {item.certificateImage && (
                  <img
                    className="education-certificate"
                    src={item.certificateImage}
                    alt={item.certificateAlt ?? `Certificado do curso ${item.title}`}
                    loading="lazy"
                  />
                )}
                <h3>{item.title}</h3>
                <p>{item.org}</p>
                <p className="education-learned">{item.learned}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
