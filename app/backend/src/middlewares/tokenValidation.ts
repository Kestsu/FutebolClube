import { Request, Response, NextFunction } from 'express';

import jwt = require('jsonwebtoken');

require('dotenv/config');

const secret = process.env.JWT_SECRET || 'jwt_secret';

export default async (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('authorization') || 'token';

  if (!token) {
    return res.status(401).json({
      message: 'Token not found',
    });
  }

  try {
    const { email } = jwt.verify(token, secret) as { email:string, role:string };
    req.body.email = email;

    next();
  } catch (err) {
    return res.status(401).json({
      message: 'Expired or invalid token',
    });
  }
};
