import express from 'express';
import dotenv from 'dotenv';
import routerValidate from "./controller/router.validate.js";
import cors from 'cors';

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

app.use(routerValidate)


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log("server creation failed: Err" , err)
    }
    else {
        console.log("server is running in ", process.env.PORT)
    }
})



