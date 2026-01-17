import Hero from '@/components/Hero'
import VehicleCard from '@/components/VehicleCard'
import Link from 'next/link'
import { featuredVehicles } from '@/data/vehicles'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      {/* Carrossel de banner */}
      <Hero />

      {/* Seção de veículos em destaque */}
      <section className={styles.featuredSection}>
        <div className="container">
          <h2 className={styles.title}>Veículos em Destaque</h2>
          <p className={styles.subtitle}>Confira nossa seleção especial de carros seminovos</p>
          <div className={styles.grid}>
            {featuredVehicles.map((v) => <VehicleCard key={v.id} vehicle={v} />)}
          </div>
          <div className={styles.cta}>
            <Link href="/catalogo" className={styles.btn}>Ver Catálogo Completo</Link>
          </div>
        </div>
      </section>

      {/* Seção de call-to-action */}
      <section className={styles.ctaSection}>
        <div className="container">
          <h2 className={styles.title}>Encontre o Carro dos Seus Sonhos</h2>
          <p className={styles.text}>Na Lions Seminovos, você encontra qualidade, confiança e os melhores preços do mercado.</p>
          <Link href="/agende-visita" className={styles.btn}>Agende uma Visita</Link>
        </div>
      </section>
    </>
  )
}
