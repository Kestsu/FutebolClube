import { Request, Response } from 'express';
import SequelizeModel from '../database/models/index';

export default class Leaderboard {
  service;
  constructor(LeaderboardService: any) {
    this.service = new LeaderboardService(SequelizeModel);
  }

  board = async (req:Request, res:Response) => {
    const result = await this.service.leaderBoardHome();
    return res.status(201).json(result);
  };
}
