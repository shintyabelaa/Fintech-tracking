import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BadgeDollarSign, Dot } from "lucide-react";
import { CardSection } from "./CardSection";
import { TrendingUp, PieChart, BarChart3, Zap } from 'lucide-react';

const features = [
  {
    icon: TrendingUp,
    title: 'Smart Tracking',
    description: 'Automatically categorize and track all your income and expenses in one place.',
  },
  {
    icon: PieChart,
    title: 'Visual Insights',
    description: 'See spending breakdowns with interactive charts and understand where your money goes.',
  },
  {
    icon: BarChart3,
    title: 'Budget Management',
    description: 'Set budgets by category and get alerts when you&apos;re approaching your limits.',
  },
  {
    icon: Zap,
    title: 'Instant Reporting',
    description: 'Generate detailed reports to identify trends and opportunities to save more.',
  },
]

export default function FeatureSection() {
  return (
    <div id="features" className="flex flex-col items-center px-32 py-16 gap-4">
      <h1 className="text-5xl flex flex-col gap-2 font-bold">
        Powerfull Features for Smart Savers
      </h1>
      <p className="text-lg max-w-2xl text-center text-gray-600">
        Everything you need to take control of your finances and build better
        money habits. Track your income and expenses, set budgets, and achieve
        your financial goals with ease.
      </p>

      <div className="grid grid-cols-2 w-full gap-8">
        {features.map((feature, index) => (
          <CardSection key={index} {...feature} />
        ))}
      </div>
    </div>
  );
}
