import { FaLinkedinIn, FaYoutube, FaGithub } from "react-icons/fa6";
import { career } from "@/data/career";
import { Timeline } from "@/components/timeline";
import { ContributionGraph } from "@/components/contribution-graph";
import { fetchContributions } from "@/lib/github";

const GITHUB_USERNAME = "henningsadam";

// Re-render at most hourly so the graph advances to the current day instead of
// being frozen at build time (the route has no request-time APIs, so it would
// otherwise be statically prerendered once).
export const revalidate = 3600;

const socials = [
  { href: "https://www.linkedin.com/in/henningsadam", icon: FaLinkedinIn, label: "LinkedIn" },
  { href: "https://www.youtube.com/@henningsadam", icon: FaYoutube, label: "YouTube" },
  { href: `https://www.github.com/${GITHUB_USERNAME}`, icon: FaGithub, label: "GitHub" },
];

async function ContributionGraphLoader() {
  // Read "now" per render so the year tabs track the current year across
  // revalidations rather than being frozen at module load.
  const currentYear = new Date().getFullYear();
  const PRIOR_YEARS = [currentYear - 1, currentYear - 2];

  const [rolling, ...yearData] = await Promise.all([
    fetchContributions(GITHUB_USERNAME),
    ...PRIOR_YEARS.map((year) => fetchContributions(GITHUB_USERNAME, year)),
  ])
  const byYear = Object.fromEntries(
    PRIOR_YEARS.map((year, i) => [year, yearData[i]])
  )
  return (
    <ContributionGraph
      rolling={rolling}
      byYear={byYear}
      username={GITHUB_USERNAME}
    />
  )
}

export default async function Home() {
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

      <section className="w-full max-w-4xl px-6 pb-24">
        <ContributionGraphLoader />
      </section>

      <section className="w-full max-w-xl px-6 pb-24">
        <h2 className="mb-10 text-sm font-medium uppercase tracking-widest text-zinc-400">
          Experience
        </h2>
        <Timeline career={career} />
      </section>
    </div>
  );
}
