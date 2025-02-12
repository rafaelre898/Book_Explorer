import { NextFunction, Request, Response } from "express"
import { ROUTE_NOT_FOUND } from "../utils/constants"

const notFoundMiddleware = (
  _req: Request,
  _res: Response,
  next: NextFunction,
) => {
  const error: any = new Error(ROUTE_NOT_FOUND)
  error.status = 404
  next(error)
}

export default notFoundMiddleware
