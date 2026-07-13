import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

export default function ScrollTimeline({ steps }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.75', 'end 0.4'],
  })

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

  return (
    <div ref={ref} className="relative max-w-2xl mx-auto">
      {/* track */}
      <div className="absolute left-6 top-2 bottom-2 w-px bg-white/10" />
      {/* drawn progress line */}
      <motion.div
        style={{ height: lineHeight }}
        className="absolute left-6 top-2 w-px bg-teal origin-top"
      />

      <div className="flex flex-col gap-16">
        {steps.map((step, i) => {
          const target = (i + 0.5) / steps.length
          return <TimelineStep key={step.num} step={step} target={target} scrollYProgress={scrollYProgress} />
        })}
      </div>
    </div>
  )
}

function TimelineStep({ step, target, scrollYProgress }) {
  const litOpacity = useTransform(scrollYProgress, [target - 0.12, target], [0, 1])
  const unlitOpacity = useTransform(litOpacity, (v) => 1 - v)
  const dotScale = useTransform(scrollYProgress, [target - 0.12, target], [0.6, 1])
  const textOpacity = useTransform(scrollYProgress, [target - 0.15, target - 0.02], [0.35, 1])
  const textX = useTransform(scrollYProgress, [target - 0.15, target - 0.02], [-12, 0])

  return (
    <div className="relative flex items-start gap-6 pl-0">
      <motion.div
        style={{ scale: dotScale }}
        className="relative z-10 flex-shrink-0 h-12 w-12 rounded-full bg-ink-soft border border-white/15 flex items-center justify-center"
      >
        <motion.div
          style={{ opacity: litOpacity }}
          className="absolute inset-0 rounded-full bg-teal"
        />
        <span className="relative font-mono text-xs font-semibold">
          <motion.span style={{ opacity: unlitOpacity }} className="absolute inset-0 flex items-center justify-center text-paper-dim">
            {step.num}
          </motion.span>
          <motion.span style={{ opacity: litOpacity }} className="text-ink">
            {step.num}
          </motion.span>
        </span>
      </motion.div>

      <motion.div style={{ opacity: textOpacity, x: textX }} className="pt-2">
        <h3 className="font-display text-2xl mb-2">{step.title}</h3>
        <p className="text-paper-dim text-sm leading-relaxed max-w-md">{step.body}</p>
      </motion.div>
    </div>
  )
}
