import { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  Film,
  Image as ImageIcon,
  CheckCircle2,
  Share2,
  Sparkles,
} from "lucide-react";
import { projects, Project, ProjectImage, ProjectVideo } from "../data/projects";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  // Find project
  const projectIndex = projects.findIndex((p) => p.id === id);
  const project: Project | undefined = projects[projectIndex];

  // Prev / Next projects
  const prevProject = projectIndex > 0 ? projects[projectIndex - 1] : null;
  const nextProject =
    projectIndex !== -1 && projectIndex < projects.length - 1
      ? projects[projectIndex + 1]
      : null;

  // Modals for enlarging media
  const [enlargedVideo, setEnlargedVideo] = useState<ProjectVideo | null>(null);
  const [enlargedImage, setEnlargedImage] = useState<ProjectImage | null>(null);
  const [copied, setCopied] = useState(false);

  // Close modals on Escape key
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setEnlargedVideo(null);
        setEnlargedImage(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleShare() {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  }

  if (!project) {
    return (
      <div className="not-found-screen">
        <div className="container" style={{ textAlign: "center", padding: "8rem 2rem" }}>
          <p className="not-found-code">404</p>
          <h2 className="not-found-title">Project Not Found</h2>
          <p className="not-found-desc">
            The project you're looking for does not exist or has been moved.
          </p>
          <Link to="/" className="btn-primary" style={{ display: "inline-flex", marginTop: "1.5rem" }}>
            <ArrowLeft size={16} />
            <span>Return to Portfolio Home</span>
          </Link>
        </div>
      </div>
    );
  }

  const hasMedia = project.videos.length > 0 || project.images.length > 0;

  return (
    <div className="project-detail-screen">
      {/* Top Banner Navigation */}
      <div className="detail-top-bar">
        <div className="container">
          <div className="detail-top-bar-inner">
            <button onClick={() => navigate(-1)} className="back-button" aria-label="Go back">
              <ArrowLeft size={16} />
              <span>Back to Overview</span>
            </button>
            <div className="detail-breadcrumbs">
              <Link to="/">Portfolio</Link>
              <span className="breadcrumb-separator">/</span>
              <span className="breadcrumb-current">{project.title}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <header className="detail-header">
        <div className="container">
          <div className="detail-header-meta">
            <span className="detail-category-badge">{project.category}</span>
            <span className="detail-tagline-text">{project.tagline}</span>
          </div>

          <h1 className="detail-main-title">{project.title}</h1>
          <p className="detail-main-subtitle">{project.subtitle}</p>

          <p className="detail-lead-desc">{project.description}</p>

          {/* Quick Actions */}
          <div className="detail-actions">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>View Source Code</span>
              </a>
            )}
            <button onClick={handleShare} className="btn-ghost">
              <Share2 size={15} />
              <span>{copied ? "Link Copied!" : "Share Project"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Metrics Banner */}
      {project.metrics.length > 0 && (
        <section className="detail-metrics-section">
          <div className="container">
            <div className="detail-metrics-grid">
              {project.metrics.map((m, idx) => (
                <div key={idx} className="metric-box">
                  <span className="metric-value">{m.value}</span>
                  <span className="metric-label">{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* MEDIA SHOWCASE: VIDEOS & PHOTOS */}
      {hasMedia && (
        <section className="detail-media-section">
          <div className="container">
            <div className="media-section-header">
              <div className="section-label-with-icon">
                <Sparkles size={14} />
                <span>PROJECT MEDIA &amp; DEMOS</span>
              </div>
              <h2 className="media-section-title">Visual Showcase</h2>
              <p className="media-section-subtitle">
                Watch full gameplay, build progress, and high-resolution architecture diagrams. You can play videos directly or enlarge them to theater mode.
              </p>
            </div>

            {/* Videos */}
            {project.videos.length > 0 && (
              <div className="project-videos-group">
                <h3 className="media-subgroup-title">
                  <Film size={18} />
                  <span>Demonstration Videos ({project.videos.length})</span>
                </h3>

                <div className="video-cards-grid">
                  {project.videos.map((vid, idx) => (
                    <div key={idx} className="video-player-card">
                      <div className="video-container">
                        <video
                          src={vid.src}
                          controls
                          playsInline
                          preload="metadata"
                          className="embedded-video"
                        />
                        <button
                          onClick={() => setEnlargedVideo(vid)}
                          className="enlarge-video-btn"
                          title="Enlarge video (Theater Mode)"
                        >
                          <Maximize2 size={16} />
                          <span>Enlarge Video</span>
                        </button>
                      </div>
                      <div className="video-card-meta">
                        <h4 className="video-title">{vid.title}</h4>
                        {vid.description && (
                          <p className="video-desc">{vid.description}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Images */}
            {project.images.length > 0 && (
              <div className="project-images-group">
                <h3 className="media-subgroup-title">
                  <ImageIcon size={18} />
                  <span>High-Resolution Screenshots &amp; Diagrams ({project.images.length})</span>
                </h3>

                <div className="images-cards-grid">
                  {project.images.map((img, idx) => (
                    <div
                      key={idx}
                      className="image-preview-card"
                      onClick={() => setEnlargedImage(img)}
                      role="button"
                      tabIndex={0}
                      onKeyDown={(e) => e.key === "Enter" && setEnlargedImage(img)}
                    >
                      <div className="image-wrapper">
                        <img src={img.src} alt={img.alt} loading="lazy" />
                        <div className="image-hover-overlay">
                          <div className="image-expand-icon">
                            <Maximize2 size={20} />
                          </div>
                          <span>Click to Enlarge</span>
                        </div>
                      </div>
                      {img.caption && (
                        <p className="image-card-caption">{img.caption}</p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      {/* IN-DEPTH CASE STUDY & ARCHITECTURE */}
      <section className="detail-content-section">
        <div className="container">
          <div className="detail-layout">
            {/* Main content body */}
            <div className="detail-main-content">
              {/* Highlight callout */}
              <div className="detail-highlight-banner">
                <div className="highlight-banner-header">
                  <Sparkles size={16} />
                  <strong>{project.highlightLabel}</strong>
                </div>
                <p>{project.highlight}</p>
              </div>

              {/* Sections */}
              {project.sections.map((sec, idx) => (
                <div key={idx} className="case-study-section">
                  <h3 className="case-study-title">{sec.title}</h3>
                  <p className="case-study-text">{sec.content}</p>
                  {sec.bullets && sec.bullets.length > 0 && (
                    <ul className="case-study-bullets">
                      {sec.bullets.map((b, bIdx) => (
                        <li key={bIdx}>
                          <CheckCircle2 size={16} className="bullet-icon" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>

            {/* Sidebar with tech specifications */}
            <aside className="detail-sidebar">
              <div className="sidebar-card">
                <h4 className="sidebar-heading">Project Information</h4>
                <div className="sidebar-spec-row">
                  <span className="spec-label">Domain</span>
                  <span className="spec-val">{project.category}</span>
                </div>
                <div className="sidebar-spec-row">
                  <span className="spec-label">Author</span>
                  <span className="spec-val">Shubham Bhatia (IIT Mandi)</span>
                </div>
                <div className="sidebar-spec-row">
                  <span className="spec-label">Code Access</span>
                  <span className="spec-val">
                    {project.githubUrl ? "Open Source" : "Private / Embedded"}
                  </span>
                </div>
              </div>

              <div className="sidebar-card">
                <h4 className="sidebar-heading">Technologies &amp; Libraries</h4>
                <div className="sidebar-tech-chips">
                  {project.tech.map((t) => (
                    <span key={t} className="tech-chip">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Pagination Footer */}
      <section className="detail-pagination-section">
        <div className="container">
          <div className="pagination-grid">
            {prevProject ? (
              <Link to={`/project/${prevProject.id}`} className="pagination-card prev">
                <div className="pagination-direction">
                  <ArrowLeft size={16} />
                  <span>Previous Project</span>
                </div>
                <h4 className="pagination-title">{prevProject.title}</h4>
                <p className="pagination-sub">{prevProject.category}</p>
              </Link>
            ) : (
              <div className="pagination-card disabled">
                <span className="pagination-direction">Beginning of Projects</span>
              </div>
            )}

            {nextProject ? (
              <Link to={`/project/${nextProject.id}`} className="pagination-card next">
                <div className="pagination-direction">
                  <span>Next Project</span>
                  <ArrowRight size={16} />
                </div>
                <h4 className="pagination-title">{nextProject.title}</h4>
                <p className="pagination-sub">{nextProject.category}</p>
              </Link>
            ) : (
              <div className="pagination-card disabled">
                <span className="pagination-direction">End of Projects</span>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ENLARGED VIDEO MODAL (Theater Mode) */}
      {enlargedVideo && (
        <div
          className="media-modal-backdrop"
          onClick={() => setEnlargedVideo(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="media-modal-container video-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top-bar">
              <span className="modal-title">{enlargedVideo.title}</span>
              <button
                onClick={() => setEnlargedVideo(null)}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="enlarged-video-wrapper">
              <video
                src={enlargedVideo.src}
                controls
                autoPlay
                playsInline
                className="enlarged-video-element"
              />
            </div>

            {enlargedVideo.description && (
              <div className="modal-caption-bar">
                <p>{enlargedVideo.description}</p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ENLARGED IMAGE LIGHTBOX */}
      {enlargedImage && (
        <div
          className="media-modal-backdrop"
          onClick={() => setEnlargedImage(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="media-modal-container image-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top-bar">
              <span className="modal-title">{enlargedImage.alt}</span>
              <button
                onClick={() => setEnlargedImage(null)}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="enlarged-image-wrapper">
              <img
                src={enlargedImage.src}
                alt={enlargedImage.alt}
                className="enlarged-image-element"
              />
            </div>

            {enlargedImage.caption && (
              <div className="modal-caption-bar">
                <p>{enlargedImage.caption}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
