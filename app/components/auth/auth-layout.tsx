'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-background via-background to-secondary flex flex-col">
            {/* Header with back button */}
            <div className="p-4 md:p-6">
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" />
                    Back to Home
                </Link>
            </div>

            {/* Main content */}
            <div className="flex-1 flex items-center justify-center px-4 py-8 md:py-0">
                <div className="w-full max-w-md">
                    {children}
                </div>
            </div>

            {/* Footer */}
            <div className="p-4 md:p-6 text-center text-xs text-muted-foreground border-t border-border">
                <p>© 2024 FinTrack. All rights reserved.</p>
            </div>
        </div>
    )
}