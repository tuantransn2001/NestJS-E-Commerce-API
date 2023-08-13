import { SeedService } from './seed.service';
export declare class SeedController {
    private seedService;
    constructor(seedService: SeedService);
    getDataTest(): Promise<{
        product: import("../../ts/interfaces/product.type").Product[];
    }>;
}
