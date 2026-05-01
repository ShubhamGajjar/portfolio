// utils/data.js
export const projects = [
  {
    id: 1,
    title: "TrackMania Reinforcement Learning Agent",
    description:
      "Built a reinforcement learning agent for TrackMania using Implicit Quantile Networks (IQN), training policies to drive competitively under noisy observations and shifting track dynamics.",
    technologies: [
      "Python",
      "PyTorch",
      "Reinforcement Learning",
      "Implicit Quantile Networks",
      "Deep RL",
      "dxcam",
    ],
    category: "AI/ML Core",
    github: "https://github.com/ShubhamGajjar/TrackMania-ReinforcementLearning",
    live: null,
    image: "/trackmania.jpg",
    impact: "Game AI & RL Research",
    status: "Completed",
  },
  {
    id: 2,
    title: "Twitter Sentiment Analysis (NLP Project)",
    description:
      "Built an end-to-end sentiment analysis pipeline over Twitter data, combining API ingestion, cleaning, feature extraction, and classical ML classifiers for topic-level sentiment.",
    technologies: [
      "Python",
      "Twitter API",
      "NLP",
      "Machine Learning",
      "Pandas",
      "NLTK",
      "TextBlob",
      "Google Colab",
    ],
    category: "Data Science",
    github: "https://github.com/ShubhamGajjar/Twitter-Sentiment-Analysis.git",
    live: null,
    image: "/sentiment.jpg",
    impact: "Social Media Analytics",
    status: "Completed",
  },
  {
    id: 3,
    title: "Interactive Image Mosaic Generator",
    description:
      "Built a Gradio app that generates artistic image mosaics using vectorized NumPy pipelines, giving users a fast, interactive UI to control mosaic density and style.",
    technologies: [
      "Python",
      "NumPy",
      "Gradio",
      "Image Processing",
      "Computer Vision",
      "Vectorized Operations",
    ],
    category: "AI/ML Core",
    github:
      "https://github.com/ShubhamGajjar/Interactive-Image-Mosaic-Generator.git",
    live: null,
    demoUrl: "https://implici7-image-mosaic-generator.hf.space",
    image: "/mosaic.jpg",
    impact: "Creative AI & Image Processing",
    status: "Completed",
  },
  {
    id: 4,
    title: "Skin Cancer Hybrid ResNet-ViT (IEEE AIC 2025)",
    description:
      "Official code for 'A Hybrid ResNet-ViT Architecture for Skin Cancer Classification'. Reproducible implementation of a hybrid convolutional–transformer model for skin lesion classification on HAM10000 (96.3% accuracy, AUC ≈ 1.00).",
    technologies: [
      "Python",
      "PyTorch",
      "ResNet50",
      "Vision Transformer",
      "Computer Vision",
      "Medical AI",
      "HAM10000",
    ],
    category: "Research",
    github: "https://github.com/ShubhamGajjar/SkinCancer-Hybrid-ResNet-ViT",
    live: null,
    image: "/mosaic.jpg",
    impact: "Medical AI • Skin Lesion Classification",
    status: "Published",
  },
];

export const skills = {
  "AI/ML Core": [
    "Deep Learning",
    "Machine Learning",
    "Neural Networks",
    "Computer Vision",
    "Natural Language Processing",
    "Reinforcement Learning",
    "Evolutionary Algorithms",
  ],
  "Programming Languages": [
    "Python",
    "JavaScript",
    "TypeScript",
    "Next.js",
    "React",
  ],
  "Deep Learning Frameworks": [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "CUDA",
    "Transformers",
    "CNN/ResNet",
    "RNN/LSTM",
    "Vision Transformers",
    "UNet Architectures",
    "FastAPI",
    "Hugging Face",
  ],
  "Computer Vision": [
    "OpenCV",
    "Matplotlib",
    "Albumentations",
    "Medical Imaging",
    "Image Segmentation",
    "Object Detection",
    "Image Classification",
    "FLAIR MRI Processing",
    "Dermatoscopic Analysis",
  ],
  "Data Science & Analytics": [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "Statistical Analysis",
    "Jupyter",
  ],
  "Game AI & RL": [
    "Reinforcement Learning",
    "Deep Q-Networks",
    "Genetic Algorithms",
    "Game AI Development",
    "Neural Network Training",
  ],
  "Cloud & DevOps": ["Docker", "GitHub Actions"],
  "Leadership & Adaptability": [
    "Team Leadership",
    "Adaptability",
    "Problem Solving",
    "Communication",
    "Collaboration",
  ],
};

