import { useNavigate } from "react-router-dom"
import Icon from "@/components/ui/icon"

export default function Footer() {
  const navigate = useNavigate()

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div>
            <div className="font-black text-3xl text-white tracking-widest mb-4">AVAX</div>
            <p className="text-sm leading-relaxed mb-4">
              Премиальный фитнес-центр в Краснодаре. Более 10 лет помогаем людям становиться лучшей версией себя.
            </p>
            <div className="flex gap-3">
              {[
                { icon: "Instagram", label: "Instagram" },
                { icon: "Facebook", label: "Facebook" },
                { icon: "Youtube", label: "YouTube" },
              ].map((s) => (
                <div key={s.label} className="w-9 h-9 bg-gray-800 hover:bg-orange-500 rounded-full flex items-center justify-center cursor-pointer transition-colors">
                  <Icon name={s.icon} size={16} className="text-white" fallback="Share2" />
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Навигация</div>
            {[
              { name: "Главная", href: "/" },
              { name: "Услуги", href: "/services" },
              { name: "Расписание", href: "/schedule" },
              { name: "Бронирование", href: "/booking" },
              { name: "Контакты", href: "/contacts" },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => { navigate(item.href); window.scrollTo({ top: 0 }) }}
                className="block text-sm py-1.5 hover:text-orange-400 transition-colors text-left"
              >
                {item.name}
              </button>
            ))}
          </div>

          <div>
            <div className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Режим работы</div>
            <div className="space-y-1.5 text-sm">
              <div className="flex justify-between">
                <span>Пн–Пт</span>
                <span className="text-white">07:00 – 23:00</span>
              </div>
              <div className="flex justify-between">
                <span>Суббота</span>
                <span className="text-white">08:00 – 22:00</span>
              </div>
              <div className="flex justify-between">
                <span>Воскресенье</span>
                <span className="text-white">09:00 – 21:00</span>
              </div>
            </div>
          </div>

          <div>
            <div className="font-bold text-white mb-4 uppercase tracking-wider text-sm">Контакты</div>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <Icon name="MapPin" size={16} className="text-orange-400 mt-0.5 shrink-0" />
                <span>г. Краснодар, ул. Красная, 176</span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Phone" size={16} className="text-orange-400 shrink-0" />
                <a href="tel:+78612000000" className="hover:text-orange-400 transition-colors">+7 (861) 200-00-00</a>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="Mail" size={16} className="text-orange-400 shrink-0" />
                <a href="mailto:info@avax-fit.ru" className="hover:text-orange-400 transition-colors">info@avax-fit.ru</a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-xs">
          <span>© {new Date().getFullYear()} AVAX Fitness Club. Все права защищены.</span>
          <span>Краснодар, Россия</span>
        </div>
      </div>
    </footer>
  )
}
