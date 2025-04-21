import exress from 'express';
import { CosController } from '../controller/cosController';
import { CosHandler } from '../handler/cosHandler';
import { FakeService } from '../db/fake/fakeService';

const router = exress.Router();

const fakeService = new FakeService();
const cosController = new CosController(fakeService);
const cosHandler = new CosHandler(cosController);

router.get('/cos', (req, res, next) => cosHandler.calcCos(req, res, next));


export default router;