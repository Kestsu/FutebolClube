import { Router } from 'express';
import Times from '../controllers/Teams';
import TeamsService from '../services/TeamsService';

const TeamsController = new Times(TeamsService);

const routers = Router();

routers.get('/teams', TeamsController.get);

export default routers;
