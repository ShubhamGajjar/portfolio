// utils/data.js
export const projects = [
  {
    id: 1,
    title: "Advanced Computer Vision System",
    description:
      "Developed a state-of-the-art computer vision system using deep learning for real-time object detection and classification. Implemented YOLO architecture with custom dataset training.",
    technologies: ["Python", "TensorFlow", "OpenCV", "YOLO", "Docker"],
    category: "AI/ML Core",
    github: "https://github.com/yourusername/computer-vision-system",
    live: "https://demo-link.com",
    image: "/project1.jpg",
  },
  {
    id: 2,
    title: "Natural Language Processing Pipeline",
    description:
      "Built an end-to-end NLP pipeline for sentiment analysis and text classification using transformer models. Achieved 95% accuracy on benchmark datasets.",
    technologies: ["Python", "PyTorch", "Transformers", "BERT", "FastAPI"],
    category: "AI/ML Core",
    github: "https://github.com/yourusername/nlp-pipeline",
    live: "https://demo-link.com",
    image: "/project2.jpg",
  },
  {
    id: 3,
    title: "Machine Learning Model Deployment",
    description:
      "Designed and deployed ML models using MLOps best practices. Implemented automated training pipelines and model versioning with MLflow.",
    technologies: ["Python", "MLflow", "Docker", "Kubernetes", "AWS"],
    category: "MLOps",
    github: "https://github.com/yourusername/ml-deployment",
    live: "https://demo-link.com",
    image: "/project3.jpg",
  },
  {
    id: 4,
    title: "Data Science Analytics Dashboard",
    description:
      "Created comprehensive analytics dashboard for business intelligence using advanced statistical analysis and predictive modeling techniques.",
    technologies: ["Python", "Pandas", "Scikit-learn", "Plotly", "Streamlit"],
    category: "Data Science",
    github: "https://github.com/yourusername/analytics-dashboard",
    live: "https://demo-link.com",
    image: "/project4.jpg",
  },
  {
    id: 5,
    title: "Reinforcement Learning Agent",
    description:
      "Developed a reinforcement learning agent for autonomous decision-making in complex environments using Q-learning and Deep Q-Networks.",
    technologies: ["Python", "Gym", "PyTorch", "NumPy", "Matplotlib"],
    category: "AI/ML Core",
    github: "https://github.com/yourusername/rl-agent",
    live: "https://demo-link.com",
    image: "/project5.jpg",
  },
  {
    id: 6,
    title: "AI-Powered Recommendation System",
    description:
      "Built a collaborative filtering recommendation system using matrix factorization and neural networks for personalized content delivery.",
    technologies: ["Python", "TensorFlow", "Pandas", "Flask", "Redis"],
    category: "Data Science",
    github: "https://github.com/yourusername/recommendation-system",
    live: "https://demo-link.com",
    image: "/project6.jpg",
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
  ],
  "Deep Learning": [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Transformers",
    "CNN",
    "RNN/LSTM",
    "GANs",
  ],
  "Data Science": [
    "Python",
    "Pandas",
    "NumPy",
    "Scikit-learn",
    "Matplotlib",
    "Seaborn",
    "Jupyter",
  ],
  "MLOps & Deployment": [
    "Docker",
    "Kubernetes",
    "MLflow",
    "AWS",
    "CI/CD",
    "Model Versioning",
  ],
  "Research & Development": [
    "Academic Writing",
    "Literature Review",
    "Experimental Design",
    "Statistical Analysis",
    "Research Publication",
  ],
};

