import express from "express"
import {
  createRoom,
  deleteRoom,
  getAllRooms,
  getRoom,
  updateRoom,
} from "../controllers/roomController.js"
import { verifyAdmin, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

// CREATE
router.post("/", verifyAdmin, createRoom)
// UPDATE
router.put("/:id", verifyAdmin, updateRoom)
// DELETE
router.delete("/:id", verifyAdmin, deleteRoom)
// GET BY ID
router.get("/:id", verifyUser, getRoom)
// GET ALL
router.get("/", verifyUser, getAllRooms)

export default router
