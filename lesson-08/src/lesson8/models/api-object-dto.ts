// {
//     "id": "1",
//     "name": "Google Pixel 6 Pro",
//     "data": {
//         "color": "Cloudy White",
//         "capacity": "128 GB"
//     }
// },
// {
//     "id": "2",
//     "name": "Apple iPhone 12 Mini, 256GB, Blue",
//     "data": null
// },

export interface IApiObjectDto {
    id: string;
    name: string;
    data: ApiObjectDataDto | null;
}

interface ApiObjectDataDto {
    color?: string;
    capacity?: string;
    'capacity GB'?: string;
    price?: number;
}
