// All site copy lives here. Edit this file, then run `npm run build`.
// Rules: no em dashes, no invented numbers. Missing data goes in [[TODO: ...]]
// and renders as a visible placeholder on the page.

export const site = {
  name: "Tomás Mora",
  fullName: "Tomás Felipe Mora Caris",
  location: "Sevilla, Spain",
  workAuth: "Spanish resident, full working rights",
  languages: "Spanish (native), English (C1)",
  email: "tmora@fen.uchile.cl",
  linkedin: "https://www.linkedin.com/in/tomas-mora-c",
  // Public URL once deployed, used for link previews. Example: "https://tomasmora.dev"
  url: "https://tmorac.github.io",
  landing: {
    headline: "Growth and analytics, grounded in consumer behaviour.",
    intro:
      "4+ years across fintech, agency and freelance work. MSc Consumer Analytics & Marketing Strategy, University of Leeds. Based in Sevilla.",
    pick: "Pick the profile that matches the role:",
  },
};

export const profiles = {
  growth: {
    slug: "growth",
    nav: "Growth",
    title: "Growth Marketing / Product Growth",
    headline: "Growth from acquisition to retention, measured at every step.",
    summary:
      "4+ years running acquisition, activation and lifecycle work in fintech, agency and freelance settings. I own paid media and marketing automation, and I test what I ship against a control group whenever the setup allows it.",
    card: "Acquisition, activation, lifecycle and paid media.",
    stats: [
      { value: "+15%", label: "new-user activation in 24h vs control (fintech)" },
      { value: "13.4x", label: "ROAS on Meta Ads (Tattersall)" },
      { value: "+140%", label: "email open and click-through rates (financial services client)" },
    ],
    projects: ["chatbot", "retention-model", "tattersall-paid", "experimentation", "ai-agent", "thesis"],
    expTitles: { tattersall: "Growth & Paid Media Consultant" },
    skills: [
      ["Acquisition", ["Meta Ads", "Google Ads (SEM)", "Ad copywriting (Pain-Agitation-Solution)", "SEO"]],
      ["Lifecycle & CRM", ["Iterable", "Brevo", "Salesforce", "Push and in-app messaging", "Klaviyo (basic)"]],
      ["Experimentation & analytics", ["A/B testing", "Optimizely", "Instapage", "GA4", "Google Tag Manager", "Microsoft Clarity", "Hotjar", "Looker Studio", "Tableau", "SQL"]],
      ["Automation & AI", ["Make", "Strapi", "n8n (light)", "Claude Code", "MCP agents"]],
      ["Methods", ["ICE prioritisation", "Cohort analysis", "Funnel analysis", "Jobs To Be Done"]],
    ],
    cv: "Tomas_Mora_CV_Growth.pdf",
  },

  analytics: {
    slug: "analytics",
    nav: "Analytics",
    title: "Product / Data Analytics",
    headline: "Statistical modelling, applied to real product and business decisions.",
    summary:
      "I combine modelling in Python, R and SQL with hands-on experience measuring experiments, funnels and lifecycle programmes in fintech and agency settings. MSc Consumer Analytics & Marketing Strategy, University of Leeds.",
    card: "Modelling, experimentation and funnel analytics.",
    stats: [
      { value: "+15%", label: "activation lift, measured against a control group" },
      { value: "6,000+", label: "users in a logistic regression retention model" },
      { value: "~0.80", label: "AUC, Random Forest on ICO fundraising (MSc)" },
    ],
    projects: ["retention-model", "chatbot", "healthcare-audit", "ico-ml"],
    expTitles: { tattersall: "Growth & Marketing Automation Consultant" },
    skills: [
      ["Languages", ["Python", "R", "SQL (incl. BigQuery)"]],
      ["Methods", ["A/B testing", "Significance testing", "Logistic regression", "Random Forest", "GBM", "K-means", "PCA", "Conjoint analysis", "Market basket analysis", "Cohort analysis", "Causal inference (academic)"]],
      ["BI & web analytics", ["Tableau", "Looker Studio", "GA4", "Google Tag Manager", "Microsoft Clarity", "Hotjar", "Excel / Google Sheets"]],
      ["Research", ["Experimental design", "Validated scales", "Surveys", "User interviews", "Focus groups"]],
      ["AI", ["LLM-assisted analysis and coding", "AI agents with Claude Code and MCP"]],
    ],
    cv: "Tomas_Mora_CV_Analytics.pdf",
  },

  product: {
    slug: "product",
    nav: "Product",
    title: "Product Owner / Business Analyst",
    headline: "Turning business needs into clear requirements and shipped initiatives.",
    summary:
      "4+ years doing the work between business and delivery in fintech and agency settings: discovery, business cases, requirements, user stories, user flows and launch QA, working closely with Product Owners, engineering, CX and external vendors.",
    card: "Discovery, requirements and cross-functional delivery.",
    stats: [
      { value: "3", label: "technical fronts coordinated for one launch (fintech)" },
      { value: "2", label: "innovation projects taken from research to prototype" },
      { value: "100%", label: "of donor reporting automated (Fútbol Más)" },
    ],
    projects: ["chatbot", "banking-innovation", "automation-stack", "onboarding-flow", "experimentation"],
    expTitles: { tattersall: "Growth & Automation Consultant" },
    skills: [
      ["Requirements & delivery", ["Business cases", "Requirements and one-pagers", "User stories", "Prioritisation (ICE)", "Sandbox testing and launch QA", "Stakeholder alignment"]],
      ["Discovery", ["Double Diamond", "Jobs To Be Done", "User interviews", "Focus groups", "User flow mapping", "Competitive analysis"]],
      ["Data & analysis", ["SQL", "Python", "R", "Tableau", "Looker Studio", "GA4"]],
      ["Tools", ["Salesforce", "Lucidchart", "Figma (flows and wireframes)", "Notion", "Make", "Brevo", "Google Workspace"]],
      ["Ways of working", ["Agile (ICAgile Certified)", "Design Thinking", "Google Project Management Certificate (in progress)"]],
    ],
    cv: "Tomas_Mora_CV_Product.pdf",
  },
};

