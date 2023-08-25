import { SeedService } from './seed.service';
export declare class SeedController {
    private seedService;
    constructor(seedService: SeedService);
    getDataTest(): Promise<{
        category: {
            id: string;
            subCategoryID: any;
            title: string;
            subTitle: string;
            description: string[];
            imgSrc: string;
            contents: ({
                title: string;
                content: string[];
                subTitle?: undefined;
            } | {
                title: string;
                subTitle: string;
                content: string[];
            })[];
        }[];
    }>;
}
