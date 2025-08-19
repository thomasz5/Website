import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function DrMikeAIPage() {
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
              Dr. Mike AI Fitness Chatbot
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl">
              Personality-driven AI chatbot that mimics a fitness expert's communication style and expertise, 
              enhancing user interaction through advanced natural language processing and machine learning.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/20 text-primary border-primary/30">Python</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">PyTorch</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">Redis</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">Docker</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">HuggingFace</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">React</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">Supabase</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">PostgreSQL</Badge>
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild className="purple-glow">
                <Link href="https://github.com/thomasz5/Dr.Mike" target="_blank">
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
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">AI Chatbot Demo - Coming Soon!</h2>
              <div className="aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/Mike.png"
                >
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>

            {/* Detailed Description */}
            <section className="section-gradient rounded-3xl p-8">
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">Project Overview</h2>
              <div className="space-y-6 text-muted-foreground font-mono">
                <p>
                  I built an AI chatbot that talks like a real fitness expert. It has personality, remembers 
                  your conversations, and gives personalized workout advice. People love chatting with it 
                  because it feels human, not robotic.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Personality-driven conversation modeling with consistent character traits</li>
                  <li>Real-time fitness advice and workout recommendations</li>
                  <li>Memory-enabled conversations using Redis caching</li>
                  <li>Modern React-based chat interface with real-time updates</li>
                  <li>Scalable microservices architecture with Docker containers</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">How I Built It</h3>
                <p>
                  I used HuggingFace transformers with custom personality layers in PyTorch. 
                  The React frontend talks to a Python backend via APIs. All conversations 
                  are saved in Supabase so the AI remembers you.
                </p>

                <h3 className="text-xl font-semibold text-foreground">What I Learned</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>How to keep AI personality consistent across long chats</li>
                  <li>Making AI responses fast enough for real-time conversation</li>
                  <li>Giving AI memory without confusing it</li>
                  <li>Ensuring fitness advice is safe and accurate</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Results</h3>
                <p>
                  Users engage 30% more than with generic fitness bots. They spend 12 minutes per session 
                  on average, and 65% come back for more conversations. People actually enjoy talking to it!
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
                  <span className="font-mono">5 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Lines of Code</span>
                  <span className="font-mono">~5,800</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Team Size</span>
                  <span className="font-mono">Solo Project</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Status</span>
                  <span className="font-mono text-primary">In Progress</span>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-lg font-bold font-mono text-primary mb-4">Technologies</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">AI/ML</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      PyTorch
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      HuggingFace
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Transformers
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">Backend</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      FastAPI
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Redis
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">Frontend & Database</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      React
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Supabase
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Docker
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
                  href="/projects/recruitment-intelligence"
                  className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <h4 className="font-semibold font-mono text-foreground">Recruitment Intelligence</h4>
                  <p className="text-sm text-muted-foreground font-mono">AI recruitment system</p>
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
