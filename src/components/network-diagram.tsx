// 'use client';

// import { useEffect, useRef, useState } from 'react';
// import { Badge } from '@/components/ui/badge';
// import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// import React from 'react';
// import { SimulationNodeDatum } from 'd3-force';
// import { TypeIcon as type, type LucideIcon } from 'lucide-react';
// type NodeDatum = Entity & SimulationNodeDatum;
// import {
//   Building2,
//   Briefcase,
//   Users,
//   Lightbulb,
//   TrendingUp,
//   Zap,
//   Code,
//   Microscope,
//   Leaf,
//   Heart,
//   Book,
//   Cog,
//   Globe,
//   Cpu,
//   Headphones,
//   PenTool,
//   BarChart,
//   Shield,
//   Network,
// } from 'lucide-react';
// import * as d3 from 'd3';
// import { Entity, Link } from '@/components/ui/types';

// interface ConnectedEntitiesListProps {
//   links: Link[];
//   selectedNode: Entity | null;
// }
// export function ConnectedEntitiesList({ links, selectedNode }: ConnectedEntitiesListProps) {
//   if (!selectedNode) return null;

//   return (
//     <ul className="list-disc list-inside text-sm text-gray-600">
//       {links
//         .filter((link) => {
//           const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
//           const targetId = typeof link.target === 'string' ? link.target : link.target.id;
//           return sourceId === selectedNode.id || targetId === selectedNode.id;
//         })
//         .map((link, index) => {
//           const connectedNode = (() => {
//             if (typeof link.source === 'string') {
//               return link.source === selectedNode.id ? link.target : link.source;
//             } else if (typeof link.target === 'string') {
//               return link.target === selectedNode.id ? link.source : link.target;
//             } else {
//               return link.source.id === selectedNode.id ? link.target : link.source;
//             }
//           })();

//           if (typeof connectedNode === 'string') {
//             // Handle the case where connectedNode is a string (should not happen in practice)
//             return null;
//           }

//           return (
//             <li key={index} className="mb-2">
//               <span className="font-medium">{connectedNode.name}</span>
//               <br />
//               <span className="text-xs">
//                 Relationship: {selectedNode.type} to {connectedNode.type}
//               </span>
//             </li>
//           );
//         })}
//     </ul>
//   );
// }
// function renderIcon(IconComponent: LucideIcon): string {
//   const rendered = IconComponent({ size: 12 });

//   // Ensure the rendered output is a valid React element before accessing props
//   if (React.isValidElement(rendered)) {
//     const svgProps = rendered.props as React.SVGProps<SVGSVGElement>;
//     if (svgProps.children) {
//       return `<svg width="12" height="12">${React.Children.toArray(svgProps.children).join('')}</svg>`;
//     }
//   }

//   return '';
// }

// const entities = [
//   { id: 'wgv', name: 'White Glove Ventures', type: 'core', icon: Zap },
//   { id: 'ai_fintech', name: 'AI Fintech', type: 'startup', icon: Building2 },
//   { id: 'green_energy', name: 'Green Energy', type: 'startup', icon: Leaf },
//   { id: 'healthtech', name: 'HealthTech', type: 'startup', icon: Heart },
//   { id: 'tech_ventures', name: 'Tech Ventures', type: 'vc', icon: Briefcase },
//   { id: 'green_capital', name: 'Green Capital', type: 'vc', icon: Briefcase },
//   {
//     id: 'health_innovators',
//     name: 'Health Innovators',
//     type: 'vc',
//     icon: Briefcase,
//   },
//   { id: 'mentors', name: 'Industry Mentors', type: 'support', icon: Users },
//   {
//     id: 'accelerator',
//     name: 'Accelerator Program',
//     type: 'program',
//     icon: TrendingUp,
//   },
//   {
//     id: 'innovation_lab',
//     name: 'Innovation Lab',
//     type: 'program',
//     icon: Lightbulb,
//   },
//   { id: 'code_academy', name: 'Code Academy', type: 'program', icon: Code },
//   {
//     id: 'biotech_startup',
//     name: 'BioTech Innovations',
//     type: 'startup',
//     icon: Microscope,
//   },
//   {
//     id: 'edtech_platform',
//     name: 'EdTech Platform',
//     type: 'startup',
//     icon: Book,
//   },
//   { id: 'robotics_corp', name: 'Robotics Corp', type: 'startup', icon: Cog },
//   {
//     id: 'global_impact_fund',
//     name: 'Global Impact Fund',
//     type: 'vc',
//     icon: Globe,
//   },
//   { id: 'tech_incubator', name: 'Tech Incubator', type: 'program', icon: Cpu },
//   {
//     id: 'sustainable_solutions',
//     name: 'Sustainable Solutions',
//     type: 'startup',
//     icon: Leaf,
//   },
//   {
//     id: 'data_driven_health',
//     name: 'Data Driven Health',
//     type: 'startup',
//     icon: Heart,
//   },
//   {
//     id: 'future_mobility',
//     name: 'Future Mobility',
//     type: 'startup',
//     icon: TrendingUp,
//   },
//   {
//     id: 'quantum_computing',
//     name: 'Quantum Computing',
//     type: 'startup',
//     icon: Cpu,
//   },
//   {
//     id: 'blockchain_ventures',
//     name: 'Blockchain Ventures',
//     type: 'vc',
//     icon: Briefcase,
//   },
//   {
//     id: 'ai_ethics_board',
//     name: 'AI Ethics Board',
//     type: 'support',
//     icon: Users,
//   },
//   {
//     id: 'virtual_reality_lab',
//     name: 'Virtual Reality Lab',
//     type: 'program',
//     icon: Headphones,
//   },
//   {
//     id: 'creative_tech_studio',
//     name: 'Creative Tech Studio',
//     type: 'startup',
//     icon: PenTool,
//   },
//   {
//     id: 'smart_city_solutions',
//     name: 'Smart City Solutions',
//     type: 'startup',
//     icon: Building2,
//   },
//   {
//     id: 'space_tech_fund',
//     name: 'Space Tech Fund',
//     type: 'vc',
//     icon: Briefcase,
//   },
//   {
//     id: 'cybersecurity_experts',
//     name: 'Cybersecurity Experts',
//     type: 'support',
//     icon: Users,
//   },
//   {
//     id: 'drone_delivery_startup',
//     name: 'Drone Delivery Startup',
//     type: 'startup',
//     icon: TrendingUp,
//   },
//   {
//     id: 'neurotechnology_research',
//     name: 'Neurotechnology Research',
//     type: 'program',
//     icon: Lightbulb,
//   },
//   {
//     id: 'circular_economy_hub',
//     name: 'Circular Economy Hub',
//     type: 'program',
//     icon: Leaf,
//   },
// ];

