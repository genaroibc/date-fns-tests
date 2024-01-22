import { expect, test } from "vitest"
import {
  formatTransactionHistoryDate,
  // formatTransactionHistoryDateFns as formatTransactionHistoryDate,
} from "./formatTransactionHistoryDate"

test("zero timestamp", () => {
  expect(formatTransactionHistoryDate({ timestamp: 0 })).toBe(undefined)

  expect(formatTransactionHistoryDate({ timestamp: 1 })).toStrictEqual({
    month: "Dec",
    day: "31"
  })
})

test("valid timestamps", () => {
  expect(
    formatTransactionHistoryDate({ timestamp: 1617942000000 })
  ).toStrictEqual({ month: "Apr", day: "09" })

  expect(
    formatTransactionHistoryDate({ timestamp: 1705943591817 })
  ).toStrictEqual({ month: "Jan", day: "22" })

  expect(
    formatTransactionHistoryDate({
      timestamp: new Date(2015, 0, 1, 0, 0, 15).getTime()
    })
  ).toStrictEqual({ month: "Jan", day: "01" })

  expect(
    formatTransactionHistoryDate({
      timestamp: new Date(2015, 11, 31, 23, 59, 45).getTime()
    })
  ).toStrictEqual({ month: "Dec", day: "31" })
})
