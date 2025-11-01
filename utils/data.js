// utils/data.js
export const projects = [
  {
    id: 1,
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
    id: 2,
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
      "Google Colab",
    ],
    category: "Data Science",
    github:
      "https://colab.research.google.com/drive/1IW9VgpNr0OJsLwleSIwMlJGr3sU1l-N2?authuser=1",
    live: null,
    image: "/sentiment.jpg",
    impact: "Social Media Analytics",
    status: "Completed",
  },
  {
    id: 3,
    title: "Snake Game Implementation",
    description:
      "Classic Snake game implementation using Python and Pygame. Features smooth gameplay mechanics, score tracking, and collision detection. Demonstrates fundamental game development concepts and object-oriented programming.",
    technologies: [
      "Python",
      "Pygame",
      "Object-Oriented Programming",
      "Game Development",
      "Collision Detection",
    ],
    category: "AI/ML Core",
    github: "https://github.com/ShubhamGajjar/Python-Snake_game",
    live: null,
    image: "/snake-game.jpg",
    impact: "Game Development Project",
    status: "Completed",
  },
  {
    id: 4,
    title: "Flappy Bird Game Clone",
    description:
      "Flappy Bird game clone built with Python and Pygame. Includes physics simulation, sprite management, and user input handling. Showcases game development fundamentals and real-time rendering techniques.",
    technologies: [
      "Python",
      "Pygame",
      "Game Physics",
      "Sprite Management",
      "Real-time Rendering",
    ],
    category: "AI/ML Core",
    github: "https://github.com/ShubhamGajjar/Python-Flappy_Bird",
    live: null,
    image: "/flappy-bird.jpg",
    impact: "Game Development Project",
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
    title: "Hybrid ResNet-ViT for Skin Cancer Classification",
    authors:
      "Shubham Gajjar, Harshal Joshi, Om Rathod, Vishal Barot, Deep Joshi",
    conference:
      "4th IEEE World Conference on Applied Intelligence and Computing (AIC 2025)",
    status: "Accepted",
    year: "2025",
    description:
      "Designed hybrid architecture combining frozen ResNet50 feature extractor with four-head Vision Transformer blocks, attaining 96.3% accuracy and macro F1 of 0.961 on HAM10000 dataset. Integrated Global Average Pooling and multi-head self-attention for seven-class skin lesion classification, achieving Area Under Curve of 1.00 across all classes. Presented research at IEEE World Conference on Applied Intelligence and Informatics to 100+ attendees.",
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
    pdf: "Will be available after publication",
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
      "Explainable AI",
    ],
    doi: "Pending",
    pdf: "Will be available after publication",
    abstract:
      "Skin cancer detection from dermoscopic images is challenging due to hair occlusion and varying lesion characteristics. This work presents an extended ResNet50 architecture with Inverse Soft Mask Attention mechanism for robust skin cancer classification. The two-stage pipeline first uses U-Net++ for precise hair segmentation, then employs Extended ResNet50 classifier with Inverse Soft Mask Attention to process both hair-occluded and unoccluded regions. The architecture integrates dense residual blocks and Squeeze-and-Excitation modules with learnable weighted feature aggregation, enabling the model to handle complex dermatoscopic images. Training utilizes Nadam optimizer with Cosine Decay Restarts and Sparse Categorical Crossentropy loss. The model achieved 97.89% accuracy on HAM10000 dataset with 10,015 dermoscopic images, demonstrating superior performance in handling hair-occluded lesions. This work incorporates explainable AI principles, ensuring model deployment readiness for clinical applications.",
  },
];

export const socialLinks = {
  email: "shubhamgajjar14@gmail.com",
  github: "https://github.com/ShubhamGajjar",
  linkedin: "https://www.linkedin.com/in/shubham-gajjar-b55b64143/",
  x: "https://x.com/Implici7",
};

export const experience = "7+ months";
