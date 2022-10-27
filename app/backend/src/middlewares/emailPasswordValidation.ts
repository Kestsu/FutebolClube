import { Request, Response, NextFunction } from 'express';

function validateEmail(a:string) { const re = /\S+@\S+\.\S+/; return re.test(a); }

export default (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (!password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }

  const validar = validateEmail(email);
  if (validar === false) {
    return res.status(401).json({ message: 'Incorrect email or password' });
  }
  next();
};
