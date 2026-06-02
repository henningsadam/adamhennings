"use client"

import { useMemo, useRef, useState } from "react"
import type { ContributionDay, Week } from "@/lib/github"

const BLOCK_SIZE = 11
const BLOCK_GAP = 3
const CELL_SIZE = BLOCK_SIZE + BLOCK_GAP
const BLOCK_RADIUS = 2
const LABEL_WIDTH = 30
const HEADER_HEIGHT = 18

const MONTHS = [
  "Jan", "Feb", "Mar", "Apr", "May", "Jun",
  "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
]

function formatTooltip(day: ContributionDay): string {
  const date = new Date(day.date + "T12:00:00Z")
  const month = MONTHS[date.getUTCMonth()]
  const dayNum = date.getUTCDate()
  const year = date.getUTCFullYear()
  const count = day.count === 0 ? "No" : day.count
  const plural = day.count === 1 ? "contribution" : "contributions"
  return `${count} ${plural} on ${month} ${dayNum}, ${year}`
}

const DAY_LABELS = [
  { label: "Mon", y: HEADER_HEIGHT + 1 * CELL_SIZE + BLOCK_SIZE / 2 },
  { label: "Wed", y: HEADER_HEIGHT + 3 * CELL_SIZE + BLOCK_SIZE / 2 },
  { label: "Fri", y: HEADER_HEIGHT + 5 * CELL_SIZE + BLOCK_SIZE / 2 },
]

export function ContributionGraph({
  rolling,
  byYear,
  username,
}: {
  rolling: Week[]
  byYear: Record<number, Week[]>
  username: string
}) {
  const years = Object.keys(byYear)
    .map(Number)
    .sort((a, b) => b - a)
  const [selectedYear, setSelectedYear] = useState<number | null>(null)
  const weeks = selectedYear ? byYear[selectedYear] : rolling

  const containerRef = useRef<HTMLDivElement>(null)
  const [tooltip, setTooltip] = useState<{
    text: string
    x: number
    y: number
  } | null>(null)

  const total = useMemo(
    () => weeks.flat().reduce((sum, day) => sum + (day?.count ?? 0), 0),
    [weeks]
  )

  const { width, monthLabels } = useMemo(() => {
    const w = LABEL_WIDTH + weeks.length * CELL_SIZE
    const labels: { label: string; x: number }[] = []
    let lastMonth = -1
    weeks.forEach((week, weekIndex) => {
      const day = week.find((d) => d !== null)
      if (!day) return
      const month = new Date(day.date + "T12:00:00Z").getUTCMonth()
      if (month !== lastMonth) {
        labels.push({ label: MONTHS[month], x: LABEL_WIDTH + weekIndex * CELL_SIZE })
        lastMonth = month
      }
    })
    return { width: w, monthLabels: labels }
  }, [weeks])

  const height = HEADER_HEIGHT + 7 * CELL_SIZE

  function handlePointerEnter(
    e: React.PointerEvent,
    day: ContributionDay
  ) {
    const container = containerRef.current
    if (!container) return
    const rect = (e.target as Element).getBoundingClientRect()
    const containerRect = container.getBoundingClientRect()
    setTooltip({
      text: formatTooltip(day),
      x: rect.left + rect.width / 2 - containerRect.left,
      y: rect.top - containerRect.top,
    })
  }

  return (
    <div>
      <div className="mb-4 flex items-baseline justify-between">
        <p className="text-sm text-zinc-400">
          {total.toLocaleString()} contributions{" "}
          {selectedYear ? `in ${selectedYear}` : "in the last year"}
        </p>
        <div className="flex gap-1.5">
          {years.map((year) => (
            <button
              key={year}
              type="button"
              onClick={() =>
                setSelectedYear((prev) => (prev === year ? null : year))
              }
              className={`cursor-pointer rounded-full px-3 py-1 text-xs font-medium transition-colors ${
                year === selectedYear
                  ? "bg-zinc-900 text-zinc-100 dark:bg-zinc-100 dark:text-zinc-900"
                  : "bg-zinc-100 text-zinc-600 hover:bg-zinc-200 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700"
              }`}
            >
              {year}
            </button>
          ))}
        </div>
      </div>
      <div ref={containerRef} className="relative">
        <svg
          viewBox={`0 0 ${width} ${height}`}
          className="w-full"
          role="img"
          aria-label={`${username}'s GitHub contribution graph`}
          onPointerLeave={() => setTooltip(null)}
        >
          {monthLabels.map(({ label, x }) => (
            <text
              key={`${label}-${x}`}
              x={x}
              y={HEADER_HEIGHT - 6}
              className="fill-zinc-400"
              fontSize={10}
            >
              {label}
            </text>
          ))}

          {DAY_LABELS.map(({ label, y }) => (
            <text
              key={label}
              x={0}
              y={y}
              className="fill-zinc-400"
              fontSize={10}
              dominantBaseline="central"
            >
              {label}
            </text>
          ))}

          {weeks.map((week, weekIndex) => (
            <g
              key={weekIndex}
              transform={`translate(${LABEL_WIDTH + weekIndex * CELL_SIZE}, ${HEADER_HEIGHT})`}
            >
              {week.map((day, dayIndex) => {
                if (!day) return null
                return (
                  <rect
                    key={day.date}
                    x={0}
                    y={dayIndex * CELL_SIZE}
                    width={BLOCK_SIZE}
                    height={BLOCK_SIZE}
                    rx={BLOCK_RADIUS}
                    ry={BLOCK_RADIUS}
                    style={{ fill: `var(--contrib-${day.level})` }}
                    onPointerEnter={(e) => handlePointerEnter(e, day)}
                    onPointerLeave={() => setTooltip(null)}
                  />
                )
              })}
            </g>
          ))}
        </svg>

        {tooltip && (
          <div
            className="pointer-events-none absolute z-10 -translate-x-1/2 -translate-y-full rounded bg-zinc-800 px-2.5 py-1.5 text-xs text-zinc-100 whitespace-nowrap shadow dark:bg-zinc-700"
            style={{ left: tooltip.x, top: tooltip.y - 4 }}
          >
            {tooltip.text}
          </div>
        )}
      </div>
    </div>
  )
}
