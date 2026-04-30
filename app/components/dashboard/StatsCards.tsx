import { ArrowDownLeft, ArrowUpRight, PiggyBank, TrendingDown, TrendingUp, WalletIcon } from "lucide-react"
import { CardSection } from "../CardSection"

const testimonial = [
    {
        icon: WalletIcon,
        title: "Rp5.000.000",
        name: "Total Balance",
        position: "Across all accounts",
        rightIcon: TrendingUp,
        value: "+12%",
    },
    {
        icon: ArrowUpRight,
        title: "Rp5.000.000",
        name: "Monthly Income",
        position: "This month",
        rightIcon: TrendingDown,
        value: "-5%",

    },
    {
        icon: ArrowDownLeft,
        title: "Rp5.000.000",
        name: "Monthly Expenses",
        position: "This month",
        rightIcon: TrendingUp,
        value: "+12%",
    },
    {
        icon: PiggyBank,
        title: "Rp5.000.000",
        name: "Savings Goal",
        position: "Of $20,000 target",
        value: "68%",
    },
]

export default function StatsCards() {
    return (
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 w-full gap-8">
            {testimonial.map((testi, index) => (
                <CardSection key={index} {...testi} />
            ))}
        </div>
    )
}