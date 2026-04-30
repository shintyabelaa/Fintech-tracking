"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts"

const data = [
    { name: "Housing", value: 1200, color: "oklch(0.72 0.19 145)" },
    { name: "Food", value: 650, color: "oklch(0.65 0.18 250)" },
    { name: "Transport", value: 480, color: "oklch(0.75 0.15 80)" },
    { name: "Shopping", value: 520, color: "oklch(0.65 0.2 25)" },
    { name: "Entertainment", value: 350, color: "oklch(0.7 0.15 300)" },
    { name: "Other", value: 647, color: "oklch(0.5 0 0)" },
]

export function CategoryChart() {
    const total = data.reduce((sum, item) => sum + item.value, 0)

    return (
        <Card className="bg-card border-border">
            <CardHeader className="pb-2">
                <CardTitle className="text-lg font-medium">Spending by Category</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-8">
                    <div className="relative h-[200px] w-[200px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={data}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={4}
                                    dataKey="value"
                                    strokeWidth={0}
                                >
                                    {data.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: "oklch(0.16 0.01 260)",
                                        border: "1px solid oklch(0.28 0.01 260)",
                                        borderRadius: "8px",
                                        color: "oklch(0.98 0 0)",
                                    }}
                                    formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                        <div className="absolute inset-0 flex flex-col items-center justify-center">
                            <span className="text-2xl font-semibold text-foreground">${total.toLocaleString()}</span>
                            <span className="text-xs text-muted-foreground">Total Spent</span>
                        </div>
                    </div>
                    <div className="flex-1 space-y-3">
                        {data.map((item) => (
                            <div key={item.name} className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <div
                                        className="h-3 w-3 rounded-full"
                                        style={{ backgroundColor: item.color }}
                                    />
                                    <span className="text-sm text-muted-foreground">{item.name}</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm font-medium text-foreground">
                                        ${item.value.toLocaleString()}
                                    </span>
                                    <span className="text-xs text-muted-foreground">
                                        {((item.value / total) * 100).toFixed(0)}%
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
