import { Request, Response } from 'express';
import Teams from '../database/models/Teams';
// import TeamsService from '../services/TeamsService';

export default class Times {
  service;
  constructor(TeamsService: any) {
    this.service = new TeamsService(Teams);
  }

  get = async (req:Request, res:Response) => {
    const newUser = await this.service.getTeams();
    return res.status(200).json(newUser);
  };

  getId = async (req:Request, res:Response) => {
    const { id } = req.params;
    const userId = await this.service.getOneId(id);
    return res.status(200).json(userId);
  };
}
