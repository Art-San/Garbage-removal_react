import { cards_data } from '@/data/cards-data'
import { ServiceCard } from './card-service'

export const CardsServiceList = () => {
  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <div className="grid grid-cols-3 gap-4"> */}
        {cards_data.map((card) => {
          return <ServiceCard card={card} />
        })}
      </div>
    </div>
  )
}
