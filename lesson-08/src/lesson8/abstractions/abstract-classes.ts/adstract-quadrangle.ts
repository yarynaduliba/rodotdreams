export abstract class AbstractQuadrangle {
    public a: number;
    public b: number;
    public c: number;
    public d: number;

    public constructor (a: number, b: number, c: number, d: number) {
        this.a = a;
        this.b = b;
        this.c = c;
        this.d = d;
    }

    public getPerimeter(): number{
        return this.a + this.b + this.c + this.d;
    };

    public abstract getArea(): number;
}
