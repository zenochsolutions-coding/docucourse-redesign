import Reveal from '../components/Reveal'
import ScrollTimeline from '../components/ScrollTimeline'
import useSeo from '../components/useSeo'

const COURSES = [
  {
    title: 'Returning & Redemption CE Course — 1 Credit Hour',
    body: 'Empower Second Chances Through Post-Incarceration Solutions. Delve into lives impacted by the U.S. justice system. Follow Randy George\u2019s dedicated efforts to foster healing, forgiveness, and community solutions for re-entry, and gain insights from resilient individuals and community leaders, culminating in a powerful course on supporting returning citizens and mobilizing change.',
    price: 20,
    cta: 'purchase',
  },
  {
    title: 'Bails & Bonds CE Course — 1.5 Credit Hours',
    body: 'Break the silence and walls of injustice around domestic violence. Unravel the complex realities of Black mothers being incarcerated and the intertwined challenges of intimate partner violence. Through emotional interviews, gain exposure to the devastating impact on family bonds, emphasizing the need for urgent reform to address systemic issues and support the resilience of mothers like Justice Gatson, who defy circumstances for the sake of their families.',
    price: 25,
    cta: 'purchase',
  },
  {
    title: 'Pregnancy & Prejudice CE Course — 2 Credit Hours',
    body: 'Secure A Healthy Future In Black Maternal Care. Experience the inspiring journey of Sherry "Mama Hakima" Payne in this poignant story shedding light on her dedication to combating healthcare disparities for Black mothers and infants. Witness Mama Hakima\u2019s transformative efforts through co-founding Uzazi Village, as she emphasizes the collective power of communities to dismantle systemic barriers and create an equitable future for Black maternal and infant health.',
    price: 30,
    cta: 'purchase',
  },
  {
    title: '3 CE Course Bundle — 4.5 Credit Hours',
    body: 'This DocuCourse Bundle includes 4.5 hours of continuing education: a 2-hour course on Pregnancy and Prejudice, a 1.5-hour course on Bails and Bonds, and a 1-hour course on Returning and Redemption. Designed for learners seeking impactful, real-world perspectives in one convenient package.',
    price: 65,
    cta: 'purchase',
  },
  {
    title: 'Non Profit Organization — 3 CE Course Bundle — 4.5 Credit Hours',
    body: 'This DocuCourse Bundle includes 4.5 hours of continuing education: a 2-hour course on Pregnancy and Prejudice, a 1.5-hour course on Bails and Bonds, and a 1-hour course on Returning and Redemption. Designed for learners seeking impactful, real-world perspectives in one convenient package.',
    price: null,
    cta: 'contact',
  },
  {
    title: 'Corporate CE Course Package — 3 CE Course Bundle — 4.5 Credit Hours',
    body: '4.5 Hours. Empower your team with exclusive access to three impactful DocuCourses designed to educate, challenge perspectives, and inspire growth: Pregnancy and Prejudice (2 Hours), Bails and Bonds (1.5 Hours), and Returning and Redemption (1 Hour).',
    price: null,
    cta: 'contact',
  },
]

const STEPS = [
  { num: '01', title: 'Choose a DocuCourse', body: 'Select one or all DocuCourse modules' },
  { num: '02', title: 'Watch the Film', body: 'View the full documentary at your own pace' },
  { num: '03', title: 'Complete Surveys', body: 'No quizzes or worksheets required' },
  { num: '04', title: 'Receive Certificate', body: 'Issued directly to your email address' },
]

const COMPARE = {
  traditional: ['PowerPoint Lectures', 'Tests & Quizzes', 'Dry Case Studies', 'Limited Use Time'],
  docucourse: ['Story-based Learning', 'Human-Centered Surveys', 'Real Lives & Lived Expertise', '12-Month Access'],
}

