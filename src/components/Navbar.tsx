import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import Icon from "@/components/ui/icon"

const navItems = [
  { name: "Главная", href: "/" },
  { name: "Услуги", href: "/services" },
  { name: "Расписание", href: "/schedule" },
  { name: "Бронирование", href: "/booking" },
  { name: "Контакты", href: "/contacts" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const handleNav = (href: string) => {
    navigate(href)
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <button
          onClick={() => handleNav("/")}
          className="font-black text-2xl tracking-widest text-white hover:text-orange-400 transition-colors"
        >
          AVAX
        </button>

        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNav(item.href)}
              className={`relative font-medium tracking-wide pb-1 group transition-colors ${location.pathname === item.href ? "text-orange-400" : "text-gray-300 hover:text-white"}`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-orange-400 transition-all duration-300 ${location.pathname === item.href ? "w-full" : "w-0 group-hover:w-full"}`} />
            </button>
          ))}
          <button
            onClick={() => handleNav("/booking")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded transition-colors text-sm"
          >
            Записаться
          </button>
        </div>

        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <Icon name={isMenuOpen ? "X" : "Menu"} size={26} />
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-900 border-t border-gray-800 px-6 pb-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNav(item.href)}
              className={`block w-full text-left py-3 border-b border-gray-800 text-lg font-medium transition-colors ${location.pathname === item.href ? "text-orange-400" : "text-gray-300"}`}
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => handleNav("/booking")}
            className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 rounded transition-colors"
          >
            Записаться
          </button>
        </div>
      )}
    </nav>
  )
}
