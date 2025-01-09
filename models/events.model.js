import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";
import { articleInfoModel } from "./articlelinfo.model.js";



export const eventsModel = sequelize.define('events', {
    pts_id: {
        type: DataTypes.STRING,
        references: {
            model: articleInfoModel,
            key: 'pts_id'
        }

    },
    received: {
        type: DataTypes.DATEONLY
    },
    revised: {
        type: DataTypes.DATEONLY
    },
    pre_accept: {
        type: DataTypes.DATEONLY
    },
    accepted: {
        type: DataTypes.DATEONLY
    },
    login_complete: {
        type: DataTypes.DATEONLY
    },
    date_back_from_sce: {
        type: DataTypes.DATEONLY
    },
    sce_returned_status: {
        type: DataTypes.BOOLEAN
    },
    assigned_date: {
        type: DataTypes.DATEONLY
    },
    on_completion: {
        type: DataTypes.STRING
    },
    pts_milestone: {
        type: DataTypes.STRING
    },
    ew_imported_s5: {
        type: DataTypes.DATEONLY
    },
    sd_published_on_the_web_s5: {
        type: DataTypes.DATEONLY
    },
    ew_imported_s200: {
        type: DataTypes.DATEONLY
    },
    sd_published_on_the_web_s200: {
        type: DataTypes.DATEONLY
    },
    sd_published_on_the_web_s250: {
        type: DataTypes.DATEONLY
    },
    sd_published_on_the_web_s300: {
        type: DataTypes.DATEONLY
    },
}, {
    tableName: 'events'
})

articleInfoModel.hasOne(eventsModel, { foreignKey: 'pts_id' });
eventsModel.belongsTo(articleInfoModel, { foreignKey: 'pts_id' });


