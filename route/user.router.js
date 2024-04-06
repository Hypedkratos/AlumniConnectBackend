import { Router } from 'express';
import { signup,login }  from '../controller/user/user.controller.js';
// const {signup,login} = require('../controller/user/user.controller.js');
const user = Router();

user.post('/signup',signup);
user.get("/login",login);


export default user;