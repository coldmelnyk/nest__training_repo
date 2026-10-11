type Direction = 'asc' | 'desc';

export interface IQueryParams {
    GET: {
        direction: Direction;
        filter: string;
    };
}

export interface IQueryDataInstance {
    createdAt: Date;
    firstName: string;
    lastName: string;
}
