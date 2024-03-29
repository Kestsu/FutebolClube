import * as express from 'express';
import LoginRouter from './routes/LoginRouter';
import TeamsRouter from './routes/TeamsRouter';
import MatchesRouter from './routes/MatchesRouter';
import LeaderboardRouter from './routes/leaderboardRouter';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.status(200).json({ ok: true }));
    this.app.use(LoginRouter);
    this.app.use(TeamsRouter);
    this.app.use(MatchesRouter);
    this.app.use(LeaderboardRouter);
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  // private routes():void {
  //   this.app.get(PostLoginController);
  // }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// A execução dos testes de cobertura depende dessa exportação
export const { app } = new App();
