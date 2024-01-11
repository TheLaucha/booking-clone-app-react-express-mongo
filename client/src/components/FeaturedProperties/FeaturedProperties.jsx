import BestHotelCard from "../BestHotelCard/BestHotelCard"
import bestHotel from "../../assets/bestHotel.jpg"
import styles from "./FeaturedProperties.module.css"
import useFetch from "../../hooks/useFetch"

const FeaturedProperties = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels?featured=true&limit=4"
  )

  if (error) {
    console.log(error)
  }

  return (
    <div className={`${styles.bestHotelsContainer} container`}>
      {loading ? (
        <p className='loadingMsg'>Loading... Please wait a second</p>
      ) : (
        <>
          {data.length > 0 && (
            <>
              {data.map((el) => {
                return (
                  <BestHotelCard
                    key={el._id}
                    image={bestHotel}
                    title={el.name}
                    location={el.city}
                    price={el.cheapestPrice}
                    puntuation={9.2}
                  ></BestHotelCard>
                )
              })}
            </>
          )}
        </>
      )}
    </div>
  )
}

export default FeaturedProperties
