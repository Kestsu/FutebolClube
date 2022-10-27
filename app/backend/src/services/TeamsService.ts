import Teams from '../database/models/Teams';

export default class TeamsService {
  constructor(private teamsModel: typeof Teams) {
  }

  async getTeams() {
    const result = await this.teamsModel.findAll();
    return result;
  }
}
