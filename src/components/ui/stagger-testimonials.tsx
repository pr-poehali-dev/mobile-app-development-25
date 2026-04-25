import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// AVAX Fitness Krasnodar testimonials
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "AVAX — это лучший фитнес-клуб в Краснодаре! За 3 месяца занятий с персональным тренером я сбросил 12 кг и кардинально изменил образ жизни. Оборудование на высшем уровне.",
    by: "Сергей Иванов, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SergeyIvanov&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Хожу на йогу к Анне Волковой уже год — это просто космос! После каждого занятия чувствую себя заново рождённой. Записалась ещё и на пилатес. Спасибо AVAX!",
    by: "Марина Петрова, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaPetrova&backgroundColor=10b981&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "Бассейн и SPA зона в AVAX — просто восторг! После силовых тренировок иду в хаммам, и это полное восстановление. Стоимость абонемента полностью оправдана.",
    by: "Анна Козлова, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaKozlova&backgroundColor=8b5cf6&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Записал сына на детскую гимнастику — он в восторге! Тренеры профессиональные, дети занимаются с удовольствием. Сам теперь тоже хожу в зал. AVAX для всей семьи!",
    by: "Дмитрий Смирнов, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitrySmirnov&backgroundColor=ef4444&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "Онлайн-запись — это удобно! Забронировал место на кроссфит за 2 минуты прямо с телефона. Занятия с Денисом Артёмовым — пушка, реально чувствуешь прогресс.",
    by: "Алексей Морозов, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyMorozov&backgroundColor=6366f1&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Первое пробное занятие убедило меня сразу — купила годовой абонемент Премиум. Атмосфера, оборудование, тренеры — всё на отлично. Советую всем краснодарцам!",
    by: "Елена Новикова, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaNovikova&backgroundColor=f59e0b&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Зумба с Кариной Ким — это лучшее начало дня! Приходишь уставшим, а уходишь на подъёме. Успела записаться и на bachata. В AVAX можно найти занятие на любой вкус.",
    by: "Айгуль Рахимова, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AigulRahimova&backgroundColor=ec4899&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Переехала в Краснодар и первым делом нашла AVAX. Сразу почувствовала себя как дома — персонал отзывчивый, клиенты дружелюбные. Уже рекомендую подругам!",
    by: "Ольга Ким, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaKim&backgroundColor=06b6d4&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Nutrition Bar в клубе — отдельный восторг! После тренировки свежий смузи и протеиновый коктейль прямо на месте. Всё продумано до мелочей. Молодцы, AVAX!",
    by: "Наталья Соколова, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NataliyaSokolova&backgroundColor=f97316&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "Занимаюсь боксом с Алексеем Гущиным — профессионал высшего класса! За полгода подтянулся физически и психологически. AVAX изменил мою жизнь к лучшему.",
    by: "Михаил Волков, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MikhailVolkov&backgroundColor=84cc16&textColor=ffffff",
  },
  {
    tempId: 10,
    testimonial:
      "Чисто, просторно, современно. Раньше ходил в другой клуб, но AVAX — совершенно другой уровень. Особенно впечатлил зал свободных весов и зона функционального тренинга.",
    by: "Тимур Асланов, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=TimurAslanov&backgroundColor=059669&textColor=ffffff",
  },
  {
    tempId: 11,
    testimonial:
      "Занимаюсь аквааэробикой с Ольгой — похудела на 8 кг за 4 месяца без изнурительных диет. Вода снимает нагрузку с суставов, а результат — налицо! Спасибо AVAX.",
    by: "Нина Павлова, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NinaPavlova&backgroundColor=0ea5e9&textColor=ffffff",
  },
  {
    tempId: 12,
    testimonial:
      "VIP-абонемент окупился уже через месяц. Персональные тренировки, приоритетная запись, гостевые визиты — всё включено. Чувствую себя особенным клиентом, спасибо AVAX!",
    by: "Роман Ким, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RomanKim&backgroundColor=dc2626&textColor=ffffff",
  },
  {
    tempId: 13,
    testimonial:
      "Мне 52 года, и я думала, что фитнес — не для меня. AVAX переубедил: тренеры подобрали щадящую программу, и сейчас я хожу 4 раза в неделю с удовольствием!",
    by: "Екатерина Орлова, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=EkaterinaOrlova&backgroundColor=7c3aed&textColor=ffffff",
  },
  {
    tempId: 14,
    testimonial:
      "Парковка, удобное расписание, вежливый персонал — всё продумано. После работы заезжаю прямо к вечерней тренировке, и это стало лучшей частью моего дня.",
    by: "Даниил Пак, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DaniilPak&backgroundColor=ea580c&textColor=ffffff",
  },
  {
    tempId: 15,
    testimonial:
      "TRX с Денисом — это фантастика! Никогда не думал, что тренировки могут быть настолько интенсивными и при этом функциональными. AVAX — лучшее вложение в себя.",
    by: "Кирилл Вонг, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=KirillVong&backgroundColor=2563eb&textColor=ffffff",
  },
  {
    tempId: 16,
    testimonial:
      "Похудела на 15 кг за полгода при поддержке тренера и диетолога в AVAX. Никакого изнурения — правильная программа и позитивная атмосфера делают чудеса!",
    by: "Раиса Грин, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=RaisaGrin&backgroundColor=16a34a&textColor=ffffff",
  },
  {
    tempId: 17,
    testimonial:
      "Финская сауна и русская баня после тренировки — это просто рай! Мышцы восстанавливаются намного быстрее. AVAX создал полноценный оздоровительный комплекс.",
    by: "Александра Фостер, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexandraFoster&backgroundColor=be185d&textColor=ffffff",
  },
  {
    tempId: 18,
    testimonial:
      "Пришёл на пробное занятие — ушёл с абонементом на год. Body Pump с Максимом Поповым — это заряд энергии на весь день. Всем советую попробовать!",
    by: "Карлос Мендес, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=CarlosMendez&backgroundColor=0891b2&textColor=ffffff",
  },
  {
    tempId: 19,
    testimonial:
      "Лучший клуб Краснодара без вопросов! Хожу уже 2 года, и каждый раз нахожу что-то новое — новые направления, новые тренеры, новые цели. AVAX растёт вместе с нами.",
    by: "Виктория Степанова, клиент AVAX",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=VictoriaStefanova&backgroundColor=a855f7&textColor=ffffff",
  },
]

