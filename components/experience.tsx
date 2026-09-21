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
    role: 'Lead Software Engineer (Frontend)',
    company: 'Jatri Service Limited',
    bullets: [
      'Led a team of 8 frontend developers designing, developing, and maintaining high-quality, scalable web applications.',
      'Established and enforced frontend best practices — code reviews, coding standards, and performance optimization.',
      'Collaborated closely with designers, backend engineers and product managers to ensure timely, successful delivery.',
      'Mentored junior developers and conducted code reviews to maintain quality standards.',
    ],
  },
  {
    period: 'Jan 2022 — Jan 2023 (1yr)',
    role: 'Software Engineer',
    company: 'Jatri Service Limited',
    bullets: [
      'Developed/led 3 products from scratch: Online Ticketing (Bus, Launch — B2C), Intercity (Admin, Operator, Seller, Agent panels — B2B), and Water Transport (Admin, Operator, Seller panels — B2B).',
      'Optimized web application performance by 40% using a new frontend architecture and technique.',
      'Implemented new features, refactored existing ones, and handled bug fixing across projects.',
      'Built reusable components that saved development time across the team.',
      'Mentored existing team members and new joiners on the frontend team.',
    ],
  },
  {
    period: 'Dec 2019 — Dec 2021 (2yr+)',
    role: 'Software Engineer (Fullstack — Laravel + React)',
    company: 'Namespace IT',
    bullets: [
      'Discussed client requirements and proposed solutions with cross-functional teams.',
      'Worked across both server-side and frontend layers of the stack.',
      'Developed and optimized APIs for various services, then consumed them on the client side.',
      'Delivered 4 major projects on time and within budget.',
      'Built a Hotel Booking application from scratch (Laravel, Next.js, React) and integrated payment gateways (SSLCommerz, Stripe, TapPay) across several e-commerce projects.',
    ],
  },
]

const EDUCATION = [
  {
    period: '2014 — 2018',
    title: 'B.Sc. in Computer Science & Engineering (CSE)',
    school: 'Daffodil International University',
    note: 'CGPA: 3.36 out of 4.00',
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
                  <div className={styles.company}>{job.company}</div>
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
