export type ContributionDay = {
  date: string
  count: number
  level: 0 | 1 | 2 | 3 | 4
}

export type Week = (ContributionDay | null)[]

export async function fetchContributions(
  username: string,
  year?: number
): Promise<Week[]> {
  const url = year
    ? `https://github.com/users/${username}/contributions?from=${year}-01-01`
    : `https://github.com/users/${username}/contributions`
  const res = await fetch(url)
  const html = await res.text()

  const cellRegex =
    /data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="(\d)"/g
  const tooltipRegex = /<tool-tip[^>]*>([^<]*)<\/tool-tip>/g

  const entries: ContributionDay[] = []
  let match

  while ((match = cellRegex.exec(html))) {
    entries.push({
      date: match[1],
      level: parseInt(match[2]) as ContributionDay["level"],
      count: 0,
    })
  }

  let i = 0
  while ((match = tooltipRegex.exec(html))) {
    if (i < entries.length) {
      const countMatch = match[1].match(/^(\d+)\s/)
      entries[i].count = countMatch ? parseInt(countMatch[1]) : 0
      i++
    }
  }

  if (entries.length === 0) return []

  entries.sort((a, b) => a.date.localeCompare(b.date))

  const dateMap = new Map(entries.map((e) => [e.date, e]))
  const startDate = new Date(entries[0].date + "T12:00:00Z")
  const endDate = new Date(entries[entries.length - 1].date + "T12:00:00Z")

  // Align start to Sunday
  startDate.setUTCDate(startDate.getUTCDate() - startDate.getUTCDay())

  const weeks: Week[] = []
  let currentWeek: Week = new Array(7).fill(null)
  const cursor = new Date(startDate)

  while (cursor <= endDate) {
    const dow = cursor.getUTCDay()
    const dateStr = cursor.toISOString().slice(0, 10)
    currentWeek[dow] = dateMap.get(dateStr) ?? null

    if (dow === 6) {
      weeks.push(currentWeek)
      currentWeek = new Array(7).fill(null)
    }

    cursor.setUTCDate(cursor.getUTCDate() + 1)
  }

  if (currentWeek.some((d) => d !== null)) {
    weeks.push(currentWeek)
  }

  return weeks
}
