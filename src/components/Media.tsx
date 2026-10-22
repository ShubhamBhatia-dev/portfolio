import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  Film,
  Image as ImageIcon,
  Maximize2,
  X,
  Upload,
  ArrowRight,
  Sparkles,
} from "lucide-react";

interface MediaItem {
  id: string;
  type: "photo" | "video";
  url: string;
  title: string;
  category: string;
  projectId?: string;
  description?: string;
}

const defaultMedia: MediaItem[] = [
  {
    id: "kisandost-vid",
    type: "video",
    url: "/projects/kisandost/video.mp4",
    title: "KisanDost AI Platform Demonstration",
    category: "AI & Agriculture",
    projectId: "kisandost",
    description:
      "Full video walkthrough demonstrating AI crop query resolution, regional language advisory, and agricultural marketplace.",
  },
  {
    id: "hercules-vid",
    type: "video",
    url: "/projects/landmine/video.mp4",
    title: "HERCULES Robot Hardware Assembly & Testing",
    category: "Robotics & IoT",
    projectId: "landmine",
    description:
      "Physical build, ESP32 wiring, ultrasonic sensor calibration, and drive motor testing in lab conditions.",
  },
  {
    id: "algomesh-img",
    type: "photo",
    url: "/projects/algomesh/screenshot.png",
    title: "AlgoMesh Visual Strategy Pipeline",
    category: "C++20 FinTech",
    projectId: "algomesh",
    description:
      "Node-based visual strategy builder connecting market data feeds to technical indicators and risk limits.",
  },
  {
    id: "deepfake-img",
    type: "photo",
    url: "/projects/deepfake/screenshot.jpg",
    title: "DeepFake Detector ViT + PACL Inference UI",
    category: "Computer Vision",
    projectId: "deepfake",
    description:
      "Model inference interface classifying synthetic images with 79% confidence and PACL patch attention heatmap.",
  },
  {
    id: "hercules-robot-img",
    type: "photo",
    url: "/projects/landmine/robot.jpg",
    title: "HERCULES Autonomous Rover Chassis",
    category: "Robotics Hardware",
    projectId: "landmine",
    description:
      "Custom camouflage rover chassis equipped with ESP32 microcontroller, ultrasonic distance sensors, and high-traction wheels.",
  },
  {
    id: "hercules-map-img",
    type: "photo",
    url: "/projects/landmine/map.jpg",
    title: "Tunnel Mapping System Flask Telemetry",
    category: "Robotics Telemetry",
    projectId: "landmine",
    description:
      "Live web dashboard rendering real-time coordinate position (x, y), heading direction angle, and ultrasonic clearance readings.",
  },
];

