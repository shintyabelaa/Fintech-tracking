'use client'

import { useEffect, useState } from "react"
import { useAuth } from "@clerk/nextjs"
import {
    SidebarProvider,
} from "@/components/ui/sidebar"
import { DashboardSidebar } from "../components/dashboard/Sidebar";
import { DashboardHeader } from "../components/dashboard/Header";
import StatsCards from "../components/dashboard/StatsCards";
import { SpendingChart } from "../components/dashboard/SpendingChart";
import { CategoryChart } from "../components/dashboard/CategoryChart";
import { RecentTransactions } from "../components/dashboard/RecentTransactions";
import { GoalsProgress } from "../components/dashboard/GoalsProgress";
import { AccountsList } from "../components/dashboard/AccountsList";
import { AddTransactionForm } from "../components/dashboard/TransactionForm";

export default function DashboardPage() {
    const { getToken } = useAuth()
    const [data, setData] = useState(null)
    const [open, setOpen] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            const token = await getToken()
            console.log("TOKEN:", token)
            const res = await fetch(
                `${process.env.NEXT_PUBLIC_API_URL}/api/dashboard`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            )

            const json = await res.json()
            setData(json)
        }

        fetchData()
    }, [])

    return (
        <SidebarProvider>
            <DashboardSidebar />

            <div className="flex flex-1 flex-col overflow-hidden">
                <DashboardHeader onAddClick={() => setOpen(true)} />
                <AddTransactionForm open={open} setOpen={setOpen} />
                <main className="flex-1 overflow-y-auto p-6">
                    <div className="mx-auto max-w-7xl space-y-6">
                        {/* Stats Cards */}
                        <StatsCards />

                        {/* Charts Row */}
                        <div className="grid gap-6 lg:grid-cols-5">
                            <div className="lg:col-span-3">
                                <SpendingChart />
                            </div>
                            <div className="lg:col-span-2">
                                <CategoryChart />
                            </div>
                        </div>

                        {/* Bottom Row */}
                        <div className="grid gap-6 lg:grid-cols-3">
                            <div className="lg:col-span-2">
                                <RecentTransactions />
                            </div>
                            <div className="space-y-6">
                                <GoalsProgress />
                                <AccountsList />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </SidebarProvider>

    )
}