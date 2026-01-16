import Image from 'next/image'
import Link from 'next/link'
import { Vehicle } from '@/data/vehicles'
import styles from './VehicleCard.module.css'

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <Image src={vehicle.image} alt={vehicle.name} fill className={styles.image} sizes="(max-width: 768px) 100vw, 33vw" />
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{vehicle.name}</h3>
        <div className={styles.price}>{vehicle.price}</div>
        <div className={styles.details}>
          <span>📅 {vehicle.year}</span>
          <span>🛣️ {vehicle.km}</span>
        </div>
        <Link href={`/veiculo/${vehicle.id}`} className={styles.btn}>Ver Detalhes</Link>
      </div>
    </div>
  )
}
