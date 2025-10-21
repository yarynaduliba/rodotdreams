export class ObjectApi {
    public id: string;
    public name: string;
    public data?: DataOfObjectApi;

    public constructor (row: Record<string, unknown>) {
        this.id = row['id'] as string;
        this.name = row['name'] as string;
        this.data = new DataOfObjectApi(row['data'] as Record<string, unknown>);
    }

    public hasColor(): boolean {
        return !!this.data?.['color'];
    }

    public getSummary(): string {
        return `Name: ${this.name}, Data: ${this.data?.color}`;
    }

}


class DataOfObjectApi {
    public year?: number;
    public color?: string;
    public description?: string;
    public price?: number;

    public constructor (row: Record<string, unknown>) {
        this.year = row?.['year'] as number;
        this.color = row?.['color'] as string;
        this.description = row?.['description'] as string;
        this.price = row?.['price'] as number;
    }
}


export class ObjectShortInfo {
    public id: string;
    public summary: string;
    public priceInfo?: string;

    public constructor(apiObj: ObjectApi) {
        this.id = apiObj.id;
        const color = apiObj.data?.color ?? 'unknown color';
        const year = apiObj.data?.year ?? 'unknown year';
        const price = apiObj.data?.price ?? 0;
        this.summary = `${apiObj.name} (${color}, ${year})`;
        this.priceInfo = `Price: ${price}`;
    }
}
