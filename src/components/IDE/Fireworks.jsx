import { useEffect, useRef } from 'react'

const COLORS = [
  '#ff4466', '#ff8c00', '#ffd700', '#00e5ff',
  '#7c4dff', '#00e676', '#ff6d00', '#e040fb',
  '#40c4ff', '#69f0ae', '#ff1744', '#76ff03',
]

class Particle {
  constructor(x, y, color, angle, speed) {
    this.x = x
    this.y = y
    this.color = color
    this.vx = Math.cos(angle) * speed
    this.vy = Math.sin(angle) * speed
    this.alpha = 1
    this.decay = 0.012 + Math.random() * 0.008
    this.radius = 1.5 + Math.random() * 2
    this.trail = []
  }

  update() {
    this.trail.push({ x: this.x, y: this.y })
    if (this.trail.length > 7) this.trail.shift()
    this.vx *= 0.98
    this.vy = this.vy * 0.98 + 0.06
    this.x += this.vx
    this.y += this.vy
    this.alpha -= this.decay
  }

  draw(ctx) {
    for (let i = 0; i < this.trail.length; i++) {
      const t = this.trail[i]
      const trailAlpha = (i / this.trail.length) * this.alpha * 0.5
      ctx.save()
      ctx.globalAlpha = Math.max(0, trailAlpha)
      ctx.beginPath()
      ctx.arc(t.x, t.y, this.radius * 0.6, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.fill()
      ctx.restore()
    }
    ctx.save()
    ctx.globalAlpha = Math.max(0, this.alpha)
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
    ctx.fillStyle = this.color
    ctx.shadowBlur = 6
    ctx.shadowColor = this.color
    ctx.fill()
    ctx.restore()
  }

  isDead() { return this.alpha <= 0 }
}

class Rocket {
  constructor(x, targetY, color) {
    this.x = x
    this.y = window.innerHeight + 10
    this.targetY = targetY
    this.color = color
    // derive velocity from distance so every rocket reaches its target
    // max rise = vy² / (2 * decel), decel = 0.35 → vy = sqrt(distance * 0.7)
    const distance = this.y - targetY
    this.vy = -(Math.sqrt(distance * 0.7) + 1 + Math.random() * 2)
    this.exploded = false
    this.particles = []
  }

  update() {
    if (!this.exploded) {
      this.vy += 0.35
      this.y += this.vy
      if (this.y <= this.targetY) this.explode()
    }
    this.particles = this.particles.filter(p => !p.isDead())
    this.particles.forEach(p => p.update())
  }

  explode() {
    this.exploded = true
    const count = 90 + Math.floor(Math.random() * 50)
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.3
      const speed = 2 + Math.random() * 6
      this.particles.push(new Particle(this.x, this.y, this.color, angle, speed))
    }
  }

  draw(ctx) {
    if (!this.exploded) {
      ctx.save()
      ctx.beginPath()
      ctx.arc(this.x, this.y, 2, 0, Math.PI * 2)
      ctx.fillStyle = this.color
      ctx.shadowBlur = 8
      ctx.shadowColor = this.color
      ctx.fill()
      ctx.beginPath()
      ctx.moveTo(this.x, this.y)
      ctx.lineTo(this.x, this.y + 10)
      ctx.strokeStyle = 'rgba(255, 200, 100, 0.5)'
      ctx.lineWidth = 2
      ctx.stroke()
      ctx.restore()
    }
    this.particles.forEach(p => p.draw(ctx))
  }

  isDone() { return this.exploded && this.particles.length === 0 }
}

export default function Fireworks({ active, onComplete }) {
  const canvasRef = useRef(null)
  const onCompleteRef = useRef(onComplete)
  useEffect(() => { onCompleteRef.current = onComplete }, [onComplete])

  useEffect(() => {
    if (!active) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    const rockets = []
    let launchCount = 0
    const maxLaunches = 18
    let animId

    const launchInterval = setInterval(() => {
      if (launchCount >= maxLaunches) {
        clearInterval(launchInterval)
        return
      }
      const color = COLORS[Math.floor(Math.random() * COLORS.length)]
      const x = 80 + Math.random() * (canvas.width - 160)
      const targetY = 60 + Math.random() * (canvas.height * 0.5)
      rockets.push(new Rocket(x, targetY, color))
      launchCount++
    }, 220)

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = rockets.length - 1; i >= 0; i--) {
        rockets[i].update()
        rockets[i].draw(ctx)
        if (rockets[i].isDone()) rockets.splice(i, 1)
      }

      if (rockets.length > 0 || launchCount < maxLaunches) {
        animId = requestAnimationFrame(animate)
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        onCompleteRef.current?.()
      }
    }

    animId = requestAnimationFrame(animate)

    return () => {
      clearInterval(launchInterval)
      cancelAnimationFrame(animId)
    }
  }, [active])

  if (!active) return null

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-50 pointer-events-none"
    />
  )
}
