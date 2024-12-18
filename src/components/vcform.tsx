'use client'

import React, { useState } from 'react'
import axios from 'axios'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function VCForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [formData, setFormData] = useState({
    'vc-name': '',
    'investment-stage': '',
    'sector-focus': '',
    'deal-size': '',
    'vc-message': ''
  })

  const handleServerResponse = (ok: boolean, msg: string) => {
    setStatus(ok ? 'submitted' : 'error')
    setMessage(msg)
    if (ok) {
      setFormData({
        'vc-name': '',
        'investment-stage': '',
        'sector-focus': '',
        'deal-size': '',
        'vc-message': ''
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
    setFormData(prev => ({ ...prev, 'investment-stage': value }))
    setStatus('idle')
    setMessage('')
  }

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const response = await axios({
        method: 'POST',
        url: process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT_VCFORM,
        data: formData
      })
      handleServerResponse(true, 'Thank you, your inquiry has been submitted.')
    } catch (error) {
      handleServerResponse(false, 'An error occurred. Please try again.')
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>VC Inquiry</CardTitle>
        <CardDescription>
          Tell us about your VC firm and investment interests.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleOnSubmit} className="space-y-4" name="vc-form">
          <input type="hidden" name="form-name" value="vc-form" />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="vc-name">VC Firm Name</Label>
              <Input
                id="vc-name"
                name="vc-name"
                value={formData['vc-name']}
                onChange={handleOnChange}
                placeholder="Enter your VC firm name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="investment-stage">
                Investment Stage Focus
              </Label>
              <Select name="investment-stage" onValueChange={handleSelectChange} value={formData['investment-stage']}>
                <SelectTrigger id="investment-stage">
                  <SelectValue placeholder="Select stage" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="seed">Seed</SelectItem>
                  <SelectItem value="early">Early Stage</SelectItem>
                  <SelectItem value="growth">Growth Stage</SelectItem>
                  <SelectItem value="late">Late Stage</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="sector-focus">Sector Focus</Label>
            <Input
              id="sector-focus"
              name="sector-focus"
              value={formData['sector-focus']}
              onChange={handleOnChange}
              placeholder="E.g., Enterprise SaaS, Consumer Tech"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="deal-size">Typical Deal Size</Label>
            <Input
              id="deal-size"
              name="deal-size"
              value={formData['deal-size']}
              onChange={handleOnChange}
              placeholder="E.g., $500K - $2M"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="vc-message">Additional Information</Label>
            <Textarea
              id="vc-message"
              name="vc-message"
              value={formData['vc-message']}
              onChange={handleOnChange}
              placeholder="Tell us more about your investment thesis or any specific requests"
            />
          </div>
          <Button type="submit" disabled={status === 'submitting'}>
            {status === 'submitting' ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
        </form>
        {status === 'error' && <p className="mt-4 text-red-500 text-sm">{message}</p>}
        {status === 'submitted' && <p className="mt-4 text-green-500 text-sm">{message}</p>}
      </CardContent>
    </Card>
  )
}

