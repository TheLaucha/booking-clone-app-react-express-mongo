import Hotel from "../models/Hotel.js"

// CREATE
export const createHotel = async (req, res, next) => {
  const newHotel = new Hotel(req.body)

  try {
    const savedHotel = await newHotel.save()
    res.status(200).json(savedHotel)
  } catch (error) {
    next(error)
  }
}

// UPDATE
export const updateHotel = async (req, res, next) => {
  const id = req.params.id
  const newHotel = req.body

  try {
    const updatedHotel = await Hotel.findByIdAndUpdate(id, newHotel, { new: true })
    res.status(200).json(updatedHotel)
  } catch (error) {
    next(error)
  }
}

// DELETE
export const deleteHotel = async (req, res, next) => {
  const id = req.params.id

  try {
    await Hotel.findByIdAndDelete(id)
    res.status(200).json("Hotel has been deleted.")
  } catch (error) {
    next(error)
  }
}

// GET
export const getHotel = async (req, res, next) => {
  const id = req.params.id

  try {
    const hotel = await Hotel.findById(id)
    res.status(200).json(hotel)
  } catch (error) {
    next(error)
  }
}

// GET ALL
export const getAllHotels = async (req, res, next) => {
  const { min, max, limit, ...others } = req.query

  try {
    const hotels = await Hotel.find({
      ...others,
      cheapestPrice: { $gt: min || 1, $lt: max || 9999 },
    }).limit(limit)
    res.status(200).json(hotels)
  } catch (error) {
    next(error)
  }
}

// Count by city
export const getCountByCity = async (req, res, next) => {
  const cities = req.query.cities.split(",")
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Hotel.countDocuments({ city: city })
      })
    )
    res.status(200).json(list)
  } catch (error) {
    next(error)
  }
}

// Count by type
export const getCountByType = async (req, res, next) => {
  const type = req.query.type.split(",")
  try {
    const list = await Promise.all(
      type.map(async (el) => {
        let count = await Hotel.countDocuments({ type: el })
        return { type: el, count: count }
      })
    )
    res.status(200).json(list)
  } catch (error) {
    next(error)
  }
}
