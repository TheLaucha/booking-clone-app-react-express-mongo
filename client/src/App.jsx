import "./App.css"
import { Routes, Route } from "react-router-dom"
import Layout from "./components/Layout/Layout"
import Home from "./pages/home/Home"
import NoMatch from "./pages/no-match/NoMatch"
import Hotel from "./pages/hotel/Hotel"
import HotelList from "./pages/hotel-list/HotelList"

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route path='/' element={<Home />}></Route>
        <Route path='/hotels' element={<HotelList />}></Route>
        <Route path='/hotels/:id' element={<Hotel />}></Route>
        <Route path='*' element={<NoMatch />}></Route>
      </Route>
    </Routes>
  )
}

export default App