// const links = [
//   { source: 'wgv', target: 'ai_fintech' },
//   { source: 'wgv', target: 'green_energy' },
//   { source: 'wgv', target: 'healthtech' },
//   { source: 'wgv', target: 'tech_ventures' },
//   { source: 'wgv', target: 'green_capital' },
//   { source: 'wgv', target: 'health_innovators' },
//   { source: 'wgv', target: 'mentors' },
//   { source: 'wgv', target: 'accelerator' },
//   { source: 'wgv', target: 'innovation_lab' },
//   { source: 'ai_fintech', target: 'tech_ventures' },
//   { source: 'green_energy', target: 'green_capital' },
//   { source: 'healthtech', target: 'health_innovators' },
//   { source: 'mentors', target: 'ai_fintech' },
//   { source: 'mentors', target: 'green_energy' },
//   { source: 'mentors', target: 'healthtech' },
//   { source: 'accelerator', target: 'ai_fintech' },
//   { source: 'accelerator', target: 'green_energy' },
//   { source: 'accelerator', target: 'healthtech' },
//   { source: 'innovation_lab', target: 'ai_fintech' },
//   { source: 'innovation_lab', target: 'green_energy' },
//   { source: 'innovation_lab', target: 'healthtech' },
//   { source: 'wgv', target: 'code_academy' },
//   { source: 'wgv', target: 'biotech_startup' },
//   { source: 'wgv', target: 'edtech_platform' },
//   { source: 'wgv', target: 'robotics_corp' },
//   { source: 'wgv', target: 'global_impact_fund' },
//   { source: 'wgv', target: 'tech_incubator' },
//   { source: 'wgv', target: 'sustainable_solutions' },
//   { source: 'wgv', target: 'data_driven_health' },
//   { source: 'wgv', target: 'future_mobility' },
//   { source: 'wgv', target: 'quantum_computing' },
//   { source: 'wgv', target: 'blockchain_ventures' },
//   { source: 'wgv', target: 'ai_ethics_board' },
//   { source: 'wgv', target: 'virtual_reality_lab' },
//   { source: 'wgv', target: 'creative_tech_studio' },
//   { source: 'wgv', target: 'smart_city_solutions' },
//   { source: 'wgv', target: 'space_tech_fund' },
//   { source: 'wgv', target: 'cybersecurity_experts' },
//   { source: 'wgv', target: 'drone_delivery_startup' },
//   { source: 'wgv', target: 'neurotechnology_research' },
//   { source: 'wgv', target: 'circular_economy_hub' },
//   { source: 'ai_fintech', target: 'blockchain_ventures' },
//   { source: 'ai_fintech', target: 'data_driven_health' },
//   { source: 'green_energy', target: 'sustainable_solutions' },
//   { source: 'green_energy', target: 'circular_economy_hub' },
//   { source: 'healthtech', target: 'biotech_startup' },
//   { source: 'healthtech', target: 'neurotechnology_research' },
//   { source: 'tech_ventures', target: 'robotics_corp' },
//   { source: 'tech_ventures', target: 'quantum_computing' },
//   { source: 'green_capital', target: 'sustainable_solutions' },
//   { source: 'green_capital', target: 'future_mobility' },
//   { source: 'health_innovators', target: 'data_driven_health' },
//   { source: 'health_innovators', target: 'biotech_startup' },
//   { source: 'mentors', target: 'edtech_platform' },
//   { source: 'mentors', target: 'creative_tech_studio' },
//   { source: 'accelerator', target: 'drone_delivery_startup' },
//   { source: 'accelerator', target: 'smart_city_solutions' },
//   { source: 'innovation_lab', target: 'virtual_reality_lab' },
//   { source: 'innovation_lab', target: 'robotics_corp' },
//   { source: 'code_academy', target: 'edtech_platform' },
//   { source: 'code_academy', target: 'ai_fintech' },
//   { source: 'biotech_startup', target: 'global_impact_fund' },
//   { source: 'edtech_platform', target: 'tech_incubator' },
//   { source: 'robotics_corp', target: 'future_mobility' },
//   { source: 'global_impact_fund', target: 'sustainable_solutions' },
//   { source: 'tech_incubator', target: 'quantum_computing' },
//   { source: 'sustainable_solutions', target: 'circular_economy_hub' },
//   { source: 'data_driven_health', target: 'ai_ethics_board' },
//   { source: 'future_mobility', target: 'smart_city_solutions' },
//   { source: 'quantum_computing', target: 'blockchain_ventures' },
//   { source: 'blockchain_ventures', target: 'cybersecurity_experts' },
//   { source: 'ai_ethics_board', target: 'cybersecurity_experts' },
//   { source: 'virtual_reality_lab', target: 'creative_tech_studio' },
//   { source: 'smart_city_solutions', target: 'drone_delivery_startup' },
//   { source: 'space_tech_fund', target: 'drone_delivery_startup' },
// ];

