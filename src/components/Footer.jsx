import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-ink-soft border-t border-white/10 pt-16 pb-8">
      <div className="mx-auto max-w-7xl px-6 grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="font-display text-2xl text-paper mb-3">
            Docu<span className="text-amber">Course</span>
          </div>
          <p className="text-paper-dim text-sm max-w-sm leading-relaxed">
            DocuCourse is a transformative and comprehensive multimedia platform that offers a
            revolutionary learning experience, encouraging individuals to form meaningful
            connections and engage with unique and insightful perspectives.
          </p>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-amber mb-4">Contact Us</h3>
          <ul className="text-sm text-paper-dim space-y-2">
            <li>Headquartered in Kansas City, Missouri 64112</li>
            <li>
              <a href="tel:8166639794" className="hover:text-amber transition-colors">816-663-9794</a>
            </li>
            <li>
              <a href="mailto:info@docucourse.org" className="hover:text-amber transition-colors">
                info@docucourse.org
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-mono text-xs uppercase tracking-widest text-amber mb-4">Quick Links</h3>
          <ul className="text-sm text-paper-dim space-y-2">
            <li><Link to="/about" className="hover:text-amber transition-colors">About</Link></li>
            <li><Link to="/courses" className="hover:text-amber transition-colors">CE Courses</Link></li>
            <li><Link to="/contact" className="hover:text-amber transition-colors">Contact</Link></li>
            <li><Link to="/courses" className="hover:text-amber transition-colors">Get Access</Link></li>
          </ul>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2 text-xs text-paper-dim/70 font-mono">
        <span>© {new Date().getFullYear()} DocuCourse. All rights reserved.</span>
        <span>Designed &amp; built by Zenoch Business Solutions</span>
      </div>
    </footer>
  )
}
