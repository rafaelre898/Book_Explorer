import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import usersServices from "../services/users.services";

async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success: false, errors: errors.array() });
      return;
    }

    const { email, password } = req.body;
    const response = await usersServices.login(email, password);

    res.json({ success: true, data: response });
  } catch (error: any) {
    next(error);
  }
}

async function signup(req: Request, res: Response, next: NextFunction) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.status(400).json({ success: false, errors: errors.array() });
      return
    }

    const { email, password } = req.body;
    const response = await usersServices.signup(email, password);

    res.status(201).json({ success: true, data: response });
  } catch (error: any) {
    next(error);
  }
}

export default { login, signup };
