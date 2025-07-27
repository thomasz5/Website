import Link from "next/link"
import { ArrowRight, Download, Github } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { MainSidebar } from "@/components/main-sidebar"
import { TypewriterText } from "@/components/typewriter-text"
import { InteractiveBackground } from "@/components/interactive-background"

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-mono">
      <div className="grid grid-cols-[auto_1fr_auto] min-h-screen">
        {/* Sidebar */}
        <MainSidebar />

        {/* Main Content */}
        <main className="overflow-x-hidden relative">
          <InteractiveBackground />

          {/* Hero Section */}
          <section className="py-12 md:py-24 px-8 max-w-7xl mx-auto text-center lg:py-72 relative z-10">
            <div className="flex flex-col gap-8 md:gap-12 items-center md:flex-col">
              <div className="flex-1 space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl font-mono">
                  Hi, I'm <span className="text-gradient">Thomas</span>
                </h1>
                <div className="text-xl text-muted-foreground font-mono min-h-[3rem] pr-[13px]">
                  <TypewriterText
text="UW ACMS and Informatics Student "
                    speed={20}
                  />
                </div>
                <div className="flex flex-col gap-3 pt-4 text-center items-center sm:flex-col">
                  <Button size="lg" asChild className="font-mono purple-glow text-left">
                    <Link href="#projects">
                      View My Work <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="flex-1 flex justify-center"></div>
            </div>
          </section>

          {/* About Section */}
          <section
            id="about"
            className="py-12 md:py-24 lg:py-32 px-8 max-w-7xl mx-auto section-gradient rounded-3xl my-12 relative z-10"
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
                    I'm a aspiring Software Engineer and at the University of Washington, 
                    pursuing a dual degree in Applied & Computational Mathematical Sciences and Informatics. I'm passionate 
                    about leveraging AI and quantitative skills to solve complex real-world problems.
                  </p>
                  <p className="text-muted-foreground font-mono">
                    My experience spans from building AI-powered gaming platforms and fitness chatbots to developing 
                    autonomous poker systems. I've led research initiatives in machine learning, developed full-stack 
                    applications, and contributed to open-source frameworks at the University of Washington.
                  </p>
                  <p className="text-muted-foreground font-mono">
                  Outside of academics and professional pursuits, I enjoy playing poker, swimming, and exploring new technologies!
                  </p>
                  <div className="pt-4">
                    <Button asChild className="font-mono purple-glow">
                      <Link href="mailto:thomasz@uw.edu">Get In Touch</Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section id="projects" className="py-12 md:py-24 lg:py-32 relative z-10">
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
                  title="Dr. Mike AI Fitness Chatbot"
                  description="AI chatbot mimicking fitness expert communication style."
                  tags={["Python", "PyTorch", "Redis", "Docker", "HuggingFace", "React", "Supabase", "PostgreSQL"]}
                  imageUrl="/placeholder.svg?height=300&width=500"
                  projectUrl="https://github.com/thomasz5"
                  slug="dr-mike-ai"
                />
                <ProjectCard
                  title="Autonomous Poker Bot"
                  description="AI poker system achieving 2.1 BB/100 win rate."
                  tags={["Python", "SQL", "JavaScript", "PyTorch", "PostgreSQL", "Redis", "Docker"]}
                  imageUrl="/placeholder.svg?height=300&width=500"
                  projectUrl="https://github.com/thomasz5"
                  slug="poker-bot"
                />
                <ProjectCard
                  title="Catan Settlement Optimization Simulator"
                  description="Full-stack Catan board simulation with computer vision pipeline."
                  tags={["Python", "OpenCV", "Flask", "PostgreSQL"]}
                  imageUrl="/placeholder.svg?height=300&width=500"
                  projectUrl="https://github.com/thomasz5"
                  slug="catan-simulator"
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
            className="py-12 md:py-24 lg:py-32 px-8 max-w-7xl mx-auto section-gradient rounded-3xl my-12 relative z-10"
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
          <section id="resume" className="py-8 md:py-16 lg:py-20 px-8 max-w-7xl mx-auto relative z-10">
            <div className="space-y-4 md:space-y-8">
              <div className="flex flex-col items-center space-y-4 text-center">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl font-mono text-gradient">
                  Resume
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent"></div>
                <p className="text-lg text-muted-foreground max-w-[800px] font-mono">
                  My professional experience and education.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Experience */}
                                  <div className="space-y-4">
                    <h3 className="text-xl font-bold font-mono text-primary">Experience</h3>

                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-3 space-y-1 card-gradient p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold font-mono text-foreground">Co-Founder & CTO</h4>
                        <span className="text-xs text-muted-foreground font-mono">May 2025 – Present</span>
                      </div>
                      <p className="text-sm font-medium font-mono text-primary">CatanAI, Inc.</p>
                      <p className="text-sm text-muted-foreground font-mono">
                        Founded AI-powered Catan strategy platform.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-3 space-y-1 card-gradient p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold font-mono text-foreground">
                          Research Developer
                        </h4>
                        <span className="text-xs text-muted-foreground font-mono">Dec. 2024 – Apr. 2025</span>
                      </div>
                      <p className="text-sm font-medium font-mono text-primary">Pneel – University of Washington</p>
                      <p className="text-sm text-muted-foreground font-mono">
                        Built Array Framework core and automated docs generation.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-3 space-y-1 card-gradient p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold font-mono text-foreground">Project Management Intern</h4>
                        <span className="text-xs text-muted-foreground font-mono">June 2024 – Sept. 2024</span>
                      </div>
                      <p className="text-sm font-medium font-mono text-primary">Tri Counties Bank</p>
                      <p className="text-sm text-muted-foreground font-mono">
                        Configured NetBox project in Azure and built Flask microservices.
                      </p>
                    </div>

                    <div className="border-l-4 border-primary pl-3 space-y-1 card-gradient p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold font-mono text-foreground">
                          ML Researcher
                        </h4>
                        <span className="text-xs text-muted-foreground font-mono">Dec. 2023 – May 2024</span>
                      </div>
                      <p className="text-sm font-medium font-mono text-primary">iCare – University of Washington</p>
                      <p className="text-sm text-muted-foreground font-mono">
                        Implemented RASA NLU model and dialogue management system.
                      </p>
                    </div>

                    {/* <div className="border-l-4 border-primary pl-4 space-y-2 card-gradient p-4 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="text-xl font-semibold font-mono text-foreground">Co-President</h4>
                        <span className="text-sm text-muted-foreground font-mono">Sept. 2023 – Dec. 2024</span>
                      </div>
                      <p className="font-medium font-mono text-primary">Algorithmic Trading Club</p>
                      <p className="text-muted-foreground font-mono">
                        Co-President and organized Husky Hold'em Coding Competition.
                      </p>
                    </div> */}
                  </div>
                </div>

                {/* Education */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-mono text-primary">Education</h3>

                  <div className="space-y-4">
                    <div className="border-l-4 border-primary pl-3 space-y-1 card-gradient p-3 rounded-lg">
                      <div className="flex justify-between items-center">
                        <h4 className="text-lg font-semibold font-mono text-foreground">
                          University of Washington
                        </h4>
                        <span className="text-xs text-muted-foreground font-mono">June 2027</span>
                      </div>
                      <p className="text-sm font-medium font-mono text-primary">
                        B.S. ACMS and Informatics
                      </p>
                      <p className="text-sm text-muted-foreground font-mono">Seattle, WA</p>
                    </div>
                  </div>

                  {/* <div className="pt-6">
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
                  </div> */}
                </div>
              </div>

              <div className="flex justify-center pt-6">
                <Button asChild className="font-mono purple-glow">
                  <Link href="/Resume-Thomas-Zeng.pdf" target="_blank">
                    Download Resume <Download className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section id="skills" className="py-12 md:py-24 lg:py-32 section-gradient rounded-3xl my-12 relative z-10">
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
                    <SkillBadge name="JavaScript" />
                    <SkillBadge name="TypeScript" />
                    <SkillBadge name="SQL" />
                    <SkillBadge name="MATLAB" />
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold font-mono text-primary">Frameworks & Libraries</h3>
                  <div className="flex flex-wrap gap-2">
                    <SkillBadge name="Flask" />
                    <SkillBadge name="React.js" />
                    <SkillBadge name="TailwindCSS" />
                    <SkillBadge name="WebSocket libraries" />
                    <SkillBadge name="D3.js" />
                    <SkillBadge name="OpenCV" />
                    <SkillBadge name="TesseractOCR" />
                    <SkillBadge name="PyTorch" />
                    <SkillBadge name="HuggingFace" />
                    <SkillBadge name="RasaNLU" />
                    <SkillBadge name="Docker" />
                    <SkillBadge name="AzureSDK" />
                    <SkillBadge name="Redis" />
                    <SkillBadge name="Supabase" />
                    <SkillBadge name="PostgreSQL" />
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
          <footer className="border-t border-primary/20 py-8 md:py-12 relative z-10">
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
