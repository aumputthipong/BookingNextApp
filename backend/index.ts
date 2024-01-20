import { error } from "console";
import {Request,Response} from "express"
const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/booking')
const db = mongoose.connection




const app = express()
app.use(cors())
const port = 8080

app.get('/', (req:Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})