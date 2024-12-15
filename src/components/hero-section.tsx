// 'use client';

// import { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Card, CardContent } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
// import Image from 'next/image';

// export default function HeroSection() {
//   const [email, setEmail] = useState('');

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log('Email submitted:', email);
//     setEmail('');
//   };

//   const startups = [
//     {
//       name: 'AI Innovate',
//       description: 'AI-powered industry solutions',
//       tags: ['Series A', 'AI'],
//       image: 'ai',
//     },
//     {
//       name: 'BlockChain UX',
//       description: 'Blockchain for better UX',
//       tags: ['Seed', 'Blockchain'],
//       image: 'blockchain',
//     },
//     {
//       name: 'HealthTech IoT',
//       description: 'IoT revolutionizing healthcare',
//       tags: ['Pre-seed', 'IoT'],
//       image: 'iot',
//     },
//     {
//       name: 'GreenFuture',
//       description: 'Sustainable tech for green future',
//       tags: ['Series A', 'GreenTech'],
//       image: 'green',
//     },
//     {
//       name: 'FinTech Disrupt',
//       description: 'Revolutionizing financial services',
//       tags: ['Seed', 'FinTech'],
//       image: 'fintech',
//     },
//     {
//       name: 'EdTech Innovators',
//       description: 'Transforming education with tech',
//       tags: ['Pre-seed', 'EdTech'],
//       image: 'edtech',
//     },
//   ];

//   return (
//     <section className="w-full py-20 md:py-32 bg-black overflow-hidden">
//       <div className="container px-4 md:px-6">
//         <div className="grid gap-16 lg:grid-cols-[1fr_500px] lg:gap-24 xl:gap-32 items-center">
//           <div className="flex flex-col justify-center space-y-10">
//             <div className="space-y-6">
//               <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
//                 Building Tomorrow's Unicorns
//               </h1>
//               <p className="text-xl text-gray-300 max-w-[600px]">
//                 Precision VC and startup matchmaking to accelerate growth and
//                 optimize investments.
//               </p>
//             </div>
//             <div className="flex flex-col sm:flex-row gap-4">
//               <Button className="bg-white text-black hover:bg-gray-200 text-lg py-6 px-8">
//                 Join Acceleration Program
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//               <Button
//                 variant="outline"
//                 className="text-white border-white hover:bg-gray-900 text-lg py-6 px-8"
//               >
//                 Explore Deal Flow
//                 <ArrowRight className="ml-2 h-5 w-5" />
//               </Button>
//             </div>
//             <div className="flex flex-wrap gap-4">
//               <Badge
//                 variant="secondary"
//                 className="text-base py-2 px-4 bg-black text-white border border-gray-800 rounded"
//               >
//                 <CheckCircle className="mr-2 h-5 w-5" /> Global VC Network
//               </Badge>
//               <Badge
//                 variant="secondary"
//                 className="text-base py-2 px-4 bg-black text-white border border-gray-800 rounded"
//               >
//                 <Sparkles className="mr-2 h-5 w-5" /> Data-Driven Insights
//               </Badge>
//             </div>
//             <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
//               <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
//               <div className="flex gap-2">
//                 <Input
//                   type="email"
//                   placeholder="Enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="flex-1 bg-black border-gray-800 text-white placeholder-gray-500"
//                 />
//                 <Button
//                   type="submit"
//                   className="bg-white text-black hover:bg-gray-200 whitespace-nowrap"
//                 >
//                   Subscribe
//                 </Button>
//               </div>
//             </form>
//           </div>
//           <div className="lg:block relative">
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
//             <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
//             <div className="relative">
//               <div className="overflow-hidden h-[600px]">
//                 <div className="animate-scroll flex">
//                   <div className="flex flex-col gap-4 mr-4">
//                     {startups.map((startup, index) => (
//                       <Card
//                         key={index}
//                         className="w-60 h-[340px] bg-black border border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-xl"
//                       >
//                         <CardContent className="p-0 flex flex-col h-full">
//                           <div className="relative w-full h-48 overflow-hidden">
//                             <Image
//                               src={`/placeholder.svg?height=192&width=240&text=${startup.image}`}
//                               alt={startup.name}
//                               layout="fill"
//                               objectFit="cover"
//                               className="object-center"
//                             />
//                           </div>
//                           <div className="flex-1 p-4 flex flex-col justify-between">
//                             <div>
//                               <h3 className="text-xl font-semibold text-white mb-2">
//                                 {startup.name}
//                               </h3>
//                               <p className="text-sm text-gray-400 mb-3">
//                                 {startup.description}
//                               </p>
//                             </div>
//                             <div className="flex flex-wrap gap-1">
//                               {startup.tags.map((tag, tagIndex) => (
//                                 <Badge
//                                   key={tagIndex}
//                                   variant="outline"
//                                   className="text-sm py-1 px-2 bg-black text-gray-300 border border-gray-800 rounded"
//                                 >
//                                   {tag}
//                                 </Badge>
//                               ))}
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                   <div className="flex flex-col gap-4 mt-8">
//                     {startups.map((startup, index) => (
//                       <Card
//                         key={index}
//                         className="w-60 h-[340px] bg-black border border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-xl"
//                       >
//                         <CardContent className="p-0 flex flex-col h-full">
//                           <div className="relative w-full h-48 overflow-hidden">
//                             <Image
//                               src={`/placeholder.svg?height=192&width=240&text=${startup.image}`}
//                               alt={startup.name}
//                               layout="fill"
//                               objectFit="cover"
//                               className="object-center"
//                             />
//                           </div>
//                           <div className="flex-1 p-4 flex flex-col justify-between">
//                             <div>
//                               <h3 className="text-xl font-semibold text-white mb-2">
//                                 {startup.name}
//                               </h3>
//                               <p className="text-sm text-gray-400 mb-3">
//                                 {startup.description}
//                               </p>
//                             </div>
//                             <div className="flex flex-wrap gap-1">
//                               {startup.tags.map((tag, tagIndex) => (
//                                 <Badge
//                                   key={tagIndex}
//                                   variant="outline"
//                                   className="text-sm py-1 px-2 bg-black text-gray-300 border border-gray-800 rounded"
//                                 >
//                                   {tag}
//                                 </Badge>
//                               ))}
//                             </div>
//                           </div>
//                         </CardContent>
//                       </Card>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <style jsx>{`
//         @keyframes blob {
//           0% { transform: translate(-50%, -50%) scale(1); }
//           33% { transform: translate(-50%, -50%) scale(1.1); }
//           66% { transform: translate(-50%, -50%) scale(0.9); }
//           100% { transform: translate(-50%, -50%) scale(1); }
//         }
//         @keyframes scroll {
//           0% { transform: translateY(0); }
//           100% { transform: translateY(calc(-372px * 6)); }
//         }
//         .animate-blob {
//           animation: blob 7s infinite;
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//         .animation-delay-4000 {
//           animation-delay: 4s;
//         }
//         .animate-scroll {
//           animation: scroll 25s linear infinite;
//         }
//         .animate-scroll:hover {
//           animation-play-state: paused;
//         }
//       `}</style>
//     </section>
//   );
// }

