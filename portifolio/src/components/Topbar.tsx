import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Topbar() {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [theme, setTheme] = useState<"dark" | "light">(
    (localStorage.getItem("pj_theme") as "dark" | "light") ?? "dark"
  );

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("pj_theme", theme);
  }, [theme]);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header className={`topbar ${isScrolled ? "topbar--stuck" : ""}`}>
        <div className="topbar-inner">
          <div className="brand">
            <img src="/assets/logo.png" alt="logo" className="brand-logo" />
            <span className="brand-name">Ricardo Júnior</span>
          </div>

          <nav className={`navlinks ${open ? "open" : ""}`}>
            <a href="#intro">Início</a>
            <a href="#about">Sobre</a>
            <a href="#experience">Experiência</a>
            <a href="#education">Educação</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projetos</a>
            <a href="#contact">Contato</a>
          </nav>

          <div className="controls">
            <button className="menu-btn" onClick={() => setOpen((s) => !s)}>
              ☰
            </button>
          </div>
        </div>
      </header>

      <button
        className="theme-float"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        title="Alternar tema"
        aria-label="Alternar tema"
      >
        <span className="theme-float-icon">{theme === "dark" ? <FaSun /> : <FaMoon />}</span>
        <span className="theme-float-label">{theme === "dark" ? "Tema claro" : "Tema escuro"}</span>
      </button>
    </>
  );
}
