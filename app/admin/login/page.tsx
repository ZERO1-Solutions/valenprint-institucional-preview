'use client'

import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function LoginPage() {
  const router = useRouter()

  useEffect(() => {
    // Since it's a preview, redirect directly to admin
    router.push('/admin')
  }, [router])

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-pink-50">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6">
          Valen<span className="text-pink">Print</span> - Admin
        </h1>
        <p className="text-gray-600 mb-4">Redirecionando para o painel...</p>
      </div>
    </div>
  )
}
