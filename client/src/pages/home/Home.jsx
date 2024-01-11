import Header from "../../components/Header/Header"
import styles from "./Home.module.css"
import Footer from "../../components/Footer/Footer"
import LocationContainer from "../../components/LocationContainer/LocationContainer"
import PropertyTypeContainer from "../../components/PropertyTypeContainer/PropertyTypeContainer"
import FeaturedProperties from "../../components/FeaturedProperties/FeaturedProperties"

const Home = () => {
  return (
    <>
      <Header></Header>
      <LocationContainer></LocationContainer>
      <div className='container'>
        <h2 className={styles.sectionTitle}>Browser by property type</h2>
      </div>
      <PropertyTypeContainer></PropertyTypeContainer>
      <div className='container'>
        <h2 className={styles.sectionTitle}>Home guests love</h2>
      </div>
      <FeaturedProperties></FeaturedProperties>
      <div className={`${styles.contactEmailContainer}`}>
        <div className={`${styles.contactEmail} container`}>
          <h3>Save time, save money!</h3>
          <p>Sign up and we&apos;ll send the best deals to you</p>
          <div className={styles.emailContainer}>
            <input type='email' placeholder='Your email' />
            <button className={styles.emailBtn}>Subscribe</button>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home
