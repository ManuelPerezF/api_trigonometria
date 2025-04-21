import { Triangle } from '../../types/db/triangle';

export class FakeService {

    private triangles: Triangle[] = [
        { id: 1, la: 12, lo: 5, h: 13 }
    ];
    
    async getTriangles(): Promise<Triangle[]> {
        return this.triangles;

    }
}