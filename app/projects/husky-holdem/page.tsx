import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// export default function HuskyHoldemPage() {
//   return (
//     <div className="min-h-screen bg-background font-mono">
//       <div className="max-w-7xl mx-auto px-8 py-12">
//         {/* Back Button */}
//         <div className="mb-8">
//           <Button variant="ghost" asChild className="hover:bg-primary/20">
//             <Link href="/#projects">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Projects
//             </Link>
//           </Button>
//         </div>

//         {/* Project Header */}
//         <div className="space-y-6 mb-12">
//           <div className="space-y-4">
//             <h1 className="text-4xl md:text-5xl font-bold font-mono text-gradient">Husky Hold'em</h1>
//             <p className="text-xl text-muted-foreground font-mono max-w-3xl">
//               Organized and developed Husky Hold'em Coding Competition and Website, securing $6500 worth of sponsorship
//               support.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <Badge className="bg-primary/20 text-primary border-primary/30">JavaScript</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">HTML/CSS</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Event Management</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Node.js</Badge>
//             </div>
//             <div className="flex gap-4 pt-4">
//               <Button asChild className="purple-glow">
//                 <Link href="https://github.com/thomasz5" target="_blank">
//                   <Github className="mr-2 h-4 w-4" />
//                   View Code
//                 </Link>
//               </Button>
//               <Button variant="outline" asChild className="border-primary/30 hover:border-primary bg-transparent">
//                 <Link href="#" target="_blank">
//                   <ExternalLink className="mr-2 h-4 w-4" />
//                   Event Website
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-2 space-y-8">
//             {/* Project Demo */}
//             <section className="section-gradient rounded-3xl p-8">
//               <h2 className="text-2xl font-bold font-mono text-primary mb-6">Website Demo</h2>
//               <div className="aspect-video bg-card rounded-lg border border-primary/20 flex items-center justify-center">
//                 <div className="text-center space-y-4">
//                   <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
//                     <Play className="h-8 w-8 text-primary" />
//                   </div>
//                   <p className="text-muted-foreground font-mono">Interactive Competition Platform</p>
//                   <Button className="purple-glow">View Live Site</Button>
//                 </div>
//               </div>
//             </section>

//             {/* Project Video */}
//             <section className="section-gradient rounded-3xl p-8">
//               <h2 className="text-2xl font-bold font-mono text-primary mb-6">Event Highlights</h2>
//               <div className="aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
//                 <video
//                   controls
//                   className="w-full h-full object-cover"
//                   poster="/placeholder.svg?height=400&width=700&text=Husky+Hold'em+Event"
//                 >
//                   <source src="/placeholder-video.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </section>

//             {/* Detailed Description */}
//             <section className="section-gradient rounded-3xl p-8">
//               <h2 className="text-2xl font-bold font-mono text-primary mb-6">Project Overview</h2>
//               <div className="space-y-6 text-muted-foreground font-mono">
//                 <p>
//                   Husky Hold'em was a comprehensive coding competition event that I organized and developed from the
//                   ground up. The project involved creating both the technical infrastructure and managing the business
//                   aspects of the event.
//                 </p>

//                 <h3 className="text-xl font-semibold text-foreground">Event Achievements</h3>
//                 <ul className="list-disc list-inside space-y-2 ml-4">
//                   <li>Secured $6,500 in sponsorship funding from tech companies</li>
//                   <li>Attracted 150+ participants from multiple universities</li>
//                   <li>Built custom competition platform with real-time leaderboards</li>
//                   <li>Coordinated with 5 major tech sponsors</li>
//                   <li>Managed event logistics for 200+ attendees</li>
//                 </ul>

//                 <h3 className="text-xl font-semibold text-foreground">Technical Implementation</h3>
//                 <p>
//                   The competition platform featured automated code submission and testing, real-time scoring,
//                   participant registration system, and sponsor integration. The website was built with modern web
//                   technologies to ensure a smooth experience for all participants.
//                 </p>

//                 <h3 className="text-xl font-semibold text-foreground">Leadership & Management</h3>
//                 <ul className="list-disc list-inside space-y-2 ml-4">
//                   <li>Led a team of 8 volunteers and organizers</li>
//                   <li>Developed sponsorship packages and pitched to companies</li>
//                   <li>Coordinated with university administration and venues</li>
//                   <li>Managed budget allocation and expense tracking</li>
//                   <li>Created marketing materials and social media campaigns</li>
//                 </ul>
//               </div>
//             </section>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Project Stats */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Event Stats</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Participants</span>
//                   <span className="font-mono">150+</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Sponsorship</span>
//                   <span className="font-mono">$6,500</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Team Size</span>
//                   <span className="font-mono">8 organizers</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Duration</span>
//                   <span className="font-mono">6 months</span>
//                 </div>
//               </div>
//             </div>

//             {/* Technologies Used */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Technologies</h3>
//               <div className="space-y-3">
//                 <div>
//                   <h4 className="font-semibold font-mono text-foreground mb-2">Frontend</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       HTML/CSS
//                     </Badge>
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       JavaScript
//                     </Badge>
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       Bootstrap
//                     </Badge>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold font-mono text-foreground mb-2">Backend</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       Node.js
//                     </Badge>
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       Express
//                     </Badge>
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       MongoDB
//                     </Badge>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold font-mono text-foreground mb-2">Tools</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       Docker
//                     </Badge>
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       AWS
//                     </Badge>
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       Git
//                     </Badge>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Sponsors */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Event Sponsors</h3>
//               <div className="space-y-3">
//                 <div className="p-3 rounded-lg bg-primary/5">
//                   <h4 className="font-semibold font-mono text-foreground">Microsoft</h4>
//                   <p className="text-sm text-muted-foreground font-mono">Platinum Sponsor</p>
//                 </div>
//                 <div className="p-3 rounded-lg bg-primary/5">
//                   <h4 className="font-semibold font-mono text-foreground">Amazon</h4>
//                   <p className="text-sm text-muted-foreground font-mono">Gold Sponsor</p>
//                 </div>
//                 <div className="p-3 rounded-lg bg-primary/5">
//                   <h4 className="font-semibold font-mono text-foreground">Google</h4>
//                   <p className="text-sm text-muted-foreground font-mono">Silver Sponsor</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
