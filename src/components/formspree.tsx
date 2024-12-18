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
        url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT_EMAIL,
        data: { email }
      })
      handleServerResponse(true, 'Thank you, your subscription has been submitted.')
    } catch (error) {
      handleServerResponse(false, 'An error occurred. Please try again.')
    }
  }

  return (
    <div className="w-full">
      
        <h2 className="text-2xl font-semibold tracking-tight text-white mb-4">Stay updated</h2>
      
      
        <form onSubmit={handleOnSubmit}  className="w-full max-w-[70%]">
          <div className="grid grid-cols-[3fr_1fr] gap-2">
          
            <Input
              id="email"
              type="email"
              name="email"
              onChange={handleOnChange}
              required
              value={email}
            className="flex-1 h-10 text-base bg-gray-900/50 border-gray-800 text-white placeholder-gray-400"
              placeholder="Enter your email"
            />
          
          <Button 
            type="submit" 
            disabled={status === 'submitting'}
          className="h-10 px-4 text-base font-medium bg-white text-black hover:bg-gray-200 transition-colors whitespace-nowrap"
          >
            {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
          </Button>
          </div>
        </form>
        {status === 'error' && <p className="mt-4 text-red-500 text-sm">{message}</p>}
        {status === 'submitted' && <p className="mt-4 text-green-500 text-sm">{message}</p>}
      
    </div>
  )
}
