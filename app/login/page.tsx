import { AuthLayout } from '../components/auth/auth-layout'
import { LoginForm } from '../components/auth/login-form'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Sign In - FinTrack',
    description: 'Sign in to your FinTrack account',
}

export default function LoginPage() {
    return (
        <AuthLayout>
            <LoginForm />
        </AuthLayout>
    )
}