import { Router } from 'express';
import tokenValidation from '../middlewares/tokenValidation';
import emailPasswordValidation from '../middlewares/emailPasswordValidation';
import Login from '../controllers/Login';
import LoginService from '../services/LoginService';

const LoginController = new Login(LoginService);

const routers = Router();

routers.post('/login', emailPasswordValidation, LoginController.post);
routers.get('/login/validate', tokenValidation, LoginController.token);

export default routers;