export const researchPapers = [
  {
    id: 1,
    title: "Hybrid ResNet-ViT for Skin Cancer Classification",
    authors:
      "Shubham Gajjar, Harshal Joshi, Om Rathod, Vishal Barot, Deep Joshi",
    conference:
      "4th IEEE World Conference on Applied Intelligence and Computing (AIC 2025)",
    status: "Published",
    year: "2025",
    description:
      "Designed hybrid architecture combining frozen ResNet50 feature extractor with four-head Vision Transformer blocks, attaining 96.3% accuracy and macro F1 of 0.961 on HAM10000 dataset. Integrated Global Average Pooling and multi-head self-attention for seven-class skin lesion classification, achieving Area Under Curve of 1.00 across all classes. Published and presented at IEEE World Conference on Applied Intelligence and Computing (AIC 2025) to 100+ attendees.",
    keywords: [
      "Computer Vision",
      "Deep Learning",
      "Medical AI",
      "Skin Cancer",
      "ResNet",
      "Vision Transformer",
    ],
    doi: "10.1109/AIC60235.2025.11212073",
    ieeeUrl: "https://ieeexplore.ieee.org/document/11212073",
    github: "https://github.com/ShubhamGajjar/SkinCancer-Hybrid-ResNet-ViT",
    pdf: "/AIC 2025 Certificate.pdf",
    certificate: "/AIC_2025_Presentation_Certificate.pdf",
    abstract:
      "We propose a hybrid ResNet50–Vision Transformer model for seven-class skin lesion classification on HAM10000. By combining strong local features with global context modeling, the approach achieves 96.3% accuracy, macro F1 0.961, and AUC 1.00 across classes.",
  },
  {
    id: 2,
    title: "VGG16-MCA UNet for Brain Tumor Segmentation",
    authors: "Shubham Gajjar, Deep Joshi, Avi Poptani, Vishal Barot",
    conference: "Elsevier",
    status: "Under Review",
    year: "2025",
    description:
      "Led innovation by designing VGG16-based encoder with Multi-Channel Attention decoder achieving 99.59% accuracy and 99.71% specificity on LGG Brain MRI Segmentation dataset from 110 low-grade glioma patients. Implemented ensemble learning combining multiple model configurations, improving Dice coefficient by 3.7% over standard UNet. Applied data engineering with preprocessing pipeline implementing skull stripping, intensity normalization, and resizing to 256x256 pixels for FLAIR MRI scans.",
    keywords: [
      "Computer Vision",
      "Deep Learning",
      "Medical AI",
      "Brain Tumor",
      "UNet",
      "FLAIR MRI",
      "Multi-Channel Attention",
    ],
    doi: "Pending",
    abstract:
      "We introduce an attention-enhanced VGG16–MCA UNet for brain tumor segmentation in FLAIR MRI. The model reaches 99.59% accuracy and 99.71% specificity on an LGG dataset, and ensemble variants improve Dice over standard UNet baselines.",
  },
  {
    id: 3,
    title:
      "MorphoCLIP: Text-Supervised Contrastive Learning for Perturbation Matching in Cell Painting Images",
    authors: "Shubham Gajjar",
    conference: "Working Paper · 2026",
    status: "In Progress",
    year: "2026",
    description:
      "Contrastive framework that embeds Cell Painting microscopy images and natural-language perturbation descriptions in a shared 512-dim space, jointly trained across compounds, CRISPR knockouts, and ORF overexpressions.",
    keywords: [
      "Vision-Language",
      "Contrastive Learning",
      "Cell Painting",
      "DINOv3",
      "Drug Discovery",
      "Microscopy",
    ],
    abstract:
      "MorphoCLIP is a contrastive learning framework that embeds Cell Painting microscopy images and natural-language perturbation descriptions in a shared 512-dimensional space. The image branch uses a frozen DINOv3 ViT-L/16 backbone with a CrossChannelFormer aggregator across five fluorescence channels; the text branch uses BioClinical ModernBERT with a trainable projection head. Trained with Continuously Weighted Contrastive Loss (CWCL) on the CPJUMP1 benchmark (51 plates, 817 perturbations), it reaches text-to-image Recall@10 of 24.3% (about two orders of magnitude above the 0.12% random baseline) and is the first such model trained jointly on compounds, CRISPR knockouts, and ORF overexpressions.",
  },
];

