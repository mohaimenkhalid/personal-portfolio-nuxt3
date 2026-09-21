'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Hamburger from '@/components/hamburger'
import styles from './header.module.css'

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Resume', href: '/resume' },
  { label: 'Contact', href: '/#contact' },
]

export default function Header() {
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    document.body.style.overflow = isOpenMobileMenu ? 'hidden' : ''
  }, [isOpenMobileMenu])

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <header className={`${styles.headerArea} ${isScrolled ? styles.headerScrolled : ''}`}>
        <div className="container flex items-center justify-between">
          <Link href="/" className={styles.logo}>
            AM<span>.</span>dev
          </Link>

          <nav className="hidden md:block">
            <ul className="m-0 p-0 flex gap-x-8 list-none">
              {NAV_LINKS.map((link) => (
                <li key={link.href} className="inline-block">
                  <Link href={link.href} className={styles.navLink}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-5">
            <div className="hidden md:block">
              <a href="mailto:mohaimen707@gmail.com" className="btn-solid" style={{ padding: '11px 20px' }}>
                Let&apos;s Work
              </a>
            </div>
            <Hamburger
              checked={isOpenMobileMenu}
              onChange={setIsOpenMobileMenu}
              className="block md:hidden"
            />
          </div>
        </div>
      </header>

      <div
        className={`mobile_menu_container block md:hidden transition-transform duration-500 ease-in-out ${
          isOpenMobileMenu ? 'translate-x-0' : 'translate-x-full pointer-events-none'
        }`}
      >
        <ul className="mobile_menu">
          {NAV_LINKS.map((link) => (
            <li key={link.href} className="mobile_menu_list_item">
              <Link href={link.href} onClick={() => setIsOpenMobileMenu(false)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
