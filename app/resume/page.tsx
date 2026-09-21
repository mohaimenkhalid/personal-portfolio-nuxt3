import type { Metadata } from 'next'
import styles from './resume.module.css'

export const metadata: Metadata = {
  title: 'Resume | Abdul Mohaimen',
}

export default function ResumePage() {
  return (
    <section className={styles['resume-container']}>
      <div className="container">
        <iframe
          src="https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf"
          className="w-full"
          style={{ height: '80vh' }}
          title="Resume"
        />
      </div>
    </section>
  )
}
