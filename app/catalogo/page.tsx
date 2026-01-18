'use client'

import { useState } from 'react'
import VehicleCard from '@/components/VehicleCard'
import { vehicles } from '@/data/vehicles'
import styles from './page.module.css'

export default function CatalogoPage() {
  const [filtro, setFiltro] = useState('all')

  const marcasUnicas = Array.from(
    new Set(vehicles.map(v => v.brand).filter(Boolean))
  ) as string[]
  const marcas = ['all', ...marcasUnicas]

  const veiculosFiltrados = filtro === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.brand === filtro)

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Catálogo de Veículos</h1>
        <p className={styles.subtitle}>Explore nossa seleção completa de carros seminovos</p>

        <div className={styles.filters}>
          {marcas.map(marca => (
            <button
              key={marca}
              onClick={() => setFiltro(marca)}
              className={`${styles.filter} ${filtro === marca ? styles.active : ''}`}
            >
              {marca === 'all' ? 'Todos' : marca}
            </button>
          ))}
        </div>

        {veiculosFiltrados.length === 0 ? (
          <p className={styles.empty}>Nenhum veículo encontrado.</p>
        ) : (
          <div className={styles.grid}>
            {veiculosFiltrados.map(veiculo => (
              <VehicleCard key={veiculo.id} vehicle={veiculo} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
