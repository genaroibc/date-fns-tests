interface Locale {
  locale?: string
}

export const formatDistance = (
  date: number | Date,
  baseDate: number | Date,
  options?: {
    includeSeconds?: boolean | undefined
    addSuffix?: boolean | undefined
    locale?: Locale | undefined
  }
): string => {
  const {
    includeSeconds = false,
    addSuffix = false,
    locale = { locale: "en-US" }
  } = options || {}

  const elapsedMilliseconds = Math.abs(
    new Date(date).getTime() - new Date(baseDate).getTime()
  )

  const seconds = Math.round(elapsedMilliseconds / 1000)
  const minutes = Math.round(seconds / 60)
  const hours = Math.round(minutes / 60)
  const days = Math.round(hours / 24)
  const months = Math.round(days / 30.44)
  const years = Math.round(days / 365.25)

  const rtf = new Intl.RelativeTimeFormat(locale.locale, { numeric: "auto" })

  let formatted = ""

  if (includeSeconds && seconds < 45) {
    const unit = addSuffix ? "second" : "seconds"
    formatted = rtf.format(-seconds, unit)
  } else if (minutes < 60) {
    formatted = rtf.format(-minutes, "minutes")
  } else if (hours < 24) {
    formatted = rtf.format(-hours, "hours")
  } else if (days < 30) {
    formatted = rtf.format(-days, "days")
  } else if (months < 12) {
    formatted = rtf.format(-months, "months")
  } else {
    formatted = rtf.format(-years, "years")
  }

  // remove "ago" from the string
  // before: "2 minutes ago"
  // after: "2 minutes"
  return addSuffix ? formatted : formatted.replace(/\b(?:ago)\b/, "").trim()
}
