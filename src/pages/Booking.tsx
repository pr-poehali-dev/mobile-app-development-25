import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const services = [
  "Тренажёрный зал",
  "Групповое занятие",
  "Персональная тренировка",
  "Бассейн и SPA",
  "Детский фитнес",
  "Консультация тренера",
  "Пробное занятие (бесплатно)",
]

const trainers = [
  "Без предпочтений",
  "Анна Волкова (йога, стретчинг)",
  "Максим Попов (кардио, body pump)",
  "Ольга Северова (пилатес)",
  "Денис Артёмов (кроссфит, TRX)",
  "Карина Ким (зумба, танцы)",
  "Алексей Гущин (бокс, единоборства)",
  "Мария Белова (детский фитнес)",
]

const times = ["07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "16:00", "17:00", "18:00", "19:00", "20:00"]

export default function Booking() {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    service: "",
    trainer: "Без предпочтений",
    date: "",
    time: "",
    name: "",
    phone: "",
    comment: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const set = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 rounded-full px-4 py-1.5 mb-6">
            <Icon name="CalendarCheck" size={14} className="text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold tracking-wide">ОНЛАЙН-ЗАПИСЬ</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-wider mb-4">БРОНИРОВАНИЕ</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Запишитесь на тренировку за 2 минуты. Первое пробное занятие — бесплатно!</p>
        </motion.div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-6 max-w-2xl">
          {!submitted ? (
            <>
              {/* Steps */}
              <div className="flex items-center justify-center gap-2 mb-12">
                {[1, 2, 3].map((s) => (
                  <div key={s} className="flex items-center gap-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all ${step >= s ? "bg-orange-500 text-white" : "bg-gray-100 text-gray-400"}`}>
                      {s}
                    </div>
                    {s < 3 && <div className={`w-12 h-0.5 ${step > s ? "bg-orange-500" : "bg-gray-200"}`} />}
                  </div>
                ))}
              </div>
              <div className="flex justify-center gap-16 mb-10 -mt-8">
                {["Услуга", "Дата и время", "Контакты"].map((label, i) => (
                  <span key={label} className={`text-xs font-medium ${step === i + 1 ? "text-orange-500" : "text-gray-400"}`}>{label}</span>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {/* Step 1 */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Выберите услугу *</label>
                        <div className="grid grid-cols-1 gap-2">
                          {services.map((s) => (
                            <button
                              type="button"
                              key={s}
                              onClick={() => set("service", s)}
                              className={`flex items-center gap-3 p-4 rounded-xl border-2 text-left transition-all ${form.service === s ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-gray-300"}`}
                            >
                              <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center shrink-0 ${form.service === s ? "border-orange-500" : "border-gray-300"}`}>
                                {form.service === s && <div className="w-2.5 h-2.5 rounded-full bg-orange-500" />}
                              </div>
                              <span className={`font-medium ${form.service === s ? "text-orange-700" : "text-gray-700"}`}>{s}</span>
                            </button>
                          ))}
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Предпочтительный тренер</label>
                        <select
                          value={form.trainer}
                          onChange={(e) => set("trainer", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-orange-400 bg-white"
                        >
                          {trainers.map((t) => <option key={t}>{t}</option>)}
                        </select>
                      </div>
                      <button
                        type="button"
                        onClick={() => form.service && setStep(2)}
                        disabled={!form.service}
                        className="w-full bg-orange-500 disabled:bg-gray-200 disabled:text-gray-400 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-lg"
                      >
                        Далее →
                      </button>
                    </div>
                  )}

                  {/* Step 2 */}
                  {step === 2 && (
                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Дата *</label>
                        <input
                          type="date"
                          value={form.date}
                          min={new Date().toISOString().split("T")[0]}
                          onChange={(e) => set("date", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-700 focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-3">Время *</label>
                        <div className="grid grid-cols-4 gap-2">
                          {times.map((t) => (
                            <button
                              type="button"
                              key={t}
                              onClick={() => set("time", t)}
                              className={`py-3 rounded-xl border-2 font-bold text-sm transition-all ${form.time === t ? "border-orange-500 bg-orange-50 text-orange-700" : "border-gray-200 hover:border-gray-300 text-gray-700"}`}
                            >
                              {t}
                            </button>
                          ))}
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(1)} className="flex-1 border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-xl hover:border-gray-300 transition-colors">
                          ← Назад
                        </button>
                        <button
                          type="button"
                          onClick={() => form.date && form.time && setStep(3)}
                          disabled={!form.date || !form.time}
                          className="flex-1 bg-orange-500 disabled:bg-gray-200 disabled:text-gray-400 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors"
                        >
                          Далее →
                        </button>
                      </div>
                    </div>
                  )}

                  {/* Step 3 */}
                  {step === 3 && (
                    <div className="space-y-6">
                      {/* Summary */}
                      <div className="bg-orange-50 border border-orange-200 rounded-xl p-4 space-y-1.5">
                        <div className="font-bold text-orange-800 mb-2">Ваш выбор:</div>
                        <div className="text-sm text-orange-700 flex items-center gap-2">
                          <Icon name="Check" size={14} /> {form.service}
                        </div>
                        <div className="text-sm text-orange-700 flex items-center gap-2">
                          <Icon name="Calendar" size={14} /> {form.date} в {form.time}
                        </div>
                        <div className="text-sm text-orange-700 flex items-center gap-2">
                          <Icon name="User" size={14} /> {form.trainer}
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Ваше имя *</label>
                        <input
                          type="text"
                          placeholder="Иван Иванов"
                          value={form.name}
                          onChange={(e) => set("name", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Телефон *</label>
                        <input
                          type="tel"
                          placeholder="+7 (000) 000-00-00"
                          value={form.phone}
                          onChange={(e) => set("phone", e.target.value)}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Комментарий</label>
                        <textarea
                          placeholder="Любые пожелания или вопросы..."
                          value={form.comment}
                          onChange={(e) => set("comment", e.target.value)}
                          rows={3}
                          className="w-full border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 resize-none"
                        />
                      </div>
                      <div className="flex gap-3">
                        <button type="button" onClick={() => setStep(2)} className="flex-1 border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-xl hover:border-gray-300 transition-colors">
                          ← Назад
                        </button>
                        <button
                          type="submit"
                          disabled={!form.name || !form.phone}
                          className="flex-1 bg-orange-500 disabled:bg-gray-200 disabled:text-gray-400 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors"
                        >
                          Записаться
                        </button>
                      </div>
                    </div>
                  )}
                </motion.div>
              </form>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon name="CheckCircle" size={40} className="text-green-500" />
              </div>
              <h2 className="text-3xl font-black text-gray-900 mb-3">Вы записаны!</h2>
              <p className="text-gray-600 mb-2">
                <span className="font-semibold">{form.service}</span> — {form.date} в {form.time}
              </p>
              <p className="text-gray-500 mb-8 text-sm">Мы перезвоним вам по номеру <span className="font-semibold">{form.phone}</span> для подтверждения записи.</p>
              <button
                onClick={() => { setSubmitted(false); setStep(1); setForm({ service: "", trainer: "Без предпочтений", date: "", time: "", name: "", phone: "", comment: "" }) }}
                className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-8 py-3 rounded-xl transition-colors"
              >
                Записаться ещё раз
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Info blocks */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "Phone", title: "По телефону", text: "+7 (861) 200-00-00\nЕжедневно 8:00 – 22:00" },
              { icon: "MessageCircle", title: "В WhatsApp", text: "Напишите нам и мы запишем вас в течение 5 минут" },
              { icon: "MapPin", title: "В клубе", text: "ул. Красная, 176\nРецепция работает с открытия" },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-xl p-5 border border-gray-100 text-center">
                <div className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Icon name={item.icon} size={18} className="text-orange-500" />
                </div>
                <div className="font-bold text-gray-900 mb-1">{item.title}</div>
                <div className="text-sm text-gray-500 whitespace-pre-line">{item.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
