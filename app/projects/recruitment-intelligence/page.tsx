import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function RecruitmentIntelligencePage() {
  return (
    <div className="min-h-screen bg-background font-mono">
      <div className="max-w-7xl mx-auto px-8 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild className="hover:bg-primary/20">
            <Link href="/#projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>

        {/* Project Header */}
        <div className="space-y-6 mb-12">
          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-bold font-mono text-gradient">
              Automated Recruitment Intelligence System
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl">
              AI-powered internship recruitment system that automates candidate screening, matching, and evaluation 
              using machine learning and natural language processing.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/20 text-primary border-primary/30">Python</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">Machine Learning</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">NLP</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">PostgreSQL</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">Docker</Badge>
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild className="purple-glow">
                <Link href="https://github.com/thomasz5/Internship-Filter" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-primary/30 hover:border-primary bg-transparent">
                <Link href="#" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Project Demo */}
            <section className="section-gradient rounded-3xl p-8">
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">System Demo</h2>
              <div className="aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/Recruitment.png"
                >
                  <source src="/Recruitment.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>

            {/* Detailed Description */}
            <section className="section-gradient rounded-3xl p-8">
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">Project Overview</h2>
              <div className="space-y-6 text-muted-foreground font-mono">
                <p>
                  Built a Python-based web scraping system that processes 100+ internship opportunities weekly. 
                  I deployed this on AWS EC2 with 3-hour monitoring cycles, cutting manual job search time by 50%. 
                  The system uses NLP to automatically screen and rank candidates.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Automated resume parsing and skill extraction using NLP</li>
                  <li>Real-time dashboard for recruitment analytics</li>
                  <li>Scalable and efficient system design</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">How I Built It</h3>
                <p>
                  I used NLP to extract key info from resumes and job posts. Then I trained ML models to predict 
                  which candidates would succeed. Everything runs in Docker containers, making it easy to deploy anywhere.
                </p>

                <h3 className="text-xl font-semibold text-foreground">What I Learned</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>How to parse messy resume formats and extract clean data</li>
                  <li>Building fair AI models that don't discriminate</li>
                  <li>Making algorithms fast enough for thousands of candidates</li>
                  <li>Keeping user data private and secure</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Results</h3>
                <p>
                  The system processes 100+ job opportunities every week and saves recruiters 50% of their 
                  manual search time. It's running 24/7 on AWS, automatically finding the best matches.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Project Stats */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-lg font-bold font-mono text-primary mb-4">Project Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Duration</span>
                  <span className="font-mono">2 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Lines of Code</span>
                  <span className="font-mono">~2,200</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Team Size</span>
                  <span className="font-mono">1 developer</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Status</span>
                  <span className="font-mono text-primary">Production</span>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-lg font-bold font-mono text-primary mb-4">Technologies</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Flask
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      PostgreSQL
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">Machine Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      scikit-learn
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      spaCy
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      TensorFlow
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">Infrastructure</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Docker
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Redis
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      AWS
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Related Projects */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-lg font-bold font-mono text-primary mb-4">Related Projects</h3>
              <div className="space-y-3">
                <Link
                  href="/projects/dr-mike-ai"
                  className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <h4 className="font-semibold font-mono text-foreground">Dr. Mike AI Chatbot</h4>
                  <p className="text-sm text-muted-foreground font-mono">AI fitness expert chatbot</p>
                </Link>
                <Link
                  href="/projects/poker-bot"
                  className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <h4 className="font-semibold font-mono text-foreground">Autonomous Poker Bot</h4>
                  <p className="text-sm text-muted-foreground font-mono">AI poker strategy system</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 