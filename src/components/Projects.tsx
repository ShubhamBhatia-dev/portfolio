import { Link } from "react-router-dom";
import { ArrowRight, Film, Image as ImageIcon, Sparkles } from "lucide-react";
import { projects, Project } from "../data/projects";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const hasVideo = p.videos.length > 0;
  const hasImages = p.images.length > 0;
  const thumbnail = p.images.length > 0 ? p.images[0].src : p.image;

  return (
    <article className="project-card">
      <div className="project-card-media-wrapper">
        <Link to={`/project/${p.id}`} className="project-card-media-link" aria-label={`View ${p.title} case study`}>
          {thumbnail ? (
            <img src={thumbnail} alt={p.title} className="project-card-img" loading="lazy" />
          ) : hasVideo ? (
            <div className="project-card-video-preview">
              <video
                src={p.videos[0].src}
                preload="metadata"
                muted
                playsInline
                className="project-card-video-element"
              />
              <div className="video-badge-overlay">
                <div className="video-play-indicator">
                  <Film size={20} />
                </div>
                <span>Click to play video</span>
              </div>
            </div>
          ) : (
            <div className="project-card-placeholder">
              <span className="placeholder-title">{p.title}</span>
            </div>
          )}

          {/* Media Badges */}
          <div className="project-media-badges">
            {hasVideo && (
              <span className="media-badge video">
                <Film size={12} />
                <span>Video Available</span>
              </span>
            )}
            {hasImages && (
              <span className="media-badge photo">
                <ImageIcon size={12} />
                <span>{p.images.length} {p.images.length === 1 ? "Image" : "Images"}</span>
              </span>
            )}
          </div>
        </Link>
      </div>

      <div className="project-card-content">
        <div className="project-card-header">
          <span className="project-num">0{index + 1}</span>
          <span className="project-category">{p.category}</span>
        </div>

        <h3 className="project-title">
          <Link to={`/project/${p.id}`}>{p.title}</Link>
        </h3>

        <p className="project-subtitle">{p.subtitle}</p>
        <p className="project-desc">{p.description}</p>

        {/* Highlight quote box */}
        <div className="project-highlight-box">
          <div className="highlight-tag">
            <Sparkles size={13} />
            <span>{p.highlightLabel}</span>
          </div>
          <p className="highlight-text">{p.highlight}</p>
        </div>

        {/* Tech tags */}
        <div className="project-tech-list">
          {p.tech.slice(0, 6).map((t) => (
            <span key={t} className="tech-chip">
              {t}
            </span>
          ))}
          {p.tech.length > 6 && (
            <span className="tech-chip-more">+{p.tech.length - 6} more</span>
          )}
        </div>

        {/* Action button */}
        <div className="project-card-footer">
          <Link to={`/project/${p.id}`} className="project-view-btn">
            <span>View Case Study, Photos &amp; Video</span>
            <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Selected Portfolio</p>
          <h2 className="section-title">Engineering Projects</h2>
          <p className="section-description">
            Deep dive into low-latency distributed systems, machine learning architectures, and autonomous robotics. Click any project to open its dedicated view with images, technical breakdown, and playable videos.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((p, idx) => (
            <ProjectCard key={p.id} p={p} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}
