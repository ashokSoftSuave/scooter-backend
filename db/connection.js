import { Sequelize } from "sequelize"
import dotenv from 'dotenv'

dotenv.config()

export const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASS, {
    host: process.env.HOST,
    dialect: 'mysql',
    logging: false,
})

try {
    await sequelize.authenticate()
    console.log("Database connected successfully")
}
catch (err) {
    console.log(err + "")
}