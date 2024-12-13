'use client';

import { useState ,useEffect} from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle } from 'lucide-react';


export default function GetInTouch() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('startup')
  const [isSubmitting, setIsSubmitting] = useState(false)

  
  useEffect(() => {
    const handleSetActiveTab = (event: CustomEvent<string>) => {
      setActiveTab(event.detail)
    }

    document.addEventListener('setActiveTab', handleSetActiveTab as EventListener)

    return () => {
      document.removeEventListener('setActiveTab', handleSetActiveTab as EventListener)
    }
  }, [])


  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setIsSubmitting(true)

    const form = event.target as HTMLFormElement
    const formData = new FormData(form)

    try {
      const response = await fetch('/api/form', {
        method: 'POST',
        body: new URLSearchParams(formData as any).toString()
      })

      if (response.ok) {
        // Handle successful submission
        console.log('Thank you for your submission! We have received your details and will get back to you soon.')
        form.reset()
      } else {
        throw new Error('Form submission failed')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  };

  return (
    
    <section
      id="get-in-touch"
      className="w-full max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 relative z-10"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-black mb-8">
          Get in Touch
        </h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="startup">For Startups</TabsTrigger>
            <TabsTrigger value="vc">For VCs</TabsTrigger>
          </TabsList>

          <TabsContent value="startup">
            <Card>
              <CardHeader>
                <CardTitle>Startup Application</CardTitle>
                <CardDescription>
                  Tell us about your startup and how we can help.
                </CardDescription>
              </CardHeader>
              <CardContent>

              <form name="startup-form" data-netlify="true" hidden>
        <input type="text" name="startup-name" />
        <input type="text" name="funding-stage" />
        <input type="text" name="market-focus" />
        <input type="email" name="email" />
        <textarea name="startup-message"></textarea>
      </form>
      <form name="vc-form" data-netlify="true" hidden>
        <input type="text" name="vc-name" />
        <input type="text" name="investment-stage" />
        <input type="text" name="sector-focus" />
        <input type="text" name="deal-size" />
        <textarea name="vc-message"></textarea>
      </form>


                <form onSubmit={handleSubmit} className="space-y-4" name="startup-form" method="POST" data-netlify="true">
                
                <input type="hidden" name="form-name" value="startup-form" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startup-name">Startup Name</Label>
                      <Input
                        id="startup-name"
                         name="startup-name"
                        placeholder="Enter your startup name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="funding-stage">
                        Current Funding Stage
                      </Label>
                      <Select name="funding-stage">
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
                      placeholder="E.g., FinTech, HealthTech, AI"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Company Website</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
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
                      placeholder="Tell us about your project&apos current stage"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>{isSubmitting ? 'Submitting...' : 'Submit Inquiry'}</Button>
                </form>


              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="vc">
            <Card>
              <CardHeader>
                <CardTitle>VC Inquiry</CardTitle>
                <CardDescription>
                  Tell us about your VC firm and investment interests.
                </CardDescription>
              </CardHeader>
              <CardContent>

                <form onSubmit={handleSubmit} className="space-y-4"name="vc-form" method="POST" data-netlify="true">
                <input type="hidden" name="form-name" value="vc-form" />
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vc-name">VC Firm Name</Label>
                      <Input
                        id="vc-name"
                        name="vc-name"
                        placeholder="Enter your VC firm name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investment-stage">
                        Investment Stage Focus
                      </Label>
                      <Select name="investment-stage">
                        <SelectTrigger id="investment-stage" >
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
                      placeholder="E.g., Enterprise SaaS, Consumer Tech"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deal-size" >Typical Deal Size</Label>
                    <Input id="deal-size" name="deal-size"  placeholder="E.g., $500K - $2M" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vc-message">Additional Information</Label>
                    <Textarea
                      id="vc-message"  name="vc-message"
                      placeholder="Tell us more about your investment thesis or any specific requests"
                    />
                  </div>
                  <Button type="submit" disabled={isSubmitting}>
          {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
        </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        {/* Live Chat Feature */}
        <div className="fixed bottom-4 right-4">
          <Button
            variant="secondary"
            size="icon"
            onClick={() => setIsChatOpen(!isChatOpen)}
            aria-label="Open live chat"
          >
            <MessageCircle className="h-6 w-6" />
          </Button>
          {isChatOpen && (
            <Card className="absolute bottom-16 right-0 w-80">
              <CardHeader>
                <CardTitle>Live Chat</CardTitle>
                <CardDescription>How can we help you today?</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-48 bg-gray-800 rounded-md mb-4"></div>
                <div className="flex space-x-2">
                  <Input placeholder="Type your message..." />
                  <Button>Send</Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </section>
  );
}
