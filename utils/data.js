// utils/data.js
export const projects = [
  {
    id: 1,
    title: "Skin Cancer Classification (Research)",
    description:
      "Designed hybrid architecture combining frozen ResNet50 feature extractor with four-head Vision Transformer blocks, attaining 96.3% accuracy and macro F1 of 0.961 on HAM10000 dataset. Integrated Global Average Pooling and multi-head self-attention for seven-class skin lesion classification, achieving Area Under Curve of 1.00 across all classes. Published and presented at IEEE World Conference on Applied Intelligence and Computing (AIC 2025) to 100+ attendees.",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Deep Learning",
      "Computer Vision",
      "Medical AI",
      "ResNet50",
      "Vision Transformer",
      "HAM10000 Dataset",
      "Image Classification",
    ],
    category: "Research",
    github: null,
    live: null,
    image: "/skin-cancer.jpg",
    impact: "Medical AI Research - Published at IEEE AIC 2025",
    status: "Published",
  },
  {
    id: 2,
    title: "Brain Tumor Segmentation (Research)",
    description:
      "Led innovation by designing VGG16-based encoder with Multi-Channel Attention decoder achieving 99.59% accuracy and 99.71% specificity on LGG Brain MRI Segmentation dataset from 110 low-grade glioma patients. Implemented ensemble learning combining multiple model configurations, improving Dice coefficient by 3.7% over standard UNet. Applied data engineering with preprocessing pipeline implementing skull stripping, intensity normalization, and resizing to 256x256 pixels for FLAIR MRI scans.",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Deep Learning",
      "Computer Vision",
      "Medical Imaging",
      "UNet",
      "VGG16",
      "Multi-Channel Attention",
      "FLAIR MRI Processing",
    ],
    category: "Research",
    github: null,
    live: null,
    image: "/brain-tumor.jpg",
    impact: "Medical AI Research - Under Review at Elsevier",
    status: "Under Review",
  },
  {
    id: 3,
    title:
      "Extended ResNet50 with Inverse Soft Mask Attention for Skin Cancer (Research)",
    description:
      "Developed two-stage pipeline combining U-Net++ hair segmentation with Extended ResNet50 classifier featuring Inverse Soft Mask Attention mechanism, achieving 97.89% accuracy on HAM10000 dataset with 10,015 dermoscopic images. Applied creativity by integrating dense residual blocks and Squeeze-and-Excitation modules with learnable weighted feature aggregation for hair-occluded and unoccluded regions. Utilized Nadam optimizer with Cosine Decay Restarts and Sparse Categorical Crossentropy loss, incorporating explainable AI principles ensuring model deployment readiness.",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Deep Learning",
      "Computer Vision",
      "Medical AI",
      "ResNet50",
      "Inverse Soft Mask Attention",
      "U-Net++",
      "HAM10000 Dataset",
      "Image Classification",
    ],
    category: "Research",
    github: null,
    live: null,
    image: "/skin-cancer-advanced.jpg",
    impact: "Medical AI Research - Submitted to Journal",
    status: "Submitted",
  },
  {
    id: 4,
    title: "TrackMania Reinforcement Learning Agent",
    description:
      "Developed an advanced reinforcement learning agent for TrackMania racing game using Implicit Quantile Networks (IQN). The agent learns optimal racing strategies through trial and error, achieving competitive lap times and demonstrating robust decision-making in unpredictable racing situations.",
    technologies: [
      "Python",
      "PyTorch",
      "Reinforcement Learning",
      "Implicit Quantile Networks",
      "Neural Networks",
      "Computer Vision",
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
    id: 5,
    title: "Twitter Sentiment Analysis (NLP Project)",
    description:
      "Built a comprehensive sentiment analysis system using Twitter API to analyze public sentiment on various topics. Implements NLP techniques and machine learning models for real-time sentiment classification.",
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
    id: 6,
    title: "Interactive Image Mosaic Generator",
    description:
      "Developed an interactive web application for generating artistic image mosaics using vectorized NumPy operations. Built with Gradio for an intuitive user interface, enabling users to create stunning mosaic art from input images through efficient computational image processing techniques.",
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
  "Tools & Technologies": [
    "Git",
    "Vercel",
    "Framer Motion",
    "Docker",
    "Flask",
  ],
  "Research & Development": [
    "Academic Writing",
    "Literature Review",
    "Experimental Design",
    "IEEE Publications",
    "Research Methodology",
    "Medical AI Research",
  ],
  "Game AI & RL": [
    "Reinforcement Learning",
    "Deep Q-Networks",
    "Genetic Algorithms",
    "Game AI Development",
    "Neural Network Training",
  ],
  "Cloud & DevOps": ["Docker", "GitHub Actions"],
  Tools: ["Jupyter", "VSCode", "Google Colab"],
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
    pdf: "/AIC 2025 Certificate.pdf",
    certificate: "/AIC_2025_Presentation_Certificate.pdf",
    abstract:
      "Correct identification of different skin lesions, such as melanoma, from dermatoscopic images is a major challenge for automated systems, thus causing delay in early diagnosis. Most of the current models are unable to achieve an optimal balance between local feature extraction and global context understanding. Our work overcomes this challenge by proposing a hybrid ResNet50-ViT model. This architecture combines frozen ResNet50 feature extractor with four-head Vision Transformer blocks, allowing the categorization of seven lesion classes from the HAM10000 dataset by fusing ViT's global context awareness with ResNet's strong local feature extraction. The designed model demonstrated 96.3% accuracy, macro F1 of 0.961, and Area Under Curve of 1.00 across all classes, which is a major breakthrough in computer-aided dermatological diagnosis.",
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
      "Computer vision-based automated brain tumor segmentation is crucial in medical imaging for accurate diagnosis and treatment planning. This research proposes a novel hybrid deep learning approach combining VGG16 architecture with Multi-Channel Attention (MCA) and UNet for enhanced brain tumor segmentation in FLAIR MRI images. The proposed VGG16-MCA UNet architecture leverages VGG16's robust feature extraction capabilities, enhanced by multi-channel attention mechanisms that capture both local and global spatial information. The model achieved 99.59% accuracy and 99.71% specificity on LGG Brain MRI Segmentation dataset from 110 low-grade glioma patients. Ensemble learning combining multiple model configurations improved Dice coefficient by 3.7% over standard UNet. The preprocessing pipeline implements skull stripping, intensity normalization, and resizing to 256x256 pixels for FLAIR MRI scans, adhering to AI ethics for medical applications. This work contributes to the advancement of automated medical image analysis with potential applications in clinical decision support systems.",
  },
  {
    id: 3,
    title: "Extended ResNet50 with Inverse Soft Mask Attention for Skin Cancer",
    authors:
      "Shubham Gajjar, Harshal Joshi, Om Rathod, Vishal Barot, Deep Joshi",
    conference: "Journal Submission",
    status: "Submitted",
    year: "2025",
    description:
      "Developed two-stage pipeline combining U-Net++ hair segmentation with Extended ResNet50 classifier featuring Inverse Soft Mask Attention mechanism, achieving 97.89% accuracy on HAM10000 dataset with 10,015 dermoscopic images. Applied creativity by integrating dense residual blocks and Squeeze-and-Excitation modules with learnable weighted feature aggregation for hair-occluded and unoccluded regions. Utilized Nadam optimizer with Cosine Decay Restarts and Sparse Categorical Crossentropy loss, incorporating explainable AI principles ensuring model deployment readiness.",
    keywords: [
      "Computer Vision",
      "Deep Learning",
      "Medical AI",
      "Skin Cancer",
      "ResNet",
      "Inverse Soft Mask Attention",
      "U-Net++",
    ],
    doi: "Pending",
    abstract:
      "Skin cancer detection from dermoscopic images is challenging due to hair occlusion and varying lesion characteristics. This work presents an extended ResNet50 architecture with Inverse Soft Mask Attention mechanism for robust skin cancer classification. The two-stage pipeline first uses U-Net++ for precise hair segmentation, then employs Extended ResNet50 classifier with Inverse Soft Mask Attention to process both hair-occluded and unoccluded regions. The architecture integrates dense residual blocks and Squeeze-and-Excitation modules with learnable weighted feature aggregation, enabling the model to handle complex dermatoscopic images. Training utilizes Nadam optimizer with Cosine Decay Restarts and Sparse Categorical Crossentropy loss. The model achieved 97.89% accuracy on HAM10000 dataset with 10,015 dermoscopic images, demonstrating superior performance in handling hair-occluded lesions. This work incorporates explainable AI principles, ensuring model deployment readiness for clinical applications.",
  },
];

