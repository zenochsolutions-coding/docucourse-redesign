import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

export default function HorizontalScrollPanels({ panels }) {
  const ref = useRef(null)
  const n = panels.length

  // We deliberately do NOT size this container at n*100vh. A plain CSS-sticky
  // child always needs one full extra viewport-height to naturally scroll
  // itself off-screen after the pin releases, which is exactly the "dead
  // scroll" gap between the Lead panel and the next section. Instead we pin
  // via a scroll-driven fixed position and release almost immediately, so
  // the next section starts right after the last panel finishes.
  const releasePoint = (n - 1) / n
  const tailVh = 20
  const totalVh = (n - 1) * 100 + tailVh

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  const x = useTransform(scrollYProgress, [0, releasePoint], ['0%', `-${(n - 1) * 100}%`])
  const opacity = useTransform(
    scrollYProgress,
    [0, 0.04, releasePoint - 0.03, releasePoint],
    [0, 1, 1, 0]
  )

  const [pinned, setPinned] = useState(true)
  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const shouldPin = v < releasePoint
    setPinned((prev) => (prev !== shouldPin ? shouldPin : prev))
  })

  return (
    <section ref={ref} className="relative" style={{ height: `${totalVh}vh` }}>
      <div
        className={`h-screen overflow-hidden flex items-center ${
          pinned ? 'fixed top-0 left-0 right-0' : 'absolute bottom-0 left-0 right-0'
        }`}
      >
        <motion.div style={{ x, opacity }} className="flex">
          {panels.map((p, i) => (
            <PanelContent key={p.title} panel={p} index={i} total={n} />
          ))}
        </motion.div>
      </div>

      {/* progress dots */}
      {pinned && (
        <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
          {panels.map((_, i) => (
            <Dot key={i} index={i} total={n} scrollYProgress={scrollYProgress} releasePoint={releasePoint} />
          ))}
        </div>
      )}
    </section>
  )
}

function Dot({ index, total, scrollYProgress, releasePoint }) {
  const start = (index / total) * releasePoint
  const end = ((index + 1) / total) * releasePoint
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start, end, Math.min(releasePoint, end + 0.1)],
    [0.3, 1, 1, 0.3]
  )
  return <motion.div style={{ opacity }} className="h-1.5 w-8 rounded-full bg-teal" />
}

function PanelContent({ panel, index, total }) {
  return (
    <div className="relative w-screen h-screen flex-shrink-0 flex items-center justify-center px-6 overflow-hidden">
      {panel.photo && (
        <img
          src={panel.photo}
          alt={`${panel.title} background`}
          className="absolute inset-0 h-full w-full object-cover"
          style={{ opacity: 0.4 }}
          loading="lazy"
        />
      )}
      <div className="absolute inset-0 bg-ink/40" />
      <div className="relative max-w-2xl text-center">
        <div className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-6">
          0{index + 1} / 0{total}
        </div>
        <h3 className="font-display text-5xl sm:text-7xl text-paper mb-6">{panel.title}</h3>
        <p className="font-mono text-sm uppercase tracking-wide text-slate-bright mb-6">
          {panel.tagline}
        </p>
        <p className="text-paper-dim text-base leading-relaxed max-w-xl mx-auto">{panel.body}</p>
      </div>
    </div>
  )
}
