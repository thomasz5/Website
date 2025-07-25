import Link from "next/link"
import { ExternalLink } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  projectUrl: string
  slug: string
}

export function ProjectCard({ title, description, tags, imageUrl, projectUrl, slug }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg hover:shadow-primary/20 font-mono card-gradient border-primary/20">
      <Link href={`/projects/${slug}`}>
        <div className="aspect-video w-full overflow-hidden cursor-pointer">
          <img
            src={imageUrl || "/placeholder.svg"}
            alt={title}
            className="h-full w-full object-cover transition-all hover:scale-105"
          />
        </div>
      </Link>
      <CardHeader>
        <Link href={`/projects/${slug}`}>
          <h3 className="text-xl font-bold font-mono text-primary hover:text-primary/80 transition-colors cursor-pointer">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground font-mono">{description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="font-mono bg-primary/20 text-primary border-primary/30">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Link
          href={`/projects/${slug}`}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline font-mono"
        >
          View Details <ExternalLink className="ml-1 h-4 w-4" />
        </Link>
        <Link
          href={projectUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-primary font-mono"
        >
          GitHub <ExternalLink className="ml-1 h-3 w-3" />
        </Link>
      </CardFooter>
    </Card>
  )
}
