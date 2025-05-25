import { CONFIG } from '@/shared/model/config'
import { ROUTES } from '@/shared/model/routes'
import { Link, href } from 'react-router-dom'

// export { BoardCard } from './board-card'

const BoardListPage = () => {
  console.log(12, CONFIG.API_BASE_URL)
  return (
    <div>
      <h1>{CONFIG.API_BASE_URL}</h1>
      Board list
      <Link to={href(ROUTES.CARD, { slug: '1' })}>Card 1</Link>
    </div>
  )
}

export const Component = BoardListPage
