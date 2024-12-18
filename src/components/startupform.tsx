'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function StartupForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    'startup-name': '',
    'funding-stage': '',
    'market-focus': '',
    'email': '',
    'startup-message': ''
  })

  const handleServerResponse = (ok: boolean, msg: string) => {
    setStatus(ok ? 'submitted' : 'error')
    setMessage(msg)
    if (ok) {
      setFormData({
        'startup-name': '',
        'funding-stage': '',
        'market-focus': '',
        'email': '',
        'startup-message': ''
      })
    }
  }

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setStatus('idle')
    setMessage('')
  }

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, 'funding-stage': value }))
    setStatus('idle')
    setMessage('')
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await axios({
        method: 'POST',
        url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT_STARTUPFORM,
        data: formData
      })
      handleServerResponse(true, 'Thank you, your application has been submitted.')
    } catch (error) {
      handleServerResponse(false, 'An error occurred. Please try again.')
    }
  }

  return( <Card>
    <CardHeader>
      <CardTitle>Startup Application</CardTitle>
      <CardDescription>
        Tell us about your startup and how we can help.
      </CardDescription>
    </CardHeader>
    <CardContent>


      <form  onSubmit={handleOnSubmit} className="space-y-4" name="startup-form" >
      
      <input type="hidden" name="form-name" value="startup-form" />
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="startup-name">Startup Name</Label>
            <Input
              id="startup-name"
               name="startup-name"
               value={formData['startup-name']}
                onChange={handleOnChange}
              placeholder="Enter your startup name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="funding-stage">
              Current Funding Stage
            </Label>
            <Select name="funding-stage" onValueChange={handleSelectChange} value={formData['funding-stage']}>
              <SelectTrigger id="funding-stage">
                <SelectValue placeholder="Select stage" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pre-seed">Pre-seed</SelectItem>
                <SelectItem value="seed">Seed</SelectItem>
                <SelectItem value="series-a">Series A</SelectItem>
                <SelectItem value="series-b">Series B+</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="market-focus">Market Focus</Label>
          <Input
            id="market-focus"
             name="market-focus"
             value={formData['market-focus']}
             onChange={handleOnChange}
            placeholder="E.g., FinTech, HealthTech, AI"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Company Website</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData['email']}
            onChange={handleOnChange}
            placeholder="www.yourcompanyname.com"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="startup-message">
            Project's current stage
          </Label>
          <Textarea
            id="startup-message"
             name="startup-message"
             value={formData['startup-message']}
             onChange={handleOnChange}
            placeholder="Tell us about your project&apos current stage"
          />
        </div>
        <Button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
      </form>
      {status === 'error' && <p className="mt-4 text-red-500 text-sm">{message}</p>}
        {status === 'submitted' && <p className="mt-4 text-green-500 text-sm">{message}</p>}


    </CardContent>
  </Card>)
}