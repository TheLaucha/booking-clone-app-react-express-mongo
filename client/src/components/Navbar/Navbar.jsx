import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <nav className={`${styles.Navbar}`}>
      <ul className='flex-row container'>
        <Link to={"/"} className={styles.logoBtn}>
          Booking.com
        </Link>
        <div className={`${styles.containerButtons} flex-row`}>
          <li>
            <Link className={`btn ${styles.navBtn}`}>Register</Link>
          </li>
          <li>
            <Link className={`btn ${styles.navBtn}`}>Login</Link>
          </li>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