interface TestimonialCardProps {
  position: number
  testimonial: (typeof testimonials)[0]
  handleMove: (steps: number) => void
  cardSize: number
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ position, testimonial, handleMove, cardSize }) => {
  const isCenter = position === 0
  return (
    <div
      onClick={() => handleMove(position)}
      className={cn(
        "absolute left-1/2 top-1/2 cursor-pointer border-2 p-8 transition-all duration-500 ease-in-out",
        isCenter
          ? "z-10 bg-gray-900 text-white border-gray-900"
          : "z-0 bg-white text-gray-900 border-gray-200 hover:border-gray-400",
      )}
      style={{
        width: cardSize,
        height: cardSize,
        clipPath: `polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)`,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        boxShadow: isCenter ? "0px 8px 0px 4px hsl(var(--border))" : "0px 0px 0px 0px transparent",
      }}
    >
      <span
        className="absolute block origin-top-right rotate-45 bg-gray-300"
        style={{
          right: -2,
          top: 48,
          width: SQRT_5000,
          height: 2,
        }}
      />
      <img
        src={testimonial.imgSrc || "/placeholder.svg"}
        alt={`${testimonial.by.split(",")[0]}`}
        className="mb-4 h-14 w-12 bg-gray-100 object-cover object-top"
        style={{
          boxShadow: "3px 3px 0px hsl(var(--background))",
        }}
      />
      <h3 className={cn("text-base sm:text-xl font-medium", isCenter ? "text-white" : "text-gray-900")}>
        "{testimonial.testimonial}"
      </h3>
      <p
        className={cn(
          "absolute bottom-8 left-8 right-8 mt-2 text-sm italic",
          isCenter ? "text-gray-300" : "text-gray-600",
        )}
      >
        - {testimonial.by}
      </p>
    </div>
  )
}

export const StaggerTestimonials: React.FC = () => {
  const [cardSize, setCardSize] = useState(365)
  const [testimonialsList, setTestimonialsList] = useState(testimonials)

  const handleMove = (steps: number) => {
    const newList = [...testimonialsList]
    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift()
        if (!item) return
        newList.push({ ...item, tempId: Math.random() })
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop()
        if (!item) return
        newList.unshift({ ...item, tempId: Math.random() })
      }
    }
    setTestimonialsList(newList)
  }

  useEffect(() => {
    const updateSize = () => {
      const { matches } = window.matchMedia("(min-width: 640px)")
      setCardSize(matches ? 365 : 290)
    }
    updateSize()
    window.addEventListener("resize", updateSize)
    return () => window.removeEventListener("resize", updateSize)
  }, [])

  return (
    <div className="relative w-full overflow-hidden bg-white" style={{ height: 600 }}>
      {testimonialsList.map((testimonial, index) => {
        const position =
          testimonialsList.length % 2 ? index - (testimonialsList.length + 1) / 2 : index - testimonialsList.length / 2
        return (
          <TestimonialCard
            key={testimonial.tempId}
            testimonial={testimonial}
            handleMove={handleMove}
            position={position}
            cardSize={cardSize}
          />
        )
      })}
      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-2">
        <button
          onClick={() => handleMove(-1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Предыдущий отзыв"
        >
          <ChevronLeft />
        </button>
        <button
          onClick={() => handleMove(1)}
          className={cn(
            "flex h-14 w-14 items-center justify-center text-2xl transition-colors",
            "bg-white border-2 border-gray-300 hover:bg-gray-900 hover:text-white",
            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2",
          )}
          aria-label="Следующий отзыв"
        >
          <ChevronRight />
        </button>
      </div>
    </div>
  )
}