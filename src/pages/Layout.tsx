import Recommended from "../components/SliderSections/Recommended/Recommended"
import Trending from "../components/SliderSections/tending/Trending"
import Header from "../components/header/Header"





const Layout = () => {
  return (
  <div className="w-screen">
     <Header/>
     <Recommended/>
     <Trending/>
     
     
     
  </div>
  )
}

export default Layout