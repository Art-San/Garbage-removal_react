import { rqClient } from '@/shared/api/instance'
import { CONFIG } from '@/shared/model/config'
import { ROUTES } from '@/shared/model/routes'
import { Link, href } from 'react-router-dom'

// export { BoardCard } from './board-card'

const BoardListPage = () => {
  const cardsQuery = rqClient.useQuery('get', '/cards')
  const createCard = rqClient.useMutation('post', '/cards')
  const deleteCard = rqClient.useMutation('delete', '/cards/{cardId}')

  return (
    <div>
      <h1>Boards list === {CONFIG.API_BASE_URL}</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          createCard.mutate({
            body: { name: formData.get('name') as string }
          })
        }}
      >
        <input type="text" name="name" />
        <button type="submit">Create Board</button>
      </form>

      {cardsQuery.data?.map((board) => (
        <div key={board.id}>
          <Link to={href(ROUTES.CARD, { cardId: board.id })}>{board.name}</Link>
          <button
            disabled={deleteCard.isPending}
            onClick={() =>
              deleteCard.mutate({
                params: { path: { cardId: board.id } }
              })
            }
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  )
}

export const Component = BoardListPage
