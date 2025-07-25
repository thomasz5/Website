import Link from "next/link"
import { ArrowLeft, Calendar, Clock, User, Share2, BookOpen } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// export default function ReactServerComponentsPage() {
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
//               <Badge className="bg-primary/20 text-primary border-primary/30">React</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Next.js</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Server Components</Badge>
//               <Badge className="bg-primary/20 text-primary border-primary/30">Web Development</Badge>
//             </div>
//             <h1 className="text-4xl md:text-5xl font-bold font-mono text-gradient">
//               Understanding React Server Components
//             </h1>
//             <p className="text-xl text-muted-foreground font-mono max-w-3xl">
//               An in-depth look at React Server Components and how they're changing the way we build web applications.
//             </p>

//             {/* Blog Meta */}
//             <div className="flex flex-wrap items-center gap-6 text-muted-foreground font-mono text-sm">
//               <div className="flex items-center gap-2">
//                 <User className="h-4 w-4" />
//                 <span>Thomas Zeng</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Calendar className="h-4 w-4" />
//                 <span>June 12, 2025</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <Clock className="h-4 w-4" />
//                 <span>8 min read</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <BookOpen className="h-4 w-4" />
//                 <span>Tutorial</span>
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
//                 src="/placeholder.svg?height=400&width=800&text=React+Server+Components"
//                 alt="React Server Components"
//                 className="w-full h-64 object-cover rounded-lg border border-primary/20"
//               />
//             </section>

//             {/* Video Section */}
//             <section className="section-gradient rounded-3xl p-8">
//               <h2 className="text-2xl font-bold font-mono text-primary mb-6">Video Explanation</h2>
//               <div className="aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
//                 <video
//                   controls
//                   className="w-full h-full object-cover"
//                   poster="/placeholder.svg?height=400&width=700&text=React+Server+Components+Tutorial"
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
//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Introduction</h2>
//                   <p>
//                     React Server Components represent a paradigm shift in how we think about building React
//                     applications. They allow us to render components on the server, reducing the JavaScript bundle size
//                     sent to the client and improving performance significantly.
//                   </p>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">What Are Server Components?</h2>
//                   <p>
//                     Server Components are a new type of React component that runs exclusively on the server. Unlike
//                     traditional React components that run in the browser, Server Components are rendered on the server
//                     and sent to the client as a serialized format.
//                   </p>

//                   <div className="card-gradient p-6 rounded-lg border border-primary/20 my-6">
//                     <h3 className="text-lg font-bold font-mono text-primary mb-3">Key Benefits</h3>
//                     <ul className="list-disc list-inside space-y-2">
//                       <li>Reduced bundle size - Server Components don't add to the client-side JavaScript bundle</li>
//                       <li>Direct database access - Can fetch data directly without API routes</li>
//                       <li>Better SEO - Content is rendered on the server</li>
//                       <li>Improved performance - Less JavaScript to download and execute</li>
//                     </ul>
//                   </div>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">How They Work</h2>
//                   <p>
//                     When a Server Component is rendered, React runs it on the server and serializes the result. This
//                     serialized representation is then sent to the client, where it's reconstructed into the virtual DOM.
//                   </p>

//                   <div className="bg-card p-6 rounded-lg border border-primary/20 my-6">
//                     <h4 className="text-primary font-mono mb-2">Example Server Component:</h4>
//                     <pre className="text-sm overflow-x-auto">
//                       <code className="text-foreground">{`// This runs on the server
// async function BlogPost({ id }) {
//   const post = await db.posts.findById(id);
  
//   return (
//     <article>
//       <h1>{post.title}</h1>
//       <p>{post.content}</p>
//     </article>
//   );
// }`}</code>
//                     </pre>
//                   </div>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Server vs Client Components</h2>
//                   <p>
//                     It's important to understand the distinction between Server and Client Components. Server Components
//                     run on the server and can't use browser-specific APIs or state. Client Components run in the browser
//                     and have access to all React features.
//                   </p>

//                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
//                     <div className="card-gradient p-4 rounded-lg border border-primary/20">
//                       <h4 className="text-primary font-mono mb-2">Server Components</h4>
//                       <ul className="text-sm space-y-1">
//                         <li>✅ Direct database access</li>
//                         <li>✅ No bundle size impact</li>
//                         <li>✅ Better performance</li>
//                         <li>❌ No state or effects</li>
//                         <li>❌ No browser APIs</li>
//                       </ul>
//                     </div>
//                     <div className="card-gradient p-4 rounded-lg border border-primary/20">
//                       <h4 className="text-primary font-mono mb-2">Client Components</h4>
//                       <ul className="text-sm space-y-1">
//                         <li>✅ Full React features</li>
//                         <li>✅ Browser APIs</li>
//                         <li>✅ State and effects</li>
//                         <li>❌ Adds to bundle size</li>
//                         <li>❌ No direct DB access</li>
//                       </ul>
//                     </div>
//                   </div>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Best Practices</h2>
//                   <p>When working with Server Components, there are several best practices to keep in mind:</p>
//                   <ul className="list-disc list-inside space-y-2 ml-4">
//                     <li>Use Server Components for data fetching and static content</li>
//                     <li>Use Client Components for interactive features</li>
//                     <li>Keep the component tree as server-heavy as possible</li>
//                     <li>Pass serializable props between server and client components</li>
//                   </ul>

//                   <h2 className="text-2xl font-bold font-mono text-primary mb-4">Conclusion</h2>
//                   <p>
//                     React Server Components are a powerful addition to the React ecosystem. They enable us to build
//                     faster, more efficient applications by moving computation to the server and reducing the client-side
//                     JavaScript bundle. As the ecosystem continues to evolve, Server Components will likely become a
//                     standard part of React development.
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
//                 <a href="#introduction" className="block text-sm text-muted-foreground hover:text-primary font-mono">
//                   Introduction
//                 </a>
//                 <a
//                   href="#what-are-server-components"
//                   className="block text-sm text-muted-foreground hover:text-primary font-mono"
//                 >
//                   What Are Server Components?
//                 </a>
//                 <a href="#how-they-work" className="block text-sm text-muted-foreground hover:text-primary font-mono">
//                   How They Work
//                 </a>
//                 <a
//                   href="#server-vs-client"
//                   className="block text-sm text-muted-foreground hover:text-primary font-mono"
//                 >
//                   Server vs Client Components
//                 </a>
//                 <a href="#best-practices" className="block text-sm text-muted-foreground hover:text-primary font-mono">
//                   Best Practices
//                 </a>
//                 <a href="#conclusion" className="block text-sm text-muted-foreground hover:text-primary font-mono">
//                   Conclusion
//                 </a>
//               </nav>
//             </div>

//             {/* Article Stats */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Article Stats</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Reading Time</span>
//                   <span className="font-mono">8 min</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Word Count</span>
//                   <span className="font-mono">~1,200</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Difficulty</span>
//                   <span className="font-mono text-primary">Intermediate</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-muted-foreground font-mono">Category</span>
//                   <span className="font-mono">Tutorial</span>
//                 </div>
//               </div>
//             </div>

//             {/* Tags */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Tags</h3>
//               <div className="flex flex-wrap gap-2">
//                 <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                   React
//                 </Badge>
//                 <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                   Next.js
//                 </Badge>
//                 <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                   Server Components
//                 </Badge>
//                 <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                   Performance
//                 </Badge>
//                 <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
//                   Web Development
//                 </Badge>
//               </div>
//             </div>

//             {/* Related Articles */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Related Articles</h3>
//               <div className="space-y-3">
//                 <Link
//                   href="/blog/accessible-web-applications"
//                   className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
//                 >
//                   <h4 className="font-semibold font-mono text-foreground text-sm">
//                     Building Accessible Web Applications
//                   </h4>
//                   <p className="text-xs text-muted-foreground font-mono">Best practices for accessibility</p>
//                 </Link>
//                 <Link
//                   href="/blog/future-web-development"
//                   className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
//                 >
//                   <h4 className="font-semibold font-mono text-foreground text-sm">The Future of Web Development</h4>
//                   <p className="text-xs text-muted-foreground font-mono">Emerging technologies and trends</p>
//                 </Link>
//               </div>
//             </div>

//             {/* Share */}
//             <div className="card-gradient rounded-2xl p-6">
//               <h3 className="text-lg font-bold font-mono text-primary mb-4">Share This Article</h3>
//               <div className="flex gap-2">
//                 <Button size="sm" variant="outline" className="flex-1 bg-transparent border-primary/30">
//                   Twitter
//                 </Button>
//                 <Button size="sm" variant="outline" className="flex-1 bg-transparent border-primary/30">
//                   LinkedIn
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
