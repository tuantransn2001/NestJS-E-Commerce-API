export interface PaginationDTO {
    id?: string;
    page_size: number;
    page_number: number;
    searchParam?: string;
}
export interface ParamDTO {
    [key: string]: string;
}
