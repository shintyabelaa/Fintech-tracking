"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { cn } from "@/lib/utils"
import { ShoppingBag, Utensils, Car, Home, Gamepad2, DollarSign, ArrowRight, Briefcase, TrendingUp, Gift, Wallet, EllipsisVertical, SquarePen, TrashIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { getTransactions } from "@/app/services/transaction.service"
import {
    Popover,
    PopoverContent,
    PopoverDescription,
    PopoverHeader,
    PopoverTitle,
    PopoverTrigger,
} from "@/components/ui/popover"
import { AddTransactionForm } from "./TransactionForm"
type Transaction = {
    id: number
    description: string
    category: string
    amount: number
    CreatedAt: string
    type: string
    date: string
}
interface Props {
    transactions: Transaction[]
    loading: boolean
}

const categoryConfig: Record<
    string,
    {
        icon: any
        bgColor: string
        iconColor: string
    }
> = {
    shopping: {
        icon: ShoppingBag,
        bgColor: "bg-blue-100",
        iconColor: "text-blue-600",
    },

    food: {
        icon: Utensils,
        bgColor: "bg-orange-100",
        iconColor: "text-orange-600",
    },

    transportation: {
        icon: Car,
        bgColor: "bg-yellow-100",
        iconColor: "text-yellow-600",
    },

    housing: {
        icon: Home,
        bgColor: "bg-purple-100",
        iconColor: "text-purple-600",
    },

    entertainment: {
        icon: Gamepad2,
        bgColor: "bg-pink-100",
        iconColor: "text-pink-600",
    },

    salary: {
        icon: Briefcase,
        bgColor: "bg-green-100",
        iconColor: "text-green-600",
    },

    freelance: {
        icon: TrendingUp,
        bgColor: "bg-emerald-100",
        iconColor: "text-emerald-600",
    },

    gift: {
        icon: Gift,
        bgColor: "bg-rose-100",
        iconColor: "text-rose-600",
    },

    other: {
        icon: Wallet,
        bgColor: "bg-gray-100",
        iconColor: "text-gray-600",
    },
}

export function RecentTransactions({
    transactions, loading
}: Props) {

    const [open, setOpen] = useState(false)

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle>Recent Transactions</CardTitle>

                <Button variant="ghost" size="sm">
                    View All
                    <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
            </CardHeader>

            <CardContent>
                <div className="space-y-4">
                    {loading && (
                        <p className="text-sm text-muted-foreground">
                            Loading...
                        </p>
                    )}

                    {!loading &&
                        transactions.map((transaction) => {
                            const configIcon =
                                categoryConfig[transaction.category] ||
                                {
                                    icon: DollarSign,
                                    bgColor: "bg-gray-100",
                                    iconColor: "text-gray-600",
                                }
                            const Icon = configIcon.icon
                            return (
                                <div
                                    key={transaction.id}
                                    className="flex items-center justify-between rounded-lg p-2 hover:bg-muted/50"
                                >
                                    <div className="flex items-center gap-4">
                                        <Popover>
                                            <PopoverTrigger render={<Button className="p-0" variant="ghost" />}>
                                                <EllipsisVertical className="h-4 w-4" />
                                            </PopoverTrigger>
                                            <PopoverContent className="border-none! rounded-md w-fit">
                                                <PopoverHeader className="flex felx-col gap-2">
                                                    <button
                                                        onClick={() => setOpen(true)}
                                                        className="flex p-2 gap-2 items-center  transition-colors hover:bg-sidebar-accent hover:text-foreground"
                                                    >
                                                        <SquarePen className="h-6 w-6 p-1 bg-amber-500/50 rounded-sm text-white" />
                                                        <div>Edit</div>

                                                    </button>
                                                    <AddTransactionForm open={open} setOpen={setOpen} onSuccess={fetchTransactions} />
                                                    <button
                                                        // onClick={()}
                                                        className="flex p-2 gap-2 items-center  transition-colors hover:bg-sidebar-accent hover:text-foreground"
                                                    >
                                                        <TrashIcon className="h-6 w-6 p-1 bg-red-500/50 rounded-sm text-white" />
                                                        <div>Delete</div>

                                                    </button>

                                                </PopoverHeader>
                                            </PopoverContent>
                                        </Popover>
                                        <div className={cn(
                                            "flex h-10 w-10 items-center justify-center rounded-lg",
                                            configIcon.bgColor
                                        )}>
                                            <Icon className={cn("h-5 w-5", configIcon.iconColor)} />
                                        </div>

                                        <div>

                                            <p className="font-medium uppercase">
                                                {transaction.category}
                                            </p>
                                            <p className="text-sm text-muted-foreground capitalize">
                                                {transaction.description}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="text-right">
                                        <p
                                            className={cn(
                                                "font-medium",
                                                transaction.type === 'income'
                                                    ? "text-green-500"
                                                    : "text-red-500"
                                            )}
                                        >
                                            {transaction.type === 'income'
                                                ? "+"
                                                : "-"}
                                            Rp
                                            {Math.abs(
                                                transaction.amount
                                            ).toLocaleString()}
                                        </p>

                                        <p className="text-sm text-muted-foreground">
                                            {new Date(
                                                transaction.date
                                            ).toLocaleDateString()}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                </div>
            </CardContent>
        </Card>
    )
}
