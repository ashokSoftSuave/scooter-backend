import { userModel } from "../models/user.model.js";
import { genHash } from "../utilites/hashing.js";


const createUser = async (username, password, email) => {
    const hashed = await genHash(password);
    try {
        const data = await userModel.create({
            username: username,
            password: hashed.pass,
            email: email
        })
        return data;
    }
    catch (err) {
        console.log("Error while create User : Err", err);
        throw new Error(err)
    }
}

const getUser = async (email) => {
    try {
        const data = await userModel.findOne({
            attributes: ['username', 'email', 'password'],
            where: {
                email: email
            }
        })
        if (!data) {
            return false
        }
        return data.dataValues
    }
    catch (err) {
        console.log("Error while get user : Err", err)
        throw new Error(err)
    }
}



export { createUser, getUser }