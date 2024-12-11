'use client'

import Link from 'next/link';
import { useState ,useEffect} from 'react'
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,  DialogFooter,
} from "@/components/ui/dialog"

import { Linkedin, Twitter, Mail,Send} from 'lucide-react';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [openDialog, setOpenDialog] = useState<string | null>(null)

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        setMessage('')
        setEmail('')
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [message])


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
  
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          'form-name': 'contact',
          email
        }).toString()
      })
  
      if (response.ok) {
        setMessage('Thank You')
        setEmail('')
      } else {
        throw new Error('Submission  failed')
      }
    } catch (error) {
      setMessage('An error occurred. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }
  

  const handleOpenDialog = (dialog: string) => {
    setOpenDialog(dialog)
  }

  const handleCloseDialog = () => {
    setOpenDialog(null)
  }

  return (
    <footer
      id="contact-section"
      className="bg-gray-950 text-gray-400 py-12 px-4 md:px-6"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Essential Links */}
          <div>
            <h4 className="text-xl font-semibold tracking-tight text-white mb-4">
              White Glove Ventures
            </h4>
            <nav className="space-y-2">

              
            <Dialog open={openDialog === 'privacy'} onOpenChange={(open) => open ? handleOpenDialog('privacy') : handleCloseDialog()}>
                <DialogTrigger asChild>
                  <button className="block hover:text-white transition-colors">Privacy Policy</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Privacy Policy</DialogTitle>
                   
                  </DialogHeader>
                  <div className="text-sm text-gray-500 max-h-[60vh] overflow-y-auto">
                    <p className="font-bold mb-4">Effective Date: Nov 5th, 2024</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Introduction</h3>
                    <p className="mb-4">At White Glove Ventures (WGV), we are dedicated to maintaining the confidentiality and privacy of our clients, partners, and website visitors. This Privacy Policy explains how we collect, use, and protect information provided to us in the course of offering our services, including startup acceleration, deal structuring, and VC advisory.</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Information We Collect</h3>
                    <p className="mb-2">WGV collects information necessary to provide our services effectively and build meaningful business relationships. This includes:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li><span className="font-semibold">Personal Information:</span> Contact details such as name, email address, phone number, and job title, as provided through inquiries, applications, or during engagements.</li>
                      <li><span className="font-semibold">Business Information:</span> Startup details, financial data, pitch decks, investment preferences, or strategic goals shared for evaluations or collaboration purposes.</li>
                      <li><span className="font-semibold">Website Usage Data:</span> IP address, browser type, and activity on our website, gathered via cookies and analytics tools to improve user experience.</li>
                    </ul>
                    
                    <h3 className="font-semibold text-lg mb-2">How We Use Your Information</h3>
                    <p className="mb-2">The information we collect is used to:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Facilitate introductions between startups and investors.</li>
                      <li>Perform due diligence and evaluate startup potential.</li>
                      <li>Customize advisory and acceleration strategies.</li>
                      <li>Communicate updates on opportunities, market trends, and resources.</li>
                      <li>Improve our services and digital platforms.</li>
                    </ul>
                    
                    <h3 className="font-semibold text-lg mb-2">Sharing of Information</h3>
                    <p className="mb-2">WGV prioritizes confidentiality and shares data only in the following contexts:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>With vetted investors, subject to mutual confidentiality agreements, to align startups with potential funding opportunities.</li>
                      <li>With trusted service providers assisting in delivering our offerings, under strict confidentiality.</li>
                      <li>When legally required or in response to lawful government requests.</li>
                    </ul>
                    
                    <h3 className="font-semibold text-lg mb-2">Data Security</h3>
                    <p className="mb-4">We employ advanced encryption, secure storage, and strict access controls to safeguard sensitive information. While we strive to ensure the highest level of security, no method of electronic transmission is completely secure, and we cannot guarantee absolute security.</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Your Rights</h3>
                    <p className="mb-2">As a user, you have the right to:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Access, update, or delete personal data we hold about you.</li>
                      <li>Withdraw consent for marketing communications.</li>
                      <li>Request clarification on our data practices.</li>
                    </ul>
                    
                    <h3 className="font-semibold text-lg mb-2">Third-Party Interactions</h3>
                    <p className="mb-4">Our website or communications may include links to third-party services. WGV is not responsible for the privacy policies or practices of external entities.</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Policy Updates</h3>
                    <p className="mb-4">WGV may revise this Privacy Policy to reflect changes in our services or legal requirements. Updates will be published on this page with the revised date.</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
                    <p className="mb-2">For questions or concerns regarding this Privacy Policy, please contact us at:</p>
                    <li><b>Email:</b>contact@whiteglove.ventures</li>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

              <Dialog open={openDialog === 'terms'} onOpenChange={(open) => open ? handleOpenDialog('terms') : handleCloseDialog()}>
                <DialogTrigger asChild>
                  <button className="block hover:text-white transition-colors"> Terms & Conditions</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[600px]">
                  <DialogHeader>
                    <DialogTitle>Terms & Conditions</DialogTitle>
                   
                  </DialogHeader>
                  <div className="text-sm text-gray-500 max-h-[60vh] overflow-y-auto">
                    <p className="font-bold mb-4">Effective Date: Nov 5th, 2024</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Introduction</h3>
                    <p className="mb-4">Welcome to White Glove Ventures (WGV). By accessing our website or engaging with our services, you agree to comply with these Terms & Conditions. These terms govern the use of our website and services, including startup acceleration, venture advisory, and related engagements.</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Scope of Services</h3>
                    <p className="mb-2">WGV offers specialized services, including but not limited to:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Facilitating deal flow between vetted startups and investors.</li>
                      <li>Conducting due diligence to ensure quality and readiness of opportunities.</li>
                      <li>Advising venture capital firms on strategy and portfolio optimization.</li>
                    </ul>
                    <p className="mb-4">These services are provided under individually agreed-upon terms outlined in separate agreements with clients.</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Website Use</h3>
                    <ul className="list-disc pl-5 mb-4">
                      <li><span className="font-semibold">Eligibility:</span> Access to certain features may require you to register or provide information. You must be authorized to act on behalf of your business or organization when engaging with us.</li>
                      <li><span className="font-semibold">Accuracy:</span> You agree to provide accurate, complete information when interacting with our website or submitting applications.</li>
                      <li><span className="font-semibold">Prohibited Conduct:</span> You agree not to:
                        <ul className="list-disc pl-5 mt-2">
                          <li>Misrepresent information during applications or engagements.</li>
                          <li>Attempt to disrupt website functionality.</li>
                          <li>Use the website for unauthorized data scraping or commercial purposes.</li>
                        </ul>
                      </li>
                    </ul>
                    
                    <h3 className="font-semibold text-lg mb-2">Confidentiality</h3>
                    <p className="mb-4">WGV recognizes the sensitive nature of the data we handle. While we take robust measures to ensure data protection, users and clients must adhere to mutual confidentiality agreements where applicable.</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Intellectual Property</h3>
                    <p className="mb-4">All content on the WGV website, including articles, frameworks, and proprietary materials, is owned by WGV or its licensors. Unauthorized use, distribution, or reproduction of our intellectual property is strictly prohibited.</p>
                    
                    <h3 className="font-semibold text-lg mb-2">No Guarantees</h3>
                    <p className="mb-4">WGV strives to deliver high-quality advisory and acceleration services. However:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>We do not guarantee funding, investment outcomes, or specific business results.</li>
                      <li>Any outcomes depend on various factors beyond our control, including market conditions and client performance.</li>
                    </ul>
                    
                    <h3 className="font-semibold text-lg mb-2">Limitation of Liability</h3>
                    <p className="mb-2">WGV is not responsible for:</p>
                    <ul className="list-disc pl-5 mb-4">
                      <li>Any damages resulting from decisions made based on our advice or introductions.</li>
                      <li>Losses incurred due to external market factors or client-side actions.</li>
                    </ul>
                    
                    <h3 className="font-semibold text-lg mb-2">Governing Law</h3>
                    <p className="mb-4">These Terms & Conditions are governed by applicable local laws where WGV operates. Specific jurisdictions for legal matters will be handled as needed on a case-by-case basis.</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Amendments</h3>
                    <p className="mb-4">WGV reserves the right to modify these Terms & Conditions to reflect changes in our services or legal obligations. Updates will be posted here, and your continued use of our website constitutes acceptance of the revised terms.</p>
                    
                    <h3 className="font-semibold text-lg mb-2">Contact Us</h3>
                    <p className="mb-2">For inquiries or feedback about these Terms & Conditions, please contact:</p>
                    <li><b>Email:</b>contact@whiteglove.ventures</li>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
             
              <Dialog open={openDialog === 'contact'} onOpenChange={(open) => open ? handleOpenDialog('contact') : handleCloseDialog()}>
                <DialogTrigger asChild>
                  <button className="block hover:text-white transition-colors">Contact Us</button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Contact Us</DialogTitle>
                  </DialogHeader>
                  <div className="text-sm text-gray-500 space-y-4">
                    <p>Contact us through any of these means:</p>
                    <div>
                      <h5 className="font-semibold mb-2">LinkedIn:</h5>
                      <ul className="list-disc pl-5 space-y-1">
                        <li><a href="https://www.linkedin.com/company/whiteglove-ventures/?" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">WGV Profile</a></li>
                        <li><a href="https://www.linkedin.com/dummy-contact1-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Point of Contact 1</a></li>
                        <li><a href="https://www.linkedin.com/dummy-contact2-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Point of Contact 2</a></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold mb-2">Other Channels:</h5>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Twitter className="h-5 w-5 mr-2" />
                          <a href="https://www.twitter.com/dummy-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Twitter</a>
                        </li>
                        <li className="flex items-center">
                          <Mail className="h-5 w-5 mr-2" />
                          <a href="mailto:dummyemail@example.com" className="text-blue-600 hover:underline">Email</a>
                        </li>
                        <li className="flex items-center">
                          <Send className="h-5 w-5 mr-2" />
                          <a href="https://t.me/dummy-profile" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Telegram</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <DialogFooter>
                    <Button onClick={handleCloseDialog}>Close</Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>

            </nav>
          </div>

          {/* Newsletter Signup */}
          <div className="md:col-span-2">
            <h4 className="text-xl font-semibold tracking-tight text-white mb-4">
              Stay Updated
            </h4>
            <p className="mb-4 text-sm">
              Sign up for exclusive deals and market insights.
            </p>

            <form name="contact" data-netlify="true" hidden>
        <input type="email" name="email" />
      </form>


            <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-4 max-w-md">
            <input type="hidden" name="form-name" value="contact" />
              <div className="flex gap-2">

                    <Input type="email"  placeholder="Enter your email"
                  className="flex-1 bg-black border-gray-800 text-white placeholder-gray-500" name="email" />
               <Button type="submit" disabled={isSubmitting} className="bg-white text-black hover:bg-gray-200 whitespace-nowrap"> 
               Subscribe

               </Button>
               
               {message && (
            <div className={`text-sm ${message.includes('successful') ? 'text-green-500' : 'text-red-500'}`}>
               {message}
              </div>
            )}
              </div>
           </form>


          </div>

          {/* Social Media and Contact */}
          <div>
            <h4 className="text-xl font-semibold tracking-tight text-white mb-4">
              Connect With Us
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/whiteglove-ventures/?
                "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6 hover:text-white transition-colors" />
              </a>
              <a
                href="https://x.com/whiteglove_v/
                "
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter className="h-6 w-6 hover:text-white transition-colors" />
              </a>
              <a
                href="mailto:dummyemail@example.com
"
                aria-label="Email"
              >
                <Mail className="h-6 w-6 hover:text-white transition-colors" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 text-center text-sm">
          <p>
            &copy; {new Date().getFullYear()} White Glove Ventures. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
