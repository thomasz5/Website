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
              Research-grade poker AI with a modular engine, ML pipeline, and data tooling. The system
              combines fast hand evaluation, rule-consistent game flow, and neural/heuristic policy heads
              with opponent-aware features.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/20 text-primary border-primary/30">Python</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">PyTorch</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">scikit-learn</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">PostgreSQL</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">FastAPI </Badge>
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild className="purple-glow">
                <Link href="https://github.com/https://github.com/thomasz5/Poker-bot" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-primary/30 hover:border-primary bg-transparent">
                <Link href="#" target="_blank">
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo (coming soon)
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
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">Poker Bot Demo</h2>
              <div className="aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/bender-futurama-poker.jpg"
                >
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Coming Soon!
                </video>
              </div>
            </section>

            {/* Detailed Description */}
            <section className="section-gradient rounded-3xl p-8">
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">Project Overview</h2>
              <div className="space-y-6 text-muted-foreground font-mono">
                <p>
                  The engine implements legal action validation, street progression, blind posting,
                  and pot tracking. The evaluator supports hand ranking and equity proxies with
                  correctness-focused tests. The ML layer offers both a lightweight RandomForest
                  baseline and a PyTorch MLP with a sizing head.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Rule-consistent game flow (preflop → showdown) with action validation</li>
                  <li>Fast 5–7 card evaluation with duplicate-card detection and kicker tie-breaks</li>
                  <li>Neural and classic ML predictors with legal-action masking</li>
                  <li>Hand history parsing and feature extraction for training datasets</li>
                  <li>Extensive tests: unit, integration, and scenario-based</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">How I Built It</h3>
                <p>
                  Core in Python. PyTorch for neural models; scikit-learn for the baseline. SQLAlchemy
                  schemas for data storage. Tests via pytest. The code emphasizes clarity, correctness,
                  and forward-compatibility in data schemas and APIs.
                </p>

                <h3 className="text-xl font-semibold text-foreground">What I Learned</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>When to play perfect math vs. exploiting weak players</li>
                  <li>Processing millions of poker hands without crashing servers</li>
                  <li>Making split-second decisions under pressure</li>
                  <li>Managing poker variance to stay profitable long-term</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Results</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Test suite: <span className="text-foreground font-semibold">100 passed</span></li>
                  <li>Recent engine fixes: raise semantics, betting-round completion, total pot tracking</li>
                  <li>Evaluator upgrades: suit handling (int/char), preflop strength heuristic, compare helper</li>
                  <li>ML robustness: tensor/ndarray inputs, zero-amount safety fallback, class-prob alignment</li>
                  <li>Data pipeline: flexible GameContext, resilient hero/action extraction</li>
                </ul>
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
                  <span className="font-mono">Ongoing</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Lines of Code (tracked)</span>
                  <span className="font-mono">~7,250 total</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Status</span>
                  <span className="font-mono text-primary">Green</span>
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
                  <h4 className="font-semibold font-mono text-foreground mb-2">Engine & Data</h4>
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
                  <h4 className="font-semibold font-mono text-foreground mb-2">Tooling</h4>
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
                  <span className="text-muted-foreground font-mono">Eval speed (unit)</span>
                  <span className="font-mono">~3000 evals/s (test)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Decision latency</span>
                  <span className="font-mono">sub-50ms target</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Reliability</span>
                  <span className="font-mono">100/100 tests</span>
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
