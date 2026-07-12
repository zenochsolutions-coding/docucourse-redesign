import { Link } from 'react-router-dom'
import Reveal from '../components/Reveal'
import useSeo from '../components/useSeo'
import hero from '../assets/stock/hero.webp'
import storyPregnancy from '../assets/stock/story-pregnancy-prejudice.webp'
import storyReturning from '../assets/stock/story-returning-redemption.webp'
import storyArt from '../assets/stock/story-art-advocacy.webp'
import storyBails from '../assets/stock/story-bails-bonds.webp'
import storyHealing from '../assets/stock/story-held-healing.webp'

const STORIES = [
  {
    eyebrow: 'Pregnancy & Prejudice',
    title: 'Secure A Healthy Future In Black Maternal Care.',
    body: 'Experience the inspiring journey of Sherry "Mama Hakima" Payne in this poignant story shedding light on her dedication to combating healthcare disparities for Black mothers and infants. Witness Mama Hakima\u2019s transformative efforts through co-founding Uzazi Village, as she emphasizes the collective power of communities to dismantle systemic barriers and create an equitable future for Black maternal and infant health.',
    person: 'Hakima Payne',
    image: storyPregnancy,
  },
  {
    eyebrow: 'Returning & Redemption',
    title: 'Empower Second Chances Through Post-Incarceration Solutions.',
    body: 'Delve into lives impacted by the U.S. justice system. Follow Randy George\u2019s dedicated efforts to foster healing, forgiveness, and community solutions for re-entry, and gain insights from resilient individuals and community leaders, culminating in a powerful course on supporting returning citizens and mobilizing change.',
    person: 'Randy George',
    image: storyReturning,
  },
  {
    eyebrow: 'Art & Advocacy',
    title: 'Transform communities and advocate through art.',
    body: 'Diosselyn Tot\u2019s art-driven journey transforms her neighborhood, starting with painting murals and gathering volunteers, leading to the creation of \u201cUrban Station.\u201d This documentary captures her struggles and features community leaders, culminating in Diosselyn sharing principles for using art to mobilize change in cities.',
    person: 'Diosselyn Tot',
    image: storyArt,
  },
  {
    eyebrow: 'Bails & Bonds',
    title: 'Break the silence and walls of injustice around domestic violence.',
    body: 'Unravel the complex realities of Black mothers being incarcerated and the intertwined challenges of intimate partner violence. Through emotional interviews, gain exposure to the devastating impact on family bonds, emphasizing the need for urgent reform to address systemic issues and support the resilience of mothers like Justice Gatson, who defy circumstances for the sake of their families.',
    person: 'Justice Gatson',
    image: storyBails,
  },
  {
    eyebrow: 'Held & Healing',
    title: 'Reimagine public safety through healing, family preservation, and policy change.',
    body: 'Held & Healing is a gripping, truth-telling documentary that chronicles the extraordinary life of Kristie Puckett, a mother, survivor, and strategist whose journey moves from intimate partner violence and crack addiction to incarceration while pregnant, and ultimately to recovery, leadership, and policy change.',
    person: 'Kristie Puckett',
    image: storyHealing,
  },
]

const TESTIMONIALS = [
  {
    quote: 'This work is clearly aligned with our plan to advance health equity because it focuses on replacing harmful narratives with more inclusive narratives.',
    name: 'Qiana Thomason',
    role: 'Chief Executive Officer',
    org: 'Health Forward Foundation',
  },
  {
    quote: 'BeGreat Together\u2019s DocuCourse is exactly the kind of effort needed to unleash the true power of narrative and build the groundswell of political and public support required to achieve an inclusive, healthy democracy and society.',
    name: 'Amanda Navarro',
    role: 'Chief Executive Officer',
    org: 'Convergence Partnership',
  },
  {
    quote: 'DocuCourse is guided by personal values that endeavor to see equity and equality throughout all communities, nationwide.',
    name: 'Cortney Woodruff',
    role: 'Chief Executive Officer',
    org: 'Assemble.FYI',
  },
]

const CATEGORIES = ['Art', 'Justice', 'Family', 'Health']

