import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import type { Project } from "../types";

type Props = {
  project: Project | null;
  onClose: () => void;
};

export default function ProjectModal({ project, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!project) return;

    previouslyFocusedRef.current = document.activeElement as HTMLElement | null;

    if (typeof document !== "undefined") {
      document.body.style.overflow = "hidden";
    }

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      } else if (e.key === "Tab") {
        // Focus trap
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusable = dialog.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
        );
        if (focusable.length === 0) {
          e.preventDefault();
          return;
        }
        const first = focusable[0];
        const last = focusable[focusable.length - 1];

        if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }

        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };

    document.addEventListener("keydown", onKey);
    // focus the dialog
    setTimeout(() => {
      const dialog = dialogRef.current;
      const firstFocusable = dialog?.querySelector<HTMLElement>(
        'button, a, input, textarea, [tabindex]:not([tabindex="-1"])'
      );
      (firstFocusable ?? dialog)?.focus();
    }, 10);

    return () => {
      document.removeEventListener("keydown", onKey);
      if (typeof document !== "undefined") {
        document.body.style.overflow = "";
      }
      if (previouslyFocusedRef.current) {
        previouslyFocusedRef.current.focus();
      }
    };
  }, [project, onClose]);

  if (!project) return null;

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === overlayRef.current) onClose();
  };

  const videoUrl = project.video ?? project.demo ?? undefined;

  const renderMedia = () => {
    if (videoUrl && /youtube\.com|youtu\.be/.test(videoUrl)) {
      let id = "";
      try {
        const url = new URL(videoUrl.includes("http") ? videoUrl : `https://${videoUrl}`);
        if (url.hostname.includes("youtu.be")) {
          id = url.pathname.slice(1);
        } else {
          id = url.searchParams.get("v") ?? "";
        }
      } catch {
        id = "";
      }
  
      const src = id ? `https://www.youtube.com/embed/${id}` : videoUrl;
  
      return (
        <div className="modal-media">
          <div className="video-wrap">
            <iframe
              title={`${project.title} — demo`}
              src={src}
              frameBorder={0}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      );
    }
  
    if (videoUrl) {
      return (
        <div className="modal-media">
          <div className="video-wrap">
            <video controls src={videoUrl} style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      );
    }
  
    if (project.image) {
      return (
        <div className="modal-media">
          <div className="img-wrap" style={{ position: "relative" }}>
            <img
              src={project.image}
              alt={project.title}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div
              className="unavailable-overlay"
              style={{
                position: "absolute",
                inset: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "rgba(0,0,0,0.45)",
                color: "#fff",
                fontWeight: 600,
                fontSize: "1.1rem",
                textAlign: "center",
                padding: "1rem",
              }}
            >
              Vídeo indisponível
            </div>
          </div>
        </div>
      );
    }
  
    return (
      <div className="modal-media">
        <div
          className="no-media"
          style={{
            width: "100%",
            height: 300,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#f2f2f2",
            color: "#666",
            borderRadius: 8,
          }}
        >
          Vídeo indisponível
        </div>
      </div>
    );
  };

  return createPortal(
    <div
      className="modal-overlay"
      role="dialog"
      aria-modal="true"
      aria-label={`${project.title} — detalhes do projeto`}
      ref={overlayRef}
      onMouseDown={handleOverlayClick}
    >
      <div
        className="modal-content reveal active"
        ref={dialogRef}
        onMouseDown={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <div className="modal-header">
          <h3>{project.title}</h3>
          <button aria-label="Fechar modal" className="modal-close" onClick={onClose}>
            ✕
          </button>
        </div>

        <div className="modal-body">
          {renderMedia()}

          <div className="modal-details">
            <div className="modal-details-body">
                <p className="modal-description">{project.description}</p>

                {project.details && (
                  <>
                    <h4>Detalhes</h4>
                    <div className="modal-longtext">{project.details}</div>
                  </>
                )}
            </div>
            <div className="modal-tags">
              {(project.tech ?? []).map((t) => (
                <span className="tag" key={t}>
                  {t}
                </span>
              ))}
            </div>

            <div className="modal-actions">
              {project.demo && (
                <a className="btn btn-outline" href={project.demo} target="_blank" rel="noreferrer">
                  Ver Demo
                </a>
              )}
              {project.repo && (
                <a className="btn btn-primary" href={project.repo} target="_blank" rel="noreferrer">
                  Ver Repositório
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
}
