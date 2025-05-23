import { HomeHeader, MainHeader } from '@/features/header'
import { Outlet } from 'react-router-dom'
import { ProtectedRoute } from './protected-route'

export function HomeLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
    </>
  )
}

export function MainLayout() {
  return (
    <>
      <MainHeader />
      <ProtectedRoute />
    </>
  )
}
