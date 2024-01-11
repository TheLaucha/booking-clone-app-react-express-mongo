import styles from "./LocationCard.module.css"

// eslint-disable-next-line react/prop-types
const LocationCard = ({ image, location, properties }) => {
  return (
    <div className={`${styles.LocationCard}`}>
      <img src={image} alt='' className={styles.locationImage} />
      <h2 className={styles.locationTitle}>{location}</h2>
      <p className={styles.properties}>{properties} properties</p>
    </div>
  )
}

export default LocationCard
