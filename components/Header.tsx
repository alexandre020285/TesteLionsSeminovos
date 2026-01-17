'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import styles from './Header.module.css'

const menuLinks = [
  { href: '/', label: 'Página Inicial' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/agende-visita', label: 'Agende uma Visita' },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo/lions logo.jpg" alt="Lions Seminovos" width={150} height={50} className={styles.logoImage} priority />
          </Link>

          <nav className={styles.nav}>
            {menuLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.link}>
                {label}
              </Link>
            ))}
            <div className={styles.socialContainer}>
              <a href="https://www.instagram.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Instagram">
                <FaInstagram className={styles.iconInstagram} />
              </a>
              <a href="https://www.facebook.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label="Facebook">
                <FaFacebook className={styles.iconFacebook} />
              </a>
            </div>
          </nav>

          <button className={styles.menuBtn} onClick={() => setMenuAberto(!menuAberto)} aria-label="Menu">
            {menuAberto ? '✕' : '☰'}
          </button>
        </div>

        {menuAberto && (
          <nav className={styles.mobileNav}>
            {menuLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.mobileLink} onClick={() => setMenuAberto(false)}>
                {label}
              </Link>
            ))}
            <div className={styles.socialContainer}>
              <a href="https://www.instagram.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialBtn} onClick={() => setMenuAberto(false)} aria-label="Instagram">
                <FaInstagram className={styles.iconInstagram} />
              </a>
              <a href="https://www.facebook.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className={styles.mobileSocialBtn} onClick={() => setMenuAberto(false)} aria-label="Facebook">
                <FaFacebook className={styles.iconFacebook} />
              </a>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
