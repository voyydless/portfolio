import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import ThemeSwitch from './ThemeSwitch'

export default function Layout() {
  return (
    <>
      <img src="/assets/star1.png" className="star_top" alt="" />
      <ThemeSwitch />
      
      <div className="main-wrapper">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>

      <img src="/assets/star2.png" className="star_bottom" alt="" />
      <Footer />
    </>
  )
}
