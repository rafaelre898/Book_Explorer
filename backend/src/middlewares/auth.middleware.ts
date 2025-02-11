import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { NextFunction, Request, Response } from "express"
import { UserTokenPayload } from "../types/user.types"

dotenv.config()
const SECRET_KEY = process.env.SECRET_KEY || "default_secret"

export interface AuthRequest extends Request {
  user?: UserTokenPayload
}

export function authenticateJWT(
  req: AuthRequest,
  res: Response,
  next: NextFunction,
) {
  const authHeader = req.header("Authorization")

  if (!authHeader || !authHeader.startsWith("Bearer ")) {
    res
      .status(401)
      .json({ success: false, message: "Access denied. No token provided." })
    return
  }

  const token = authHeader.split(" ")[1]

  try {
    const decoded = jwt.verify(token, SECRET_KEY) as UserTokenPayload
    req.user = decoded
    next()
  } catch (error) {
    res.status(403).json({ success: false, message: "Invalid token.", error })
  }
}
