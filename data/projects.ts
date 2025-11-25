import { Project } from '../types';

export const projects: Project[] = [
  {
    id: "clinician-ai",
    title: "Clinician-Assistive AI System",
    description: "A thesis project supporting psychological diagnosis using RAG for DSM-5-TR referencing and Speech Emotion Recognition.",
    fullDescription: "This thesis addresses the difficulty clinicians face in quickly forming accurate, evidence-based psychological diagnoses, especially when working with Taglish-speaking patients and limited consultation time. The system aims to support, not replace, clinicians by providing DSM-grounded diagnostic suggestions and structured case formulations based on both language content and speech prosody.\n\nThe project followed a design-science methodology: requirements gathering with a supervising clinician, iterative design of RAG and SER modules, data-driven modeling using DAIC-WOZ prosodic features, and evaluation via quantitative model diagnostics and clinician testing.",
    features: [
        "Clinician-assistive interface for structured intake",
        "RAG pipeline retrieving relevant DSM-5-TR sections",
        "GMM-based Speech Emotion Recognition (SER)",
        "Prosody mapping to DSM-style descriptors"
    ],
    screenshots: [
        "/assets/projects/clinician-ai/main.png",
        "/assets/projects/clinician-ai/intake.png",
        "/assets/projects/clinician-ai/results.png"
    ],
    tags: ["Python", "RAG", "Scikit-learn", "NLP", "Flask"],
    link: "#",
    codeLink: "#"
  },
  {
    id: "sbafn",
    title: "SBAFN: Flood Risk Assessment",
    description: "Street-level flood risk assessment tool using geospatial data and semi-supervised machine learning for Metro Manila.",
    fullDescription: "City flood maps are too coarse for street-level action. SBAFN delivers segment-level (≈30 m) flood-proneness scores so LGUs can prioritize clearing, drainage fixes, and traffic reroutes with evidence instead of anecdotes.\n\nThe system utilizes a data-centric, geospatial ML pipeline: building clean segment-first graphs via OSMnx, engineering topographic and proximity features, creating weak labels from rainfall and reports, and training a semi-supervised classifier to score segments.",
    features: [
        "OSMnx-powered graph segmentation",
        "Geospatial feature pipeline (Elevation, Grade)",
        "Semi-supervised classifier scoring",
        "Interactive 2D map & GeoParquet exports"
    ],
    screenshots: [
        "/assets/projects/sbafn/map-view.png",
        "/assets/projects/sbafn/detail-view.png"
    ],
    tags: ["Python", "Geospatial", "OSMnx", "Machine Learning"],
    link: "https://project-sbafn.vercel.app",
    codeLink: "#"
  },
  {
    id: "gov-insights",
    title: "DashGov",
    description: "An interactive dashboard visualizing public spending data to promote transparency.",
    fullDescription: "This project was born out of a desire to make public spending data more accessible to the general public. Utilizing government open data APIs, I built a comprehensive dashboard that allows users to visualize budget allocations, and compare expenditures across different regions. The goal was to empower citizens with data to hold officials accountable.",
    features: [
        "Real-time data visualization",
        "Interactive filtering by region and department",
        "Exportable reports in PDF and CSV formats",
        "Mobile-responsive layout optimized for accessibility"
    ],
    screenshots: [
        "/assets/projects/dashgov/dashgov-main.png",
        "/assets/projects/dashgov/dashgov-explain.png"
    ],
    tags: ["Gemini", "Flutter", "Flask"],
    link: "#",
    codeLink: "#"
  },
  {
    id: "deepfake-detection",
    title: "DeepFake Detection (Image Classification in R + Keras)",
    description: "An end‑to‑end pipeline for detecting deep‑fake images built in R using the keras and tensorflow interfaces.",
    fullDescription: "Universities struggle to verify whether student visual outputs (architecture renders, fine-arts pieces, multimedia assets) are authentic or AI-generated. This risks academic integrity and conflicts with SDG 16’s call for strong, transparent institutions. The system provides automated deep-fake image detection to support authenticity checks in coursework and assessments.",
    features: [
        "Multi-model detector",
        "End-to-end pipeline",
        "Reproducibility",
        "Lightweight deployment orientation"
    ],
    screenshots: [
      "https://www.socialmediasafety.org/wp-content/uploads/sites/75/2019/12/deepfakes-1000x600.png"
    ],
    tags: ["keras", "Tensorflow", "R"],
    link: "#",
    codeLink: "#"
  },
  {
    id: "ecomarket",
    title: "EcoMarket",
    description: "EcoMarket is a seller-focused dashboard that streamlines online store management by consolidating sales analytics, product performance, customer insights, and order tracking into one intuitive interface.",
    fullDescription: "EcoMarket addresses the challenges faced by small to mid-sized sellers in managing online operations effectively. Many local sellers struggle with scattered sales data, limited visibility over inventory, manual order tracking, and the lack of an integrated platform for monitoring customer engagement. This results in delays, errors, and inefficiencies in daily operations. EcoMarket provides a unified seller dashboard that consolidates sales analytics, product performance, customer insights, and order management into one intuitive interface.",
    features: [
        "Seller Dashboard Homepage",
        "Interactive Analytics",
        "Order Management Tabl",
        "Integrated Navigation & Search"
    ],
    screenshots: [
        "/assets/projects/ecomarket/ecomarket-home.png",
        "/assets/projects/ecomarket/eco-main.png"
    ],
    tags: ["Flask", "Flutter", "Firebase"],
    link: "#",
    codeLink: "#"
  },
  {
    id: "bpi-alternative-metrics",
    title: "BPI Alternative Metrics Model for Loan Eligibility",
    description: "Developed an AI-driven model using Isolation Forest algorithm to assess loan eligibility behavior for underserved MSMEs in the agricultural and fisheries sector.",
    fullDescription: "Developed an AI-driven model using Isolation Forest algorithm to assess loan eligibility behavior for underserved MSMEs in the agricultural and fisheries sector. Aggregated unconventional metrics such as bad loan count, customer ADB,  and loan indicator which contributed onto building a cohesive pipeline for prediction. Awarded 3rd Place at BPI DataWave 2024 for its innovative approach to assessing loan eligibility.",
    features: [
    ],
    screenshots: [
      "https://newsbytes.ph/wp-content/uploads/2023/06/bpi_pic.png"
    ],
    tags: ["Python", "Machine Learning", "AI-Driven"],
    link: "#",
    codeLink: "#"
  }
];