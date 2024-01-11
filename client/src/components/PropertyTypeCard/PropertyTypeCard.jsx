import styles from "./PropertyTypeCard.module.css"

// eslint-disable-next-line react/prop-types
const PropertyTypeCard = ({ image, title, quantity }) => {
  return (
    <div className={styles.PropertyTypeCard}>
      <img src={image} alt='' className={styles.propertyImage} />
      <h3 className={styles.propertyTitle}>{title}</h3>
      <p className={styles.propertyQuantity}>
        {quantity} {title}
      </p>
    </div>
  )
}

export default PropertyTypeCard
