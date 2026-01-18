'use client'

import { notFound, useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { vehicles } from '@/data/vehicles'
import styles from './page.module.css'

interface VeiculoPageProps {
  params: { id: string }
}

const WHATSAPP_URL = 'https://wa.me/5511999999999'

export default function VeiculoPage({ params }: VeiculoPageProps) {
  const router = useRouter()
  const veiculo = vehicles.find(v => v.id === parseInt(params.id))

  if (!veiculo) {
    notFound()
  }

  const { name, image, price, year, km, brand } = veiculo

  const infoItems = [
    { label: '📅 Ano:', value: year },
    { label: '🛣️ Quilometragem:', value: km },
    ...(brand ? [{ label: '🏷️ Marca:', value: brand }] : []),
  ]

  return (
    <div className={styles.page}>
      <div className="container">
        <button onClick={() => router.back()} className={styles.backButton}>
          ← Voltar
        </button>

        <div className={styles.content}>
          <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
              <Image 
                src={image} 
                alt={name} 
                fill 
                className={styles.image} 
                priority 
                sizes="(max-width: 768px) 100vw, 50vw" 
              />
            </div>
          </div>

          <div className={styles.detailsSection}>
            <h1 className={styles.title}>{name}</h1>
            <div className={styles.price}>{price}</div>

            <div className={styles.info}>
              {infoItems.map((item, index) => (
                <div key={index} className={styles.infoItem}>
                  <span className={styles.label}>{item.label}</span>
                  <span className={styles.value}>{item.value}</span>
                </div>
              ))}
            </div>

            <div className={styles.actions}>
              <Link href="/agende-visita" className={styles.primaryButton}>
                Agendar Visita
              </Link>
              <a 
                href={WHATSAPP_URL} 
                target="_blank" 
                rel="noopener noreferrer" 
                className={styles.whatsappButton}
              >
                📱 Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
