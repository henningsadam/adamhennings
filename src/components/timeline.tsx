"use client";

import { useState } from "react";
import Image from "next/image";
import {
  FiChevronDown,
  FiExternalLink,
  FiBox,
} from "react-icons/fi";
import { LuBuilding2 } from "react-icons/lu";
import type { Company } from "@/data/career";

function formatPeriod(startDate: string, endDate: string | null) {
  return `${startDate} – ${endDate ?? "Present"}`;
}

function DetailPanel({ company }: { company: Company }) {
  const {
    industry,
    type,
    overview,
    roles,
    skills,
    technologies,
    clients,
  } = company;

  return (
    <div className="space-y-5 pt-4 pb-2">
      {(industry || type) && (
        <div className="flex flex-wrap gap-2">
          {industry && (
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {industry}
            </span>
          )}
          {type && (
            <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400">
              {type}
            </span>
          )}
        </div>
      )}

      {overview && (
        <p className="text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
          {overview}
        </p>
      )}

      <div>
        <h4 className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
          Roles
        </h4>
        <ul className="space-y-1.5">
          {roles.map((role) => (
            <li key={`${role.title}-${role.startDate}`} className="flex flex-col">
              <span className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                {role.title}
              </span>
              <span className="text-xs text-zinc-400">
                {formatPeriod(role.startDate, role.endDate)}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {skills && skills.length > 0 && (
        <div>
          <h4 className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
            Skills
          </h4>
          <div className="flex flex-wrap gap-1.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="rounded bg-zinc-100 px-2 py-0.5 text-xs text-zinc-600 dark:bg-zinc-800 dark:text-zinc-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )}

      {technologies && technologies.length > 0 && (
        <div>
          <h4 className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
            Technologies
          </h4>
          <div className="flex flex-wrap gap-3">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="flex items-center gap-1.5 rounded bg-zinc-100 px-2.5 py-1 dark:bg-zinc-800"
              >
                <FiBox className="text-zinc-400" size={14} />
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}

      {clients && clients.length > 0 && (
        <div>
          <h4 className="mb-2 text-xs font-medium uppercase tracking-widest text-zinc-400">
            Worked with
          </h4>
          <div className="flex flex-wrap gap-3">
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex items-center gap-1.5 rounded bg-zinc-100 px-2.5 py-1 dark:bg-zinc-800"
              >
                <LuBuilding2 className="text-zinc-400" size={14} />
                <span className="text-xs text-zinc-600 dark:text-zinc-400">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export function Timeline({ career }: { career: Company[] }) {
  const [expanded, setExpanded] = useState<string | null>(null);

  function toggle(name: string) {
    setExpanded((prev) => (prev === name ? null : name));
  }

  return (
    <div className="relative border-l border-zinc-200 pl-8 dark:border-zinc-800">
      {career.map((company) => {
        const { name, url, logo, fullLogo, note, roles } = company;
        const isOpen = expanded === name;
        const heroLogo = fullLogo ?? logo;

        return (
          <div key={name} className="group relative mb-10 last:mb-0">
            <span className="absolute -left-[calc(2rem+0.25rem)] top-1.5 h-2 w-2 rounded-full bg-zinc-300 dark:bg-zinc-600" />

            <button
              type="button"
              onClick={() => toggle(name)}
              className="relative flex w-full cursor-pointer items-center gap-3 text-left"
            >
              <div className={`flex flex-1 items-center gap-3 transition-opacity duration-300 ${isOpen ? "opacity-0" : "opacity-100"}`}>
                {logo && (
                  <Image
                    src={logo}
                    alt={`${name} logo`}
                    width={24}
                    height={24}
                    className="rounded grayscale transition-[filter] duration-300 group-hover:grayscale-0"
                  />
                )}
                <span className="text-base font-semibold text-zinc-900 dark:text-zinc-100">
                  {name}
                </span>
              </div>
              {heroLogo && (
                <div className={`absolute inset-y-0 left-0 flex items-center gap-3 transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}>
                  <Image
                    src={heroLogo}
                    alt={`${name} logo`}
                    width={120}
                    height={40}
                    className="h-8 w-auto object-contain"
                  />
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="group/link flex items-center gap-1.5 text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
                    >
                      <FiExternalLink size={14} />
                      <span className="max-w-0 overflow-hidden whitespace-nowrap text-xs transition-[max-width] duration-300 ease-in-out group-hover/link:max-w-24">
                        Visit Website
                      </span>
                    </a>
                  )}
                </div>
              )}
              <FiChevronDown
                size={16}
                className={`shrink-0 text-zinc-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
              />
            </button>

            {note && (
              <p className="mt-0.5 text-xs text-zinc-400">{note}</p>
            )}

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[0fr] opacity-0" : "grid-rows-[1fr] opacity-100"}`}
            >
              <div className="overflow-hidden">
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
            </div>

            <div
              className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
            >
              <div className="overflow-hidden">
                <DetailPanel company={company} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
