type Direction = 'asc' | 'desc';
type SearchFilterMode = 'insensitive' | 'default';

export type StringKeyOf<T> = {
    [K in keyof T]-?: NonNullable<T[K]> extends string ? K : never;
}[keyof T] &
    string;

export interface IQueryOptionsInstanceWhereValueObject {
    [K: string]: {
        contains: string;
        mode: SearchFilterMode;
    };
}

export interface IQueryParams {
    GET: {
        direction: Direction;
        filter: string;
    };
}

export interface IQueryOptionsInstance {
    orderBy?: {
        createdAt: Direction;
    };
    where?: {
        OR: IQueryOptionsInstanceWhereValueObject[];
    };
}
