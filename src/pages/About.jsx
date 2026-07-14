import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../components/Reveal'
import ParallaxBg from '../components/ParallaxBg'
import HorizontalScrollPanels, { PANEL_STICKY_VH, PANEL_SECTION_VH_PER_PANEL } from '../components/HorizontalScrollPanels'
import useSeo from '../components/useSeo'
import about from '../assets/stock/about.webp'
import journey from '../assets/stock/journey.webp'
import listenPhoto from '../assets/stock/listen.webp'
import learnPhoto from '../assets/stock/learn.webp'
import leadPhoto from '../assets/stock/lead2.jpeg'

const PILLARS = [
  {
    title: 'Listen',
    tagline: 'Listen to insightful perspectives, fostering understanding and connection.',
    body: 'DocuCourse allows us to listen for insight to see beyond our own perspectives, fostering a deeper understanding of others\u2019 experiences. This enhanced understanding naturally leads to stronger connections, as we find common ground and empathy within a growing community.',
    photo: listenPhoto,
  },
  {
    title: 'Learn',
    tagline: 'Learn effective strategies, embracing knowledge as a tool for personal growth and societal progress.',
    body: 'Embark on a dynamic educational journey with DocuCourse, where we embrace knowledge as a powerful tool for both personal growth and societal progress. Personalized courses compliment stories and narratives to provide a holistic learning experience, empowering individuals to apply newfound insights.',
    photo: learnPhoto,
  },
  {
    title: 'Lead',
    tagline: 'Lead with compassion and courage, inspiring positive change and empowering others to reach their full potential.',
    body: 'DocuCourse promotes trust and collaboration to build a strong foundation for effective leadership within our communities. This cooperative environment empowers us to work together seamlessly, driving collective success and achieving shared goals.',
    photo: leadPhoto,
  },
]

export default function About() {
  useSeo({
    title: 'About | DocuCourse — Listen, Learn, Lead',
    description:
      'DocuCourse fosters diverse perspectives through curated documentary content, equipping individuals with the knowledge and strategies for positive change.',
    path: '/about',
  })

  // Drives the "Share With Friends" slide-up independently of document
  // height (a negative margin changes total scroll height and throws off
  // timing at the very end; a transform doesn't). panelsWrapRef spans
  // exactly the HorizontalScrollPanels box, so progress 0->1 here matches
  // that section's own scroll-through exactly. entryStart is tuned to sit
  // well inside Lead's own dwell window (which runs from 2/3 to 1 of
  // pinFraction), so the slide begins while Lead is still fully visible.
  // The transform always resolves to 0 (no shift) at progress 1, which is
  // real document end, guaranteeing zero leftover gap at rest.
  const panelsWrapRef = useRef(null)
  const { scrollYProgress: panelsProgress } = useScroll({
    target: panelsWrapRef,
    offset: ['start start', 'end end'],
  })
  const totalVh = PILLARS.length * PANEL_SECTION_VH_PER_PANEL
  const pinFraction = (totalVh - PANEL_STICKY_VH) / totalVh
  const entryStart = pinFraction * 0.85
  const shareY = useTransform(panelsProgress, [entryStart, 1], ['100vh', '0vh'])

  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <ParallaxBg image={about} alt="Diverse community members gathered in discussion" opacity={0.35} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-6">
              Gain Insights and Inspiration
            </p>
            <h1 className="font-display text-4xl sm:text-5xl mb-6">Listen, Learn, Lead</h1>
            <p className="text-paper-dim leading-relaxed max-w-2xl mx-auto">
              DocuCourse fosters diverse perspectives through curated content. It promotes growth,
              empathy, and learning within a vibrant community. Our content inspires progress,
              equipping individuals with the knowledge and strategies for positive change. Join us
              to discover how understanding and connection drive transformation and growth.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="relative pt-40 pb-24 overflow-hidden border-t border-white/5">
        <ParallaxBg image={journey} alt="Winding road stretching toward the horizon, representing a journey" opacity={0.35} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">Gain Insight</p>
            <h2 className="font-display text-3xl sm:text-4xl max-w-2xl mx-auto">
              Join us on a compelling journey as we engage with passionate community changemakers.
            </h2>
            <p className="font-mono text-[11px] uppercase tracking-widest text-slate-bright mt-6">
              Scroll to continue &darr;
            </p>
          </Reveal>
        </div>
      </section>

      <div ref={panelsWrapRef} className="relative">
        <HorizontalScrollPanels panels={PILLARS} />
      </div>

      <motion.section
        style={{ y: shareY }}
        className="relative z-10 py-20 border-t border-white/5 text-center bg-ink-soft"
      >
        <Reveal>
          <div className="mx-auto max-w-2xl px-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">
              Share With Friends
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">
              Exclusive Social Media Promotions
            </h2>
            <a
              href="/courses"
              className="inline-block rounded-full bg-teal px-8 py-4 text-ink font-mono text-sm uppercase tracking-widest hover:bg-teal-dim transition-colors"
            >
              Join — Free Membership
            </a>
          </div>
        </Reveal>
      </motion.section>
    </>
  )
}
