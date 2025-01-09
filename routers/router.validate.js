import express from 'express';
import userRouter from './user.router.js';
import articleRouter from './article.router.js';
import { getTokenAndValidate } from '../utilites/token.js';

const routerValidate = express.Router();

routerValidate.use('/user', userRouter)
routerValidate.use('/article',getTokenAndValidate,articleRouter)


export default routerValidate;