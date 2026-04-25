import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

const services = [
  {
    icon: "Dumbbell",
    title: "Тренажёрный зал",
    description: "Просторный зал 2 000 м² с оборудованием Technogym и Life Fitness. Зоны кардио, свободных весов и функционального тренинга. Работает ежедневно.",
    image: "https://cdn.poehali.dev/projects/f6966ab6-fa4c-4284-9f4b-0e91aa96e544/files/02832106-f21c-4313-b1cb-2866a2e171b4.jpg",
    price: "от 2 500 ₽/мес",
    features: ["Кардиозона 80+ тренажёров", "Зона свободных весов", "Функциональный тренинг", "Зеркальные залы"],
  },
  {
    icon: "Users",
    title: "Групповые занятия",
    description: "Более 50 направлений: йога, пилатес, зумба, кроссфит, аэробика, стретчинг, TRX, боксинг и многое другое. Занятия в уютных залах с профессиональным звуком.",
    image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=600&q=80",
    price: "от 3 500 ₽/мес",
    features: ["50+ направлений", "Утренние и вечерние группы", "Опытные инструкторы", "Онлайн-запись"],
  },
  {
    icon: "User",
    title: "Персональный тренер",
    description: "Индивидуальные программы тренировок и питания. Тренеры с опытом более 5 лет, сертифицированные специалисты. Первое пробное занятие бесплатно.",
    image: "https://cdn.poehali.dev/projects/f6966ab6-fa4c-4284-9f4b-0e91aa96e544/files/2881c506-a894-491e-9384-03764873be20.jpg",
    price: "от 1 500 ₽/занятие",
    features: ["Оценка физической формы", "Индивидуальная программа", "Контроль питания", "Первое занятие бесплатно"],
  },
  {
    icon: "Waves",
    title: "Бассейн и SPA",
    description: "Олимпийский бассейн 25 м, детская купель, хаммам, финская сауна, русская баня и зона релакса. Идеально для восстановления после тренировок.",
    image: "https://cdn.poehali.dev/projects/f6966ab6-fa4c-4284-9f4b-0e91aa96e544/files/494e286d-eeff-42d9-9ad1-65f66ac453e8.jpg",
    price: "от 4 000 ₽/мес",
    features: ["Бассейн 25 м", "Хаммам и сауна", "Детская купель", "Зона релакса"],
  },
  {
    icon: "Baby",
    title: "Детский фитнес",
    description: "Спортивные секции для детей с 3 лет: гимнастика, плавание, танцы, каратэ. Опытные педагоги и безопасное оборудование. Развивающие программы.",
    image: "https://images.unsplash.com/photo-1551649001-7a2d3a9e8b4c?w=600&q=80",
    price: "от 2 000 ₽/мес",
    features: ["С 3 лет", "Гимнастика и танцы", "Детское плавание", "Безопасный инвентарь"],
  },
  {
    icon: "Salad",
    title: "Nutrition Bar",
    description: "Здоровое питание и спортивное питание прямо в клубе. Протеиновые коктейли, смузи, полноценные блюда для спортсменов. Консультация диетолога.",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&q=80",
    price: "от 150 ₽",
    features: ["Протеиновые коктейли", "Свежие смузи", "ПП-блюда", "Консультация диетолога"],
  },
]

const plans = [
  {
    name: "Старт",
    price: "2 500",
    period: "месяц",
    color: "border-gray-200",
    btnColor: "bg-gray-900 hover:bg-gray-800",
    features: ["Тренажёрный зал", "Раздевалки и душ", "Безлимитные визиты", "Карта клиента"],
  },
  {
    name: "Премиум",
    price: "4 500",
    period: "месяц",
    color: "border-orange-400",
    btnColor: "bg-orange-500 hover:bg-orange-600",
    badge: "Популярный",
    features: ["Тренажёрный зал", "Групповые занятия", "Бассейн и SPA", "Фитнес-тестирование", "Безлимитные визиты"],
  },
  {
    name: "VIP",
    price: "8 000",
    period: "месяц",
    color: "border-gray-800",
    btnColor: "bg-gray-950 hover:bg-black",
    features: ["Всё из Премиум", "2 персональных тренировки", "Nutrition консультация", "Гостевые визиты (2/мес)", "Приоритетная запись"],
  },
]

export default function Services() {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero */}
      <section
        className="relative py-28 bg-gray-900 text-white text-center"
        style={{
          backgroundImage: "url(https://cdn.poehali.dev/projects/f6966ab6-fa4c-4284-9f4b-0e91aa96e544/files/02832106-f21c-4313-b1cb-2866a2e171b4.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 container mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
            <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 rounded-full px-4 py-1.5 mb-6">
              <Icon name="Dumbbell" size={14} className="text-orange-400" />
              <span className="text-orange-300 text-sm font-semibold tracking-wide">УСЛУГИ И ЦЕНЫ</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-black tracking-wider mb-4">НАШИ УСЛУГИ</h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">Всё для вашего результата под одной крышей</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center">
                      <Icon name={service.icon} size={20} className="text-orange-500" fallback="Dumbbell" />
                    </div>
                    <h3 className="text-xl font-black text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{service.description}</p>
                  <ul className="space-y-1.5 mb-5">
                    {service.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                        <Icon name="Check" size={14} className="text-orange-500 shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-orange-500 font-bold">{service.price}</span>
                    <button
                      onClick={() => navigate("/booking")}
                      className="bg-gray-900 hover:bg-orange-500 text-white text-sm font-bold px-4 py-2 rounded transition-colors"
                    >
                      Записаться
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">АБОНЕМЕНТЫ</h2>
            <p className="text-gray-600 text-lg">Выберите подходящий вариант</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, i) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                viewport={{ once: true }}
                className={`relative bg-white rounded-2xl border-2 ${plan.color} p-8 shadow-sm hover:shadow-lg transition-shadow`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-4 py-1 rounded-full">
                    {plan.badge}
                  </div>
                )}
                <h3 className="text-2xl font-black text-gray-900 mb-1">{plan.name}</h3>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-black text-gray-900">{plan.price} ₽</span>
                  <span className="text-gray-500 text-sm">/ {plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-700">
                      <Icon name="CheckCircle" size={16} className="text-orange-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => navigate("/booking")}
                  className={`w-full ${plan.btnColor} text-white font-bold py-3 rounded-xl transition-colors`}
                >
                  Выбрать
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}