// Unified Journey Timeline (Work + Research + Projects)
export const journey = [
  // Chronological order (oldest to newest) - will be reversed to show latest first
  {
    id: "journey-edu-3",
    type: "Education",
    title: "Diploma in Computer Engineering",
    organization: "VPMP Polytechnic",
    location: "Gandhinagar, India",
    period: "September 2019 – May 2022",
    status: "Completed",
    summary: "Completed Diploma in Computer Engineering.",
    gpa: "9.22/10.0",
    relevantCoursework: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Structures and Algorithms",
      "Image Processing",
    ],
    tags: ["Education", "Diploma", "Computer Engineering"],
  },
  {
    id: "journey-edu-2",
    type: "Education",
    title: "Bachelor of Engineering in Computer Engineering",
    organization: "LDRP Institute of Technology and Research",
    location: "Gandhinagar, India",
    period: "September 2022 – May 2025",
    status: "Completed",
    summary: "Completed Bachelor of Engineering in Computer Engineering.",
    gpa: "8.41/10.0",
    relevantCoursework: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Structures and Algorithms",
      "Image Processing",
    ],
    tags: ["Education", "Bachelor's", "Computer Engineering"],
  },
  {
    id: "journey-7",
    type: "Project",
    title: "Twitter Sentiment Analysis",
    organization: "Personal Project",
    location: "Social Media Analytics",
    period: "2023",
    summary:
      "Built an end‑to‑end sentiment analysis pipeline on Twitter data using classical ML and NLP tooling.",
    highlights: [
      "Collected and cleaned tweets via Twitter API for multi‑topic sentiment analysis.",
      "Implemented feature extraction and ML classifiers using NLTK, TextBlob, and scikit‑learn.",
    ],
    tags: ["Project", "NLP", "Data Science"],
    links: {
      github: "https://github.com/ShubhamGajjar/Twitter-Sentiment-Analysis.git",
    },
  },
  {
    id: "journey-3",
    type: "Research",
    title: "VGG16‑MCA UNet for Brain Tumor Segmentation",
    organization: "Elsevier (Under Review)",
    location: "Medical Imaging • Brain Tumor • FLAIR MRI • Segmentation",
    period: "December 2023 – April 2025",
    status: "Under Review",
    year: "2025",
    summary:
      "Proposed VGG16‑MCA UNet achieving 99.59% accuracy and 99.71% specificity for brain tumor segmentation in FLAIR MRI images.",
    highlights: [
      "Integrated multi‑channel attention with VGG16 encoder and UNet decoder for improved tumor delineation.",
      "Designed full preprocessing pipeline with skull stripping, intensity normalization, and 256×256 resizing.",
    ],
    tags: ["Research", "Medical Imaging", "UNet"],
    conference: "Elsevier",
    doi: "Pending",
    abstract:
      "Attention-enhanced VGG16–MCA UNet for brain tumor segmentation in FLAIR MRI. Achieves 99.59% accuracy and 99.71% specificity on an LGG dataset, with ensemble variants improving Dice over standard UNet baselines.",
  },
  {
    id: "journey-2",
    type: "Research",
    title: "Hybrid ResNet‑ViT for Skin Cancer Classification",
    organization: "Published at IEEE AIC 2025",
    location: "Medical AI • Skin Cancer • Computer Vision • Vision Transformer",
    period: "September 2024 – July 2025",
    status: "Published",
    year: "2025",
    summary:
      "Published hybrid ResNet50–Vision Transformer model achieving 96.3% accuracy and perfect AUC on HAM10000 for seven-class skin lesion classification.",
    highlights: [
      "Combined frozen ResNet50 feature extractor with four‑head Vision Transformer blocks for balanced local and global feature learning.",
      "Achieved macro F1 of 0.961 and AUC of 1.00 across all classes, presented to 100+ attendees.",
    ],
    tags: ["Research", "Medical AI", "Computer Vision"],
    conference:
      "4th IEEE World Conference on Applied Intelligence and Computing (AIC 2025)",
    doi: "10.1109/AIC60235.2025.11212073",
    abstract:
      "Hybrid ResNet50–Vision Transformer model for seven-class skin lesion classification on HAM10000. Combines local feature learning with global context modeling, achieving 96.3% accuracy, macro F1 0.961, and AUC 1.00 across classes.",
    links: {
      paper: "https://ieeexplore.ieee.org/document/11212073",
      github: "https://github.com/ShubhamGajjar/SkinCancer-Hybrid-ResNet-ViT",
    },
  },
  {
    id: "journey-5",
    type: "Project",
    title: "TrackMania Reinforcement Learning Agent",
    organization: "Personal Project",
    location: "Game AI & RL",
    period: "2024",
    summary:
      "Built an advanced reinforcement learning agent using Implicit Quantile Networks (IQN) to learn competitive racing strategies in TrackMania.",
    highlights: [
      "Implemented continuous control with IQN to handle stochastic rewards and varying track dynamics.",
      "Demonstrated robust decision‑making and competitive lap times under noisy observations.",
    ],
    tags: ["Project", "Reinforcement Learning", "PyTorch"],
    links: {
      github:
        "https://github.com/ShubhamGajjar/TrackMania-ReinforcementLearning",
    },
  },
  {
    id: "journey-6",
    type: "Project",
    title: "Interactive Image Mosaic Generator",
    organization: "Personal Project",
    location: "Creative AI & Image Processing",
    period: "2024",
    summary:
      "Developed a Gradio-based web app to generate artistic image mosaics using vectorized NumPy operations.",
    highlights: [
      "Leveraged efficient vectorized pipelines to create high‑resolution mosaics in real time.",
      "Designed intuitive UI allowing users to control mosaic density and style.",
    ],
    tags: ["Project", "Computer Vision", "NumPy", "Gradio"],
    links: {
      github:
        "https://github.com/ShubhamGajjar/Interactive-Image-Mosaic-Generator.git",
      demo: "https://implici7-image-mosaic-generator.hf.space",
    },
  },
  {
    id: "journey-4",
    type: "Research",
    title: "Extended ResNet50 with Inverse Soft Mask Attention",
    organization: "Journal Submission",
    location:
      "Medical AI • Skin Cancer • Attention Mechanisms • Dermatoscopic Analysis",
    period: "January 2025 – May 2025",
    status: "Submitted",
    year: "2025",
    summary:
      "Developed a two‑stage pipeline with U‑Net++ hair segmentation and Extended ResNet50 classifier, achieving 97.89% accuracy on HAM10000.",
    highlights: [
      "Introduced Inverse Soft Mask Attention to handle hair‑occluded and unoccluded regions jointly.",
      "Used dense residual blocks and Squeeze‑and‑Excitation modules with learnable feature aggregation.",
    ],
    tags: ["Research", "Skin Cancer", "Attention Mechanisms"],
    conference: "Journal Submission",
    doi: "Pending",
    abstract:
      "Two-stage pipeline for hair-occluded skin lesion classification: U‑Net++ hair segmentation followed by an Extended ResNet50 classifier with Inverse Soft Mask Attention. Achieves 97.89% accuracy on HAM10000 with improved robustness across occluded/unoccluded regions.",
  },
  {
    id: "journey-1",
    type: "Work",
    title: "Artificial Intelligence Engineer",
    organization: "BigCircle (UPSAAS Technologies LLP)",
    location: "Gujarat, India",
    period: "Jan 2025 – Aug 2025",
    summary:
      "Developed and deployed AI solutions, optimized dashboards, and delivered mobile apps in an Agile environment.",
    highlights: [],
    responsibilities: [
      "Architected a multi-agent API using distributed compute; reduced report generation from 20 → 5 minutes for 10,000+ queries.",
      "Built pagination + authentication for dashboards; improved load time by ~80% and supported 500+ concurrent sessions.",
      "Shipped iOS apps with React Native; increased mobile engagement by ~45% in the first quarter.",
      "Collaborated in a 5-person Agile team; code reviews improved quality metrics by ~30%.",
    ],
    technologies: [
      "React Native",
      "API Development",
      "Agile Methodologies",
      "System Architecture",
      "Performance Optimization",
    ],
    tags: [
      "Work Experience",
      "AI Engineering",
      "React Native",
      "Distributed Systems",
    ],
  },
  {
    id: "journey-edu-1",
    type: "Education",
    title: "Master of Science in Artificial Intelligence",
    organization: "Northeastern University",
    location: "Portland, Maine",
    period: "September 2025 – May 2027",
    status: "Current",
    summary: "Pursuing Master of Science in Artificial Intelligence.",
    gpa: "4.0/4.0",
    relevantCoursework: [
      "Machine Learning",
      "Deep Learning",
      "Computer Vision",
      "Data Structures and Algorithms",
      "Image Processing",
    ],
    tags: ["Education", "Master's", "Artificial Intelligence"],
  },
  {
    id: "journey-ra-1",
    type: "Work",
    title: "Research Assistant",
    organization: "Northeastern University",
    location: "Portland, Maine",
    period: "March 2026 – Present",
    status: "Current",
    summary:
      "Part-time research assistantship on Vision-Language Models in Biomedicine.",
    highlights: [
      "Vision-Language Models for biomedical image understanding (MedGemma, LLaVA-Med).",
      "MorphoCLIP: contrastive learning for Cell Painting perturbation matching (working paper, 2026).",
    ],
    technologies: [
      "Vision-Language Models",
      "Contrastive Learning",
      "DINOv3",
      "Cell Painting",
      "MedGemma",
      "LLaVA-Med",
      "PyTorch",
    ],
    tags: ["Work Experience", "Research Assistant", "Vision-Language Models", "Biomedicine"],
  },
];

