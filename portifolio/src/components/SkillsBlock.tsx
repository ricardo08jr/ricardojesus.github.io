import { FaGithub, FaJava, FaNodeJs, FaPhp, FaPython, FaReact } from "react-icons/fa";
import type { CSSProperties } from "react";
import { SiMysql, SiPostgresql, SiRedis, SiTypescript } from "react-icons/si";
import { TbBrandCSharp } from "react-icons/tb";

const SKILLS = [
  { name: "C#", icon: <TbBrandCSharp />, color: "#512bd4" },
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "React", icon: <FaReact />, color: "#61dafb" },
  { name: "GitHub", icon: <FaGithub />, color: "#ffffff" },
  { name: "Python", icon: <FaPython />, color: "#3776ab" },
  { name: "PHP", icon: <FaPhp />, color: "#777bb4" },
  { name: "MySQL", icon: <SiMysql />, color: "#4479a1" },
  { name: "PostgreSQL", icon: <SiPostgresql />, color: "#4169e1" },
  { name: "Redis", icon: <SiRedis />, color: "#dc382d" },
  { name: "TypeScript", icon: <SiTypescript />, color: "#3178c6" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#5fa04e" }
];

export default function SkillsBlock() {
  return (
    <section className="skills-section reveal" id="skills">
      <div className="container">
        <h3 className="section-title center">Minhas Habilidades</h3>
        <p className="section-sub center skills-sub">
          
        </p>

        <div className="skills-showcase">
          {SKILLS.map((s) => (
            <div
              key={s.name}
              className="skill-showcase-card reveal"
              style={{ "--skill-brand": s.color } as CSSProperties}
            >
              <div className="skill-icon">{s.icon}</div>
              <span>{s.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
