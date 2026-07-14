import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Reveal from '../components/Reveal'
import ParallaxBg from '../components/ParallaxBg'
import HorizontalScrollPanels, { PANEL_STICKY_VH, getPinFraction } from '../components/HorizontalScrollPanels'
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

  // Margin is PANEL_STICKY_VH minus 37vh, not the full 100vh. At the full
  // 100vh overlap, Share+Footer's combined natural height falls short of
  // the gallery section's own required scroll-track height (it needs to
  // stay tall regardless of overlap, or the pin has nowhere to release
  // into), so the document's total scrollable height ends up governed by
  // the gallery, leaving a dead, unrendered stretch of scroll after the
  // real footer content. Reducing the overlap lets Share+Footer's own
  // stacked height become the taller (governing) side, so the footer's
  // true bottom lines up with the actual end of the page, and Share lands
  // with visible space above it at rest instead of flush to the very top.
  //
  // What it can't do on its own is control WHEN Share With Friends starts
  // sliding up relative to the Lead panel, since it's driven by total
  // document height, not by the panel gallery's own scroll progress. That
  // mismatch was the actual sync bug: Share could start rising before Lead
  // had even finished arriving on screen.
  //
  // Fix: share the gallery's own scrollYProgress/pinFraction here and use
  // it to drive an additional y offset on top of the static margin. Share
  // stays pushed further down than its margin position until Lead has
  // fully arrived (progress === pinFraction), then slides up into its
  // margin-determined resting spot as progress continues toward 1.
  const galleryRef = useRef(null)
  const pinFraction = getPinFraction(PILLARS.length)
  const { scrollYProgress } = useScroll({
    target: galleryRef,
    offset: ['start start', 'end end'],
  })
  const shareY = useTransform(scrollYProgress, [pinFraction, 1], ['40vh', '0vh'])

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

      <HorizontalScrollPanels panels={PILLARS} sectionRef={galleryRef} />

      <motion.section
        style={{ marginTop: `-${PANEL_STICKY_VH - 37}vh`, y: shareY }}
        className="relative z-10 py-32 border-t border-white/5 text-center bg-ink-soft"
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
