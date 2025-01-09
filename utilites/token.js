import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

const validateToken = async (token) => {
    try {
        const validation = jwt.verify(token, process.env.JWT_KEY);
        return validation;
    } catch (err) {
        return false;
    }
}

const genToken = async (userdata) => {
    try {
        const token = jwt.sign(userdata, process.env.JWT_KEY)
        return token
    }
    catch (err) {
        console.log("Error while Gen Token : Err", err);
    }
}

const getTokenAndValidate = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        const t = token.split(" ")[1]
        if (t) {
            const response = await validateToken(t);
            if (response) {
                next();
            } else {
                res.status(400).send({ statusCode: 400, msg: "Invalid token" });
            }
        }
        else {
            res.status(400).send({ statusCode: 400, msg: "Token Not Found" })
        }
    } catch (err) {
        res.status(400).send({ statusCode: 400, msg: "Token Validation Failed" })
    }
}


export { genToken, getTokenAndValidate }