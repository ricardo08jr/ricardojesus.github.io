
import projects from "../data/projects";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsBlock() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h2 className="section-title">Projetos</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <article key={p.id} className="project-card">
              <div className="project-media">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="project-info">
                <h4>{p.title}</h4>
                <p>{p.description}</p>

                <div className="project-footer">
                  <div className="tags">
                    {p.tech?.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="links">
                    {p.demo && (
                      <a href={p.demo} target="_blank" rel="noreferrer" title="Demo">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {p.repo && (
                      <a href={p.repo} target="_blank" rel="noreferrer" title="Repo">
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
