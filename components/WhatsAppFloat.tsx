'use client'

import { FaWhatsapp } from 'react-icons/fa'
import styles from './WhatsAppFloat.module.css'

export default function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5521000000000"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Falar no WhatsApp"
    >
      <FaWhatsapp className={styles.icon} />
    </a>
  )
}
