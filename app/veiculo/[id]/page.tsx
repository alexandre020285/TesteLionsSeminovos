'use client'

import { notFound, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { vehicles } from '@/data/vehicles'
import styles from './page.module.css'

export default function VeiculoPage({ params }: { params: { id: string } }) {
  const router = useRouter()
  const veiculo = vehicles.find(v => v.id === parseInt(params.id))

  if (!veiculo) {
    notFound()
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <button onClick={() => router.back()} className={styles.backButton}>
          ← Voltar
        </button>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image src={veiculo.image} alt={veiculo.name} fill className={styles.image} priority sizes="(max-width: 768px) 100vw, 50vw" />
            </div>
          </div>

          <div className={styles.detailsSection}>
            <h1 className={styles.title}>{veiculo.name}</h1>
            <div className={styles.price}>{veiculo.price}</div>

            <div className={styles.info}>
              <div className={styles.infoItem}>
                <span className={styles.label}>📅 Ano:</span>
                <span className={styles.value}>{veiculo.year}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.label}>🛣️ Quilometragem:</span>
                <span className={styles.value}>{veiculo.km}</span>
              </div>
              {veiculo.brand && (
                <div className={styles.infoItem}>
                  <span className={styles.label}>🏷️ Marca:</span>
                  <span className={styles.value}>{veiculo.brand}</span>
                </div>
              )}
            </div>

            <div className={styles.actions}>
              <Link href="/agende-visita" className={styles.primaryButton}>
                Agendar Visita
              </Link>
              <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className={styles.whatsappButton}>
                📱 Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
