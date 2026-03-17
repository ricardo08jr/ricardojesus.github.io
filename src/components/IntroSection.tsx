import { FaDownload, FaGithub, FaLinkedin } from "react-icons/fa";
import Perfil from "../assets/perfil-removebg-preview.png";
import { useTranslation } from "react-i18next";
export default function IntroSection() {
  const { t } = useTranslation();
  return (
    <section id="intro" className="intro-section reveal">
      <div className="container">
        <div className="intro-grid">
          <div className="intro-left">
            <p className="lead">{t("intro.greeting")}</p>
            <h1 className="hero-name">{t("intro.name")}</h1>
            <p className="hero-role">{t("intro.roles")}</p>

            <p className="hero-desc">
              {t("intro.description")}
            </p>

            <div className="actions">
              <a className="btn-primary" href="#projects">
                {t("intro.buttons.projects")}
              </a>
              <a
                className="btn-outline"
                href="https://wa.me/5513988654001?text=Ol%C3%A1%20Ricardo!"
                target="_blank"
                rel="noreferrer"
              >
                {t("intro.buttons.whatsapp")}
              </a>
              <a className="btn-outline" href={t("intro.buttons.path-cv")} download>
                <FaDownload /> {t("intro.buttons.cv")}
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
