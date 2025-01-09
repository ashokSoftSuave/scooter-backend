import express from 'express';
import { createUser, getUser } from '../services/user.service.js';
import { validateHashing } from '../utilites/hashing.js';
import { genToken, getTokenAndValidate } from '../utilites/token.js';


const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
    try {
        const { username, password, email } = req.body
        if (username && password && email) {
            const create = await createUser(username, password, email)
            if (create) {
                res.status(200).send({ statusCode: 200, msg: "signup successfull" })
            }
            else {
                res.status(400).send({ statusCode: 400, msg: "try different usernam and email sign up" })
            }
        }
        else {
            res.status(400).send({ statusCode: 400, msg: "username and password is mandatory" })
        }
    }
    catch (err) {
        res.status(401).send(err.message)
    }


})

userRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body
        if (email && password) {
            const loggeduser = await getUser(email)
            if (loggeduser) {
                const validate = await validateHashing(password, loggeduser.password)
                if (validate) {
                    const token = await genToken(loggeduser)
                    res.status(200).send({
                        token: token,
                        username: loggeduser.username,
                        email: loggeduser.email,
                        status: "login successsfull"
                    })
                }
                else {
                    res.status(400).send({ statusCode: 400, status: "password is wrong" })
                }
            }
            else {
                res.status(400).send({ statusCode: 400, status: "user is not found" })
            }

        }
        else {
            res.status(400).send({ statusCode: 400, status: "username and password is mandatory" })
        }
    }
    catch (err) {
        res.status(400).send(err.message)
    }
})

export default userRouter