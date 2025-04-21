import { IDBService } from '../db/type/dbService';

export class TanController {

    dbService: IDBService;

    constructor(dbService: IDBService) {
        this.dbService = dbService;
    }

    async calcTan(): Promise<number> {
        const triangles = await this.dbService.getTriangles();
        const triangle = triangles[0];
        return (triangle.lo / triangle.la);


    }
}