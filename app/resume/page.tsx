import type { Metadata } from 'next'
import { Download } from 'lucide-react'
import styles from './resume.module.css'

export const metadata: Metadata = {
  title: 'Resume | Abdul Mohaimen',
}

export default function ResumePage() {
  return (
    <section className={styles['resume-container']}>
      <div className="glow" style={{ width: 420, height: 420, top: -120, right: -100, background: 'var(--tj-accent)' }} />
      <div className="container">
        <div className={styles.header}>
          <h1 className="section-heading">Resume</h1>
          <a href="/resume.pdf" download className="btn-solid">
            Download Resume
            <Download className="h-4 w-4" />
          </a>
        </div>
        <div className={styles.viewer}>
          <iframe src="/resume.pdf" title="Abdul Mohaimen — Resume" />
        </div>
      </div>
    </section>
  )
}
