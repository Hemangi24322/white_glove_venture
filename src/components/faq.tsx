'use client';

import { useState } from 'react';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ComponentFAQ() {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const faqData = {
    vc: [
      {
        question: 'How does WGV enhance deal flow for VC firms?',
        answer:
          "We're like your personal startup matchmaker! We scout, vet, and polish up the most promising startups before they land on your desk. It's like getting the cream of the crop, served on a silver platter. No more sifting through endless pitches!",
      },
      {
        question: 'What types of startups does WGV typically work with?',
        answer:
          "We're not picky eaters! We work with startups across various sectors, from tech to green energy to healthcare. But they all have one thing in common – massive potential and a drive to change the world. Or at least disrupt their industry a bit!",
      },
      {
        question: "How does WGV's due diligence process work?",
        answer:
          "Think of us as startup detectives. We dig deep into every aspect of the business – from the team's dynamics to their market fit. We leave no stone unturned. By the time we're done, we know these startups better than they know themselves!",
      },
      {
        question: 'Can WGV facilitate co-investment opportunities?',
        answer:
          "We're all about playing matchmaker. If we see a startup that's perfect for multiple VCs, we'll make the introductions. It's like a investment party, and everyone's invited!",
      },
      {
        question: 'What ongoing support does WGV provide post-investment?',
        answer:
          "We're not a 'love 'em and leave 'em' kind of accelerator. We stick around, offering mentorship, connections, and support. Think of us as the startup's cool uncle – always there with advice and a helping hand when needed.",
      },
    ],
    startup: [
      {
        question: 'How does White Glove Ventures help startups scale?',
        answer:
          "We're like rocket fuel for your startup! We provide mentorship, connections, and resources to help you grow faster than a teenager in a growth spurt. We'll help you navigate the treacherous waters of scaling up, without capsizing!",
      },
      {
        question: 'What services does WGV offer to startups?',
        answer:
          "We're a one-stop-shop for startup success! We offer everything from strategic planning and market analysis to pitch deck polishing and investor introductions. It's like having a Swiss Army knife for your business – we've got a tool for every challenge!",
      },
      {
        question: "How long is WGV's typical acceleration program?",
        answer:
          "Our program is like a pressure cooker for startups – intense but effective! It typically runs for 3-6 months, depending on the startup's needs. But don't worry, we won't leave you hanging after that. We're in it for the long haul!",
      },
      {
        question: 'Does WGV take equity in the startups it accelerates?',
        answer:
          "We do, but don't worry – we're not trying to become majority shareholders! We typically take a small equity stake, usually around 5-10%. Think of it as us putting our money where our mouth is. We succeed when you succeed!",
      },
      {
        question: "How can startups apply to WGV's program?",
        answer:
          "Applying to WGV is easier than ordering a pizza! Just head to our website, fill out the application form, and hit submit. If we like what we see (and we usually do), we'll be in touch faster than you can say 'unicorn'!",
      },
    ],
  };

  const toggleQuestion = (question: string) => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white text-gray-900">
      <h2 className="text-3xl font-bold text-center mb-8">
        Have questions?! We have got you!
      </h2>
      <div className="flex flex-col md:flex-row gap-12">
        <div className="md:w-1/3 space-y-6">
          <div className="flex items-start gap-4">
            <Avatar className="w-16 h-16">
              <AvatarFallback>WGV</AvatarFallback>
            </Avatar>
            <div>
              <p className="font-medium">Did not find the answer?</p>
              <p className="text-sm text-gray-600 mt-1">
                I am a human being, just like you – ask me anything about WGV.
              </p>
            </div>
          </div>
          <div className="space-y-3">
            <Button
              className="w-full justify-start text-left"
              variant="outline"
            >
              Email Us
            </Button>
            <Button className="w-full justify-start text-left bg-blue-600 hover:bg-lue-600 text-white">
              Chat on Telegram
            </Button>
          </div>
        </div>
        <div className="md:w-2/3">
          <Tabs defaultValue="vc" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-4">
              <TabsTrigger value="vc">For VCs</TabsTrigger>
              <TabsTrigger value="startup">For Startups</TabsTrigger>
            </TabsList>
            <TabsContent value="vc" className="space-y-4">
              {faqData.vc.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => toggleQuestion(item.question)}
                  >
                    <span className="font-medium">{item.question}</span>
                    {expandedQuestion === item.question ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {expandedQuestion === item.question && (
                    <p className="mt-2 text-gray-600">{item.answer}</p>
                  )}
                </div>
              ))}
            </TabsContent>
            <TabsContent value="startup" className="space-y-4">
              {faqData.startup.map((item, index) => (
                <div key={index} className="border-b border-gray-200 pb-4">
                  <button
                    className="w-full flex justify-between items-center text-left"
                    onClick={() => toggleQuestion(item.question)}
                  >
                    <span className="font-medium">{item.question}</span>
                    {expandedQuestion === item.question ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  {expandedQuestion === item.question && (
                    <p className="mt-2 text-gray-600">{item.answer}</p>
                  )}
                </div>
              ))}
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
