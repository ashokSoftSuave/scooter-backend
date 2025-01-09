import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config()

const validateToken = async (token) => {
    try {
        const validation = jwt.verify(token, process.env.JWT_KEY);
        return validation;
    } catch (e) {
        return false;
    }
}

const genToken = async (userdata) => {
    try {
        const token = jwt.sign(userdata, process.env.JWT_KEY)
        return token
    }
    catch (err) {
        console.log(err + "")
    }
}

const getTokenAndValidate = async (req, res, next) => {
    try {
        const token = req.header('Authorization');
        if (token) {
            const response = await validateToken(token);
            if (response) {
                req.body['type'] = response;
                next();
            } else {
                res.send({ statusCode: 400, msg: "Invalied token" });
            }
        }
        else {
            res.status(401).send("token is missing..")
        }
    } catch (e) {
        res.send(e.message)
    }
}


export { genToken, getTokenAndValidate }