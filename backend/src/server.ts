import cors from "cors"
import dotenv from "dotenv"
import express from "express"
import booksRouter from "./routes/books.routes"
import usersRouter from "./routes/users.routes"
import errorMiddleware from "./middlewares/error.middleware"
import { PORT } from "./utils/constants"
import notFoundMiddleware from "./middlewares/notFound.middleware"

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use("/api", booksRouter)
app.use("/api", usersRouter)

app.use(notFoundMiddleware)

app.use(errorMiddleware)

app.listen(PORT, () => {
  /* eslint-disable */
  console.log(`Server running on port ${PORT}`)
})
