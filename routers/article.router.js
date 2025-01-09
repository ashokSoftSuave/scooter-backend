import express from 'express';
import { getArticle, getSingleArticle, updateArticle } from '../services/article.service.js';

const articleRouter = express.Router()

articleRouter.get('/getarticle', async (req, res) => {
    try {
        const {sort} = req.query
        const getarticle = await getArticle(sort)
        if (getarticle) {
            res.status(200).send(getarticle);
        }
        else {
            res.status(400).send({ statusCode: 400, msg: "no data is there" })
        }
    }
    catch (err) {
        res.status(400).send(err.message)
    }
})

articleRouter.get('/singlearticle', async (req,res)=>{
    try{
        const {pts_id} = req.query;
        const data = await getSingleArticle(pts_id)
        if(data){
            res.status(200).send(data);
        }
        else{
            res.status(400).send({ statusCode: 400, msg: "no data is there" })
        }
    }
    catch(err){
        res.status(400).send({ statusCode: 400, msg: err.message })
    }
})


articleRouter.put('/updatearticle', async (req, res) => {
    try {
        const data = await updateArticle(req.body)
        if (data) {
            res.status(200).send({ statusCode: 200, msg: "data updated successfully" })
        }
        else {
            res.status(400).send({ statusCode: 400, msg: "data not updated" })
        }
    }
    catch (err) {
        res.status(400).send({ statusCode: 400, msg: err.message })
    }
})

export default articleRouter;