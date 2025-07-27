
import { Outlet } from 'react-router-dom'
import Navbar from '@/components/MainComps/Navbar/Navbar'
import Footer from '@/components/MainComps/Footer/Footer'

const Layout = () => {
  return (
    <>
     
        <Navbar />
 

      <Outlet />

      <div className="shiny-stars-bg text-white">
        <Footer />
      </div>

    </>
  )
}

export default Layout
