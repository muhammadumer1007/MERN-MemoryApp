import express from 'express'
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors'

const app = express()

app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

const CONNECTION_STRING = 'mongodb+srv://MuhammadUmer:gtech4605@mern.pfnavtm.mongodb.net/?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.set('strictQuery', true);
mongoose.connect('mongodb://127.0.0.1/fruitsDB')
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error))

// mongoose.set('useFindAndModify', false);
    // mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })