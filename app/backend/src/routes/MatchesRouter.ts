import { Router } from 'express';
import MatchesController from '../controllers/Matches';
import MatchesService from '../services/MatchesService';

const matchesController = new MatchesController(MatchesService);

const routers = Router();

routers.get('/matches', matchesController.getAll);

export default routers;