// const entityTypes = [
//   {
//     type: 'core',
//     description: 'Central entity in the ecosystem',
//     relations: [
//       'Connects with all other entity types',
//       'Facilitates interactions and growth',
//     ],
//     icon: Zap,
//   },
//   {
//     type: 'startup',
//     description: 'Innovative companies seeking growth and funding',
//     relations: [
//       'Receives funding from VCs',
//       'Participates in accelerator programs',
//       'Collaborates with other startups',
//     ],
//     icon: Building2,
//   },
//   {
//     type: 'vc',
//     description: 'Venture Capital firms providing investments',
//     relations: [
//       'Invests in startups',
//       'Partners with accelerators',
//       'Provides mentorship and guidance',
//     ],
//     icon: Briefcase,
//   },
//   {
//     type: 'support',
//     description: 'Entities offering guidance and expertise',
//     relations: [
//       'Mentors startups',
//       'Advises VCs',
//       'Collaborates with programs',
//     ],
//     icon: Users,
//   },
//   {
//     type: 'program',
//     description: 'Initiatives to foster growth and innovation',
//     relations: [
//       'Accelerates startup growth',
//       'Partners with VCs',
//       'Provides resources and education',
//     ],
//     icon: TrendingUp,
//   },
// ];

// const sections = [
//   {
//     id: 'data-driven',
//     title: 'Data-Driven Decision-Making',
//     icon: BarChart,
//     description:
//       'We leverage advanced analytics and machine learning to identify high-potential startups and investment opportunities.',
//     stat: 'Data-driven VC firms see a 7-8% higher IRR compared to traditional firms.',
//   },
//   {
//     id: 'founder-readiness',
//     title: 'Founder Readiness Assessment',
//     icon: Users,
//     description:
//       'Our proprietary assessment tool evaluates founder capabilities, team dynamics, and growth potential.',
//     stat: 'Startups that undergo founder readiness assessments are 2.3x more likely to secure funding.',
//   },
//   {
//     id: 'market-analysis',
//     title: 'Ongoing Market Analysis',
//     icon: TrendingUp,
//     description:
//       'We continuously monitor market trends, competitive landscapes, and emerging technologies to stay ahead of the curve.',
//     stat: 'VCs with robust market analysis processes achieve 25% higher portfolio company valuations.',
//   },
//   {
//     id: 'synergy-optimization',
//     title: 'Synergy Optimization',
//     icon: Zap,
//     description:
//       'We identify and foster synergies between portfolio companies to drive mutual growth and success.',
//     stat: 'Companies leveraging synergies report 15% higher revenue growth on average.',
//   },
//   {
//     id: 'risk-mitigation',
//     title: 'Risk Mitigation Strategies',
//     icon: Shield,
//     description:
//       'Our advanced risk assessment models help identify and mitigate potential challenges early in the investment lifecycle.',
//     stat: 'Portfolios with proactive risk mitigation see 20% lower failure rates among early-stage investments.',
//   },
//   {
//     id: 'ecosystem-cultivation',
//     title: 'Ecosystem Cultivation',
//     icon: Network,
//     description:
//       'We actively nurture a thriving ecosystem of startups, investors, and industry partners to accelerate innovation.',
//     stat: 'Startups in cultivated ecosystems achieve profitability 2x faster than isolated ventures.',
//   },
// ];


// export default function NetworkDiagram() {
//   console.log('NetworkDiagram component is rendering');
//   const svgRef = useRef<SVGSVGElement>(null);
//   const [hoveredNode, setHoveredNode] = useState<string | null>(null);
//   const [hoveredSection, setHoveredSection] = useState<string | null>(null);
//   const [animationIndex, setAnimationIndex] = useState(0);
//   const [selectedNode, setSelectedNode] = useState<Entity | null>(null);

//   useEffect(() => {
//     if (!svgRef.current) return;
  
//     const svg = d3.select(svgRef.current);
//     const width = svgRef.current.clientWidth;
//     const height = svgRef.current.clientHeight;
  
//     // Clear existing content
//     svg.selectAll("*").remove();
  
//     // Force simulation
//     const simulation = d3.forceSimulation<Entity>(entities)
//       .force("link", d3.forceLink<Entity, Link>(links).id(d => d.id).distance(100))
//       .force("charge", d3.forceManyBody().strength(-800))
//       .force("center", d3.forceCenter(width / 2, height / 2))
//       .force("collision", d3.forceCollide().radius(30));
  
//     const g = svg.append("g");
  
//     // Render links
//     const link = g
//       .append("g")
//       .selectAll("line")
//       .data(links)
//       .join("line")
//       .attr("stroke", "#4B5563")
//       .attr("stroke-opacity", 0.6)
//       .attr("stroke-width", 1);
  
//     // Render nodes
//     const node = g
//       .append("g")
//       .selectAll<SVGGElement, Entity>("g")
//       .data(entities)
//       .join("g")
//       .call(d3.drag<SVGGElement, Entity>()
//         .on("start", dragstarted)
//         .on("drag", dragged)
//         .on("end", dragended)
//       );
  
//     node.append("circle")
//       .attr("r", 15)
//       .attr("fill", d => (d.type === "core" ? "#3B82F6" : "#E5E7EB"))
//       .attr("stroke", "#1F2937")
//       .attr("stroke-width", 1);
  
//     // Render icons
//     node.append("foreignObject")
//       .attr("width", 20)
//       .attr("height", 20)
//       .attr("x", -10)
//       .attr("y", -10)
//       .html(d => {
//         const IconComponent = d.icon;
//         return IconComponent ? `<div class="flex items-center justify-center w-full h-full text-gray-900">
//           ${renderIcon(IconComponent)}
//         </div>` : '';
//       });
  
