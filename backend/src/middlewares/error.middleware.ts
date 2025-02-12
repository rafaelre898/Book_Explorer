import { NextFunction, Request, Response } from "express"
import { INTERNAL_SERVER_ERROR } from "../utils/constants"

export default function (
  error: any,
  req: Request,
  res: Response,
  _next: NextFunction,
) {
  console.error(error)

  const statusCode = error.status || 500

  res.status(statusCode).json({
    success: false,
    message: error.message || INTERNAL_SERVER_ERROR,
    stack: process.env.NODE_ENV === "production" ? undefined : error.stack,
  })
}
