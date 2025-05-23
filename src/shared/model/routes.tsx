import 'react-router-dom'

export const ROUTES = {
  HOME: '/',
  LOGIN: '/login',
  REGISTER: '/register',
  DASHBOARD: '/dashboard',
  CARDS: '/cards',
  CARD: '/cards/:cardId'
} as const

export type PathParams = {
  [ROUTES.CARD]: {
    cardId: string
  }
}

declare module 'react-router-dom' {
  interface Register {
    params: PathParams
  }
}
