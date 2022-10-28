import { Request, Response } from 'express';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import User from '../database/models/User';

export default class MatchesController {
  matchService;
  teamsService;
  loginService;
  constructor(MatchesService: any, TeamsService: any, LoginService: any) {
    this.matchService = new MatchesService(Matches, LoginService);
    this.teamsService = new TeamsService(Teams);
    this.loginService = new LoginService(User);
  }

  getAll = async (req:Request, res:Response) => {
    if (req.query.inProgress) {
      const result = await this.matchService.getMatchesQuery(req.query);
      console.log(req.query);
      return res.status(201).json(result);
    }

    const result = await this.matchService.getMatches();
    return res.status(201).json(result);
  };

  saveNewMatch = async (req:Request, res:Response) => {
    const { body } = req;
    const token = req.header('authorization');
    const firstTeam = await this.teamsService.getOneId(req.body.homeTeam);
    const secondTeam = await this.teamsService.getOneId(req.body.awayTeam);
    await this.loginService.verificationTokenEmail(token);
    // if (ai === 'error de token') {
    //   return res.status(401).json({});
    // }

    if (!firstTeam || !secondTeam) {
      return res.status(404).json({ message: 'There is no team with such id!' });
    }
    try {
      const result = await this.matchService.createMatch(body, token, res);
      return res.status(201).json(result);
    } catch (error: any) {
      return res.status(422).json({ message: error.message });
    }
  };

  updateMatch = async (req:Request, res:Response) => {
    await this.matchService.updateService(req.params.id);
    return res.status(200).json({ message: 'Finished' });
  };
}
