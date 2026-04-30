"use client"

import { Bell, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function DashboardHeader({ onAddClick }: { onAddClick: () => void }) {
    return (
        <header className="flex h-16 items-center justify-between border-b border-border bg-card px-6">
            <div>
                <h1 className="text-xl font-semibold text-foreground">Dashboard</h1>
                <p className="text-sm text-muted-foreground">
                    Welcome back, Alex
                </p>
            </div>

            <div className="flex items-center gap-4">
                <Button size="sm" className="gap-2" onClick={onAddClick}>
                    <Plus className="h-4 w-4" />
                    Add Transaction
                </Button>

                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <Button variant="ghost" size="icon" className="relative">
                                <Bell className="h-5 w-5" />
                                <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-primary" />
                            </Button>
                        }
                    />
                    <DropdownMenuContent align="end" className="w-80">
                        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                            <span className="font-medium">Budget Alert</span>
                            <span className="text-sm text-muted-foreground">
                                {"You've reached 80% of your food budget"}
                            </span>
                        </DropdownMenuItem>
                        <DropdownMenuItem className="flex flex-col items-start gap-1 py-3">
                            <span className="font-medium">Payment Received</span>
                            <span className="text-sm text-muted-foreground">
                                $2,500 salary deposit confirmed
                            </span>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>

                <DropdownMenu>
                    <DropdownMenuTrigger
                        render={
                            <Button
                                variant="ghost"
                                className="relative h-9 w-9 rounded-full"
                            >
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src="/placeholder-avatar.jpg" alt="Alex" />
                                    <AvatarFallback>A</AvatarFallback>
                                </Avatar>
                            </Button>
                        }
                    />
                    <DropdownMenuContent align="end">
                        <DropdownMenuLabel>My Account</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Profile</DropdownMenuItem>
                        <DropdownMenuItem>Settings</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem>Log out</DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </header>
    )
}
