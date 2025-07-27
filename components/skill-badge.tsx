import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
}

export function SkillBadge({ name }: SkillBadgeProps) {
  return (
    <Badge
      variant="outline"
      className="px-2 py-0.5 text-xs font-mono bg-primary/10 text-primary border-primary/30 hover:bg-primary/20 transition-colors"
    >
      {name}
    </Badge>
  )
}
