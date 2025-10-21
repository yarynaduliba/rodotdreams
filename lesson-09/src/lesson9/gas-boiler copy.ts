import { IWaterHeater } from './abstractions/i-water-heater';

export class GasBoiler implements IWaterHeater{

    public desiredTemp: number;
    public currentTemp: number;
    public powerState: boolean;

    public constructor(public readonly name: string) {
        this.currentTemp = 20;
        this.desiredTemp = 35;
        this.powerState = false;
    }

    public turnOn(): void {
        this.powerState = true;
    }

    public turnOff(): void {
        this.powerState = false;
    }

    public setTemp(temp: number): number {
        this.desiredTemp = temp;
        return this.desiredTemp;
    }

    public heatWater(): void {
        if (!this.powerState) {
            console.log(`${this.name} is not on!`);
            return;
        }

        while (this.currentTemp < this.desiredTemp) {
            this.currentTemp++;
            console.log(`Gas is burning ${this.name} is heating up...${this.currentTemp} C`);
        }
    }

    public getCurrentTemp(): number {
        return this.currentTemp;
    }
}


