import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";
import { articleInfoModel } from "./artilelinfo.model.js";



export const mileStoneModel = sequelize.define('milestones', {
    pts_id: {
        type: DataTypes.STRING,
        references: {
            model: articleInfoModel,
            key: 'pts_id'
        }

    },
    copy_edit_task_complete: {
        type: DataTypes.DATEONLY
    },
    proofs_to_author: {
        type: DataTypes.DATEONLY
    },
    au_proof_correx_submitted: {
        type: DataTypes.DATEONLY
    },
    revised_proof_requested: {
        type: DataTypes.BOOLEAN
    },
    cfc_task_complete: {
        type: DataTypes.DATEONLY
    },
    aiti_task_completed: {
        type: DataTypes.DATEONLY
    },
    revised_proof_approved: {
        type: DataTypes.DATEONLY
    }
}, {
    tableName: 'milestones'
})

articleInfoModel.hasOne(mileStoneModel, { foreignKey: 'pts_id' });
mileStoneModel.belongsTo(articleInfoModel, { foreignKey: 'pts_id' });

const mileStonesTable = async () => {
    try {
        await mileStoneModel.sync({ alter: true })
        console.log("milestonestable table is created")
    }
    catch (err) {
        console.log(err + "")
    }
}

// mileStonesTable()