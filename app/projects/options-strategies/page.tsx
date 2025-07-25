import Link from "next/link"
import { ArrowLeft, Github, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function OptionStrategiesPage() {
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
            <h1 className="text-4xl md:text-5xl font-bold font-mono text-gradient">Option Strategies Research Paper</h1>
            <p className="text-xl text-muted-foreground font-mono max-w-3xl">
              Research paper in financial mathematics, deriving mathematical axioms and configuring Black-Scholes Model
              for iron condor strategies.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-primary/20 text-primary border-primary/30">Mathematical Modeling</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">Financial Analysis</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">ThinkorSwim</Badge>
              <Badge className="bg-primary/20 text-primary border-primary/30">Python</Badge>
            </div>
            <div className="flex gap-4 pt-4">
              <Button asChild className="purple-glow">
                <Link href="#" target="_blank">
                  <FileText className="mr-2 h-4 w-4" />
                  Read Paper
                </Link>
              </Button>
              <Button variant="outline" asChild className="border-primary/30 hover:border-primary bg-transparent">
                <Link href="https://github.com/thomasz5" target="_blank">
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Research Demo */}
            <section className="section-gradient rounded-3xl p-8">
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">Interactive Model</h2>
              <div className="aspect-video bg-card rounded-lg border border-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <p className="text-muted-foreground font-mono">Black-Scholes Model Visualization</p>
                  <Button className="purple-glow">Launch Calculator</Button>
                </div>
              </div>
            </section>

            {/* Research Presentation */}
            <section className="section-gradient rounded-3xl p-8">
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">Research Presentation</h2>
              <div className="aspect-video bg-card rounded-lg border border-primary/20 overflow-hidden">
                <video
                  controls
                  className="w-full h-full object-cover"
                  poster="/placeholder.svg?height=400&width=700&text=Option+Strategies+Presentation"
                >
                  <source src="/placeholder-video.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </section>

            {/* Detailed Description */}
            <section className="section-gradient rounded-3xl p-8">
              <h2 className="text-2xl font-bold font-mono text-primary mb-6">Research Overview</h2>
              <div className="space-y-6 text-muted-foreground font-mono">
                <p>
                  This research paper explores the mathematical foundations of option trading strategies, specifically
                  focusing on iron condor strategies and their optimization using the Black-Scholes model.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Research Contributions</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Derived 7 fundamental mathematical axioms for option pricing</li>
                  <li>Extended Black-Scholes model for complex multi-leg strategies</li>
                  <li>Developed optimization algorithms for iron condor positioning</li>
                  <li>Created risk assessment framework for volatility trading</li>
                  <li>Validated theoretical models with real market data</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Mathematical Framework</h3>
                <p>
                  The research establishes a rigorous mathematical foundation for analyzing iron condor strategies,
                  incorporating volatility surfaces, time decay, and market microstructure effects. The extended
                  Black-Scholes framework accounts for real-world trading constraints and transaction costs.
                </p>

                <h3 className="text-xl font-semibold text-foreground">Key Findings</h3>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Optimal strike selection based on implied volatility skew</li>
                  <li>Time-to-expiration effects on strategy profitability</li>
                  <li>Risk-adjusted return optimization techniques</li>
                  <li>Market regime identification for strategy deployment</li>
                </ul>

                <h3 className="text-xl font-semibold text-foreground">Practical Applications</h3>
                <p>
                  The research provides actionable insights for quantitative traders and risk managers, offering
                  systematic approaches to options strategy selection and portfolio optimization.
                </p>
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Research Stats */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-lg font-bold font-mono text-primary mb-4">Research Stats</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Duration</span>
                  <span className="font-mono">6 months</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Pages</span>
                  <span className="font-mono">45</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Axioms Derived</span>
                  <span className="font-mono">7</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground font-mono">Status</span>
                  <span className="font-mono text-primary">Published</span>
                </div>
              </div>
            </div>

            {/* Tools & Methods */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-lg font-bold font-mono text-primary mb-4">Tools & Methods</h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">Analysis Tools</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Python
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      NumPy
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      SciPy
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">Trading Platform</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      ThinkorSwim
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      TOS API
                    </Badge>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold font-mono text-foreground mb-2">Documentation</h4>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      LaTeX
                    </Badge>
                    <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30">
                      Matplotlib
                    </Badge>
                  </div>
                </div>
              </div>
            </div>

            {/* Research Areas */}
            <div className="card-gradient rounded-2xl p-6">
              <h3 className="text-lg font-bold font-mono text-primary mb-4">Research Areas</h3>
              <div className="space-y-3">
                <div className="p-3 rounded-lg bg-primary/5">
                  <h4 className="font-semibold font-mono text-foreground">Quantitative Finance</h4>
                  <p className="text-sm text-muted-foreground font-mono">Mathematical modeling</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5">
                  <h4 className="font-semibold font-mono text-foreground">Options Theory</h4>
                  <p className="text-sm text-muted-foreground font-mono">Black-Scholes extensions</p>
                </div>
                <div className="p-3 rounded-lg bg-primary/5">
                  <h4 className="font-semibold font-mono text-foreground">Risk Management</h4>
                  <p className="text-sm text-muted-foreground font-mono">Portfolio optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
