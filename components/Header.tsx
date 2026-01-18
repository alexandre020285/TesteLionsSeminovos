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

const socialLinks = [
  { href: 'https://www.instagram.com/lionsseminovos', icon: FaInstagram, label: 'Instagram', className: styles.iconInstagram },
  { href: 'https://www.facebook.com/lionsseminovos', icon: FaFacebook, label: 'Facebook', className: styles.iconFacebook },
]

export default function Header() {
  const [menuAberto, setMenuAberto] = useState(false)
  const fecharMenu = () => setMenuAberto(false)

  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.content}>
          <Link href="/" className={styles.logo}>
            <Image src="/images/logo/lions logo.jpg" alt="Lions Seminovos" width={50} height={50} className={styles.logoImage} priority />
          </Link>

          <nav className={styles.nav}>
            {menuLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.link}>
                {label}
              </Link>
            ))}
          </nav>

          <div className={styles.rightSection}>
            <div className={styles.socialContainer}>
              {socialLinks.map(({ href, icon: Icon, label, className }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} aria-label={label}>
                  <Icon className={className} />
                </a>
              ))}
            </div>
            <button className={`${styles.menuBtn} ${menuAberto ? styles.active : ''}`} onClick={() => setMenuAberto(!menuAberto)} aria-label="Menu">
              {menuAberto ? '✕' : '☰'}
            </button>
          </div>
        </div>

        {menuAberto && (
          <nav className={styles.mobileNav}>
            {menuLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.link} onClick={fecharMenu}>
                {label}
              </Link>
            ))}
            <div className={styles.socialContainer}>
              {socialLinks.map(({ href, icon: Icon, label, className }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} onClick={fecharMenu} aria-label={label}>
                  <Icon className={className} />
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
