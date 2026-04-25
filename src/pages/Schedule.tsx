import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const days = ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"]

const classes = [
  { time: "07:00", name: "Утренняя йога", trainer: "Анна Волкова", hall: "Зал 1", duration: 60, type: "Йога", day: ["Пн", "Ср", "Пт"] },
  { time: "08:00", name: "Кардио-микс", trainer: "Максим Попов", hall: "Зал 2", duration: 45, type: "Кардио", day: ["Пн", "Вт", "Чт"] },
  { time: "09:00", name: "Пилатес", trainer: "Ольга Северова", hall: "Зал 3", duration: 60, type: "Пилатес", day: ["Вт", "Чт", "Сб"] },
  { time: "10:00", name: "Зумба", trainer: "Карина Ким", hall: "Зал 2", duration: 55, type: "Танцы", day: ["Пн", "Ср", "Пт", "Вс"] },
  { time: "11:00", name: "Стретчинг", trainer: "Анна Волкова", hall: "Зал 1", duration: 45, type: "Растяжка", day: ["Пн", "Вт", "Чт", "Сб"] },
  { time: "12:00", name: "TRX", trainer: "Денис Артёмов", hall: "Функц. зал", duration: 45, type: "Силовые", day: ["Вт", "Чт", "Сб"] },
  { time: "13:00", name: "Аквааэробика", trainer: "Светлана Нова", hall: "Бассейн", duration: 50, type: "Вода", day: ["Пн", "Ср", "Пт"] },
  { time: "14:00", name: "Йога для начинающих", trainer: "Анна Волкова", hall: "Зал 1", duration: 60, type: "Йога", day: ["Вт", "Чт", "Вс"] },
  { time: "16:00", name: "Детская гимнастика", trainer: "Мария Белова", hall: "Дет. зал", duration: 60, type: "Детский", day: ["Пн", "Ср", "Пт"] },
  { time: "17:00", name: "Body Pump", trainer: "Максим Попов", hall: "Зал 2", duration: 55, type: "Силовые", day: ["Пн", "Вт", "Чт", "Пт"] },
  { time: "18:00", name: "Кроссфит", trainer: "Денис Артёмов", hall: "Функц. зал", duration: 60, type: "Силовые", day: ["Пн", "Ср", "Пт"] },
  { time: "18:30", name: "Танцы Bachata", trainer: "Карина Ким", hall: "Зал 3", duration: 60, type: "Танцы", day: ["Вт", "Чт"] },
  { time: "19:00", name: "Вечерняя йога", trainer: "Ольга Северова", hall: "Зал 1", duration: 60, type: "Йога", day: ["Пн", "Вт", "Ср", "Чт", "Пт"] },
  { time: "19:30", name: "Бокс / Кикбоксинг", trainer: "Алексей Гущин", hall: "Бокс. зал", duration: 60, type: "Единоборства", day: ["Пн", "Ср", "Пт"] },
  { time: "20:00", name: "Ночной стретчинг", trainer: "Анна Волкова", hall: "Зал 1", duration: 45, type: "Растяжка", day: ["Вт", "Чт", "Сб"] },
  { time: "10:00", name: "Семейная зумба", trainer: "Карина Ким", hall: "Зал 2", duration: 60, type: "Танцы", day: ["Вс"] },
  { time: "12:00", name: "Хатха-йога", trainer: "Анна Волкова", hall: "Зал 1", duration: 75, type: "Йога", day: ["Сб", "Вс"] },
]

const typeColors: Record<string, string> = {
  "Йога": "bg-purple-100 text-purple-700",
  "Кардио": "bg-red-100 text-red-700",
  "Пилатес": "bg-pink-100 text-pink-700",
  "Танцы": "bg-yellow-100 text-yellow-700",
  "Растяжка": "bg-green-100 text-green-700",
  "Силовые": "bg-orange-100 text-orange-700",
  "Вода": "bg-blue-100 text-blue-700",
  "Детский": "bg-teal-100 text-teal-700",
  "Единоборства": "bg-gray-100 text-gray-700",
}

export default function Schedule() {
  const [activeDay, setActiveDay] = useState("Пн")
  const [activeType, setActiveType] = useState("Все")
  const navigate = useNavigate()

  const types = ["Все", ...Array.from(new Set(classes.map((c) => c.type)))]
  const filtered = classes
    .filter((c) => c.day.includes(activeDay))
    .filter((c) => activeType === "Все" || c.type === activeType)
    .sort((a, b) => a.time.localeCompare(b.time))

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section className="bg-gray-900 text-white py-20 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 rounded-full px-4 py-1.5 mb-6">
            <Icon name="Calendar" size={14} className="text-orange-400" />
            <span className="text-orange-300 text-sm font-semibold tracking-wide">РАСПИСАНИЕ ЗАНЯТИЙ</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-wider mb-4">РАСПИСАНИЕ</h1>
          <p className="text-gray-300 text-lg max-w-xl mx-auto">Выбери день и направление — запишись на занятие в один клик</p>
        </motion.div>
      </section>

      {/* Schedule Table */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          {/* Day selector */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 justify-center">
            {days.map((day) => (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all whitespace-nowrap ${activeDay === day ? "bg-orange-500 text-white shadow-lg" : "bg-gray-100 text-gray-700 hover:bg-gray-200"}`}
              >
                {day}
              </button>
            ))}
          </div>

          {/* Type filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 mb-8 justify-center flex-wrap">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setActiveType(type)}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${activeType === type ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}
              >
                {type}
              </button>
            ))}
          </div>

          {/* Classes */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <Icon name="Calendar" size={48} className="mx-auto mb-4 opacity-30" />
              <p className="text-lg">Нет занятий по выбранным фильтрам</p>
            </div>
          ) : (
            <div className="grid gap-4 max-w-3xl mx-auto">
              {filtered.map((cls, i) => (
                <motion.div
                  key={`${cls.name}-${cls.time}-${i}`}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="flex items-center gap-4 bg-white border border-gray-100 rounded-xl p-4 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="text-center min-w-[60px]">
                    <div className="text-xl font-black text-gray-900">{cls.time}</div>
                    <div className="text-xs text-gray-400">{cls.duration} мин</div>
                  </div>
                  <div className="w-px h-12 bg-gray-200" />
                  <div className="flex-1">
                    <div className="font-bold text-gray-900 text-base">{cls.name}</div>
                    <div className="text-sm text-gray-500 mt-0.5">
                      <span>{cls.trainer}</span>
                      <span className="mx-2">·</span>
                      <span>{cls.hall}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-semibold px-3 py-1 rounded-full ${typeColors[cls.type] || "bg-gray-100 text-gray-600"}`}>
                      {cls.type}
                    </span>
                    <button
                      onClick={() => navigate("/booking")}
                      className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-bold px-4 py-2 rounded-lg transition-colors whitespace-nowrap"
                    >
                      Записаться
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
