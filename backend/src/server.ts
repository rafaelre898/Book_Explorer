import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { PORT } from './utils/constants'

const app = express()

dotenv.config()
app.use(express.json())
app.use(cors())

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})