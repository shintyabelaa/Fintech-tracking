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
    <div className="flex justify-between gap-2">
      <Card size="sm" className="w-full rounded-md max-w-sm">
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
      <Card size="sm" className="w-full rounded-md max-w-sm">
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
      <Card size="sm" className="w-full rounded-md max-w-sm">
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
      </Card>
    </div>
  );
}
