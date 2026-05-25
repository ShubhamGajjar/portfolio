// utils/data.js
export const projects = [
  {
    id: 5,
    title: "Next-Step: Full-Stack School Management Platform",
    year: "2026",
    description:
      "Full-stack school management platform built as a 5-person academic project. Async REST API with FastAPI exposing 20+ endpoints across 10 router modules backed by 9 SQLAlchemy ORM models (cascade deletes, JSON columns, unique constraints), with Alembic migrations on PostgreSQL and auto-generated Swagger / ReDoc docs. JWT auth with Argon2 hashing and Google OAuth 2.0 PKCE flow drives role-aware access for Admin, Teacher, and Student via factory-pattern middleware (get_current_user, require_admin, require_roles). Cross-platform React Native + Expo app (iOS, Android, Web) with TypeScript, Zustand state management, file-based routing via Expo Router, and AsyncStorage session persistence. Google Drive API integration for document management, Celery + Redis with Flower for background task monitoring. Co-developed via feature-branch Git workflow with 11+ pull requests, pytest + httpx async integration tests, and AI-assisted development tooling.",
    technologies: [
      "FastAPI",
      "PostgreSQL",
      "SQLAlchemy",
      "Alembic",
      "Celery",
      "Redis",
      "Flower",
      "JWT",
      "Argon2",
      "OAuth 2.0",
      "React Native",
      "Expo",
      "TypeScript",
      "Zustand",
      "Google Drive API",
      "pytest",
      "httpx",
    ],
    category: "Full-Stack",
    github: null,
    live: null,
    impact: "Academic Project · May 2026",
    status: "Completed",
  },
  {
    id: 1,
    title: "TrackMania Reinforcement Learning Agent",
    year: "2024",
    description:
      "Autonomous racing agent in PyTorch implementing Implicit Quantile Networks (IQN) with NumPy-based state processing, reaching 85% track completion through iterative reward shaping. Training loop optimized with CUDA-accelerated parallel environment simulations, cutting training time by 60%.",
    technologies: [
      "Python",
      "PyTorch",
      "IQN",
      "Reinforcement Learning",
      "Deep RL",
      "CUDA",
      "NumPy",
      "dxcam",
    ],
    category: "AI/ML Core",
    github: "https://github.com/ShubhamGajjar/TrackMania-ReinforcementLearning",
    live: null,
    image: "/trackmania.jpg",
    impact: "Game AI & RL · Academic Project · November 2024",
    status: "Completed",
  },
  {
    id: 3,
    title: "Interactive Image Mosaic Generator",
    year: "2024",
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
    id: 2,
    title: "Twitter Sentiment Analysis (NLP Project)",
    year: "2023",
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
];

export const skills = {
  "Programming Languages": ["Python", "JavaScript"],
  "Deep Learning": [
    "PyTorch",
    "TensorFlow",
    "Keras",
    "HuggingFace Transformers",
    "CUDA",
    "QLoRA",
    "PEFT",
    "TRL",
    "bitsandbytes",
  ],
  "Computer Vision & Multimodal": [
    "OpenCV",
    "Albumentations",
    "Matplotlib",
    "MedGemma",
    "MedSigLIP",
    "DINOv3",
    "CLIP",
    "Vision Transformers",
    "UNet",
    "ResNet",
  ],
  "Data Science & MLOps": [
    "NumPy",
    "Pandas",
    "Scikit-learn",
    "Seaborn",
    "Jupyter",
    "Databricks",
    "MLflow",
    "Unity Catalog",
    "Spark",
    "Delta Tables",
    "Docker",
    "PostgreSQL",
  ],
  "Web Development & Tools": [
    "Next.js",
    "React Native",
    "FastAPI",
    "Tailwind CSS",
    "Flask",
    "Git",
    "Vercel",
    "Expo",
    "TypeScript",
  ],
};

export const researchInterests = [
  "Vision-language models for biomedical imaging",
  "Multimodal contrastive learning",
  "Parameter-efficient fine-tuning of large foundation models",
  "Attention mechanisms for medical image segmentation and classification",
  "Scalable data engineering for terabyte-scale microscopy and pathology datasets",
];

export const researchPapers = [
  {
    id: 1,
    title: "A Hybrid ResNet-ViT Architecture for Skin Cancer Classification",
    authors:
      "Shubham Gajjar, Om Rathod, Deep Joshi, Harshal Joshi, Vishal Barot",
    conference:
      "4th IEEE World Conference on Applied Intelligence and Computing (AIC 2025)",
    status: "Published",
    year: "2025",
    description:
      "Hybrid architecture combining a frozen ResNet50 backbone (feature extractor) with a four-head Vision Transformer (Global Average Pooling + multi-head self-attention) for seven-class skin lesion classification on HAM10000. 96.3% test accuracy, macro F1 0.961, AUC ~1.00. Published and presented at IEEE AIC 2025 (July 2025) to 100+ attendees.",
    keywords: [
      "Computer Vision",
      "Deep Learning",
      "Medical AI",
      "Skin Cancer",
      "ResNet",
      "Vision Transformer",
    ],
    doi: "10.1109/AIC66080.2025.11212073",
    ieeeUrl: "https://ieeexplore.ieee.org/document/11212073",
    github: "https://github.com/ShubhamGajjar/SkinCancer-Hybrid-ResNet-ViT",
    pdf: "/AIC 2025 Certificate.pdf",
    certificate: "/AIC_2025_Presentation_Certificate.pdf",
    abstract:
      "Hybrid architecture combining a frozen ResNet50 backbone (feature extractor) with Vision Transformer blocks using a four-head multi-head self-attention mechanism, Global Average Pooling, and transformer-based global dependency modeling for seven-class skin lesion classification (melanoma, nevus, basal cell carcinoma, benign keratosis, dermatofibroma, actinic keratosis, vascular lesions). Achieves 96.3% test accuracy, macro F1 0.961, and AUC ~1.00 across all seven classes on HAM10000. Applies stratified data augmentation (rotation ±20°, horizontal/vertical flips, brightness ±25 / contrast ±10%) to address class imbalance, scaling 10,015 source images to ~74,353. Trained with the Nadam optimizer (lr 0.001) and sparse categorical crossentropy on a 70/15/15 stratified split (7,010 / 1,503 / 1,502).",
  },
  {
    id: 2,
    title:
      "VGG16-MCA UNet: A Hybrid Deep Learning Approach for Enhanced Brain Tumor Segmentation in FLAIR MRI",
    authors: "Shubham Gajjar, Deep Joshi, Avi Poptani, Vishal Barot",
    conference: "Manuscript · July 2025",
    status: "Under Review",
    year: "2025",
    description:
      "Hybrid segmentation framework pairing a pretrained VGG16 encoder with a Multi-Channel Attention decoder for brain tumor segmentation in FLAIR MRI. Focal Tversky Loss handles severe class imbalance (tumor regions ~2–5% of image area). Ensemble across checkpoints/configs. 99.59% accuracy and 99.71% specificity on the LGG Brain MRI dataset (110 patients, TCGA).",
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
      "Hybrid segmentation framework integrating a pretrained VGG16 encoder with a Multi-Channel Attention decoder for brain tumor segmentation in FLAIR MRI. Applies Focal Tversky Loss to address severe class imbalance (tumor regions ~2–5% of total image area), with ensemble learning over multiple checkpoints and architectural configurations. Skip connections, batch normalization, and dropout regularize against overfitting. Achieves 99.59% accuracy and 99.71% specificity on the LGG Brain MRI Segmentation dataset (110 low-grade glioma patients, TCGA). Trained with Adam (lr 0.05), ReduceLROnPlateau, and EarlyStopping; 35 systematic experiments compare against standard UNet, Attention UNet, and Scaler Attention UNet. Preprocessing pipeline: skull stripping, intensity normalization, 256×256 resize. Improves Dice and IoU with enhanced boundary delineation.",
  },
  {
    id: 4,
    title: "Extended ResNet50: Inverse Soft Mask Attention for Skin Cancer Classification",
    authors:
      "Shubham Gajjar, Om Rathod, Deep Joshi, Harshal Joshi, Vishal Barot",
    conference: "Manuscript · 2025",
    status: "Under Review",
    year: "2025",
    description:
      "Two-stage deep learning pipeline integrating a U-Net++ hair segmentation model with an Extended ResNet50 classifier featuring a novel Inverse Soft Mask Attention mechanism. 97.89% test accuracy on HAM10000, outperforming SCCNet (95.20%), VCCINet (93.18%), and SPCB-Net (97.10%).",
    keywords: [
      "Computer Vision",
      "Medical AI",
      "Skin Cancer",
      "Attention Mechanisms",
      "ResNet",
      "Dermatoscopic",
    ],
    doi: "Pending",
    abstract:
      "Two-stage pipeline integrating a U-Net++ hair segmentation model with an Extended ResNet50 classifier featuring a novel Inverse Soft Mask Attention mechanism. Dense residual blocks and Squeeze-and-Excitation modules with learnable weighted feature aggregation combine hair-occluded and unoccluded image regions. Achieves 97.89% test accuracy, 99.67% train, and 97.74% validation at epoch 22 on HAM10000 (10,015 dermoscopic images, seven classes). Trained with Nadam + Cosine Decay Restarts and sparse categorical crossentropy. Systematic experimentation across 21 architectural trials covering Vision Transformers, hybrid models, and custom attention mechanisms. Outperforms SCCNet (95.20%), VCCINet (93.18%), and SPCB-Net (97.10%).",
  },
  {
    id: 3,
    title:
      "MorphoCLIP: Cell Microscopy and Text Contrastive Learning",
    authors: "Shubham Gajjar (Team Lead, 3-person team)",
    conference: "Research Capstone · April 2026",
    status: "In Progress",
    year: "2026",
    description:
      "Dual-encoder contrastive system aligning cell microscopy with natural-language perturbations (drugs, CRISPR knockouts, ORF overexpressions). 24.3% Recall@10 on 817-perturbation retrieval — 3.3× over CellCLIP and 200× over random — using ~8M trainable params vs CellCLIP's 1.48B (185× reduction). Median rank 28/817 (top 3.4%).",
    keywords: [
      "Vision-Language",
      "Contrastive Learning",
      "Cell Painting",
      "DINOv3",
      "Drug Discovery",
      "Microscopy",
    ],
    abstract:
      "MorphoCLIP is a contrastive learning framework that embeds Cell Painting microscopy images and natural-language perturbation descriptions in a shared 512-dimensional space. The image branch uses a frozen DINOv3 ViT-L/16 backbone with a CrossChannelFormer aggregator across five fluorescence channels; the text branch uses BioClinical ModernBERT with a trainable projection head. Trained with Continuously Weighted Contrastive Loss (CWCL) on the CPJUMP1 benchmark (51 plates, 817 perturbations), it reaches text-to-image Recall@10 of 24.3% — about two orders of magnitude above the 0.12% random baseline and 3.3× over CellCLIP, with 185× fewer trainable parameters (8M vs 1.48B). The first such model trained jointly on compounds, CRISPR knockouts, and ORF overexpressions.",
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
      "MorphoCLIP: contrastive learning for Cell Painting perturbation matching (2026).",
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
  linkedin: "https://www.linkedin.com/in/shubhamgajjar/",
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
  "Foundations of Artificial Intelligence",
  "Machine Learning",
  "Research Capstone",
  "Algorithms",
  "Applied Programming and Data Processing for AI",
  "Deep Learning",
  "Computer Vision",
  "Image Processing",
  "Data Structures and Algorithms",
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
    duration: "February 2026 - Present",
    description:
      "Building a vision-language model for automated interpretation of veterinary fine needle aspirate cytology, focused on mast cell tumor detection and grading. End-to-end MedGemma 1.5 4B fine-tuning pipeline with QLoRA on a MedSigLIP encoder, deployed on Databricks with MLflow and Unity Catalog.",
    responsibilities: [
      "Designed end-to-end VLM fine-tuning pipeline using MedGemma 1.5 4B with QLoRA (4-bit quantization + LoRA adapters) on a MedSigLIP vision encoder for multi-class mast cell tumor classification and cytologic interpretation; built in PyTorch with HuggingFace Transformers, TRL (SFTTrainer), PEFT, and bitsandbytes.",
      "Engineered multi-channel image preprocessing pipeline merging 4 fluorescence/brightfield channels (bf_green, bf_violet, fl_uv, fl_blue) into pseudo-RGB inputs via per-image P1/P99 normalization.",
      "Analyzed ~8M single-channel cell images across 19 channels, mapped structured vs unstructured pathology fields, and isolated 2,653 disease-relevant cases spanning 9 grade categories and 66 ground-truth annotated runs.",
      "Curated a 5-task VQA dataset (structured reporting, pathological process identification, key finding extraction, cell type classification, cytologic interpretation) by converting hierarchical pathologist dropdown annotations across 4 branches and 8 follow-up question types into natural-language Q&A pairs.",
      "Encoded reasoning from 4 cytologic grading systems (Camus, Paes, Kiupel, Patnaik) as chain-of-thought training signals; built interactive visualizations of the diagnostic decision tree to align the team on annotation schema.",
      "Deployed Databricks training infrastructure with auto-detection across 4 hardware tiers (T4, A10G, A100, H100), pre-loaded image caching that eliminated S3 I/O during training, custom callbacks tracking token accuracy and validation loss, and MLflow + Unity Catalog for experiment tracking and model registry.",
      "Architected the Unity Catalog schema (catalogs, schemas, volumes for images, Q&A pairs, model artifacts); evaluated checkpoints with token-level accuracy, ROUGE-L, F1, precision, recall, and perplexity across train/validation/test splits.",
    ],
    technologies: [
      "MedGemma 1.5 4B",
      "MedSigLIP",
      "QLoRA",
      "PyTorch",
      "HuggingFace Transformers",
      "TRL",
      "PEFT",
      "bitsandbytes",
      "Databricks",
      "Unity Catalog",
      "MLflow",
      "Spark",
      "Delta Tables",
      "Amazon S3",
      "Vision-Language Models",
    ],
  },
  {
    id: 1,
    position: "Artificial Intelligence Engineer",
    company: "BigCircle (UPSAAS Technologies LLP)",
    location: "Gandhinagar, India",
    duration: "January 2025 - August 2025",
    description:
      "Built an end-to-end Deep Research pipeline and shipped pagination/auth systems for a high-concurrency platform; collaborated with a 5-engineer Agile team.",
    responsibilities: [
      "Built an end-to-end Deep Research pipeline in Python orchestrating LLM-based prompt generation, Firecrawl API for web scraping, OpenAI ChatGPT API for content summarization, graph visualization with Matplotlib and Seaborn, and automated Typst PDF report generation; reduced processing time by 75% through API call batching and concurrency tuning.",
      "Engineered pagination and authentication systems using JavaScript and Next.js, accelerating page load times by 40% with Docker containerization for 500+ concurrent sessions.",
      "Collaborated with a 5-engineer team in Agile sprints using Git for version control; contributed to code reviews and CI workflow standardization.",
    ],
    technologies: [
      "Python",
      "Firecrawl API",
      "OpenAI ChatGPT API",
      "Typst",
      "Matplotlib",
      "Seaborn",
      "JavaScript",
      "Next.js",
      "Docker",
      "Git",
      "Agile Methodologies",
    ],
  },
];