export const socialLinks = {
  email: "gajjar.shu@northeastern.edu",
  phone: "(207) 332-2039",
  location: "Portland, Maine",
  website: "shubhamgajjar.dev",
  github: "https://github.com/ShubhamGajjar",
  linkedin: "https://www.linkedin.com/in/implici7/",
  googleScholar: "https://scholar.google.com/citations?user=MDS9t3QAAAAJ&hl=en",
  orcid: "https://orcid.org/0009-0007-4654-2525",
};

export const experience = "7+ months";

// Education Data
export const education = [
  {
    id: 1,
    degree: "Master of Science in Artificial Intelligence",
    institution: "Northeastern University",
    location: "Portland, Maine",
    period: "September 2025 – May 2027",
    gpa: "4.0/4.0",
    status: "Current",
  },
  {
    id: 2,
    degree: "Bachelor of Engineering in Computer Engineering",
    institution: "LDRP Institute of Technology and Research",
    location: "Gandhinagar, India",
    period: "September 2022 – May 2025",
    gpa: "8.41/10.0",
    status: "Completed",
  },
  {
    id: 3,
    degree: "Diploma in Computer Engineering",
    institution: "VPMP Polytechnic",
    location: "Gandhinagar, India",
    period: "September 2019 – May 2022",
    gpa: "9.22/10.0",
    status: "Completed",
  },
];

