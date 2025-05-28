// import { HttpResponse } from 'msw'
// import { http } from '../http'
// import { ApiSchemas } from '../../schema'

// const cards: ApiSchemas['Card'][] = [
//   {
//     id: 'board-1',
//     name: 'Marketing Campaign'
//   },
//   {
//     id: 'board-2',
//     name: 'Product Roadmap'
//   }
// ]

// export const handlers = [
//   http.get('/cards', () => {
//     return HttpResponse.json(cards)
//   })
// ]

import { HttpResponse } from 'msw'
import { http } from '../http'
import type { ApiSchemas } from '../../schema'

const cards: ApiSchemas['Card'][] = [
  {
    id: 'card-1',
    name: 'Marketing Campaign'
  },
  {
    id: 'card-2',
    name: 'Product Roadmap'
  }
]

export const handlers = [
  http.get('/cards', () => {
    return HttpResponse.json(cards)
  }),
  http.delete('/cards/{cardId}', async ({ params }) => {
    const { cardId } = params
    const index = cards.findIndex((board) => board.id === cardId)

    if (index === -1) {
      return HttpResponse.json(
        { message: 'Board not found', code: 'NOT_FOUND' },
        { status: 404 }
      )
    }

    cards.splice(index, 1)
    return new HttpResponse(null, { status: 204 })
  }),
  http.post('/cards', async (ctx) => {
    const data = await ctx.request.json()
    const board: ApiSchemas['Card'] = {
      id: crypto.randomUUID(),
      name: data.name
    }

    cards.push(board)
    return HttpResponse.json(board, { status: 201 })
  })
]
