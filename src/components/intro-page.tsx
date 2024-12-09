// 'use client';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';

// export default function Component() {
//   return (
//     <div className="container mx-auto px-4 py-8 space-y-16">
//       <section className="space-y-4">
//         <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
//           We&apos;re bridging the gap between startups and venture capital.
//         </h1>
//         <p className="text-xl text-gray-600 dark:text-gray-400">
//           White Glove Ventures is on a mission to democratize access to venture
//           capital. Our data-driven AI technology and seasoned team of advisors
//           ensure that promising startups find their perfect investor match.
//         </p>
//       </section>

//       <section className="space-y-4">
//         <p className="text-sm text-gray-500 dark:text-gray-400">
//           At WGV, we&apos;re proud to be backed by a group of globally
//           recognized venture capitalists, entrepreneurs, and industry leaders
//           who share our mission to transform the landscape of venture finance.
//         </p>
//         <div className="flex justify-between items-center">
//           {['NORTHZONE', 'PROTAGONIST', 'Designer Fund'].map((partner) => (
//             <div key={partner} className="text-lg font-semibold">
//               {partner}
//             </div>
//           ))}
//         </div>
//       </section>

//       <Card className="bg-gray-100 dark:bg-gray-200">
//         <CardContent className="p-6 space-y-4">
//           <h2 className="text-2xl font-bold">
//             Over $100M in deals facilitated to help startups scale
//           </h2>
//           <Button variant="link" className="p-0">
//             Read more →
//           </Button>
//         </CardContent>
//       </Card>

//       <section className="space-y-8">
//         <h2 className="text-2xl font-bold">Our Leadership</h2>
//         {[
//           {
//             name: 'Alex Thompson',
//             role: 'CEO & Founder',
//             bio: 'Alex is a veteran in the venture capital space with over 15 years of experience. She has a proven track record of identifying and nurturing unicorn startups.',
//             image: '/placeholder.svg?height=100&width=100',
//           },
//           {
//             name: 'Michael Chen',
//             role: 'CTO',
//             bio: 'Michael brings 20 years of experience in AI and machine learning. He leads the development of our proprietary WGV CODEX platform.',
//             image: '/placeholder.svg?height=100&width=100',
//           },
//           {
//             name: 'Sarah Patel',
//             role: 'Head of Partnerships',
//             bio: 'Sarah has an extensive network in both the startup and VC worlds. She focuses on building strategic relationships that benefit our entire ecosystem.',
//             image: '/placeholder.svg?height=100&width=100',
//           },
//         ].map((member) => (
//           <div key={member.name} className="flex space-x-4">
//             <Image
//               src={member.image}
//               alt={member.name}
//               width={100}
//               height={100}
//               className="rounded-full"
//             />
//             <div>
//               <h3 className="text-xl font-semibold">{member.name}</h3>
//               <p className="text-gray-600 dark:text-gray-400">{member.role}</p>
//               <p className="mt-2">{member.bio}</p>
//             </div>
//           </div>
//         ))}
//       </section>
//     </div>
//   );
// }

// 'use client';
// import React, { useRef, useState, useEffect } from 'react';
// import Image from 'next/image';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent } from '@/components/ui/card';

// export default function Component() {
//   const scrollContainerRef = useRef<HTMLDivElement>(null);
//   const [activeSection, setActiveSection] = useState(0);

//   const handleScroll = () => {
//     if (scrollContainerRef.current) {
//       const scrollPosition = scrollContainerRef.current.scrollLeft;
//       const containerWidth = scrollContainerRef.current.offsetWidth;
//       setActiveSection(scrollPosition > containerWidth / 2 ? 1 : 0);
//     }
//   };

//   useEffect(() => {
//     const scrollContainer = scrollContainerRef.current;
//     if (scrollContainer) {
//       scrollContainer.addEventListener('scroll', handleScroll);
//       return () => scrollContainer.removeEventListener('scroll', handleScroll);
//     }
//   }, []);

//   const initialLeadershipTeam = [
//     {
//       name: 'Pawani Reddy',
//       role: 'Investor relations and Business Development',
//       image: '/images/team/pawni.jpeg',
//     },
//     {
//       name: 'Mala Ananth',
//       role: 'Project Consultant',

//       image: '/images/team/mala.jpeg',
//     },
//     {
//       name: 'Raghu Venkatram',
//       role: 'Communications Consultant',

//       image: '/images/team/raghu.jpeg',
//     },
//   ];

