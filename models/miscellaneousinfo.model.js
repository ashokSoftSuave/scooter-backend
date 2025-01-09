import { DataTypes } from "sequelize";
import { sequelize } from "../db/connection.js";
import { articleInfoModel } from "./articlelinfo.model.js";



export const miscellaneousInfoModel = sequelize.define('miscellaneous_info', {
    pts_id: {
        type: DataTypes.STRING,
        references: {
            model: articleInfoModel,
            key: 'pts_id'
        }

    },
    id_status: {
        type: DataTypes.BOOLEAN
    },
    id_notes: {
        type: DataTypes.STRING
    },
    welcome_letter: {
        type: DataTypes.BOOLEAN
    },
    press_release: {
        type: DataTypes.BOOLEAN
    },
    le_figures_ready: {
        type: DataTypes.BOOLEAN
    },
    ce_qc_review_complete: {
        type: DataTypes.BOOLEAN
    },
    saved_to_tipsheet_folder: {
        type: DataTypes.BOOLEAN
    },
    ots_record_check: {
        type: DataTypes.BOOLEAN
    },
    sent_pub_date_to_author: {
        type: DataTypes.BOOLEAN
    },
    sent_final_email_to_author: {
        type: DataTypes.BOOLEAN
    },
    consortia: {
        type: DataTypes.STRING
    },
    fast_tracK: {
        type: DataTypes.BOOLEAN
    },
    free_featured_online: {
        type: DataTypes.BOOLEAN
    },
    cover_sub_received: {
        type: DataTypes.BOOLEAN
    },
    toc_order_position: {
        type: DataTypes.STRING
    },
    qa_status: {
        type: DataTypes.STRING
    }
}, {
    tableName: 'miscellaneous_info'
})

articleInfoModel.hasOne(miscellaneousInfoModel, { foreignKey: 'pts_id' });
miscellaneousInfoModel.belongsTo(articleInfoModel, { foreignKey: 'pts_id' });

