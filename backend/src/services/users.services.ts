import bcrypt from "bcryptjs"
import dotenv from "dotenv"
import fs from "fs"
import path from "path"
import { EMAIL_ALREADY_EXISTS, INVALID_EMAIL_OR_PASS } from "../utils/constants"
import { generateToken } from "../utils/jwt"

dotenv.config()

const usersFilePath = path.join(__dirname, "../data/users.json")

function getUsers(): { email: string; password: string }[] {
  const usersData = fs.readFileSync(usersFilePath, "utf-8")
  return JSON.parse(usersData)
}

function saveUsers(users: { email: string; password: string }[]) {
  fs.writeFileSync(usersFilePath, JSON.stringify(users, null, 2))
}

async function login(email: string, password: string) {
  const users = getUsers()
  const user = users.find((u) => u.email === email)

  if (!user) throw new Error(INVALID_EMAIL_OR_PASS)

  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) throw new Error(INVALID_EMAIL_OR_PASS)

  const token = generateToken(user.email)

  return { email: user.email, token }
}

async function signup(email: string, password: string) {
  const users = getUsers()

  if (users.some((u) => u.email === email)) {
    throw new Error(EMAIL_ALREADY_EXISTS)
  }

  const hashedPassword = await bcrypt.hash(password, 10)
  const newUser = { email, password: hashedPassword }

  users.push(newUser)
  saveUsers(users)

  const token = generateToken(newUser.email)
  return { email: newUser.email, token }
}

export default { login, signup }
