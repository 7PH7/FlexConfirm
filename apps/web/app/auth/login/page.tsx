"use client"

import { useState } from "react"
import { supabase } from "@/lib/supabase"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: { emailRedirectTo: window.location.origin }
    })
    if (error) setError(error.message)
    else setSent(true)
  }

  return (
    <div className="max-w-sm mx-auto mt-32 text-center">
      <h1 className="text-2xl font-bold mb-4">Entrar</h1>
      {sent ? (
        <p>Enviamos um link para <b>{email}</b>.</p>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="seu@email.com"
            className="border px-3 py-2 w-full rounded"
            required
          />
          <button className="w-full bg-blue-600 text-white rounded py-2">
            Receber link
          </button>
          {error && <p className="text-red-500 text-sm">{error}</p>}
        </form>
      )}
    </div>
  )
}
