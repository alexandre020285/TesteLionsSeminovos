'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import styles from './Header.module.css'

const navLinks = [
  { href: '/', label: 'Página Inicial' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/agende-visita', label: 'Agende uma Visita' },
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/images/logo/lions logo.jpg" 
              alt="Lions Seminovos" 
              width={150} 
              height={50}
              className={styles.logoImage}
              priority
            />
          </Link>
          <nav className={styles.nav}>
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.link}>{label}</Link>
            ))}
            <a href="https://www.instagram.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
              <FaInstagram className={styles.icon} /> Instagram
            </a>
            <a href="https://www.facebook.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Facebook">
              <FaFacebook className={styles.icon} /> Facebook
            </a>
          </nav>
          <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
        {menuOpen && (
          <nav className={styles.mobileNav}>
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.mobileLink} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            ))}
            <a href="https://www.instagram.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialBtn} onClick={() => setMenuOpen(false)} aria-label="Instagram">
              <FaInstagram className={styles.icon} /> Instagram
            </a>
            <a href="https://www.facebook.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialBtn} onClick={() => setMenuOpen(false)} aria-label="Facebook">
              <FaFacebook className={styles.icon} /> Facebook
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
