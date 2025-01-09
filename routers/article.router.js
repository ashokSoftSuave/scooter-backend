import express from 'express';
import { getArticle } from '../services/article.service.js';

const articleRouter = express.Router()

articleRouter.get('/getarticle', async (req, res) => {
    try {
        const getarticle = await getArticle()
        if (getarticle) {
            res.status(200).send(getarticle);
        }
        else {
            res.status(400).send("no data is there")
        }
    }
    catch (err) {
        res.status(400).send(err + "")
    }
})


articleRouter.put('/articleupdate', async (req,res)=>{
    try{
        
    }
    catch(err){
        res.status(400).send(err+ "")
    }
})

export default articleRouter;