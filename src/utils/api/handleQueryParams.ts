import { IQueryParams, IQueryDataInstance } from 'src/type/api/queryParams';

export const handleQueryParams = {
    GET: (
        dataArray: Required<IQueryDataInstance>[],
        queryParams: IQueryParams['GET'],
    ) => {
        let dataObject = [...dataArray];

        if (queryParams.direction) {
            switch (queryParams.direction) {
                case 'asc':
                    dataObject = dataObject.sort(
                        (user1, user2) =>
                            new Date(user1.createdAt).getTime() -
                            new Date(user2.createdAt).getTime(),
                    );
                    break;
                case 'desc':
                    dataObject = dataObject.sort(
                        (user1, user2) =>
                            new Date(user2.createdAt).getTime() -
                            new Date(user1.createdAt).getTime(),
                    );
                    break;
                default:
                    break;
            }
        }

        if (queryParams.filter) {
            dataObject = dataObject.filter((user) => {
                const formattedName = `${user.firstName} ${user.lastName}`
                    .toLowerCase()
                    .trim();
                const formattedQuery = queryParams.filter.toLowerCase().trim();

                return formattedName.includes(formattedQuery);
            });
        }

        return dataObject;
    },
};
