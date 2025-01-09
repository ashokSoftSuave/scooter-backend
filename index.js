import express from 'express';
import dotenv from 'dotenv';
import routerValidate from "./routers/router.validate.js";
import cors from 'cors';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use(routerValidate)


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err + "errror")
    }
    else {
        console.log("server is running in ", process.env.PORT)
    }
})



