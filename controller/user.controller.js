import express from 'express';
import { createUser, getUser } from '../services/user.service.js';
import { validateHashing } from '../utilites/hashing.js';
import { genToken } from '../utilites/token.js';


const userController = express.Router();

userController.post('/signup', async (req, res) => {
    try {
        const { username, password, email } = req.body
        if (username && password && email) {
            const create = await createUser(username, password, email)
            if (create) {
                res.status(200).send({ statusCode: 200, status: "signup successfull" })
            }
            else {
                res.status(400).send({ statusCode: 400, status: "Email already present. Try different email for sign up" })
            }
        }
        else {
            res.status(400).send({ statusCode: 400, status: "Username and Password is mandatory" })
        }
    }
    catch (err) {
        console.log("something went worng : Err", err)
        res.status(400).send({ statusCode: 400, status: "Oops! Something went wrong. Please try again later" })
    }


})

userController.post('/login', async (req, res) => {
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
                res.status(400).send({ statusCode: 400, status: "We couldn't find the user you're looking for. Please check the details and try again." })
            }

        }
        else {
            res.status(400).send({ statusCode: 400, status: "Username and password are required. Please fill in both fields." })
        }
    }
    catch (err) {
        console.log("something went worng : Err", err)
        res.status(400).send({ statusCode: 400, status: "Oops! Something went wrong. Please try again later" })
    }
})

export default userController