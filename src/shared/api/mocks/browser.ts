import { setupWorker } from 'msw/browser'
import { cardsHandlers } from './handlers/cards'
import { authHandlers } from './handlers/auth'

export const worker = setupWorker(...cardsHandlers, ...authHandlers)
