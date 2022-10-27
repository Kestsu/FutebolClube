import { Model, STRING, INTEGER } from 'sequelize';
import db from '.';
// import OtherModel from './OtherModel';

class Teams extends Model {
  // declare <campo>: <tipo>;
  id?: number;
  teamName: string;
}

Teams.init({
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: INTEGER,
  },
  teamName: {
    type: STRING,
    allowNull: false,
  },
}, {
  // ... Outras configs
  underscored: true,
  sequelize: db,
  modelName: 'teams',
  timestamps: false,
});

export default Teams;
