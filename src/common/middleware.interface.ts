import { NextFunction, Request, Response, Router } from 'express';

export interface IMiddleware {
	execite: (req: Request, res: Response, next: NextFunction) => void;
}