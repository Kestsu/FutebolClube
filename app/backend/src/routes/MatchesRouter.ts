import { Router } from 'express';
import MatchesController from '../controllers/Matches';
import MatchesService from '../services/MatchesService';
import matchesTokenJWT from '../middlewares/matchesTokenJWT';
import TeamsService from '../services/TeamsService';
import LoginService from '../services/LoginService';

const matchesController = new MatchesController(MatchesService, TeamsService, LoginService);

const routers = Router();

routers.get('/matches', matchesController.getAll);
routers.post('/matches', matchesTokenJWT, matchesController.saveNewMatch);
routers.patch('/matches/:id/finish', matchesController.updateMatch);
routers.patch('/matches/:id', matchesController.updateGoals);

export default routers;
