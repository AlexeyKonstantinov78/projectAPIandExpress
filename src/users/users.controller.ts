import { Request, Response, NextFunction } from "express";
import { BaseContriller } from "../common/base.comtroller";
import { HTTPError } from "../errors/http-error.class";
import { LoggerService } from "../logger/logger.service";

export class UserController extends BaseContriller {
  constructor(logger: LoggerService) {
    super(logger);
    this.bindRoutes([
      { path: '/register', method: 'post', func: this.register },
      { path: '/login', method: 'post', func: this.login },
    ]);
  }
  login(req: Request, res: Response, next: NextFunction) {
    next(new HTTPError(401, 'ошибка авторизации', 'login'));
    // this.ok(res, 'login');
  }

  register(req: Request, res: Response, next: NextFunction) {
    this.ok(res, 'register');
  }
}