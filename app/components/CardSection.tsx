import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ChartNoAxesColumn } from "lucide-react";

export function CardSection() {
  return (
    <div className="grid grid-cols-2 w-full gap-6">
      {/* <Card size="sm" className="w-full rounded-md">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              Total Income{" "}
              <ChartNoAxesColumn className="h-8 rounded-md bg-[#3b82f6]/20 text-[#3b82f6] p-2 w-8" />
            </div>
          </CardTitle>
          <CardDescription className="text-2xl font-bold">
            Rp5.000.000
          </CardDescription>
        </CardHeader>
        <CardFooter>+12.5% from last month</CardFooter>
      </Card>
      <Card size="sm" className="w-full rounded-md">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              Total Expenses{" "}
              <ChartNoAxesColumn className="h-8 rounded-md bg-[#3b82f6]/20 text-[#3b82f6] p-2 w-8" />
            </div>
          </CardTitle>
          <CardDescription className="text-2xl font-bold">
            Rp5.000.000
          </CardDescription>
        </CardHeader>
        <CardFooter>+12.5% from last month</CardFooter>
      </Card>
      <Card size="sm" className="w-full rounded-md">
        <CardHeader>
          <CardTitle>
            <div className="flex items-center justify-between">
              Net Balances{" "}
              <ChartNoAxesColumn className="h-8 rounded-md bg-[#3b82f6]/20 text-[#3b82f6] p-2 w-8" />
            </div>
          </CardTitle>
          <CardDescription className="text-2xl text-[#3b82f6] font-bold">
            Rp5.000.000
          </CardDescription>
        </CardHeader>
        <CardFooter>+12.5% from last month</CardFooter>
      </Card> */}
      <Card size="sm" className="w-full rounded-md">
        <CardHeader>
          <ChartNoAxesColumn className="h-8 rounded-md bg-[#3b82f6]/20 text-[#3b82f6] p-2 w-8" />
          <CardTitle>
            <div className="flex items-center justify-between">
              Smart Tracking
            </div>
          </CardTitle>
          <CardDescription className="">
            Automatically categories and tracks all your income and expenses in
            one place, giving you a clear picture of your financial health.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card size="sm" className="w-full rounded-md">
        <CardHeader>
          <ChartNoAxesColumn className="h-8 rounded-md bg-[#3b82f6]/20 text-[#3b82f6] p-2 w-8" />
          <CardTitle>
            <div className="flex items-center justify-between">
              Smart Tracking
            </div>
          </CardTitle>
          <CardDescription className="">
            Automatically categories and tracks all your income and expenses in
            one place, giving you a clear picture of your financial health.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card size="sm" className="w-full rounded-md">
        <CardHeader>
          <ChartNoAxesColumn className="h-8 rounded-md bg-[#3b82f6]/20 text-[#3b82f6] p-2 w-8" />
          <CardTitle>
            <div className="flex items-center justify-between">
              Smart Tracking
            </div>
          </CardTitle>
          <CardDescription className="">
            Automatically categories and tracks all your income and expenses in
            one place, giving you a clear picture of your financial health.
          </CardDescription>
        </CardHeader>
      </Card>
      <Card size="sm" className="w-full rounded-md">
        <CardHeader>
          <ChartNoAxesColumn className="h-8 rounded-md bg-[#3b82f6]/20 text-[#3b82f6] p-2 w-8" />
          <CardTitle>
            <div className="flex items-center justify-between">
              Smart Tracking
            </div>
          </CardTitle>
          <CardDescription className="">
            Automatically categories and tracks all your income and expenses in
            one place, giving you a clear picture of your financial health.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
