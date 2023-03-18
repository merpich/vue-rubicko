import express from 'express'
import cors from 'cors'
import * as dotenv from 'dotenv'

import { listener, mongo } from './services/app.service.js'
import { AuthRoutes } from './routes/app.routes.js'


/**
 * Create dotenv
 */

dotenv.config()


/**
 * Connect MongoDB
 */

mongo.strict()
mongo.connect()


/**
 * Create Express app
 */

const app = express()

app.listen(process.env.PORT, (error) => listener(error))

app.use(cors())
app.use(express.json())


/**
 * Routes
 */

app.use('/', AuthRoutes)
