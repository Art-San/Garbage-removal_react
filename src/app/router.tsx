import { ROUTES } from '../shared/model/routes'
import { createBrowserRouter, redirect } from 'react-router-dom'
import { App } from './app'

export const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: ROUTES.HOME,
        lazy: () => import('@/features/home/home.page')
      },
      {
        path: ROUTES.DASHBOARD,
        lazy: () => import('@/features/dashboard/dashboard.page')
      },
      {
        path: ROUTES.CARDS,
        lazy: () => import('@/features/cards-list/cards-list.page')
      },
      {
        path: ROUTES.CARD,
        lazy: () => import('@/features/card/card.page')
      },
      {
        path: ROUTES.LOGIN,
        lazy: () => import('@/features/auth/login.page')
      },
      {
        path: ROUTES.REGISTER,
        lazy: () => import('@/features/auth/register.page')
      },
      {
        path: ROUTES.HOME,
        loader: () => redirect(ROUTES.CARDS)
      }
    ]
  }
])
