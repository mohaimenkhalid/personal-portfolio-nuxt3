import { ImageOff, ExternalLink } from 'lucide-react'
import Reveal from '@/components/reveal'
import styles from './projects.module.css'

const PROJECTS = [
  {
    title: 'Multimodal Travelling Platform (B2C)',
    desc: 'All-in-one travel booking platform unifying bus, launch and rental services, with real-time search and comparison.',
    stack: ['Nuxt.js', 'Vuex', 'Tailwind'],
    link: { label: 'jatri.co', href: 'https://jatri.co/' },
  },
  {
    title: 'Intercity B2B Service (Bus & Launches)',
    desc: 'B2B ticketing platform streamlining reservation, ticket management, ticket sales, operator-side operations and agent management.',
    stats: 'Manages 5,000+ buses and 200+ operators — 200k+ tickets processed per day.',
    stack: ['Vue 3', 'GraphQL', 'Vuex', 'Tailwind', 'PrimeVue', 'WebSocket'],
  },
  {
    title: 'Saafir',
    desc: 'Redefines travel for retailers and passengers — combines premium chauffeur services with verified Saafir Stays.',
    stack: ['Vue', 'Pinia'],
    link: { label: 'saafir.co', href: 'https://saafir.co/' },
  },
  {
    title: 'Car Rental Service',
    desc: 'Car rental platform for trips and business travel.',
    stats: '90k+ users, 35k+ partners, 50k+ registered vehicles.',
    stack: ['React', 'Tailwind', 'Redux'],
  },
  {
    title: 'Rentamo',
    desc: 'Online hotel booking and travel solution for travelers.',
    stack: ['Next.js', 'Redux', 'Tailwind'],
  },
  {
    title: 'UNI-Prep Institute',
    desc: 'Site for a leading TEFL & TESOL course provider, with 1,000+ graduates every year.',
    stack: [],
  },
  {
    title: 'E-commerce',
    desc: 'Multiple e-commerce builds — product listing, cart and checkout flows, and payment method integration.',
    stack: ['React', 'Laravel', 'Bootstrap'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles['projects-section']}`}>
      <div className="container">
        <Reveal>
          <h2 className="section-heading">Projects</h2>
          <p className="section-lede mt-4">
            Products I&apos;ve built or led the frontend for, mostly B2B/B2C platforms at Jatri
            and client work at Namespace IT.
          </p>
        </Reveal>

        <div className={styles.list}>
          {PROJECTS.map((project) => (
            <div key={project.title} className={styles.row}>
              <div className={styles.thumb}>
                <ImageOff className="h-6 w-6" />
              </div>
              <div>
                <div className={styles.title}>{project.title}</div>
                <p className={styles.desc}>{project.desc}</p>
                {project.stats && <p className={styles.stats}>{project.stats}</p>}
                {project.stack.length > 0 && (
                  <div className={styles.tags}>
                    {project.stack.map((tech) => (
                      <span key={tech} className={styles.tag}>
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                {project.link && (
                  <a
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.link}
                  >
                    <ExternalLink className="h-4 w-4" />
                    {project.link.label}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          Most of these are B2B platforms or client work without a public repo or standalone
          demo — screenshots to come.
        </div>
      </div>
    </section>
  )
}
