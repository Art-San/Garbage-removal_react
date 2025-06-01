import { setupWorker } from 'msw/browser'
// import { cardsHandlers } from './handlers/cards'
// import { authHandlers } from './handlers/auth'
import { handlers } from './handlers'

export const worker = setupWorker(...handlers)
// export const worker = setupWorker(...cardsHandlers, ...authHandlers)
