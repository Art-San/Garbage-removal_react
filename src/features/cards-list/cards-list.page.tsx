import { privateRqClient } from '@/shared/api/instance'
import { queryClient } from '@/shared/api/query-client'
import { CONFIG } from '@/shared/model/config'
import { ROUTES } from '@/shared/model/routes'
import { Button } from '@/shared/ui/kit/button'
import { Card, CardFooter, CardHeader } from '@/shared/ui/kit/card'
import { Link, href } from 'react-router-dom'

// export { BoardCard } from './card-card'

const BoardListPage = () => {
  const cardsQuery = privateRqClient.useQuery('get', '/cards')

  const createCardMutation = privateRqClient.useMutation('post', '/cards', {
    onSettled: async () => {
      queryClient.invalidateQueries(
        privateRqClient.queryOptions('get', '/cards')
      )
    }
  })
  const deleteCardMutation = privateRqClient.useMutation(
    'delete',
    '/cards/{cardId}',
    {
      onSettled: async () => {
        queryClient.invalidateQueries(
          privateRqClient.queryOptions('get', '/cards')
        )
      }
    }
  )

  return (
    <div className=" container mx-auto p-4">
      <h1>Boards list === {CONFIG.API_BASE_URL}</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault()
          const formData = new FormData(e.target as HTMLFormElement)
          createCardMutation.mutate({
            body: { name: formData.get('name') as string }
          })
        }}
      >
        <input type="text" name="name" />
        <button type="submit">Create Board</button>
      </form>

      <div className=" grid grid-cols-3 gap-4 ">
        {cardsQuery.data?.map((card) => (
          <Card key={card.id}>
            <CardHeader>
              <Button asChild variant={'link'}>
                <Link to={href(ROUTES.CARD, { cardId: card.id })}>
                  {card.name}
                </Link>
              </Button>
            </CardHeader>
            <CardFooter>
              <Button
                variant="destructive"
                disabled={deleteCardMutation.isPending}
                onClick={() =>
                  deleteCardMutation.mutate({
                    params: { path: { cardId: card.id } }
                  })
                }
              >
                Delete
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {/* {cardsQuery.data?.map((card) => (
        <div key={card.id}>
          <Link to={href(ROUTES.CARD, { cardId: card.id })}>{card.name}</Link>
          <button
            disabled={deleteCardMutation.isPending}
            onClick={() =>
              deleteCardMutation.mutate({
                params: { path: { cardId: card.id } }
              })
            }
          >
            Delete
          </button>
        </div>
      ))} */}
    </div>
  )
}

export const Component = BoardListPage
