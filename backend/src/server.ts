import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import booksRouter from './routes/books.routes'
import { PORT } from './utils/constants'

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())
app.use('/api', booksRouter)

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})