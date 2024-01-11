import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import usersRoute from "./routes/users.js"
import hotelsRoute from "./routes/hotels.js"
import roomsRoute from "./routes/rooms.js"
import cookieParser from "cookie-parser"
import { createError } from "./utils/error.js"
import cors from "cors"

const app = express()
dotenv.config()

// Habilito cors
app.use(cors())

// Conexion a MONGODB
const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO)
    console.log("Connected to mongo db.")
  } catch (error) {
    throw error
  }
}

// SI SE DESCONECTA ENVIA UN MENSAJE
mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!")
})

// SI SE CONECTA ENVIA UN MENSAJE
mongoose.connection.on("connected", () => {
  console.log("mongoDB connected!")
})

// MIDDLEWARES
app.use(cookieParser())
app.use(express.json()) // Este middleware sirve para enviar objetos json en la api

app.use("/api/auth", authRoute)
app.use("/api/users", usersRoute)
app.use("/api/hotels", hotelsRoute)
app.use("/api/rooms", roomsRoute)

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong"
  const finalError = createError(errorStatus, errorMessage)
  return res.status(errorStatus).json(finalError)
})

// INICIO DE APLICACION
app.listen(8800, () => {
  connect()
  console.log("Connected to backend.")
})
