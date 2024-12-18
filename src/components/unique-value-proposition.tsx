// 'use client';

// import { useState, useEffect, useRef } from 'react';
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
// import {
//   ArrowUpRight,
//   Briefcase,
//   BookOpen,
//   LineChart,
//   Rocket,
//   BarChart3,
//   Users,
//   ArrowDown,
// } from 'lucide-react';

// export default function ValueDrivenServices() {
//   const [activeTab, setActiveTab] = useState('startups');
//   const [currentStep, setCurrentStep] = useState(0);
//   const journeyRef = useRef(null);

//   useEffect(() => {
//     const handleSetActiveTab = (event: CustomEvent<string>) => {
//       setActiveTab(event.detail);
//     };

//     document.addEventListener(
//       'setActiveTab',
//       handleSetActiveTab as EventListener
//     );

//     return () => {
//       document.removeEventListener(
//         'setActiveTab',
//         handleSetActiveTab as EventListener
//       );
//     };
//   }, []);

//   useEffect(() => {
//     const handleHashChange = () => {
//       const hash = window.location.hash.slice(1);
//       if (hash === 'vc-services') {
//         setActiveTab('vc');
//       } else if (hash === 'startup-services') {
//         setActiveTab('startups');
//       }
//     };

//     window.addEventListener('hashchange', handleHashChange);
//     handleHashChange(); // Check hash on initial load

//     return () => window.removeEventListener('hashchange', handleHashChange);
//   }, []);

//   const services = {
//     vc: [
//       {
//         title: 'Exclusive Deal Flow',
//         description: 'Gain access to a pipeline of promising investment opportunities',
//         icon: <Briefcase className="h-6 w-6" />,
//         details:
//           'Our rigorous vetting process ensures you only see the most promising startups, saving you time and resources.',
//       },
//       {
//         title: 'Due Diligence Advisory',
//         description: 'Make informed decisions with our thorough evaluation services  ',
//         icon: <BookOpen className="h-6 w-6" />,
//         details:
//           'Leverage our expertise and data-driven insights to make informed investment decisions quickly and confidently.',
//       },
//       {
//         title: 'Market analysis',
//         description: 'Stay informed with in-depth market intelligence',
//         icon: <LineChart className="h-6 w-6" />,
//         details:
//           'Our ongoing support ensures your portfolio companies have the resources and guidance they need to succeed.',
//       },
//     ],
//     startups: [
//       {
//         title: 'Market Analysis',
//         description: 'Stay ahead in a competitive landscape with expert market analysis tailored for startups',
//         icon: <Rocket className="h-6 w-6" />,
//         details:
//           'Our customized acceleration programs are designed to rapidly grow your startup and attract investor interest.',
//       },
//       {
//         title: 'Demo day',
//         description: 'Empower your startup with exclusive opportunities to connect and thrive',
//         icon: <BarChart3 className="h-6 w-6" />,
//         details:
//           'We help you develop and execute effective strategies to launch your product and gain market traction quickly.',
//       },
//       {
//         title: 'Process Optimisation',
//         description: 'Streamline your operations for maximum efficiency and success',
//         icon: <Users className="h-6 w-6" />,
//         details:
//           'Benefit from the wisdom and experience of successful entrepreneurs and industry experts in our network.',
//       },{
//         title: 'Ecosystem Connect',
//         description: 'Unlock growth through meaningful partnerships and networks',
//         icon: <Users className="h-6 w-6" />,
//         details:
//           'Benefit from the wisdom and experience of successful entrepreneurs and industry experts in our network.',
//       },
//     ],
//   };

//   const journeySteps = {
//     vc: [
//       { title: 'Exclusive Deal Flow',
//       description: 'We identify curated opportunities.'
//     },
//       {
//         title: 'Due Diligence Advisory',
//         description: 'We guide you through efficient vetting.',
//       },
//       {
//         title: 'Market Analysis',
//         description: 'Facilitating successful investments.',
//       }
//     ],
//     startups: [
//       { title: 'Market Analysis Journey', description: 'Start the journey with us.' },
//       {
//         title: 'Demo Days Journey',
//         description: 'Stay ahead in a competitive landscape with expert market analysis tailored for startups        ',
//       },
//       {
//         title: 'Process optimisation journey',
//         description: "Empower your startup with exclusive opportunities to connect and thrive ",
//       },
//       {
//         title: 'Ecosystem Connect Journey',
//         description: 'Streamline your operations for maximum efficiency and success  ',
//       },
//     ],
//   };

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentStep((prevStep) => (prevStep + 1) % 4);
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100">
//       <h2 className="text-3xl font-semibold tracking-tight text-center mb-8">
//         Our Value-Driven Services
//       </h2>

