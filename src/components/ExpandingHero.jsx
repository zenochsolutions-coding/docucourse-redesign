import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import Reveal from './Reveal'

export default function ExpandingHero({ image, alt, eyebrow, heading, ctaLabel = 'Get Access', ctaTo = '/courses' }) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })

  // Media starts inset with rounded corners, expands to full-bleed
  const radius = useTransform(scrollYProgress, [0, 0.5], [32, 0])
  const inset = useTransform(scrollYProgress, [0, 0.5], ['4%', '0%'])
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.25])
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [0.35, 0.75])
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80])

  return (
    <section ref={ref} className="relative h-[180vh]">
      <div className="sticky top-0 h-screen overflow-hidden flex items-center justify-center">
        <motion.div
          style={{ left: inset, right: inset, top: inset, bottom: inset, borderRadius: radius }}
          className="absolute overflow-hidden"
        >
          <motion.img
            src={image}
            alt={alt}
            style={{ scale: imgScale }}
            className="h-full w-full object-cover"
            loading="eager"
          />
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-gradient-to-t from-ink via-ink/60 to-ink/20"
          />
          {/* Fixed light scrim behind the header band only, so header text contrast
              never depends on the exact photo content underneath it */}
          <div className="absolute top-0 left-0 right-0 h-40 bg-gradient-to-b from-paper/75 to-transparent pointer-events-none" />
        </motion.div>

        <motion.div style={{ y: textY }} className="relative z-10 mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6">{eyebrow}</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl leading-[1.1] text-paper mb-8">
              {heading}
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to={ctaTo}
              className="inline-block rounded-full bg-amber px-8 py-4 text-ink font-mono text-sm uppercase tracking-widest hover:bg-amber-dim transition-colors"
            >
              {ctaLabel}
            </Link>
          </Reveal>
        </motion.div>
      </div>
    </section>
  )
}
