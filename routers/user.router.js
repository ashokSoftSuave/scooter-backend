import express from 'express';
import { createUser, getUser } from '../services/user.service.js';
import { validateHashing } from '../utilites/hashing.js';
import { genToken } from '../utilites/token.js';


const userRouter = express.Router();

userRouter.post('/signup', async (req, res) => {
    try {
        const { username, password, email } = req.body
        if (username && password && email) {
            const create = await createUser(username, password, email)
            if (create) {
                res.status(200).send("signup successfull")
            }
            else {
                res.status(401).send("error in sign up")
            }
        }
        else {
            res.status(401).send("username and password is mandatory")
        }
    }
    catch (err) {
        res.status(401).send(err + "")
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
                    res.status(200).send({ token: token, status: "login successsfull" })
                }
                else {
                    res.status(401).send("password is wrong")
                }
            }
            else {
                res.status(400).send("user is not found")
            }

        }
        else {
            res.status(401).send("username and password is mandatory")
        }
    }
    catch (err) {
        res.status(401).send(err + "")
    }
})

export default userRouter