export const researchPapers = [
  {
    id: 1,
    title: "A Hybrid ResNet-ViT Architecture for Skin Cancer Classification",
    authors:
      "Shubham Gajjar, Harshal Joshi, Om Rathod, Vishal Barot, Deep Joshi",
    conference:
      "4th IEEE World Conference on Applied Intelligence and Computing (AIC 2025)",
    status: "Accepted",
    year: "2025",
    description:
      "Proposed a hybrid ResNet50-ViT model for skin cancer classification achieving 96.3% testing accuracy. The architecture fuses ViT's global context awareness with ResNet's strong local feature extraction, demonstrating ROC values of nearly 1.00 for all test set classes. This breakthrough enables accurate classification of seven lesion classes from the HAM10000 dataset.",
    keywords: [
      "Computer Vision",
      "Deep Learning",
      "Medical AI",
      "Skin Cancer",
      "ResNet",
      "Vision Transformer",
    ],
    doi: "Pending - IEEE Xplore",
    pdf: "/AIC 2025 Certificate.pdf",
    certificate: "/AIC_2025_Presentation_Certificate.pdf",
    abstract:
      "Correct identification of different skin lesions, such as melanoma, from dermatoscopic images is a major challenge for automated systems, thus causing delay in early diagnosis. Most of the current models are unable to achieve an optimal balance between local feature extraction and global context understanding. Our work overcomes this challenge by proposing a hybrid ResNet50-ViT model. This architecture is significant because it allows the categorization of seven lesion classes from the HAM10000 dataset by fusing ViT's global context awareness with ResNet's strong local feature extraction. For improving its robustness, data augmentation methods were used. The designed model demonstrated an testing accuracy of 96.3% and showed better discriminative ability, as indicated through ROC values of nearly 1.00 for all test set classes. This hybrid model classifies different types of skin lesions with high accuracy, which is a major breakthrough in computer-aided dermatological diagnosis.",
  },
  {
    id: 2,
    title:
      "VGG16-MCA UNet: A Hybrid Deep Learning Approach for Enhanced Brain Tumor Segmentation in FLAIR MRI",
    authors: "Shubham Gajjar, Deep Joshi, Avi Poptani, Vishal Barot",
    conference: "International Journal on Machine Learning",
    status: "Under Review",
    year: "2024",
    description:
      "Proposed a novel VGG16-MCA UNet hybrid architecture for enhanced brain tumor segmentation in FLAIR MRI images. The approach combines VGG16's robust feature extraction with Multi-Scale Context Aggregation (MCA) and UNet's precise localization capabilities. This innovative architecture demonstrates superior performance in handling complex tumor boundaries and varying contrast levels in FLAIR MRI sequences, contributing to automated brain tumor detection and diagnosis. Paper will be available for download after publication.",
    keywords: [
      "Computer Vision",
      "Deep Learning",
      "Medical AI",
      "Brain Tumor",
      "UNet",
      "FLAIR MRI",
    ],
    doi: "Pending",
    pdf: "Will be available after publication",
    abstract:
      "Computer vision-based automated brain tumor segmentation is crucial in medical imaging for accurate diagnosis and treatment planning. Traditional segmentation methods often struggle with the complex and heterogeneous nature of brain tumors, particularly in FLAIR MRI sequences where tumor boundaries can be ambiguous and irregular. This research proposes a novel hybrid deep learning approach combining VGG16 architecture with Multi-Scale Context Aggregation (MCA) and UNet for enhanced brain tumor segmentation in FLAIR MRI images. The proposed VGG16-MCA UNet architecture leverages the robust feature extraction capabilities of VGG16, enhanced by multi-scale context aggregation mechanisms that capture both local and global spatial information. The integration of MCA modules enables the model to process multiple scales simultaneously, improving the detection of tumor boundaries and regions with varying intensities. The UNet decoder path ensures precise localization and detailed segmentation maps. Our experimental results demonstrate significant improvements in segmentation accuracy compared to baseline methods, with enhanced Dice coefficient and Hausdorff distance metrics. The model shows particular strength in handling challenging cases with irregular tumor shapes and varying contrast levels in FLAIR MRI sequences. This work contributes to the advancement of automated medical image analysis and has potential applications in clinical decision support systems for brain tumor diagnosis and treatment planning.",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/yourusername",
    icon: "linkedin",
  },
  {
    name: "Twitter",
    url: "https://twitter.com/yourusername",
    icon: "twitter",
  },
  {
    name: "Email",
    url: "mailto:your.email@example.com",
    icon: "email",
  },
];

export const experience = "7+ months";
