import { ArrowRight, Check } from 'lucide-react'
import { offer } from '../data/ifso'

const Hero = () => {
  return (
    <section className="pt-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              {offer.default.title}{' '}
              <span className="text-[#3644b9]">чисто</span> и{' '}
              <span className="text-[#3644b9]">быстро</span> в Томске
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-lg">
              {offer.default.description}
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">Работаем 7 дней в неделю</span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">
                  Собственный автопарк спецтехники
                </span>
              </div>
              <div className="flex items-center">
                <Check className="h-5 w-5 text-green-500 mr-2" />
                <span className="text-gray-700">
                  Фиксированные цены, никаких доплат
                </span>
              </div>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="px-6 py-3 bg-[#3644b9] text-white rounded-full font-medium text-center hover:bg-[#2d399c] transition-colors flex items-center justify-center"
              >
                Заказать вывоз
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
              <a
                href="#pricing"
                className="px-6 py-3 bg-white text-[#3644b9] border border-[#3644b9] rounded-full font-medium text-center hover:bg-gray-50 transition-colors"
              >
                Рассчитать стоимость
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#3644b9] opacity-10 rounded-full"></div>
            <div className="absolute -bottom-6 -left-6 w-40 h-40 bg-[#3644b9] opacity-10 rounded-full"></div>
            <img
              src="two movers and a car.png"
              alt="Контейнер для строительного мусора"
              className="w-full h-auto object-cover rounded-2xl shadow-lg relative z-10"
            />
            {/* <img
              src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Контейнер для строительного мусора"
              className="w-full h-auto object-cover rounded-2xl shadow-lg relative z-10"
            /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
