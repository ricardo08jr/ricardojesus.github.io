import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Perfil from "../assets/perfil-removebg-preview.png";
import Curriculo from "../assets/cv-ricardo-junior.pdf"
export default function IntroSection() {
  return (
    <section id="intro" className="intro-section reveal">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-left">
            <p className="lead">Olá, eu sou</p>
            <h1 className="hero-name">Ricardo Júnior</h1>
            <p className="hero-role">Desenvolvedor Fullstack • C# • React • DevOps</p>

            <p className="hero-desc">
              Desenvolvo aplicações web com foco em arquitetura limpa, performance e experiência do usuário.
              Transformo ideias em produtos.
            </p>

            <div className="actions">
              <a className="btn-primary" href="#projects">
                Ver projetos
              </a>
              <a
                className="btn-outline"
                href="https://wa.me/5513988654001?text=Ol%C3%A1%20Ricardo!"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
              <a className="btn-outline" href={Curriculo} download>
                <FaDownload /> Download CV
              </a>

              <a
                className="btn-icon"
                href="https://github.com/ricardo08jr"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                title="GitHub"
              >
                <FaGithub />
              </a>
              <a
                className="btn-icon"
                href="https://linkedin.com/in/ricardojúnior-dev"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                title="LinkedIn"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>

          <div className="intro-right">
            <div className="avatar-wrap">
              <img src={Perfil} alt="Ricardo" className="avatar" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
