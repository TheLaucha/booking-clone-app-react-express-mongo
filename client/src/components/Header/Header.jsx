import styles from "./Header.module.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faBed,
  faCalendarDays,
  faCar,
  faPerson,
  faParachuteBox,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons"
import { useEffect, useRef, useState } from "react"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { useNavigate } from "react-router-dom"

// eslint-disable-next-line react/prop-types
const Header = ({ type }) => {
  const [destino, setDestino] = useState("")
  const [options, setOptions] = useState({
    adult: 1,
    children: 0,
    room: 1,
  })
  const [openOptions, setOpenOptions] = useState(false)
  const [startDate, setStartDate] = useState(new Date())
  const [endDate, setEndDate] = useState(new Date())
  const navigate = useNavigate()

  const handleOption = (option, action) => {
    setOptions({ ...options, [option]: action === "+" ? options[option] + 1 : options[option] - 1 })
  }

  const handleSearch = () => {
    navigate("/hotels", { state: { destino, startDate, endDate, options } })
  }

  const optionsRef = useRef(null)

  useEffect(() => {
    if (!openOptions) return

    const handleGlobalClick = (e) => {
      // Si hago click sobre el elemento span que maneja el estado de true o false entonces no continuo
      if (e.target.className == "_headerSearchText_14rv7_139") return
      // Si hago click en cualquier lado menos en el modal, entonces pongo el estado en false
      if (!optionsRef.current.contains(e.target)) {
        setOpenOptions(false)
        console.log("Se pone en false")
      }
    }

    // Agrego el event listener click
    window.addEventListener("click", handleGlobalClick)

    // Remuevo el event listener click ya que sino queda guardado y la proxima vez que se ingrese al useEffect se ejecutara doble.
    return () => {
      window.removeEventListener("click", handleGlobalClick)
    }
  }, [openOptions])

  return (
    <div className={styles.Header}>
      <div className='container flex-col gap-1'>
        {/* HEADER LIST */}
        <div className={`${styles.headerList} flex-row`}>
          <div className={`${styles.headerListItem} ${styles.active}`}>
            <FontAwesomeIcon icon={faBed}></FontAwesomeIcon>
            <span>Stays</span>
          </div>
          <div className={`${styles.headerListItem}`}>
            <FontAwesomeIcon icon={faPlane}></FontAwesomeIcon>
            <span>Flights</span>
          </div>
          <div className={`${styles.headerListItem}`}>
            <FontAwesomeIcon icon={faCar}></FontAwesomeIcon>
            <span>Car rentals</span>
          </div>
          <div className={`${styles.headerListItem}`}>
            <FontAwesomeIcon icon={faParachuteBox}></FontAwesomeIcon>
            <span>Attractions</span>
          </div>
          <div className={`${styles.headerListItem}`}>
            <FontAwesomeIcon icon={faTaxi}></FontAwesomeIcon>
            <span>Airport Taxis</span>
          </div>
        </div>
        {type !== "list" && (
          <div className={styles.headerPlusContainer}>
            {/* HEADER RESUME */}
            <div className={styles.headerInfo}>
              <h1 className={styles.headerTitle}>Encontrá tu próximo alojamiento</h1>
              <p className={styles.headerDesc}>
                Buscá ofertas en hoteles, casas, departamentos y mucho más
              </p>
              <button className={`btn ${styles.headerBtn}`}>Sign in / Register</button>
            </div>
            {/* HEADER SEARCH */}
            <div className={`${styles.headerSearch}`}>
              <div className={`${styles.headerSearchItem}`}>
                <FontAwesomeIcon icon={faBed} className={`${styles.headerIcon}`} />
                <input
                  type='text'
                  placeholder='Destino'
                  className={`${styles.headerSearchInput}`}
                  onChange={(e) => setDestino(e.target.value)}
                />
              </div>
              <div className={`${styles.headerSearchItem}`}>
                <FontAwesomeIcon icon={faCalendarDays} className={`${styles.headerIcon}`} />
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
                    className={`${styles.headerSearchInput}`}
                  />

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
                    className={`${styles.headerSearchInput}`}
                  />
                </span>
              </div>
              <div className={`${styles.headerSearchItem}`}>
                <FontAwesomeIcon icon={faPerson} className={`${styles.headerIcon}`} />
                <span
                  onClick={() => setOpenOptions(!openOptions)}
                  className={`${styles.headerSearchText}`}
                >
                  {`${options.adult} adult · ${options.children} children · ${options.room} room`}
                </span>

                {openOptions && (
                  <div className={`${styles.options}`} ref={optionsRef}>
                    <div className={`${styles.optionItem}`}>
                      <span className={`${styles.optionText}`}>Adult</span>
                      <div className={`${styles.optionCounter}`}>
                        <button
                          disabled={options.adult <= 1}
                          className={`btn ${styles.optionBtn}`}
                          onClick={() => handleOption("adult", "-")}
                        >
                          -
                        </button>
                        <span>{options.adult}</span>
                        <button
                          className={`btn ${styles.optionBtn}`}
                          onClick={() => handleOption("adult", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={`${styles.optionItem}`}>
                      <span className={`${styles.optionText}`}>Children</span>
                      <div className={`${styles.optionCounter}`}>
                        <button
                          disabled={options.children <= 0}
                          className={`btn ${styles.optionBtn}`}
                          onClick={() => handleOption("children", "-")}
                        >
                          -
                        </button>
                        <span>{options.children}</span>
                        <button
                          className={`btn ${styles.optionBtn}`}
                          onClick={() => handleOption("children", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={`${styles.optionItem}`}>
                      <span className={`${styles.optionText}`}>Room</span>
                      <div className={`${styles.optionCounter}`}>
                        <button
                          disabled={options.room <= 1}
                          className={`btn ${styles.optionBtn}`}
                          onClick={() => handleOption("room", "-")}
                        >
                          -
                        </button>
                        <span>{options.room}</span>
                        <button
                          className={`btn ${styles.optionBtn}`}
                          onClick={() => handleOption("room", "+")}
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className={`${styles.headerSearchItem}`}>
                <button className={`btn ${styles.headerSearchBtn}`} onClick={handleSearch}>
                  Search
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Header
