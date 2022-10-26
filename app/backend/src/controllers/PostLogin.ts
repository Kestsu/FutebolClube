import { Request, Response } from 'express';
import User from '../database/models/User';

export default class PostLogin {
  static async create(req:Request, res:Response) {
    const newUser = await User.create(req.body);
    return res.status(201).json(newUser);
  }
  //   constructor() {
  // this.service = new OrdersModel(connection);
  //   }

//   listaPedidos = async (req: Request, res: Response) => {
//     const result = await this.service.ListAllOrders();
//     return res.status(200).json(result);
//   };
}
