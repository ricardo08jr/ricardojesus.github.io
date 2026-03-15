

export default function AboutSection() {
  return (
    <section id="about" className="about-section reveal">
      <div className="container">
        <h2 className="section-title">Sobre Mim</h2>
        <p className="about-text">
          Sou um desenvolvedor de software de 19 anos, morador de Santos (SP), com 4 anos de prática em programação e 1 ano
        e 3 meses de experiência profissional. Apaixonado por resolver problemas e aprender novas tecnologias, busco
        oportunidades para continuar crescendo na área de tecnologia com foco em boas práticas como DDD, TDD e
        arquitetura limpa.
        </p>

        <div className="about-stats">
          <div className="stat reveal">
            <strong>4+</strong>
            <span>Anos</span>
          </div>
          <div className="stat reveal">
            <strong>10+</strong>
            <span>Tecnologias</span>
          </div>
        </div>
      </div>
    </section>
  );
}
