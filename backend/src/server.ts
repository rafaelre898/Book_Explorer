import express, { NextFunction } from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import booksRouter from './routes/books.routes'
import usersRouter from './routes/users.routes'
import { PORT } from './utils/constants'
import errorMiddleware from './middlewares/error.middleware'

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use('/api', booksRouter)
app.use('/api', usersRouter)

app.use((_req, _res, next: NextFunction) => {
    const error = new Error("Route Not Found");
    (error as any).status = 404;
    next(error);
});

app.use(errorMiddleware)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})