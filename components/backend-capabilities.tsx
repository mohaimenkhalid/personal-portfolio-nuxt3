import { CheckCircle2 } from 'lucide-react'
import Reveal from '@/components/reveal'
import styles from './backend-capabilities.module.css'

const PROFESSIONAL = [
  'Built and optimized REST APIs in Laravel, then consumed them from React/Next.js frontends.',
  'Integrated payment gateways end-to-end — SSLCommerz, Stripe and TapPay — across e-commerce projects.',
  'Built a Hotel Booking application from scratch, owning both the Laravel backend and the frontend.',
]

const PERSONAL = [
  'Build full-stack apps on Node.js, Express and MongoDB in my own time, including an e-commerce application.',
  'Comfortable with REST API design, MongoDB/Mongoose data modeling, and wiring auth into an Express app.',
  'Use this to prototype ideas end-to-end without waiting on a backend team.',
]

export default function BackendCapabilities() {
  return (
    <section id="backend" className={`section ${styles['backend-section']}`}>
      <div className="container">
        <Reveal>
          <h2 className="section-heading" style={{ fontSize: 'clamp(24px, 3vw, 32px)' }}>
            Backend capabilities
          </h2>
          <p className="section-lede mt-3">
            I&apos;m not primarily a backend developer, but I can own a feature end-to-end when a
            project calls for it.
          </p>
        </Reveal>

        <div className={styles.panel}>
          <div>
            <div className="tag-pill mb-4" style={{ borderColor: 'rgba(52,199,184,0.3)' }}>
              Professional experience
            </div>
            <div className={styles.list}>
              {PROFESSIONAL.map((item) => (
                <div className={styles.row} key={item}>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className="tag-pill mb-4" style={{ borderColor: 'rgba(52,199,184,0.3)' }}>
              Personal projects
            </div>
            <div className={styles.list}>
              {PERSONAL.map((item) => (
                <div className={styles.row} key={item}>
                  <CheckCircle2 className="h-4 w-4" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
