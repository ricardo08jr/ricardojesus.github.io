import { useState } from "react";
import projects from "../data/projects";
import type { Project } from "../types";
import ProjectModal from "./ProjectModal";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

export default function ProjectsBlock() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="projects-section reveal">
      <div className="container">
        <h2 className="section-title">Projetos</h2>

        <div className="projects-grid">
          {projects.map((p) => (
            <article
              key={p.id}
              className="project-card reveal"
              tabIndex={0}
              onClick={() => setSelected(p)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  setSelected(p);
                }
              }}
              role="button"
              aria-label={`Abrir detalhes do projeto ${p.title}`}
            >
              <div className="project-media">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="project-info">
                <h4>{p.title}</h4>
                {p.description.split("\n").map((linha, index) => (
                       <p key={index}>{linha}</p>
                 ))}

                <div className="project-footer">
                  <div className="tags">
                    {p.tech?.map((t) => (
                      <span className="tag" key={t}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="links" aria-hidden>
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

      <ProjectModal project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
