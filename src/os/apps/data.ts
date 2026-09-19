export interface Project {
  id: string;
  title: string;
  repoUrl?: string;
  liveUrl?: string;
  description: string;
  features: string[];
  technologies: string[];
  imageUrl?: string;
}

export const myDetails = {
  name: "Aryan Raj",
  title: "Software Engineer | Systems & Application Developer | Reverse Engineering Enthusiast | Open-Source Builder",
  bio: "I’m Aryan Raj, a software engineer and engineering student from Bihar, India, focused on building software that goes beyond conventional application development. My interests sit at the intersection of software engineering, systems programming, cybersecurity, reverse engineering, developer tooling, Linux, networking, and application development.\n\nI enjoy taking systems apart, understanding how they work internally, and then building my own tools around that understanding. Rather than limiting myself to a single technology stack, I regularly move between Android, web, desktop, Linux, native systems, Bluetooth protocols, backend services, and low-level application interfaces depending on what a project demands.\n\nMy development philosophy is simple: if something doesn't have the interface I need, I’ll figure out how it works and build one.",
  focus: [
    "Software Engineering",
    "Systems Programming",
    "Reverse Engineering",
    "Cybersecurity",
    "Linux & Linux internals",
    "Bluetooth & hardware communication",
    "Networking",
    "Developer Tooling",
    "Android Development",
    "Web Application Development",
    "Desktop Application Development",
    "Artificial Intelligence / LLM applications",
    "Git internals and version control",
    "Self-hosted infrastructure"
  ],
  skills: {
    languages: ["Java", "Kotlin", "Python", "JavaScript", "TypeScript", "Rust", "C", "HTML", "CSS"],
    frameworks: ["React", "Vite", "Electron", "Tauri", "Jetpack Compose", "Flask", "GTK4", "Leaflet", "ReactFlow", "Zustand", "Room", "Hilt", "PyMuPDF", "Pillow", "Tesseract"],
    systems: ["Linux", "Git", "GitHub", "Docker", "SQLite", "Bluetooth", "RFCOMM", "BlueZ", "D-Bus", "PipeWire", "REST APIs", "DNS", "Cloudflare", "Tailscale"]
  },
  projects: [
    {
      id: "motobuds",
      title: "MotoBuds Desktop Utility",
      repoUrl: "https://github.com/ThisWasAryan/MotoBudsDesktopUtility",
      description: "One of my most technically ambitious projects is a desktop control application for Motorola Moto Buds, created by reverse-engineering the proprietary Bluetooth protocol used by the earbuds. The architecture separates a React/Electron desktop interface from a Python Bluetooth daemon communicating with the hardware through Classic Bluetooth RFCOMM.",
      features: [
        "Active Noise Cancellation & Transparency Mode",
        "Hi-Res / LDAC negotiation",
        "Custom 10-band equalizer",
        "Battery and charging telemetry",
        "Gesture configuration & In-ear detection",
        "System-tray integration"
      ],
      technologies: ["React", "Electron", "Python", "BlueZ", "D-Bus", "RFCOMM", "PipeWire"],
      imageUrl: "/MBDU_HERO.png"
    },
    {
      id: "clack",
      title: "Clack",
      repoUrl: "https://github.com/ThisWasAryan/clack",
      description: "Clack is a human-like typing simulator designed for terminal recordings, screencasts and automated demonstrations. Instead of simply inserting fixed delays between characters, Clack attempts to model the behaviour of an actual typist with cognitive pauses, fatigue, and panic events.",
      features: [
        "Human-like inter-key timing and distances",
        "Typing jitter, errors, and correction",
        "Cognitive pauses, fatigue, and panic events",
        "Multiple keyboard layouts (QWERTY, Dvorak, Colemak, AZERTY)"
      ],
      technologies: ["Rust", "GTK4", "Python", "uinput", "ydotool"],
      imageUrl: "/ClackGUI1 (Edit).png"
    },
    {
      id: "gridbound",
      title: "Gridbound",
      repoUrl: "https://github.com/ThisWasAryan/gridbound",
      liveUrl: "https://thiswasaryan.github.io/gridbound/",
      description: "Gridbound is a browser-based incremental racing game built entirely with HTML, CSS and vanilla JavaScript. Players progress through the motorsport ladder from Karting to Formula 1.",
      features: [
        "Vehicle and upgrade progression (Engine, Aero, Tyres)",
        "Dynamic economy & Team principal hiring",
        "Pit-stop minigame & Automated racing",
        "Persistent Local Storage saves"
      ],
      technologies: ["HTML", "CSS", "Vanilla JavaScript"],
      imageUrl: "/Gridbound.png"
    },
    {
      id: "rent-management",
      title: "Rent Management System",
      repoUrl: "https://github.com/ThisWasAryan/RenterManagement",
      description: "Rent Management System is a native offline-first Android application designed to replace the traditional combination of notebooks, spreadsheets, receipts and WhatsApp messages used by landlords to manage rental properties.",
      features: [
        "Property, Room, and Tenant management",
        "Rent-cycle calculations & Payment tracking",
        "Electricity meter tracking & automatic billing",
        "Document & Rental agreement storage",
        "WhatsApp payment reminders"
      ],
      technologies: ["Kotlin", "Jetpack Compose", "Room", "SQLite", "Hilt", "Coroutines", "MVVM"],
      imageUrl: "/RMS.png"
    },
    {
      id: "ht-epaperscraper",
      title: "HT ePaperScraper",
      repoUrl: "https://github.com/ThisWasAryan/HT-ePaperScraper",
      description: "A React/TypeScript/Vite application for browsing and reading Hindustan Times ePaper editions through direct analysis of the publisher's web infrastructure.",
      features: [
        "Edition discovery & Historical edition access",
        "High-resolution newspaper pages with pan & zoom",
        "Cursor-targeted zooming",
        "Background page prefetching"
      ],
      technologies: ["React", "TypeScript", "Vite"],
      imageUrl: "/DemoHT1.png"
    },
    {
      id: "homeserver",
      title: "HomeLab Server",
      description: "A self-hosted home server ecosystem managing personal services and networking. Configured using CasaOS to orchestrate various Docker containers for media, storage, and utility services securely via Tailscale.",
      features: [
        "Docker container orchestration",
        "Media and file server capabilities",
        "Remote access via Tailscale VPN",
        "Automated backups and health monitoring"
      ],
      technologies: ["Linux", "Docker", "CasaOS", "Tailscale", "Networking"],
      imageUrl: "/CASAFS.png"
    }
  ]
};
