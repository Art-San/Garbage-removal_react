import { createBrowserRouter } from 'react-router-dom'
import { App } from './app'
import { HomeLayout, DashboardLayout } from './layouts'
import { homeRoutes, dashboardRoutes, authRoutes, errorRoutes } from './routes'
import { Providers } from './providers'
import { protectedLoader } from './protected-route'

export const router = createBrowserRouter([
  {
    element: (
      <Providers>
        <App />
      </Providers>
    ),
    children: [
      {
        element: <HomeLayout />,
        children: homeRoutes
      },
      {
        loader: protectedLoader,
        element: <DashboardLayout />,
        children: dashboardRoutes
      },
      ...authRoutes,
      ...errorRoutes
    ]
  }
])

// import { ROUTES } from '../shared/model/routes'
// import { createBrowserRouter } from 'react-router-dom'
// import { App } from './app'
// import { HomeLayout, MainLayout } from './layouts'

// export const router = createBrowserRouter([
//   {
//     element: <App />,
//     children: [
//       {
//         element: <HomeLayout />,
//         children: [
//           {
//             path: ROUTES.HOME,
//             lazy: () => import('@/features/home/home.page')
//           }
//         ]
//       },
//       {
//         element: <MainLayout />,
//         children: [
//           {
//             path: ROUTES.DASHBOARD,
//             lazy: () => import('@/features/dashboard/dashboard.page')
//           },
//           {
//             path: ROUTES.CARDS,
//             lazy: () => import('@/features/cards-list/cards-list.page')
//           },
//           {
//             path: ROUTES.CARD,
//             lazy: () => import('@/features/card/card.page')
//           }
//         ]
//       },

//       {
//         path: ROUTES.LOGIN,
//         lazy: () => import('@/features/auth/login.page')
//       },
//       {
//         path: ROUTES.REGISTER,
//         lazy: () => import('@/features/auth/register.page')
//       },
//       {
//         path: '*',
//         lazy: () => import('@/features/errors/not-found.page')
//       }
//     ]
//   }
// ])
