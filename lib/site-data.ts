export const siteMeta = {
  name: "Zuzana",
  title: "Data Analytics & Applied AI",
  email: "trnkovaz@gmail.com",
  phone: "+420 774 888 074",
  location: "Prague, Czech Republic",
  github: "https://github.com/Zuzana111",
  linkedin: "https://www.linkedin.com/in/zuzana-s-sami/",
  medium: "https://medium.com/"
};

export const socialLinks = [
  { label: "GitHub", href: siteMeta.github },
  { label: "LinkedIn", href: siteMeta.linkedin },
  { label: "Medium", href: siteMeta.medium },
  { label: "Email", href: `mailto:${siteMeta.email}` }
] as const;

export const featuredProjects = [
  {
    title: "Investment Campaign Targeting with ML",
    description:
      "Built a classification model to identify 3,000 banking clients most likely to invest in a second campaign round. Compared 5 models and selected Logistic Regression based on performance and interpretability.",
    stack: ["Python", "scikit-learn", "SQL"],
    type: "Machine Learning",
    links: [
      { label: "GitHub", href: siteMeta.github },
      { label: "Article", href: siteMeta.medium }
    ]
  },
  {
    title: "Gap Fill Prediction Model",
    description:
      "A predictive modeling workflow focused on market gap behavior, feature engineering, and interpretable evaluation for practical research decisions.",
    stack: ["scikit-learn", "Feature Engineering", "Backtesting"],
    type: "Machine Learning"
  },
  {
    title: "AI Trading Journal Copilot",
    description:
      "A concept for an AI-assisted journaling tool that helps organize trades, extract patterns, and surface higher-quality review prompts over time.",
    stack: ["LLM Workflows", "Prompt Design", "Product Thinking"],
    type: "Applied AI"
  }
] as const;

export const skillGroups = [
  {
    title: "Analytics",
    items: ["SQL", "Python", "Pandas", "Data Visualization"]
  },
  {
    title: "Modeling",
    items: ["scikit-learn", "Experiment Design", "Feature Engineering", "Evaluation"]
  },
  {
    title: "Tools",
    items: ["Jupyter", "Git", "Streamlit", "Dashboards"]
  }
] as const;

export const writingItems = [
  {
    title: "Article Title Placeholder",
    description: "A future Medium article about analytics, applied AI, or practical technical learning.",
    href: "https://medium.com/",
    tag: "Medium"
  },
  {
    title: "Another Article Placeholder",
    description: "A placeholder entry for writing about projects, problem solving, or lessons from the transition into data work.",
    href: "https://medium.com/",
    tag: "Medium"
  }
] as const;

export const resumeHighlights = [
  "Transitioning into data analytics and applied AI through hands-on project work.",
  "Focused on turning research-heavy workflows into clear, decision-ready outputs.",
  "Interested in analytics, experimentation, and practical AI tools that support real users."
];
