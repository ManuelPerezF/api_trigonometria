import { Triangle } from '../../types/db/triangle';

export interface IDBService {
    getTriangles(): Promise<Triangle[]>;
}
