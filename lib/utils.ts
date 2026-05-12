import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export const formatCurrencyInput = (value: string) => {
  const rawValue = value.replace(/\D/g, "")

  if (!rawValue) return ""

  return new Intl.NumberFormat("en-US").format(
    Number(rawValue)
  )
}

export const parseCurrencyInput = (value: string) => {
  return Number(value.replace(/\D/g, ""))
}

export const formatChartData = (data: any[]) => {
  const typeData: Record<
    string,
    {
      month: string
      income: number
      expenses: number
    }
  > = {}
  data.forEach((transaction) => {
    const date = new Date(transaction.date)

    const month = date.toLocaleString("default", {
      month: "short",
    })

    if (!typeData[month]) {
      typeData[month] = {
        month,
        income: 0,
        expenses: 0,
      }
    }

    if (transaction.type === "income") {
      typeData[month].income += transaction.amount
    }

    if (transaction.type === "expense") {
      typeData[month].expenses += transaction.amount
    }
  })

  return Object.values(typeData)
}