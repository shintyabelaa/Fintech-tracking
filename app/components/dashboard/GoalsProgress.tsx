"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Plane, Car, Home, GraduationCap } from "lucide-react"
import { cn } from "@/lib/utils"

const goals = [
    {
        id: 1,
        name: "Vacation Fund",
        target: 5000,
        current: 3250,
        icon: Plane,
        color: "bg-chart-1",
    },
    {
        id: 2,
        name: "New Car",
        target: 25000,
        current: 8500,
        icon: Car,
        color: "bg-chart-2",
    },
    {
        id: 3,
        name: "Emergency Fund",
        target: 10000,
        current: 7800,
        icon: Home,
        color: "bg-chart-3",
    },
    {
        id: 4,
        name: "Education",
        target: 15000,
        current: 4200,
        icon: GraduationCap,
        color: "bg-chart-5",
    },
]

export function GoalsProgress() {
    return (
        <Card className="bg-card border-border">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Savings Goals</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-6">
                    {goals.map((goal) => {
                        const percentage = Math.round((goal.current / goal.target) * 100)
                        return (
                            <div key={goal.id} className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        <div
                                            className={cn(
                                                "flex h-8 w-8 items-center justify-center rounded-lg",
                                                goal.color,
                                                "bg-opacity-20"
                                            )}
                                        >
                                            <goal.icon className={cn("h-4 w-4", goal.color.replace("bg-", "text-"))} />
                                        </div>
                                        <span className="font-medium text-foreground">{goal.name}</span>
                                    </div>
                                    <span className="text-sm text-muted-foreground">{percentage}%</span>
                                </div>
                                <Progress
                                    value={percentage}
                                    className="h-2 bg-secondary"
                                />
                                <div className="flex justify-between text-sm">
                                    <span className="text-muted-foreground">
                                        ${goal.current.toLocaleString()}
                                    </span>
                                    <span className="text-muted-foreground">
                                        ${goal.target.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </CardContent>
        </Card>
    )
}
