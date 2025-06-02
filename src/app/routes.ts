import { ROUTES } from '../shared/model/routes'

export const homeRoutes = [
  {
    path: ROUTES.HOME,
    lazy: () => import('@/features/home/home.page')
  },
  {
    path: ROUTES.CARDS,
    lazy: () => import('@/features/cards-list/cards-list.page')
  },
  {
    path: ROUTES.CARD,
    lazy: () => import('@/features/card/card.page')
  }
]

export const dashboardRoutes = [
  {
    path: ROUTES.DASHBOARD,
    lazy: () => import('@/features/dashboard/dashboard.page')
  },
  {
    path: ROUTES.EDIT_CARD,
    lazy: () => import('@/features/card-edit/edit-card.page')
  }
]

export const authRoutes = [
  {
    path: ROUTES.LOGIN,
    lazy: () => import('@/features/auth/login.page')
  },
  {
    path: ROUTES.REGISTER,
    lazy: () => import('@/features/auth/register.page')
  }
]

export const errorRoutes = [
  {
    path: '*',
    lazy: () => import('@/features/errors/not-found.page')
  }
]
