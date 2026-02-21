import type { Request, Response, NextFunction } from 'express';
import * as userService from '../services/userService.ts';
import { successResponse } from '../models/responseModel.ts';
import fs from 'node:fs'
import path from 'path'

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

export const updateHealthInfo = async (
  req: any,
  res: Response,
  next: NextFunction
): Promise<void> => {
  if (!req.file) next(new Error("Invalid file"))
  try {
    const absolutePath = path.resolve(req.file.path)

    await userService.updateHealthInfo(absolutePath)
    fs.unlinkSync(req.file.path)
    res.status(204).json({})
  } catch (err) {
    if (req.file && req.file.path) fs.unlinkSync(req.file.path)
    next(err)
  }
}

export const getHealthInfo = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { email } = req.params
    const info = await userService.getHealthInfo(email)
    res.status(200).json(info);
  } catch (err) {
    next(err)
  }
}

export const register = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await userService.registerUser(req.body)
    res.status(201).json(successResponse(user))
  } catch (err) {
    next(err)
  }
}

export const vaccineEligiblityCheck = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const id: string = req.params.id as string
    const eligibility = userService.getEligibleVaccines(id)
    res.status(200).json(successResponse(eligibility))
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
