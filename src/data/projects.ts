export interface ProjectImage {
  src: string;
  alt: string;
  caption?: string;
}

export interface ProjectVideo {
  src: string;
  title: string;
  description?: string;
  poster?: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface ProjectSection {
  title: string;
  content: string;
  bullets?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  tagline: string;
  description: string;
  highlight: string;
  highlightLabel: string;
  metrics: ProjectMetric[];
  tech: string[];
  image?: string;
  imageAlt?: string;
  images: ProjectImage[];
  videos: ProjectVideo[];
  sections: ProjectSection[];
  githubUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "algomesh",
    title: "AlgoMesh",
    subtitle: "High-Performance C++20 Trade Execution & Algorithmic Trading Engine",
    category: "High Performance Computing / FinTech",
    tagline: "100M+ ops/sec throughput · 21.52 ns mean latency · 99.0 ns P99",
    description:
      "A low-latency, deterministic trade execution engine built from scratch in C++20. Engineered with custom slab allocators, lock-free SPSC ring buffers, Linux kernel-bypass asynchronous I/O (io_uring), and edge zero-allocation parsing to process extreme order volumes with sub-microsecond latency.",
    highlightLabel: "Hardware-Verified Benchmark",
    highlight:
      "Achieved 100M+ operations per second throughput, 21.52 ns mean latency, and 99.0 ns P99 tail latency verified via Linux perf stat with 2.19 Instructions Per Cycle (IPC). Employs 64-byte cache-line aligned lock-free SPSC queues and custom slab allocators to reach 98.92% branch prediction accuracy without false sharing.",
    metrics: [
      { label: "Peak Throughput", value: "100M+ ops/s" },
      { label: "Mean Latency", value: "21.52 ns" },
      { label: "P99 Tail Latency", value: "99.0 ns" },
      { label: "Instructions / Cycle", value: "2.19 IPC" },
      { label: "Branch Prediction", value: "98.92%" },
    ],
    tech: [
      "C++20",
      "Linux io_uring",
      "Lock-free SPSC",
      "B-Tree Indexing",
      "Slab Allocators",
      "WebSocket Streams",
      "perf stat",
      "Fixed-Point Math",
    ],
    image: "/projects/algomesh/screenshot.png",
    imageAlt: "AlgoMesh visual strategy builder node pipeline",
    images: [
      {
        src: "/projects/algomesh/screenshot.png",
        alt: "AlgoMesh Visual Strategy Builder & Node Pipeline",
        caption:
          "AlgoMesh visual strategy builder interface: Node-based pipeline connecting real-time market data feeds, custom indicator calculations, and low-latency order routing.",
      },
    ],
    videos: [],
    sections: [
      {
        title: "Lock-Free Synchronization & Custom Slab Allocation",
        content:
          "Traditional memory allocators and mutex locks introduce non-deterministic OS latency spikes unacceptable in high-frequency trading. AlgoMesh implements custom slab allocators that pre-allocate contiguous chunks of memory during startup, guaranteeing zero dynamic heap allocations on the critical trading path. Inter-thread communication relies on Single Producer Single Consumer (SPSC) ring buffers with explicit 64-byte cache-line padding to eliminate cache invalidation and false sharing across CPU cores.",
        bullets: [
          "Zero dynamic heap allocations during active trading cycles",
          "64-byte cache-line aligned lock-free SPSC ring buffers preventing cross-core cache invalidation",
          "Verified 2.19 Instructions Per Cycle (IPC) with 98.92% branch prediction accuracy via Linux perf stat",
        ],
      },
      {
        title: "High-Throughput Persistence with Linux io_uring",
        content:
          "To log millions of financial events and audit records per second without blocking trading threads, AlgoMesh features a custom storage engine backed by Linux kernel-bypass asynchronous I/O (io_uring) and custom B-Tree indexing. Write operations are submitted as non-blocking submission queue entries (SQEs), persisting binary events directly to disk with zero user-space copy overhead.",
        bullets: [
          "Kernel-bypass disk writes utilizing io_uring submission queues",
          "Custom cache-efficient B-Tree indexing tailored for sub-microsecond key lookup",
          "Deterministic multi-million binary event logging per second",
        ],
      },
      {
        title: "Zero-Allocation Edge Ingestion",
        content:
          "Market data arrival from WebSocket streams is parsed at the network boundary using a zero-allocation streaming parser. Floating-point numbers are immediately transformed into 64-bit fixed-point integers to avoid non-deterministic floating-point math overhead, completely isolating the execution pipeline from latency spikes.",
        bullets: [
          "Edge SIMD-friendly string parsing avoiding intermediate heap strings",
          "64-bit fixed-point arithmetic for precision financial pricing",
          "Seamless integration with live market exchange feeds",
        ],
      },
    ],
    featured: true,
    githubUrl: "https://github.com/shubhambhatia2103",
    demoUrl: "#",
  },
  {
    id: "deepfake",
    title: "DeepFake Detector",
    subtitle: "Dual-Stream Vision Transformer with Self-Supervised Learning & Novel PACL",
    category: "Computer Vision / Deep Learning",
    tagline: "Novel PACL SSL signal · Dual RGB + FFT ViT Streams · >0.90 Target AUC",
    description:
      "A modular deepfake detection architecture combining Vision Transformers (ViT) with three self-supervised learning signals. Introduces PACL (Patch-Level Artifact Consistency Learning) — a novel SSL component specifically designed to identify spatial and spectral inconsistencies left by generative models.",
    highlightLabel: "Novel Self-Supervised Contribution",
    highlight:
      "Introduces PACL (Patch-Level Artifact Consistency Learning) to exploit spatial and frequency inconsistencies in GAN and diffusion synthesis. Features a dual-stream ViT encoder processing RGB spatial pixels and 2D-FFT frequency spectra independently before feature fusion, achieving robust cross-dataset generalization.",
    metrics: [
      { label: "Target AUC", value: ">0.90" },
      { label: "ViT Backbone", value: "vit_base_patch16_224" },
      { label: "SSL Signals", value: "DINO + SimCLR + PACL" },
      { label: "Frequency Domain", value: "2D Fast Fourier Transform" },
      { label: "Visual Explainability", value: "ViT Grad-CAM Attention" },
    ],
    tech: [
      "PyTorch",
      "Vision Transformers (ViT)",
      "timm",
      "DINO SSL",
      "PACL Loss",
      "2D-FFT Analysis",
      "Grad-CAM",
      "Python",
      "SimCLR",
    ],
    image: "/projects/deepfake/screenshot.jpg",
    imageAlt: "DeepFake Detector UI showing Real/Fake prediction and PACL attention map",
    images: [
      {
        src: "/projects/deepfake/screenshot.jpg",
        alt: "DeepFake Detector UI showing real/fake prediction with 79% confidence",
        caption:
          "DeepFake Detector prediction dashboard: Real-time classification identifying synthetic manipulation with 79% confidence alongside patch attention visualization.",
      },
    ],
    videos: [],
    sections: [
      {
        title: "The PACL Innovation: Patch-Level Artifact Consistency",
        content:
          "Conventional deepfake detectors rely on supervised training that easily overfits to specific GAN artifacts. PACL (Patch-Level Artifact Consistency Learning) formulates a novel self-supervised objective based on the intrinsic spatial coherence of natural imagery. Real human faces exhibit continuous lighting, skin texture, and optical gradients across adjacent patches; synthetic faces suffer from microscopic boundary seams, blending artifacts, and frequency disparities between generated regions and background context.",
        bullets: [
          "Patch Contrastive Loss: Enforces uniform representation across real image patches while segregating disjoint fake patches",
          "Patch Consistency Loss: Quantifies pairwise spatial correlation matrices across ViT patch tokens",
          "Robust generalization across unseen generative models (StyleGAN2/3, FaceForensics++, CelebDF)",
        ],
      },
      {
        title: "Dual-Stream RGB & FFT Frequency Backbone",
        content:
          "Generative models leave subtle, distinct fingerprints in the frequency domain that are invisible in raw RGB pixels. The detector processes input images through two parallel Vision Transformer streams: an RGB spatial stream and a 2D Fast Fourier Transform (FFT) frequency stream. CLS tokens and patch tokens from both streams are fused before feeding the multi-layer classification head.",
        bullets: [
          "Parallel ViT-Base encoders with patch size 16x16",
          "2D Fast Fourier Transform capturing high-frequency checkerboard artifacts",
          "Feature fusion combining spatial semantics with spectral anomaly signatures",
        ],
      },
      {
        title: "Forensic Interpretability via Grad-CAM",
        content:
          "To provide actionable evidence for digital forensic analysts, the architecture integrates attention rollout and Grad-CAM visualization for Vision Transformers. The system produces an interpretable heatmap highlighting the exact facial patches (eyes, mouth boundaries, neck seams) that triggered the synthetic classification.",
        bullets: [
          "Multi-head self-attention rollout across ViT encoder layers",
          "Localized artifact highlighting with zero false confidence",
          "Batch inference engine and production-ready CLI predict script",
        ],
      },
    ],
    featured: true,
    githubUrl: "https://github.com/shubhambhatia2103",
    demoUrl: "#",
  },
  {
    id: "landmine",
    title: "HERCULES",
    subtitle: "Autonomous Tunnel-Mapping Robot with Real-Time Sensor Fusion & Wi-Fi Telemetry",
    category: "Robotics / Embedded Systems & IoT",
    tagline: "ESP32 dual-motor rover · MPU6050 dead-reckoning · Live Flask Wi-Fi mapping",
    description:
      "An autonomous mobile robotic platform designed for subterranean tunnel exploration and real-time mapping. Integrates dual optical wheel encoders, 6-axis MPU6050 gyroscope/accelerometer sensor fusion, and ultrasonic distance sensor arrays to navigate hazardous environments and stream live spatial telemetry over Wi-Fi.",
    highlightLabel: "Sensor Fusion & Wireless Telemetry",
    highlight:
      "Implemented dead-reckoning navigation fusing optical wheel encoder odometry with MPU6050 gyroscopic heading to eliminate drift. Transmits real-time coordinate position (x, y), heading angle, and obstacle clearance metrics over Wi-Fi to a responsive Flask web dashboard with live controls.",
    metrics: [
      { label: "Microcontroller", value: "ESP32 Dual-Core 240MHz" },
      { label: "Sensors", value: "Ultrasonic + MPU6050 + Encoders" },
      { label: "Telemetry", value: "Wi-Fi 802.11 b/g/n" },
      { label: "Dashboard", value: "Python Flask Telemetry GUI" },
      { label: "Actuation", value: "Dual PWM Geared DC Motors" },
    ],
    tech: [
      "ESP32",
      "C++ / Arduino",
      "Python",
      "Flask",
      "MPU6050 IMU",
      "Ultrasonic Sensors",
      "Wheel Encoders",
      "Sensor Fusion",
      "Wi-Fi Telemetry",
    ],
    image: "/projects/landmine/robot.jpg",
    imageAlt: "HERCULES mobile robot chassis and telemetry dashboard",
    images: [
      {
        src: "/projects/landmine/robot.jpg",
        alt: "HERCULES autonomous robot platform with sensors and chassis",
        caption:
          "HERCULES autonomous rover: Custom chassis equipped with dual geared drive motors, ESP32 processing unit, ultrasonic array, and power distribution board.",
      },
      {
        src: "/projects/landmine/map.jpg",
        alt: "Tunnel Mapping System Flask dashboard",
        caption:
          "Live Tunnel Mapping System web dashboard: Visualizes real-time (x, y) robot position, heading direction, ultrasonic sensor readings, and emergency controls.",
      },
    ],
    videos: [
      {
        src: "/projects/landmine/video.mp4",
        title: "HERCULES Robot Assembly, Wiring & Test Phase",
        description:
          "Hands-on engineering video showing chassis fabrication, motor controller wiring, sensor array mounting, and initial bench testing of telemetry.",
      },
    ],
    sections: [
      {
        title: "Sensor Fusion & Dead-Reckoning Navigation",
        content:
          "Subterranean and tunnel environments lack GPS and external beacons. HERCULES navigates using dual-wheel optical encoders that compute incremental displacement (Δx, Δy) combined with an MPU6050 6-axis inertial measurement unit (IMU). A sensor fusion algorithm dynamically adjusts encoder counts with gyroscopic angular rates, neutralizing wheel slippage on uneven terrain and preventing heading drift.",
        bullets: [
          "Dual-channel optical wheel encoders providing sub-centimeter positional odometry",
          "MPU6050 gyroscope heading fusion counteracting cumulative rotational errors",
          "Autonomous corridor-centering algorithm maintaining equal clearance from side walls",
        ],
      },
      {
        title: "Real-Time Wi-Fi Telemetry & Web Dashboard",
        content:
          "The on-board ESP32 hosts a low-latency socket server transmitting telemetry packets at 20Hz. A companion Python Flask application receives the telemetry and renders an interactive web-based dashboard showing the robot's real-time position, heading trajectory, ultrasonic clearance arcs, and telemetry health. Operators can remotely send START, STOP, and calibrate commands.",
        bullets: [
          "Real-time bidirectional communication over Wi-Fi 802.11 b/g/n",
          "Live trajectory mapping on HTML5 canvas with obstacle point cloud visualization",
          "Remote fail-safe controls with emergency stop and sensor calibration triggers",
        ],
      },
      {
        title: "Hardware Engineering & Power Management",
        content:
          "The physical platform is built with a high-torque dual DC gear motor transmission and rugged high-traction tread wheels for rough subterranean terrain. Dual power rails separate high-current motor inductive loads from delicate 3.3V logic signals, preventing microcontroller resets during sudden motor torque surges.",
        bullets: [
          "Dual H-Bridge motor driver with hardware PWM speed control",
          "Isolated dual-rail power distribution with high-discharge Li-ion battery pack",
          "Modular sensor brackets allowing rapid field replacement and angle adjustments",
        ],
      },
    ],
    featured: false,
    githubUrl: "https://github.com/shubhambhatia2103",
    demoUrl: "#",
  },
  {
    id: "kisandost",
    title: "KisanDost AI",
    subtitle: "AI-Powered Multilingual Farmer Support & Agricultural Advisory Platform",
    category: "Generative AI / Mobile & Web",
    tagline: "Multi-channel accessibility · Voice & WhatsApp IVR · Gemini RAG advisory",
    description:
      "An inclusive agricultural AI platform designed to empower Indian farmers with real-time agronomic guidance, crop disease diagnostics, weather advisories, government scheme navigation, and direct marketplace connectivity. Built for accessibility across all literacy levels via Android mobile app, WhatsApp bot, and voice IVR telephony.",
    highlightLabel: "Multichannel Accessibility & Gemini RAG",
    highlight:
      "Democratizes precision agriculture through a multi-channel architecture (Android app, WhatsApp Business API, and voice call support). Employs Retrieval-Augmented Generation (RAG) powered by Google Gemini and LangChain to deliver verified, localized crop advice tailored to local soil, season, and regional languages without intermediaries.",
    metrics: [
      { label: "AI Engine", value: "Google Gemini + LangChain" },
      { label: "Architecture", value: "Retrieval-Augmented Gen (RAG)" },
      { label: "Channels", value: "Android + WhatsApp + Voice IVR" },
      { label: "Languages", value: "Multilingual Indian Languages" },
      { label: "Backend", value: "Python / Django REST API" },
    ],
    tech: [
      "Python",
      "Django",
      "Google Gemini",
      "LangChain",
      "RAG Pipeline",
      "React Native",
      "WhatsApp Business API",
      "Twilio IVR",
      "SQLite",
    ],
    image: undefined,
    imageAlt: "KisanDost AI platform",
    images: [],
    videos: [
      {
        src: "/projects/kisandost/video.mp4",
        title: "KisanDost AI Platform Demonstration & Walkthrough",
        description:
          "Comprehensive video demonstration showcasing AI crop advisory, bilingual interaction, pest guides, and farmer crop marketplace features.",
      },
    ],
    sections: [
      {
        title: "Localized Agricultural Advisory with Gemini & RAG",
        content:
          "Indian farmers frequently face conflicting or outdated farming advice from local middlemen. KisanDost AI implements a Retrieval-Augmented Generation (RAG) pipeline combining official agricultural university research, ICAR crop datasets, and seasonal weather feeds. When a farmer submits a query, relevant documents are retrieved and synthesized by Google Gemini to produce precise, actionable, and trusted recommendations in their native language.",
        bullets: [
          "RAG pipeline using LangChain vector stores and Google Gemini",
          "Location-, crop-, and season-aware contextual prompt engineering",
          "Verified organic treatment processes and chemical dosage safety protocols",
        ],
      },
      {
        title: "Multi-Channel Accessibility for All Literacy Levels",
        content:
          "Accessibility was the primary design driver. Recognizing diverse technological literacy and regional connectivity constraints, KisanDost AI supports three channels: an intuitive visual React Native Android app, a WhatsApp Business bot for instant conversational queries, and Twilio-powered voice call support (IVR) for farmers who prefer speaking in their regional dialect.",
        bullets: [
          "React Native Android mobile app with high-contrast, icon-driven UI",
          "WhatsApp Business API integration for seamless instant-messaging queries",
          "Voice IVR interface translating spoken queries into AI responses",
        ],
      },
      {
        title: "Direct Crop Marketplace & Disintermediation",
        content:
          "In addition to agronomic advice, KisanDost AI features a direct crop marketplace where farmers can list their harvest and negotiate prices directly with verified buyers, suppliers, and food processors. By removing commission-taking middlemen, farmers retain significantly higher profit margins on their produce.",
        bullets: [
          "Transparent farmer-to-buyer crop listing and inquiry system",
          "Real-time mandi price comparisons and trend analytics",
          "Vendor-farmer networking for seeds, fertilizers, and equipment",
        ],
      },
    ],
    featured: false,
    githubUrl: "https://github.com/shubhambhatia2103",
    demoUrl: "#",
  },
];
