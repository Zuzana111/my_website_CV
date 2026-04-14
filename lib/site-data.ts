export const siteMeta = {
  name: "Zuzana",
  title: "Data Analytics & Applied AI",
  email: "trnkovaz@gmail.com",
  phone: "+420 774 888 074",
  location: "Prague, Czech Republic",
  url: "https://zuzanalabs.com",
  github: "https://github.com/Zuzana111",
  linkedin: "https://www.linkedin.com/in/zuzana-s-sami/",
  medium: "https://medium.com/@zuzanalabs"
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
    stack: ["Python", "scikit-learn", "SQL", "Binary Classification"],
    type: "Machine Learning",
    links: [
      { label: "GitHub", href: "https://github.com/Zuzana111/investment_campaign_ml" },
      { label: "Streamlit", href: "https://banking.zuzanalabs.com" },
      {
        label: "Article",
        href: "https://medium.com/@zuzanalabs/building-a-machine-learning-model-to-predict-which-clients-were-most-likely-to-invest-c8790dcf988c?source=friends_link&sk=bd54c7b649c876ef3e42371aca6c9f18"
      }
    ]
  },
  {
    title: "Intraday Futures Trading Bot",
    description:
      "Designed an event-driven decision engine in Python that reacts to intraday market data, evaluates signal conditions, and manages automated trade execution through the Interactive Brokers API.",
    stack: ["Python", "Real-Time Data Processing", "Event-Driven Architecture", "API Integration", "Algorithmic Trading"],
    type: "Trading Automation",
    links: [
      { label: "GitHub", href: "https://github.com/Zuzana111/intraday_futures_trading_bot" },
      {
        label: "Article",
        href: "https://medium.com/@zuzanalabs/building-a-real-time-futures-trading-bot-in-python-with-interactive-brokers-eed142357658?source=friends_link&sk=8740135ef14977331683638d7c080643"
      }
    ]
  },
  {
    title: "Intraday Options Trading Bot",
    description:
      "Built a second version of the decision engine for options instruments, adapting execution logic and risk rules to a different asset structure.",
    stack: ["Python", "Real-Time Data Processing", "Event-Driven Architecture", "API Integration", "Algorithmic Trading"],
    type: "Trading Automation"
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
