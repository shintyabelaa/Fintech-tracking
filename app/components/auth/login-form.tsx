'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

import { Mail, Lock, AlertCircle, Loader } from 'lucide-react'
import { useSignIn, useClerk, useUser } from "@clerk/nextjs"

export function LoginForm() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()
    const { signIn } = useSignIn()
    const { setActive } = useClerk()
    const { isSignedIn } = useUser()

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setError('')
        setIsLoading(true)

        if (!signIn) {
            setError("Auth not ready")
            return
        }

        if (isSignedIn) {
            router.push("/dashboard")
            return
        }

        try {
            if (!email || !password) {
                setError('Please fill in all fields')
                return
            }

            const result = await signIn.create({
                identifier: email,
                password,
            })

            console.log("signIn object:", signIn)
            console.log("status:", signIn.status)


            if (result.status === "complete") {
                await setActive({
                    session: result.createdSessionId,
                })

                router.push("/dashboard")
                return
            }
            // if (signIn.status === "needs_second_factor") {
            //     router.push("/auth/verify")
            //     return
            // }

            setError(`Unhandled status: ${signIn.status}`)
        } catch (err: any) {
            console.log(err)

            setError(
                err?.errors?.[0]?.longMessage ||
                err?.errors?.[0]?.message ||
                "Login failed"
            )
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="w-full max-w-md">
            <div className="space-y-6">
                {/* Header */}
                <div className="space-y-2 text-center">
                    <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
                    <p className="text-muted-foreground">Sign in to your FinTrack account</p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Error Message */}
                    {error && (
                        <div className="flex items-center gap-3 p-3 bg-destructive/10 border border-destructive/30 rounded-lg">
                            <AlertCircle className="w-5 h-5 text-destructive flex-shrink-0" />
                            <p className="text-sm text-destructive">{error}</p>
                        </div>
                    )}

                    {/* Email Field */}
                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-foreground">
                            Email Address
                        </label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                id="email"
                                type="email"
                                placeholder="you@example.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="pl-10"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label htmlFor="password" className="block text-sm font-medium text-foreground">
                                Password
                            </label>
                            <Link
                                href="/auth/forgot-password"
                                className="text-sm text-primary hover:underline"
                            >
                                Forgot password?
                            </Link>
                        </div>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="pl-10"
                                disabled={isLoading}
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <Button
                        type="submit"
                        className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold h-10"
                        disabled={isLoading}
                    >
                        {isLoading ? (
                            <>
                                <Loader className="w-4 h-4 mr-2 animate-spin" />
                                Signing in...
                            </>
                        ) : (
                            'Sign In'
                        )}
                    </Button>
                </form>

                {/* Divider */}
                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-border"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="px-2 bg-card text-muted-foreground">Don&apos;t have an account?</span>
                    </div>
                </div>

                {/* Sign Up Link */}
                <Link href="/auth/signup">
                    <Button
                        type="button"
                        variant="outline"
                        className="w-full border-border hover:bg-secondary"
                    >
                        Create Account
                    </Button>
                </Link>

                {/* Demo Credentials */}
                <div className="p-3 bg-secondary rounded-lg mt-4 border border-border">
                    <p className="text-xs font-semibold text-foreground mb-2">Demo Credentials:</p>
                    <p className="text-xs text-muted-foreground">Email: shintyab607@gmail.com</p>
                    <p className="text-xs text-muted-foreground">Password: demo200820</p>
                </div>
            </div>
        </div>
    )
}