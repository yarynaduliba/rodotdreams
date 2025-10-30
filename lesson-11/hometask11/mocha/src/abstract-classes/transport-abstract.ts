
export abstract class AbstractTransport{
    public maxSpeed: number;
    public name: string;
    public howOld: number;


    public constructor(name: string, maxSpeed: number, wheelsQuantity: number, howOld: number) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.howOld = howOld;
    }

    public ifQuick(maxWeight: number): void {
        if (maxWeight <= 50) {
            console.log('Your car is very slow');
        } else if (maxWeight > 50 && maxWeight <= 100) {
            console.log('Your car is quite quick');
        } else {
            console.log('Your car is very quick');
        }
    }

    public ifOld(howOld: number): string{
        if (howOld >= 20) {
            console.log('Your car is old');
        } else if (howOld < 20 && howOld > 10) {
            console.log('Your car is quite old');
        } else {
            console.log('Your car is not old');
        }
        return `Your car is ${howOld}`;
    }
}
