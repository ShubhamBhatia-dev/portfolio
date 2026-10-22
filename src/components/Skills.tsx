const groups = [
  {
    label: "Languages",
    skills: ["C++20", "Python", "TypeScript", "SQL"],
  },
  {
    label: "Systems & Performance",
    skills: ["Lock-free Data Structures", "io_uring", "SPSC Ring Buffers", "Slab Allocators", "Cache-line Alignment", "WebSocket"],
  },
  {
    label: "AI / ML",
    skills: ["PyTorch", "Vision Transformers (ViT)", "Self-Supervised Learning", "DINO", "Contrastive Learning", "Grad-CAM", "LangChain", "RAG", "Gemini"],
  },
  {
    label: "Embedded & Robotics",
    skills: ["ESP32", "Sensor Fusion", "MPU6050", "Encoder Odometry", "Flask", "Real-time Telemetry"],
  },
  {
    label: "Application Development",
    skills: ["React Native", "Django", "Vite", "React"],
  },
  {
    label: "Infrastructure & Tools",
    skills: ["Git", "Linux", "SQLite", "Twilio / WhatsApp API", "perf stat"],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <div className="container">
        <header className="section-header">
          <p className="section-label">Competencies</p>
          <h2 className="section-title">Skills</h2>
        </header>
        <div className="skills-grid">
          {groups.map((g) => (
            <div key={g.label}>
              <p className="skill-group-label">{g.label}</p>
              <ul className="skill-list">
                {g.skills.map((s) => (
                  <li key={s} className="skill-item">{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
