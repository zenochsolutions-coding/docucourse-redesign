import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export const PANEL_STICKY_VH = 100
export const PANEL_SECTION_VH_PER_PANEL = 80

// Shared so any consumer (About.jsx) can compute the exact same
// scroll-progress fraction the panel transform uses, instead of
// re-deriving it separately or guessing a static value that can drift
// out of sync with the panel transform.
export function getPinFraction(n, stickyVh = PANEL_STICKY_VH, sectionVhPerPanel = PANEL_SECTION_VH_PER_PANEL) {
  const totalVh = n * sectionVhPerPanel
  return (totalVh - stickyVh) / totalVh
}

export default function HorizontalScrollPanels({ panels, sectionRef }) {
  const localRef = useRef(null)
  const ref = sectionRef || localRef
  const n = panels.length
  // Sticky pin height and total scroll distance are kept in sync so the
  // panel gallery finishes its transform right as the pin releases, instead
  // of leaving a stretch of scroll after the last panel where nothing moves.
  // PANEL_STICKY_VH fills the full viewport so no blank strip shows below
  // the photo, and is exported so the next section can overlap the release
  // scroll by this exact amount instead of a guessed value.
  const STICKY_VH = PANEL_STICKY_VH
  const SECTION_VH_PER_PANEL = PANEL_SECTION_VH_PER_PANEL
  const totalVh = n * SECTION_VH_PER_PANEL
  const pinFraction = getPinFraction(n, STICKY_VH, SECTION_VH_PER_PANEL)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end end'],
  })

  // Percent-based x here would be relative to the track's OWN width (n*100vw),
  // not the viewport, which overshoots by a factor of n. Use vw units instead,
  // which are always relative to the viewport regardless of track width.
  const x = useTransform(scrollYProgress, [0, pinFraction], ['0vw', `-${(n - 1) * 100}vw`])

  return (
    <section ref={ref} className="relative" style={{ height: `${totalVh}vh` }}>
      <div className="sticky top-0 overflow-hidden flex" style={{ height: `${STICKY_VH}vh` }}>
        <motion.div style={{ x }} className="flex">
          {panels.map((p, i) => (
            <PanelContent key={p.title} panel={p} index={i} total={n} />
          ))}
        </motion.div>
      </div>

      {/* progress dots */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-20 flex gap-3">
        {panels.map((_, i) => (
          <Dot key={i} index={i} total={n} pinFraction={pinFraction} scrollYProgress={scrollYProgress} />
        ))}
      </div>
    </section>
  )
}

function Dot({ index, total, pinFraction, scrollYProgress }) {
  const start = (index / total) * pinFraction
  const end = ((index + 1) / total) * pinFraction
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