//   const additionalLeadershipTeam = [
//     {
//       name: 'Shravani Reddy ',
//       role: 'Social Media Manager',
//       image: '/images/team/shravani.jpeg',
//     },
//     {
//       name: 'Dhanush Devang',
//       role: 'Strategic Partnership Manager',

//       image: '/images/team/dhanush.jpeg',
//     },
//     {
//       name: 'Ganesh Hegde',
//       role: 'Designer Manager ',

//       image: '/images/team/ganesh.jpeg',
//     },
//     {
//       name: 'Himanshi Agarwal ',
//       role: 'Research analyst',

//       image: '/images/team/himanshi.jpeg',
//     },
//   ];

//   return (
//     <div className="container mx-auto px-4 py-8 space-y-16">
//       <section className="space-y-4">
//         <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
//           Empowering innovations,connecting visionaries
//         </h1>
//         <p className="text-xl text-gray-600 dark:text-gray-400">
//           WhiteGlove Ventures connects innovative founders with strategic
//           investors, fostering growth through Market Research, Strategy
//           Development, and Industry Partnerships. Our Demo Days enable founders
//           to showcase ideas to seasoned investors, driving meaningful
//           collaborations. Focused on Web2, Web3, and crypto, we empower startups
//           to thrive in emerging markets.
//         </p>
//       </section>

//       <section className="space-y-4">
//         <p className="text-sm text-gray-500 dark:text-gray-400">
//           At WGV, we're proud to be backed by 100+ globally recognized venture
//           capitalists, entrepreneurs, and industry leaders who share our mission
//           to transform the landscape of startups space
//         </p>
//         <div className="flex justify-between items-center">
//           {['NORTHZONE', 'PROTAGONIST', 'Designer Fund'].map((partner) => (
//             <div key={partner} className="text-lg font-semibold">
//               {partner}
//             </div>
//           ))}
//         </div>
//       </section>

//       <Card className="bg-gray-100 dark:bg-gray-100">
//         <CardContent className="p-6 space-y-4">
//           <h2 className="text-2xl font-bold">
//             Connected to over 100+ VCs and 100+ industry-leading protocols, our
//             vast network offers startups unparalleled access to resources,
//             partnerships, and opportunities to build and scale innovative
//             products.
//           </h2>
//           <Button variant="link" className="p-0">
//             Read more →
//           </Button>
//         </CardContent>
//       </Card>

//       <section className="space-y-8">
//         <h2 className="text-2xl font-bold">Our Leadership</h2>
//         <div className="relative">
//           <div
//             ref={scrollContainerRef}
//             className="flex overflow-x-auto scroll-smooth scrollbar-hide"
//             style={{
//               scrollSnapType: 'x mandatory',
//               msOverflowStyle: 'none',
//               scrollbarWidth: 'none',
//             }}
//           >
//             <div
//               className="flex-shrink-0 w-full"
//               style={{ scrollSnapAlign: 'start' }}
//             >
//               <div className="space-y-8">
//                 {initialLeadershipTeam.map((member) => (
//                   <div key={member.name} className="flex space-x-4 black ">
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       width={100}
//                       height={100}
//                       className="rounded-full"
//                     />
//                     <div>
//                       <h3 className="text-xl font-semibold">{member.name}</h3>
//                       <p className="text-gray-500">{member.role}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div
//               className="flex-shrink-0 w-full"
//               style={{ scrollSnapAlign: 'start' }}
//             >
//               <div className="grid grid-cols-2 gap-8">
//                 {additionalLeadershipTeam.map((member) => (
//                   <div
//                     key={member.name}
//                     className="flex flex-col items-center text-center"
//                   >
//                     <Image
//                       src={member.image}
//                       alt={member.name}
//                       width={80}
//                       height={80}
//                       className="rounded-full mb-4"
//                     />
//                     <h3 className="text-lg font-semibold">{member.name}</h3>
//                     <p className="text-gray-500">{member.role}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="flex justify-center space-x-2">
//           <div
//             className={`w-2 h-2 rounded-full transition-colors duration-200 ${
//               activeSection === 0 ? 'bg-blue-500' : 'bg-gray-300'
//             }`}
//             aria-hidden="true"
//           />
//           <div
//             className={`w-2 h-2 rounded-full transition-colors duration-200 ${
//               activeSection === 1 ? 'bg-blue-500' : 'bg-gray-300'
//             }`}
//             aria-hidden="true"
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

'use client';

