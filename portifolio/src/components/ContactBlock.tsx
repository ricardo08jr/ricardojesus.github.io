import { useState } from "react";

export default function ContactBlock() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSend() {
    // validação simples
    if (name.length < 3 || email.length < 5 || message.length < 20 || subject.length < 5) {
      alert("Preencha os campos corretamente (mensagem >= 20 caracteres).");
      return;
    }

    const texto = `Olá Ricardo! Meu nome é ${encodeURIComponent(
      name
    )}.%0ATelefone: ${encodeURIComponent(phone)}%0AAssunto: ${encodeURIComponent(
      subject
    )}%0AMensagem: ${encodeURIComponent(message)}%0AEmail: ${encodeURIComponent(email)}`;

    window.open(`https://wa.me/5513988654001?text=${texto}`, "_blank");
  }

  return (
    <section id="contact" className="contact-section reveal">
      <div className="container">
        <h2 className="section-title">Contato</h2>

        <div className="contact-grid">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
            className="contact-form reveal"
          >
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Nome completo *" required />
            <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email *" type="email" required />
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Telefone" />
            <input value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Assunto *" required />
            <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Mensagem *" rows={6} required />
            <button type="submit" className="btn-primary">Enviar Mensagem</button>
          </form>

          <aside className="contact-info reveal">
            <h3>Informações</h3>
            <p><strong>Email:</strong> ricardo08jr@hotmail.com</p>
            <p><strong>WhatsApp:</strong> +55 (13) 98865-4001</p>
            <p><strong>Local:</strong> Santos, SP - Brasil</p>

            <div className="socials">
              <a href="https://linkedin.com/in/ricardojúnior-dev" target="_blank"
                rel="noreferrer" aria-label="LinkedIn">LinkedIn</a> • <a href="https://github.com/ricardo08jr" target="_blank"
                rel="noreferrer" aria-label="GitHub">GitHub</a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
