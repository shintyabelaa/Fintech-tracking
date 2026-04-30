"use client"

import { cn } from "@/lib/utils"
import {
    LayoutDashboard,
    Wallet,
    ArrowUpDown,
    PieChart,
    Target,
    CreditCard,
    Settings,
    HelpCircle,
    Search,
    ChevronLeft,
    ChevronRight,
} from "lucide-react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"

const navigation = [
    { name: "Overview", icon: LayoutDashboard, href: "#", current: true },
    { name: "Accounts", icon: Wallet, href: "#", current: false },
    { name: "Transactions", icon: ArrowUpDown, href: "#", current: false },
    { name: "Analytics", icon: PieChart, href: "#", current: false },
    { name: "Goals", icon: Target, href: "#", current: false },
    { name: "Cards", icon: CreditCard, href: "#", current: false },
]

const secondaryNavigation = [
    { name: "Settings", icon: Settings, href: "#" },
    { name: "Help", icon: HelpCircle, href: "#" },
]

export function DashboardSidebar() {
    const [collapsed, setCollapsed] = useState(false)

    return (
        <aside
            className={cn(
                "flex flex-col border-r border-border bg-sidebar transition-all duration-300",
                collapsed ? "w-16" : "w-64"
            )}
        >
            {/* Logo */}
            <div className="flex h-16 items-center justify-between border-b border-border px-4">
                {!collapsed && (
                    <div className="flex items-center gap-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                            <span className="text-lg bg-[#4970cc] p-2 text-white rounded font-bold">
                                FN
                            </span>
                        </div>
                        <span className="text-lg font-semibold text-[#4970cc]">FinTrack</span>
                    </div>
                )}
                {collapsed && (
                    <div className="mx-auto flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                        <span className="text-sm font-bold text-primary-foreground">F</span>
                    </div>
                )}
            </div>

            {/* Search */}
            {!collapsed && (
                <div className="p-4">
                    <Field orientation="horizontal">
                        <Input type="search" placeholder="Search..." />
                        <Button>Search</Button>
                    </Field>
                </div>
            )}

            {/* Navigation */}
            <nav className="flex-1 space-y-1 px-2 py-4">
                {navigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                            item.current
                                ? "bg-sidebar-accent text-primary"
                                : "text-muted-foreground hover:bg-sidebar-accent hover:text-foreground",
                            collapsed && "justify-center"
                        )}
                    >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {!collapsed && <span>{item.name}</span>}
                    </a>
                ))}
            </nav>

            {/* Secondary Navigation */}
            <div className="border-t border-border px-2 py-4">
                {secondaryNavigation.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className={cn(
                            "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground",
                            collapsed && "justify-center"
                        )}
                    >
                        <item.icon className="h-5 w-5 shrink-0" />
                        {!collapsed && <span>{item.name}</span>}
                    </a>
                ))}
            </div>

            {/* Collapse Toggle */}
            <button
                onClick={() => setCollapsed(!collapsed)}
                className="flex h-12 items-center justify-center border-t border-border text-muted-foreground transition-colors hover:bg-sidebar-accent hover:text-foreground"
            >
                {collapsed ? (
                    <ChevronRight className="h-5 w-5" />
                ) : (
                    <ChevronLeft className="h-5 w-5" />
                )}
            </button>
        </aside>
    )
}
