import HeroSection from "@/components/HeroSection"
import { TextGradientScroll } from "@/components/ui/text-gradient-scroll"
import { Timeline } from "@/components/ui/timeline"
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials"
import { motion } from "framer-motion"
import SmoothScrollHero from "@/components/ui/smooth-scroll-hero"

export default function Index() {
  const missionStatement =
    "RUBEZH — это про черту, за которой начинается твоя настоящая улица. Мы создаём премиальный стрит-вир для тех, кто не растворяется в толпе, а задаёт ей тон. Каждая вещь — это плотные ткани, выверенные силуэты и детали, которые чувствуешь кожей. Мы не гонимся за трендами — мы переступаем их границу. Носи RUBEZH не ради ярлыка, а ради уверенности, характера и свободы быть собой."

  const timelineEntries = [
    {
      id: 1,
      image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/files/1b5eeab0-cda2-429b-b649-29ec1797b359.jpg",
      alt: "Премиальный образ RUBEZH",
      title: "Качество без компромиссов",
      description:
        "Мы выбираем плотные премиальные ткани, усиленные швы и фурнитуру, которая служит годами. Каждая вещь RUBEZH проходит ручной контроль — потому что роскошь начинается с деталей, которые видно и которые чувствуешь.",
      layout: "left" as const,
    },
    {
      id: 2,
      image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/files/29a3573d-52ac-41ad-be08-ed3d4a481415.jpg",
      alt: "Деталь премиальной ткани RUBEZH",
      title: "Силуэт, который говорит за тебя",
      description:
        "Оверсайз-крой, выверенные пропорции, выдержанная тёмная палитра. RUBEZH — это уличная эстетика, доведённая до уровня высокой моды. Один образ — и тебя запоминают.",
      layout: "right" as const,
    },
    {
      id: 3,
      image: "https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/files/4c502fb6-2caa-4a25-8734-9f4492972bf0.jpg",
      alt: "Уличный образ RUBEZH в движении",
      title: "Стиль вне сезона",
      description:
        "Мы делаем вещи, которые не выходят из моды на следующий день. RUBEZH — это инвестиция в гардероб, который остаётся актуальным годами. Выбери свой и переступи черту обыденного.",
      layout: "left" as const,
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroSection />

      {/* Mission Statement Section with Grid Background */}
      <section id="mission" className="relative min-h-screen flex items-center justify-center py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-12 text-gray-900">ФИЛОСОФИЯ</h2>
            <TextGradientScroll
              text={missionStatement}
              className="text-2xl md:text-3xl lg:text-4xl font-medium leading-relaxed text-gray-800"
              type="word"
              textOpacity="soft"
            />
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section id="community" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="relative z-10">
          <div className="container mx-auto px-6 mb-16">
            <div className="text-center">
              <h2 className="text-4xl md:text-6xl font-black tracking-wider mb-6 text-gray-900">КОЛЛЕКЦИЯ</h2>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Премиальный стрит-вир для тех, кто переступает границы. Вот что отличает RUBEZH.
              </p>
            </div>
          </div>

          <Timeline entries={timelineEntries} />
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="relative py-20 bg-white">
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 bg-grid-subtle opacity-30 pointer-events-none" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-black tracking-wider text-gray-900 mb-6">
              Что говорят наши{" "}
              <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">КЛИЕНТЫ</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Реальные отзывы тех, кто выбрал RUBEZH и сделал стиль частью своего характера.
            </p>
          </motion.div>

          <StaggerTestimonials />
        </div>
      </section>

      {/* Smooth Scroll Hero with CTA Overlay */}
      <section id="join" className="relative">
        <SmoothScrollHero
          scrollHeight={2500}
          desktopImage="https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/files/f0a9c5f1-e3f3-4c8d-a8ab-dd1d8774ec25.jpg"
          mobileImage="https://cdn.poehali.dev/projects/de103d2b-da80-4de7-a194-3cf729ba186e/files/f0a9c5f1-e3f3-4c8d-a8ab-dd1d8774ec25.jpg"
          initialClipPercentage={30}
          finalClipPercentage={70}
        />
      </section>
    </div>
  )
}