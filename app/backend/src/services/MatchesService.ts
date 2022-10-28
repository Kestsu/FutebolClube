import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';

export default class MatchesService {
  constructor(private matchesModel: typeof Matches) {
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
}