//     // Add labels
//     node.append("text")
//       .attr("dy", 25)
//       .attr("text-anchor", "middle")
//       .text(d => d.name)
//       .attr("fill", "#4B5563")
//       .attr("font-size", "10px");
  
//     // Highlight connections
//     function highlightConnections(id: string) {
//       link
//         .style("stroke", (l: Link) => {
//           const sourceId = l.source instanceof Object ? l.source.id : l.source;
//           const targetId = l.target instanceof Object ? l.target.id : l.target;
//           return [sourceId, targetId].includes(id) ? "#3B82F6" : "#4B5563";
//         })
//         .style("stroke-opacity", (l: Link) => {
//           const sourceId = l.source instanceof Object ? l.source.id : l.source;
//           const targetId = l.target instanceof Object ? l.target.id : l.target;
//           return [sourceId, targetId].includes(id) ? 1 : 0.2;
//         });
  
//       node.style("opacity", (d: Entity) => {
//         const connectedNodes = links
//           .filter((l: Link) => {
//             const sourceId = l.source instanceof Object ? l.source.id : l.source;
//             const targetId = l.target instanceof Object ? l.target.id : l.target;
//             return sourceId === id || targetId === id;
//           })
//           .map((l: Link) => {
//             const sourceId = l.source instanceof Object ? l.source.id : l.source;
//             const targetId = l.target instanceof Object ? l.target.id : l.target;
//             return sourceId === id ? targetId : sourceId;
//           });
//         return [id, ...connectedNodes].includes(d.id) ? 1 : 0.2;
//       });
//     }
  
//     // Reset highlight function
//     function resetHighlight() {
//       link.style("stroke", "#4B5563").style("stroke-opacity", 0.6);
//       node.style("opacity", 1);
//     }
  
//     // Add interactions
//     node
//       .on("mouseover", (event: MouseEvent, d: Entity) => {
//         setHoveredNode(d.id);
//         setSelectedNode(d);
//         highlightConnections(d.id);
//       })
//       .on("mouseout", () => {
//         setHoveredNode(null);
//         setSelectedNode(null);
//         resetHighlight();
//       });
  
//     // Drag functions
//     function dragstarted(event: d3.D3DragEvent<SVGGElement, Entity, unknown>, d: Entity) {
//       if (!event.active) simulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }
  
//     function dragged(event: d3.D3DragEvent<SVGGElement, Entity, unknown>, d: Entity) {
//       d.fx = event.x;
//       d.fy = event.y;
//     }
  
//     function dragended(event: d3.D3DragEvent<SVGGElement, Entity, unknown>, d: Entity) {
//       if (!event.active) simulation.alphaTarget(0);
//       d.fx = null;
//       d.fy = null;
//     }
  
//     // Simulation tick update
//     simulation.on("tick", () => {
//       link
//         .attr("x1", (d: Link) => (d.source instanceof Object ? d.source.x ?? 0 : 0))
//         .attr("y1", (d: Link) => (d.source instanceof Object ? d.source.y ?? 0 : 0))
//         .attr("x2", (d: Link) => (d.target instanceof Object ? d.target.x ?? 0 : 0))
//         .attr("y2", (d: Link) => (d.target instanceof Object ? d.target.y ?? 0 : 0));
  
//       node.attr("transform", (d: Entity) => `translate(${d.x ?? 0},${d.y ?? 0})`);
//     });
  
//     // Cleanup function
//     return () => {
//       simulation.stop();
//     };
//   }, [entities, links, setHoveredNode, setSelectedNode]);
  
  


//   return (
//     <div className="w-full min-h-screen bg-white text-black p-6 pr-8">
//       <h2 className="text-3xl font-bold text-center mb-2">
//         Data-Driven Connections That Move Markets
//       </h2>
//       <p className="text-center text-gray-600 mb-6">
//         WGV&apos ecosystem: Startups, VCs, and support networks interconnected
//         for success
//       </p>
//       <div className="flex h-[calc(100vh-200px)]">
//         <div className="w-1/4 pr-4 pl-6 space-y-4 overflow-x-visible overflow-y-auto border border-gray-300 bg-gray-50">
//           <h3 className="text-2xl font-bold tracking-tight mb-6">
//             Our Methodologies and Approaches
//           </h3>
//           <p className="text-sm text-gray-600 mb-6">
//             Innovative strategies driving success in the venture capital and
//             startup ecosystem.
//           </p>
//           <div className="flex flex-col space-y-12 relative">
//             {sections.map((section, index) => (
//               <div
//                 key={section.id}
//                 className="flex items-center space-x-4 relative"
//                 onMouseEnter={() => setHoveredSection(section.id)}
//                 onMouseLeave={() => setHoveredSection(null)}
//               >
//                 <div
//                   className={`transition-all duration-1000 ease-in-out ${animationIndex === index ? 'transform -translate-y-2' : ''
//                     }`}
//                 >
//                   <section.icon className="w-8 h-8" />
//                 </div>
//                 <div className="flex flex-col">
//                   <h4 className="font-bold text-sm">
//                     {section.title.split(' ').map((word, i) => (
//                       <span key={i} className="block">
//                         {word}
//                       </span>
//                     ))}
//                   </h4>
//                 </div>
//                 {hoveredSection === section.id && (
//                   <div className="absolute left-0 top-0 ml-12 bg-white border border-black p-4 w-64 shadow-lg transition-opacity duration-300 z-10">
//                     <h5 className="font-bold mb-2">{section.title}</h5>
//                     <p className="text-sm mb-2">{section.description}</p>
//                     <p className="text-sm font-bold">{section.stat}</p>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//         <div className="w-2/4 pr-4 border border-gray-300 bg-gray-50">
//           <svg
//             ref={svgRef}
//             width="100%"
//             height="100%"
//             className="w-full h-full"
//           >
//             <text x="50%" y="50%" textAnchor="middle" fill="black">
//               Network Diagram (If you see this, SVG is not rendering properly)
//             </text>
//           </svg>
//         </div>
//         <div className="w-1/4 pr-4 space-y-4 overflow-y-auto border border-gray-300 bg-gray-50">
//           <h3 className="text-2xl font-bold tracking-tight mb-6">
//             Entity Components Overview
//           </h3>
//           {selectedNode ? (
//             <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
//               <CardHeader className="border-b border-gray-200 rounded-t-lg">
//                 <CardTitle className="flex items-center text-lg text-black">
//                   <selectedNode.icon className="mr-2" size={20} />
//                   {selectedNode.name}
//                 </CardTitle>
//                 <Badge
//                   variant="secondary"
//                   className="mt-2 bg-gray-100 text-gray-600"
//                 >
//                   {selectedNode.type}
//                 </Badge>
//               </CardHeader>
//               <CardContent>
//                 <h4 className="font-semibold mb-2 text-black">
//                   Connected Entities:
//                 </h4>
//                 <ConnectedEntitiesList links={links} selectedNode={selectedNode} />
//               </CardContent>
//             </Card>
//           ) : (
//             <p className="text-sm text-gray-600">
//               Hover over a node in the network map to see its connections and
//               relationships.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import { useEffect, useRef, useState } from 'react';
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import React from 'react';
import * as d3 from 'd3';
import { Building2, Briefcase, Users, Lightbulb, TrendingUp, Zap, Code, Microscope, Leaf, Heart, Book, Cog, Globe, Cpu, Headphones, PenTool, BarChart, Shield, Network, type LucideIcon } from 'lucide-react';

