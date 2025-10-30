import { Car } from '../implementation/car';

export class Van extends Car {
    public loadCapacity: number;

    public constructor(name: string,
        maxSpeed: number,
        wheelsQuantity: number,
        howOld: number,
        label: string,
        ifPublic: boolean,
        typeOfLicenseNeeded: string,
        weight: number,
        loadCapacity: number) {
        super(name, maxSpeed, wheelsQuantity, howOld, label, ifPublic, typeOfLicenseNeeded, weight);
        this.loadCapacity = loadCapacity;
    }

    public canCarry(cargoWeight: number): string {
        if (cargoWeight < this.loadCapacity) {
            return `${this.label} can carry ${cargoWeight} kg of cargo`;
        } else {
            return `${this.label} can not carry ${cargoWeight} kg of cargo`;
        }
    }

    public ifThisTransportIsPublic(ifPublic: boolean): string {
        return ifPublic ? 'Van is public' : 'Van is private';
    }

}
