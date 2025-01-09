import { sequelize } from "./db/connection.js";
import { userModel } from "./models/user.model.js";
import express from 'express';
import dotenv from 'dotenv';
import routerValidate from "./routers/router.validate.js";
import { articleInfoModel } from "./models/artilelinfo.model.js";
import { miscellaneousInfoModel } from "./models/miscellaneousinfo.model.js";
import { mileStoneModel } from "./models/milestones.model.js";
import { eventsModel } from "./models/events.model.js";




dotenv.config()

const app = express()

app.use(express.json())

app.use(routerValidate)


app.listen(process.env.PORT, (err) => {
    if (err) {
        console.log(err + "errror")
    }
    else {
        console.log("server is running in ", process.env.PORT)
    }
})



