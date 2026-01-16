'use client'

import { useState } from 'react'
import styles from './page.module.css'

export default function AgendeVisitaPage() {
  const [form, setForm] = useState({ nome: '', telefone: '', email: '', veiculo: '', data: '', horario: '', mensagem: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Formulário enviado:', form)
    setSubmitted(true)
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <div className={styles.page}>
      <div className="container">
        <h1 className={styles.title}>Agende uma Visita</h1>
        <p className={styles.subtitle}>Preencha o formulário abaixo e entraremos em contato para agendar sua visita</p>

        <div className={styles.form}>
          {submitted ? (
            <div className={styles.success}>
              <div className={styles.icon}>✓</div>
              <h2>Formulário Enviado com Sucesso!</h2>
              <p>Entraremos em contato em breve.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className={styles.formElement}>
              <div className={styles.group}>
                <label>Nome Completo *</label>
                <input type="text" name="nome" required value={form.nome} onChange={handleChange} />
              </div>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label>Telefone *</label>
                  <input type="tel" name="telefone" required value={form.telefone} onChange={handleChange} />
                </div>
                <div className={styles.group}>
                  <label>E-mail *</label>
                  <input type="email" name="email" required value={form.email} onChange={handleChange} />
                </div>
              </div>
              <div className={styles.group}>
                <label>Veículo de Interesse</label>
                <select name="veiculo" value={form.veiculo} onChange={handleChange}>
                  <option value="">Selecione um veículo</option>
                  <option value="Honda Civic">Honda Civic</option>
                  <option value="Toyota Corolla">Toyota Corolla</option>
                  <option value="Volkswagen Jetta">Volkswagen Jetta</option>
                  <option value="Outro">Outro</option>
                </select>
              </div>
              <div className={styles.row}>
                <div className={styles.group}>
                  <label>Data Preferencial</label>
                  <input type="date" name="data" value={form.data} onChange={handleChange} />
                </div>
                <div className={styles.group}>
                  <label>Horário Preferencial</label>
                  <select name="horario" value={form.horario} onChange={handleChange}>
                    <option value="">Selecione um horário</option>
                    <option value="08:00 - 10:00">08:00 - 10:00</option>
                    <option value="10:00 - 12:00">10:00 - 12:00</option>
                    <option value="14:00 - 16:00">14:00 - 16:00</option>
                    <option value="16:00 - 18:00">16:00 - 18:00</option>
                  </select>
                </div>
              </div>
              <div className={styles.group}>
                <label>Mensagem</label>
                <textarea name="mensagem" rows={4} value={form.mensagem} onChange={handleChange} placeholder="Deixe sua mensagem ou observações..." />
              </div>
              <button type="submit" className={styles.btn}>Enviar Solicitação</button>
            </form>
          )}
        </div>

        <div className={styles.contact}>
          <p>Ou entre em contato diretamente:</p>
          <a href="https://wa.me/5511999999999" target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
            📱 Falar no WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
