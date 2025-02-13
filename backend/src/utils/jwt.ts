import jwt from "jsonwebtoken"
import { SECRET_KEY } from "./constants"

export function generateToken(email: string): string {
  return jwt.sign({ email }, SECRET_KEY, { expiresIn: "58h" })
}
