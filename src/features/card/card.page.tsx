// export function BoardPage() {
//   return <div>Card page</div>
// }

import { ROUTES, type PathParams } from '@/shared/model/routes'
import { useParams } from 'react-router-dom'

function BoardPage() {
  const { cardId, slug } = useParams<PathParams[typeof ROUTES.CARD]>()

  console.log(123, 'cardId', cardId)
  console.log(124, 'slug', slug)

  return <div>Card page slug: {cardId || slug}</div>
}

export const Component = BoardPage
