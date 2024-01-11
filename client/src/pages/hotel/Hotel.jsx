import { useLocation } from "react-router-dom"
import Navbar from "../../components/Navbar/Navbar"
import Header from "../../components/Header/Header"

const Hotel = () => {
  const location = useLocation()
  const state = location.state

  console.log(state)

  return (
    <>
      <Navbar></Navbar>
      <Header type={"list"}></Header>
    </>
  )
}

export default Hotel
