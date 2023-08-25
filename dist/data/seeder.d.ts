export declare const PRODUCT_SEEDER: {
    id: string;
    name: string;
    categoryID: string;
    SKU: string;
    classify: string;
    variants: {
        id: string;
        name: string;
        imgSrc: string;
        price: string;
        options: {
            id: string;
            k: string;
            v: string;
        }[];
        details: {
            id: string;
            title: string;
            contents: ({
                id: string;
                k: string;
                v: string[];
            } | {
                id: string;
                v: string[];
                k?: undefined;
            })[];
        }[];
    }[];
}[];
export declare const PAYMENT_SEEDER: {
    id: string;
    title: string;
    description: string;
}[];
export declare const ADDRESS_SEEDER: {
    id: string;
    user_id: string;
    city: string;
    country: string;
    postalCode: string;
    address: string;
    status: string;
}[];
export declare const USER_SEEDER: {
    id: string;
    type: string;
    firstName: string;
    lastName: string;
    address: string;
    email: string;
    phoneNumber: string;
    password: string;
    avatar: string;
}[];
export declare const CATEGORY_SEEDER: {
    id: string;
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
