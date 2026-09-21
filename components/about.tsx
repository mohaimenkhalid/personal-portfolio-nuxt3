import Reveal from '@/components/reveal'
import styles from './about.module.css'

const FACTS = [
  { label: 'Based in', value: 'Dhaka, Bangladesh' },
  { label: 'Experience', value: '6+ years' },
  { label: 'Currently', value: 'Lead Frontend Engineer @ Jatri' },
  { label: 'Education', value: 'B.Sc. CSE, Daffodil International University' },
  { label: 'Focus', value: 'Frontend, with full-stack range' },
  { label: 'Workflow', value: 'AI-driven development' },
]

export default function About() {
  return (
    <section id="about" className={`section ${styles['about-section']}`}>
      <div className="container">
        <Reveal>
          <h2 className="section-heading">Frontend-first, full-stack when it counts</h2>
        </Reveal>

        <div className={styles.layout}>
          <Reveal delay={0.05} className={styles.copy}>
            <p>
              I&apos;m a software engineer who is happiest solving problems in the browser —
              turning a design into an interface that feels fast, considered, and easy to use.
              That&apos;s the work I gravitate toward, and it&apos;s where most of my experience
              sits: <strong>React, Next.js, Vue and Nuxt</strong>, component architecture, and the
              small interaction details that make a product feel finished.
            </p>
            <p>
              As a <strong>Lead Frontend Engineer at Jatri Service Limited</strong>, I lead a team
              of 8 frontend developers, set frontend standards around code review and performance,
              and work closely with design, backend and product to ship on time. Earlier in my
              career I worked as a fullstack engineer building <strong>Laravel APIs</strong> and
              integrating payment gateways end-to-end.
            </p>
            <p>
              Understanding the backend side of a product helps me build better frontends — I know
              how the data I&apos;m rendering got there, what an API call actually costs, and where
              things can go wrong. I keep that muscle active with personal projects built on{' '}
              <strong>Node.js, Express and MongoDB</strong>, including an e-commerce application.
              It&apos;s a complementary skill, not my main focus — frontend is where I spend most
              of my time and where I want to keep growing.
            </p>
            <p>
              I use AI-driven development on a regular basis in my current role — relying on AI
              tooling day-to-day for scaffolding, refactors, and debugging, while keeping code
              review, architecture decisions and quality checks in my own hands.
            </p>
          </Reveal>

          <Reveal delay={0.1} className={styles.facts}>
            {FACTS.map((fact) => (
              <div className={styles.factRow} key={fact.label}>
                <span className={styles.factLabel}>{fact.label}</span>
                <span className={styles.factValue}>{fact.value}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
