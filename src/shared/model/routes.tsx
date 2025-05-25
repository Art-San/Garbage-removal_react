import 'react-router-dom'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  CARDS: '/cards',
  CARD: '/cards/:cardId',
  EDIT_CARD: '/edit-card/:cardId'
} as const

export type PathParams = {
  [ROUTES.CARD]: {
    cardId: string
    // slug?: string
  }
}

declare module 'react-router-dom' {
  interface Register {
    params: PathParams
  }
}
