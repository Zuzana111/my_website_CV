import { featuredProjects, resumeHighlights, siteMeta, skillGroups, socialLinks } from "@/lib/site-data";

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
        "I design data-driven tools, research workflows, and analytics projects that turn complexity into clear, useful decisions.",
      primaryCta: "View Projects",
      secondaryCta: "Resume",
      focusTitle: "Current Focus",
      focusItems: [
        "Building portfolio projects that blend analytics, prediction, and workflow design.",
        "Developing strong foundations in data storytelling, experimentation, and model evaluation.",
        "Exploring practical AI products that support real-world decision making."
      ]
    },
    aboutSnapshot: {
      eyebrow: "About",
      title: "A transition grounded in analytical thinking and practical execution.",
      description:
        "This first portfolio version introduces the kind of work I want to do: thoughtful analytics, applied machine learning, and products that make technical insight easier to use.",
      body:
        "I'm moving into data analytics and applied AI through hands-on projects that combine research, data interpretation, and technical problem solving. My interest is in building systems that are not only technically sound, but also clear, useful, and easy to trust.",
      link: "More about my background"
    },
    featuredProjects: {
      eyebrow: "Projects",
      title: "Featured work at the intersection of analytics, modeling, and AI-enabled workflows.",
      description:
        "These are early portfolio projects designed to show range: dashboard thinking, predictive modeling, and AI product direction.",
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
      title: "Ask my portfolio assistant.",
      description:
        "Ask about my background, projects, skills, or contact details. This demo assistant is grounded in the content of this site.",
      welcome:
        "Hi, I'm Zuzana's portfolio assistant. Ask me anything about her experience, projects, resume, or how to get in touch.",
      inputPlaceholder: "Ask a question about Zuzana...",
      sendLabel: "Send",
      promptLabel: "Try one of these:",
      prompts: [
        "What is Zuzana's background?",
        "What projects is she working on?",
        "What are her core skills?",
        "How can I contact her?"
      ]
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
      title: "Portfolio projects designed to show analytical range.",
      description:
        "These initial projects are placeholders for a growing portfolio in analytics, predictive modeling, and AI-supported research workflows."
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
        "Navrhuji datově orientované nástroje, výzkumné workflow a analytické projekty, které mění složitost v jasná a použitelná rozhodnutí.",
      primaryCta: "Zobrazit projekty",
      secondaryCta: "Životopis",
      focusTitle: "Na co se teď soustředím",
      focusItems: [
        "Tvořím portfolio projektů, které propojují analytiku, predikci a návrh workflow.",
        "Buduji si pevné základy v datovém storytellingu, experimentování a vyhodnocování modelů.",
        "Zkoumám praktické AI produkty, které podporují rozhodování v reálném světě."
      ]
    },
    aboutSnapshot: {
      eyebrow: "O mně",
      title: "Kariérní změna postavená na analytickém myšlení a praktickém provedení.",
      description:
        "Tato první verze portfolia představuje typ práce, kterému se chci věnovat: promyšlená analytika, aplikované strojové učení a produkty, které zpřístupňují technické poznatky.",
      body:
        "Do datové analytiky a aplikované AI přecházím skrze praktické projekty, které spojují výzkum, interpretaci dat a technické řešení problémů. Zajímá mě tvorba systémů, které jsou nejen technicky kvalitní, ale také srozumitelné, užitečné a důvěryhodné.",
      link: "Více o mém zázemí"
    },
    featuredProjects: {
      eyebrow: "Projekty",
      title: "Ukázky práce na pomezí analytiky, modelování a AI workflow.",
      description:
        "Tyto první portfolio projekty ukazují šíři záběru: přemýšlení nad dashboardy, prediktivní modelování a směr AI produktů.",
      link: "Všechny projekty",
      projects: [
        {
          title: "Gap Fill analytický dashboard",
          description:
            "Dashboard tržní struktury, který převádí chování obchodních seancí do přehledné analytiky a kombinuje čisté vizuální souhrny s metrikami pro rozhodování.",
          stack: ["Python", "Pandas", "Plotly", "SQL"],
          type: "Dashboard"
        },
        {
          title: "Predikční model gap fill",
          description:
            "Workflow prediktivního modelování zaměřené na chování tržních gapů, feature engineering a interpretovatelné vyhodnocení pro praktická výzkumná rozhodnutí.",
          stack: ["scikit-learn", "Feature Engineering", "Backtesting"],
          type: "Strojové učení"
        },
        {
          title: "AI kopilot pro trading journal",
          description:
            "Koncept AI asistovaného journaling nástroje, který pomáhá organizovat obchody, hledat vzorce a postupně vytvářet kvalitnější podněty pro zpětné vyhodnocení.",
          stack: ["LLM workflow", "Prompt design", "Product thinking"],
          type: "Aplikovaná AI"
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
      title: "Zeptejte se mého portfolio asistenta.",
      description:
        "Ptejte se na mé zkušenosti, projekty, dovednosti nebo kontakt. Tento demo asistent odpovídá podle obsahu tohoto webu.",
      welcome:
        "Ahoj, jsem portfolio asistent Zuzany. Zeptejte se na její zkušenosti, projekty, životopis nebo jak ji kontaktovat.",
      inputPlaceholder: "Zeptejte se na Zuzanu...",
      sendLabel: "Odeslat",
      promptLabel: "Zkuste třeba:",
      prompts: [
        "Jaké má Zuzana zkušenosti?",
        "Na jakých projektech pracuje?",
        "Jaké jsou její hlavní dovednosti?",
        "Jak ji mohu kontaktovat?"
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
      title: "Portfolio projekty navržené tak, aby ukázaly analytický rozsah.",
      description:
        "Tyto první projekty jsou zástupné místo pro rostoucí portfolio v analytice, prediktivním modelování a AI podporovaných výzkumných workflow."
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
    }
  }
} as const;
