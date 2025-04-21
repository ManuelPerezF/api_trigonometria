import exress from 'express';
import { CosController } from '../controller/cosController';
import { CosHandler } from '../handler/cosHandler';
import { SinController } from '../controller/sinController';
import { SinHandler } from '../handler/sinHandler';
import { TanController } from '../controller/tanController';
import { TanHandler } from '../handler/tanHandler';
import { FakeService } from '../db/fake/fakeService';


const router = exress.Router();

const fakeService = new FakeService();
const cosController = new CosController(fakeService);
const cosHandler = new CosHandler(cosController);
const sinController = new SinController(fakeService);
const sinHandler = new SinHandler(sinController);
const tanController = new TanController(fakeService);
const tanHandler = new TanHandler(tanController);

router.get('/cos', (req, res, next) => cosHandler.calcCos(req, res, next));
router.get('/sin', (req, res, next) => sinHandler.calcSin(req, res, next));
router.get('/tan', (req, res, next) => tanHandler.calcTan(req, res, next));


export default router;