import { Request, Response } from 'express';
import Matches from '../database/models/Matches';

export default class MatchesController {
  service;
  constructor(MatchesService: any) {
    this.service = new MatchesService(Matches);
  }

  getAll = async (req:Request, res:Response) => {
    if (req.query !== {}) {
      const result = await this.service.getMatchesQuery(req.query);
      return res.status(201).json(result);
    }
    const result = await this.service.getMatches();
    return res.status(201).json(result);
  };
}
