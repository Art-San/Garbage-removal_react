import { ROUTES } from '@/shared/model/routes'
import { Link, href } from 'react-router-dom'

// export { BoardCard } from './board-card'

const BoardListPage = () => {
  return (
    <div>
      Board list
      <Link to={href(ROUTES.CARD, { cardId: '1' })}>Card 1</Link>
    </div>
  )
}

export const Component = BoardListPage
