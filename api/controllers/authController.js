import User from "../models/User.js"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js"

export const register = async (req, res, next) => {
  const { username, email, password } = req.body

  try {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    const newUser = new User({
      username,
      email,
      password: hash,
    })

    await newUser.save()
    res.status(201).send("User has been created")
  } catch (error) {
    next(error)
  }
}

export const login = async (req, res, next) => {
  const { username, password: pass } = req.body

  try {
    // Primero busco el usuario por nombre de usuario
    const user = await User.findOne({ username })
    if (!user) return next(createError(404, "User not found!"))

    // Luego checkeo que la contraseña este correcta
    const isPasswordCorrect = await bcrypt.compare(pass, user.password)
    if (!isPasswordCorrect) return next(createError(400, "Wrong password or username!"))

    // Si esta todo OK enviamos nuestro usuario sin la contraseña y un token por cookie
    const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT)

    const { password, isAdmin, ...otherDetails } = user._doc
    res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({ ...otherDetails })
  } catch (error) {
    next(error)
  }
}
