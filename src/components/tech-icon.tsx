import Image from "next/image";
import type { IconType } from "react-icons";
import {
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiZod,
  SiDrizzle,
  SiTailwindcss,
  SiStorybook,
  SiCapacitor,
  SiGit,
  SiResend,
  SiSupabase,
  SiGithub,
  SiVercel,
  SiClaude,
  SiAnthropic,
  SiOpenai,
  SiSnowflake,
  SiLooker,
  SiCoda,
  SiPostgresql,
  SiMatillion,
  SiJira,
} from "react-icons/si";
import { FiBox } from "react-icons/fi";
import { siCursor } from "simple-icons";

type ReactIconConfig = {
  type: "react-icon";
  icon: IconType;
  color: string;
  darkColor?: string;
};

type SvgPathConfig = {
  type: "svg-path";
  path: string;
  viewBox: string;
  color: string;
  darkColor?: string;
};

type ImageConfig = {
  type: "image";
  src: string;
};

type TechIconConfig = ReactIconConfig | SvgPathConfig | ImageConfig;

const techIcons: Record<string, TechIconConfig> = {
  TypeScript: { type: "react-icon", icon: SiTypescript, color: "#3178C6" },
  React: { type: "react-icon", icon: SiReact, color: "#61DAFB" },
  "Next.js": { type: "react-icon", icon: SiNextdotjs, color: "#000000", darkColor: "#ffffff" },
  Zod: { type: "react-icon", icon: SiZod, color: "#3E67B1" },
  SQL: { type: "react-icon", icon: SiPostgresql, color: "#4169E1" },
  Drizzle: { type: "react-icon", icon: SiDrizzle, color: "#C5F74F" },
  Tailwind: { type: "react-icon", icon: SiTailwindcss, color: "#06B6D4" },
  Storybook: { type: "react-icon", icon: SiStorybook, color: "#FF4785" },
  "Capacitor.js": { type: "react-icon", icon: SiCapacitor, color: "#119EFF" },
  Git: { type: "react-icon", icon: SiGit, color: "#F05032" },
  Resend: { type: "react-icon", icon: SiResend, color: "#000000", darkColor: "#ffffff" },
  Supabase: { type: "react-icon", icon: SiSupabase, color: "#3FCF8E" },
  GitHub: { type: "react-icon", icon: SiGithub, color: "#181717", darkColor: "#ffffff" },
  Vercel: { type: "react-icon", icon: SiVercel, color: "#000000", darkColor: "#ffffff" },
  "Claude Code": { type: "react-icon", icon: SiClaude, color: "#D97757" },
  Anthropic: { type: "react-icon", icon: SiAnthropic, color: "#191919", darkColor: "#ffffff" },
  OpenAI: { type: "react-icon", icon: SiOpenai, color: "#412991", darkColor: "#ffffff" },
  "AWS Quicksight": { type: "image", src: "/logos/tech/aws.svg" },
  Snowflake: { type: "react-icon", icon: SiSnowflake, color: "#29B5E8" },
  Looker: { type: "react-icon", icon: SiLooker, color: "#4285F4" },
  "AWS Glue": { type: "image", src: "/logos/tech/aws.svg" },
  Tableau: { type: "image", src: "/logos/tech/tableau.png" },
  "Tableau Server": { type: "image", src: "/logos/tech/tableau.png" },
  Coda: { type: "react-icon", icon: SiCoda, color: "#F46A54" },
  "Jira Product Discovery": { type: "react-icon", icon: SiJira, color: "#0052CC" },
  Postgres: { type: "react-icon", icon: SiPostgresql, color: "#4169E1" },
  RedShift: { type: "image", src: "/logos/tech/aws.svg" },
  Matillion: { type: "react-icon", icon: SiMatillion, color: "#09B467" },

  // simple-icons (SVG path data)
  Cursor: { type: "svg-path", path: siCursor.path, viewBox: "0 0 24 24", color: "#000000", darkColor: "#ffffff" },

  // Image-based (favicons + devicon SVGs)
  Playwright: { type: "image", src: "/logos/tech/playwright.svg" },
  Pendo: { type: "image", src: "/logos/tech/pendo.png" },
  Segment: { type: "image", src: "/logos/tech/segment.svg" },
  Sisense: { type: "image", src: "/logos/tech/sisense.png" },
  DOMO: { type: "image", src: "/logos/tech/domo.png" },
};

export function TechIcon({ name, size = 14 }: { name: string; size?: number }) {
  const config = techIcons[name];

  if (!config) {
    return <FiBox size={size} className="text-zinc-400" />;
  }

  if (config.type === "image") {
    return (
      <Image
        src={config.src}
        alt={name}
        width={size}
        height={size}
        className="object-contain"
      />
    );
  }

  if (config.type === "svg-path") {
    return (
      <svg
        viewBox={config.viewBox}
        width={size}
        height={size}
        fill="currentColor"
        style={{ color: config.color, "--tech-dark-color": config.darkColor } as React.CSSProperties}
        className={config.darkColor ? "tech-icon-invertable" : undefined}
      >
        <path d={config.path} />
      </svg>
    );
  }

  const { icon: Icon, color, darkColor } = config;
  return (
    <Icon
      size={size}
      style={{ color, "--tech-dark-color": darkColor } as React.CSSProperties}
      className={darkColor ? "tech-icon-invertable" : undefined}
    />
  );
}
