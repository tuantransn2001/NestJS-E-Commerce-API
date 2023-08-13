import * as mongoose from 'mongoose';
import { PROVIDER_NAME } from '../ts/enums/common';
export declare const databaseProviders: {
    provide: PROVIDER_NAME;
    useFactory: () => Promise<typeof mongoose>;
}[];
