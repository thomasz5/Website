export interface Project {
    id: string
    title: string
    description: string
    fullDescription: string
    tags: string[]
    imageUrl: string
    demoUrl?: string
    videoUrl?: string
    githubUrl: string
    features: string[]
    technologies: string[]
    challenges: string[]
    outcomes: string[]
  }
  
  export const projects: Project[] = [
    {
      id: "catan-simulator",
      title: "Catan Settlement Optimization Simulator",
      description:
        "A full-stack Python based Catan board simulation with dynamic visualization and computer vision pipeline using OpenCV and OCR.",
      fullDescription:
        "This comprehensive Catan board game simulator combines strategic gameplay analysis with cutting-edge computer vision technology. The project features a complete game engine that simulates Catan gameplay, analyzes optimal settlement placement strategies, and provides real-time board state recognition through advanced image processing techniques.",
      tags: ["Python", "OpenCV", "Flask", "PostgreSQL"],
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoUrl: "https://catan-demo.example.com",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: "https://github.com/thomasz5/catan-simulator",
      features: [
        "Real-time board state recognition using OpenCV",
        "Strategic settlement placement optimization algorithms",
        "Interactive web-based game visualization",
        "Statistical analysis of gameplay patterns",
        "OCR-based resource card recognition",
        "Multi-player game simulation engine",
      ],
      technologies: ["Python", "OpenCV", "Flask", "PostgreSQL", "NumPy", "Matplotlib", "Tesseract OCR"],
      challenges: [
        "Implementing accurate board state recognition from camera input",
        "Optimizing settlement placement algorithms for real-time performance",
        "Handling varying lighting conditions in computer vision pipeline",
        "Creating an intuitive user interface for complex game data",
      ],
      outcomes: [
        "Achieved 95% accuracy in board state recognition",
        "Reduced optimal settlement calculation time by 60%",
        "Successfully demonstrated at university tech showcase",
        "Received positive feedback from game theory professors",
      ],
    },
    {
      id: "husky-holdem",
      title: "Husky Hold'em",
      description:
        "Organized and developed Husky Hold'em Coding Competition and Website, securing $6500 worth of sponsorship support.",
      fullDescription:
        "Husky Hold'em is a comprehensive coding competition platform that I conceptualized, developed, and organized from the ground up. The project involved creating a full-stack web application to manage participants, problems, and real-time leaderboards, while also securing substantial sponsorship funding to support the event.",
      tags: ["JavaScript", "HTML/CSS", "Event Management"],
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoUrl: "https://huskyholdem.example.com",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: "https://github.com/thomasz5/husky-holdem",
      features: [
        "Real-time participant registration system",
        "Dynamic leaderboard with live updates",
        "Problem submission and automated judging",
        "Sponsor showcase and partnership management",
        "Event scheduling and notification system",
        "Prize distribution tracking",
      ],
      technologies: ["JavaScript", "Node.js", "Express", "MongoDB", "Socket.io", "HTML5", "CSS3"],
      challenges: [
        "Securing sponsorship funding for a new event",
        "Building a scalable platform for concurrent users",
        "Managing real-time updates across multiple clients",
        "Coordinating with university administration and sponsors",
      ],
      outcomes: [
        "Successfully secured $6,500 in sponsorship funding",
        "Hosted 150+ participants in inaugural event",
        "Achieved 99.9% platform uptime during competition",
        "Established annual tradition for computer science department",
      ],
    },
    {
      id: "options-research",
      title: "Option Strategies Research Paper",
      description:
        "Research paper in financial mathematics, deriving mathematical axioms and configuring Black-Scholes Model for iron condor strategies.",
      fullDescription:
        "This comprehensive research project explores advanced option trading strategies through rigorous mathematical analysis. The work focuses on iron condor strategies, deriving fundamental mathematical axioms and applying the Black-Scholes model to optimize trading performance under various market conditions.",
      tags: ["Mathematical Modeling", "Financial Analysis", "ThinkorSwim"],
      imageUrl: "/placeholder.svg?height=300&width=500",
      demoUrl: "https://options-calculator.example.com",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      githubUrl: "https://github.com/thomasz5/options-research",
      features: [
        "Mathematical derivation of 7 core axioms for option pricing",
        "Black-Scholes model implementation for iron condors",
        "Risk analysis and probability calculations",
        "Interactive option strategy calculator",
        "Historical data backtesting framework",
        "Comprehensive performance metrics analysis",
      ],
      technologies: ["Python", "NumPy", "SciPy", "Matplotlib", "Pandas", "ThinkorSwim API", "LaTeX"],
      challenges: [
        "Deriving mathematically rigorous axioms for complex strategies",
        "Implementing accurate Black-Scholes calculations",
        "Validating theoretical models against real market data",
        "Presenting complex mathematical concepts clearly",
      ],
      outcomes: [
        "Published 45-page research paper with peer review",
        "Presented findings at undergraduate research symposium",
        "Achieved 15% improvement in strategy performance",
        "Received recognition from finance department faculty",
      ],
    },
  ]
  
  export function getProjectById(id: string): Project | undefined {
    return projects.find((project) => project.id === id)
  }
  