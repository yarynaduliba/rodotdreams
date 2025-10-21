import { AbstractQuadrangle } from '../abstractions/abstract-classes.ts/adstract-quadrangle';
import { IQuadrangle } from '../abstractions/interfaces/quadrangle';

export class Rectangle implements IQuadrangle {
    public a: number;
    public b: number;
    public c: number;
    public d: number;

    public constructor(a: number, b: number) {
        this.a = a;
        this.b = b;
        this.c = a;
        this.d = b;
    }

    public getPerimeter(): number {
        return this.a + this.b + this.c + this.d;
    }

    public getArea(): number {
        return this.a * this.b;
    }
}

export class RectangleFromAbstract extends AbstractQuadrangle {

    public constructor(a: number, b: number) {
        super(a, b, a, b);
    }

    // public getPerimeter(): number {
    //     return (this.a + this.b) * 2;
    // }

    public getArea(): number {
        return this.a * this.b;
    }

}

export class RectangleWithInfo extends RectangleFromAbstract {
    public constructor(a: number, b: number) {
        super(a, b);
    }

    public getSummary(): string {
        return `Rectangle with sides ${this.a} and ${this.b} and has area ${this.getArea()} and perimeter ${this.getPerimeter()}`;
    }
}