// Define types
interface Entity extends d3.SimulationNodeDatum {
  id: string;
  name: string;
  type: string;
  icon: LucideIcon;
}

interface Link extends d3.SimulationLinkDatum<Entity> {
  source: string | Entity;
  target: string | Entity;
}

// Helper function to render icons
function renderIcon(IconComponent: LucideIcon): string {
  return `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${React.createElement(IconComponent)?.props?.children || ''}</svg>`;
}

// Define entities
const entities: Entity[] = [
  { id: 'wgv', name: 'White Glove Ventures', type: 'core', icon: Zap },
    { id: 'ai_fintech', name: 'AI Fintech', type: 'startup', icon: Building2 },
    { id: 'green_energy', name: 'Green Energy', type: 'startup', icon: Leaf },
    { id: 'healthtech', name: 'HealthTech', type: 'startup', icon: Heart },
    { id: 'tech_ventures', name: 'Tech Ventures', type: 'vc', icon: Briefcase },
    { id: 'green_capital', name: 'Green Capital', type: 'vc', icon: Briefcase },
    {
      id: 'health_innovators',
      name: 'Health Innovators',
      type: 'vc',
      icon: Briefcase,
    },
    { id: 'mentors', name: 'Industry Mentors', type: 'support', icon: Users },
    {
      id: 'accelerator',
      name: 'Accelerator Program',
      type: 'program',
      icon: TrendingUp,
    },
    {
      id: 'innovation_lab',
      name: 'Innovation Lab',
      type: 'program',
      icon: Lightbulb,
    },
    { id: 'code_academy', name: 'Code Academy', type: 'program', icon: Code },
    {
      id: 'biotech_startup',
      name: 'BioTech Innovations',
      type: 'startup',
      icon: Microscope,
    },
    {
      id: 'edtech_platform',
      name: 'EdTech Platform',
      type: 'startup',
      icon: Book,
    },
    { id: 'robotics_corp', name: 'Robotics Corp', type: 'startup', icon: Cog },
    {
      id: 'global_impact_fund',
      name: 'Global Impact Fund',
      type: 'vc',
      icon: Globe,
    },
    { id: 'tech_incubator', name: 'Tech Incubator', type: 'program', icon: Cpu },
    {
      id: 'sustainable_solutions',
      name: 'Sustainable Solutions',
      type: 'startup',
      icon: Leaf,
    },
    {
      id: 'data_driven_health',
      name: 'Data Driven Health',
      type: 'startup',
      icon: Heart,
    },
    {
      id: 'future_mobility',
      name: 'Future Mobility',
      type: 'startup',
      icon: TrendingUp,
    },
    {
      id: 'quantum_computing',
      name: 'Quantum Computing',
      type: 'startup',
      icon: Cpu,
    },
    {
      id: 'blockchain_ventures',
      name: 'Blockchain Ventures',
      type: 'vc',
      icon: Briefcase,
    },
    {
      id: 'ai_ethics_board',
      name: 'AI Ethics Board',
      type: 'support',
      icon: Users,
    },
    {
      id: 'virtual_reality_lab',
      name: 'Virtual Reality Lab',
      type: 'program',
      icon: Headphones,
    },
    {
      id: 'creative_tech_studio',
      name: 'Creative Tech Studio',
      type: 'startup',
      icon: PenTool,
    },
    {
      id: 'smart_city_solutions',
      name: 'Smart City Solutions',
      type: 'startup',
      icon: Building2,
    },
    {
      id: 'space_tech_fund',
      name: 'Space Tech Fund',
      type: 'vc',
      icon: Briefcase,
    },
    {
      id: 'cybersecurity_experts',
      name: 'Cybersecurity Experts',
      type: 'support',
      icon: Users,
    },
    {
      id: 'drone_delivery_startup',
      name: 'Drone Delivery Startup',
      type: 'startup',
      icon: TrendingUp,
    },
    {
      id: 'neurotechnology_research',
      name: 'Neurotechnology Research',
      type: 'program',
      icon: Lightbulb,
    },
    {
      id: 'circular_economy_hub',
      name: 'Circular Economy Hub',
      type: 'program',
      icon: Leaf,
    },
];

