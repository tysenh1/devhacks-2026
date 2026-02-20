import type { Request, Response, NextFunction } from 'express';

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const user = await userService.loginUser(req.body)
}