export default function Home() {
  useSeo({
    title: 'DocuCourse | Listen, Learn, Lead — Documentary CE Courses for Social Impact',
    description:
      'DocuCourse is a documentary-driven learning platform turning real community stories into accredited continuing education for licensed professionals.',
    path: '/',
  })

  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-32 pb-20 overflow-hidden">
        <img
          src={hero}
          alt="Documentary film crew capturing an interview in the field"
          className="absolute inset-0 h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-ink/40" />
        <div className="relative mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-6">
              00:00:01 — Listen, Learn, Lead
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="font-display text-4xl sm:text-6xl leading-[1.1] text-paper mb-8">
              We Don&rsquo;t Have To Wait For The Story To Change To Create Change.
            </h1>
          </Reveal>
          <Reveal delay={0.2}>
            <Link
              to="/courses"
              className="inline-block rounded-full bg-amber px-8 py-4 text-ink font-mono text-sm uppercase tracking-widest hover:bg-amber-dim transition-colors"
            >
              Get Access
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Inspiration */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-4">Inspiration</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-6">Gain Insights and Inspirations</h2>
            <p className="text-paper-dim max-w-2xl mx-auto leading-relaxed">
              We don&rsquo;t have to wait for the story to change to create change.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-8 mt-16 text-left">
            {[
              ['Listen', 'Listen to insightful perspectives, fostering understanding and connection.'],
              ['Learn', 'Learn effective strategies, embracing knowledge as a tool for personal growth and societal progress.'],
              ['Lead', 'Lead with compassion and courage, inspiring positive change and empowering others to reach their full potential.'],
            ].map(([title, body], i) => (
              <Reveal key={title} delay={i * 0.1}>
                <div className="rounded-2xl border border-white/10 bg-ink-soft p-8 h-full hover:border-amber/40 hover:-translate-y-1 transition-all duration-300">
                  <h3 className="font-display text-2xl text-amber mb-3">{title}</h3>
                  <p className="text-paper-dim text-sm leading-relaxed">{body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Story cards */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-4">The Films</p>
            <h2 className="font-display text-3xl sm:text-4xl">
              Every day, people and communities are rising through the impossible.
            </h2>
            <p className="text-paper-dim mt-4 max-w-2xl mx-auto">
              Let us uplift and marvel at their strength through the process.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {STORIES.map((s, i) => (
              <Reveal key={s.eyebrow} delay={(i % 3) * 0.1}>
                <article className="group rounded-2xl overflow-hidden border border-white/10 bg-ink-soft h-full flex flex-col hover:border-amber/40 transition-colors duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <p className="font-mono text-[11px] uppercase tracking-widest text-amber mb-2">{s.eyebrow}</p>
                    <h3 className="font-display text-lg mb-3 leading-snug">{s.title}</h3>
                    <p className="text-paper-dim text-sm leading-relaxed line-clamp-4 flex-1">{s.body}</p>
                    <p className="mt-4 text-xs font-mono text-slate-bright">Featuring {s.person}</p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-4">DocuCourse Categories</p>
            <h2 className="font-display text-3xl sm:text-4xl mb-12">
              Stories and strategies for change in areas where we need it most, with more to come.
            </h2>
          </Reveal>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {CATEGORIES.map((c, i) => (
              <Reveal key={c} delay={i * 0.08}>
                <Link
                  to="/courses"
                  className="block rounded-xl border border-white/10 py-10 font-display text-xl hover:border-amber hover:text-amber transition-colors"
                >
                  {c}
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 border-t border-white/5 bg-ink-soft">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center mb-16">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-amber mb-4">Testimonials</p>
            <h2 className="font-display text-3xl sm:text-4xl">Here&rsquo;s What People Are Saying About DocuCourse</h2>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 0.1}>
                <blockquote className="h-full flex flex-col rounded-2xl border border-white/10 p-8">
                  <span className="font-display text-5xl text-amber leading-none mb-4">&ldquo;</span>
                  <p className="text-paper-dim text-sm leading-relaxed flex-1">{t.quote}</p>
                  <footer className="mt-6 font-mono text-xs uppercase tracking-widest">
                    <div className="text-paper">{t.name}</div>
                    <div className="text-slate-bright mt-1">{t.role}</div>
                    <div className="text-paper-dim/70">{t.org}</div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-white/5 text-center">
        <Reveal>
          <div className="mx-auto max-w-2xl px-6">
            <h2 className="font-display text-3xl sm:text-4xl mb-6">Ready to Listen, Learn, and Lead?</h2>
            <Link
              to="/courses"
              className="inline-block rounded-full bg-amber px-8 py-4 text-ink font-mono text-sm uppercase tracking-widest hover:bg-amber-dim transition-colors"
            >
              Get Access
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  )
}
