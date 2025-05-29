import { HomeHeader, MainHeader } from '@/features/header'
import { Outlet } from 'react-router-dom'
import { ProtectedRoute } from './protected-route'
import Footer from '@/components/Footer'

export function HomeLayout() {
  return (
    <>
      <HomeHeader />
      <Outlet />
      <Footer />
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
