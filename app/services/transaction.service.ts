// const API_URL = process.env.NEXT_PUBLIC_API_URL

import { API_URL } from "@/lib/api"

export const getTransactions = async () => {
    const res = await fetch(`${API_URL}/api/transactions`, {
        method: "GET",
    })
    console.log(res)
    if (!res.ok) {
        throw new Error("Failed to fetch transactions")
    }

    const data = await res.json()
    console.log(data)
    return data
}