//       <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
//         <TabsList className="grid w-full grid-cols-2 mb-8">
//           <TabsTrigger id="startup-services" value="startups">
//             For Startups
//           </TabsTrigger>
//           <TabsTrigger id="vc-services" value="vc">
//             For VCs
//           </TabsTrigger>
//         </TabsList>
//         <div className="flex flex-col lg:flex-row gap-8">
//           <TabsContent
//             value="startups"
//             className="w-full lg:w-2/3 space-y-6 mt-0"
//           >
//             {services.startups.map((service, index) => (
//               <Card
//                 key={index}
//                 className="relative overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg group"
//               >
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <div className="bg-gray-200 p-2 rounded-full transition-colors group-hover:bg-blue-100">
//                       {service.icon}
//                     </div>
//                     <Badge
//                       variant="secondary"
//                       className="transition-colors group-hover:bg-blue-100 group-hover:text-blue-600"
//                     >
//                       <ArrowUpRight className="h-4 w-4 mr-1" />
//                       Learn More
//                     </Badge>
//                   </div>
//                   <CardTitle className="mt-4">{service.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription className="text-base">
//                     {service.description}
//                   </CardDescription>
//                   <div className="mt-4 text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-24">
//                     {service.details}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </TabsContent>
//           <TabsContent value="vc" className="w-full lg:w-2/3 space-y-6 mt-0">
//             {services.vc.map((service, index) => (
//               <Card
//                 key={index}
//                 className="relative overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg group"
//               >
//                 <CardHeader>
//                   <div className="flex items-center justify-between">
//                     <div className="bg-gray-200 p-2 rounded-full transition-colors group-hover:bg-green-100">
//                       {service.icon}
//                     </div>
//                     <Badge
//                       variant="secondary"
//                       className="transition-colors group-hover:bg-green-100 group-hover:text-green-600"
//                     >
//                       <ArrowUpRight className="h-4 w-4 mr-1" />
//                       Learn More
//                     </Badge>
//                   </div>
//                   <CardTitle className="mt-4">{service.title}</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <CardDescription className="text-base">
//                     {service.description}
//                   </CardDescription>
//                   <div className="mt-4 text-sm text-gray-600 overflow-hidden transition-all duration-300 ease-in-out max-h-0 group-hover:max-h-24">
//                     {service.details}
//                   </div>
//                 </CardContent>
//               </Card>
//             ))}
//           </TabsContent>
//           <div
//             className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md"
//             ref={journeyRef}
//           >
//             <h3 className="text-2xl font-semibold mb-6 text-center">
//               Service Journey
//             </h3>
//             <div className="space-y-12 relative">
//               <div
//                 className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"
//                 style={{
//                   backgroundImage: `linear-gradient(to bottom, #3B82F6 ${
//                     (currentStep + 1) * 25
//                   }%, #E5E7EB ${(currentStep + 1) * 25}%)`,
//                   height: '100%',
//                 }}
//               />
//               <div
//                 className="absolute left-2 w-4 h-4 rounded-full bg-blue-500 transition-all duration-300 ease-in-out flex items-center justify-center"
//                 style={{
//                   top: `${currentStep * 33.33}%`,
//                   transform: `translateY(${currentStep * 100}%)`,
//                 }}
//               >
//                 <ArrowDown className="h-3 w-3 text-white" />
//               </div>
//               {journeySteps[activeTab].map((step, index) => (
//                 <div
//                   key={index}
//                   className="flex items-start space-x-4 relative"
//                 >
//                   <div
//                     className={`flex-shrink-0 w-8 h-8 rounded-full ${
//                       index <= currentStep
//                         ? 'bg-blue-500 text-white'
//                         : 'bg-gray-200 text-gray-600'
//                     } flex items-center justify-center font-semibold transition-colors duration-300`}
//                   >
//                     {index + 1}
//                   </div>
//                   <div>
//                     <h4 className="font-semibold text-lg">{step.title}</h4>
//                     <p className="text-sm text-gray-600">{step.description}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </Tabs>
//     </div>
//   );
// }

'use client';

