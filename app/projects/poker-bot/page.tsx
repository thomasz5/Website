import Link from "next/link"
import { ArrowLeft, Github, ExternalLink, Play } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function PokerBotPage() {
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
              Autonomous Poker Bot
            </h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl">
              Sophisticated poker AI system that achieved a 2.1 BB/100 win rate against players through 
              a multi-stage machine learning pipeline combining game theory optimal strategies and opponent modeling.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/20 text-primary border-primary/30">Python</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">SQL</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">JavaScript</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">PyTorch</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">PostgreSQL</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">Redis</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">Docker</Badge>
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild className="purple-glow">
                <Link href="https://github.com/thomasz5" target="_blank">
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
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">Poker Bot Simulator</h2>
              <div className="aspect-video bg-card rounded-lg border border-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <Play className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-mono">AI Poker Strategy Simulator</p>
                  <Button className="purple-glow">Launch Simulation</Button>
                </div>
              </div>
            </section>

            {/* Project Video */}
            <section className="section-gradient rounded-3xl p-8">
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">Strategy Analysis Demo</h2>
              <div className="aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg?height=400&width=700&text=Poker+Bot+Demo"
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
                  The Autonomous Poker Bot is an advanced AI system that combines game theory optimal (GTO) strategies 
                  with machine learning-based opponent modeling to achieve consistent profitability in online poker games. 
                  The system processes millions of hands to identify optimal play patterns.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Game Theory Optimal (GTO) strategy implementation using Nash equilibrium calculations</li>
                  <li>Machine learning opponent modeling with behavioral pattern recognition</li>
                  <li>Real-time hand evaluation and betting decision algorithms</li>
                  <li>Statistical analysis dashboard with performance metrics tracking</li>
                  <li>Risk management system with bankroll protection mechanisms</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Technical Implementation</h3>
                <p>
                  The system uses PyTorch neural networks for opponent classification and hand strength evaluation, 
                  combined with a PostgreSQL database storing millions of hand histories for pattern analysis. 
                  Redis caching ensures sub-second decision making during live play.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Challenges Overcome</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Balancing GTO play with exploitative strategies against weak opponents</li>
                  <li>Processing massive datasets of poker hands for training and analysis</li>
                  <li>Implementing real-time decision making under strict time constraints</li>
                  <li>Managing variance and ensuring long-term profitability</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Performance Results</h3>
                <p>
                  Over 50,000 hands played, the bot achieved a consistent 2.1 BB/100 win rate with 95% confidence 
                  intervals. The system successfully identified and exploited over 200 unique opponent patterns, 
                  demonstrating robust performance across different game conditions.
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
                  <span className="font-mono">8 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Lines of Code</span>
                  <span className="font-mono">~4,500</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Win Rate</span>
                  <span className="font-mono text-primary">2.1 BB/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Status</span>
                  <span className="font-mono text-primary">Profitable</span>
                </div>
              </div>
            </div>

            {/* Technologies Used */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-lg font-bold font-mono text-primary mb-4">Technologies</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">Machine Learning</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      PyTorch
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      scikit-learn
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      NumPy
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">Backend & Database</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      PostgreSQL
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Redis
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
                      JavaScript
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      SQL
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Metrics */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-lg font-bold font-mono text-primary mb-4">Performance Metrics</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Hands Played</span>
                  <span className="font-mono">50,000+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Win Rate</span>
                  <span className="font-mono text-primary">2.1 BB/100</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Confidence</span>
                  <span className="font-mono">95%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">ROI</span>
                  <span className="font-mono text-primary">+$100</span>
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
                  href="/projects/dr-mike-ai"
                  className="block p-3 rounded-lg hover:bg-primary/10 transition-colors"
                >
                  <h4 className="font-semibold font-mono text-foreground">Dr. Mike AI Chatbot</h4>
                  <p className="text-sm text-muted-foreground font-mono">AI fitness expert chatbot</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
