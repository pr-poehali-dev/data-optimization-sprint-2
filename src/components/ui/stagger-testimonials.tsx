import type React from "react"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

const SQRT_5000 = Math.sqrt(5000)

// Running club testimonials data with randomly generated icons
const testimonials = [
  {
    tempId: 0,
    testimonial:
      "Качество тканей у RUBEZH — это другой уровень. Худи держит форму после десятков стирок, а посадка идеальная. Это не масс-маркет, это вещи на годы.",
    by: "Сергей Иванов, дизайнер",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=SergeyIvanov&backgroundColor=111111&textColor=ffffff",
  },
  {
    tempId: 1,
    testimonial:
      "Заказала пальто из новой коллекции — это любовь с первого касания. Силуэт, детали, плотность ткани. В RUBEZH чувствуешь себя дорого, не крича об этом.",
    by: "Марина Петрова, стилист",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MarinaPetrova&backgroundColor=1f1f1f&textColor=ffffff",
  },
  {
    tempId: 2,
    testimonial:
      "В RUBEZH меня цепляет минимализм с характером. Ничего лишнего, но каждая вещь выделяет из толпы. Ношу их образы и в офис, и на вечер.",
    by: "Анна Козлова, маркетолог",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AnnaKozlova&backgroundColor=2b2b2b&textColor=ffffff",
  },
  {
    tempId: 3,
    testimonial:
      "Перепробовал кучу брендов стрит-вира, но к RUBEZH возвращаюсь снова. Оверсайз-крой сидит безупречно, а тёмная палитра сочетается со всем гардеробом.",
    by: "Дмитрий Смирнов, фотограф",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=DmitrySmirnov&backgroundColor=171717&textColor=ffffff",
  },
  {
    tempId: 4,
    testimonial:
      "RUBEZH — это про уверенность. Надеваешь их вещь и сразу чувствуешь себя собранным. Премиум, который ощущается, а не просто стоит дорого.",
    by: "Елена Новикова, предприниматель",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=ElenaNovikova&backgroundColor=0a0a0a&textColor=ffffff",
  },
  {
    tempId: 5,
    testimonial:
      "Доставка быстрая, упаковка — отдельный комплимент. Чувствуется, что бренд продумал каждую деталь опыта. RUBEZH задаёт стандарт.",
    by: "Алексей Морозов, IT-предприниматель",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AlexeyMorozov&backgroundColor=242424&textColor=ffffff",
  },
  {
    tempId: 6,
    testimonial:
      "Куртка RUBEZH стала моей визитной карточкой. Друзья постоянно спрашивают, где я её взял. Стиль, который реально выделяет.",
    by: "Айгуль Рахимова, блогер",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=AigulRahimova&backgroundColor=141414&textColor=ffffff",
  },
  {
    tempId: 7,
    testimonial:
      "Ценю бренды, которые не выходят из моды через сезон. RUBEZH — это вещи вне времени. Покупаешь раз и носишь годами без сожалений.",
    by: "Ольга Ким, архитектор",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=OlgaKim&backgroundColor=1a1a1a&textColor=ffffff",
  },
  {
    tempId: 8,
    testimonial:
      "Каждая деталь в RUBEZH на своём месте — швы, фурнитура, посадка. Это та роскошь, которую замечаешь, когда надеваешь, а не на ценнике.",
    by: "Наталья Соколова, арт-директор",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=NataliyaSokolova&backgroundColor=2f2f2f&textColor=ffffff",
  },
  {
    tempId: 9,
    testimonial:
      "RUBEZH понимает, что такое настоящий стрит-вир — дерзкий, но премиальный. Их вещи стали основой моего гардероба.",
    by: "Михаил Волков, музыкант",
    imgSrc: "https://api.dicebear.com/7.x/initials/svg?seed=MikhailVolkov&backgroundColor=101010&textColor=ffffff",
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