export const relevantCoursework = [
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "Data Structures and Algorithms",
  "Image Processing",
];

// Certifications Data
export const certifications = [
  {
    id: 1,
    name: "Python for Data Science",
    issuer: "Indian Institute of Technology Madras",
    year: "2024",
  },
  {
    id: 2,
    name: "Python Data Structures",
    issuer: "University of Michigan, Coursera",
    year: "2024",
  },
];

// Work Experience Data
export const workExperience = [
  {
    id: 2,
    position: "Research Assistant",
    company: "Northeastern University",
    location: "Portland, Maine",
    duration: "March 2026 - Present",
    description:
      "Part-time research assistantship on Vision-Language Models in Biomedicine. Working on biomedical image understanding with MedGemma and LLaVA-Med, and on MorphoCLIP, a contrastive learning framework for matching Cell Painting microscopy images to natural-language perturbation descriptions.",
    responsibilities: [
      "Vision-Language Models for biomedical image understanding (MedGemma, LLaVA-Med).",
      "MorphoCLIP: contrastive learning for Cell Painting perturbation matching across compounds, CRISPR knockouts, and ORF overexpressions (text-to-image Recall@10 of 24.3% on CPJUMP1, ~200x over random baseline).",
      "Frozen DINOv3 ViT-L/16 image backbone with CrossChannelFormer aggregator across five fluorescence channels; BioClinical ModernBERT text branch with trainable projection head.",
    ],
    technologies: [
      "Vision-Language Models",
      "Contrastive Learning",
      "DINOv3",
      "Cell Painting",
      "MedGemma",
      "LLaVA-Med",
      "PyTorch",
      "BioClinical ModernBERT",
    ],
  },
  {
    id: 1,
    position: "Artificial Intelligence Engineer",
    company: "BigCircle (UPSAAS Technologies LLP)",
    location: "Gandhinagar, India",
    duration: "January 2025 - August 2025",
    description:
      "Developed and deployed AI solutions, optimized system performance, and delivered mobile applications in an Agile environment.",
    responsibilities: [
      "Architected multi-agent API system using Python and Flask with distributed computing, reducing report generation from 20 to 5 minutes for 10,000+ queries",
      "Engineered pagination and authentication systems using JavaScript and Next.js, accelerating page load times by 80% with Docker containerization for 500+ concurrent sessions",
      "Delivered iOS applications using React Native for enhanced user experience",
      "Collaborated with 5-member Agile team using Git for version control; performed code reviews to improve code quality",
    ],
    technologies: [
      "Python",
      "Flask",
      "JavaScript",
      "Next.js",
      "React Native",
      "Docker",
      "Git",
      "API Development",
      "Distributed Computing",
      "Agile Methodologies",
      "System Architecture",
      "Performance Optimization",
    ],
  },
];
