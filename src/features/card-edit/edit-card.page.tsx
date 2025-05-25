import { ROUTES, type PathParams } from '@/shared/model/routes'
import { useParams } from 'react-router-dom'
function EditCardPage() {
  const { cardId, slug } = useParams<PathParams[typeof ROUTES.CARD]>()

  console.log(1234, slug, cardId)
  return <div>Редоктирование карточки: {slug}</div>
}

export const Component = EditCardPage
