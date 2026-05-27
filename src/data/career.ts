export type Role = {
  title: string;
  startDate: string;
  endDate: string | null;
};

export type Technology = {
  name: string;
};

export type Client = {
  name: string;
};

export type Company = {
  name: string;
  url?: string;
  logo?: string;
  fullLogo?: string;
  location?: string;
  note?: string;
  roles: Role[];
  industry?: string;
  type?: string;
  overview?: string;
  skills?: string[];
  technologies?: Technology[];
  clients?: Client[];
};

export const career: Company[] = [
  {
    name: "Volio",
    url: "https://www.volio.ai",
    logo: "/logos/volio.png",
    fullLogo: "/logos/volio-full.webp",
    industry: "Professional Development",
    type: "Consumer AI",
    overview:
      "AI-powered career journal that helps professionals capture work accomplishments via voice notes, automatically extracting skills and generating polished narratives for performance reviews, resume updates, and compensation discussions.",
    skills: [
      "Product Strategy",
      "0→1 Product Development",
      "AI/ML Product Management",
      "User Research",
    ],
    technologies: [
      { name: "TypeScript" },
      { name: "React" },
      { name: "Next.js" },
      { name: "Zod" },
      { name: "SQL" },
      { name: "Drizzle" },
      { name: "Playwright" },
      { name: "Tailwind" },
      { name: "Storybook" },
      { name: "Capacitor.js" },
      { name: "Git" },
      { name: "Resend" },
      { name: "Supabase" },
      { name: "GitHub" },
      { name: "Vercel" },
      { name: "Claude Code" },
      { name: "Cursor" },
      { name: "Anthropic" },
      { name: "OpenAI" },
    ],
    roles: [{ title: "Founder", startDate: "Apr 2024", endDate: null }],
  },
  {
    name: "Leap Event Technology",
    url: "https://www.leapevent.tech",
    logo: "/logos/leap.png",
    fullLogo: "/logos/leap-full.webp",
    industry: "Event Ticketing",
    type: "B2B/Marketplace",
    overview:
      "Event technology platform powering registration, attendee engagement, and data analytics for large-scale conferences and trade shows.",
    skills: [
      "Data Platform Strategy",
      "Analytics Architecture",
      "Stakeholder Management",
      "Technical Product Management",
    ],
    technologies: [
      { name: "AWS Quicksight" },
      { name: "Snowflake" },
      { name: "Looker" },
      { name: "AWS Glue" },
      { name: "Tableau" },
    ],
    clients: [{ name: "Fanatics" }, { name: "NBA" }],
    roles: [
      {
        title: "Product Manager, Data Platform",
        startDate: "Sep 2024",
        endDate: "Dec 2025",
      },
    ],
  },
  {
    name: "Claravine",
    url: "https://www.claravine.com",
    logo: "/logos/claravine.png",
    fullLogo: "/logos/claravine-full.svg",
    location: "Salt Lake City Metropolitan Area",
    industry: "MarTech",
    type: "Enterprise SaaS",
    overview:
      "Data standards and metadata management platform enabling enterprise marketing teams to classify, connect, and govern campaign data across channels.",
    skills: [
      "Product Team Leadership",
      "Enterprise Product Strategy",
      "API & Integration Design",
      "Go-to-Market Alignment",
    ],
    technologies: [
      { name: "Coda" },
      { name: "Pendo" },
      { name: "Snowflake" },
      { name: "Jira Product Discovery" },
    ],
    clients: [
      { name: "HBO Max" },
      { name: "Peacock" },
      { name: "Warner Bros Discovery" },
      { name: "Grainger" },
      { name: "WPP" },
    ],
    roles: [
      {
        title: "Director of Product Management",
        startDate: "Dec 2021",
        endDate: "Sep 2023",
      },
      {
        title: "Senior Product Manager",
        startDate: "Dec 2020",
        endDate: "Dec 2021",
      },
    ],
  },
  {
    name: "HireVue",
    url: "https://www.hirevue.com",
    logo: "/logos/hirevue.png",
    fullLogo: "/logos/hirevue-full.png",
    location: "Salt Lake City Metropolitan Area",
    industry: "Talent Acquisition",
    type: "Enterprise SaaS",
    overview:
      "Video interviewing and AI-driven talent assessment platform used by global enterprises to streamline hiring through structured interviews and predictive analytics.",
    skills: [
      "Analytics Product Management",
      "AI/ML Feature Development",
      "Enterprise Sales Support",
      "Data Visualization",
    ],
    technologies: [
      { name: "Postgres" },
      { name: "RedShift" },
      { name: "AWS Glue" },
      { name: "Matillion" },
      { name: "Tableau Server" },
      { name: "Snowflake" },
      { name: "Segment" },
    ],
    clients: [
      { name: "Delta" },
      { name: "JP Morgan" },
      { name: "Bank of America" },
    ],
    roles: [
      {
        title: "Senior Product Manager, Analytics & CodeVue",
        startDate: "Oct 2019",
        endDate: "Apr 2020",
      },
      {
        title: "Product Manager, Analytics",
        startDate: "Oct 2017",
        endDate: "Oct 2019",
      },
    ],
  },
  {
    name: "Jamberry",
    logo: "/logos/jamberry-mark.png",
    fullLogo: "/logos/jamberry-full.png",
    location: "Salt Lake City Metropolitan Area",
    industry: "Direct Sales / Beauty",
    type: "D2C Ecommerce",
    overview:
      "Direct-to-consumer beauty brand and marketplace platform enabling independent consultants to sell nail wraps and beauty products through personalized storefronts.",
    skills: [
      "Ecommerce Product Management",
      "Business Intelligence",
      "Marketplace Design",
      "Consultant Experience",
    ],
    technologies: [
      { name: "Sisense" },
      { name: "DOMO" },
    ],
    roles: [
      {
        title: "Product Manager, Business Intelligence",
        startDate: "Jan 2017",
        endDate: "Oct 2017",
      },
      {
        title: "Product Manager, Ecommerce & Marketplace",
        startDate: "Jun 2014",
        endDate: "Dec 2016",
      },
    ],
  },
  {
    name: "Sysnet Global Solutions",
    logo: "/logos/sysnet.jpg",
    fullLogo: "/logos/sysnet-full.png",
    industry: "Cybersecurity & Compliance",
    type: "Enterprise SaaS",
    overview:
      "Global provider of PCI DSS compliance validation and cybersecurity solutions, helping merchants and acquiring banks manage payment security obligations.",
    skills: [
      "Compliance Product Management",
      "Security Domain Expertise",
      "B2B Product Strategy",
      "Process Optimization",
    ],
    roles: [
      {
        title: "Product Manager",
        startDate: "Jan 2013",
        endDate: "Jun 2014",
      },
    ],
  },
  {
    name: "Panoptic Security",
    note: "Acquired by Sysnet Global Solutions",
    location: "Salt Lake City Metropolitan Area",
    industry: "Cybersecurity & Compliance",
    type: "Managed Services",
    overview:
      "Boutique security firm specializing in PCI compliance assessments and managed security services for mid-market merchants. Acquired by Sysnet Global Solutions.",
    skills: [
      "Client Relationship Management",
      "Security Assessments",
      "Account Growth",
      "Team Leadership",
    ],
    clients: [{ name: "First Data" }, { name: "North American Bancard" }],
    roles: [
      {
        title: "Director of Client Services",
        startDate: "Sep 2011",
        endDate: "Dec 2012",
      },
      {
        title: "Senior Account Manager",
        startDate: "Sep 2011",
        endDate: "Dec 2012",
      },
    ],
  },
  {
    name: "Aster Capital",
    logo: "/logos/aster.jpg",
    fullLogo: "/logos/aster-full.png",
    industry: "Venture Capital",
    type: "Financial Services",
    overview:
      "Early-stage venture capital firm focused on technology investments, providing strategic support and capital to emerging startups.",
    skills: [
      "Market Research",
      "Financial Analysis",
      "Due Diligence",
      "Startup Evaluation",
    ],
    roles: [
      { title: "Intern", startDate: "Sep 2010", endDate: "Sep 2011" },
    ],
  },
];
