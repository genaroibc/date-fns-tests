import { format, fromUnixTime } from "date-fns";

export const formatTransactionHistoryDate = (
  transaction: { timestamp: number } | undefined
): { month: string; day: string } | undefined => {
  if (!transaction?.timestamp) return undefined

  try {
    const date = new Date(Number(transaction.timestamp))

    // Format date to: MMM DD. Examples:
    // Jan 01
    // May 12
    const month = new Intl.DateTimeFormat("en-US", { month: "short" }).format(
      date
    )
    const day = date.toLocaleString("en-US", { day: "2-digit" })

    return { month, day }
  } catch (error) {
    // Handle invalid timestamp or any other errors
    console.error("Error formatting date:", error)
    return undefined
  }
}

export const formatTransactionHistoryDateFns = (
  transaction: { timestamp: number } | undefined
): { month: string; day: string } | undefined => {
  return transaction?.timestamp
    ? {
        month: format(fromUnixTime(+transaction.timestamp / 1000), "MMM"),
        day: format(fromUnixTime(+transaction.timestamp / 1000), "dd")
      }
    : undefined
}
