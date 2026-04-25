import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { useState } from "react"
import Icon from "@/components/ui/icon"

const contacts = [
  {
    icon: "MapPin",
    title: "Адрес",
    lines: ["г. Краснодар", "ул. Красная, 176"],
    link: "https://yandex.ru/maps/?ll=38.9819%2C45.0412&z=16&pt=38.9819%2C45.0412",
  },
  {
    icon: "Phone",
    title: "Телефон",
    lines: ["+7 (861) 200-00-00", "+7 (918) 000-00-00"],
    link: "tel:+78612000000",
  },
  {
    icon: "Mail",
    title: "Email",
    lines: ["info@avax-fit.ru"],
    link: "mailto:info@avax-fit.ru",
  },
  {
    icon: "Clock",
    title: "Режим работы",
    lines: ["Пн–Пт: 07:00 – 23:00", "Суббота: 08:00 – 22:00", "Воскресенье: 09:00 – 21:00"],
    link: null,
  },
]

const socials = [
  { icon: "Instagram", label: "Instagram", color: "hover:bg-pink-500", href: "#" },
  { icon: "Youtube", label: "YouTube", color: "hover:bg-red-500", href: "#" },
  { icon: "MessageCircle", label: "Telegram", color: "hover:bg-sky-500", href: "#" },
  { icon: "Phone", label: "WhatsApp", color: "hover:bg-green-500", href: "#" },
]

const directions = [
  {
    icon: "Car",
    title: "На автомобиле",
    text: "Собственная парковка на 100 мест рядом со входом. Въезд с ул. Красной.",
  },
  {
    icon: "Bus",
    title: "На транспорте",
    text: "Остановка «Красная/Пушкина». Автобусы: №2, 5, 15, 45. Трамвай: №2, 4.",
  },
  {
    icon: "Footprints",
    title: "Пешком",
    text: "5 минут от центра Краснодара. Ориентир — ТЦ Галерея и сквер Дружбы.",
  },
]

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" })
  const [sent, setSent] = useState(false)
  const set = (field: string, value: string) => setForm((prev) => ({ ...prev, [field]: value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 rounded-full px-4 py-1.5 mb-6">
            <Icon name="MapPin" size={14} className="text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold tracking-wide">КАК НАС НАЙТИ</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-wider mb-4">КОНТАКТЫ</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">
            Мы в самом центре Краснодара. Приходите — покажем клуб и проведём первую тренировку бесплатно!
          </p>
        </motion.div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left — contact info */}
            <div>
              <h2 className="text-2xl font-black text-gray-900 mb-8">Как с нами связаться</h2>
              <div className="space-y-6 mb-10">
                {contacts.map((c) => (
                  <motion.div
                    key={c.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-11 h-11 bg-orange-50 rounded-xl flex items-center justify-center shrink-0">
                      <Icon name={c.icon} size={20} className="text-orange-500" fallback="Info" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 mb-1">{c.title}</div>
                      {c.lines.map((line) => (
                        c.link ? (
                          <a key={line} href={c.link} target="_blank" rel="noopener noreferrer" className="block text-gray-600 hover:text-orange-500 transition-colors">
                            {line}
                          </a>
                        ) : (
                          <div key={line} className="text-gray-600">{line}</div>
                        )
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick CTA */}
              <a
                href="https://yandex.ru/maps/?ll=38.9819%2C45.0412&z=16&pt=38.9819%2C45.0412"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold px-6 py-3 rounded-xl transition-colors mb-8"
              >
                <Icon name="Navigation" size={18} />
                Построить маршрут
              </a>

              {/* Socials */}
              <div>
                <div className="font-bold text-gray-900 mb-4">Мы в социальных сетях</div>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href={s.href}
                      className={`w-11 h-11 bg-gray-100 ${s.color} text-gray-600 hover:text-white rounded-xl flex items-center justify-center cursor-pointer transition-all`}
                      aria-label={s.label}
                    >
                      <Icon name={s.icon} size={20} fallback="Share2" />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — feedback form */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h2 className="text-2xl font-black text-gray-900 mb-2">Напишите нам</h2>
              <p className="text-gray-500 text-sm mb-6">Ответим в течение 30 минут в рабочее время</p>
              {!sent ? (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Ваше имя *</label>
                    <input
                      type="text"
                      placeholder="Иван Иванов"
                      value={form.name}
                      onChange={(e) => set("name", e.target.value)}
                      required
                      className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Телефон *</label>
                    <input
                      type="tel"
                      placeholder="+7 (000) 000-00-00"
                      value={form.phone}
                      onChange={(e) => set("phone", e.target.value)}
                      required
                      className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1.5">Сообщение</label>
                    <textarea
                      placeholder="Ваш вопрос, пожелание или запрос..."
                      value={form.message}
                      onChange={(e) => set("message", e.target.value)}
                      rows={4}
                      className="w-full border border-gray-200 bg-white rounded-xl px-4 py-3 focus:outline-none focus:border-orange-400 transition-colors resize-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl transition-colors text-lg"
                  >
                    Отправить сообщение
                  </button>
                  <p className="text-xs text-gray-400 text-center">
                    Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="CheckCircle" size={32} className="text-green-500" />
                  </div>
                  <h3 className="text-xl font-black text-gray-900 mb-2">Сообщение отправлено!</h3>
                  <p className="text-gray-500 text-sm">Мы свяжемся с вами в ближайшее время.</p>
                  <button
                    onClick={() => { setSent(false); setForm({ name: "", phone: "", message: "" }) }}
                    className="mt-6 text-orange-500 hover:text-orange-600 font-medium text-sm"
                  >
                    Отправить ещё одно сообщение
                  </button>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Yandex Map — Avax Fitness Краснодар */}
      <section className="pb-0">
        <div className="w-full h-[450px] overflow-hidden">
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=38.981900%2C45.041200&z=16&l=map&pt=38.981900%2C45.041200%2Cpm2rdm&text=AVAX%20Fitness%20%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80"
            width="100%"
            height="450"
            frameBorder="0"
            title="Карта AVAX Fitness Краснодар"
            style={{ border: 0 }}
            allowFullScreen
          />
        </div>
      </section>

      {/* How to get there */}
      <section className="py-14 bg-gray-50">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-2xl font-black text-gray-900 mb-8 text-center">Как добраться</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {directions.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center shadow-sm"
              >
                <div className="w-12 h-12 bg-orange-50 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon name={d.icon} size={22} className="text-orange-500" fallback="Navigation" />
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{d.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{d.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
