'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

export default function RadioComponent() {
  const [userType, setUserType] = useState('startup');
  const [sector, setSector] = useState('');
  const [stage, setStage] = useState('early');
  const [showResults, setShowResults] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowResults(true);
  };

  const getResults = () => {
    if (userType === 'vc') {
      return `As a VC focusing on ${sector} startups, WGV can provide you with:
        • Pre-vetted, high-quality deal flow in the ${sector} sector
        • Thorough due diligence reports on potential investments
        • Access to our network of industry experts for deeper insights
        • Opportunities for collaborative investments with other VCs`;
    } else {
      return `As a ${stage} startup in the ${sector} sector, WGV can help you:
        • Refine your business strategy and go-to-market plan
        • Connect with relevant mentors and industry experts
        • Prepare for fundraising and introductions to potential investors
        • Scale your operations efficiently with our tailored support`;
    }
  };

  return (
    <section id='help'>
      
<div className="w-full max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 relative z-10">
    <Card  className="w-full max-w-4xl mx-auto bg-white text-black">
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          How can White Glove Ventures help you?
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <RadioGroup value={userType} onValueChange={setUserType}>
                <div className="mb-4">
                  <Label className="text-lg font-semibold">I am a:</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="vc" id="vc" />
                  <Label htmlFor="vc">Venture Capitalist</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="startup" id="startup" />
                  <Label htmlFor="startup">Startup</Label>
                </div>
              </RadioGroup>

              {userType === 'startup' && (
                <RadioGroup value={stage} onValueChange={setStage}>
                  <div className="mb-4">
                    <Label className="text-lg font-semibold">Stage:</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="early" id="early" />
                    <Label htmlFor="early">Early-stage</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="growth" id="growth" />
                    <Label htmlFor="growth">Growth-stage</Label>
                  </div>
                </RadioGroup>
              )}

              <Button
                type="submit"
                className="w-full bg-gray-900 text-white hover:bg-gray-700 transition-colors"
              >
                See How WGV Can Help
              </Button>
            </form>
          </div>

          <div className="flex-1">
            {showResults ? (
              <div className="bg-gray-100 p-6 rounded-lg h-full">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  How WGV Can Help You:
                </h3>
                <p className="text-gray-700 whitespace-pre-line">
                  {getResults()}
                </p>
              </div>
            ) : (
              <div className="bg-gray-100 p-6 rounded-lg h-full flex items-center justify-center">
                <p className="text-gray-500 text-lg text-center">
                  Complete the quiz to see how White Glove Ventures can help
                  you.
                </p>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
    </div>
    </section>
  );
}
