import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useState, useRef } from "react"

const BG_BLUE = "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/files/2d1b4d5e-aac9-4ff3-ba89-dbdcbd36c0d7.jpg"
const BG_RED = "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/files/8f34093f-aab3-4915-99a1-333786a6fc66.jpg"
const BG_CONCRETE = "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/files/24df898a-3fbc-46bf-910e-c1c8f2e56f09.jpg"
const BG_PURPLE = "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/files/717a12e3-5230-4902-9a82-4d8e96ba1857.jpg"

const products = [
  {
    id: 1,
    name: "Футболка «Спорт»",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/17f2afc8-a19d-4287-bc16-427c10c93f85.jpg",
    bg: BG_BLUE,
    tag: "Новинка",
    sizes: ["S", "M", "L", "XL", "XXL"],
    accent: "#3b82f6",
  },
  {
    id: 2,
    name: "Футболка «Медведь»",
    description: "Slim fit • Хлопок 100%",
    price: "2 490 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/1d7d0466-504c-4882-9ac4-91bf7a365520.jpg",
    bg: BG_RED,
    tag: "Хит",
    sizes: ["S", "M", "L", "XL"],
    accent: "#ef4444",
  },
  {
    id: 3,
    name: "Футболка «Воин»",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/8072e932-b0e9-4153-8638-c81ed19d7155.jpg",
    bg: BG_CONCRETE,
    tag: null,
    sizes: ["M", "L", "XL", "XXL"],
    accent: "#f59e0b",
  },
  {
    id: 4,
    name: "Футболка «Сила»",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/9072f2fb-d631-4204-aaca-0c679a93c2db.jpg",
    bg: BG_RED,
    tag: "Лимитед",
    sizes: ["S", "M", "L", "XL", "XXL"],
    accent: "#8b5cf6",
  },
  {
    id: 5,
    name: "Футболка «Воин» v2",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/e65e4c97-daf0-44a6-8535-c4de5b1ed08e.jpg",
    bg: BG_CONCRETE,
    tag: "Новинка",
    sizes: ["S", "M", "L", "XL", "XXL"],
    accent: "#10b981",
  },
  {
    id: 6,
    name: "Футболка «Спартак» фронт",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/a2096ef6-8959-44dc-8064-59b462bf9deb.jpg",
    bg: BG_RED,
    tag: null,
    sizes: ["M", "L", "XL", "XXL"],
    accent: "#dc2626",
  },
  {
    id: 7,
    name: "Футболка «Мишка» бэк",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/3f49b1b7-1609-42cb-8056-48fd0a5346cd.jpg",
    bg: BG_BLUE,
    tag: "Хит",
    sizes: ["S", "M", "L", "XL", "XXL"],
    accent: "#f97316",
  },
  {
    id: 8,
    name: "Футболка «Спартак» бэк",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/f1f021db-775a-4823-865e-49f9b38c7b0c.jpg",
    bg: BG_PURPLE,
    tag: null,
    sizes: ["S", "M", "L", "XL"],
    accent: "#6366f1",
  },
]

function ProductCard({ product, index }: { product: typeof products[0]; index: number }) {
  const [selectedSize, setSelectedSize] = useState("")
  const [isHovered, setIsHovered] = useState(false)
  const cardRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"])
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const px = (e.clientX - rect.left) / rect.width - 0.5
    const py = (e.clientY - rect.top) / rect.height - 0.5
    x.set(px)
    y.set(py)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
      viewport={{ once: true }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: 1000 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="group relative flex flex-col cursor-pointer"
    >
      {/* Glow background */}
      <motion.div
        className="absolute -inset-1 rounded-sm blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"
        style={{ background: `radial-gradient(ellipse at center, ${product.accent}55, transparent 70%)` }}
      />

      {/* Card */}
      <div className="relative overflow-hidden border border-gray-800 group-hover:border-gray-500 transition-all duration-500">
        {/* Image with background */}
        <div className="relative aspect-square overflow-hidden">
          {/* Background image */}
          <motion.div
            className="absolute inset-0"
            animate={isHovered ? { scale: 1.08 } : { scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <img
              src={product.bg}
              alt=""
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30" />
          </motion.div>

          {/* Product image on top */}
          <motion.img
            src={product.image}
            alt={product.name}
            className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            animate={isHovered ? { scale: 1.06, y: -6 } : { scale: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-transparent" />

          {/* Tag */}
          {product.tag && (
            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 + 0.3 }}
              className="absolute top-3 left-3 text-white text-xs font-black tracking-widest px-2.5 py-1"
              style={{ background: product.accent }}
            >
              {product.tag.toUpperCase()}
            </motion.div>
          )}
        </div>

        {/* Info */}
        <div className="p-5 flex flex-col gap-4 bg-gray-950">
          <div>
            <h3 className="text-sm font-black tracking-wide text-white mb-1">{product.name}</h3>
            <p className="text-xs text-gray-500 tracking-wide">{product.description}</p>
          </div>

          {/* Sizes */}
          <div className="flex flex-wrap gap-1.5">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-9 h-9 text-xs font-bold border transition-all duration-200 ${
                  selectedSize === size
                    ? "text-white border-transparent"
                    : "bg-transparent text-gray-500 border-gray-700 hover:border-gray-400 hover:text-gray-200"
                }`}
                style={selectedSize === size ? { background: product.accent, borderColor: product.accent } : {}}
              >
                {size}
              </button>
            ))}
          </div>

          {/* Price + CTA */}
          <div className="flex items-center justify-between pt-3 border-t border-gray-800">
            <span className="text-lg font-black text-white">{product.price}</span>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="text-white text-xs font-black tracking-widest px-4 py-2.5 transition-all duration-200"
              style={{ background: product.accent }}
            >
              В КОРЗИНУ
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProductsSection() {
  return (
    <section id="products" className="relative py-24 bg-gray-950">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-10"
        style={{
          backgroundImage: "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-wider text-white mb-4">КАТАЛОГ</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto">
            Ограниченные тиражи. Премиальный хлопок. Принты, которые говорят за тебя.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" style={{ perspective: "1200px" }}>
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}