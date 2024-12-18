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
import  StartupForm  from './startupform';
import VCForm from './vcform';


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
           <StartupForm/>
          </TabsContent>

          <TabsContent value="vc">
            <VCForm/>
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
