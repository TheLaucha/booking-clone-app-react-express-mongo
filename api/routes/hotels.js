import express from "express"
import Hotel from "../models/Hotel.js"
import { createError } from "../utils/error.js"
import {
  createHotel,
  deleteHotel,
  getAllHotels,
  getCountByCity,
  getCountByType,
  getHotel,
  updateHotel,
} from "../controllers/hotelController.js"
import { verifyAdmin } from "../utils/verifyToken.js"

const router = express.Router()

// CREATE
router.post("/", verifyAdmin, createHotel)
// UPDATE
router.put("/:id", verifyAdmin, updateHotel)
// DELETE
router.delete("/:id", verifyAdmin, deleteHotel)
// GET
router.get("/find/:id", getHotel)
// GET ALL
router.get("/", getAllHotels)
// GET COUNT BY CITY
router.get("/countByCity", getCountByCity)
// GET COUNT BY TYPE
router.get("/countByType", getCountByType)

export default router
