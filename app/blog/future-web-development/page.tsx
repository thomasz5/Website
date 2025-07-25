import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// export default function FutureWebDevelopmentPage() {
//   return (
//     <div className="min-h-screen bg-background font-mono">
//       <div className="max-w-7xl mx-auto px-8 py-12">
//         {/* Back Button */}
//         <div className="mb-8">
//           <Button variant="ghost" asChild className="hover:bg-primary/20">
//             <Link href="/#blog">
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Blog
//             </Link>
//           </Button>
//         </div>

//         {/* Blog Header */}
//         <div className="space-y-6 mb-12">
//           <div className="space-y-4">
//             <div className="flex flex-wrap gap-2 mb-4">
//               <Badge className="bg-primary/20 text-primary border-primary/30">Future Tech</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Web Development</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Trends</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Innovation</Badge>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold font-mono text-gradient">The Future of Web Development</h1>
//             <p className="text-xl text-muted-foreground font-mono max-w-3xl">
//               Exploring emerging technologies and trends that will shape the future of web development.
//             </p>

//             {/* Blog Meta */}
//             <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-mono text-sm">
//               <div className="flex items-center gap-2">
//                 <User className="h-4 w-4" />
//                 <span>Thomas Zeng</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4" />
//                 <span>April 15, 2025</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="h-4 w-4" />
//                 <span>10 min read</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <BookOpen className="h-4 w-4" />
//                 <span>Opinion</span>
//               </div>
//             </div>

//             <div className="flex gap-4 pt-4">
//               <Button className="purple-glow">
//                 <Share2 className="mr-2 h-4 w-4" />
//                 Share Article
//               </Button>
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
//           {/* Main Content */}
//           <div className="lg:col-span-3 space-y-8">
//             {/* Featured Image */}
//             <section className="section-gradient rounded-3xl p-8">
//               <img
//                 src="/placeholder.svg?height=400&width=800&text=Future+of+Web+Development"
//                 alt="Future of Web Development"
//                 className="w-full h-64 object-cover rounded-lg border border-primary/20"
//               />
//             </section>

//             {/* Video Section */}
//             <section className="section-gradient rounded-3xl p-8">
//               <h2 className="text-2xl font-bold font-mono text-primary mb-6">Future Tech Predictions</h2>
//               <div className="aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
//                 <video
//                   controls
//                   className="w-full h-full object-cover"
//                   poster="/placeholder.svg?height=400&width=700&text=Web+Development+Future+Trends"
//                 >
//                   <source src="/placeholder-video.mp4" type="video/mp4" />
//                   Your browser does not support the video tag.
//                 </video>
//               </div>
//             </section>

//             {/* Blog Content */}
//             <article className="section-gradient rounded-3xl p-8">
//               <div className="prose prose-invert max-w-none">
//                 <div className="space-y-6 text-muted-foreground font-mono">
//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">The Evolving Landscape</h2>
//                   <p>
//                     Web development is constantly evolving, with new technologies, frameworks, and paradigms emerging
//                     regularly. As we look toward the future, several key trends are shaping how we build and interact
//                     with web applications.
//                   </p>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Emerging Technologies</h2>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
//                     <div className="card-gradient p-4 rounded-lg border border-primary/20">
//                       <h4 className="text-primary font-mono mb-2">WebAssembly (WASM)</h4>
//                       <p className="text-sm">Bringing near-native performance to web applications</p>
//                     </div>
//                     <div className="card-gradient p-4 rounded-lg border border-primary/20">
//                       <h4 className="text-primary font-mono mb-2">Edge Computing</h4>
//                       <p className="text-sm">Processing data closer to users for better performance</p>
//                     </div>
//                     <div className="card-gradient p-4 rounded-lg border border-primary/20">
//                       <h4 className="text-primary font-mono mb-2">AI Integration</h4>
//                       <p className="text-sm">Machine learning capabilities built into web apps</p>
//                     </div>
//                     <div className="card-gradient p-4 rounded-lg border border-primary/20">
//                       <h4 className="text-primary font-mono mb-2">Progressive Web Apps</h4>
//                       <p className="text-sm">Native app experiences in the browser</p>
//                     </div>
//                   </div>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Framework Evolution</h2>
//                   <p>The JavaScript framework ecosystem continues to evolve rapidly. We're seeing a shift toward:</p>
//                   <ul className="list-disc list-inside space-y-2 ml-4">
//                     <li>Server-side rendering becoming the default</li>
//                     <li>Micro-frontends for large-scale applications</li>
//                     <li>Component-driven development</li>
//                     <li>Type safety as a standard requirement</li>
//                   </ul>

