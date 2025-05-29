import { Outlet } from 'react-router-dom'

export function App() {
  return (
    <div className=" min-h-screen flex flex-col">
      <Outlet />
    </div>
  )
}

// import { useEffect } from 'react'
// import Header from './components/Header'
// import Hero from './components/Hero'
// import Services from './components/Services'
// import Process from './components/Process'
// import Gallery from './components/Gallery'
// import Pricing from './components/Pricing'
// import Testimonials from './components/Testimonials'
// import CallToAction from './components/CallToAction'
// import Contact from './components/Contact'
// import Footer from './components/Footer'
// import Modal from './components/Modal'
// import { useModal } from './context/modal/useModal'

// function App() {
//   const { isOpenModal, toggleModal } = useModal()

//   useEffect(() => {
//     document.title = 'ЧистоСтрой - Вывоз строительного мусора'
//   }, [])

//   return (
//     <div className="min-h-screen bg-white">
//       <Header />
//       <Hero />
//       <Services />
//       <Process />
//       <Gallery />
//       <Pricing />
//       <Testimonials />
//       <CallToAction />
//       <Contact />
//       <Footer />
//       {isOpenModal && <Modal toggleModal={toggleModal} />}
//     </div>
//   )
// }

// export default App
