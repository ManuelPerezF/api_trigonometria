import { SinController } from '../controller/sinController';
import {Request, Response, NextFunction} from 'express';

export class SinHandler {
    sinController: SinController;

    constructor (sinController: SinController) {
        this.sinController = sinController;
    }

    async calcSin (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.sinController.calcSin();
            res.json(result);
        } catch (error) {
            res. status(500).json({ error: 'Internal Server Error' });
        }
    }
}