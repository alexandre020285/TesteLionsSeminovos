import Image from 'next/image'
import Link from 'next/link'
import { Vehicle } from '@/data/vehicles'
import styles from './VehicleCard.module.css'

interface VehicleCardProps {
  vehicle: Vehicle
}

export default function VehicleCard({ vehicle }: VehicleCardProps) {
  const { id, name, image, price, year, km } = vehicle

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image 
          src={image} 
          alt={name} 
          fill 
          className={styles.image} 
          sizes="(max-width: 768px) 100vw, 33vw" 
        />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{name}</h3>
        <div className={styles.price}>{price}</div>
        
        <div className={styles.details}>
          <span>📅 {year}</span>
          <span>🛣️ {km}</span>
        </div>
        
        <Link href={`/veiculo/${id}`} className={styles.btn}>
          Ver Detalhes
        </Link>
      </div>
    </div>
  )
}
