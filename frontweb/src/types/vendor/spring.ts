export type SpringPage<T> = {
    content: T[];
    last: boolean;
    totalElements:number;
    totalPages: number;
    size: boolean;
    first:boolean;
    numberOfElements?:number;
    empty : boolean;
};