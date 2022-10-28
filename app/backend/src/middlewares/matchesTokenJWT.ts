import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

require('dotenv/config');

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  try {
    verify(token, 'jwt_secret') as { email:string, role:string };
  } catch (error) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }

  next();
};
