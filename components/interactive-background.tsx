"use client"

import { useEffect, useRef, useState } from "react"

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  opacity: number
  baseOpacity: number
  size: number
  color: string
}

interface InteractiveBackgroundProps {
  className?: string
}

export function InteractiveBackground({ className = "" }: InteractiveBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number | undefined>(undefined)
  const mouseRef = useRef({ x: 0, y: 0 })
  const particlesRef = useRef<Particle[]>([])
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  // Configuration
  const config = {
    particleCount: 500,
    maxDistance: 100000, // Distance at which particles start to appear
    repelDistance: 200, // Distance at which particles start to scatter
    repelForce: 50,
    baseSpeed: 20,
    colors: ["rgba(73, 216, 230, ", "rgba(225, 225, 225, ", "rgba(196, 181, 253, "], // white, light blue, light purple
  }

  // Initialize particles
  const initParticles = (width: number, height: number) => {
    const particles: Particle[] = []

    for (let i = 0; i < config.particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * config.baseSpeed * 2,
        vy: (Math.random() - 0.5) * config.baseSpeed * 4,
        opacity: 1,
        baseOpacity: Math.random() * 1.5 + 0.2,
        size: Math.random() * 2 + 1,
        color: config.colors[Math.floor(Math.random() * config.colors.length)],
      })
    }

    particlesRef.current = particles
  }

  // Calculate distance between two points
  const getDistance = (x1: number, y1: number, x2: number, y2: number) => {
    return Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2)
  }

  // Update particles based on mouse position
  const updateParticles = (width: number, height: number) => {
    const mouse = mouseRef.current

    particlesRef.current.forEach((particle) => {
      const distance = getDistance(particle.x, particle.y, mouse.x, mouse.y)

      // Show particles only when mouse is nearby
      if (distance < config.maxDistance) {
        const proximityFactor = 1 - distance / config.maxDistance
        particle.opacity = particle.baseOpacity * proximityFactor * 2

        // Repel particles when mouse gets too close
        if (distance < config.repelDistance && distance > 0) {
          const repelFactor = (config.repelDistance - distance) / config.repelDistance
          const angle = Math.atan2(particle.y - mouse.y, particle.x - mouse.x)

          particle.vx += Math.cos(angle) * config.repelForce * repelFactor
          particle.vy += Math.sin(angle) * config.repelForce * repelFactor

          // Increase brightness when being repelled
          particle.opacity = Math.min(1, particle.opacity * (1 + repelFactor))
        }
      } else {
        particle.opacity *= 0.95 // Fade out when mouse moves away
      }

      // Update position
      particle.x += particle.vx
      particle.y += particle.vy

      // Apply friction
      particle.vx *= 0.98
      particle.vy *= 0.98

      // Add some random movement
      particle.vx += (Math.random() - 0.5) * 0.02
      particle.vy += (Math.random() - 0.5) * 0.02

      // Boundary conditions - wrap around edges
      if (particle.x < 0) particle.x = width
      if (particle.x > width) particle.x = 0
      if (particle.y < 0) particle.y = height
      if (particle.y > height) particle.y = 0

      // Limit velocity
      const maxVel = 2
      if (Math.abs(particle.vx) > maxVel) particle.vx = particle.vx > 0 ? maxVel : -maxVel
      if (Math.abs(particle.vy) > maxVel) particle.vy = particle.vy > 0 ? maxVel : -maxVel
    })
  }

  // Draw particles
  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)

    particlesRef.current.forEach((particle) => {
      if (particle.opacity > 0.01) {
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2)
        ctx.fillStyle = `${particle.color}${particle.opacity})`
        ctx.fill()

        // Add a subtle glow effect
        if (particle.opacity > 0.3) {
          ctx.beginPath()
          ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
          ctx.fillStyle = `${particle.color}${particle.opacity * 0.2})`
          ctx.fill()
        }
      }
    })
  }

  // Animation loop
  const animate = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    updateParticles(canvas.width, canvas.height)
    drawParticles(ctx)

    animationRef.current = requestAnimationFrame(animate)
  }

  // Handle mouse movement
  const handleMouseMove = (event: MouseEvent) => {
    const canvas = canvasRef.current
    if (!canvas) return

    const rect = canvas.getBoundingClientRect()
    mouseRef.current = {
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    }
  }

  // Handle resize
  const handleResize = () => {
    const canvas = canvasRef.current
    if (!canvas) return

    const parent = canvas.parentElement
    if (!parent) return

    const width = parent.offsetWidth
    const height = parent.offsetHeight

    canvas.width = width
    canvas.height = height

    setDimensions({ width, height })
    initParticles(width, height)
  }

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    // Initial setup
    handleResize()

    // Event listeners
    canvas.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)

    // Start animation
    animate()

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [])

  return (
    <canvas ref={canvasRef} className={`absolute inset-0 pointer-events-none ${className}`} style={{ zIndex: 1 }} />
  )
}