// Define links
const links: Link[] = [
  { source: 'wgv', target: 'ai_fintech' },
  { source: 'wgv', target: 'green_energy' },
  { source: 'wgv', target: 'healthtech' },
  { source: 'wgv', target: 'tech_ventures' },
  { source: 'wgv', target: 'green_capital' },
  { source: 'wgv', target: 'health_innovators' },
  { source: 'wgv', target: 'mentors' },
  { source: 'wgv', target: 'accelerator' },
  { source: 'wgv', target: 'innovation_lab' },
  { source: 'ai_fintech', target: 'tech_ventures' },
  { source: 'green_energy', target: 'green_capital' },
  { source: 'healthtech', target: 'health_innovators' },
  { source: 'mentors', target: 'ai_fintech' },
  { source: 'mentors', target: 'green_energy' },
  { source: 'mentors', target: 'healthtech' },
  { source: 'accelerator', target: 'ai_fintech' },
  { source: 'accelerator', target: 'green_energy' },
  { source: 'accelerator', target: 'healthtech' },
  { source: 'innovation_lab', target: 'ai_fintech' },
  { source: 'innovation_lab', target: 'green_energy' },
  { source: 'innovation_lab', target: 'healthtech' },
  { source: 'wgv', target: 'code_academy' },
  { source: 'wgv', target: 'biotech_startup' },
  { source: 'wgv', target: 'edtech_platform' },
  { source: 'wgv', target: 'robotics_corp' },
  { source: 'wgv', target: 'global_impact_fund' },
  { source: 'wgv', target: 'tech_incubator' },
  { source: 'wgv', target: 'sustainable_solutions' },
  { source: 'wgv', target: 'data_driven_health' },
  { source: 'wgv', target: 'future_mobility' },
  { source: 'wgv', target: 'quantum_computing' },
  { source: 'wgv', target: 'blockchain_ventures' },
  { source: 'wgv', target: 'ai_ethics_board' },
  { source: 'wgv', target: 'virtual_reality_lab' },
  { source: 'wgv', target: 'creative_tech_studio' },
  { source: 'wgv', target: 'smart_city_solutions' },
  { source: 'wgv', target: 'space_tech_fund' },
  { source: 'wgv', target: 'cybersecurity_experts' },
  { source: 'wgv', target: 'drone_delivery_startup' },
  { source: 'wgv', target: 'neurotechnology_research' },
  { source: 'wgv', target: 'circular_economy_hub' },
  { source: 'ai_fintech', target: 'blockchain_ventures' },
  { source: 'ai_fintech', target: 'data_driven_health' },
  { source: 'green_energy', target: 'sustainable_solutions' },
  { source: 'green_energy', target: 'circular_economy_hub' },
  { source: 'healthtech', target: 'biotech_startup' },
  { source: 'healthtech', target: 'neurotechnology_research' },
  { source: 'tech_ventures', target: 'robotics_corp' },
  { source: 'tech_ventures', target: 'quantum_computing' },
  { source: 'green_capital', target: 'sustainable_solutions' },
  { source: 'green_capital', target: 'future_mobility' },
  { source: 'health_innovators', target: 'data_driven_health' },
  { source: 'health_innovators', target: 'biotech_startup' },
  { source: 'mentors', target: 'edtech_platform' },
  { source: 'mentors', target: 'creative_tech_studio' },
  { source: 'accelerator', target: 'drone_delivery_startup' },
  { source: 'accelerator', target: 'smart_city_solutions' },
  { source: 'innovation_lab', target: 'virtual_reality_lab' },
  { source: 'innovation_lab', target: 'robotics_corp' },
  { source: 'code_academy', target: 'edtech_platform' },
  { source: 'code_academy', target: 'ai_fintech' },
  { source: 'biotech_startup', target: 'global_impact_fund' },
  { source: 'edtech_platform', target: 'tech_incubator' },
  { source: 'robotics_corp', target: 'future_mobility' },
  { source: 'global_impact_fund', target: 'sustainable_solutions' },
  { source: 'tech_incubator', target: 'quantum_computing' },
  { source: 'sustainable_solutions', target: 'circular_economy_hub' },
  { source: 'data_driven_health', target: 'ai_ethics_board' },
  { source: 'future_mobility', target: 'smart_city_solutions' },
  { source: 'quantum_computing', target: 'blockchain_ventures' },
  { source: 'blockchain_ventures', target: 'cybersecurity_experts' },
  { source: 'ai_ethics_board', target: 'cybersecurity_experts' },
  { source: 'virtual_reality_lab', target: 'creative_tech_studio' },
  { source: 'smart_city_solutions', target: 'drone_delivery_startup' },
  { source: 'space_tech_fund', target: 'drone_delivery_startup' },
];

