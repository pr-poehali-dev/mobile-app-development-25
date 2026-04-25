import { LiquidButton } from "@/components/ui/liquid-glass-button"
import { ChevronLeft, ChevronRight, X, Menu } from "lucide-react"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"

const slides = [
  {
    image: "https://cdn.poehali.dev/projects/f6966ab6-fa4c-4284-9f4b-0e91aa96e544/files/02832106-f21c-4313-b1cb-2866a2e171b4.jpg",
    alt: "Тренажёрный зал Avax Fitness Краснодар",
    tag: "ФИТНЕС-КОМПЛЕКС",
    heading: "AVAX FITNESS",
    sub: "Краснодар — новый уровень тренировок",
  },
  {
    image: "https://cdn.poehali.dev/projects/f6966ab6-fa4c-4284-9f4b-0e91aa96e544/files/2881c506-a894-491e-9384-03764873be20.jpg",
    alt: "Персональные тренировки Avax",
    tag: "ПЕРСОНАЛЬНЫЕ ТРЕНИРОВКИ",
    heading: "ТВОЙ ТРЕНЕР",
    sub: "Опытные инструкторы для любого уровня",
  },
  {
    image: "https://cdn.poehali.dev/projects/f6966ab6-fa4c-4284-9f4b-0e91aa96e544/files/494e286d-eeff-42d9-9ad1-65f66ac453e8.jpg",
    alt: "Бассейн и SPA Avax",
    tag: "БАССЕЙН И SPA",
    heading: "ОТДЫХ И ВОССТАНОВЛЕНИЕ",
    sub: "Бассейн, сауна и зона релаксации",
  },
]

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)

  const navItems = [
    { name: "Главная", href: "/" },
    { name: "Услуги", href: "/services" },
    { name: "Расписание", href: "/schedule" },
    { name: "Бронирование", href: "/booking" },
    { name: "Контакты", href: "/contacts" },
  ]

  return (
    <div id="hero" className="relative h-screen w-full overflow-hidden bg-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url('${slide.image}')` }}
        >
          <div className="absolute inset-0 bg-black/55" />
        </div>
      ))}

      {/* Navbar */}
      <nav className="relative z-20 flex items-center justify-between px-6 md:px-10 py-5">
        <button
          onClick={() => navigate("/")}
          className="text-white font-black text-2xl tracking-widest hover:text-orange-400 transition-colors"
        >
          AVAX
        </button>
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => navigate(item.href)}
              className="relative text-white hover:text-orange-300 transition-colors font-medium tracking-wide pb-1 group"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => navigate("/booking")}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2 rounded transition-colors text-sm"
          >
            Записаться
          </button>
        </div>
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="absolute top-0 left-0 w-full h-full bg-black/90 z-30 md:hidden flex flex-col items-center justify-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => { navigate(item.href); setIsMenuOpen(false) }}
              className="text-white text-2xl font-bold tracking-wider hover:text-orange-400 transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => { navigate("/booking"); setIsMenuOpen(false) }}
            className="mt-4 bg-orange-500 text-white font-bold px-10 py-3 rounded text-lg"
          >
            Записаться
          </button>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 pb-16 gap-0">
        <div className="text-center text-white max-w-4xl flex flex-col items-center">
          <div className="inline-flex items-center gap-2 bg-orange-500/20 border border-orange-400/40 rounded-full px-4 py-1.5 mb-5">
            <span className="w-2 h-2 rounded-full bg-orange-400 animate-pulse" />
            <span className="text-orange-300 text-sm font-semibold tracking-widest">
              {slides[currentSlide].tag}
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-wider mb-4 leading-tight whitespace-pre-line">
            {slides[currentSlide].heading}
          </h1>
          <p className="text-xl md:text-2xl font-light tracking-wide mb-8 text-gray-200">
            {slides[currentSlide].sub}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <LiquidButton
              size="xxl"
              className="font-semibold text-lg tracking-wide"
              onClick={() => navigate("/booking")}
            >
              Записаться бесплатно
            </LiquidButton>
            <button
              onClick={() => navigate("/services")}
              className="border-2 border-white/50 hover:border-orange-400 text-white hover:text-orange-300 font-bold px-8 py-4 rounded transition-all text-lg"
            >
              Наши услуги
            </button>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-8 md:gap-12 text-center">
            {[
              { val: "3000+", label: "Участников" },
              { val: "50+", label: "Тренеров" },
              { val: "2000 м²", label: "Площадь" },
              { val: "7 лет", label: "На рынке" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-2xl md:text-3xl font-black text-orange-400">{s.val}</div>
                <div className="text-gray-300 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button onClick={prevSlide} className="text-white hover:text-orange-400 transition-colors p-2">
          <ChevronLeft size={24} />
        </button>
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`transition-all duration-300 rounded-full ${currentSlide === i ? "w-6 h-2 bg-orange-400" : "w-2 h-2 bg-white/40 hover:bg-white/70"}`}
          />
        ))}
        <button onClick={nextSlide} className="text-white hover:text-orange-400 transition-colors p-2">
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  )
}