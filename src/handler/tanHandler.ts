import { TanController } from "../controller/tanController";
import { Request, Response, NextFunction } from "express";

export class TanHandler {
    tanController: TanController;

    constructor(tanController: TanController) {
        this.tanController = tanController;
    }

    
    async calcTan (req: Request, res: Response, next: NextFunction) {
        try {
            const result = await this.tanController.calcTan();
            res.json(result);
        } catch (error) {
            res. status(500).json({ error: 'Internal Server Error' });
        }
    }

}