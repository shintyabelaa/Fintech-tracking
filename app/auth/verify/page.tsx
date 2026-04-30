'use client'

import { useEffect, useState } from "react"
import { useSignIn, useClerk } from "@clerk/nextjs"
import { useRouter } from "next/navigation"

export default function VerifyPage() {
  const [code, setCode] = useState("")
  const [error, setError] = useState("")
  const { signIn } = useSignIn()
  const { setActive } = useClerk()
  const router = useRouter()

  useEffect(() => {
    const sendCode = async () => {
      if (!signIn) return

      try {
        await signIn.prepareSecondFactor({
          strategy: "email_code",
        })

        console.log("OTP sent")
      } catch (err) {
        console.log(err)
      }
    }

    sendCode()
  }, [signIn])

  const handleVerify = async () => {
    if (!signIn) return

    try {
      const result = await signIn.attemptSecondFactor({
        strategy: "email_code",
        code,
      })

      if (result.status === "complete") {
        await setActive({
          session: result.createdSessionId,
        })

        router.push("/dashboard")
      }
    } catch (err: any) {
      setError(
        err?.errors?.[0]?.message || "Verification failed"
      )
    }
  }

  return (
    <div>
      <input
        value={code}
        onChange={(e) => setCode(e.target.value)}
        placeholder="Enter OTP"
      />

      <button onClick={handleVerify}>
        Verify
      </button>

      {error && <p>{error}</p>}
    </div>
  )
}