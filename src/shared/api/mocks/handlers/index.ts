import { authHandlers } from './auth'
import { cardsHandlers } from './cards'

export const handlers = [...authHandlers, ...cardsHandlers]
