import { cards_data } from '@/data/cards-data'
import { ServiceCard } from './card-service'

export const CardServiceList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-3 gap-4">
        {cards_data.map((card) => {
          return <ServiceCard card={card} />
        })}
      </div>
    </div>
  )
}
