import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function HorizontalScrollPanels({ panels }) {
  const ref = useRef(null)
  const n = panels.length
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', `-${(n - 1) * 100}%`])

  return (
    <section ref={ref} className="relative" style={{ height: `${n * 100}vh` }}>
      <div className="sticky top-0 h-[85vh] overflow-hidden flex items-center">
        <motion.div style={{ x }} className="flex">
          {panels.map((p, i) => (
            <PanelContent key={p.title} panel={p} index={i} total={n} />
          ))}
        </motion.div>
      </div>

      {/* progress dots */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {panels.map((_, i) => (
          <Dot key={i} index={i} total={n} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}

function Dot({ index, total, scrollYProgress }) {
  const start = index / total
  const end = (index + 1) / total
  const opacity = useTransform(
    scrollYProgress,
    [Math.max(0, start - 0.1), start, end, Math.min(1, end + 0.1)],
    [0.3, 1, 1, 0.3]
  )
  return <motion.div style={{ opacity }} className="h-1.5 w-8 rounded-full bg-teal" />
}

function PanelContent({ panel, index, total }) {
  return (
    <div className="relative w-screen h-full flex-shrink-0 flex items-center justify-center px-6 overflow-hidden">
      {panel.photo && (
        <>
          <img
            src={panel.photo}
            alt={`${panel.title} background`}
            className="absolute inset-0 h-full w-full object-cover"
            style={{ opacity: 0.85 }}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/30" />
        </>
      )}
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
