import Image from "next/image";
import { FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa6";
import { career } from "@/data/career";

const socials = [
  { href: "https://www.linkedin.com/in/henningsadam", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.youtube.com/@henningsadam", icon: FaYoutube, label: "YouTube" },
  { href: "https://www.github.com/henningsadam", icon: FaGithub, label: "GitHub" },
];

function formatPeriod(startDate: string, endDate: string | null) {
  return `${startDate} – ${endDate ?? "Present"}`;
}

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center justify-center gap-6 py-24">
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

      <section className="w-full max-w-xl px-6 pb-24">
        <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-zinc-400">
          Experience
        </h2>
        <div className="relative border-l border-zinc-200 pl-8 dark:border-zinc-800">
          {career.map(({ name, url, logo, note, roles }) => (
            <div key={name} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[calc(2rem+0.25rem)] top-1.5 h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />
              <div className="flex items-center gap-3">
                {logo && (
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={24}
                    height={24}
                    className="rounded"
                  />
                )}
                {url ? (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-semibold text-zinc-900 hover:underline dark:text-zinc-100"
                  >
                    {name}
                  </a>
                ) : (
                  <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                    {name}
                  </h3>
                )}
              </div>
              {note && (
                <p className="mt-0.5 text-xs text-zinc-400">{note}</p>
              )}
              <ul className="mt-3 space-y-2">
                {roles.map((role) => (
                  <li key={role.title} className="flex flex-col">
                    <span className="text-sm text-zinc-700 dark:text-zinc-300">
                      {role.title}
                    </span>
                    <span className="text-xs text-zinc-400">
                      {formatPeriod(role.startDate, role.endDate)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
