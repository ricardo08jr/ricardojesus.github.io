import { useEffect, useState } from "react";
import testimonials from "../data/testimonials";

export default function TestimonialsBlock() {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="container">
        <h2 className="section-title">Feedback</h2>

        <div className="testimonials-wrap">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className={`testimonial ${i === index ? "active" : ""}`}
              aria-hidden={i !== index}
            >
              <img src={t.avatar ?? "/assets/profile.jpg"} alt={t.name} className="t-avatar" />
              <h4>{t.name}</h4>
              <small className="t-role">{t.role}</small>
              <p className="t-text">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
