import { AbstractTransport } from '../abstract-classes/transport-abstract';
import { ITransport } from '../interfaces/transport-interface';

export class Car extends AbstractTransport implements ITransport  {

    public label: string;
    public ifPublic: boolean;
    public typeOfLicenseNeeded: string;
    public weight: number;

    public constructor (name: string, maxSpeed: number, wheelsQuantity: number, howOld: number, label: string,
        ifPublic: boolean, typeOfLicenseNeeded: string, weight: number) {
        super(name, maxSpeed, wheelsQuantity, howOld);
        this.label = label;
        this.ifPublic = ifPublic;
        this.typeOfLicenseNeeded = typeOfLicenseNeeded;
        this.weight = weight;
    }

    public whatTypeOfLicenseNeeded(weight: number): void {
        if (weight < 100) {
            console.log('You do not need a driving license');
        } else if (weight > 100 && weight < 500) {
            console.log('You need a driving license with category B');
        } else {
            console.log('You need a driving license with category C');
        }
    }

    public ifThisTransportIsPublic(ifPublic: boolean): void {
        if (!ifPublic) {
            console.log('Transport is not public');
        } else {
            console.log('Transport is public');
        }
    }
}
