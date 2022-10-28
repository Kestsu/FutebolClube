import { Request, Response } from 'express';
import User from '../database/models/User';

const error = 'Incorrect email or password';
export default class Login {
  service;
  constructor(LoginService: any) {
    this.service = new LoginService(User);
  }

  post = async (req:Request, res:Response) => {
    const { type, resultado } = await this.service.verification(req.body);
    if (type === 'err') {
      return res.status(401).json({ message: error });
    }
    return res.status(200).json({ token: resultado });
  };

  token = async (req:Request, res:Response) => {
    const token = req.header('authorization') || 'token';
    const role = await this.service.verificationTokenEmail(token);
    return res.status(200).json({ role });
  };
}
