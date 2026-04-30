"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ShoppingBag, Utensils, Car, Home, Gamepad2, DollarSign, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const transactions = [
    {
        id: 1,
        name: "Amazon Purchase",
        category: "Shopping",
        amount: -89.99,
        date: "Today",
        time: "2:34 PM",
        icon: ShoppingBag,
        iconBg: "bg-chart-4/20",
        iconColor: "text-chart-4",
    },
    {
        id: 2,
        name: "Salary Deposit",
        category: "Income",
        amount: 4250.0,
        date: "Today",
        time: "9:00 AM",
        icon: DollarSign,
        iconBg: "bg-chart-1/20",
        iconColor: "text-chart-1",
    },
    {
        id: 3,
        name: "Uber Eats",
        category: "Food",
        amount: -32.5,
        date: "Yesterday",
        time: "7:45 PM",
        icon: Utensils,
        iconBg: "bg-chart-2/20",
        iconColor: "text-chart-2",
    },
    {
        id: 4,
        name: "Gas Station",
        category: "Transport",
        amount: -45.0,
        date: "Yesterday",
        time: "3:20 PM",
        icon: Car,
        iconBg: "bg-chart-3/20",
        iconColor: "text-chart-3",
    },
    {
        id: 5,
        name: "Rent Payment",
        category: "Housing",
        amount: -1200.0,
        date: "Jul 1",
        time: "12:00 AM",
        icon: Home,
        iconBg: "bg-chart-1/20",
        iconColor: "text-chart-1",
    },
    {
        id: 6,
        name: "Steam Games",
        category: "Entertainment",
        amount: -29.99,
        date: "Jun 30",
        time: "8:15 PM",
        icon: Gamepad2,
        iconBg: "bg-chart-5/20",
        iconColor: "text-chart-5",
    },
]

export function RecentTransactions() {
    return (
        <Card className="bg-card border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <CardTitle className="text-lg font-medium">Recent Transactions</CardTitle>
                <Button variant="ghost" size="sm" className="gap-1 text-muted-foreground">
                    View All <ArrowRight className="h-4 w-4" />
                </Button>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {transactions.map((transaction) => (
                        <div
                            key={transaction.id}
                            className="flex items-center justify-between rounded-lg p-2 transition-colors hover:bg-secondary/50"
                        >
                            <div className="flex items-center gap-4">
                                <div
                                    className={cn(
                                        "flex h-10 w-10 items-center justify-center rounded-lg",
                                        transaction.iconBg
                                    )}
                                >
                                    <transaction.icon className={cn("h-5 w-5", transaction.iconColor)} />
                                </div>
                                <div>
                                    <p className="font-medium text-foreground">{transaction.name}</p>
                                    <p className="text-sm text-muted-foreground">{transaction.category}</p>
                                </div>
                            </div>
                            <div className="text-right">
                                <p
                                    className={cn(
                                        "font-medium",
                                        transaction.amount > 0 ? "text-success" : "text-foreground"
                                    )}
                                >
                                    {transaction.amount > 0 ? "+" : ""}
                                    ${Math.abs(transaction.amount).toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                    })}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    {transaction.date} • {transaction.time}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    )
}
