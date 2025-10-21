import { IWaterHeater } from './abstractions/i-water-heater';
import { GasBoiler } from './gas-boiler copy';
import { ElectricBoiler } from './electric-boiler';
import { MomentumElectricWaterHeater } from './momentum-electric-water-heater';

class House {
    public constructor(public readonly name: string) {}

    public heatWater(boiler: IWaterHeater): void {
        boiler.turnOn;
        boiler.setTemp(40);
        boiler.heatWater;
        boiler.heatWater();
    }
}

const house = new House('My house');
const gBoiler = new GasBoiler('Gas Boiler');
const eBoiler = new ElectricBoiler('Electric Boiler');
const mBoiler = new MomentumElectricWaterHeater('Momentum');

house.heatWater(gBoiler);
console.log('--------------');
house.heatWater(eBoiler);
console.log('--------------');
house.heatWater(mBoiler);
