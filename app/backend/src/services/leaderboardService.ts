import SequelizeModel from '../database/models/index';

const a = `SELECT name, goalsFavor, goalsOwn, goalsBalance,
totalVictories, totalDraws, totalLosses,
(totalVictories * 3 + totalDraws) as totalPoints,
(totalVictories + totalDraws + totalLosses) as totalGames,
ROUND(((totalVictories * 3 + totalDraws) / (
  (totalVictories + totalDraws + totalLosses) * 3)) * 100, 2) As efficiency
FROM (
SELECT TE.team_Name as name,
SUM(MA.home_team_goals > MA.away_team_goals) as totalVictories,
SUM(MA.home_team_goals = MA.away_team_goals) as totalDraws,
SUM(MA.home_team_goals < MA.away_team_goals) as totalLosses,
SUM(MA.home_team_goals) as goalsFavor,
SUM(MA.home_team_goals) as goalsOwn,
SUM(MA.home_team_goals - MA.away_team_goals) as goalsBalance
FROM TRYBE_FUTEBOL_CLUBE.matches AS MA
INNER JOIN TRYBE_FUTEBOL_CLUBE.teams AS TE ON MA.home_team = TE.id
WHERE MA.in_progress = 0
GROUP BY MA.home_team) AS oi
ORDER BY totalVictories DESC, goalsBalance DESC,  goalsFavor DESC,  goalsOwn ASC;`;

export default class leaderboardService {
  constructor(private sequelizeModel: typeof SequelizeModel) {
  }

  async leaderBoardHome() {
    const [result] = await this.sequelizeModel.query(a, {});
    return result;
  }
}
