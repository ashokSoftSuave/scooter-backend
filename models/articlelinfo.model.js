import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";


export const articleInfoModel = sequelize.define('articleinfo', {
    pts_id: {
        type: DataTypes.STRING,
        primaryKey: true
    },
    journal: {
        type: DataTypes.STRING,
    },
    pts: {
        type: DataTypes.STRING,
    },
    pit: {
        type: DataTypes.STRING,
    },
    dochead: {
        type: DataTypes.STRING,
    },
    production_handler: {
        type: DataTypes.STRING,
    },
    points: {
        type: DataTypes.STRING,
    },
    pts_remarks: {
        type: DataTypes.STRING,
    },
    production_notes: {
        type: DataTypes.STRING,
    },
    speed_target: {
        type: DataTypes.DATEONLY,
    },
    on_date: {
        type: DataTypes.DATEONLY,
    },
    embargo_exp: {
        type: DataTypes.DATE,
    },
    embargo_stg: {
        type: DataTypes.STRING,
    },
    article_s300_date: {
        type: DataTypes.DATEONLY,
    },
    item_holdout: {
        type: DataTypes.DATEONLY,
    },
    item_finalizing: {
        type: DataTypes.DATEONLY,
    },
    item_group: {
        type: DataTypes.STRING,
    },
    volume: {
        type: DataTypes.STRING,
    },
    issue: {
        type: DataTypes.STRING,
    },
    vol_iss: {
        type: DataTypes.STRING,
    },
    handling_editor: {
        type: DataTypes.STRING,
    },
    first_author: {
        type: DataTypes.STRING,
    },
    corr_author: {
        type: DataTypes.STRING,
    },
    corr_author_email: {
        type: DataTypes.STRING,
    },
    em: {
        type: DataTypes.STRING,
    },
    doi: {
        type: DataTypes.STRING,
    },
    pii: {
        type: DataTypes.STRING,
    },
    url: {
        type: DataTypes.STRING,
    },
    title: {
        type: DataTypes.STRING,
    },
    pts_refers_to: {
        type: DataTypes.STRING,
    }
}, {
    tableName: 'articleinfo'
})
