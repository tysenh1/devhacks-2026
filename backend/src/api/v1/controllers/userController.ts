import type { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService.ts';
import { successResponse } from '../models/responseModel.ts';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await userService.loginUser(req.body)
    res.status(200).json(successResponse(user))
  } catch (err) {
    next(err)
  }
}

export const test = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  res.status(200).json(successResponse("rjs", ';gihdriuhdv;iurdh'))
}
