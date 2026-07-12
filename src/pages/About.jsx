import Reveal from '../components/Reveal'
import ParallaxBg from '../components/ParallaxBg'
import useSeo from '../components/useSeo'
import about from '../assets/stock/about.webp'

const PILLARS = [
  {
    title: 'Listen',
    tagline: 'Listen to insightful perspectives, fostering understanding and connection.',
    body: 'DocuCourse allows us to listen for insight to see beyond our own perspectives, fostering a deeper understanding of others\u2019 experiences. This enhanced understanding naturally leads to stronger connections, as we find common ground and empathy within a growing community.',
  },
  {
    title: 'Learn',
    tagline: 'Learn effective strategies, embracing knowledge as a tool for personal growth and societal progress.',
    body: 'Embark on a dynamic educational journey with DocuCourse, where we embrace knowledge as a powerful tool for both personal growth and societal progress. Personalized courses compliment stories and narratives to provide a holistic learning experience, empowering individuals to apply newfound insights.',
  },
  {
    title: 'Lead',
    tagline: 'Lead with compassion and courage, inspiring positive change and empowering others to reach their full potential.',
    body: 'DocuCourse promotes trust and collaboration to build a strong foundation for effective leadership within our communities. This cooperative environment empowers us to work together seamlessly, driving collective success and achieving shared goals.',
  },
]

export default function About() {
  useSeo({
    title: 'About | DocuCourse — Listen, Learn, Lead',
    description:
      'DocuCourse fosters diverse perspectives through curated documentary content, equipping individuals with the knowledge and strategies for positive change.',
    path: '/about',
  })

  return (
    <>
      <section className="relative pt-40 pb-24 overflow-hidden">
        <ParallaxBg image={about} alt="Diverse community members gathered in discussion" opacity={0.2} />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/85 to-ink/60" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6">
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

      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-4">Gain Insight</p>
            <h2 className="font-display text-3xl sm:text-4xl max-w-2xl mx-auto">
              Join us on a compelling journey as we engage with passionate community changemakers.
            </h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 0.1}>
                <div className="h-full rounded-2xl border border-white/10 bg-ink-soft p-8 hover:border-amber/40 transition-colors">
                  <h3 className="font-display text-2xl text-amber mb-2">{p.title}</h3>
                  <p className="text-sm font-mono uppercase tracking-wide text-slate-bright mb-4">
                    {p.tagline}
                  </p>
                  <p className="text-paper-dim text-sm leading-relaxed">{p.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 border-t border-white/5 text-center bg-ink-soft">
        <Reveal>
          <div className="mx-auto max-w-2xl px-6">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-4">
              Share With Friends
            </p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">
              Exclusive Social Media Promotions
            </h2>
            <a
              href="/courses"
              className="inline-block rounded-full bg-amber px-8 py-4 text-ink font-mono text-sm uppercase tracking-widest hover:bg-amber-dim transition-colors"
            >
              Join — Free Membership
            </a>
          </div>
        </Reveal>
      </section>
    </>
  )
}
