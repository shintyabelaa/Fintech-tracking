'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
    InputGroup,
    InputGroupAddon,
    InputGroupInput,

} from "@/components/ui/input-group"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { cn, formatCurrencyInput, parseCurrencyInput } from "@/lib/utils"
import { format } from "date-fns"
import {
    CalendarIcon,
    DollarSign,
    ArrowUpRight,
    ArrowDownLeft,
    ShoppingBag,
    Home,
    Car,
    Utensils,
    Briefcase,
    Gift,
    Wallet,
    TrendingUp,
} from "lucide-react"
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog'
import { Field, FieldLabel } from "@/components/ui/field"
import { useAuth } from "@clerk/nextjs"
import { getTransactions } from "@/app/services/transaction.service"

/* ---------------- TYPES ---------------- */

interface TransactionFormProps {
    open: boolean
    setOpen: (open: boolean) => void
    onSuccess?: () => void
}

/* ---------------- DATA ---------------- */

const expenseCategories = [
    { value: "food", label: "Food & Dining", icon: Utensils },
    { value: "shopping", label: "Shopping", icon: ShoppingBag },
    { value: "housing", label: "Housing", icon: Home },
    { value: "transportation", label: "Transportation", icon: Car },
    { value: "other", label: "Other", icon: Wallet },
]

const incomeCategories = [
    { value: "salary", label: "Salary", icon: Briefcase },
    { value: "freelance", label: "Freelance", icon: TrendingUp },
    { value: "gift", label: "Gift", icon: Gift },
    { value: "other", label: "Other", icon: Wallet },
]

/* ---------------- COMPONENT ---------------- */

export function AddTransactionForm({
    open,
    setOpen,
    onSuccess,
}: TransactionFormProps) {

    const [type, setType] = useState<"income" | "expense">("expense")
    const [amount, setAmount] = useState("")
    const [category, setCategory] = useState<string | null>(null)

    const [date, setDate] = useState<Date>(new Date())
    const [description, setDescription] = useState("")

    const categories =
        type === "income" ? incomeCategories : expenseCategories

    const { getToken } = useAuth()
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!amount || !category) return

        try {
            const token = await getToken()
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/transactions`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                    body: JSON.stringify({
                        type,
                        amount: parseCurrencyInput(amount),
                        category,
                        date: date.toISOString(),
                        description,
                    }),
                }
            )


            if (!res.ok) {
                throw new Error("Failed to create transaction")
            }

            // const data = await res.json()

            // optional callback (update UI list)
            onSuccess?.()

            // reset
            setAmount("")
            setCategory(null)
            setDescription("")
            setDate(new Date())

            // close modal
            setOpen(false)
            await getTransactions()

        } catch (err) {
            console.error(err)
        }
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Add Transaction</DialogTitle>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-6">

                    {/* TYPE */}
                    <Field className="max-w-sm">
                        <FieldLabel htmlFor="inline-start-input">Transaction Type</FieldLabel>
                        <div className="grid grid-cols-2 gap-3">
                            <button
                                type="button"
                                onClick={() => {
                                    setType("expense")
                                    setCategory("")
                                }}
                                className={cn(
                                    "rounded-lg border-2 flex items-center justify-center gap-2 px-4 py-3",
                                    type === "expense" && "border-destructive"
                                )}
                            >
                                <ArrowUpRight className="h-4 w-4" />
                                <span className="font-bold">Expense</span>
                            </button>

                            <button
                                type="button"
                                onClick={() => {
                                    setType("income")
                                    setCategory("")
                                }}
                                className={cn(
                                    "rounded-lg border-2 flex items-center justify-center gap-2 px-4 py-3",
                                    type === "income" && "border-accent"
                                )}
                            >
                                <ArrowDownLeft className="h-4 w-4" />
                                <span className="font-bold">Income</span>
                            </button>
                        </div>
                    </Field>

                    {/* AMOUNT */}
                    <Field className="max-w-sm">
                        <FieldLabel htmlFor="inline-start-input">Amount</FieldLabel>
                        <InputGroup>
                            <InputGroupInput id="inline-start-input" type="text" value={amount}
                                onChange={(e) => setAmount(formatCurrencyInput(e.target.value))}
                                required placeholder="0.00" />
                            <InputGroupAddon align="inline-start">
                                <DollarSign className="text-muted-foreground" />
                            </InputGroupAddon>
                        </InputGroup>
                    </Field>


                    {/* CATEGORY */}
                    <Field className="max-w-sm">
                        <FieldLabel htmlFor="inline-start-input">Category</FieldLabel>
                        <Select value={category} onValueChange={setCategory}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map((cat) => {
                                    const Icon = cat.icon
                                    return (
                                        <SelectItem key={cat.value} value={cat.value}>
                                            <div className="flex gap-2">
                                                <Icon className="h-4 w-4" />
                                                {cat.label}
                                            </div>
                                        </SelectItem>
                                    )
                                })}
                            </SelectContent>
                        </Select>
                    </Field>

                    {/* DATE */}
                    <Field className="max-w-sm">
                        <FieldLabel htmlFor="inline-start-input">Date</FieldLabel>
                        <Popover>
                            <PopoverTrigger render={
                                <Button variant="outline">
                                    <CalendarIcon className="mr-2 h-4 w-4" />
                                    {format(date, "PPP")}
                                </Button>
                            }>
                            </PopoverTrigger>
                            <PopoverContent>
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={(d) => d && setDate(d)}
                                />
                            </PopoverContent>
                        </Popover>
                    </Field>

                    {/* DESCRIPTION */}
                    <Field className="max-w-sm">
                        <FieldLabel htmlFor="inline-start-input">Notes</FieldLabel>
                        <Textarea
                            placeholder="Add note..."
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                        />
                    </Field>

                    {/* SUBMIT */}
                    <Button type="submit" className="w-full">
                        Add Transaction
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    )
}