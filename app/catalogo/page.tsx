'use client'

import { useState } from 'react'
import VehicleCard from '@/components/VehicleCard'
import { vehicles } from '@/data/vehicles'
import styles from './page.module.css'

export default function CatalogoPage() {
  const [filter, setFilter] = useState('all')
  const filtered = filter === 'all' ? vehicles : vehicles.filter(v => v.brand === filter)
  const brands = ['all', ...Array.from(new Set(vehicles.map(v => v.brand).filter((b): b is string => Boolean(b))))]

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Catálogo de Veículos</h1>
        <p className={styles.subtitle}>Explore nossa seleção completa de carros seminovos</p>
        <div className={styles.filters}>
          {brands.map(brand => (
            <button
              key={brand}
              onClick={() => setFilter(brand)}
              className={`${styles.filter} ${filter === brand ? styles.active : ''}`}
            >
              {brand === 'all' ? 'Todos' : brand}
            </button>
          ))}
        </div>
        <div className={styles.grid}>
          {filtered.map(v => <VehicleCard key={v.id} vehicle={v} />)}
        </div>
        {filtered.length === 0 && <p className={styles.empty}>Nenhum veículo encontrado.</p>}
      </div>
    </div>
  )
}
