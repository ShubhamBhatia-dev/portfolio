import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ArrowLeft } from "lucide-react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
  const isDetail = location.pathname.startsWith("/project");

  const links = [
    { href: "/#projects", label: "Projects" },
    { href: "/#about", label: "About" },
    { href: "/#skills", label: "Skills" },
    { href: "/#media", label: "Media & Videos" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="site-nav">
      <div className="nav-inner">
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {isDetail ? (
            <Link to="/" className="nav-back-chip" aria-label="Back to overview">
              <ArrowLeft size={15} />
              <span>Overview</span>
            </Link>
          ) : (
            <Link to="/" className="nav-brand">
              <span className="brand-dot"></span>
              <strong>SHUBHAM BHATIA</strong>
              <span className="brand-badge">IIT MANDI</span>
            </Link>
          )}
        </div>

        {/* Desktop links */}
        <ul className="nav-links">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
          <li>
            <a
              href="https://github.com/shubhambhatia2103"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-icon-link"
              aria-label="GitHub Profile"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              <span>GitHub</span>
            </a>
          </li>
          <li>
            <a
              href="mailto:shubhambhatia@students.iitmandi.ac.in"
              className="nav-cta"
            >
              Get in touch
            </a>
          </li>
        </ul>

        {/* Mobile menu button */}
        <button
          className="nav-hamburger"
          onClick={() => setOpen(!open)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="nav-mobile-menu">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav-mobile-link"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/shubhambhatia2103"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className="nav-mobile-link"
          >
            GitHub Profile
          </a>
          <a
            href="mailto:shubhambhatia@students.iitmandi.ac.in"
            onClick={() => setOpen(false)}
            className="nav-mobile-cta"
          >
            Get in touch
          </a>
        </div>
      )}
    </nav>
  );
}
