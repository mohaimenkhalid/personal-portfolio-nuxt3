import { Blocks, Gauge, Users, Layers } from 'lucide-react'
import Reveal from '@/components/reveal'
import styles from './deep-dive.module.css'

const POINTS = [
  {
    icon: Blocks,
    title: 'Component architecture & reuse',
    body: 'I design shared, variant-driven components rather than one-off UI, so new screens are assembled instead of rebuilt. That approach cut duplicate work across several products I led at Jatri.',
  },
  {
    icon: Gauge,
    title: 'Frontend performance',
    body: 'Reworked the frontend architecture on a core product and measured a 40% performance improvement while cutting UI-related bugs by 80%. Migrated a legacy codebase to dynamic imports and caching, cutting initial load time by another 40%.',
  },
  {
    icon: Layers,
    title: 'Multi-product frontend systems',
    body: 'Led frontend for three products built from scratch at Jatri — B2C online ticketing, a multi-role B2B intercity platform (admin, operator, seller, agent panels) handling 200k+ tickets a day, and a water-transport B2B system.',
  },
  {
    icon: Users,
    title: 'Team standards & mentoring',
    body: 'Lead a team of 6 frontend engineers: code review standards, performance benchmarks, and pairing with product, design, QA and backend to keep delivery predictable.',
  },
]

export default function DeepDive() {
  return (
    <section id="craft" className={`section ${styles['deepdive-section']}`}>
      <div className="container">
        <Reveal>
          <h2 className="section-heading">Frontend engineering, in practice</h2>
          <p className="section-lede mt-4">
            A closer look at how I actually build — the patterns and habits that show up across
            the products I&apos;ve led.
          </p>
        </Reveal>

        <div className={styles.list}>
          {POINTS.map((point) => (
            <div key={point.title} className={styles.item}>
              <point.icon className={`h-6 w-6 ${styles.icon}`} />
              <div>
                <div className={styles.itemTitle}>{point.title}</div>
                <p className={styles.itemBody}>{point.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.snippet}>
          <div className={styles.snippetHeader}>
            <span className={styles.dot} />
            <span className={styles.dot} />
            <span className={styles.dot} />
            button.tsx — reusable variant pattern
          </div>
          <pre>
{`const button = cva(`}<span className={styles.str}>{'"inline-flex items-center rounded-md font-medium"'}</span>{`, {
  `}<span className={styles.kw}>variants</span>{`: {
    `}<span className={styles.kw}>variant</span>{`: { default: `}<span className={styles.str}>{'"bg-accent text-accent-fg"'}</span>{`, ghost: `}<span className={styles.str}>{'"bg-transparent"'}</span>{` },
    `}<span className={styles.kw}>size</span>{`: { sm: `}<span className={styles.str}>{'"h-9 px-3"'}</span>{`, lg: `}<span className={styles.str}>{'"h-11 px-8"'}</span>{` },
  },
})`}
          </pre>
        </div>
      </div>
    </section>
  )
}
