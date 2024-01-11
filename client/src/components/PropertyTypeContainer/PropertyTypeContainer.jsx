import hotels from "../../assets/hotels.jpg"
import useFetch from "../../hooks/useFetch"
import PropertyTypeCard from "../PropertyTypeCard/PropertyTypeCard"
import styles from "./PropertyTypeContainer.module.css"

const PropertyTypeContainer = () => {
  const { data, loading, error } = useFetch(
    "http://localhost:8800/api/hotels/countByType?type=hotel,resort,apartment,villas,cabin"
  )

  if (error) {
    console.log(error)
  }

  if (data.length > 0) {
    console.log(data[0].type)
    console.log(data[0].count)
  }

  return (
    <div className={`${styles.propertyTypeContainer} container`}>
      {loading ? (
        <p className='loadingMsg'>Loading... Please wait a second</p>
      ) : (
        <>
          {data.length > 0 && (
            <>
              <PropertyTypeCard
                image={hotels}
                title={data[0].type}
                quantity={data[0].count}
              ></PropertyTypeCard>
              <PropertyTypeCard
                image={hotels}
                title={data[1].type}
                quantity={data[1].count}
              ></PropertyTypeCard>
              <PropertyTypeCard
                image={hotels}
                title={data[2].type}
                quantity={data[2].count}
              ></PropertyTypeCard>
              <PropertyTypeCard
                image={hotels}
                title={data[3].type}
                quantity={data[3].count}
              ></PropertyTypeCard>
              <PropertyTypeCard
                image={hotels}
                title={data[4].type}
                quantity={data[4].count}
              ></PropertyTypeCard>
            </>
          )}
        </>
      )}
    </div>
  )
}

export default PropertyTypeContainer
