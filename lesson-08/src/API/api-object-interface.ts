export interface IObjectApi {
    id: string;
    name: string;
    data: IDataOfObjectApi |  null;
}

interface IDataOfObjectApi {
    year?: number;
    color?: string;
    description?: string;
    price?: number;
}
