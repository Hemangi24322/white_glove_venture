'use client';

import { useState } from 'react';
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

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted');
  };

  return (
    <section
      id="get-in-touch"
      className="py-12 px-4 md:px-6 lg:px-8 bg-gray-950"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold tracking-tight text-white mb-8">
          Get in Touch
        </h2>

        <Tabs defaultValue="startup" className="mb-8">
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="startup-name">Startup Name</Label>
                      <Input
                        id="startup-name"
                        placeholder="Enter your startup name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="funding-stage">
                        Current Funding Stage
                      </Label>
                      <Select>
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
                      placeholder="E.g., FinTech, HealthTech, AI"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Company Website</Label>
                    <Input
                      id="email"
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
                      placeholder="Tell us about your project&apos current stage"
                    />
                  </div>
                  <Button type="submit">Submit Application</Button>
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
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="vc-name">VC Firm Name</Label>
                      <Input
                        id="vc-name"
                        placeholder="Enter your VC firm name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="investment-stage">
                        Investment Stage Focus
                      </Label>
                      <Select>
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
                      placeholder="E.g., Enterprise SaaS, Consumer Tech"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="deal-size">Typical Deal Size</Label>
                    <Input id="deal-size" placeholder="E.g., $500K - $2M" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vc-message">Additional Information</Label>
                    <Textarea
                      id="vc-message"
                      placeholder="Tell us more about your investment thesis or any specific requests"
                    />
                  </div>
                  <Button type="submit">Submit Inquiry</Button>
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
