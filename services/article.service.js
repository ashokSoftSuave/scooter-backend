import { sequelize } from "../db/connection.js"
import { articleInfoModel } from "../models/articlelinfo.model.js"
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
        console.log("Error while get  Article : Err", err)
    }
}


const getSingleArticle = async (pts_id) => {
    try {
        const [data] = await articleInfoModel.findAll({
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
            where: { 'pts_id': pts_id }
        });
        return data;
    }
    catch (err) {
        console.log("Error while get SingleArticle : Err", err)
    }
}


const updateArticle = async (data) => {
    const transaction = await sequelize.transaction()
    try {
        const { miscellaneous_info, milestone, event, ...articleinfo } = data
        const pts_id = articleinfo.pts_id;


        const u_articleinfo = await articleInfoModel.update({
            ...articleinfo,
        }, {
            where: {
                'pts_id': pts_id,
            },
            transaction
        })

        const u_miscellaneousinfo = await miscellaneousInfoModel.update({
            ...miscellaneous_info,
        }, {
            where: {
                'pts_id': pts_id,
                'id': miscellaneous_info.id
            },
            transaction
        })

        const u_milestone = await mileStoneModel.update({
            ...milestone,
        }, {
            where: {
                'pts_id': pts_id,
                'id': milestone.id
            },
            transaction
        })

        const u_event = await eventsModel.update({
            ...event,
        }, {
            where: {
                'pts_id': pts_id,
                'id': event.id
            },
            transaction
        })

        if (u_articleinfo[0] && u_miscellaneousinfo[0] && u_milestone[0] && u_event[0]) {
            await transaction.commit();
            return true;
        }
        else {
            await transaction.rollback();
        }


    }
    catch (err) {
        console.log("Error while update article : Err", err)
        await transaction.rollback();
    }
}


export { getArticle, updateArticle, getSingleArticle }