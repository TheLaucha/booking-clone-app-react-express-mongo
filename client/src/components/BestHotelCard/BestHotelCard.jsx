import styles from "./BestHotelCard.module.css"

// eslint-disable-next-line react/prop-types
const BestHotelCard = ({ image, title, location, price, puntuation }) => {
  const msgPuntuation =
    puntuation >= 9
      ? "Exceptional"
      : puntuation >= 8
      ? "Regular"
      : puntuation >= 7
      ? "Good"
      : puntuation >= 6
      ? "Regular"
      : puntuation >= 5
      ? "Not bad"
      : puntuation >= 4
      ? "Bad"
      : puntuation >= 3
      ? "Not recommended"
      : "Awful"

  return (
    <div className={styles.BestHotelCard}>
      <img src={image} alt='' className={styles.image} />
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.location}>{location}</p>
      <p className={styles.details}>Starting from ${price}</p>
      <p className={styles.puntuation}>
        <span className={styles.tagPuntuation}>{puntuation}</span>
        {" " + msgPuntuation}
      </p>
    </div>
  )
}

export default BestHotelCard