// Case studies. Each profile lists the ids it shows; `angles` override
// fields so the same project is told from that profile's point of view.
export const projects = {
  chatbot: {
    org: "LatAm cross-border fintech",
    sector: "Fintech",
    period: "2023–2025",
    title: "AI onboarding chatbot that lifted activation by 15%",
    context:
      "CX queues reached 20 hours, and activation (a user's first transaction) was the biggest drop in the funnel. New users' questions were simple: where can I send money, how is the rate calculated, how do I load money.",
    role: "Project owner, from business case to post-launch iteration. Built in about two months.",
    bullets: [
      "Built the business case: the project's cost would have paid for only three extra CX agents, irrelevant against the demand.",
      "Sent each new user's first 24 hours to an AI chatbot on WhatsApp, with a proactive welcome message inviting them to transact and ask questions.",
      "Defined the handoff rules to human CX (explicit request, 10 messages, or after 24 hours) and the topics the bot could never touch.",
      "Reviewed conversations daily after launch and ran 20+ iterations of the prompt and knowledge base.",
    ],
    outcome:
      "24-hour activation up from ~48% to ~55% vs control (+15% relative), and 30% fewer tickets for CX. Two weeks after launch the bot was also handling CX questions in all six countries.",
    tools: ["WhatsApp", "Salesforce", "Vendor AI platform", "Knowledge base", "50/50 test", "Tableau"],
    repo: "https://github.com/tmorac/onboarding-chatbot-case-study",
    angles: {
      analytics: {
        title: "Measuring an AI chatbot against a control group",
        role: "Owned the test design and measurement.",
        bullets: [
          "Ran a 50/50 split: treatment got a proactive welcome message plus the chatbot, control got neither.",
          "Measured activation (first card payment, transfer or FX exchange) within 24 hours, tracked first in Excel and then in a real-time Tableau dashboard.",
          "Measured support load as tickets handled by CX, because unresolved bot conversations still created a ticket.",
          "Documented the limitation: the lift is the effect of the message and the bot together, not the bot alone.",
        ],
      },
      product: {
        title: "Cross-functional launch of an AI onboarding chatbot",
        role: "Project owner without formal authority over any of the teams involved.",
        bullets: [
          "Wrote the business case and chose to buy, not build: a vendor provided the AI and the integration, we owned the knowledge base.",
          "Coordinated the vendor, the head of architecture and the Salesforce developer, with my manager as escalation point; reported usage to the CEO after launch.",
          "Kept a single WhatsApp number, the critical path item: architecture built a router to split traffic between the bot and Salesforce.",
          "Won over a nervous CX team with QA rounds and a phased rollout: team numbers, internal live traffic, a client cohort, then everyone.",
        ],
      },
    },
  },

  "onboarding-flow": {
    org: "LatAm cross-border fintech",
    sector: "Fintech",
    period: "2023–2025",
    title: "Welcome and activation journey, redesigned end to end",
    context: "How new users are welcomed and guided to activation across email, push and in-app.",
    role: "Led the redesign; direct owner of push notifications and in-app messaging.",
    bullets: [
      "Mapped the onboarding user flows in Lucidchart and the onboarding screens in Figma.",
      "Wrote the copy and designed the emails, push notifications and in-app messages.",
      "Defined the trigger logic and the touchpoints across channels.",
    ],
    outcome:
      "No outcome metrics to share: I left the company shortly after launch. The flow is reportedly still in use.",
    tools: ["Email", "Push", "In-app", "Lucidchart", "Figma", "[[TODO: messaging platform used, e.g. Iterable]]"],
    angles: {
      product: {
        title: "Onboarding squad: from user insight to backlog",
        bullets: [
          "Joined customer focus groups and mapped the onboarding user flows (Lucidchart) and screens (Figma).",
          "Worked with Product Owners defining requirements and writing user stories for the backlog.",
          "Wrote one-pagers for coupon improvements and aligned them with the Product Owner to get them into delivery.",
          "Defined trigger logic and touchpoints so email, push and in-app worked as one journey; used AI for sentiment analysis of open survey answers.",
        ],
      },
    },
  },

  "tattersall-paid": {
    org: "Tattersall",
    sector: "Real estate · Freelance",
    period: "2026–Present",
    title: "Quality leads for a niche service, at 13.4x ROAS",
    context:
      "A very niche real estate service. Previous agencies had not managed to bring in quality leads.",
    role: "Sole owner of paid media: Meta Ads and Google Ads (SEM).",
    bullets: [
      "Took over paid media and run every Meta Ads and Google Ads campaign; Meta is the best-performing channel.",
      "Write ad copy in Spanish with the Pain-Agitation-Solution framework.",
      "With low lead volume, decisions to pause or scale ads are not based on lead count alone.",
      "Migrated the client's analytics from Universal Analytics to GA4.",
    ],
    outcome:
      "Quality leads where previous agencies had failed: 13.4x ROAS and a customer acquisition cost of roughly USD 30 on Meta Ads. [[TODO: period these numbers cover]]",
    tools: ["Meta Ads", "Google Ads", "GA4"],
  },

  "ai-agent": {
    org: "Tattersall",
    sector: "Real estate · Freelance",
    period: "2026–Present",
    title: "AI agent that automates and audits paid media reporting",
    context: "Weekly reporting meant pulling campaign data out of the ad platforms by hand.",
    role: "Designed and built the agent.",
    bullets: [
      "Connected Claude Code to Meta Ads and Google Sheets through MCP.",
      "Every week the agent pulls campaign data into Sheets and builds the report.",
      "It also audits my own paid media management.",
      "In development: using Claude as a hub between Meta Ads, Sheets and an image generator to produce ad variants for the in-house design team.",
    ],
    outcome: "Weekly, hands-off reporting with zero manual data extraction.",
    tools: ["Claude Code", "MCP", "Meta Ads", "Google Sheets"],
  },

  "automation-stack": {
    org: "Tattersall",
    sector: "Real estate · Freelance",
    period: "2026–Present",
    title: "Marketing ops automation, from lead capture to reporting",
    context: "Leads, sign-ups and reporting depended on people moving data by hand.",
    role: "Designed and built the system.",
    bullets: [
      "Connected the Strapi CMS to Brevo through Make webhooks for the newsletter subscription flow.",
      "Linked lead capture, CRM and lifecycle messaging so nothing is handed off manually.",
      "Built an AI agent (Claude Code + MCP) that pulls Meta Ads data into Google Sheets every week and produces the report.",
      "Used n8n for lighter workflows.",
    ],
    outcome: "No manual handoffs between marketing and sales follow-up, and no manual reporting.",
    tools: ["Make", "Strapi", "Brevo", "n8n", "Claude Code", "MCP"],
  },

  experimentation: {
    org: "MIND Spa",
    sector: "Digital marketing & innovation agency",
    period: "2021–2023",
    title: "Experimentation roadmap for a financial services client",
    context: "A financial services client wanted more from its email programme and its quotation flow.",
    role: "Growth Hacker, leading a 3-person team.",
    bullets: [
      "Built and ran the experimentation roadmap, prioritising with ICE because the client wanted to tackle everything at once.",
      "Ran A/B tests on landing pages and flows with Optimizely and Instapage.",
      "Reworked the CRM programme to lift open and click rates.",
      "Tracked the effect of each change with weekly and monthly cohorts.",
    ],
    outcome: "+140% email open and click-through rates, and +30% quotation conversion.",
    tools: ["Optimizely", "Instapage", "GA4", "Google Tag Manager", "Cohort analysis"],
    angles: {
      product: {
        title: "Running client experimentation with ICE prioritisation",
        bullets: [
          "Led a 3-person team delivering experimentation work across client accounts.",
          "Used ICE in every project to turn long client wish lists into a sequenced roadmap.",
          "Acted as methodological consultant, embedding experimentation frameworks into client teams' ways of working.",
          "Set up weekly and monthly cohort reporting so each change had a clear read.",
        ],
      },
    },
  },

  "healthcare-audit": {
    org: "MIND Spa",
    sector: "Digital marketing & innovation agency",
    period: "2021–2023",
    title: "Finding the biggest drop-off in a healthcare booking funnel",
    context: "A major healthcare client was losing users in its registration and booking flow.",
    role: "Led the funnel audit.",
    bullets: [
      "Audited the full registration and booking funnel with Microsoft Clarity and GA4.",
      "Found the anomaly behind the largest drop-off in the whole flow, plus smaller anomalies in other flows.",
      "Turned the findings into a prioritised experiment roadmap and aligned stakeholders on it.",
      "Led the agency's migration from Universal Analytics to GA4 for all clients, tagging conversion events and interactions in Google Tag Manager.",
    ],
    outcome: "The main drop-off identified and turned into prioritised experiments. [[TODO: conversion impact, if known]]",
    tools: ["Microsoft Clarity", "GA4", "Google Tag Manager", "Funnel analysis"],
  },

  "retention-model": {
    org: "LatAm cross-border fintech",
    sector: "Fintech",
    period: "2023–2025",
    title: "Predicting retention from a user's first 15 days",
    context: "The team needed to know which behaviours in a new user's first 15 days predict whether they stay.",
    role: "Built the model and turned it into actions.",
    bullets: [
      "Built a logistic regression model in Python on 6,000+ users.",
      "Identified the critical behavioural signals inside the first 15 days.",
      "Used them to trigger targeted activation interventions across Growth, Product, UX and CX.",
      "Built Tableau and Looker Studio dashboards to monitor experiments, lifecycle changes and funnel performance.",
    ],
    outcome: "Targeted activation interventions driven by early behaviour. [[TODO: model performance or business impact you can share]]",
    tools: ["Python", "SQL", "Logistic regression", "Tableau", "Looker Studio"],
    angles: {
      growth: {
        title: "Acting on a user's first 15 days, across teams",
        role: "Built the model and turned it into a cross-team activation plan.",
        bullets: [
          "Built a logistic regression model in Python on 6,000+ users to find which behaviours in the first 15 days predict retention.",
          "Turned the signals into an action plan for that 15-day window, shared by Growth, Product, UX and CX.",
          "Each team triggered targeted activation interventions from the same signals.",
          "Monitored experiments and funnel performance in Tableau and Looker Studio dashboards.",
        ],
      },
    },
  },

  thesis: {
    org: "University of Leeds",
    sector: "MSc dissertation",
    period: "2026",
    title: "How a challenger brand differentiates a generic product",
    context:
      "Bar soap is a mature, commoditised category. My dissertation tests how a challenger can stand out through meaning rather than function, with Dr. Squatch as the motivating case.",
    role: "Sole researcher.",
    bullets: [
      "Question: how much does challenger positioning influence purchase intention vs an incumbent brand in a mature category?",
      "Framework: Verganti's innovation of meaning and Holt's cultural branding. The gap: the consumer mechanism by which meaning-based positioning beats functional positioning has not been tested empirically.",
      "Design: experiment testing underdog narratives on purchase intention, mediated by design symbolism, aesthetics, functionality and authenticity, with humour as a moderator.",
      "Measured with validated scales (self-brand connection, brand personality, brand coolness, among others). A partially failed manipulation check is discussed openly.",
    ],
    outcome: "[[TODO: results, sample size and grade]]",
    tools: ["R", "Experimental design", "Mediation and moderation", "Validated scales"],
  },

  "ico-ml": {
    org: "University of Leeds",
    sector: "MSc · Machine learning",
    period: "2025–2026",
    title: "Predicting ICO fundraising success with machine learning",
    context: "Which characteristics of an Initial Coin Offering (ICO) predict whether it succeeds in raising funds?",
    role: "[[TODO: individual or group work]]",
    bullets: [
      "Compared classification models; Random Forest performed best (AUC ~0.80). [[TODO: models compared]]",
      "[[TODO: dataset, size and main variables]]",
      "[[TODO: most important predictors and what they mean in business terms]]",
    ],
    outcome: "Random Forest with AUC between 0.798 and 0.805.",
    tools: ["[[TODO: R or Python]]", "Random Forest", "Model evaluation (AUC)"],
  },

  "banking-innovation": {
    org: "MIND Spa",
    sector: "Banking client",
    period: "2021–2023",
    title: "Bank innovation incubator: two projects from research to prototype",
    context: "The bank's innovation unit ran a formal competition: ideas had to be documented and defended in a pitch.",
    role: "Staffed the incubator, facilitated workshops and coordinated delivery.",
    bullets: [
      "Ran discovery with Double Diamond and Jobs To Be Done: user interviews, user profiling and user flow mapping.",
      "Mapped the competitive landscape and analysed competitive advantage.",
      "With UX, produced wireframes, mockups for user testing and front-end-only experimental websites.",
      "Prepared the formal documentation and the pitch to move the ideas forward.",
    ],
    outcome: "Two complete innovation projects delivered from research to prototype. [[TODO: competition result]]",
    tools: ["Double Diamond", "Jobs To Be Done", "User interviews", "Figma"],
  },
};

