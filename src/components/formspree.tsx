'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleServerResponse = (ok: boolean, msg: string) => {
    setStatus(ok ? 'submitted' : 'error')
    setMessage(msg)
    if (ok) {
      setEmail('')
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
    setStatus('idle')
    setMessage('')
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await axios({
        method: 'POST',
        url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT,
        data: { email }
      })
      handleServerResponse(true, 'Thank you, your subscription has been submitted.')
    } catch (error) {
      handleServerResponse(false, 'An error occurred. Please try again.')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-gray-950 border-gray-800">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold tracking-tight text-white">Subscribe to Our Newsletter</CardTitle>
        <CardDescription className="text-gray-400">Stay updated with our latest insights and opportunities.</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleOnSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-300">Email</Label>
            <Input
              id="email"
              type="email"
              name="email"
              onChange={handleOnChange}
              required
              value={email}
              className="bg-gray-900 border-gray-700 text-white placeholder-gray-500"
              placeholder="Enter your email"
            />
          </div>
          <Button 
            type="submit" 
            disabled={status === 'submitting'}
            className="w-full bg-white text-black hover:bg-gray-200 transition-colors"
          >
            {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
          </Button>
        </form>
        {status === 'error' && <p className="mt-4 text-red-500 text-sm">{message}</p>}
        {status === 'submitted' && <p className="mt-4 text-green-500 text-sm">{message}</p>}
      </CardContent>
    </Card>
  )
}
