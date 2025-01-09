import express from 'express';
import { getArticle, getSingleArticle, updateArticle } from '../services/article.service.js';

const articleController = express.Router()

articleController.get('/getarticle', async (req, res) => {
    try {
        const getarticle = await getArticle()
        if (getarticle) {
            res.status(200).send(getarticle);
        }
        else {
            res.status(201).send({ statusCode: 201, status: "No Data Found" })
        }
    }
    catch (err) {
        console.log("something went worng : Err", err)
        res.status(400).send({ statusCode: 400, status: "Oops! Something went wrong. Please try again later" })
    }
})

articleController.get('/singlearticle', async (req, res) => {
    try {
        const { pts_id } = req.query;
        const data = await getSingleArticle(pts_id)
        if (data) {
            res.status(200).send(data);
        }
        else {
            res.status(201).send({ statusCode: 201, status: "No Data Found" })
        }
    }
    catch (err) {
        console.log("something went worng : Err", err)
        res.status(400).send({ statusCode: 400, status: "Oops! Something went wrong. Please try again later" })
    }
})


articleController.put('/updatearticle', async (req, res) => {
    try {
        const data = await updateArticle(req.body[0])
        if (data) {
            res.status(200).send({ statusCode: 200, status: "Data Updated successfully" })
        }
        else {
            res.status(400).send({ statusCode: 400, status: "Data Updation Failed" })
        }
    }
    catch (err) {
        console.log("something went worng : Err", err)
        res.status(400).send({ statusCode: 400, status: "Oops! Something went wrong. Please try again later" })
    }
})

export default articleController;