export const experience = [
  {
    key: "tattersall",
    org: "Tattersall",
    title: "Growth & Paid Media Consultant",
    where: "Remote · Freelance",
    period: "2026–Present",
    summary: "Paid media and marketing automation for a real estate group.",
  },
  {
    key: "global66",
    org: "LatAm cross-border fintech",
    title: "Growth Specialist",
    where: "Santiago, Chile · Fintech",
    period: "2023–2025",
    summary:
      "Activation, onboarding, retention and lifecycle communications. Owner of push and in-app messaging. Research behind a loyalty programme for the top 5% of users.",
  },
  {
    key: "mind",
    org: "MIND Spa",
    title: "Growth Hacker",
    where: "Santiago, Chile · Agency",
    period: "2021–2023",
    summary:
      "Experimentation, CRO, analytics and innovation work for clients in financial services, banking and healthcare. Led a 3-person team.",
  },
  {
    key: "futbolmas",
    org: "Fundación Fútbol Más",
    title: "Commercial Coordinator",
    where: "Santiago, Chile · Non-profit",
    period: "2020–2021",
    summary:
      "Structured the commercial pipeline in Salesforce and automated 100% of donor reporting. B2B and B2C fundraising proposals.",
  },
];

export const education = [
  {
    title: "MSc Consumer Analytics & Marketing Strategy",
    org: "University of Leeds",
    period: "2025–2026",
    note: "Marketing analytics, machine learning, big data, predictive analytics, consumer behaviour. [[TODO: final result]]",
  },
  {
    title: "BSc Business Administration",
    org: "University of Chile",
    period: "2015–2020",
    note: "Graduated with Distinction.",
  },
];

export const certifications = [
  "ICAgile Certified [[TODO: exact certificate name and year]]",
  "Google Tag Manager [[TODO: certification details]]",
  "Google Project Management Professional Certificate (in progress)",
];

export const about = [
  "I'm Chilean and based in Sevilla, after finishing an MSc in Leeds. I'm interested in why people choose what they choose, which is how I ended up between consumer behaviour, analytics and growth.",
  "Outside work: Olympic weightlifting, traditional cooking and food preservation, and games of every kind, from mobile to board games. I'm especially curious about how game mechanics work outside games.",
];
