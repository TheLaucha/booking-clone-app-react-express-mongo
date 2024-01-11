import { Outlet } from "react-router-dom"
import styles from "./Layout.module.css"
import Navbar from "../Navbar/Navbar"

const Layout = () => {
  return (
    <div className={styles.Layout}>
      <Navbar></Navbar>
      <Outlet />
    </div>
  )
}

export default Layout
