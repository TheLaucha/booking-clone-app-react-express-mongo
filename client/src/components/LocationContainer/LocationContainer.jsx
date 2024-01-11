import useFetch from "../../hooks/useFetch"
import costa_rica from "../../assets/costa_rica.jpg"
import brasil from "../../assets/brasil.jpg"
import argentina from "../../assets/argentina.jpg"
import LocationCard from "../LocationCard/LocationCard"
import styles from "./LocationContainer.module.css"

const LocationContainer = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByCity?cities=Costa Rica,Argentina,Brasil"
  )

  if (error) {
    console.log(error)
  }

  return (
    <div className={`${styles.locationCardContainer} container`}>
      {loading ? (
        <p className={styles.loadingMsg}>Loading... Please wait a second.</p>
      ) : (
        <>
          <LocationCard
            image={costa_rica}
            location={"Costa Rica"}
            properties={data[0]}
          ></LocationCard>
          <LocationCard
            image={argentina}
            location={"Argentina"}
            properties={data[1]}
          ></LocationCard>
          <LocationCard image={brasil} location={"Brasil"} properties={data[2]}></LocationCard>
        </>
      )}
    </div>
  )
}

export default LocationContainer
