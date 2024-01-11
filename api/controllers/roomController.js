import Room from "../models/Room.js"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"

export const createRoom = async (req, res, next) => {
  // Obtiene el ID del hotel al que se asocia la nueva habitación desde los parámetros de la solicitud
  const hotelId = req.query.hotelId
  console.log({ hotelId })
  // Crea una nueva instancia de la habitación utilizando los datos proporcionados en el cuerpo de la solicitud (req.body)
  const newRoom = new Room(req.body)

  try {
    // Intenta guardar la nueva habitación en la base de datos
    const savedRoom = await newRoom.save()

    try {
      // Intenta actualizar el hotel asociado al agregar la ID de la nueva habitación a su lista de habitaciones
      // $push es una funcion de mongo que añade un valor especifico a un array.
      await Hotel.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })
    } catch (error) {
      next(error)
    }

    // Si la habitación se guardó con éxito y se asoció al hotel, responde con un código 200 y devuelve la habitación creada
    res.status(200).json(savedRoom)
  } catch (error) {
    next(error)
  }
}

export const updateRoom = async (req, res, next) => {
  const id = req.params.id
  const newRoom = req.body

  try {
    const updatedRoom = await Room.findByIdAndUpdate(id, newRoom, { new: true })

    res.send(200).json(updatedRoom)
  } catch (error) {
    next(error)
  }
}

export const deleteRoom = async (req, res, next) => {
  const id = req.params.id
  const hotelId = req.query.hotelId

  try {
    await Room.findByIdAndDelete(id)

    try {
      await Hotel.findByIdAndUpdate(hotelId, { $pull: { rooms: id } })
    } catch (error) {
      next(error)
    }

    res.status(200).send("Room has been deleted")
  } catch (error) {
    next(error)
  }
}

export const getRoom = async (req, res, next) => {
  const id = req.params.id
  try {
    const room = await Room.findById(id)

    res.status(200).json(room)
  } catch (error) {
    next(error)
  }
}

export const getAllRooms = async (req, res, next) => {
  try {
    const rooms = Room.find({})

    res.status(200).json(rooms)
  } catch (error) {
    next(error)
  }
}
