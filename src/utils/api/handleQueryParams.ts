import {
    IQueryParams,
    IQueryOptionsInstance,
    IQueryOptionsInstanceWhereValueObject,
    StringKeyOf,
} from 'src/type/api/queryParams';

const buildWhereOptionArray = <TModel extends object>(
    whereOptionKeys: readonly StringKeyOf<TModel>[],
    searchString: string,
): IQueryOptionsInstanceWhereValueObject[] => {
    return whereOptionKeys.map((key) => ({
        [key]: {
            contains: searchString,
            mode: 'insensitive',
        },
    }));
};

export const handleQueryParams = {
    GET: <TModel extends object>(
        queryParams: IQueryParams['GET'],
        whereOptionKeys: readonly StringKeyOf<TModel>[] = [],
    ): IQueryOptionsInstance => {
        const optionsObject: IQueryOptionsInstance = {};

        switch (queryParams.direction) {
            case 'asc':
                optionsObject.orderBy = { createdAt: 'asc' };
                break;
            case 'desc':
                optionsObject.orderBy = { createdAt: 'desc' };
                break;
            default:
                break;
        }

        if (queryParams.filter && whereOptionKeys.length) {
            const whereArray = buildWhereOptionArray<TModel>(
                whereOptionKeys,
                queryParams.filter,
            );

            optionsObject.where = {
                OR: whereArray,
            };
        }

        return optionsObject;
    },
};
