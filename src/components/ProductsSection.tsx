import { motion } from "framer-motion"
import { useState } from "react"

const products = [
  {
    id: 1,
    name: "Футболка «Спорт»",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/17f2afc8-a19d-4287-bc16-427c10c93f85.jpg",
    tag: "Новинка",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 2,
    name: "Футболка «Медведь»",
    description: "Slim fit • Хлопок 100%",
    price: "2 490 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/1d7d0466-504c-4882-9ac4-91bf7a365520.jpg",
    tag: "Хит",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: 3,
    name: "Футболка «Воин»",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/8072e932-b0e9-4153-8638-c81ed19d7155.jpg",
    tag: null,
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 4,
    name: "Футболка «Сила»",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/9072f2fb-d631-4204-aaca-0c679a93c2db.jpg",
    tag: "Лимитед",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 5,
    name: "Футболка «Воин» v2",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/e65e4c97-daf0-44a6-8535-c4de5b1ed08e.jpg",
    tag: "Новинка",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 6,
    name: "Футболка «Спартак» фронт",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/a2096ef6-8959-44dc-8064-59b462bf9deb.jpg",
    tag: null,
    sizes: ["M", "L", "XL", "XXL"],
  },
  {
    id: 7,
    name: "Футболка «Мишка» бэк",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/3f49b1b7-1609-42cb-8056-48fd0a5346cd.jpg",
    tag: "Хит",
    sizes: ["S", "M", "L", "XL", "XXL"],
  },
  {
    id: 8,
    name: "Футболка «Спартак» бэк",
    description: "Оверсайз • Хлопок 100%",
    price: "2 990 ₽",
    image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/bucket/f1f021db-775a-4823-865e-49f9b38c7b0c.jpg",
    tag: null,
    sizes: ["S", "M", "L", "XL"],
  },
]

export default function ProductsSection() {
  const [selectedSizes, setSelectedSizes] = useState<Record<number, string>>({})

  const selectSize = (productId: number, size: string) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }))
  }

  return (
    <section id="products" className="relative py-24 bg-white">
      <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-4">КАТАЛОГ</h2>
          <p className="text-lg md:text-xl text-gray-500 max-w-xl mx-auto">
            Ограниченные тиражи. Премиальный хлопок. Принты, которые говорят за тебя.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
              viewport={{ once: true }}
              className="group flex flex-col bg-white border border-gray-100 hover:border-gray-300 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative overflow-hidden bg-gray-50 aspect-square">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {product.tag && (
                  <div className="absolute top-3 left-3 bg-gray-900 text-white text-xs font-bold tracking-widest px-2 py-1">
                    {product.tag.toUpperCase()}
                  </div>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col flex-1 p-5 gap-4">
                <div>
                  <h3 className="text-base font-black tracking-wide text-gray-900 mb-1">{product.name}</h3>
                  <p className="text-xs text-gray-400 tracking-wide">{product.description}</p>
                </div>

                {/* Sizes */}
                <div className="flex flex-wrap gap-1.5">
                  {product.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => selectSize(product.id, size)}
                      className={`w-9 h-9 text-xs font-bold border transition-all duration-200 ${
                        selectedSizes[product.id] === size
                          ? "bg-gray-900 text-white border-gray-900"
                          : "bg-white text-gray-600 border-gray-200 hover:border-gray-900 hover:text-gray-900"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between mt-auto pt-2 border-t border-gray-100">
                  <span className="text-lg font-black text-gray-900">{product.price}</span>
                  <button className="bg-gray-900 text-white text-xs font-bold tracking-widest px-4 py-2.5 hover:bg-gray-700 transition-colors duration-200">
                    В КОРЗИНУ
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}