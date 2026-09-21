import Reveal from '@/components/reveal'
import styles from './skills.module.css'

const FRONTEND = [
  { name: 'React', icon: '/images/react.svg' },
  { name: 'Next.js', icon: '/images/nextjs.svg' },
  { name: 'Vue.js', icon: '/images/vue.svg' },
  { name: 'Nuxt.js', icon: '/images/nuxt.svg' },
  { name: 'JavaScript', icon: '/images/javascript.svg' },
  { name: 'TypeScript' },
  { name: 'Redux' },
  { name: 'Vuex' },
  { name: 'Pinia' },
  { name: 'Context API' },
  { name: 'Tailwind CSS' },
  { name: 'Bootstrap' },
  { name: 'SCSS' },
]

const UI_ENGINEERING = [
  'Responsive design',
  'Component architecture',
  'Reusable UI components',
  'Accessibility',
  'Animation & interaction design',
  'API integration',
  'Frontend performance optimization',
  'AI-driven development',
]

const TOOLING = [
  'Docker',
  'Git',
  'GraphQL',
  'Firebase',
  'WebSockets',
  'Micro Frontend',
  'JWT',
  'OAuth2',
]

const BACKEND = [
  { name: 'Laravel', icon: '/images/laravel.svg' },
  { name: 'PHP', icon: '/images/php.svg' },
  { name: 'Node.js' },
  { name: 'Express.js' },
  { name: 'REST API design' },
  { name: 'MySQL' },
  { name: 'MongoDB' },
]

export default function Skills() {
  return (
    <section id="skills" className={`section ${styles['skills-section']}`}>
      <div className="container">
        <Reveal>
          <h2 className="section-heading">Skills</h2>
          <p className="section-lede mt-4">
            Frontend is where I spend most of my time and think the most carefully — backend is a
            capability I bring in when a project needs the full picture.
          </p>
        </Reveal>

        <div className={styles.rows}>
          <div className={styles.row}>
            <div className={styles.rowHead}>
              <span className={styles.rowKicker}>Primary</span>
              <span className={styles.rowTitle}>Frontend Development</span>
            </div>
            <div className={styles.pillList}>
              {FRONTEND.map((skill) => (
                <span className={styles.pill} key={skill.name}>
                  {skill.icon && <img src={skill.icon} alt="" />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.rowHead}>
              <span className={styles.rowKicker}>Practice</span>
              <span className={styles.rowTitle}>UI Engineering</span>
            </div>
            <div className={styles.pillList}>
              {UI_ENGINEERING.map((skill) => (
                <span className={styles.pill} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.rowHead}>
              <span className={styles.rowKicker}>Platform</span>
              <span className={styles.rowTitle}>Tools &amp; Auth</span>
            </div>
            <div className={styles.pillList}>
              {TOOLING.map((skill) => (
                <span className={styles.pill} key={skill}>
                  {skill}
                </span>
              ))}
            </div>
          </div>

          <div className={styles.row}>
            <div className={styles.rowHead}>
              <span className={styles.rowKicker} style={{ color: 'var(--tj-accent-2)' }}>
                Complementary
              </span>
              <span className={styles.rowTitle}>Backend Development</span>
            </div>
            <div className={styles.pillList}>
              {BACKEND.map((skill) => (
                <span className={styles.pill} key={skill.name}>
                  {skill.icon && <img src={skill.icon} alt="" />}
                  {skill.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
