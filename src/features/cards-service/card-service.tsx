import { Button } from '@/shared/ui/kit/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/shared/ui/kit/card'

export type TProductCardProps = {
  id: string
  title: string
  description: string
  slug: string
  price: string
  photo_path: string
  alt: string
}

export const ServiceCard = ({ card }: { card: TProductCardProps }) => {
  console.log(card.photo_path)
  return (
    <Card
      key={card.id}
      className="w-full max-w-[300px] shadow-md transition-transform hover:scale-105"
    >
      {/* Изображение */}
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <img src={card.photo_path} alt={card.title} className="object-cover" />
      </div>

      {/* Заголовок и описание */}
      <CardHeader>
        <CardTitle>{card.title}</CardTitle>
        <CardDescription>{card.description}</CardDescription>
      </CardHeader>

      {/* Дополнительное содержимое (например, кнопка "Купить") */}
      <CardContent>
        <Button className="cursor-pointer px-6 py-3 bg-[#3644b9] text-white rounded-full font-medium text-center hover:bg-[#2d399c] transition-colors flex items-center justify-center">
          Заказать
        </Button>
        {/* <button className="w-full bg-primary text-primary-foreground py-2 rounded-md hover:bg-primary/90 transition-colors">
          Заказать
        </button> */}
      </CardContent>
    </Card>
  )
}
