import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";


type PricingCardProps = {
    title: string
    description: string
    price: number | string
    features: string[]
    buttonText: string
    highlighted?: boolean
    badge?: string
}


const plans = [
    {
        title: "Basic",
        description: "Perfect for getting started",
        price: "Free",
        buttonText: "Get Started",
        highlighted: false,
        features: [
            "Everything in Starter",
            "Custom categories",
            "Advanced analytics",
            "Unlimited data history",
            "Budget alerts",
        ],
    },
    {
        title: "Pro",
        description: "For serious savers",
        price: 9.99,
        buttonText: "Start Free Trial",
        highlighted: true,
        badge: "Most Popular",
        features: [
            "Everything in Starter",
            "Custom categories",
            "Advanced analytics",
            "Unlimited data history",
            "Budget alerts",
            "Spending insights",
            "CSV export",
            "Priority support",
        ],
    },
    {
        title: "Business",
        description: "For businesses & professionals",
        price: 24.99,
        buttonText: "Contact Sales",
        features: [
            "Everything in Pro",
            "Team collaboration",
            "Multiple accounts",
            "API access",
            "Custom reports",
        ],
    },
]

export function PricingCard({
    title,
    description,
    price,
    features,
    buttonText,
    highlighted = false,
    badge,
}: PricingCardProps) {
    return (
        <Card
            className={`relative w-full rounded-xl p-6 transition-all duration-300
                ${highlighted ? "border border-[#4970cc] shadow-lg scale-105" : ""}
            `}
        >
            {badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4970cc] text-white text-sm px-3 py-1 rounded-full">
                    {badge}
                </div>
            )}

            <CardHeader className="space-y-2">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="text-muted-foreground">{description}</p>

                <div className="flex items-end gap-2 mt-4">
                    <span className="text-5xl font-bold">
                        {price === "Free" ? "Free" : `$${price}`}
                    </span>

                    {price !== "Free" && (
                        <span className="text-muted-foreground">/month</span>
                    )}
                </div>
            </CardHeader>

            <CardContent className="mt-6">
                <Button className="w-full mb-6" variant={highlighted ? "default" : "outline"}>
                    {buttonText}
                </Button>

                <ul className="space-y-3">
                    {features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm">
                            <Check className="w-4 h-4 text-yellow-500" />
                            {feature}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}

export function PricingSection() {
    return (
        <div id="pricing" className="px-32 py-16 w-full flex flex-col items-center gap-4">
            <h1 className="text-5xl flex flex-col gap-2 font-bold">
                Simple, Transparent Pricing
            </h1>
            <p className="text-lg max-w-2xl text-center text-gray-600">
                Choose the perfect plan for your needs. No hidden fees, cancel anytime.
            </p>
            <div className="grid w-full grid-cols-1 md:grid-cols-3 mt-12 gap-8">
                {plans.map((plan, index) => (
                    <PricingCard key={index} {...plan} />
                ))}
            </div>
            <p className="mt-8">All plans include a 14-day free trial. No credit card required.</p>
            <Button variant="link" className="text-[#4970cc]">Compared detailed features <ArrowRight /></Button>
        </div>
    )
}