// Define sections
const sections = [
  {
        id: 'data-driven',
        title: 'Data-Driven Decision-Making',
        icon: BarChart,
        description:
          'We leverage advanced analytics and machine learning to identify high-potential startups and investment opportunities.',
        stat: 'Data-driven VC firms see a 7-8% higher IRR compared to traditional firms.',
      },
      {
        id: 'founder-readiness',
        title: 'Founder Readiness Assessment',
        icon: Users,
        description:
          'Our proprietary assessment tool evaluates founder capabilities, team dynamics, and growth potential.',
        stat: 'Startups that undergo founder readiness assessments are 2.3x more likely to secure funding.',
      },
      {
        id: 'market-analysis',
        title: 'Ongoing Market Analysis',
        icon: TrendingUp,
        description:
          'We continuously monitor market trends, competitive landscapes, and emerging technologies to stay ahead of the curve.',
        stat: 'VCs with robust market analysis processes achieve 25% higher portfolio company valuations.',
      },
      {
        id: 'synergy-optimization',
        title: 'Synergy Optimization',
        icon: Zap,
        description:
          'We identify and foster synergies between portfolio companies to drive mutual growth and success.',
        stat: 'Companies leveraging synergies report 15% higher revenue growth on average.',
      },
      {
        id: 'risk-mitigation',
        title: 'Risk Mitigation Strategies',
        icon: Shield,
        description:
          'Our advanced risk assessment models help identify and mitigate potential challenges early in the investment lifecycle.',
        stat: 'Portfolios with proactive risk mitigation see 20% lower failure rates among early-stage investments.',
      },
      {
        id: 'ecosystem-cultivation',
        title: 'Ecosystem Cultivation',
        icon: Network,
        description:
          'We actively nurture a thriving ecosystem of startups, investors, and industry partners to accelerate innovation.',
        stat: 'Startups in cultivated ecosystems achieve profitability 2x faster than isolated ventures.',
      },
];

// ConnectedEntitiesList component
interface ConnectedEntitiesListProps {
  links: Link[];
  selectedNode: Entity | null;
}

function ConnectedEntitiesList({ links, selectedNode }: ConnectedEntitiesListProps) {
  const nodeToShow = selectedNode || entities.find(e => e.id === 'wgv')!;

  return (
    <div className="space-y-4">
      {links
        .filter(link => {
          const sourceId = typeof link.source === 'string' ? link.source : link.source.id;
          const targetId = typeof link.target === 'string' ? link.target : link.target.id;
          return sourceId === nodeToShow.id || targetId === nodeToShow.id;
        })
        .map((link, index) => {
          const connectedNode = (() => {
            if (typeof link.source === 'string') {
              return link.source === nodeToShow.id ? link.target : link.source;
            } else if (typeof link.target === 'string') {
              return link.target === nodeToShow.id ? link.source : link.target;
            } else {
              return link.source.id === nodeToShow.id ? link.target : link.source;
            }
          })();

          if (typeof connectedNode === 'string') return null;

          return (
            <div key={index} className="space-y-1">
              <h4 className="text-lg font-medium text-gray-700">{connectedNode.name}</h4>
              <p className="text-sm text-gray-600">
                Relationship: {nodeToShow.type} to {connectedNode.type}
              </p>
            </div>
          );
        })}
    </div>
  );
}

