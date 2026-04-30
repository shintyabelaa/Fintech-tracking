import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { BadgeDollarSign, Dot } from "lucide-react";

export default function HeroSection() {
  return (
    <div className="flex flex-col min-h-screen px-32 py-32 gap-4 bg-linear-to-t from-[#c8f9fd] to-white p-8">
      <div className="p-3 w-fit text-sm bg-[#c8f9fd] text-[#4970cc] font-semibold flex gap-2 items-center rounded-full ">
        <BadgeDollarSign className="text-yellow-500" />
        Take Control of Your Money
      </div>
      <h1 className="text-7xl flex flex-col gap-2 font-bold">
        Track Every Dollar,
        <span className="text-[#4970cc]">Master Your Budget</span>
      </h1>
      <p className="text-lg max-w-2xl text-gray-600">
        Gain complete visibility into your income and expenses. Understand your
        spending habits, uncover savings opportunities, and achieve your
        financial goals with FinTrack.
      </p>

      <div className="flex items-center gap-2">
        <Button>
          Start Tracking Free <ArrowRight className="text-white" />
        </Button>
        <Button variant="outline">Watch Demo</Button>
      </div>

      <div className="flex gap-2 items-center">
        <div className="flex gap-1">
          <Dot className="text-yellow-700" />
          No Credit Card Required
        </div>
        <div className="flex gap-1">
          <Dot className="text-yellow-700" />
          Free Forever Plan
        </div>
        <div className="flex gap-1">
          <Dot className="text-yellow-700" />
          Takes 2 minutes to Set Up
        </div>
      </div>
    </div>
  );
}
