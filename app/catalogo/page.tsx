'use client'

import { useState } from 'react'
import VehicleCard from '@/components/VehicleCard'
import { vehicles } from '@/data/vehicles'
import styles from './page.module.css'

export default function CatalogoPage() {
  const [filtro, setFiltro] = useState('all')

  // Filtra veículos por marca
  const veiculosFiltrados = filtro === 'all' 
    ? vehicles 
    : vehicles.filter(v => v.brand === filtro)

  // Lista de marcas únicas para os botões de filtro
  const marcas = ['all', ...Array.from(new Set(vehicles.map(v => v.brand).filter((b): b is string => Boolean(b))))]

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Catálogo de Veículos</h1>
        <p className={styles.subtitle}>Explore nossa seleção completa de carros seminovos</p>

        {/* Botões de filtro por marca */}
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

        {/* Grid de veículos */}
        <div className={styles.grid}>
          {veiculosFiltrados.map(v => <VehicleCard key={v.id} vehicle={v} />)}
        </div>

        {/* Mensagem quando não há veículos */}
        {veiculosFiltrados.length === 0 && (
          <p className={styles.empty}>Nenhum veículo encontrado.</p>
        )}
      </div>
    </div>
  )
}
