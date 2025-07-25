import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// export default function AccessibleWebApplicationsPage() {
  
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
//               <Badge className="bg-primary/20 text-primary border-primary/30">Accessibility</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">UX/UI</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Web Standards</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Best Practices</Badge>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold font-mono text-gradient">
//               Building Accessible Web Applications
//             </h1>
//             <p className="text-xl text-muted-foreground font-mono max-w-3xl">
//               Best practices for creating web applications that are accessible to everyone, regardless of ability.
//             </p>

//             {/* Blog Meta */}
//             <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-mono text-sm">
//               <div className="flex items-center gap-2">
//                 <User className="h-4 w-4" />
//                 <span>Thomas Zeng</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4" />
//                 <span>May 28, 2025</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="h-4 w-4" />
//                 <span>12 min read</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <BookOpen className="h-4 w-4" />
//                 <span>Guide</span>
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
//                 src="/placeholder.svg?height=400&width=800&text=Web+Accessibility"
//                 alt="Web Accessibility"
//                 className="w-full h-64 object-cover rounded-lg border border-primary/20"
//               />
//             </section>

//             {/* Video Section */}
//             <section className="section-gradient rounded-3xl p-8">
//               <h2 className="text-2xl font-bold font-mono text-primary mb-6">Accessibility Demo</h2>
//               <div className="aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
//                 <video
//                   controls
//                   className="w-full h-full object-cover"
//                   poster="/placeholder.svg?height=400&width=700&text=Accessibility+Best+Practices"
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
//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Why Accessibility Matters</h2>
//                   <p>
//                     Web accessibility ensures that websites and applications are usable by people with disabilities.
//                     It's not just about compliance—it's about creating inclusive experiences that benefit everyone.
//                   </p>

//                   <div className="card-gradient p-6 rounded-lg border border-primary/20 my-6">
//                     <h3 className="text-lg font-bold font-mono text-primary mb-3">Accessibility Statistics</h3>
//                     <ul className="list-disc list-inside space-y-2">
//                       <li>Over 1 billion people worldwide have some form of disability</li>
//                       <li>15% of the global population experiences some form of disability</li>
//                       <li>Accessible websites have 50% higher revenue than non-accessible ones</li>
//                       <li>71% of users with disabilities will leave a website that's not accessible</li>
//                     </ul>
//                   </div>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">WCAG Guidelines</h2>
//                   <p>
//                     The Web Content Accessibility Guidelines (WCAG) provide a framework for making web content
//                     accessible. The guidelines are organized around four principles: Perceivable, Operable,
//                     Understandable, and Robust (POUR).
//                   </p>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
//                     <div className="card-gradient p-4 rounded-lg border border-primary/20">
//                       <h4 className="text-primary font-mono mb-2">Perceivable</h4>
//                       <p className="text-sm">Information must be presentable in ways users can perceive</p>
//                     </div>
//                     <div className="card-gradient p-4 rounded-lg border border-primary/20">
//                       <h4 className="text-primary font-mono mb-2">Operable</h4>
//                       <p className="text-sm">Interface components must be operable by all users</p>
//                     </div>
//                     <div className="card-gradient p-4 rounded-lg border border-primary/20">
//                       <h4 className="text-primary font-mono mb-2">Understandable</h4>
//                       <p className="text-sm">Information and UI operation must be understandable</p>
//                     </div>
//                     <div className="card-gradient p-4 rounded-lg border border-primary/20">
//                       <h4 className="text-primary font-mono mb-2">Robust</h4>
//                       <p className="text-sm">Content must be robust enough for various assistive technologies</p>
//                     </div>
//                   </div>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Practical Implementation</h2>
//                   <p>Here are some practical steps you can take to make your web applications more accessible:</p>

//                   <div className="bg-card p-6 rounded-lg border border-primary/20 my-6">
//                     <h4 className="text-primary font-mono mb-2">Semantic HTML Example:</h4>
//                     <pre className="text-sm overflow-x-auto">
//                       <code className="text-foreground">{`<!-- Good: Semantic HTML -->
// <nav aria-label="Main navigation">
//   <ul>
//     <li><a href="/home">Home</a></li>
//     <li><a href="/about">About</a></li>
//   </ul>
// </nav>

