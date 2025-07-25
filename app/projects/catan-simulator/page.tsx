import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// export default function CatanSimulatorPage() {
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
//             <h1 className="text-4xl md:text-5xl font-bold font-mono text-gradient">
//               Catan Settlement Optimization Simulator
//             </h1>
//             <p className="text-xl text-muted-foreground font-mono max-w-3xl">
//               A full-stack Python based Catan board simulation with dynamic visualization and computer vision pipeline
//               using OpenCV and OCR.
//             </p>
//             <div className="flex flex-wrap gap-2">
//               <Badge className="bg-primary/20 text-primary border-primary/30">Python</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">OpenCV</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Flask</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">PostgreSQL</Badge>
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
//                   Live Demo
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
//               <h2 className="text-2xl font-bold font-mono text-primary mb-6">Interactive Demo</h2>
//               <div className="aspect-video bg-card rounded-lg border border-primary/20 flex items-center justify-center">
//                 <div className="text-center space-y-4">
//                   <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
//                     <Play className="h-8 w-8 text-primary" />
//                   </div>
//                   <p className="text-muted-foreground font-mono">Interactive Catan Board Simulator</p>
//                   <Button className="purple-glow">Launch Demo</Button>
//                 </div>
//               </div>
//             </section>

//             {/* Project Video */}
//             <section className="section-gradient rounded-3xl p-8">
//               <h2 className="text-2xl font-bold font-mono text-primary mb-6">Project Walkthrough</h2>
//               <div className="aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
//                 <video
//                   controls
//                   className="w-full h-full object-cover"
//                   poster="/placeholder.svg?height=400&width=700&text=Catan+Simulator+Demo"
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
//                   The Catan Settlement Optimization Simulator is a comprehensive full-stack application that combines
//                   game theory, computer vision, and web development to create an intelligent Catan board game analyzer.
//                 </p>

//                 <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
//                 <ul className="list-disc list-inside space-y-2 ml-4">
//                   <li>Real-time board state recognition using OpenCV and OCR</li>
//                   <li>Monte Carlo simulation for optimal settlement placement</li>
//                   <li>Interactive web interface built with Flask</li>
//                   <li>PostgreSQL database for storing game statistics</li>
//                   <li>Dynamic visualization of probability distributions</li>
//                 </ul>

//                 <h3 className="text-xl font-semibold text-foreground">Technical Implementation</h3>
//                 <p>
//                   The system uses computer vision algorithms to analyze board images, extracting resource tile positions
//                   and dice roll probabilities. The optimization engine then runs thousands of simulations to determine
//                   the statistically best settlement locations based on expected resource generation.
//                 </p>

//                 <h3 className="text-xl font-semibold text-foreground">Challenges Overcome</h3>
//                 <ul className="list-disc list-inside space-y-2 ml-4">
//                   <li>Implementing robust image recognition for varying lighting conditions</li>
//                   <li>Optimizing simulation algorithms for real-time performance</li>
//                   <li>Creating an intuitive user interface for complex data visualization</li>
//                   <li>Handling edge cases in board state detection</li>
//                 </ul>
//               </div>
//             </section>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Project Stats */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Project Stats</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Duration</span>
//                   <span className="font-mono">3 months</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Lines of Code</span>
//                   <span className="font-mono">~2,500</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Team Size</span>
//                   <span className="font-mono">Solo Project</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Status</span>
//                   <span className="font-mono text-primary">Completed</span>
//                 </div>
//               </div>
//             </div>

//             {/* Technologies Used */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Technologies</h3>
//               <div className="space-y-3">
//                 <div>
//                   <h4 className="font-semibold font-mono text-foreground mb-2">Backend</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       Python
//                     </Badge>
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       Flask
//                     </Badge>
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       PostgreSQL
//                     </Badge>
//                   </div>
//                 </div>
//                 <div>
//                   <h4 className="font-semibold font-mono text-foreground mb-2">Computer Vision</h4>
//                   <div className="flex flex-wrap gap-2">
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       OpenCV
//                     </Badge>
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       OCR
//                     </Badge>
//                     <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                       NumPy
//                     </Badge>
//                   </div>
//                 </div>
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
//                       Chart.js
//                     </Badge>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Related Projects */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Related Projects</h3>
//               <div className="space-y-3">
//                 <Link
//                   href="/projects/husky-holdem"
//                   className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
//                 >
//                   <h4 className="font-semibold font-mono text-foreground">Husky Hold'em</h4>
//                   <p className="text-sm text-muted-foreground font-mono">Coding competition platform</p>
//                 </Link>
//                 <Link
//                   href="/projects/option-strategies"
//                   className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
//                 >
//                   <h4 className="font-semibold font-mono text-foreground">Option Strategies</h4>
//                   <p className="text-sm text-muted-foreground font-mono">Financial mathematics research</p>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
