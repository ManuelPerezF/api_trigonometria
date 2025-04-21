
import { IDBService } from '../db/type/dbService';


export class CosController {

    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async calcCos():  Promise<number> {
        const triangles = await this.dbService.getTriangles();
        const triangle = triangles[0];
        return (triangle.la / triangle.h);
    }
} 