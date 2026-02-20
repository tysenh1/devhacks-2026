import type { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService.ts';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {

    const user = await userService.loginUser(req.body)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}
