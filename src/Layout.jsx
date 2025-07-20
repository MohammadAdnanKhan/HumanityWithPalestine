import { Outlet } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import WakeBackend from './components/Wakebackend/Wakebackend'

function Layout() {
  return (
    <>
    <WakeBackend />
    <Navbar />
    <Outlet />
    <Footer />
    </>
  )
}


export default Layout