// Unified Journey Timeline (Work + Research + Projects)
export const journey = [
  // Chronological order (oldest to newest) for Research + Work
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
      "Computer vision-based automated brain tumor segmentation is crucial in medical imaging for accurate diagnosis and treatment planning. This research proposes a novel hybrid deep learning approach combining VGG16 architecture with Multi-Channel Attention (MCA) and UNet for enhanced brain tumor segmentation in FLAIR MRI images. The proposed VGG16-MCA UNet architecture leverages VGG16's robust feature extraction capabilities, enhanced by multi-channel attention mechanisms that capture both local and global spatial information. The model achieved 99.59% accuracy and 99.71% specificity on LGG Brain MRI Segmentation dataset from 110 low-grade glioma patients. Ensemble learning combining multiple model configurations improved Dice coefficient by 3.7% over standard UNet. The preprocessing pipeline implements skull stripping, intensity normalization, and resizing to 256x256 pixels for FLAIR MRI scans, adhering to AI ethics for medical applications. This work contributes to the advancement of automated medical image analysis with potential applications in clinical decision support systems.",
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
      "Correct identification of different skin lesions, such as melanoma, from dermatoscopic images is a major challenge for automated systems, thus causing delay in early diagnosis. Most of the current models are unable to achieve an optimal balance between local feature extraction and global context understanding. Our work overcomes this challenge by proposing a hybrid ResNet50-ViT model. This architecture combines frozen ResNet50 feature extractor with four-head Vision Transformer blocks, allowing the categorization of seven lesion classes from the HAM10000 dataset by fusing ViT's global context awareness with ResNet's strong local feature extraction. The designed model demonstrated 96.3% accuracy, macro F1 of 0.961, and Area Under Curve of 1.00 across all classes, which is a major breakthrough in computer-aided dermatological diagnosis.",
    links: {
      paper: "https://ieeexplore.ieee.org/document/11212073",
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
      "Skin cancer detection from dermoscopic images is challenging due to hair occlusion and varying lesion characteristics. This work presents an extended ResNet50 architecture with Inverse Soft Mask Attention mechanism for robust skin cancer classification. The two-stage pipeline first uses U-Net++ for precise hair segmentation, then employs Extended ResNet50 classifier with Inverse Soft Mask Attention to process both hair-occluded and unoccluded regions. The architecture integrates dense residual blocks and Squeeze-and-Excitation modules with learnable weighted feature aggregation, enabling the model to handle complex dermatoscopic images. Training utilizes Nadam optimizer with Cosine Decay Restarts and Sparse Categorical Crossentropy loss. The model achieved 97.89% accuracy on HAM10000 dataset with 10,015 dermoscopic images, demonstrating superior performance in handling hair-occluded lesions. This work incorporates explainable AI principles, ensuring model deployment readiness for clinical applications.",
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
      "Demonstrated problem-solving by architecting a multi-agent Application Programming Interface system using distributed computing, reducing report generation from 20 to 5 minutes for 10,000+ queries.",
      "Exhibited creativity by engineering pagination and authentication systems for dashboards, accelerating page load times by 80%, and ensuring model deployment stability for 500+ concurrent sessions.",
      "Applied continuous learning to deliver iOS applications using React Native, increasing mobile engagement by 45% within the first quarter.",
      "Collaborated with a 5-member team in Agile sprints; performed code reviews to improve quality metrics by 30%.",
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
