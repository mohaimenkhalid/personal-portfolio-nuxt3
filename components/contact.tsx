'use client'

import { FormEvent } from 'react'
import { PhoneForwarded, Mail, MapPin, Send } from 'lucide-react'
import Reveal from '@/components/reveal'
import styles from './contact.module.css'

export default function Contact() {
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const name = form.get('name')?.toString() ?? ''
    const email = form.get('email')?.toString() ?? ''
    const message = form.get('message')?.toString() ?? ''

    const subject = encodeURIComponent(`Portfolio contact from ${name || 'website visitor'}`)
    const body = encodeURIComponent(`${message}\n\nFrom: ${name}\nEmail: ${email}`)
    window.location.href = `mailto:mohaimen707@gmail.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className={`section ${styles['contact-section']}`}>
      <div className="container">
        <Reveal>
          <h2 className="section-heading">Let&rsquo;s work together</h2>
          <p className="section-lede mt-4">
            Have a frontend that needs a rebuild, or a product that needs someone who can move
            between UI and API? I&rsquo;d like to hear about it.
          </p>
        </Reveal>

        <div className={styles.layout}>
          <Reveal delay={0.05} className={styles['contact-form']}>
            <form onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <textarea name="message" placeholder="Message" required />
              <button type="submit" className="btn-solid w-full mt-2">
                Send Message
                <Send className="h-4 w-4" />
              </button>
            </form>
          </Reveal>

          <Reveal delay={0.1} className={styles['contact-information']}>
            <div className="flex items-center gap-x-4">
              <div className={styles['contact-icon-box']}>
                <PhoneForwarded className="h-5 w-5" />
              </div>
              <div>
                <div className={styles['contact-label']}>Phone</div>
                <a className={styles['contact-value']} href="tel:+8801798659099">
                  +8801798659099
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className={styles['contact-icon-box']}>
                <Mail className="h-5 w-5" />
              </div>
              <div>
                <div className={styles['contact-label']}>Email</div>
                <a className={styles['contact-value']} href="mailto:mohaimen707@gmail.com">
                  mohaimen707@gmail.com
                </a>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <div className={styles['contact-icon-box']}>
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <div className={styles['contact-label']}>Location</div>
                <div className={styles['contact-value']}>Dhaka, Bangladesh</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
