import { HomeHeader, DashboardHeader } from '@/features/header'
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

export function DashboardLayout() {
  return (
    <>
      <DashboardHeader />
      <ProtectedRoute />
    </>
  )
}
