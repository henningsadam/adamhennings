import { FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa6";

const socials = [
  { href: "https://www.linkedin.com/in/henningsadam", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.youtube.com/@henningsadam", icon: FaYoutube, label: "YouTube" },
  { href: "https://www.github.com/henningsadam", icon: FaGithub, label: "GitHub" },
];

export default function Home() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6">
      <h1 className="shimmer text-5xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
        Adam Hennings
      </h1>
      <div className="flex gap-5">
        {socials.map(({ href, icon: Icon, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="text-zinc-400 transition-colors hover:text-zinc-900 dark:hover:text-zinc-50"
          >
            <Icon size={22} />
          </a>
        ))}
      </div>
    </div>
  );
}