const REVIEWS = [
  {
    quote: 'Through DocuCourse, I am reflecting on what community partnership looks like, by continuing to ensure knowledge-building centers people with lived experience, not just research.',
    name: 'Camille Kramer, MPH',
    role: 'Senior Research Program Manager',
    org: 'Johns Hopkins School of Medicine',
  },
  {
    quote: 'The Returning & Redemption CE Course opened my eyes to the profound challenges faced by those re-entering society. This course didn\u2019t just inform me—it transformed how I approach my work with formerly incarcerated individuals.',
    name: 'Dr. Sarah Mitchell',
    role: 'Licensed Clinical Social Worker',
    org: 'Returning & Redemption CE Course',
  },
  {
    quote: 'Bails & Bonds CE Course shattered my preconceptions about the justice system. This course is essential viewing for anyone working in criminal justice or social services.',
    name: 'Marcus Thompson, LMFT',
    role: 'Marriage & Family Therapist',
    org: 'Bails & Bonds CE Course',
  },
]

function CourseCard({ course }) {
  return (
    <Reveal className="h-full">
      <article className="h-full flex flex-col rounded-2xl border border-white/10 bg-ink-soft p-8 hover:border-teal/40 transition-colors">
        <h3 className="font-display text-xl mb-4 leading-snug">{course.title}</h3>
        <p className="text-paper-dim text-sm leading-relaxed flex-1">{course.body}</p>
        <div className="mt-6 flex items-center justify-between">
          <span className="font-display text-3xl text-teal">
            {course.price !== null ? `$${course.price}` : 'Custom'}
          </span>
          {course.cta === 'purchase' ? (
            <button className="rounded-full bg-teal px-6 py-2.5 text-ink font-mono text-xs uppercase tracking-widest hover:bg-teal-dim transition-colors">
              Purchase
            </button>
          ) : (
            <a
              href="/contact"
              className="rounded-full border border-teal px-6 py-2.5 text-teal font-mono text-xs uppercase tracking-widest hover:bg-teal hover:text-ink transition-colors"
            >
              Contact Us
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export default function Courses() {
  useSeo({
    title: 'CE Courses | DocuCourse — Documentary-Based Continuing Education',
    description:
      'Earn NASW/NBCC-aligned CEU credit through award-winning documentaries. Self-paced, story-based continuing education for licensed professionals.',
    path: '/courses',
  })

  return (
    <>
      <section className="pt-40 pb-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-6">Watch &amp; Learn</p>
            <h1 className="font-display text-4xl sm:text-5xl leading-tight mb-6">
              Turn real-life stories into practice-ready insight, while earning CEUs
            </h1>
            <p className="text-paper-dim max-w-2xl mx-auto leading-relaxed mb-8">
              DocuCourse transforms lived experience into accredited continuing education. Watch
              award-winning documentaries and earn CEU hours through reflection, not tests.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="#select" className="rounded-full bg-teal px-8 py-4 text-ink font-mono text-sm uppercase tracking-widest hover:bg-teal-dim transition-colors">
                Start Learning Today
              </a>
              <span className="font-mono text-xs uppercase tracking-widest text-slate-bright self-center">
                Self-paced viewing &middot; $20&ndash;$65 per module
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* How it works — scroll-drawn timeline */}
      <section className="py-24 border-t border-white/5">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center mb-16">
            <h2 className="font-display text-3xl sm:text-4xl mb-3">How It Works</h2>
            <p className="text-paper-dim">
              Continuing Education, Redefined. Our process is simple, impactful, and built around real people&rsquo;s stories.
            </p>
          </Reveal>
          <div className="py-20">
            <ScrollTimeline steps={STEPS} />
          </div>
          <Reveal delay={0.2}>
            <p className="text-center text-paper-dim text-sm mt-4 max-w-2xl mx-auto">
              Get 12 months of unlimited access to the purchased module(s), making DocuCourse the
              perfect fit for personal learning, orientations, retreats, and trainings.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Course grid */}
      <section id="select" className="py-20 border-t border-white/5 scroll-mt-24">
        <div className="mx-auto max-w-6xl px-6">
          <Reveal className="text-center mb-14">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-teal mb-4">Select A Product</p>
          </Reveal>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {COURSES.map((c) => (
              <CourseCard key={c.title} course={c} />
            ))}
          </div>
        </div>
      </section>

      {/* Features & compare */}
      <section className="py-20 border-t border-white/5 bg-ink-soft">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl mb-4">Why Choose DocuCourse?</h2>
            <p className="text-paper-dim mb-14 max-w-2xl mx-auto">
              Skip the usual lecture — our DocuCourses center lived experience, systemic insight,
              and solutions-oriented narrative.
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 gap-8 text-left max-w-3xl mx-auto">
            <Reveal>
              <div className="rounded-2xl border border-white/10 p-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-paper-dim mb-4">Traditional CE</h3>
                <ul className="space-y-3 text-sm text-paper-dim">
                  {COMPARE.traditional.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="text-coral">&times;</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="rounded-2xl border border-teal/40 p-8">
                <h3 className="font-mono text-xs uppercase tracking-widest text-teal mb-4">DocuCourse</h3>
                <ul className="space-y-3 text-sm text-paper">
                  {COMPARE.docucourse.map((t) => (
                    <li key={t} className="flex items-center gap-2">
                      <span className="text-teal">&#10003;</span> {t}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Org outreach */}
      <section className="py-20 border-t border-white/5">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <h2 className="font-display text-3xl sm:text-4xl mb-4">
              Want to provide DocuCourse to your organization?
            </h2>
            <p className="text-paper-dim leading-relaxed max-w-2xl mx-auto mb-4">
              Bring powerful, accredited storytelling to your team&rsquo;s professional development.
              Each documentary is designed to meet CEU standards across health, justice, and social
              service sectors, with pre- and post-reflection built right in.
            </p>
            <p className="text-paper-dim leading-relaxed max-w-2xl mx-auto mb-8">
              With every 50 signups, you&rsquo;ll earn a 10% return on your investment. So as your
              staff grows in knowledge, so does your impact and reinvestment power.
            </p>
            <a href="/contact" className="inline-block rounded-full bg-teal px-8 py-4 text-ink font-mono text-sm uppercase tracking-widest hover:bg-teal-dim transition-colors">
              Contact Us Today To Get Started
            </a>
          </Reveal>
          <div className="grid sm:grid-cols-3 gap-6 mt-14 text-left">
            {['Team Training', 'CEU Credits', 'ROI Benefits'].map((t, i) => (
              <Reveal key={t} delay={i * 0.08}>
                <div className="rounded-xl border border-white/10 p-6 text-center font-mono text-xs uppercase tracking-widest text-paper-dim">
                  {t}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-20 border-t border-white/5 bg-ink-soft">
        <div className="mx-auto max-w-5xl px-6">
          <Reveal className="text-center mb-14">
            <h2 className="font-display text-3xl sm:text-4xl mb-3">DocuCourse is Reviewed by Licensed Professionals</h2>
            <p className="text-paper-dim">
              Hear from professionals who have experienced the transformative power of our courses.
            </p>
          </Reveal>
          <div className="grid md:grid-cols-3 gap-8">
            {REVIEWS.map((r, i) => (
              <Reveal key={r.name} delay={i * 0.1}>
                <blockquote className="h-full flex flex-col rounded-2xl border border-white/10 p-8">
                  <p className="text-paper-dim text-sm leading-relaxed flex-1">&ldquo;{r.quote}&rdquo;</p>
                  <footer className="mt-6 font-mono text-xs uppercase tracking-widest">
                    <div className="text-paper">{r.name}</div>
                    <div className="text-slate-bright mt-1">{r.role}</div>
                    <div className="text-paper-dim/70">{r.org}</div>
                  </footer>
                </blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
