// utils/data.js
export const projects = [
  {
    id: 1,
    title: "Brain Tumor Segmentation with VGG16-MCA UNet",
    description:
      "Novel hybrid deep learning architecture combining VGG16 with Multi-Scale Context Aggregation (MCA) and UNet for enhanced brain tumor segmentation in FLAIR MRI images. Achieved superior performance in handling complex tumor boundaries and varying contrast levels.",
    technologies: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "OpenCV",
      "Medical Imaging",
      "UNet",
      "VGG16",
    ],
    category: "Research",
    github: "https://github.com/ShubhamGajjar/brain-tumor-segmentation",
    live: null,
    image: "/brain-tumor.jpg",
    impact: "Medical AI Research",
    status: "Under Review - International Journal",
  },
  {
    id: 2,
    title: "Skin Cancer Classification - Hybrid ResNet-ViT",
    description:
      "Proposed hybrid ResNet50-ViT model for skin cancer classification achieving 96.3% testing accuracy. Fuses ViT's global context awareness with ResNet's strong local feature extraction, demonstrating ROC values of nearly 1.00 for all test set classes.",
    technologies: [
      "Python",
      "TensorFlow",
      "PyTorch",
      "Computer Vision",
      "ResNet",
      "Vision Transformer",
      "Medical AI",
    ],
    category: "Research",
    github: "https://github.com/ShubhamGajjar/skin-cancer-classification",
    live: null,
    image: "/skin-cancer.jpg",
    impact: "IEEE AIC 2025 - Accepted",
    status: "Published Research",
  },
  {
    id: 3,
    title: "TrackMania Reinforcement Learning Agent",
    description:
      "Developed an advanced reinforcement learning agent for TrackMania racing game using deep Q-learning and neural networks. The agent learns optimal racing strategies through trial and error, achieving competitive lap times.",
    technologies: [
      "Python",
      "PyTorch",
      "Gym",
      "Reinforcement Learning",
      "Deep Q-Networks",
      "Neural Networks",
    ],
    category: "AI/ML Core",
    github: "https://github.com/ShubhamGajjar/trackmania-rl",
    live: null,
    image: "/trackmania.jpg",
    impact: "Game AI & RL Research",
    status: "Completed",
  },
  {
    id: 4,
    title: "Twitter Sentiment Analysis System",
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
    ],
    category: "Data Science",
    github: "https://github.com/ShubhamGajjar/sentiment-analysis-twitter",
    live: null,
    image: "/sentiment.jpg",
    impact: "Social Media Analytics",
    status: "Completed",
  },
  {
    id: 5,
    title: "AI Snake Game with Deep Learning",
    description:
      "Implemented classic Snake game with AI agent using deep learning. The agent learns optimal pathfinding and survival strategies through neural network training, demonstrating reinforcement learning concepts.",
    technologies: [
      "Python",
      "PyTorch",
      "Pygame",
      "Neural Networks",
      "Reinforcement Learning",
      "Game AI",
    ],
    category: "AI/ML Core",
    github: "https://github.com/ShubhamGajjar/ai-snake-game",
    live: null,
    image: "/snake-game.jpg",
    impact: "Educational AI Project",
    status: "Completed",
  },
  {
    id: 6,
    title: "Flappy Bird AI with Neural Networks",
    description:
      "Created an AI agent for Flappy Bird using neural networks and genetic algorithms. The agent evolves through generations to master the game, showcasing evolutionary algorithms and neural network optimization.",
    technologies: [
      "Python",
      "Neural Networks",
      "Genetic Algorithms",
      "Pygame",
      "Evolutionary AI",
    ],
    category: "AI/ML Core",
    github: "https://github.com/ShubhamGajjar/flappy-bird-ai",
    live: null,
    image: "/flappy-bird.jpg",
    impact: "Evolutionary AI Research",
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
  "Deep Learning Frameworks": [
    "TensorFlow",
    "PyTorch",
    "Keras",
    "Transformers",
    "CNN/ResNet",
    "RNN/LSTM",
    "Vision Transformers",
    "UNet Architectures",
  ],
  "Computer Vision": [
    "OpenCV",
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
    "Jupyter",
    "Statistical Analysis",
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
    "Evolutionary Strategies",
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

export const socialLinks = {
  email: "shubhamkgajjar2002@gmail.com",
  github: "https://github.com/ShubhamGajjar",
  linkedin: "https://www.linkedin.com/in/shubham-gajjar-b55b64143/",
  x: "https://x.com/Implici7",
};

export const experience = "7+ months";
