'use client';

import React, { useState ,useEffect} from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { MessageCircle } from 'lucide-react';
import  StartupForm  from './startupform';
import VCForm from './vcform';



export default function GetInTouch() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeTab, setActiveTab] =  useState<'startup' | 'vc'>('startup');

  
  // useEffect(() => {
  
  //   const handleSetActiveTab = (event: CustomEvent<string>) => {
  //   //   console.log('Custom event received:', event.detail);
  //   //   if (event.detail === 'startup' || event.detail === 'vc') {
  //   //     setActiveTab(event.detail as 'startup' | 'vc');
  //   //   }
  //   // };

  //   // document.addEventListener('setActiveTab', handleSetActiveTab as EventListener);

  //   // return () => {
  //   //   document.removeEventListener('setActiveTab', handleSetActiveTab as EventListener);
  //   // };
   
  // }, [])

  useEffect(() => {
    const handleSetActiveTab = (event: CustomEvent<string>) => {
      console.log('Custom event received:', event.detail);
      if (event.detail === 'startup' || event.detail === 'vc') {
        console.log('Setting active tab to:', event.detail);
        setActiveTab(event.detail as 'startup' | 'vc');
      }
    };

    document.addEventListener('setActiveTab', handleSetActiveTab as EventListener);

    return () => {
      document.removeEventListener('setActiveTab', handleSetActiveTab as EventListener);
    };
  }, []);

  console.log('GetInTouch rendered, activeTab:', activeTab);


  
  return (
    
    <section
      id="get-in-touch"
      className="bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 shadow-lg overflow-hidden"
    >
      <div className="max-w-4xl p-4 mx-auto">
        <h2 className="text-3xl pfont-semibold tracking-tight text-black mb-8">
          Get in Touch
        </h2>

        <Tabs value={activeTab}  onValueChange={(value: string) => setActiveTab(value as 'startup' | 'vc')}  className="mb-8">
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
        {/* <div className="fixed bottom-4 right-4">
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
        </div> */}
      </div>
    </section>
  );
}
