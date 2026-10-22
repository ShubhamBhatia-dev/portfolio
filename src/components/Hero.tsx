import { ArrowRight, Film } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-inner">
        <div className="hero-tag fade-up fade-up-1">
          <span className="hero-pulse"></span>
          <span>INDIAN INSTITUTE OF TECHNOLOGY MANDI · PRE-FINAL YEAR</span>
        </div>

        <h1 className="hero-name fade-up fade-up-2">
          Shubham <strong>Bhatia</strong>
        </h1>

        <p className="hero-role fade-up fade-up-2">
          Data Science &amp; Engineering Undergraduate
        </p>

        <p className="hero-headline fade-up fade-up-3">
          Building <em>ultra-low latency trading engines</em> in modern C++20, novel{" "}
          <em>self-supervised deep learning architectures</em> for synthetic media
          detection, and <em>autonomous robotics with real-time sensor fusion</em>.
        </p>

        <div className="hero-meta fade-up fade-up-3">
          <div className="hero-meta-item">
            <span className="hero-meta-label">Discipline</span>
            <span className="hero-meta-val">Data Science &amp; Engineering</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Institution</span>
            <span className="hero-meta-val">IIT Mandi</span>
          </div>
          <div className="hero-meta-item">
            <span className="hero-meta-label">Focus Areas</span>
            <span className="hero-meta-val">Systems · Machine Learning · Robotics</span>
          </div>
        </div>

        <div className="hero-actions fade-up fade-up-4">
          <a href="#projects" className="btn-primary">
            <span>Explore Projects</span>
            <ArrowRight size={15} />
          </a>
          <a href="#media" className="btn-secondary">
            <Film size={15} />
            <span>Watch Video Demos</span>
          </a>
          <a
            href="https://github.com/shubhambhatia2103"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
