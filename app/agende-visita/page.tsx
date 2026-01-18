'use client'

import { useState } from 'react'
import styles from './page.module.css'

interface FormularioData {
  nome: string
  telefone: string
  email: string
  veiculo: string
  data: string
  horario: string
  mensagem: string
}

const FORMULARIO_INICIAL: FormularioData = {
  nome: '',
  telefone: '',
  email: '',
  veiculo: '',
  data: '',
  horario: '',
  mensagem: '',
}

const VEICULOS = [
  'Honda Civic',
  'Toyota Corolla',
  'Volkswagen Jetta',
  'Outro',
]

const HORARIOS = [
  '08:00 - 10:00',
  '10:00 - 12:00',
  '14:00 - 16:00',
  '16:00 - 18:00',
]

const WHATSAPP_URL = 'https://wa.me/5511999999999'
const TEMPO_RESET = 5000

export default function AgendeVisitaPage() {
  const [formulario, setFormulario] = useState<FormularioData>(FORMULARIO_INICIAL)
  const [enviado, setEnviado] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormulario(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado:', formulario)
    setEnviado(true)
    setTimeout(() => {
      setEnviado(false)
      setFormulario(FORMULARIO_INICIAL)
    }, TEMPO_RESET)
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Agende uma Visita</h1>
        <p className={styles.subtitle}>Preencha o formulário abaixo e entraremos em contato para agendar sua visita</p>

        <div className={styles.form}>
          {enviado ? (
            <div className={styles.success}>
              <div className={styles.icon}>✓</div>
              <h2>Formulário Enviado com Sucesso!</h2>
              <p>Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formElement}>
              <div className={styles.group}>
                <label>Nome Completo *</label>
                <input type="text" name="nome" required value={formulario.nome} onChange={handleChange} />
              </div>

              <div className={styles.row}>
                <div className={styles.group}>
                  <label>Telefone *</label>
                  <input type="tel" name="telefone" required value={formulario.telefone} onChange={handleChange} />
                </div>
                <div className={styles.group}>
                  <label>E-mail *</label>
                  <input type="email" name="email" required value={formulario.email} onChange={handleChange} />
                </div>
              </div>

              <div className={styles.group}>
                <label>Veículo de Interesse</label>
                <select name="veiculo" value={formulario.veiculo} onChange={handleChange}>
                  <option value="">Selecione um veículo</option>
                  {VEICULOS.map(veiculo => (
                    <option key={veiculo} value={veiculo}>{veiculo}</option>
                  ))}
                </select>
              </div>

              <div className={styles.row}>
                <div className={styles.group}>
                  <label>Data Preferencial</label>
                  <input type="date" name="data" value={formulario.data} onChange={handleChange} />
                </div>
                <div className={styles.group}>
                  <label>Horário Preferencial</label>
                  <select name="horario" value={formulario.horario} onChange={handleChange}>
                    <option value="">Selecione um horário</option>
                    {HORARIOS.map(horario => (
                      <option key={horario} value={horario}>{horario}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div className={styles.group}>
                <label>Mensagem</label>
                <textarea name="mensagem" rows={4} value={formulario.mensagem} onChange={handleChange} placeholder="Deixe sua mensagem ou observações..." />
              </div>

              <button type="submit" className={styles.btn}>Enviar Solicitação</button>
            </form>
          )}
        </div>

        <div className={styles.contact}>
          <p>Ou entre em contato diretamente:</p>
          <a 
            href={WHATSAPP_URL} 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.whatsapp}
          >
            📱 Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
