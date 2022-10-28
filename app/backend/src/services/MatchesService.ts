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

//   async getOneId(id: number): Promise<Teams> {
//     const [result] = await this.teamsModel.findAll({
//       where: { id },
//     });
//     return result;
//   }
}
