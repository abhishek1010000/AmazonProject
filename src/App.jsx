import './App.css'
import Footer from "./Components/Footer/Footer"
import Navbar from "./Components/Navbar/Navbar"
import Slider from "./Components/Slider/Slider"
import Device from './Components/Devices/Device'
import Acard from './Pcard/Acard'
import Gym from './Components/Gym/Gym'
import Clothes from './Components/ClothesPage2/Clothes'
import MiniTv from "./Components/MiniTv/MiniTv"
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import AddToCart from './Components/AddToCard/AddToCard'
function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element : <> <Navbar /> <Slider /> <Acard/> <MiniTv/> <Footer/> </>
    },
    {
      path : "/device",
      element : <>  <Navbar /> <Device /> <Footer/> </>
    },
    {
      path : "/gym",
      element : <>  <Navbar />  <Gym /> <Footer/> </>
    },
    {
      path : "/clothes",
      element : <>  <Navbar />  <Clothes /> <Footer/> </>
    },
    {
      path : "/cart",
      element : <>  <Navbar />  <AddToCart /> <Footer/> </>
    },
  ])
  return (
    <div className="main">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
