// 'use client'

// import React, { useState } from 'react'
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

// const NetlifyForm: React.FC = () => {
//   const [email, setEmail] = useState('')
//   const [message, setMessage] = useState('')
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const [submitMessage, setSubmitMessage] = useState('')

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       const response = await fetch('/', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
//         body: new URLSearchParams({
//           'form-name': 'contact',
//           email,
//           message
//         }).toString()
//       })

//       if (response.ok) {
//         setSubmitMessage('Thank you! Your message has been submitted.')
//         setEmail('')
//         setMessage('')
//       } else {
//         throw new Error('Form submission failed')
//       }
//     } catch (error) {
//       console.error('Error!', error)
//       setSubmitMessage('An error occurred. Please try again.')
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <Card className="w-full max-w-md mx-auto">
//       <CardHeader>
//         <CardTitle>Contact Us</CardTitle>
//         <CardDescription>Send us a message and we'll get back to you soon.</CardDescription>
//       </CardHeader>
//       <CardContent>
//         <form 
//           name="contact" 
//           method="POST" 
//           data-netlify="true"
//           onSubmit={handleSubmit} 
//           className="space-y-4"
//         >
//           <input type="hidden" name="form-name" value="contact" />
//           <div className="space-y-2">
//             <Input
//               type="email"
//               name="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="bg-gray-800 border-gray-700 text-white"
//             />
//           </div>
//           <div className="space-y-2">
//             <Textarea
//               name="message"
//               placeholder="Your Message"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//               required
//               className="bg-gray-800 border-gray-700 text-white"
//               rows={5}
//             />
//           </div>
//           <Button
//             type="submit"
//             disabled={isSubmitting}
//             className="w-full bg-gray-900 text-white hover:bg-gray-700"
//           >
//             {isSubmitting ? 'Submitting...' : 'Submit'}
//           </Button>
//         </form>
//       </CardContent>
//       <CardFooter>
//         {submitMessage && (
//           <p className={`text-sm ${submitMessage.includes('error') ? 'text-red-500' : 'text-green-500'}`}>
//             {submitMessage}
//           </p>
//         )}
//       </CardFooter>
//     </Card>
//   )
// }

// export default NetlifyForm

import React, { useState } from "react";

const NetlifyForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setFormStatus('Submitting...');

    // Send the form data to the serverless function
    try {
      const response = await fetch('/api/contact-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setFormStatus('Form submitted successfully!');
        setFormData({ name: '', email: '', message: '' }); // Reset form
      } else {
        setFormStatus(`Error: ${result.error}`);
      }
    } catch (error) {
      setFormStatus('Error submitting form.');
    }
  };

  return (
    <form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      style={{
        maxWidth: "500px",
        margin: "0 auto",
        padding: "30px",
        backgroundColor: "#f5f5f5",
        borderRadius: "8px",
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
      }}
    >
      <input type="hidden" name="form-name" value="contact" />

      {/* Hidden field for bot prevention */}
      <div style={{ display: "none" }}>
        <input name="bot-field" onChange={handleChange} />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="name"
          style={{
            display: "block",
            fontSize: "16px",
            marginBottom: "8px",
            color: "#333",
            fontWeight: "600",
          }}
        >
          Name:
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            transition: "border-color 0.3s",
          }}
          placeholder="Your Name"
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="email"
          style={{
            display: "block",
            fontSize: "16px",
            marginBottom: "8px",
            color: "#333",
            fontWeight: "600",
          }}
        >
          Email:
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            transition: "border-color 0.3s",
          }}
          placeholder="Your Email"
        />
      </div>

      <div style={{ marginBottom: "20px" }}>
        <label
          htmlFor="message"
          style={{
            display: "block",
            fontSize: "16px",
            marginBottom: "8px",
            color: "#333",
            fontWeight: "600",
          }}
        >
          Message:
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          style={{
            width: "100%",
            padding: "12px",
            fontSize: "16px",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxSizing: "border-box",
            resize: "none",
            height: "120px",
            transition: "border-color 0.3s",
          }}
          placeholder="Your Message"
        ></textarea>
      </div>

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "14px",
          fontSize: "18px",
          color: "#fff",
          backgroundColor: "#007bff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
          transition: "background-color 0.3s",
        }}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#0056b3")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#007bff")}
      >
        Submit
      </button>
    </form>
  );
};

export default NetlifyForm;
