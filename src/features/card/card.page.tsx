// export function BoardPage() {
//   return <div>Card page</div>
// }

import { ROUTES, type PathParams } from '@/shared/model/routes'
import { useParams } from 'react-router-dom'

function BoardPage() {
  const { cardId } = useParams<PathParams[typeof ROUTES.CARD]>()

  console.log(1234, cardId)

  return <div>Card page: {cardId}</div>
}

export const Component = BoardPage
