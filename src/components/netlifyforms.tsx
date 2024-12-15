'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

const NetlifyForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          email,
          message
        }).toString()
      })

      if (response.ok) {
        setSubmitMessage('Thank you! Your message has been submitted.')
        setEmail('')
        setMessage('')
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error!', error)
      setSubmitMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
        <CardDescription>Send us a message and we'll get back to you soon.</CardDescription>
      </CardHeader>
      <CardContent>
        <form 
          name="contact" 
          method="POST" 
          data-netlify="true"
          onSubmit={handleSubmit} 
          className="space-y-4"
        >
          <input type="hidden" name="form-name" value="contact" />
          <div className="space-y-2">
            <Input
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white"
            />
          </div>
          <div className="space-y-2">
            <Textarea
              name="message"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              className="bg-gray-800 border-gray-700 text-white"
              rows={5}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gray-900 text-white hover:bg-gray-700"
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </form>
      </CardContent>
      <CardFooter>
        {submitMessage && (
          <p className={`text-sm ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
            {submitMessage}
          </p>
        )}
      </CardFooter>
    </Card>
  )
}

export default NetlifyForm