export default function Media() {
  const [filter, setFilter] = useState<"all" | "video" | "photo">("all");
  const [items, setItems] = useState<MediaItem[]>(defaultMedia);
  const [activeModalItem, setActiveModalItem] = useState<MediaItem | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setActiveModalItem(null);
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const newItems: MediaItem[] = Array.from(files).map((f, i) => {
      const isVid = f.type.startsWith("video");
      return {
        id: `upload-${Date.now()}-${i}`,
        type: isVid ? "video" : "photo",
        url: URL.createObjectURL(f),
        title: f.name.replace(/\.[^/.]+$/, ""),
        category: "Uploaded Asset",
        description: `Uploaded ${isVid ? "video" : "image"} file: ${f.name}`,
      };
    });

    setItems((prev) => [...newItems, ...prev]);
  }

  const filteredItems = items.filter((item) => {
    if (filter === "video") return item.type === "video";
    if (filter === "photo") return item.type === "photo";
    return true;
  });

  const videoCount = items.filter((i) => i.type === "video").length;
  const photoCount = items.filter((i) => i.type === "photo").length;

  return (
    <section id="media" className="media-section">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Media &amp; Demos</p>
          <h2 className="section-title">Visual Showcase &amp; Videos</h2>
          <p className="section-description">
            Explore videos and screenshots from my projects. Play videos directly, enlarge them in theater mode, or inspect high-resolution architecture diagrams.
          </p>
        </div>

        {/* Filter controls and upload trigger */}
        <div className="media-controls-bar">
          <div className="media-filter-tabs">
            <button
              className={`filter-tab ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              All Media ({items.length})
            </button>
            <button
              className={`filter-tab ${filter === "video" ? "active" : ""}`}
              onClick={() => setFilter("video")}
            >
              <Film size={14} />
              <span>Videos ({videoCount})</span>
            </button>
            <button
              className={`filter-tab ${filter === "photo" ? "active" : ""}`}
              onClick={() => setFilter("photo")}
            >
              <ImageIcon size={14} />
              <span>Photos &amp; Diagrams ({photoCount})</span>
            </button>
          </div>

          <div className="media-upload-action">
            <input
              ref={fileInputRef}
              type="file"
              multiple
              accept="image/*,video/*"
              style={{ display: "none" }}
              onChange={handleUpload}
            />
            <button
              className="btn-ghost upload-btn"
              onClick={() => fileInputRef.current?.click()}
            >
              <Upload size={14} />
              <span>Add Media</span>
            </button>
          </div>
        </div>

        {/* Media Grid */}
        <div className="media-showcase-grid">
          {filteredItems.map((item) => (
            <div key={item.id} className={`media-card ${item.type}`}>
              {item.type === "video" ? (
                <div className="media-video-container">
                  <video
                    src={item.url}
                    controls
                    playsInline
                    preload="metadata"
                    className="media-card-video"
                  />
                  <button
                    onClick={() => setActiveModalItem(item)}
                    className="media-card-enlarge-btn"
                    title="Enlarge Video (Theater Mode)"
                  >
                    <Maximize2 size={15} />
                    <span>Enlarge Video</span>
                  </button>
                </div>
              ) : (
                <div
                  className="media-photo-container"
                  onClick={() => setActiveModalItem(item)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === "Enter" && setActiveModalItem(item)}
                >
                  <img src={item.url} alt={item.title} loading="lazy" />
                  <div className="media-photo-overlay">
                    <div className="photo-expand-bubble">
                      <Maximize2 size={18} />
                    </div>
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              )}

              <div className="media-card-info">
                <div className="media-card-top">
                  <span className="media-category-pill">{item.category}</span>
                  <span className="media-type-indicator">
                    {item.type === "video" ? (
                      <>
                        <Film size={12} /> Video
                      </>
                    ) : (
                      <>
                        <ImageIcon size={12} /> Image
                      </>
                    )}
                  </span>
                </div>
                <h4 className="media-card-title">{item.title}</h4>
                {item.description && (
                  <p className="media-card-desc">{item.description}</p>
                )}

                {item.projectId && (
                  <div className="media-card-footer">
                    <Link
                      to={`/project/${item.projectId}`}
                      className="media-project-link"
                    >
                      <span>View Project Case Study</span>
                      <ArrowRight size={13} />
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ENLARGED MODAL (For both Video & Photo) */}
      {activeModalItem && (
        <div
          className="media-modal-backdrop"
          onClick={() => setActiveModalItem(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className={`media-modal-container ${
              activeModalItem.type === "video" ? "video-modal" : "image-modal"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-top-bar">
              <span className="modal-title">{activeModalItem.title}</span>
              <button
                onClick={() => setActiveModalItem(null)}
                className="modal-close-btn"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            <div className="modal-content-wrapper">
              {activeModalItem.type === "video" ? (
                <div className="enlarged-video-wrapper">
                  <video
                    src={activeModalItem.url}
                    controls
                    autoPlay
                    playsInline
                    className="enlarged-video-element"
                  />
                </div>
              ) : (
                <div className="enlarged-image-wrapper">
                  <img
                    src={activeModalItem.url}
                    alt={activeModalItem.title}
                    className="enlarged-image-element"
                  />
                </div>
              )}
            </div>

            <div className="modal-caption-bar">
              <p>{activeModalItem.description}</p>
              {activeModalItem.projectId && (
                <Link
                  to={`/project/${activeModalItem.projectId}`}
                  onClick={() => setActiveModalItem(null)}
                  className="modal-project-btn"
                >
                  <Sparkles size={14} />
                  <span>Go to Full Project Case Study</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
