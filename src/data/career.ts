export type Role = {
  title: string;
  startDate: string;
  endDate: string | null;
};

export type Company = {
  name: string;
  url?: string;
  logo?: string;
  fullLogo?: string;
  location?: string;
  note?: string;
  roles: Role[];
};

export const career: Company[] = [
  {
    name: "Volio",
    url: "https://www.volio.ai",
    logo: "/logos/volio.png",
    roles: [{ title: "Founder", startDate: "Apr 2024", endDate: null }],
  },
  {
    name: "Leap Event Technology",
    url: "https://www.leapevent.tech",
    logo: "/logos/leap.png",
    roles: [
      {
        title: "Product, Data Platform",
        startDate: "Sep 2024",
        endDate: "Dec 2025",
      },
    ],
  },
  {
    name: "Claravine",
    url: "https://www.claravine.com",
    logo: "/logos/claravine.png",
    location: "Salt Lake City Metropolitan Area",
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
    location: "Salt Lake City Metropolitan Area",
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
    roles: [
      { title: "Intern", startDate: "Sep 2010", endDate: "Sep 2011" },
    ],
  },
];
