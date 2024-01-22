import { describe, expect, test } from "vitest"
import { formatDistance } from "./formatDistance"
// import { formatDistance } from "date-fns"

describe("with suffix", () => {
  test("5 minutes with suffix", () => {
    const formatted = formatDistance(0, 60 * 1000 * 5, {
      includeSeconds: true,
      addSuffix: true
    })

    expect(formatted).toBe("5 minutes ago")
  })

  test("60 seconds with suffix", () => {
    const formatted = formatDistance(0, 60 * 1000, {
      includeSeconds: true,
      addSuffix: true
    })

    expect(formatted).toBe("1 minute ago")
  })

  test("21 minutes with suffix", () => {
    const formatted = formatDistance(0, 60 * 1000 * 21, {
      includeSeconds: true,
      addSuffix: true
    })

    expect(formatted).toBe("21 minutes ago")
  })

  test("11 days with suffix", () => {
    const formatted = formatDistance(0, 60 * 1000 * 60 * 24 * 11, {
      includeSeconds: true,
      addSuffix: true
    })

    expect(formatted).toBe("11 days ago")
  })
})

describe("without suffix", () => {
  test("5 minutes without suffix", () => {
    const formatted = formatDistance(0, 60 * 1000 * 5, {
      includeSeconds: true,
      addSuffix: false
    })

    expect(formatted).toBe("5 minutes")
  })

  test("60 seconds without suffix", () => {
    const formatted = formatDistance(0, 60 * 1000, {
      includeSeconds: true,
      addSuffix: false
    })

    expect(formatted).toBe("1 minute")
  })

  test("21 minutes without suffix", () => {
    const formatted = formatDistance(0, 60 * 1000 * 21, {
      includeSeconds: true,
      addSuffix: false
    })

    expect(formatted).toBe("21 minutes")
  })

  test("11 days without suffix", () => {
    const formatted = formatDistance(0, 60 * 1000 * 60 * 24 * 11, {
      includeSeconds: true,
      addSuffix: false
    })

    expect(formatted).toBe("11 days")
  })
})
