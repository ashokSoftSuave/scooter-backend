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
        return false;
    }
}

const getUser = async (email) => {
    try {
        const data = await userModel.findOne({
            attributes:['username', 'email' , 'password'],
            where: {
                email: email
            }
        })
        if(!data){
            return false
        }
        return data.dataValues
    }
    catch (err) {
        console.log(err + "")
        return err
    }
}



export { createUser, getUser }