
export class ApiObject{
    public id?: string;
    public name?: string;
    public data?: ApiObjectData;

    public constructor(row: Record<string, unknown>) {
        this.id = row['id'] as string;
        this.name = row['name'] as string;
        this.data = new ApiObjectData(row['data'] as Record<string, unknown>);
    }

    public hasCapacityGB(): boolean {
        return !!this.data?.['capacity GB'];
    }

    public getSummary(): string {
        return `Name: ${this.name}, Data: ${this.data?.color}`;
    }
}

class ApiObjectData {
    public color?: string;
    public capacity?: string;
    public 'capacity GB'?: number;
    public price?: number;

    public constructor(row: Record<string, unknown>){
        this.color = row?.['color'] as string;
        this.capacity = row?.['capacity'] as string;
        this['capacity GB'] = row?.['capacity GB'] as number;
        this.price = row?.['price'] as number;

    }


}


