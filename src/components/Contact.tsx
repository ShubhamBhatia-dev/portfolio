import { Mail, GitFork, Link2, ArrowUpRight } from "lucide-react";

const links = [
  {
    icon: <Mail size={16} strokeWidth={1.5} />,
    label: "Email",
    value: "shubhambhatia@students.iitmandi.ac.in",
    href: "mailto:shubhambhatia@students.iitmandi.ac.in",
  },
  {
    icon: <GitFork size={16} strokeWidth={1.5} />,
    label: "GitHub",
    value: "github.com/shubhambhatia",
    href: "https://github.com/",
  },
  {
    icon: <Link2 size={16} strokeWidth={1.5} />,
    label: "LinkedIn",
    value: "linkedin.com/in/shubhambhatia",
    href: "https://linkedin.com/",
  },
];

export default function Contact() {
  return (
    <section id="contact">
      <div className="container">
        <header className="section-header">
          <p className="section-label">Get in touch</p>
          <h2 className="section-title">Contact</h2>
        </header>
        <div className="contact-content">
          <p className="contact-text">
            Open to research collaborations, internship opportunities, and interesting engineering conversations.
            If you are working on something technically ambitious, I would like to hear about it.
          </p>
          <div className="contact-links-row">
            {links.map((l) => (
              <a key={l.label} href={l.href} className="contact-link-item" target="_blank" rel="noopener">
                <span>
                  {l.icon}
                  <span>{l.label}</span>
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: "0.4rem", fontSize: "0.82rem", color: "var(--text-3)" }}>
                  {l.value} <ArrowUpRight size={13} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

