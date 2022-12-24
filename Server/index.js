import express from 'express'
import bodyParser from "body-parser";
import mongoose from 'mongoose';
import cors from 'cors'

import postRoutes from './Routes/Routes.js'

const app = express()


app.use(bodyParser.json({ limit: "30mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

const CONNECTION_STRING = 'mongodb://MuhammadUmer:gtech4605@ac-3zcixjo-shard-00-00.yt2ao8z.mongodb.net:27017,ac-3zcixjo-shard-00-01.yt2ao8z.mongodb.net:27017,ac-3zcixjo-shard-00-02.yt2ao8z.mongodb.net:27017/?ssl=true&replicaSet=atlas-6eya9q-shard-0&authSource=admin&retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000

mongoose.set('strictQuery', true);
mongoose.connect(CONNECTION_STRING)
    .then(() => app.listen(PORT, () => console.log(`Server running on port ${PORT}`)))
    .catch((error) => console.log(error))

// mongoose.set('useFindAndModify', false);
    // mongoose.connect(CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })