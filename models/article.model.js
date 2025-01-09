import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";



export const articleModel = sequelize.define('article', {
    pts_id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },

    em: {
        type: DataTypes.STRING,
    },

    first_author: {
        type: DataTypes.STRING,
    },

    corresponding_author: {
        type: DataTypes.STRING,
    },

    pit: {
        type: DataTypes.STRING,
    },

    article_type: {
        type: DataTypes.STRING,
    },

    copyediting: {
        type: DataTypes.STRING,
    },

    s_200: {
        type: DataTypes.DATEONLY
    },

    s_300: {
        type: DataTypes.DATEONLY
    },

    holdout: {
        type: DataTypes.DATEONLY
    },

    finalizing: {
        type: DataTypes.DATEONLY
    },

    ce_status: {
        type: DataTypes.DATEONLY
    },

    cfc_status: {
        type: DataTypes.DATEONLY
    },

    prod_status: {
        type: DataTypes.DATEONLY
    }

}, {
    tableName: 'article'
})


const articleTable = async () => {
    try {
        await articleModel.sync({ alter: true })
        console.log("artical table creted or altered")
    }
    catch (err) {
        console.log(err)
    }
}

// articleTable()