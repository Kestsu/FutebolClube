import { Router } from 'express';
import Times from '../controllers/Teams';
import TeamsService from '../services/TeamsService';

const TeamsController = new Times(TeamsService);

const routers = Router();

routers.get('/teams', TeamsController.get);
routers.get('/teams/:id', TeamsController.getId);

export default routers;

// Como pegar o ultimo elemento de um array no js?
