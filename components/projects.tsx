import { ImageOff, Github, ExternalLink, Info } from 'lucide-react'
import Reveal from '@/components/reveal'
import styles from './projects.module.css'

const PLACEHOLDER_PROJECTS = [1, 2, 3]

export default function Projects() {
  return (
    <section id="projects" className={`section ${styles['projects-section']}`}>
      <div className="container">
        <Reveal>
          <h2 className="section-heading">Projects</h2>
          <p className="section-lede mt-4">
            This section is reserved for real project case studies — UI quality, interaction
            design, component architecture, and outcomes. Swap these placeholders for actual
            projects, screenshots, and links.
          </p>
        </Reveal>

        <div className={styles.list}>
          {PLACEHOLDER_PROJECTS.map((n) => (
            <div key={n} className={styles.row}>
              <div className={styles.thumb}>
                <ImageOff className="h-6 w-6" />
              </div>
              <div>
                <div className={styles.title}>Project title placeholder</div>
                <p className={styles.desc}>
                  Add a short description here: what it does, your specific contribution, and the
                  problem it solves.
                </p>
                <div className={styles.tags}>
                  <span className={styles.tag}>tech</span>
                  <span className={styles.tag}>tech</span>
                  <span className={styles.tag}>tech</span>
                </div>
                <div className={styles.links}>
                  <span className={styles.linkDisabled}>
                    <Github className="h-4 w-4" /> Add repo link
                  </span>
                  <span className={styles.linkDisabled}>
                    <ExternalLink className="h-4 w-4" /> Add live link
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.notice}>
          <Info className="h-4 w-4 flex-shrink-0" />
          Placeholder content — replace with real projects, screenshots and links before shipping.
        </div>
      </div>
    </section>
  )
}
