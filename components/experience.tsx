'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Reveal from '@/components/reveal'
import styles from './experience.module.css'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

const JOBS = [
  {
    period: 'Jan 2023 — Present',
    role: 'Sr. Software Engineer & Frontend Team Lead',
    company: 'Jatri Services Limited',
    companyUrl: 'https://jatri.co/',
    bullets: [
      'Led a team of 6 frontend developers while actively contributing hands-on development.',
      'Architected and developed core frontend features alongside team management responsibilities.',
      'Defined and enforced frontend best practices, including performance benchmarks and code review standards.',
      'Oversaw end-to-end project execution — planning, task allocation, sprint management, team coordination, and critical decision-making.',
      'Collaborated closely with Product, UI/UX, QA and Backend to bridge technical gaps and deliver seamless user experiences.',
      'Mentored junior developers on complex technical challenges and modern frontend best practices.',
    ],
  },
  {
    period: 'Jan 2022 — Jan 2023 (1yr)',
    role: 'Software Engineer L3 (Frontend)',
    company: 'Jatri Services Limited',
    companyUrl: 'https://jatri.co/',
    bullets: [
      'Spearheaded development of 3 platforms from scratch: Online Ticketing (Bus, Launch — B2C), Intercity Transport System (Admin, Operator, Seller, Agent panels — B2B), and Water Transport System (Admin, Operator, Seller dashboards — B2B).',
      'Optimized the ticketing experience and improved user performance by 40% through refactoring and redesigning the legacy codebase.',
      'Took ownership of feature development, refactoring, and bug fixing, contributing to cleaner, more scalable, maintainable codebases.',
      'Built and maintained reusable components, significantly reducing development time and increasing consistency across applications.',
    ],
  },
  {
    period: 'Dec 2019 — Dec 2021 (2yr+)',
    role: 'Software Engineer (Fullstack)',
    company: 'Namespace IT',
    companyUrl: 'https://namespaceit.com/',
    bullets: [
      'Built and maintained full-stack web applications using Laravel, Next.js, React.js and Angular.',
      'Designed responsive UI components and integrated payment gateways (Stripe, SSLCommerz).',
      'Collaborated directly with clients to gather business requirements and translate them into effective, scalable technical solutions.',
      'Identified and fixed critical bugs, leading debugging efforts to quickly resolve complex issues.',
      'Built a Hotel Booking application from scratch using Laravel, Next.js and React.',
    ],
  },
]

const EDUCATION = [
  {
    period: '2014 — 2019',
    title: 'B.Sc. in Computer Science & Engineering (CSE)',
    school: 'Daffodil International University',
    note: 'CGPA: 3.37 out of 4.00',
  },
  {
    period: '2010 — 2012',
    title: 'Higher Secondary Certificate (HSC)',
    school: 'Fulbaria College',
    note: 'GPA: 5.00 out of 5.00',
  },
  {
    period: '2010',
    title: 'Secondary School Certificate (SSC)',
    school: 'Al-hera Academy High School',
    note: 'GPA: 5.00 out of 5.00',
  },
]

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null)
  const progressRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!timelineRef.current || !progressRef.current) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progressRef.current,
        { height: '0%' },
        {
          height: '100%',
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            start: 'top 75%',
            end: 'bottom 65%',
            scrub: 0.6,
          },
        },
      )
    })

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" className={`section ${styles['experience-section']}`}>
      <div className="container">
        <Reveal>
          <h2 className="section-heading">Experience &amp; Education</h2>
        </Reveal>

        <div className={styles.grid}>
          <div>
            <div className={styles.sectionLabel}>Experience</div>
            <div className={styles.timeline} ref={timelineRef}>
              <div className={styles.progressLine} ref={progressRef} />
              {JOBS.map((job) => (
                <div key={job.role + job.period} className={styles.item}>
                  <div className={styles.period}>{job.period}</div>
                  <div className={styles.role}>{job.role}</div>
                  <div className={styles.company}>
                    {job.companyUrl ? (
                      <a href={job.companyUrl} target="_blank" rel="noopener noreferrer">
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </div>
                  <ul className={styles.bullets}>
                    {job.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className={styles.sectionLabel}>Education</div>
            {EDUCATION.map((edu) => (
              <div key={edu.title} className={styles.eduItem}>
                <div className={styles.eduPeriod}>{edu.period}</div>
                <div className={styles.eduTitle}>{edu.title}</div>
                <div className={styles.eduSchool}>{edu.school}</div>
                <div className={styles.eduNote}>{edu.note}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
