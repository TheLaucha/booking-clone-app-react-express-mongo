import express from "express"
import { deleteUser, getAllUsers, getUser, updateUser } from "../controllers/userController.js"
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js"

const router = express.Router()

// // Ruta para verificar la autenticación del usuario
// router.get("/checkAuthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in")
// })

// // Ruta para verificar la autenticación del usuario y su identidad
// router.get("/checkUser/:id", verifyUser, (req, res, next) => {
//   res.send("Hello user, you are logged in and you can delete your account")
// })

// // Ruta para verificar la autenticación del usuario y su rol de administrador
// router.get("/checkAdmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("Hello user, you are logged in and you can delete ALL accounts")
// })

// UPDATE
router.put("/:id", verifyUser, updateUser)
// DELETE
router.delete("/:id", verifyUser, deleteUser)
// GET
router.get("/:id", verifyUser, getUser)
// GET ALL
router.get("/", verifyAdmin, getAllUsers)

export default router
