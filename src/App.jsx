import { useState } from "react";

function Timecode({ code, label }) {
  return (
    <div className="flex items-center gap-3 mb-4">
      <span className="font-mono text-xs tracking-widest text-amber">{code}</span>
      <span className="h-px w-8 bg-amber/60" />
      <span className="font-mono text-xs tracking-[0.3em] uppercase text-paper-dim/70">{label}</span>
    </div>
  );
}

const chapters = [
  { id: "art", label: "Art" },
  { id: "justice", label: "Justice" },
  { id: "family", label: "Family" },
  { id: "health", label: "Health" },
];

function Scrubber() {
  return (
    <div className="w-full max-w-4xl mx-auto px-6">
      <div className="relative h-px bg-paper/20 mt-2">
        <div className="absolute left-0 top-0 h-px w-1/4 bg-amber" />
        {chapters.map((c, i) => (
          <a
            key={c.id}
            href={`#${c.id}`}
            className="group absolute -top-2 flex flex-col items-center"
            style={{ left: `${(i / (chapters.length - 1)) * 100}%`, transform: "translateX(-50%)" }}
          >
            <span className="w-1 h-4 bg-paper/40 group-hover:bg-amber transition-colors block" />
            <span className="mt-2 font-mono text-[10px] tracking-widest uppercase text-paper-dim/60 group-hover:text-amber transition-colors">
              {c.label}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}

const stories = [
  { code: "00:12:04:01", title: "Labor & Legacy", dek: "Following Black mothers rebuilding trust in maternal care, one delivery room at a time." },
  { code: "00:19:41:12", title: "Second Chances", dek: "A reentry program measured in jobs kept, families reunited, and cycles broken." },
  { code: "00:27:03:09", title: "Canvas & Cause", dek: "Muralists and youth organizers turning blank walls into public reckonings." },
  { code: "00:34:18:22", title: "Behind Closed Doors", dek: "Survivors and advocates rebuilding the systems meant to protect them." },
  { code: "00:41:55:03", title: "Safety Reimagined", dek: "A neighborhood testing what public safety looks like without a badge." },
];

const pillars = [
  { id: "art", name: "Art", desc: "Creative practice as a public record of a community's own account of itself." },
  { id: "justice", name: "Justice", desc: "Systems change told through the people who live inside the system." },
  { id: "family", name: "Family", desc: "The structures that hold, and sometimes fail, the people closest to us." },
  { id: "health", name: "Health", desc: "Care and access, examined through the patients too often left out of the room." },
];

const changeMakers = [
  { name: "Hakima Payne", role: "Maternal Health Advocate" },
  { name: "Randy George", role: "Reentry Program Director" },
  { name: "Diosselyn Tot", role: "Community Organizer" },
  { name: "Justice Gatson", role: "Policy & Advocacy Lead" },
  { name: "Kristie Puckett", role: "Family Services Strategist" },
];

const testimonials = [
  { role: "Program Participant", quote: "Placeholder pull-quote, swap in the participant's actual words once approved for publication." },
  { role: "Community Partner", quote: "Placeholder pull-quote, swap in the partner organization's actual statement once approved." },
  { role: "Documentary Subject", quote: "Placeholder pull-quote, swap in the subject's actual words once approved for publication." },
];

function Initial({ name }) {
  const initials = name.split(" ").map((n) => n[0]).join("");
  return (
    <div className="w-full aspect-square rounded-full bg-gradient-to-br from-slate-bright/40 to-ink-soft border border-amber/30 flex items-center justify-center">
      <span className="font-display text-3xl text-amber">{initials}</span>
    </div>
  );
}

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-ink text-paper font-body min-h-screen">
      <header className="sticky top-0 z-40 backdrop-blur bg-ink/85 border-b border-paper/10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
          <a href="#top" className="font-display text-xl font-semibold tracking-tight">
            Docu<span className="text-amber">Course</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 font-mono text-xs tracking-widest uppercase">
            <a href="#stories" className="hover:text-amber transition-colors">Stories</a>
            <a href="#pillars" className="hover:text-amber transition-colors">Pillars</a>
            <a href="#changemakers" className="hover:text-amber transition-colors">Change Makers</a>
            <a href="#contact" className="hover:text-amber transition-colors">Contact</a>
          </nav>
          <a
            href="#access"
            className="hidden md:inline-block font-mono text-xs tracking-widest uppercase bg-amber text-ink px-5 py-2.5 rounded-full font-medium hover:bg-paper transition-colors"
          >
            Get Access
          </a>
          <button className="md:hidden text-paper" aria-label="Toggle menu" onClick={() => setOpen(!open)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
        {open && (
          <div className="md:hidden px-6 pb-4 flex flex-col gap-3 font-mono text-xs tracking-widest uppercase">
            <a href="#stories" onClick={() => setOpen(false)}>Stories</a>
            <a href="#pillars" onClick={() => setOpen(false)}>Pillars</a>
            <a href="#changemakers" onClick={() => setOpen(false)}>Change Makers</a>
            <a href="#contact" onClick={() => setOpen(false)}>Contact</a>
            <a href="#access" className="text-amber" onClick={() => setOpen(false)}>Get Access</a>
          </div>
        )}
      </header>

      <section id="top" className="relative pt-20 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center">
          <Timecode code="00:00:01:12" label="DocuCourse" />
          <h1 className="font-display font-semibold text-5xl md:text-7xl leading-[1.05] tracking-tight mx-auto">
            Change doesn't wait for the perfect story.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-paper-dim max-w-2xl mx-auto font-light">
            DocuCourse turns documentary film into a working tool for communities:
            watch the story, then take the next real step in your own.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href="#access" className="font-mono text-xs tracking-widest uppercase bg-amber text-ink px-7 py-3.5 rounded-full font-medium hover:bg-paper transition-colors">
              Get Access
            </a>
            <a href="#stories" className="font-mono text-xs tracking-widest uppercase border border-paper/30 px-7 py-3.5 rounded-full hover:border-amber hover:text-amber transition-colors">
              Watch a Story
            </a>
          </div>
        </div>
        <div className="mt-16">
          <Scrubber />
        </div>
      </section>

      <section className="px-6 py-20 border-t border-paper/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <Timecode code="00:04:12:08" label="Inspiration" />
            <h2 className="font-display font-semibold text-3xl md:text-4xl leading-tight">
              We don't wait for the story to change before we start creating change.
            </h2>
            <p className="mt-5 text-paper-dim leading-relaxed">
              Every film starts with someone willing to be seen. DocuCourse pairs that
              honesty with a practical path forward, so audiences leave with something
              to do, not just something to feel.
            </p>
          </div>
          <div className="order-1 md:order-2 relative">
            <div className="aspect-[4/5] rounded-lg bg-gradient-to-br from-slate-bright/30 to-ink-soft border border-amber/20 flex items-center justify-center">
              <span className="font-mono text-xs tracking-widest uppercase text-paper-dim/50 text-center px-6">Documentary still, client photo pending</span>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-ink border border-amber/40 rounded px-4 py-2 font-mono text-[11px] tracking-widest uppercase text-amber">
              Frame 04:812
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-ink-soft border-t border-paper/10">
        <div className="max-w-6xl mx-auto">
          <Timecode code="00:09:30:00" label="The Framework" />
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-12">Listen. Learn. Lead.</h2>
          <div className="grid md:grid-cols-3 gap-px bg-paper/10">
            {[
              { step: "01", title: "Listen", body: "Sit with a documentary told from inside the community it's about, not around it." },
              { step: "02", title: "Learn", body: "Follow discussion guides built alongside the organizers and subjects in the film." },
              { step: "03", title: "Lead", body: "Take the toolkit into your own workplace, congregation, or city council meeting." },
            ].map((s) => (
              <div key={s.step} className="bg-ink-soft p-8">
                <span className="font-mono text-3xl text-amber/80">{s.step}</span>
                <h3 className="font-display font-semibold text-xl mt-4 mb-2">{s.title}</h3>
                <p className="text-paper-dim text-sm leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="stories" className="px-6 py-20 border-t border-paper/10">
        <div className="max-w-6xl mx-auto">
          <Timecode code="00:12:00:00" label="Featured Stories" />
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-12">Five stories, five calls to act.</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stories.map((s) => (
              <article key={s.title} className="group border border-paper/15 rounded-lg p-6 hover:border-amber/50 transition-colors">
                <span className="font-mono text-[11px] tracking-widest text-amber/70">{s.code}</span>
                <h3 className="font-display font-semibold text-xl mt-3 mb-2 group-hover:text-amber transition-colors">{s.title}</h3>
                <p className="text-paper-dim text-sm leading-relaxed">{s.dek}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="pillars" className="px-6 py-20 bg-ink-soft border-t border-paper/10">
        <div className="max-w-6xl mx-auto">
          <Timecode code="00:22:00:00" label="Pillars" />
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-12">Four lenses, one throughline.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p) => (
              <div key={p.id} id={p.id} className="scroll-mt-24">
                <div className="w-12 h-12 rounded-full bg-amber/15 border border-amber/40 flex items-center justify-center mb-4">
                  <span className="font-display text-amber font-semibold">{p.name[0]}</span>
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">{p.name}</h3>
                <p className="text-paper-dim text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="changemakers" className="px-6 py-20 border-t border-paper/10">
        <div className="max-w-6xl mx-auto">
          <Timecode code="00:31:00:00" label="Change Makers" />
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-12">The people behind the footage.</h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-5 gap-6">
            {changeMakers.map((c) => (
              <div key={c.name} className="text-center">
                <div className="w-20 mx-auto mb-4">
                  <Initial name={c.name} />
                </div>
                <h3 className="font-display font-semibold text-sm">{c.name}</h3>
                <p className="text-paper-dim text-xs mt-1">{c.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-20 bg-ink-soft border-t border-paper/10">
        <div className="max-w-6xl mx-auto">
          <Timecode code="00:38:00:00" label="What People Are Saying" />
          <h2 className="font-display font-semibold text-3xl md:text-4xl mb-12">Told from the inside.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="border-l-2 border-amber/60 pl-5">
                <p className="text-paper-dim italic leading-relaxed text-sm">"{t.quote}"</p>
                <cite className="block mt-4 font-mono text-[11px] tracking-widest uppercase text-amber/80 not-italic">{t.role}</cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 border-t border-paper/10">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-8">
          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-paper-dim/60 mb-2">Brought to you by</p>
            <p className="font-display text-xl">Be Great Together</p>
          </div>
          <div>
            <p className="font-mono text-[11px] tracking-widest uppercase text-paper-dim/60 mb-2">In partnership with</p>
            <div className="flex gap-8">
              <p className="font-display text-lg text-paper-dim">Health Forward Foundation</p>
              <p className="font-display text-lg text-paper-dim">Convergence Partnership</p>
            </div>
          </div>
        </div>
      </section>

      <section id="access" className="px-6 py-24 border-t border-paper/10 text-center">
        <Timecode code="00:44:00:00" label="Ready When You Are" />
        <h2 className="font-display font-semibold text-3xl md:text-5xl max-w-2xl mx-auto mb-8">
          Get access to the full library.
        </h2>
        <a href="#" className="inline-block font-mono text-xs tracking-widest uppercase bg-amber text-ink px-8 py-4 rounded-full font-medium hover:bg-paper transition-colors">
          Get Access
        </a>
      </section>

      <footer id="contact" className="px-6 py-16 border-t border-paper/10 bg-ink-soft">
        <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-10 text-sm">
          <div>
            <p className="font-display text-lg mb-3">Docu<span className="text-amber">Course</span></p>
            <p className="text-paper-dim leading-relaxed">
              A documentary platform turning lived experience into community action
              across art, justice, family, and health.
            </p>
          </div>
          <div>
            <h4 className="font-mono text-[11px] tracking-widest uppercase text-amber/80 mb-3">Contact</h4>
            <p className="text-paper-dim">Kansas City, Missouri 64112</p>
            <p className="text-paper-dim">816-663-9794</p>
            <p className="text-paper-dim">info@docucourse.org</p>
          </div>
          <div>
            <h4 className="font-mono text-[11px] tracking-widest uppercase text-amber/80 mb-3">Quick Links</h4>
            <ul className="space-y-1 text-paper-dim">
              <li><a href="#stories" className="hover:text-amber">Stories</a></li>
              <li><a href="#pillars" className="hover:text-amber">Pillars</a></li>
              <li><a href="#changemakers" className="hover:text-amber">Change Makers</a></li>
              <li><a href="#access" className="hover:text-amber">Get Access</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-mono text-[11px] tracking-widest uppercase text-amber/80 mb-3">Social</h4>
            <ul className="space-y-1 text-paper-dim">
              <li>@DocuCourse — Facebook</li>
              <li>@DocuCourse — Instagram</li>
              <li>@DocuCourse — LinkedIn</li>
            </ul>
          </div>
        </div>
        <p className="max-w-6xl mx-auto mt-12 pt-6 border-t border-paper/10 text-paper-dim/50 text-xs">
          © 2026 DocuCourse. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
