import jwt from "jsonwebtoken"
import { createError } from "./error.js"

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token

  if (!token) {
    return next(createError(401, "You are not authenticated!"))
  }

  // Verifica la autenticidad del token JWT
  jwt.verify(token, process.env.JWT, (err, user) => {
    // Si se produce un error durante la verificación
    if (err) {
      // Crea un error 403 (Forbidden) indicando que el token no es válido
      return next(createError(403, "Token is not valid!"))
    }

    // Si el token es válido, asigna la información del usuario al objeto 'req'
    req.user = user

    // Continúa con el siguiente middleware o ruta
    next()
  })
}

export const verifyUser = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next()
    } else {
      return next(createError(403, "You are not authorized"))
    }
  })
}

export const verifyAdmin = (req, res, next) => {
  verifyToken(req, res, next, () => {
    if (req.user.isAdmin) {
      next()
    } else {
      return next(createError(403, "You are not authorized"))
    }
  })
}
