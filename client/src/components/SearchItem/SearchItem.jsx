/* eslint-disable react/prop-types */
import styles from "./SearchItem.module.css"
import apartment from "../../assets/apartment.jpg"
import { Link } from "react-router-dom"

const SearchItem = ({ item }) => {
  return (
    <div className={styles.SearchItem}>
      <img src={apartment} alt='' />
      <div className={styles.searchItemInfo}>
        <div className={styles.searchItemInfoLeft}>
          <h3 className={styles.searchItemInfoTitle}>{item.name}</h3>
          <p>{item.distance}m from center</p>
          <p className={`${styles.bgGreen} ${styles.fontWhite}`}>Free reservation</p>
          <p className={styles.fontBold}>{item.title}</p>
          <p>{item.description}</p>
          <p className={`${styles.fontGreen} ${styles.fontBold}`}>Free cancellation</p>
          <p className={styles.fontGreen}>
            You can cancel later, so lock in this great price today!
          </p>
        </div>
        <div className={styles.searchItemInfoRight}>
          <div className={styles.reviews}>
            <h4>Excellent</h4>
            <p className={styles.puntuation}>9.3</p>
          </div>
          <div className={styles.prices}>
            <p className={styles.price}>${item.cheapestPrice}</p>
            <p className={styles.fontGrey}>Includes taxes</p>
            <p className={styles.fontGrey}>and fees</p>
            <Link to={`/hotels/${item._id}`} state={item._id}>
              <button className={`${styles.searchItemBtn} btn`}>See availability</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchItem
