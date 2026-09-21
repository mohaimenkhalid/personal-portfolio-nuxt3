'use client'

import styles from './hamburger.module.css'

interface HamburgerProps {
  checked: boolean
  onChange: (checked: boolean) => void
  className?: string
}

export default function Hamburger({ checked, onChange, className }: HamburgerProps) {
  return (
    <div className={className}>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        id="hamburger-checkbox"
        className={`${styles.hamburgerCheckbox} ${styles.visuallyHidden}`}
      />
      <label htmlFor="hamburger-checkbox">
        <div className={`${styles.hamburger} ${styles.hamburgerMenu}`}>
          <span className={`${styles.bar} ${styles.bar1}`}></span>
          <span className={`${styles.bar} ${styles.bar2}`}></span>
          <span className={`${styles.bar} ${styles.bar3}`}></span>
          <span className={`${styles.bar} ${styles.bar4}`}></span>
        </div>
      </label>
    </div>
  )
}
