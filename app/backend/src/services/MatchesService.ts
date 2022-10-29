import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams'; import User from '../database/models/User';

export default class MatchesService {
  service;
  constructor(private matchesModel: typeof Matches, private LoginService: any) {
    this.service = new LoginService(User);
  }

  async getMatches(): Promise<Matches[]> {
    const result = await this.matchesModel.findAll({
      include: [{
        model: Teams,
        as: 'teamHome',
        attributes: { exclude: ['id'] },
      },
      {
        model: Teams,
        as: 'teamAway',
        attributes: { exclude: ['id'] },
      },
      ],
    });
    return result;
  }

  async getMatchesQuery(inProgress: any): Promise<Matches[]> {
    const result = await this.matchesModel.findAll({
      where: { inProgress: inProgress.inProgress === 'true' },
      include: [
        { model: Teams,
          as: 'teamHome',
          attributes:
          { exclude: ['id'] },
        },
        {
          model: Teams,
          as: 'teamAway',
          attributes: { exclude: ['id'] },
        },
      ],
    });
    return result;
  }

  async createMatch(body:any, token:string): Promise<Matches | any> {
    await this.service.verificationTokenEmail(token);

    if (body.homeTeam === body.awayTeam) {
      throw new Error(
        'It is not possible to create a match with two equal teams',
      );
    }

    const result = await this.matchesModel.create({ inProgress: true, ...body });

    return result;
  }

  async updateService(id:number, value:any): Promise<void> {
    await this.matchesModel.update(
      value,
      {
        where: { id },
      },
    );
  }
}