'use client';

import { useState,useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, CheckCircle, Sparkles } from 'lucide-react';
import Image from 'next/image';


export default function HeroSection() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const startups = [
    {
      name: 'BlockChain UX',
      description: 'Blockchain Infrastructure ',
      tags: ['Seed', 'Blockchain'],
      image: '/images/hero/BlockchainUX.png',
    },
    {
      name: 'AI',
      description: 'Artificial Intelligence ',
      tags: ['AI driven', ' Data Analytics '],
      image: '/images/hero/AI.png',
    },
    
    {
      name: 'Privacy ',
      description: '',
      tags: ['ZK- Proofs', 'Data Protection '],
      image: '/images/hero/privacy.png',
    },
    {
      name: 'DeFi',
      description: 'Decentralized Finance',
      tags: ['Decentralized', 'Financial Tools'],
      image: '/images/hero/Defi.png',
    },
    {
      name: 'RAW',
      description: ' Real-World Asset Tokenization',
      tags: [' Asset Tokenization', 'Real Estate'],
      image: '/images/hero/RAW.png',
    },
  ];

  return (
    <section className="w-full py-20 md:py-32 bg-black overflow-hidden">
      <div className="container px-4 md:px-6">
        <div className="grid gap-16 lg:grid-cols-[1fr_500px] lg:gap-24 xl:gap-32 items-center">
          <div className="flex flex-col justify-center space-y-10">
            <div className="space-y-6">
              <h1 className="text-5xl font-extrabold tracking-tight sm:text-6xl md:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500">
                Building Tomorrows Unicorns
              </h1>
              <p className="text-xl text-gray-300 max-w-[600px]">
                Targeted partnerships and innovative solutions for startups and
                VCs looking to make an impact
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
               variant="outline"
               className="bg-white text-black hover:bg-gray-200 text-lg py-6 px-8"
               onClick={() => {
                 const getInTouchSection =
                   document.getElementById('get-in-touch');
                   if (getInTouchSection) {
                     getInTouchSection.scrollIntoView({ behavior: 'smooth' });
                     const event = new CustomEvent('setActiveTab', { detail: 'startup' });
                     document.dispatchEvent(event);
                   }
               }}
              >
                Join Acceleration Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                className="bg-white text-black hover:bg-gray-200 text-lg py-6 px-8"
                onClick={() => {
                  const getInTouchSection =
                    document.getElementById('get-in-touch');
                    if (getInTouchSection) {
                      getInTouchSection.scrollIntoView({ behavior: 'smooth' });
                      const event = new CustomEvent('setActiveTab', { detail: 'vc' });
                      document.dispatchEvent(event);
                    }
                }}
              >
                Explore Deal Flow
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge
                variant="secondary"
                className="text-base py-2 px-4 bg-black text-white border border-gray-800 rounded"
              >
                <CheckCircle className="mr-2 h-5 w-5" /> Global VC Network
              </Badge>
              <Badge
                variant="secondary"
                className="text-base py-2 px-4 bg-black text-white border border-gray-800 rounded"
              >
                <Sparkles className="mr-2 h-5 w-5" /> Data-Driven Insights
              </Badge>
            </div>


            {/* <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
              <h3 className="text-xl font-semibold text-white">Stay Updated</h3>
              <div className="flex gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 bg-black border-gray-800 text-white placeholder-gray-500"
                />
                <Button
                  type="submit"
                  className="bg-white text-black hover:bg-gray-200 whitespace-nowrap"
                >
                  Subscribe
                </Button>
              </div>
            </form> */}

{/* <form name="contact" data-netlify="true" method="POST " netlify-honeypot="bot-field">
<h3 className="text-xl font-semibold text-white">Stay Updated</h3>
<div className="flex gap-2">

  <p hidden><label>don't fill this form <input name="bot-field"></input></label> </p>
        <input type="email" name="email" />

        <Input type="email"  placeholder="Enter your email"
                  className="flex-1 bg-black border-gray-800 text-white placeholder-gray-500" name="email" />
               <Button type="submit"  className="bg-white text-black hover:bg-gray-200 whitespace-nowrap"> 
               Subscribe
               </Button>
        </div>
      </form> */}

{/* <form name="contact" method="POST" data-netlify="true">
  <input type="hidden" name="form-name" value="contact" />
  <label>
    Name: <input type="text" name="name" />
  </label>
  <label>
    Email: <input type="email" name="email" />
  </label>
  <button type="submit">Submit</button>
</form>
        */}
           
             

          </div>
          <div className="lg:block relative">
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <div className="overflow-hidden h-[600px]">
                <div className="animate-scroll flex">
                  <div className="flex flex-col gap-4 mr-4">
                    {startups.map((startup, index) => (
                      <Card
                        key={index}
                        className="w-60 h-[340px] bg-black border border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-xl"
                      >
                        <CardContent className="p-0 flex flex-col h-full">
                          <div className="relative w-full h-48 overflow-hidden">
                            <Image
                             src={startup.image}
                              alt={startup.name}
                              width={240}
                              height={192}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex-1 p-4 flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-2">
                                {startup.name}
                              </h3>
                              <p className="text-sm text-gray-400 mb-3">
                                {startup.description}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {startup.tags.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="outline"
                                  className="text-sm py-1 px-2 bg-black text-gray-300 border border-gray-800 rounded"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                  <div className="flex flex-col gap-4 mt-8">
                    {startups.map((startup, index) => (
                      <Card
                        key={index}
                        className="w-60 h-[340px] bg-black border border-gray-800 shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden rounded-xl"
                      >
                        <CardContent className="p-0 flex flex-col h-full">
                          <div className="relative w-full h-48 overflow-hidden">
                            <Image
                             src={startup.image}
                              alt={startup.name}
                               width={240}
                               height={192}
                                className="object-cover w-full h-full"
                            />
                          </div>
                          <div className="flex-1 p-4 flex flex-col justify-between">
                            <div>
                              <h3 className="text-xl font-semibold text-white mb-2">
                                {startup.name}
                              </h3>
                              <p className="text-sm text-gray-400 mb-3">
                                {startup.description}
                              </p>
                            </div>
                            <div className="flex flex-wrap gap-1">
                              {startup.tags.map((tag, tagIndex) => (
                                <Badge
                                  key={tagIndex}
                                  variant="outline"
                                  className="text-sm py-1 px-2 bg-black text-gray-300 border border-gray-800 rounded"
                                >
                                  {tag}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(-50%, -50%) scale(1); }
          33% { transform: translate(-50%, -50%) scale(1.1); }
          66% { transform: translate(-50%, -50%) scale(0.9); }
          100% { transform: translate(-50%, -50%) scale(1); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); }
          100% { transform: translateY(calc(-372px * 6)); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-scroll {
          animation: scroll 25s linear infinite;
        }
        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
