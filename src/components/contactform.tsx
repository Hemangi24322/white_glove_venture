
'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const ContactForm: React.FC = () => {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')

  
  
    
  
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIsSubmitting(true)
      
      const scriptURL = 'https://script.google.com/macros/s/AKfycbxP5zEIHDTYtRLIdLS8he6A6_shwc8LtoyUQ2Ca5OE/dev'
      
        try {
          const formData = new FormData()
          formData.append('Email', email)
          formData.append('Message', message)
      
          console.log('Submitting form data:', Object.fromEntries(formData))
      
          const response = await fetch(scriptURL, { 
            method: 'POST', 
            body: formData,
            mode: 'no-cors' 
          })
          
          console.log('Response:', response)
      
          if (response.type === 'opaque') { 
            setSubmitMessage('Thank you! Form is submitted')
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
      
      
  

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  }

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value)
  }

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-gray-900 rounded-lg shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <h4 className="text-2xl font-bold text-white mb-4">Contact Us</h4>
        <Input
          type="email"
          name="your-email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
          className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
        />
        <Textarea
          name="message"
          rows={7}
          placeholder="Your Message"
          value={message}
          onChange={handleMessageChange}
          required
          className="w-full p-2 bg-gray-800 text-white border border-gray-700 rounded"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="w-full max-w-[200px] bg-orange-600 hover:bg-gray-800 text-white py-2 px-4 rounded transition-colors"
        >
          {isSubmitting ? 'Submitting...' : 'Submit'}
        </Button>
        {submitMessage && (
          <p className={`text-sm ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
            {submitMessage}
          </p>
        )}
      </form>
    </div>
  )
}

export default ContactForm

