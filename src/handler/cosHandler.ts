import { CosController } from '../controller/cosController';
import {Request, Response, NextFunction} from 'express';

export class CosHandler {
    cosController: CosController;

    constructor (cosController: CosController) {
        this.cosController = cosController;
    }

    async calcCos (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.cosController.calcCos();
            res.json(result);
        } catch (error) {
            res. status(500).json({ error: 'Internal Server Error' });
        }
    }
}