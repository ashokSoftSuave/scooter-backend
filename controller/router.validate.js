import express from 'express';
import userController from './user.controller.js';
import articleController from './article.controller.js';
import { getTokenAndValidate } from '../utilites/token.js';

const routerValidate = express.Router();

routerValidate.use('/user', userController)
routerValidate.use('/article',getTokenAndValidate,articleController)


export default routerValidate;