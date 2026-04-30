"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"

const accounts = [
    {
        id: 1,
        name: "Main Checking",
        bank: "Chase Bank",
        balance: 12450.0,
        accountNumber: "****4521",
        type: "checking",
        color: "from-chart-1 to-chart-1/60",
    },
    {
        id: 2,
        name: "Savings Account",
        bank: "Chase Bank",
        balance: 8650.0,
        accountNumber: "****7832",
        type: "savings",
        color: "from-chart-2 to-chart-2/60",
    },
    {
        id: 3,
        name: "Credit Card",
        bank: "American Express",
        balance: -1847.0,
        accountNumber: "****9102",
        type: "credit",
        color: "from-chart-3 to-chart-3/60",
    },
    {
        id: 4,
        name: "Investment",
        bank: "Fidelity",
        balance: 5310.0,
        accountNumber: "****3456",
        type: "investment",
        color: "from-chart-5 to-chart-5/60",
    },
]

export function AccountsList() {
    return (
        <Card className="bg-card border-border">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Your Accounts</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid gap-3 sm:grid-cols-2">
                    {accounts.map((account) => (
                        <div
                            key={account.id}
                            className={cn(
                                "relative overflow-hidden rounded-xl p-4",
                                "bg-gradient-to-br",
                                account.color
                            )}
                        >
                            <div className="relative z-10">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-background/80">
                                        {account.bank}
                                    </span>
                                    <span className="text-xs text-background/60">{account.accountNumber}</span>
                                </div>
                                <p className="mt-3 text-xl font-semibold text-background">
                                    {account.balance < 0 ? "-" : ""}$
                                    {Math.abs(account.balance).toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                    })}
                                </p>
                                <p className="mt-1 text-sm text-background/80">{account.name}</p>
                            </div>
                            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-background/10" />
                            <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-background/5" />
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
