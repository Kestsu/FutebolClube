import { Router } from 'express';
import Times from '../controllers/Teams';
import TeamsService from '../services/TeamsService';

const TeamsController = new Times(TeamsService);

const routers = Router();

routers.get('/teams', TeamsController.get);
routers.get('/teams/:id', TeamsController.getId); // TA FUNCIONANDO MAIS N PASSA NO TESTE

export default routers;