export default function NetworkDiagram() {
  const svgRef = useRef<SVGSVGElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [animationIndex, setAnimationIndex] = useState(0);
  const [selectedNode, setSelectedNode] = useState<Entity>(entities.find(e => e.id === 'wgv')!);
  useEffect(() => {
    if (!svgRef.current) return;

    const svg = d3.select(svgRef.current);
    const width = svgRef.current.clientWidth;
    const height = svgRef.current.clientHeight;

    svg.selectAll("*").remove();

    const simulation = d3.forceSimulation<Entity>(entities)
      .force("link", d3.forceLink<Entity, Link>(links).id(d => d.id).distance(100))
      .force("charge", d3.forceManyBody().strength(-800))
      .force("center", d3.forceCenter(width / 2, height / 2))
      .force("collision", d3.forceCollide().radius(30));

    const g = svg.append("g");

    const zoom = d3
      .zoom<SVGSVGElement, unknown>()
      .scaleExtent([0.1, 4])
      .on('zoom', (event) => {
        g.attr('transform', event.transform);
      });

    svg.call(zoom as any);

    const link = g
      .append("g")
      .selectAll("line")
      .data(links)
      .join("line")
      .attr("stroke", "#4B5563")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", 1);

    const node = g
      .append("g")
      .selectAll<SVGGElement, Entity>("g")
      .data(entities)
      .join("g")
      .call(d3.drag<SVGGElement, Entity>()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended)
      );

    node.append("circle")
      .attr("r", 15)
      .attr("fill", d => (d.type === "core" ? "#3B82F6" : "#E5E7EB"))
      .attr("stroke", "#1F2937")
      .attr("stroke-width", 1);

    node.append("foreignObject")
      .attr("width", 20)
      .attr("height", 20)
      .attr("x", -10)
      .attr("y", -10)
      .html(d => {
        const IconComponent = d.icon;
        return IconComponent ? `<div class="flex items-center justify-center w-full h-full text-gray-900">
          ${renderIcon(IconComponent)}
        </div>` : '';
      });

    node.append("text")
      .attr("dy", 25)
      .attr("text-anchor", "middle")
      .text(d => d.name)
      .attr("fill", "#4B5563")
      .attr("font-size", "10px");

    function highlightConnections(id: string) {
      link
        .style("stroke", (l: Link) => {
          const sourceId = l.source instanceof Object ? l.source.id : l.source;
          const targetId = l.target instanceof Object ? l.target.id : l.target;
          return [sourceId, targetId].includes(id) ? "#3B82F6" : "#4B5563";
        })
        .style("stroke-opacity", (l: Link) => {
          const sourceId = l.source instanceof Object ? l.source.id : l.source;
          const targetId = l.target instanceof Object ? l.target.id : l.target;
          return [sourceId, targetId].includes(id) ? 1 : 0.2;
        });

      node.style("opacity", (d: Entity) => {
        const connectedNodes = links
          .filter((l: Link) => {
            const sourceId = l.source instanceof Object ? l.source.id : l.source;
            const targetId = l.target instanceof Object ? l.target.id : l.target;
            return sourceId === id || targetId === id;
          })
          .map((l: Link) => {
            const sourceId = l.source instanceof Object ? l.source.id : l.source;
            const targetId = l.target instanceof Object ? l.target.id : l.target;
            return sourceId === id ? targetId : sourceId;
          });
        return [id, ...connectedNodes].includes(d.id) ? 1 : 0.2;
      });
    }

    function resetHighlight() {
      link.style("stroke", "#4B5563").style("stroke-opacity", 0.6);
      node.style("opacity", 1);
    }

    node
      .on("mouseover", (event: MouseEvent, d: Entity) => {
        setHoveredNode(d.id);
        setSelectedNode(d);
        highlightConnections(d.id);
      })
      .on("mouseout", () => {
        setHoveredNode(null);
        resetHighlight();
        highlightConnections(selectedNode?.id || 'wgv');
      });

    function dragstarted(event: d3.D3DragEvent<SVGGElement, Entity, unknown>, d: Entity) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      d.fx = d.x;
      d.fy = d.y;
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, Entity, unknown>, d: Entity) {
      d.fx = event.x;
      d.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGGElement, Entity, unknown>, d: Entity) {
      if (!event.active) simulation.alphaTarget(0);
      d.fx = null;
      d.fy = null;
    }

    simulation.on("tick", () => {
      link
        .attr("x1", (d: Link) => (d.source instanceof Object ? d.source.x ?? 0 : 0))
        .attr("y1", (d: Link) => (d.source instanceof Object ? d.source.y ?? 0 : 0))
        .attr("x2", (d: Link) => (d.target instanceof Object ? d.target.x ?? 0 : 0))
        .attr("y2", (d: Link) => (d.target instanceof Object ? d.target.y ?? 0 : 0));

      node.attr("transform", (d: Entity) => `translate(${d.x ?? 0},${d.y ?? 0})`);
    });

    return () => {
      simulation.stop();
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationIndex((prevIndex) => (prevIndex + 1) % sections.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white text-black p-6 pr-8">
      <h2 className="text-3xl font-bold text-center mb-2">
        Data-Driven Connections That Move Markets
      </h2>
      <p className="text-center text-gray-600 mb-6">
        WGV&apos;s ecosystem: Startups, VCs, and support networks interconnected for success
      </p>
      <div className="flex h-[calc(100vh-200px)]">
        <div className="w-1/4 pr-4 pl-6 space-y-4 overflow-x-visible overflow-y-auto border border-gray-300 bg-gray-50">
          <h3 className="text-2xl font-bold tracking-tight mb-6">
            Our Methodologies and Approaches
          </h3>
          <p className="text-sm text-gray-600 mb-6">
            Innovative strategies driving success in the venture capital and startup ecosystem.
          </p>
          <div className="flex flex-col space-y-12 relative">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className="flex items-center space-x-4 relative"
                onMouseEnter={() => setHoveredSection(section.id)}
                onMouseLeave={() => setHoveredSection(null)}
              >
                <div
                  className={`transition-all duration-1000 ease-in-out ${
                    animationIndex === index ? 'transform -translate-y-2' : ''
                  }`}
                >
                  <section.icon className="w-8 h-8" />
                </div>
                <div className="flex flex-col">
                  <h4 className="font-bold text-sm">
                    {section.title.split(' ').map((word, i) => (
                      <span key={i} className="block">
                        {word}
                      </span>
                    ))}
                  </h4>
                </div>
                {hoveredSection === section.id && (
                  <div className="absolute left-0 top-0 ml-12 bg-white border border-black p-4 w-64 shadow-lg transition-opacity duration-300 z-10">
                    <h5 className="font-bold mb-2">{section.title}</h5>
                    <p className="text-sm mb-2">{section.description}</p>
                    <p className="text-sm font-bold">{section.stat}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="w-2/4 pr-4 border border-gray-300 bg-gray-50">
          <svg
            ref={svgRef}
            width="100%"
            height="100%"
            className="w-full h-full"
          >
            <text x="50%" y="50%" textAnchor="middle" fill="black">
              Network Diagram (If you see this, SVG is not rendering properly)
            </text>
          </svg>
        </div>
        <div className="w-1/4  border border-gray-300 rounded-lg p-6 space-y-6 overflow-y-auto">
          <h3 className="text-2xl font-bold tracking-tight mb-6">
            Entity Components Overview
          </h3>
          {/* {selectedNode ? (
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="border-b border-gray-200 rounded-t-lg">
                <CardTitle className="flex items-center text-lg text-black">
                  {React.createElement(selectedNode.icon, { className: "mr-2", size: 20 })}
                  {selectedNode.name}
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="mt-2 bg-gray-100 text-gray-600"
                >
                  {selectedNode.type}
                </Badge>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2 text-black">
                  Connected Entities:
                </h4>
                <ConnectedEntitiesList links={links} selectedNode={selectedNode} />
              </CardContent>
            </Card>
          ) : (
            <p className="text-sm text-gray-600">
              Hover over a node in the network map to see its connections and relationships.
            </p>
          )} */}

{selectedNode && (
            <Card className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="border-b border-gray-200 rounded-t-lg">
                <CardTitle className="flex items-center text-lg text-black">
                {React.createElement(selectedNode?.icon, { className: "mr-2", size: 20 })}
                {selectedNode.name}
                </CardTitle>
                <Badge
                  variant="secondary"
                  className="mt-2 bg-gray-100 text-gray-600"
                >
                  {selectedNode.type}
                </Badge>
              </CardHeader>
              <CardContent>
                <h4 className="font-semibold mb-2 text-black">
                  Connected Entities:
                </h4>
                <ConnectedEntitiesList links={links} selectedNode={selectedNode} />
              </CardContent>
            </Card>
          )}

        </div>
      </div>
    </div>
  );
}