import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BadgeDollarSign, Dot } from "lucide-react";
import { CardSection } from "./CardSection";

export default function FeatureSection() {
  return (
    <div className="flex flex-col items-center gap-4">
      <h1 className="text-5xl flex flex-col gap-2 font-bold">
        Powerfull Features for Smart Savers
      </h1>
      <p className="text-lg max-w-2xl text-center text-gray-600">
        Everything you need to take control of your finances and build better
        money habits. Track your income and expenses, set budgets, and achieve
        your financial goals with ease.
      </p>

      <div className="flex items-center w-full gap-2">
        <CardSection />
      </div>
    </div>
  );
}
