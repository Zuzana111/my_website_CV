import { featuredProjects, resumeHighlights, siteMeta, skillGroups, socialLinks, writingItems } from "@/lib/site-data";

export const locales = ["en", "cs"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export const copy = {
  en: {
    meta: {
      title: "Portfolio | Data Analytics & Applied AI",
      description: "Personal portfolio website for a transition into data analytics and applied AI."
    },
    nav: [
      { href: "/", label: "Home" },
      { href: "/about", label: "About" },
      { href: "/projects", label: "Projects" },
      { href: "/writing", label: "Writing" },
      { href: "/resume", label: "Resume" },
      { href: "/contact", label: "Contact" }
    ],
    ui: {
      languageLabel: "Language",
      english: "EN",
      czech: "CZ"
    },
    sidebar: {
      title: siteMeta.title,
      intro: "Portfolio for a career transition into analytics and applied AI.",
      socialLinks
    },
    footer: {
      title: siteMeta.title,
      location: siteMeta.location
    },
    hero: {
      eyebrow: siteMeta.title,
      greeting: "Hello, my name is Zuzana.",
      welcome: "Welcome!",
      title: "Transitioning into data analytics and applied AI with a practical builder's mindset.",
      description:
        "I build data products and AI tools — from ML classification models and trading bots to RAG pipelines with LangChain and OpenAI.",
      primaryCta: "View Projects",
      secondaryCta: "Resume",
      focusTitle: "Current focus:",
      focusItems: [
        "Building projects in analytics and applied AI — ML models, trading systems, and RAG pipelines.",
        "Packaging them into usable tools — deployed on Streamlit with live demos anyone can try.",
        "Documenting the process through GitHub and technical writing on Medium."
      ]
    },
    aboutSnapshot: {
      eyebrow: "About me",
      title: "A transition grounded in analytical thinking and practical execution.",
      description:
        "Former SAP consultant with 10+ years in enterprise IT, now focused on data analytics and applied AI. I build practical projects in Python, SQL, machine learning, and Streamlit with an emphasis on clarity, usability, and business relevance.",
      body:
        "I'm moving into data analytics and applied AI through hands-on projects that combine research, data interpretation, and technical problem solving. My interest is in building systems that are not only technically sound, but also clear, useful, and easy to trust.",
      link: "More about my background"
    },
    featuredProjects: {
      eyebrow: "Projects",
      title: "Selected Projects",
      description:
        "From ML classifiers and algorithmic trading bots to RAG-powered AI tools — all deployed, all with code.",
      link: "See all projects",
      projects: featuredProjects
    },
    skills: {
      eyebrow: "Skills",
      title: "A focused toolkit for analytics, experimentation, and applied AI work.",
      description:
        "The emphasis is on clear analysis, structured experimentation, and turning technical outputs into something decision-ready.",
      groups: skillGroups
    },
    chatbot: {
      eyebrow: "Assistant",
      title: "Try my AI portfolio assistant.",
      description:
        "Explore my background, projects, and skills through an AI assistant I built from my portfolio content.",
      ctaLabel: "Open AI Portfolio Assistant",
      ctaHref: "https://chat.zuzanalabs.com",
      repoLabel: "View GitHub Repo",
      repoHref: "https://github.com/Zuzana111/my_website_chatbot",
      welcome:
        "Hi, I'm Zuzana's portfolio assistant. Ask me anything about her experience, projects, resume, or how to get in touch.",
      inputPlaceholder: "Ask a question about Zuzana...",
      sendLabel: "Send",
      promptLabel: "Try one of these:",
      prompts: [
        "Summarize Zuzana's background",
        "Which projects are most relevant for AI roles?",
        "What are her strongest technical skills?",
        "How can I contact her?"
      ]
    },
    writing: {
      eyebrow: "Writing",
      title: "Notes, articles, and reflections in progress.",
      description:
        "A space for future Medium writing on analytics, applied AI, technical problem solving, and lessons from a career transition.",
      items: writingItems
    },
    contactCta: {
      eyebrow: "Contact",
      title: "Open to analytics and applied AI opportunities.",
      description:
        "If you're hiring for a junior or transition-friendly role, or you want to discuss a project, I'd be glad to connect.",
      button: "Get In Touch"
    },
    aboutPage: {
      eyebrow: "About",
      title: "A practical path into analytics and applied AI.",
      description:
        "This portfolio is built around a career transition: learning by making, refining technical depth through projects, and focusing on work that creates clarity from data.",
      backgroundTitle: "Background",
      backgroundBody:
        "My transition into data analytics and applied AI is grounded in curiosity, structure, and a strong bias toward useful outputs. I enjoy breaking down complex topics, organizing messy information, and building workflows that produce something clear and actionable.",
      buildingTitle: "What I'm Building",
      buildingBody:
        "I'm developing project work across market analytics, predictive modeling, and AI-assisted tools. The common thread is decision support: helping people move from raw information to better understanding and better action."
    },
    projectsPage: {
      eyebrow: "Projects",
      title: "Projects in Analytics, Machine Learning, and Trading Automation",
      description:
        "A selection of hands-on projects built around predictive modeling, real-world data workflows, and live trading automation."
    },
    resumePage: {
      eyebrow: "Resume",
      title: "A concise overview of direction, strengths, and focus.",
      description:
        "This section acts as a clean interim resume page until a downloadable CV or a more detailed timeline is added.",
      highlightsTitle: "Highlights",
      highlights: resumeHighlights,
      nextTitle: "Next Version",
      nextBody:
        "Placeholder copy for a downloadable resume, selected experience, education, and project outcomes.",
      requestButton: "Request Resume"
    },
    contactPage: {
      eyebrow: "Contact",
      title: "Let's connect.",
      description:
        "For opportunities, collaboration, or project conversations, send a message below or contact me directly by email.",
      formTitle: "I have got just what you need. Let's talk.",
      emailLabel: "Email",
      phoneLabel: "Phone",
      locationLabel: "Location",
      submitLabel: "Submit",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      subjectPlaceholder: "Subject",
      messagePlaceholder: "Your message",
      methods: [
        { label: "Email", value: siteMeta.email, href: `mailto:${siteMeta.email}` },
        { label: "Phone", value: siteMeta.phone, href: `tel:${siteMeta.phone.replace(/\s+/g, "")}` },
        { label: "LinkedIn", value: "Connect professionally", href: siteMeta.linkedin },
        { label: "GitHub", value: "View technical work", href: siteMeta.github }
      ]
    },
    writingPage: {
      eyebrow: "Writing",
      title: "Technical writing on data, AI, and building things.",
      description:
        "I write about projects I build — the decisions, the code, and what I learned along the way. Published on Medium."
    }
  },
  cs: {
    meta: {
      title: "Portfolio | Datová analytika a aplikovaná AI",
      description: "Osobní portfolio pro kariérní přechod do datové analytiky a aplikované AI."
    },
    nav: [
      { href: "/", label: "Domů" },
      { href: "/about", label: "O mně" },
      { href: "/projects", label: "Projekty" },
      { href: "/writing", label: "Psaní" },
      { href: "/resume", label: "Životopis" },
      { href: "/contact", label: "Kontakt" }
    ],
    ui: {
      languageLabel: "Jazyk",
      english: "EN",
      czech: "CZ"
    },
    sidebar: {
      title: "Datová analytika a aplikovaná AI",
      intro: "Portfolio pro kariérní přechod do analytiky a aplikované AI.",
      socialLinks: [
        { label: "GitHub", href: siteMeta.github },
        { label: "LinkedIn", href: siteMeta.linkedin },
        { label: "E-mail", href: `mailto:${siteMeta.email}` }
      ]
    },
    footer: {
      title: "Datová analytika a aplikovaná AI",
      location: "Praha, Česká republika"
    },
    hero: {
      eyebrow: "Datová analytika a aplikovaná AI",
      greeting: "Ahoj, jmenuji se Zuzana.",
      welcome: "Vítejte!",
      title: "Směřuji do datové analytiky a aplikované AI s praktickým přístupem k tvorbě řešení.",
      description:
        "Stavím datové produkty a AI nástroje — od ML klasifikačních modelů a trading botů po RAG pipelines s LangChain a OpenAI.",
      primaryCta: "Zobrazit projekty",
      secondaryCta: "Životopis",
      focusTitle: "Aktuální zaměření",
      focusItems: [
        "Stavím projekty v analytice a aplikované AI — ML modely, trading systémy a RAG pipelines.",
        "Balím je do použitelných nástrojů — nasazených na Streamlitu s živými demy, která si může kdokoliv vyzkoušet.",
        "Dokumentuji celý proces přes GitHub a technické psaní na Medium."
      ]
    },
    aboutSnapshot: {
      eyebrow: "O mně",
      title: "Kariérní změna postavená na analytickém myšlení a praktickém provedení.",
      description:
        "Bývalá SAP konzultantka s více než 10 lety zkušeností v enterprise IT, nyní zaměřená na datovou analytiku a aplikovanou AI. Stavím praktické projekty v Pythonu, SQL, machine learningu a Streamlitu s důrazem na srozumitelnost, použitelnost a business relevanci.",
      body:
        "Do datové analytiky a aplikované AI přecházím skrze praktické projekty, které spojují výzkum, interpretaci dat a technické řešení problémů. Zajímá mě tvorba systémů, které jsou nejen technicky kvalitní, ale také srozumitelné, užitečné a důvěryhodné.",
      link: "Více o mém zázemí"
    },
    featuredProjects: {
      eyebrow: "Projekty",
      title: "Vybrané projekty",
      description:
        "Od ML klasifikátorů a algoritmických trading botů po AI nástroje postavené na RAG — vše nasazené, vše s kódem.",
      link: "Všechny projekty",
      projects: [
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
          title: "Intradenní futures trading bot",
          description:
            "Navrhla jsem event-driven rozhodovací engine v Pythonu, který reaguje na intradenní tržní data, vyhodnocuje signální podmínky a řídí automatizovanou exekuci obchodů přes Interactive Brokers API.",
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
          title: "Intradenní opční trading bot",
          description:
            "Vytvořila jsem druhou verzi stejného decision enginu pro opční instrumenty a přizpůsobila exekuční logiku i pravidla řízení rizika jiné struktuře aktiva.",
          stack: ["Python", "Real-Time Data Processing", "Event-Driven Architecture", "API Integration", "Algorithmic Trading"],
          type: "Trading Automation"
        },
        {
          title: "RAG Portfolio Assistant",
          description:
            "LLM-powered portfolio assistant using RAG that answers questions about my background and projects. Indexes documents using vector embeddings for semantic search, retrieves relevant context, and generates accurate answers with GPT-4o-mini.",
          stack: ["LLM", "Python", "LangChain", "FAISS", "OpenAI", "RAG", "Streamlit"],
          type: "Applied AI",
          links: [
            { label: "GitHub", href: "https://github.com/Zuzana111/my_website_chatbot" },
            { label: "Live demo", href: "https://chat.zuzanalabs.com" }
          ]
        }
      ]
    },
    skills: {
      eyebrow: "Dovednosti",
      title: "Zaměřený toolkit pro analytiku, experimenty a aplikovanou AI.",
      description:
        "Důraz je na jasnou analýzu, strukturované experimentování a převod technických výstupů do podoby použitelné pro rozhodování.",
      groups: [
        {
          title: "Analytika",
          items: ["SQL", "Python", "Pandas", "Datová vizualizace"]
        },
        {
          title: "Modelování",
          items: ["scikit-learn", "Návrh experimentů", "Feature engineering", "Vyhodnocení"]
        },
        {
          title: "Nástroje",
          items: ["Jupyter", "Git", "Streamlit", "Dashboardy"]
        }
      ]
    },
    chatbot: {
      eyebrow: "Asistent",
      title: "Vyzkoušejte mého AI portfolio asistenta.",
      description:
        "Projděte si mé zkušenosti, projekty a dovednosti přes AI asistenta, kterého jsem postavila z obsahu svého portfolia.",
      ctaLabel: "Otevřít AI portfolio asistenta",
      ctaHref: "https://chat.zuzanalabs.com",
      repoLabel: "Zobrazit GitHub repo",
      repoHref: "https://github.com/Zuzana111/my_website_chatbot",
      welcome:
        "Ahoj, jsem portfolio asistent Zuzany. Zeptejte se na její zkušenosti, projekty, životopis nebo jak ji kontaktovat.",
      inputPlaceholder: "Zeptejte se na Zuzanu...",
      sendLabel: "Odeslat",
      promptLabel: "Zkuste třeba:",
      prompts: [
        "Shrň Zuzanino profesní zázemí",
        "Které projekty jsou nejrelevantnější pro AI role?",
        "Jaké jsou její nejsilnější technické dovednosti?",
        "Jak ji mohu kontaktovat?"
      ]
    },
    writing: {
      eyebrow: "Psaní",
      title: "Poznámky, články a rozpracované texty.",
      description:
        "Prostor pro budoucí Medium články o analytice, aplikované AI, technickém řešení problémů a zkušenostech z kariérní změny.",
      items: [
        {
          category: "Machine Learning",
          title: "Building a Machine Learning Model to Predict Which Clients Were Most Likely to Invest",
          description:
            "How I built a binary classification pipeline to identify 3,000 banking clients for a second investment campaign — comparing 5 models and deploying the result as a live Streamlit dashboard.",
          href: "https://medium.com/@zuzanalabs/building-a-machine-learning-model-to-predict-which-clients-were-most-likely-to-invest-c8790dcf988c?source=friends_link&sk=bd54c7b649c876ef3e42371aca6c9f18",
          readTime: "5 min read",
          accent: "violet"
        },
        {
          category: "Trading Automation",
          title: "Building a Real-Time Futures Trading Bot in Python with Interactive Brokers",
          description:
            "A walkthrough of the event-driven architecture behind an automated trading system — from ingesting real-time OHLCV data to managing trade execution through the Interactive Brokers API.",
          href: "https://medium.com/@zuzanalabs/building-a-real-time-futures-trading-bot-in-python-with-interactive-brokers-eed142357658?source=friends_link&sk=8740135ef14977331683638d7c080643",
          readTime: "6 min read",
          accent: "green"
        },
        {
          category: "Applied AI",
          title: "How I Built a RAG Portfolio Assistant with LangChain and FAISS",
          description:
            "From zero to a deployed AI chatbot — building a retrieval-augmented generation pipeline over custom documents using LangChain, FAISS, and OpenAI GPT-4o-mini.",
          href: "#",
          readTime: "~12 min read",
          status: "Coming soon",
          accent: "sand"
        }
      ]
    },
    contactCta: {
      eyebrow: "Kontakt",
      title: "Otevřená příležitostem v analytice a aplikované AI.",
      description:
        "Pokud hledáte juniorní nebo transition-friendly roli, nebo chcete probrat projekt, ráda se spojím.",
      button: "Ozvat se"
    },
    aboutPage: {
      eyebrow: "O mně",
      title: "Praktická cesta do analytiky a aplikované AI.",
      description:
        "Toto portfolio vzniká kolem kariérní změny: učím se tvorbou, prohlubuji technické dovednosti na projektech a soustředím se na práci, která přináší z dat srozumitelnost.",
      backgroundTitle: "Zázemí",
      backgroundBody:
        "Můj přechod do datové analytiky a aplikované AI stojí na zvídavosti, struktuře a silném důrazu na užitečný výstup. Baví mě rozkládat složitá témata, organizovat nepřehledné informace a stavět workflow, která vedou k jasnému a praktickému výsledku.",
      buildingTitle: "Na čem pracuji",
      buildingBody:
        "Rozvíjím projekty napříč tržní analytikou, prediktivním modelováním a AI asistovanými nástroji. Společným jmenovatelem je podpora rozhodování: pomoci převést surové informace na lepší porozumění a lepší akci."
    },
    projectsPage: {
      eyebrow: "Projekty",
      title: "Projekty z analytiky, strojového učení a trading automatizace.",
      description:
        "Výběr praktických projektů zaměřených na prediktivní modelování, práci s daty a živou obchodní automatizaci."
    },
    resumePage: {
      eyebrow: "Životopis",
      title: "Stručný přehled směru, silných stránek a zaměření.",
      description:
        "Tato sekce zatím funguje jako čistá průběžná verze životopisu, než přibude ke stažení CV nebo detailnější časová osa.",
      highlightsTitle: "Hlavní body",
      highlights: [
        "Přecházím do datové analytiky a aplikované AI skrze praktickou projektovou práci.",
        "Soustředím se na převod výzkumně náročných workflow do jasných výstupů připravených pro rozhodování.",
        "Zajímají mě analytika, experimentování a praktické AI nástroje, které pomáhají reálným uživatelům."
      ],
      nextTitle: "Další verze",
      nextBody:
        "Zástupný text pro životopis ke stažení, vybrané zkušenosti, vzdělání a výsledky projektů.",
      requestButton: "Vyžádat životopis"
    },
    contactPage: {
      eyebrow: "Kontakt",
      title: "Spojme se.",
      description:
        "Pro příležitosti, spolupráci nebo debatu o projektu pošlete zprávu níže nebo mě kontaktujte přímo e-mailem.",
      formTitle: "Mám přesně to, co potřebujete. Pojďme si promluvit.",
      emailLabel: "E-mail",
      phoneLabel: "Telefon",
      locationLabel: "Místo",
      submitLabel: "Odeslat",
      namePlaceholder: "Vaše jméno",
      emailPlaceholder: "Váš e-mail",
      subjectPlaceholder: "Předmět",
      messagePlaceholder: "Vaše zpráva",
      methods: [
        { label: "E-mail", value: siteMeta.email, href: `mailto:${siteMeta.email}` },
        { label: "Telefon", value: siteMeta.phone, href: `tel:${siteMeta.phone.replace(/\s+/g, "")}` },
        { label: "LinkedIn", value: "Profesní spojení", href: siteMeta.linkedin },
        { label: "GitHub", value: "Technická práce", href: siteMeta.github }
      ]
    },
    writingPage: {
      eyebrow: "Psaní",
      title: "Technické psaní o datech, AI a stavění věcí.",
      description:
        "Píšu o projektech, které stavím — o rozhodnutích, kódu a o tom, co jsem se po cestě naučila. Publikováno na Medium."
    }
  }
} as const;