import React, { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

export default function IntroSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const scrollPosition = scrollContainerRef.current.scrollLeft;
      const containerWidth = scrollContainerRef.current.offsetWidth;
      setActiveSection(scrollPosition > containerWidth / 2 ? 1 : 0);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      return () => scrollContainer.removeEventListener('scroll', handleScroll);
    }
  }, []);

  const initialLeadershipTeam = [
    {
      name: 'Pawani Reddy',
      role: 'Investor relations and Business Development',
      image: '/images/team/pawni.jpeg',
    },
    {
      name: 'Mala Ananth',
      role: 'Project Consultant',
      image: '/images/team/mala.jpeg',
    },
    {
      name: 'Raghu Venkatram',
      role: 'Communications Consultant',
      image: '/images/team/raghu.jpeg',
    },
  ];

  const additionalLeadershipTeam = [
    {
      name: 'Shravani Reddy',
      role: 'Social Media Manager',
      image: '/images/team/shravani.jpeg',
    },
    {
      name: 'Dhanush Devang',
      role: 'Strategic Partnership Manager',
      image: '/images/team/dhanush.jpeg',
    },
    {
      name: 'Ganesh Hegde',
      role: 'Designer Manager',
      image: '/images/team/ganesh.jpeg',
    },
    {
      name: 'Himanshi Agarwal',
      role: 'Research analyst',
      image: '/images/team/himanshi.jpeg',
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 space-y-16">
      <section className="space-y-4">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
          Empowering innovations, connecting visionaries
        </h1>
        <p className="text-xl text-gray-400">
          WhiteGlove Ventures connects innovative founders with strategic
          investors, fostering growth through Market Research, Strategy
          Development, and Industry Partnerships. Our Demo Days enable founders
          to showcase ideas to seasoned investors, driving meaningful
          collaborations. Focused on Web2, Web3, and crypto, we empower startups
          to thrive in emerging markets.
        </p>
      </section>

      <section className="space-y-4">
        <p className="text-sm text-gray-500">
          At WGV, we&apos;re proud to be backed by 100+ globally recognized
          venture capitalists, entrepreneurs, and industry leaders who share our
          mission to transform the landscape of startups space
        </p>
        <div className="flex justify-between items-center">
          {['Ecosystem Connect ', 'Data driven Insights', 'Tech support'].map(
            (partner) => (
              <div key={partner} className="text-lg font-semibold">
                {partner}
              </div>
            )
          )}
        </div>
      </section>

      <Card className="bg-gray-900 border-gray-800">
        <CardContent className="p-6 space-y-4">
          <h2 className="text-2xl font-bold text-white">
            Connected to over 100+ VCs and 100+ industry-leading protocols, our
            vast network offers startups unparalleled access to resources,
            partnerships, and opportunities to build and scale innovative
            products.
          </h2>
          <Button variant="link" className="p-0 text-blue-500">
            Read more →
          </Button>
        </CardContent>
      </Card>

      <section className="space-y-8">
        <h2 className="text-2xl font-bold">Our Leadership</h2>
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto scroll-smooth scrollbar-hide"
            style={{
              scrollSnapType: 'x mandatory',
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            <div
              className="flex-shrink-0 w-full"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="space-y-8">
                {initialLeadershipTeam.map((member, index) => (
                  <div key={member.name} className="flex space-x-4">
                    <div className="relative w-[100px] h-[100px]">
                    <Image
                         src={member.image}
                        alt={member.name}
                      fill
                className="rounded-full object-cover"
                       />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">{member.name}</h3>
                      <p className="text-gray-400">{member.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="flex-shrink-0 w-full"
              style={{ scrollSnapAlign: 'start' }}
            >
              <div className="grid grid-cols-2 gap-8">
                {additionalLeadershipTeam.map((member, index) => (
                  <div
                    key={member.name}
                    className="flex flex-col items-center text-center"
                  >
                    <div className="relative w-[80px] h-[80px] mb-4">
                    <Image
                    src={member.image}
                       alt={member.name}
                        fill
                className="rounded-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-semibold">{member.name}</h3>
                    <p className="text-gray-400">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center space-x-2">
          <div
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              activeSection === 0 ? 'bg-blue-500' : 'bg-gray-700'
            }`}
            aria-hidden="true"
          />
          <div
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              activeSection === 1 ? 'bg-blue-500' : 'bg-gray-700'
            }`}
            aria-hidden="true"
          />
        </div>
      </section>
    </div>
  );
}
