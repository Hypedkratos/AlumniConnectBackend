import express from 'express'
import cors from "cors"
import { connectToDatabase } from './db/connect.js'
import router from './route/router.js'
import bodyParser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT 
const app = express()

app.use(cors())
app.use(bodyParser.json())

//router
app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
  connectToDatabase();
})