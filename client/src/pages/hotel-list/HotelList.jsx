import { useLocation } from "react-router-dom"
import Header from "../../components/Header/Header"
import SearchItem from "../../components/SearchItem/SearchItem"
import styles from "./HotelList.module.css"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useState } from "react"
import useFetch from "../../hooks/useFetch"

const Hotel = () => {
  const location = useLocation()
  const state = location.state
  const [destino, setDestino] = useState(state.destino)
  const [startDate, setStartDate] = useState(state.startDate)
  const [endDate, setEndDate] = useState(state.endDate)
  const [options, setOptions] = useState(state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const { data, loading, error, reFetch } = useFetch(
    `http://localhost:8800/api/hotels?city=${destino}`
  )

  if (error) {
    console.log(error)
  }

  const handleChangeOptions = (e) => {
    setOptions({ ...options, [e.target.name]: e.target.value })
  }

  const handleResearch = () => {
    let url = `http://localhost:8800/api/hotels?city=${destino}&min=${min || 0}&max=${max || 9999}`
    reFetch(url)
  }

  return (
    <div className={`${styles.HotelList}`}>
      <Header type={"list"}></Header>
      <div className={`${styles.listContainer} container`}>
        <div className={styles.listSearch}>
          <h3>Search</h3>
          <div className={styles.listItem}>
            <label htmlFor='destination'>Destination</label>
            <input
              type='text'
              name='destination'
              value={destino}
              onChange={(e) => setDestino(e.target.value)}
            />
          </div>
          <div className={styles.listItem}>
            <label htmlFor=''>Date</label>
            <span className='datePicker'>
              <DatePicker
                selected={startDate}
                onChange={(date) => {
                  setStartDate(date)
                }}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat='dd-MM-yyyy'
                placeholderText='Fecha de ingreso'
                minDate={new Date()}
              />
              <br />
              <span> to </span>
              <br />
              <DatePicker
                selected={endDate}
                onChange={(date) => {
                  setEndDate(date)
                }}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat='dd-MM-yyyy'
                placeholderText='Fecha de egreso'
              />
            </span>
          </div>
          <div className={styles.listItem}>
            <label htmlFor=''>Options</label>
            <div className={styles.listOption}>
              <label htmlFor='min'>
                Min price <small>per night</small>
              </label>
              <input type='number' name='min' onChange={(e) => setMin(e.target.value)} />
            </div>
            <div className={styles.listOption}>
              <label htmlFor='max'>
                Max price <small>per night</small>
              </label>
              <input type='number' name='max' onChange={(e) => setMax(e.target.value)} />
            </div>
            <div className={styles.listOption}>
              <label htmlFor='adult'>Adult</label>
              <input
                type='number'
                name='adult'
                value={options.adult}
                onChange={handleChangeOptions}
              />
            </div>
            <div className={styles.listOption}>
              <label htmlFor='children'>Children</label>
              <input
                type='number'
                name='children'
                value={options.children}
                onChange={handleChangeOptions}
              />
            </div>
            <div className={styles.listOption}>
              <label htmlFor='room'>Room</label>
              <input
                type='number'
                name='room'
                value={options.room}
                onChange={handleChangeOptions}
              />
            </div>
          </div>
          <button className={`${styles.listSearchBtn} btn`} onClick={handleResearch}>
            Search
          </button>
        </div>
        <div className={styles.listResult}>
          {loading ? (
            <p>Loading... Please wait a second</p>
          ) : (
            <>
              {data.map((el) => (
                <SearchItem key={el._id} item={el}></SearchItem>
              ))}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default Hotel
