import dotenv from "dotenv"

dotenv.config()

const getEnvVar = (key: string): string => {
  const value = process.env[key]
  if (!value) {
    throw new Error(`Environment variable ${key} is missing in .env file`)
  }
  return value
}
// env variables
export const GOOGLE_BOOKS_API_URL = getEnvVar("GOOGLE_BOOKS_API_URL")
export const PORT = getEnvVar("PORT")
export const SECRET_KEY = getEnvVar("SECRET_KEY")

// constant variables
export const DEFAULT_RATING = "No rating"
export const UNKNOWN = "Unknown"
export const GET_BOOK_ERROR = "Error retrieving the book"
export const GET_BOOKS_ERROR = "Error retrieving books"
export const ACCESS_DENIED = "Access denied. No token provided."
export const INVALID_TOKEN = "Invalid token."
export const INTERNAL_SERVER_ERROR = "Internal Server Error"
export const ROUTE_NOT_FOUND = "Route Not Found"

export const EMAIL_ALREADY_EXISTS = "Email already registered"
export const INVALID_EMAIL_OR_PASS = "Invalid email or password"
// validation messages
export const BOOK_ID_VALIDATION_MSG = "Book ID is required and must be a string"
export const LIMIT_VALIDATION_MSG = "Limit must be a positive integer"
export const OFFSET_VALIDATION_MSG = "Offset must be a non-negative integer"
export const SEARCH_VALIDATION_MSG = "Search must be a string"
export const EMAIL_VALIDATION_MSG = "Invalid email format"
export const PASSWORD_VALIDATION_MSG =
  "Password must be at least 6 characters long"
