'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import styles from './Hero.module.css'

// Dados dos slides do carrossel
const slides = [
  {
    id: 1,
    image: '/images/banner/banner.webp',
    title: 'Encontre o Carro dos Seus Sonhos',
    subtitle: 'Na Lions Seminovos, qualidade e confiança andam juntas. Explore nosso catálogo e encontre o veículo perfeito para você.',
    buttonText: 'Ver Catálogo',
    buttonLink: '/catalogo',
  },
  {
    id: 2,
    image: '/images/banner/hero2.jpg',
    title: 'Os Melhores Preços do Mercado',
    subtitle: 'Trabalhamos com os melhores preços e condições de pagamento. Venha conhecer nossas ofertas especiais.',
    buttonText: 'Ver Ofertas',
    buttonLink: '/catalogo',
  },
  {
    id: 3,
    image: '/images/banner/hero 3.webp',
    title: 'Veículos Selecionados e Vistoriados',
    subtitle: 'Todos os nossos veículos passam por uma rigorosa vistoria técnica. Qualidade garantida para você.',
    buttonText: 'Ver Detalhes',
    buttonLink: '/catalogo',
  },
  {
    id: 4,
    image: '/images/banner/hero 4.webp',
    title: 'Agende Sua Visita',
    subtitle: 'Venha nos visitar e conheça nossa linha completa de veículos seminovos. Estamos esperando por você!',
    buttonText: 'Agendar Visita',
    buttonLink: '/agende-visita',
  },
]

export default function Hero() {
  const [slideAtual, setSlideAtual] = useState(0)

  // Muda o slide automaticamente a cada 4 segundos (tempo uniforme)
  useEffect(() => {
    const timer = setInterval(() => {
      setSlideAtual((atual) => {
        const proximo = (atual + 1) % slides.length
        return proximo
      })
    }, 4000) // Tempo fixo de 4 segundos para todos os slides
    return () => clearInterval(timer)
  }, []) // Loop infinito garantido pelo módulo

  const proximoSlide = () => {
    setSlideAtual((atual) => (atual + 1) % slides.length)
  }

  const slideAnterior = () => {
    setSlideAtual((atual) => {
      const anterior = atual - 1
      return anterior < 0 ? slides.length - 1 : anterior
    })
  }

  return (
    <section className={styles.hero}>
      {/* Carrossel de imagens */}
      <div className={styles.carousel}>
        {slides.map((slide, index) => (
          <div key={slide.id} className={`${styles.slide} ${index === slideAtual ? styles.active : ''}`}>
            <div className={styles.backgroundImage}>
              <Image src={slide.image} alt={slide.title} fill className={styles.bgImage} priority={index === 0} sizes="100vw" quality={90} />
              <div className={styles.overlay}></div>
            </div>
            <div className={styles.content}>
              <div className="container">
                <div className={styles.glassCard}>
                  <h1 className={styles.title}>{slide.title}</h1>
                  <p className={styles.subtitle}>{slide.subtitle}</p>
                  <Link href={slide.buttonLink} className={styles.btnPrimary}>
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Botões de navegação */}
      <button className={styles.navButton} onClick={slideAnterior} aria-label="Slide anterior">
        <FaChevronLeft />
      </button>
      <button className={`${styles.navButton} ${styles.navButtonRight}`} onClick={proximoSlide} aria-label="Próximo slide">
        <FaChevronRight />
      </button>

      {/* Indicadores de slide */}
      <div className={styles.dots}>
        {slides.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${index === slideAtual ? styles.active : ''}`}
            onClick={() => setSlideAtual(index)}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
