import { Router } from 'express';
import leaderboardService from '../services/leaderboardService';
import Leaderboard from '../controllers/Leaderboard';

const LeaderboardController = new Leaderboard(leaderboardService);

const routers = Router();

routers.get('/leaderboard/home', LeaderboardController.board);

export default routers;
