import express, { Express } from 'express';
import { Server } from 'http';
import { ExeptionFilter } from './errors/exeption.filter';
import { ILogger } from './logger/logger.interface';
import { LoggerService } from './logger/logger.service';
import { UserController } from './users/users.controller';

export class App {
  app: Express;
  server: Server;
  port: number;
  logger: ILogger;
  userController: UserController;
  exeptionfilter: ExeptionFilter;

  constructor(
    logger: ILogger,
    userController: UserController,
    exeptionfilter: ExeptionFilter
    ) {
    this.app = express();
    this.port = 8000;
    this.logger = logger;
    this.userController = userController;
    this.exeptionfilter = exeptionfilter;
  }

  userRoutes() {
    this.app.use('/users', this.userController.router);
  }

  useExceptionFilters() {
    this.app.use(this.exeptionfilter.catch.bind(this.exeptionfilter));
  }

  public async init() {
    this.userRoutes();
    this.useExceptionFilters();
    this.server = this.app.listen(this.port);
    this.logger.log(`Сервер запущен на http://localhost:${this.port}`);    
  }
}