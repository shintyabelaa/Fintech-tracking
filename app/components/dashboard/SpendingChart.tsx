import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts"

const data = [
    { month: "Jan", income: 6500, expenses: 4200 },
    { month: "Feb", income: 7200, expenses: 3800 },
    { month: "Mar", income: 6800, expenses: 4500 },
    { month: "Apr", income: 7500, expenses: 4100 },
    { month: "May", income: 8000, expenses: 3900 },
    { month: "Jun", income: 7800, expenses: 4300 },
    { month: "Jul", income: 8250, expenses: 3847 },
]

export function SpendingChart() {
    return (
        <Card className="bg-card border-border">
            <CardHeader className="pb-2">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg font-medium">Income vs Expenses</CardTitle>
                    <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-chart-1" />
                            <span className="text-muted-foreground">Income</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="h-3 w-3 rounded-full bg-chart-2" />
                            <span className="text-muted-foreground">Expenses</span>
                        </div>
                    </div>
                </div>
            </CardHeader>
            <CardContent className="pt-4">
                <div className="h-75">
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="incomeGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="oklch(0.72 0.19 145)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="oklch(0.72 0.19 145)" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="expenseGradient" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="oklch(0.65 0.18 250)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.28 0.01 260)" vertical={false} />
                            <XAxis
                                dataKey="month"
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }}
                            />
                            <YAxis
                                axisLine={false}
                                tickLine={false}
                                tick={{ fill: "oklch(0.65 0 0)", fontSize: 12 }}
                                tickFormatter={(value) => `$${value / 1000}k`}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "oklch(0.16 0.01 260)",
                                    border: "1px solid oklch(0.28 0.01 260)",
                                    borderRadius: "8px",
                                    color: "oklch(0.98 0 0)",
                                }}
                                formatter={(value: number) => [`$${value.toLocaleString()}`, ""]}
                            />
                            <Area
                                type="monotone"
                                dataKey="income"
                                stroke="oklch(0.72 0.19 145)"
                                strokeWidth={2}
                                fill="url(#incomeGradient)"
                                name="Income"
                            />
                            <Area
                                type="monotone"
                                dataKey="expenses"
                                stroke="oklch(0.65 0.18 250)"
                                strokeWidth={2}
                                fill="url(#expenseGradient)"
                                name="Expenses"
                            />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    )
}