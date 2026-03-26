export const siteMeta = {
  name: "Zuzana",
  title: "Data Analytics & Applied AI",
  email: "trnkovaz@gmail.com",
  phone: "+420 774 888 074",
  location: "Prague, Czech republic",
  github: "https://github.com/",
  linkedin: "https://www.linkedin.com/"
};

export const socialLinks = [
  { label: "GitHub", href: siteMeta.github },
  { label: "LinkedIn", href: siteMeta.linkedin },
  { label: "Email", href: `mailto:${siteMeta.email}` }
] as const;

export const featuredProjects = [
  {
    title: "Gap Fill Analytics Dashboard",
    description:
      "A market structure dashboard that turns trading-session behavior into readable analytics, combining clean visual summaries with decision-support metrics.",
    stack: ["Python", "Pandas", "Plotly", "SQL"],
    type: "Dashboard"
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

export const resumeHighlights = [
  "Transitioning into data analytics and applied AI through hands-on project work.",
  "Focused on turning research-heavy workflows into clear, decision-ready outputs.",
  "Interested in analytics, experimentation, and practical AI tools that support real users."
];
