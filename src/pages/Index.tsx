import HeroSection from "@/components/HeroSection"
import Footer from "@/components/Footer"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import Icon from "@/components/ui/icon"
import { useNavigate } from "react-router-dom"

const services = [
  { icon: "Dumbbell", title: "Тренажёрный зал", desc: "Более 200 единиц оборудования премиум-класса Technogym и Hammer Strength" },
  { icon: "Users", title: "Групповые занятия", desc: "50+ видов тренировок: йога, пилатес, зумба, кроссфит, body pump и многое другое" },
  { icon: "User", title: "Персональный тренер", desc: "Индивидуальные программы от сертифицированных тренеров с опытом от 5 лет" },
  { icon: "Waves", title: "Бассейн и SPA", desc: "25-метровый бассейн, финская сауна, турецкий хаммам и зона релаксации" },
  { icon: "Baby", title: "Детский фитнес", desc: "Развивающие занятия для детей от 3 лет: гимнастика, плавание, единоборства" },
  { icon: "Apple", title: "Фитнес-бар", desc: "Спортивное питание, свежевыжатые соки, протеиновые коктейли и здоровое меню" },
]

const advantages = [
  { icon: "ShieldCheck", title: "Профессиональные тренеры", desc: "Все тренеры имеют международные сертификаты и проходят регулярное обучение" },
  { icon: "Clock", title: "Удобное расписание", desc: "Работаем 7 дней в неделю с 7:00 до 23:00. Онлайн-запись за 2 минуты" },
  { icon: "Sparkles", title: "Современное оборудование", desc: "Регулярное обновление тренажёров. Оборудование Technogym и Hammer Strength" },
  { icon: "Heart", title: "Забота о здоровье", desc: "Медицинский контроль, ЭКГ при необходимости, фитнес-тестирование на старте" },
]

const missionText =
  "В AVAX Fitness мы верим: каждый заслуживает лучшей версии себя. Мы создали пространство, где современные технологии и профессиональный подход объединяются в одно мощное целое. Здесь каждая тренировка — шаг к вашей цели: будь то снижение веса, набор массы, восстановление после травм или просто здоровый образ жизни. Наши тренеры, оборудование и атмосфера — всё работает ради вашего результата. Приходите в Avax — и начните трансформацию уже сегодня."

export default function Index() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <HeroSection />

      {/* Mission */}
      <section className="relative py-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6"
            >
              <Icon name="Target" size={14} className="text-orange-500" />
              <span className="text-orange-600 text-sm font-semibold tracking-wide">НАША ФИЛОСОФИЯ</span>
            </motion.div>
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">НАША МИССИЯ</h2>
            <TextGradientScroll
              text={missionText}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-wider text-white mb-4">ЧТО МЫ ПРЕДЛАГАЕМ</h2>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Полный комплекс фитнес-услуг для достижения ваших целей</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                viewport={{ once: true }}
                className="bg-gray-900 border border-gray-800 hover:border-orange-500/50 rounded-2xl p-7 group transition-all duration-300 cursor-pointer"
                onClick={() => navigate("/services")}
              >
                <div className="w-12 h-12 bg-orange-500/10 group-hover:bg-orange-500/20 rounded-xl flex items-center justify-center mb-5 transition-colors">
                  <Icon name={s.icon} size={24} className="text-orange-400" fallback="Star" />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{s.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <button
              onClick={() => navigate("/services")}
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-10 py-4 rounded-xl transition-colors text-lg"
            >
              Все услуги и цены
            </button>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-wider text-gray-900 mb-4">ПОЧЕМУ AVAX?</h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">Мы создали пространство, где всё работает ради вашего результата</p>
          </motion.div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {advantages.map((a, i) => (
              <motion.div
                key={a.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-orange-50 rounded-2xl flex items-center justify-center mx-auto mb-5">
                  <Icon name={a.icon} size={30} className="text-orange-500" fallback="Star" />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-3">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-14"
          >
            <h2 className="text-4xl md:text-5xl font-black tracking-wider text-gray-900 mb-4">
              Что говорят наши{" "}
              <span className="text-orange-500">КЛИЕНТЫ</span>
            </h2>
            <p className="text-gray-500 text-xl max-w-2xl mx-auto">Реальные отзывы от людей, которые уже изменили свою жизнь вместе с Avax</p>
          </motion.div>
          <StaggerTestimonials />
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-600/20 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6">
              ГОТОВ НАЧАТЬ?
            </h2>
            <p className="text-gray-300 text-xl mb-4 max-w-2xl mx-auto">
              Первое пробное занятие — бесплатно! Приходите и убедитесь сами.
            </p>
            <p className="text-orange-400 font-bold text-lg mb-10">
              📍 Краснодар, ул. Красная, 176 &nbsp;|&nbsp; ☎ +7 (861) 200-00-00
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/booking")}
                className="bg-orange-500 hover:bg-orange-600 text-white font-black px-12 py-5 rounded-xl text-xl transition-colors"
              >
                Записаться бесплатно
              </button>
              <button
                onClick={() => navigate("/contacts")}
                className="border-2 border-white/40 hover:border-orange-400 text-white hover:text-orange-300 font-bold px-12 py-5 rounded-xl text-xl transition-all"
              >
                Написать нам
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