// <main>
//   <h1>Page Title</h1>
//   <article>
//     <h2>Article Title</h2>
//     <p>Article content...</p>
//   </article>
// </main>`}</code>
//                     </pre>
//                   </div>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Common Accessibility Issues</h2>
//                   <ul className="list-disc list-inside space-y-2 ml-4">
//                     <li>Missing alt text for images</li>
//                     <li>Poor color contrast ratios</li>
//                     <li>Keyboard navigation issues</li>
//                     <li>Missing form labels</li>
//                     <li>Inaccessible focus indicators</li>
//                     <li>Auto-playing media without controls</li>
//                   </ul>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Testing Tools</h2>
//                   <p>Regular testing is crucial for maintaining accessibility. Here are some tools that can help:</p>
//                   <ul className="list-disc list-inside space-y-2 ml-4">
//                     <li>
//                       <strong>axe DevTools</strong> - Browser extension for automated testing
//                     </li>
//                     <li>
//                       <strong>WAVE</strong> - Web accessibility evaluation tool
//                     </li>
//                     <li>
//                       <strong>Lighthouse</strong> - Built-in Chrome accessibility audit
//                     </li>
//                     <li>
//                       <strong>Screen readers</strong> - NVDA, JAWS, VoiceOver for manual testing
//                     </li>
//                   </ul>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Conclusion</h2>
//                   <p>
//                     Building accessible web applications is not just a legal requirement—it's a moral imperative. By
//                     following accessibility best practices, we create better experiences for everyone and build a more
//                     inclusive web.
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
//                   href="#why-accessibility-matters"
//                   className="block text-sm text-muted-foreground hover:text-primary font-mono"
//                 >
//                   Why Accessibility Matters
//                 </a>
//                 <a href="#wcag-guidelines" className="block text-sm text-muted-foreground hover:text-primary font-mono">
//                   WCAG Guidelines
//                 </a>
//                 <a
//                   href="#practical-implementation"
//                   className="block text-sm text-muted-foreground hover:text-primary font-mono"
//                 >
//                   Practical Implementation
//                 </a>
//                 <a href="#common-issues" className="block text-sm text-muted-foreground hover:text-primary font-mono">
//                   Common Issues
//                 </a>
//                 <a href="#testing-tools" className="block text-sm text-muted-foreground hover:text-primary font-mono">
//                   Testing Tools
//                 </a>
//               </nav>
//             </div>

//             {/* Article Stats */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Article Stats</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Reading Time</span>
//                   <span className="font-mono">12 min</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Word Count</span>
//                   <span className="font-mono">~1,800</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Difficulty</span>
//                   <span className="font-mono text-primary">Beginner</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Category</span>
//                   <span className="font-mono">Guide</span>
//                 </div>
//               </div>
//             </div>

//             {/* Resources */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Useful Resources</h3>
//               <div className="space-y-3">
//                 <a href="#" className="block p-3 rounded-lg hover:bg-primary/10 transition-colors">
//                   <h4 className="font-semibold font-mono text-foreground text-sm">WCAG 2.1 Guidelines</h4>
//                   <p className="text-xs text-muted-foreground font-mono">Official accessibility guidelines</p>
//                 </a>
//                 <a href="#" className="block p-3 rounded-lg hover:bg-primary/10 transition-colors">
//                   <h4 className="font-semibold font-mono text-foreground text-sm">A11y Project</h4>
//                   <p className="text-xs text-muted-foreground font-mono">Community-driven accessibility resources</p>
//                 </a>
//                 <a href="#" className="block p-3 rounded-lg hover:bg-primary/10 transition-colors">
//                   <h4 className="font-semibold font-mono text-foreground text-sm">WebAIM</h4>
//                   <p className="text-xs text-muted-foreground font-mono">Web accessibility training and tools</p>
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
