import { Outlet } from 'react-router-dom'
import Nav from '../Components/Shared/Nav/Nav'
import Footer from '../Components/Shared/Footer/Footer'

function Main() {

  return (
    <div>
      <Nav />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Main