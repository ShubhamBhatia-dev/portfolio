export default function About() {
  return (
    <section id="about">
      <div className="container">
        <header className="section-header">
          <p className="section-label">Background</p>
          <h2 className="section-title">About</h2>
        </header>
        <div className="about-grid">
          <div className="about-text">
            <p>
              I am <em>Shubham Bhatia</em>, a pre-final year B.Tech student at IIT Mandi studying Data Science and Engineering.
              My work spans three intersecting domains: <em>high-performance systems</em>, <em>machine learning research</em>, and <em>embedded hardware</em>.
            </p>
            <p>
              On the systems side, I am drawn to problems where nanoseconds matter — lock-free data structures, cache-aware memory layouts,
              kernel-bypass I/O, and branch-prediction-conscious code. My C++ execution engine achieves 100M+ ops/sec with 21 ns mean latency.
            </p>
            <p>
              In ML, I focus on architecturally interesting problems. My deepfake detector introduces PACL — a novel self-supervised signal
              that exploits spatial inconsistency in GAN-generated images using ViT patch tokens.
            </p>
            <p>
              I also build physical things. HERCULES is an autonomous rover I built from scratch using ESP32 and sensor fusion,
              with a real-time mapping interface running over Wi-Fi.
            </p>
          </div>
          <div className="about-details">
            {[
              { label: "Institution", value: "IIT Mandi" },
              { label: "Programme", value: "B.Tech — Data Science & Engineering" },
              { label: "Year", value: "Pre-Final (3rd Year)" },
              { label: "Location", value: "Mandi, Himachal Pradesh" },
              { label: "Focus areas", value: "Systems · ML Research · Robotics" },
            ].map((d) => (
              <div key={d.label} className="about-detail-row">
                <span className="about-detail-label">{d.label}</span>
                <span className="about-detail-value">{d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
