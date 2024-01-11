import styles from "./Footer.module.css"

const Footer = () => {
  return (
    <div className={`${styles.Footer} container`}>
      <div className={styles.col}>
        <ul>
          <li>
            <a href='#'>Countries</a>
          </li>
          <li>
            <a href='#'>Regions</a>
          </li>
          <li>
            <a href='#'>Districts</a>
          </li>
          <li>
            <a href='#'>Airports</a>
          </li>
          <li>
            <a href='#'>Hotels</a>
          </li>
        </ul>
      </div>
      <div className={styles.col}>
        <ul>
          <li>
            <a href='#'>Homes</a>
          </li>
          <li>
            <a href='#'>Apartments</a>
          </li>
          <li>
            <a href='#'>Resorts</a>
          </li>
          <li>
            <a href='#'>Villas</a>
          </li>
          <li>
            <a href='#'>Hostels</a>
          </li>
          <li>
            <a href='#'>Guest houses</a>
          </li>
        </ul>
      </div>
      <div className={styles.col}>
        <ul>
          <li>
            <a href='#'>Unique places to stay</a>
          </li>
          <li>
            <a href='#'>Reviews</a>
          </li>
          <li>
            <a href='#'>Unpacked: Travel articles</a>
          </li>
          <li>
            <a href='#'>Travel communities</a>
          </li>
          <li>
            <a href='#'>Seasonal and holiday deals</a>
          </li>
        </ul>
      </div>
      <div className={styles.col}>
        <ul>
          <li>
            <a href='#'>Car rental</a>
          </li>
          <li>
            <a href='#'>Flight Finder</a>
          </li>
          <li>
            <a href='#'>Restaurant reservations</a>
          </li>
          <li>
            <a href='#'>Travel Agents</a>
          </li>
        </ul>
      </div>
      <div className={styles.col}>
        <ul>
          <li>
            <a href='#'>Customer Service</a>
          </li>
          <li>
            <a href='#'>Partner Help</a>
          </li>
          <li>
            <a href='#'>Careers</a>
          </li>
          <li>
            <a href='#'>Sustainability</a>
          </li>
          <li>
            <a href='#'>Press center</a>
          </li>
          <li>
            <a href='#'>Safety Resource Center</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
