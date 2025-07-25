import Link from "next/link"
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { MainSidebar } from "@/components/main-sidebar"
import { TypewriterText } from "@/components/typewriter-text"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-mono">
      <div className="grid grid-cols-[auto_1fr_auto] min-h-screen">
        {/* Sidebar */}
        <MainSidebar />

        {/* Main Content */}
        <main className="overflow-x-hidden">
          {/* Hero Section */}
          <section className="py-12 md:py-24 lg:py-32 px-8 max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-mono">
                  Hi, I'm <span className="text-gradient">Thomas Zeng</span>
                </h1>
                <div className="text-xl text-muted-foreground font-mono min-h-[3rem]">
                  <TypewriterText
                    text="University of Washington student specializing in Applied & Computational Mathematical Sciences"
                    speed={30}
                  />
                </div>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" asChild className="font-mono purple-glow">
                    <Link href="#projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="font-mono bg-transparent border-primary/30 hover:border-primary"
                  >
                    <Link href="/resume.pdf" target="_blank">
                      Download CV <Download className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex gap-4 pt-4">
                  <Link href="https://github.com/thomasz5" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                      <Github className="h-5 w-5" />
                      <span className="sr-only">GitHub</span>
                    </Button>
                  </Link>
                  <Link href="https://www.linkedin.com/in/thomasz5" target="_blank" rel="noopener noreferrer">
                    <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                      <Linkedin className="h-5 w-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:thomaszeng05@gmail.com">
                    <Button size="icon" variant="ghost" className="hover:bg-primary/20">
                      <Mail className="h-5 w-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="relative w-[280px] h-[280px] md:w-[320px] md:h-[320px] rounded-full overflow-hidden border-4 border-primary purple-glow">
                  <img
                    src="/placeholder.svg?height=320&width=320"
                    alt="Thomas Zeng"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-12 md:py-24 lg:py-32 px-8 max-w-7xl mx-auto section-gradient rounded-3xl my-12"
          >
            <div className="space-y-6 md:space-y-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono text-gradient">
                  About Me
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent"></div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                <div>
                  <img
                    src="/placeholder.svg?height=400&width=600"
                    alt="About Me"
                    className="rounded-lg object-cover w-full h-auto border border-primary/20"
                  />
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold font-mono text-primary">Who I Am</h3>
                  <p className="text-muted-foreground font-mono">
                    I'm an aspiring software engineer and current student at the University of Washington, studying
                    Applied & Computational Mathematical Sciences. I'm passionate about leveraging quantitative skills
                    to solve real-world problems.
                  </p>
                  <p className="text-muted-foreground font-mono">
                    My interest in software development sparked during my time at Tri Counties Bank, where I automated
                    tedious tasks using Python. Since then, I've been exploring various areas of computer science,
                    including machine learning, algorithmic trading, and full-stack development.
                  </p>
                  <p className="text-muted-foreground font-mono">
                    Outside of academics and professional pursuits, I enjoy playing poker, watching basketball, and
                    exploring new technologies.
                  </p>
                  <div className="pt-4">
                    <Button asChild className="font-mono purple-glow">
                      <Link href="#contact">Get In Touch</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 md:py-24 lg:py-32">
            <div className="px-8 max-w-7xl mx-auto space-y-6 md:space-y-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono text-gradient">
                  My Projects
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent"></div>
                <p className="text-xl text-muted-foreground max-w-[800px] font-mono">
                  Here are some of my recent projects. Each one presented unique challenges and opportunities for
                  growth.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <ProjectCard
                  title="Catan Settlement Optimization Simulator"
                  description="A full-stack Python based Catan board simulation with dynamic visualization and computer vision pipeline using OpenCV and OCR."
                  tags={["Python", "OpenCV", "Flask", "PostgreSQL"]}
                  imageUrl="/placeholder.svg?height=300&width=500"
                  projectUrl="https://github.com/thomasz5"
                  slug="catan-simulator"
                />
                <ProjectCard
                  title="Husky Hold'em"
                  description="Organized and developed Husky Hold'em Coding Competition and Website, securing $6500 worth of sponsorship support."
                  tags={["JavaScript", "HTML/CSS", "Event Management"]}
                  imageUrl="/placeholder.svg?height=300&width=500"
                  projectUrl="https://github.com/thomasz5"
                  slug="husky-holdem"
                />
                <ProjectCard
                  title="Option Strategies Research Paper"
                  description="Research paper in financial mathematics, deriving mathematical axioms and configuring Black-Scholes Model for iron condor strategies."
                  tags={["Mathematical Modeling", "Financial Analysis", "ThinkorSwim"]}
                  imageUrl="/placeholder.svg?height=300&width=500"
                  projectUrl="https://github.com/thomasz5"
                  slug="option-strategies"
                />
              </div>
              <div className="flex justify-center pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="font-mono bg-transparent border-primary/30 hover:border-primary"
                >
                  <Link href="https://github.com/thomasz5" target="_blank" rel="noopener noreferrer">
                    View More on GitHub <Github className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Blog Section */}
          <section
            id="blog"
            className="py-12 md:py-24 lg:py-32 px-8 max-w-7xl mx-auto section-gradient rounded-3xl my-12"
          >
            <div className="space-y-6 md:space-y-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono text-gradient">
                  Blog
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent"></div>
                <p className="text-xl text-muted-foreground max-w-[800px] font-mono">
                  Thoughts, tutorials, and insights about web development and technology.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Blog post cards */}
                <Link
                  href="/blog/react-server-components"
                  className="card-gradient rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Blog post"
                      className="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground font-mono">June 12, 2025</p>
                    <h3 className="text-xl font-bold mt-2 font-mono text-primary hover:text-primary/80 transition-colors">
                      Understanding React Server Components
                    </h3>
                    <p className="text-muted-foreground mt-2 font-mono">
                      An in-depth look at React Server Components and how they're changing the way we build web
                      applications.
                    </p>
                    <span className="text-primary font-medium mt-4 inline-block hover:underline font-mono">
                      Read More
                    </span>
                  </div>
                </Link>

                <Link
                  href="/blog/accessible-web-applications"
                  className="card-gradient rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Blog post"
                      className="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground font-mono">May 28, 2025</p>
                    <h3 className="text-xl font-bold mt-2 font-mono text-primary hover:text-primary/80 transition-colors">
                      Building Accessible Web Applications
                    </h3>
                    <p className="text-muted-foreground mt-2 font-mono">
                      Best practices for creating web applications that are accessible to everyone, regardless of
                      ability.
                    </p>
                    <span className="text-primary font-medium mt-4 inline-block hover:underline font-mono">
                      Read More
                    </span>
                  </div>
                </Link>

                <Link
                  href="/blog/future-web-development"
                  className="card-gradient rounded-lg overflow-hidden shadow-sm hover:shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <div className="aspect-video w-full overflow-hidden">
                    <img
                      src="/placeholder.svg?height=300&width=500"
                      alt="Blog post"
                      className="h-full w-full object-cover hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-sm text-muted-foreground font-mono">April 15, 2025</p>
                    <h3 className="text-xl font-bold mt-2 font-mono text-primary hover:text-primary/80 transition-colors">
                      The Future of Web Development
                    </h3>
                    <p className="text-muted-foreground mt-2 font-mono">
                      Exploring emerging technologies and trends that will shape the future of web development.
                    </p>
                    <span className="text-primary font-medium mt-4 inline-block hover:underline font-mono">
                      Read More
                    </span>
                  </div>
                </Link>
              </div>
              <div className="flex justify-center pt-8">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="font-mono bg-transparent border-primary/30 hover:border-primary"
                >
                  <Link href="#">
                    View All Posts <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Resume Section */}
          <section id="resume" className="py-12 md:py-24 lg:py-32 px-8 max-w-7xl mx-auto">
            <div className="space-y-6 md:space-y-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono text-gradient">
                  Resume
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent"></div>
                <p className="text-xl text-muted-foreground max-w-[800px] font-mono">
                  My professional experience and education.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Experience */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-mono text-primary">Experience</h3>

                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4 space-y-2 card-gradient p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-semibold font-mono text-foreground">Project Management Intern</h4>
                        <span className="text-sm text-muted-foreground font-mono">June 2024 – Sept. 2024</span>
                      </div>
                      <p className="font-medium font-mono text-primary">Tri Counties Bank</p>
                      <p className="text-muted-foreground font-mono">
                        Configured NetBox in Azure sandbox environment to inventory 80 network and server hardware;
                        secured REST API integration using Java for real-time data tracking.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4 space-y-2 card-gradient p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-semibold font-mono text-foreground">
                          Machine Learning Student Researcher
                        </h4>
                        <span className="text-sm text-muted-foreground font-mono">Dec. 2023 – May 2024</span>
                      </div>
                      <p className="font-medium font-mono text-primary">Data Analysis & Intelligent Systems</p>
                      <p className="text-muted-foreground font-mono">
                        Implemented RASA NLU model and dialogue management system to handle complex user queries, using
                        Python to generate personalized responses.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-4 space-y-2 card-gradient p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-semibold font-mono text-foreground">Co-Author</h4>
                        <span className="text-sm text-muted-foreground font-mono">Sept. 2023 – March 2024</span>
                      </div>
                      <p className="font-medium font-mono text-primary">Option Strategies Research Paper</p>
                      <p className="text-muted-foreground font-mono">
                        Working research paper in financial mathematics, rigorously deriving 7 mathematical axioms and
                        configuring Black-Scholes Model.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-6">
                  <h3 className="text-2xl font-bold font-mono text-primary">Education</h3>

                  <div className="space-y-6">
                    <div className="border-l-4 border-primary pl-4 space-y-2 card-gradient p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-semibold font-mono text-foreground">
                          University of Washington - Seattle
                        </h4>
                        <span className="text-sm text-muted-foreground font-mono">Graduating: June 2026</span>
                      </div>
                      <p className="font-medium font-mono text-primary">
                        B.S. Applied & Computational Mathematical Sciences
                      </p>
                      <p className="text-muted-foreground font-mono">Discrete Mathematics and Algorithms</p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h3 className="text-2xl font-bold mb-4 font-mono text-primary">Leadership</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="font-mono">Co-President of Algorithmic Trading Club</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span className="font-mono">Grew member count by over 300% in 2 months</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex justify-center pt-8">
                <Button size="lg" asChild className="font-mono purple-glow">
                  <Link href="/resume.pdf" target="_blank">
                    Download Full Resume <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-12 md:py-24 lg:py-32 section-gradient rounded-3xl my-12">
            <div className="px-8 max-w-7xl mx-auto space-y-6 md:space-y-12">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-mono text-gradient">
                  My Skills
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent"></div>
                <p className="text-xl text-muted-foreground max-w-[800px] font-mono">
                  I've worked with a variety of technologies and methodologies throughout my career.
                </p>
              </div>
              <div className="space-y-8">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-mono text-primary">Coding Languages</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Java" />
                    <SkillBadge name="Python" />
                    <SkillBadge name="HTML/CSS" />
                    <SkillBadge name="JavaScript" />
                    <SkillBadge name="SQL" />
                    <SkillBadge name="MATLAB" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-mono text-primary">Web Technology</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="JavaScript" />
                    <SkillBadge name="TypeScript" />
                    <SkillBadge name="Django" />
                    <SkillBadge name="ReactJS" />
                    <SkillBadge name="Docker" />
                    <SkillBadge name="OpenCV" />
                    <SkillBadge name="OCR" />
                    <SkillBadge name="Git" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-mono text-primary">Relevant Courses</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Data Structures & Algorithms" />
                    <SkillBadge name="Discrete Mathematics" />
                    <SkillBadge name="Computer Systems & Assembly" />
                    <SkillBadge name="Operating Systems" />
                    <SkillBadge name="Software Design & Implementation" />
                    <SkillBadge name="Database Systems" />
                    <SkillBadge name="Machine Learning" />
                    <SkillBadge name="Web Development" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="border-t border-primary/20 py-8 md:py-12">
            <div className="px-8 max-w-7xl mx-auto flex flex-col items-center justify-center gap-4 text-center">
              <p className="text-sm text-muted-foreground font-mono">© 2025 Thomas Zeng. All rights reserved.</p>
            </div>
          </footer>
        </main>

        {/* Right Spacer - matches sidebar width automatically */}
        <div className="w-[var(--sidebar-width)] hidden md:block"></div>
      </div>
    </div>
  )
}
