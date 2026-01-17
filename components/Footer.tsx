import Link from 'next/link'
import { FaInstagram, FaFacebook } from 'react-icons/fa'
import styles from './Footer.module.css'

// Links rápidos do footer
const menuLinks = [
  { href: '/', label: 'Página Inicial' },
  { href: '/catalogo', label: 'Catálogo' },
  { href: '/agende-visita', label: 'Agende uma Visita' },
]

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.content}>
          {/* Sobre a empresa */}
          <div>
            <h3 className={styles.title}>Lions Seminovos</h3>
            <p className={styles.text}>Seu parceiro de confiança na busca pelo carro perfeito.</p>
          </div>

          {/* Links rápidos */}
          <div>
            <h3 className={styles.title}>Links Rápidos</h3>
            <ul className={styles.list}>
              {menuLinks.map(({ href, label }) => (
                <li key={href}>
                  <Link href={href} className={styles.link}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato e redes sociais */}
          <div>
            <h3 className={styles.title}>Contato</h3>
            <ul className={styles.list}>
              <li>📞 (11) 9999-9999</li>
              <li>📧 contato@lionsseminovos.com.br</li>
              <li>📍 Rio de Janeiro, RJ</li>
            </ul>
            <div className={styles.social}>
              <a href="https://www.instagram.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Instagram">
                <FaInstagram className={styles.icon} /> Instagram
              </a>
              <a href="https://www.facebook.com/lionsseminovos" target="_blank" rel="noopener noreferrer" className={styles.socialLink} aria-label="Facebook">
                <FaFacebook className={styles.icon} /> Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Rodapé inferior */}
        <div className={styles.bottom}>
          <p>&copy; {new Date().getFullYear()} Lions Seminovos. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