//                   <div className="card-gradient p-6 rounded-lg border border-primary/20 my-6">
//                     <h3 className="text-lg font-bold font-mono text-primary mb-3">Key Predictions for 2025-2030</h3>
//                     <ul className="list-disc list-inside space-y-2">
//                       <li>WebAssembly will enable complex desktop applications in browsers</li>
//                       <li>AI-powered development tools will automate routine coding tasks</li>
//                       <li>Edge computing will make real-time applications more responsive</li>
//                       <li>Voice and gesture interfaces will become mainstream</li>
//                       <li>Quantum computing will influence cryptography and security</li>
//                     </ul>
//                   </div>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Developer Experience</h2>
//                   <p>
//                     The future of web development isn't just about new technologies—it's also about improving the
//                     developer experience. We're seeing improvements in:
//                   </p>
//                   <ul className="list-disc list-inside space-y-2 ml-4">
//                     <li>Build tools becoming faster and more efficient</li>
//                     <li>Better debugging and profiling tools</li>
//                     <li>AI-assisted code completion and generation</li>
//                     <li>Improved testing frameworks and methodologies</li>
//                   </ul>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Challenges Ahead</h2>
//                   <p>While the future looks exciting, there are challenges we'll need to address:</p>
//                   <ul className="list-disc list-inside space-y-2 ml-4">
//                     <li>Privacy and security concerns with increased data collection</li>
//                     <li>Performance optimization as applications become more complex</li>
//                     <li>Accessibility ensuring new technologies are inclusive</li>
//                     <li>Sustainability and the environmental impact of web technologies</li>
//                   </ul>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Preparing for the Future</h2>
//                   <p>As developers, staying current with these trends is crucial. Here's how to prepare:</p>
//                   <ul className="list-disc list-inside space-y-2 ml-4">
//                     <li>Focus on fundamental concepts that transcend specific technologies</li>
//                     <li>Experiment with emerging technologies in side projects</li>
//                     <li>Stay connected with the developer community</li>
//                     <li>Prioritize continuous learning and adaptation</li>
//                   </ul>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Conclusion</h2>
//                   <p>
//                     The future of web development is bright and full of possibilities. While we can't predict exactly
//                     what technologies will dominate, we can be sure that the web will continue to evolve, becoming more
//                     powerful, accessible, and integral to our daily lives.
//                   </p>
//                 </div>
//               </div>
//             </article>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Table of Contents */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Table of Contents</h3>
//               <nav className="space-y-2">
//                 <a
//                   href="#evolving-landscape"
//                   className="block text-sm text-muted-foreground hover:text-primary font-mono"
//                 >
//                   The Evolving Landscape
//                 </a>
//                 <a
//                   href="#emerging-technologies"
//                   className="block text-sm text-muted-foreground hover:text-primary font-mono"
//                 >
//                   Emerging Technologies
//                 </a>
//                 <a
//                   href="#framework-evolution"
//                   className="block text-sm text-muted-foreground hover:text-primary font-mono"
//                 >
//                   Framework Evolution
//                 </a>
//                 <a
//                   href="#developer-experience"
//                   className="block text-sm text-muted-foreground hover:text-primary font-mono"
//                 >
//                   Developer Experience
//                 </a>
//                 <a
//                   href="#challenges-ahead"
//                   className="block text-sm text-muted-foreground hover:text-primary font-mono"
//                 >
//                   Challenges Ahead
//                 </a>
//                 <a
//                   href="#preparing-future"
//                   className="block text-sm text-muted-foreground hover:text-primary font-mono"
//                 >
//                   Preparing for the Future
//                 </a>
//               </nav>
//             </div>

//             {/* Article Stats */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Article Stats</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Reading Time</span>
//                   <span className="font-mono">10 min</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Word Count</span>
//                   <span className="font-mono">~1,500</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Difficulty</span>
//                   <span className="font-mono text-primary">Intermediate</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Category</span>
//                   <span className="font-mono">Opinion</span>
//                 </div>
//               </div>
//             </div>

//             {/* Future Tech */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Technologies to Watch</h3>
//               <div className="space-y-3">
//                 <div className="p-3 rounded-lg bg-primary/5">
//                   <h4 className="font-semibold font-mono text-foreground text-sm">WebAssembly</h4>
//                   <p className="text-xs text-muted-foreground font-mono">High-performance web applications</p>
//                 </div>
//                 <div className="p-3 rounded-lg bg-primary/5">
//                   <h4 className="font-semibold font-mono text-foreground text-sm">Deno</h4>
//                   <p className="text-xs text-muted-foreground font-mono">Modern JavaScript runtime</p>
//                 </div>
//                 <div className="p-3 rounded-lg bg-primary/5">
//                   <h4 className="font-semibold font-mono text-foreground text-sm">Svelte</h4>
//                   <p className="text-xs text-muted-foreground font-mono">Compile-time optimized framework</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
