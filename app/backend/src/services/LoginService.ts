import { sign, SignOptions, verify } from 'jsonwebtoken';

import bcrypt = require('bcryptjs');
import User from '../database/models/User';
import { IUser } from '../interfaces/index';

const generateToken = (email: string, role: string): string => {
  const payload = { email, role };
  const jwtCOnfig: SignOptions = {
    expiresIn: '20d',
  };
  const token = sign(payload, 'jwt_secret', jwtCOnfig);
  return token;
};

export default class UserService {
  constructor(private userModel: typeof User) {
  }

  async verification(user: IUser): Promise<any> {
    const newUser = await this.userModel.findOne({ where: { email: user.email } });
    if (!newUser) {
      return { type: 'err' };
    }

    const cript = bcrypt.compareSync(
      user.password,
      newUser.password,
    );
    if (!cript) return { type: 'err' };

    const token = generateToken(newUser.email, newUser.role);
    const result = {
      type: 'token',
      resultado: token,
    };

    return result;
  }

  async verificationTokenEmail(token: string): Promise<any> {
    const payload = verify(token, 'jwt_secret') as { email:string, role:string };
    const { email } = payload;

    if (!payload.email) {
      return { status: 401, resultado: 'Expired or invalid token' };
    }
    const newUser = await this.userModel.findOne({ where: { email } });
    if (!newUser) {
      return { status: 401, resultado: 'Incorrect email or password' };
    }
    return newUser.role;
  }
}
