

export default function SiteFooter() {
  return (
    <footer className="site-footer reveal">
      <div className="container footer-inner">
        <p>© {new Date().getFullYear()} Ricardo Jesus. Todos os direitos reservados. Feito com ReactJS</p>
        <nav className="footer-nav">
          <a href="#intro">Início</a>
          <a href="#about">Sobre</a>
          <a href="#projects">Projetos</a>
        </nav>
      </div>
    </footer>
  );
}
