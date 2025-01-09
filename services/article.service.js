import { sequelize } from "../db/connection.js"
import { articleInfoModel } from "../models/artilelinfo.model.js"
import { eventsModel } from "../models/events.model.js"
import { mileStoneModel } from "../models/milestones.model.js"
import { miscellaneousInfoModel } from "../models/miscellaneousinfo.model.js"


const getArticle = async () => {
    try {

        const data = await articleInfoModel.findAll({
            include: [
                {
                    model: miscellaneousInfoModel,
                },
                {
                    model: mileStoneModel,
                },
                {
                    model: eventsModel,
                },
            ],
        });
        return data;
    }
    catch (err) {
        console.log(err + "")
    }
}



export { getArticle }