import React,{ useState, useEffect, useRef, useMemo } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import {
  ArrowUpRight,
  Briefcase,
  BookOpen,
  LineChart,
  Rocket,
  BarChart3,
  Users,
  ArrowDown,
} from 'lucide-react';
import { Check } from 'lucide-react';
type Step = {
  title: string;
  description: string;
  miniSteps: string[];
};

type JourneySteps = {
  [key: string]: Step[];
};

export default function ValueDrivenServices() {
  const [activeTab, setActiveTab] = useState('startups');
  const [currentStep, setCurrentStep] = useState(0);
  const [currentMiniStep, setCurrentMiniStep] = useState(0);
  const journeyRef = useRef(null);

  useEffect(() => {
    const handleSetActiveTab = (event: CustomEvent<string>) => {
      setActiveTab(event.detail);
    };

    document.addEventListener(
      'setActiveTab',
      handleSetActiveTab as EventListener
    );
    return () => {
      document.removeEventListener(
        'setActiveTab',
        handleSetActiveTab as EventListener
      );
    };
  }, []);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.slice(1);
      if (hash === 'vc-services') {
        setActiveTab('vc');
      } else if (hash === 'startup-services') {
        setActiveTab('startups');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // Check hash on initial load

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const services = {
    vc: [
      {
        title: 'Exclusive Deal Flow',
        description:
          'Gain access to a pipeline of promising investment opportunities',
        icon: <Briefcase className="h-6 w-6" />,
        details: [
          'Vetted Startups: We provide exclusive introductions to startups pre-screened for innovation, scalability, and market potential.',
          ' Sector-Specific Insights: Focused deal flow tailored to your investment thesis, ensuring relevance and alignment.',
          'First-Mover Advantage: Get early access to promising ventures before they hit the broader market.',
        ],
      },
      {
        title: 'Due Diligence Advisory',
        description:
          'Make informed decisions with our thorough evaluation services',
        icon: <BookOpen className="h-6 w-6" />,
        details: [
          'Team Viability Evaluation: Assess founding team capabilities, leadership dynamics, and execution potential as part of your investment due diligence.',
          'Tech & Product Evaluation: Analyze the technical feasibility, scalability, and innovation behind a startup’s offerings.',
        ],
      },
      {
        title: 'Market Analysis',
        description: 'Stay informed with in-depth market intelligence',
        icon: <LineChart className="h-6 w-6" />,
        details: [
          'Weekly Market Trend Reports: Stay updated on emerging trends, industry shifts, and sector opportunities with concise, actionable updates.',
          'Sector Performance Insights: Dive deep into specific market segments to identify high-growth areas and key challenges.',
        ],
      },
    ],
    startups: [
      {
        title: 'Market Analysis',
        description:
          'Stay ahead in a competitive landscape with expert market analysis tailored for startups',
        icon: <Rocket className="h-6 w-6" />,
        details: [
          'Market Trend Analysis: Identify emerging trends to capitalize on growth opportunities and stay ahead of competitors.',
          'Competitor Insights: Understand competitor strategies to refine your own approach and differentiate your brand.',
          'Audience Intelligence: Gain deep insights into your target audience for better engagement and tailored offerings.',
          'Data-Driven Growth Hacking: Leverage data to create efficient, impactful growth strategies with proven results.',
        ],
      },
      {
        title: 'Demo Day',
        description:
          'Empower your startup with exclusive opportunities to connect and thrive',
        icon: <BarChart3 className="h-6 w-6" />,
        details: [
          'Investor Exposure: Give startups direct access to investors for funding opportunities.',
          'Network Opportunities: Connect with investors, mentors, and industry experts to expand your reach.',
          'Exclusive Deal Flow: Provide investors with exclusive access to high-quality startup opportunities.',
          ' Market Validation: Receive actionable feedback from investors and experts to refine your business model.',
        ],
      },
      {
        title: 'Process Optimisation',
        description:
          'Streamline your operations for maximum efficiency and success',
        icon: <Users className="h-6 w-6" />,
        details: [
          'Team and Resource Optimization: Maximize team efficiency and resource allocation for better outcomes.',
          ' Workflow Streamlining: Eliminate bottlenecks and improve productivity by optimizing workflows.',
          'Process Automation: Automate tasks to reduce manual effort and focus on high-priority work.',
          'Risk Management: Identify and mitigate risks, ensuring stability and long-term success.',
        ],
      },
      {
        title: 'Ecosystem Connect',
        description:
          'Unlock growth through meaningful partnerships and networks',
        icon: <Users className="h-6 w-6" />,
        details: [
          'Investor Network: Connect with a diverse group of investors for valuable funding opportunities.',
          'Service Network: Access key service providers for operational, technical, and marketing support.',
          'Tailored Partnerships: Find strategic partners to accelerate growth and enhance market reach.',
          'Media Partners: Boost visibility and PR by collaborating with influential media outlets.',
        ],
      },
    ],
  };

  const journeySteps: JourneySteps = useMemo(
    () => ({
      vc: [
        {
          title: 'Exclusive Deal Flow',
          description: 'We identify curated opportunities.',
          miniSteps: [
           'Curated Selection',
            'Vetting',
           'Tailored Matchmaking',
            '	Early Access'
          ],
        },
        {
          title: 'Due Diligence Advisory',
          description: 'We guide you through efficient vetting.',
          miniSteps: [
           '	Team Evaluation ',
           'Risk Assessment ',
          '	Tech & Product Review ',
            '	Investment Fit '
            
          ],
        },
        {
          title: 'Market Analysis',
          description: 'Facilitating successful investments.',
          miniSteps: [
          'Trend Monitoring',
           '	Competitor Benchmarking',
           'Sector Deep Dives',
         'Actionable Insights'
            
          ],
        },
      ],
      startups: [
        {
          title: 'Market Analysis Journey',
          description: 'Start the journey with us.',
          miniSteps: [
            '	Initial Consultation',
            'Data Collection & Research',
            '	Insight Generation ',
            '	Strategy Presentation',
          ],
        },
        {
          title: 'Demo Days Journey',
          description:
            'Stay ahead in a competitive landscape with expert market analysis tailored for startups',
          miniSteps: [
            '	Startup Selection ',
            '	Preparation & Pitch Coaching ',
            '	Event Execution ',
            'Post-Event Support ',
          ],
        },
        {
          title: 'Process Optimisation Journey',
          description:
            'Empower your startup with exclusive opportunities to connect and thrive',
          miniSteps: [
            'Assessment & Evaluation ',
            ' 	Solution Design ',
            '	Implementation ',
            '	Monitoring & Adjustment ',
          ],
        },
        {
          title: 'Ecosystem Connect Journey',
          description:
            'Streamline your operations for maximum efficiency and success',
          miniSteps: [
            '	Requirement analysis',
            '	Network Mapping ',
            'Connection Facilitation',
            'Ongoing Relationship Management',
          ],
        },
      ],
    }),
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStep((prevStep) => {
        const nextStep = (prevStep + 1) % (journeySteps[activeTab]?.length ?? 0);
        setCurrentMiniStep(0);
        return nextStep;
      });
    }, 5000);

    return () => clearInterval(interval);
  }, [activeTab, journeySteps]);

  useEffect(() => {
    const miniStepInterval = setInterval(() => {
      setCurrentMiniStep((prevMiniStep) => (prevMiniStep + 1) % 3);
    }, 1500);

    return () => clearInterval(miniStepInterval);
  }, []);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12 bg-gradient-to-br from-gray-50 to-gray-100 relative z-10 rounded-2xl border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
      <h2 className="text-3xl font-semibold tracking-tight text-center mb-8">
        Our Value-Driven Services
      </h2>

      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as 'startups' | 'vc')}
        className="w-full"
      >
        <TabsList className="grid w-full grid-cols-2 mb-8">
          <TabsTrigger id="startup-services" value="startups">
            For Startups
          </TabsTrigger>
          <TabsTrigger id="vc-services" value="vc">
            For VCs
          </TabsTrigger>
        </TabsList>
        <div className="flex flex-col lg:flex-row gap-8">
          <TabsContent
            value="startups"
            className="w-full lg:w-2/3 space-y-6 mt-0"
          >
            {services.startups.map((service, index) => (
              <Card
                key={index}
                className="relative overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="bg-gray-200 p-2 rounded-full transition-colors group-hover:bg-blue-100">
                      {service.icon}
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Badge
                          variant="secondary"
                          className="transition-colors group-hover:bg-blue-100 group-hover:text-blue-600 cursor-pointer"
                        >
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          Learn More
                        </Badge>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-4">
                        <ul className="space-y-3">
                          {service.details.map((detail, i) => (
                            <li key={i} className="text-sm">
                              <span className="font-bold text-gray-900">
                                {detail.split(':')[0]}:
                              </span>
                              <span className="text-gray-600">
                                {detail.split(':')[1]}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <TabsContent value="vc" className="w-full lg:w-2/3 space-y-6 mt-0">
            {services.vc.map((service, index) => (
              <Card
                key={index}
                className="relative overflow-hidden transition-all duration-300 ease-in-out transform hover:-translate-y-2 hover:shadow-lg group"
              >
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="bg-gray-200 p-2 rounded-full transition-colors group-hover:bg-green-100">
                      {service.icon}
                    </div>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Badge
                          variant="secondary"
                          className="transition-colors group-hover:bg-green-100 group-hover:text-green-600 cursor-pointer"
                        >
                          <ArrowUpRight className="h-4 w-4 mr-1" />
                          Learn More
                        </Badge>
                      </PopoverTrigger>
                      <PopoverContent className="w-80 p-4">
                        <ul className="space-y-3">
                          {service.details.map((detail, i) => (
                            <li key={i} className="text-sm">
                              <span className="font-bold text-gray-900">
                                {detail.split(':')[0]}:
                              </span>
                              <span className="text-gray-600">
                                {detail.split(':')[1]}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <CardTitle className="mt-4">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
          <div
            className="w-full lg:w-1/3 bg-white p-6 rounded-lg shadow-md"
            ref={journeyRef}
          >
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Service Journey
            </h3>
            <div className="space-y-8 relative">
              {/* Main timeline line with gradient */}
              <div
                className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"
                style={{
                  backgroundImage: `linear-gradient(to bottom, #3B82F6 ${
                    (currentStep + 1) * 25
                  }%, #E5E7EB ${(currentStep + 1) * 25}%)`,
                  height: 'calc(100% - 2rem)', // Adjusted to extend closer to the bottom
                }}
              />

              {/* Animated arrow indicator */}
              <div
                className="absolute left-2 w-4 h-4 rounded-full bg-blue-500 transition-all duration-500 ease-in-out flex items-center justify-center"
                style={{
                  top: `${currentStep * 25}%`,
                  transform: `translateY(${currentStep * 100}%)`,
                }}
              >
                <ArrowDown className="h-3 w-3 text-white" />
              </div>

              {/* Journey steps */}
              {journeySteps[activeTab]?.map((step, index) => (
                <div key={index} className="relative">
                  <div className="flex items-start space-x-4">
                    <div
                      className={`flex-shrink-0 w-8 h-8 rounded-full ${
                        index <= currentStep
                          ? 'bg-blue-500 text-white'
                          : 'bg-gray-200 text-gray-600'
                      } flex items-center justify-center font-semibold transition-colors duration-300`}
                    >
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg">{step.title}</h4>

                      {/* Mini-steps with connecting lines */}
                      <div className="relative pl-4 space-y-3">
                        <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-200" />
                        {step.miniSteps?.map((miniStep, miniIndex) => (
                          <div
                            key={miniIndex}
                            className={`relative flex items-center transition-all duration-300 ${
                              index === currentStep &&
                              miniIndex === currentMiniStep
                                ? 'text-blue-500'
                                : index < currentStep
                                ? 'text-gray-600'
                                : 'text-gray-400'
                            }`}
                          >
                            <div
                              className={`absolute -left-4 w-3 h-3 rounded-full transition-colors duration-300 flex items-center justify-center ${
                                (index === currentStep &&
                                  miniIndex <= currentMiniStep) ||
                                index < currentStep
                                  ? 'bg-blue-500'
                                  : 'bg-gray-300'
                              }`}
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-white" />
                            </div>
                            <span className="text-sm ml-2">
                              {`${index + 1}.${miniIndex + 1} ${miniStep}`}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connecting line to next step */}
                  {index < journeySteps[activeTab].length - 1 && (
                    <div className="absolute left-4 ml-px w-0.5 h-8 bg-gradient-to-b from-blue-500 to-transparent" />
                  )}
                </div>
              ))}

              {/* Journey completion indicator with 90-degree connection */}
              <div className="relative flex items-center justify-center mt-4">
                {/* Vertical line to horizontal connection */}
                <div className="absolute left-4 bottom-full w-0.5 h-8 bg-blue-500" />
                {/* Horizontal line */}
                <div className="absolute left-4 bottom-4 w-[calc(50%-1rem)] h-0.5 bg-blue-500" />
                <div
                 className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-500 ${
                  currentStep >= (journeySteps[activeTab]?.length ?? 0) - 1
                    ? 'bg-blue-500 text-white'
                    : 'bg-gray-200 text-gray-400'
                }`}
                >
                  <Check className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Tabs>
    </div>
  );
}
