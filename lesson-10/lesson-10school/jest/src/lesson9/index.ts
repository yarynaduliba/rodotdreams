import { IWaterHeater } from './abstractions/i-water-heater';
import { GasBoiler } from './gas-boiler copy';
import { ElectricBoiler } from './electric-boiler';
import { MomentumElectricWaterHeater } from './momentum-electric-water-heater';

class House {
    public constructor(public readonly name: string) {}

    public heatWater(boiler: IWaterHeater): void {
        boiler.turnOn();
        boiler.setTemp(40);
        boiler.heatWater;
        boiler.heatWater();
    }
}

class BoilerShop {

    public get boilerss(): IWaterHeater[] {
        return this.boiler;
    }


    public constructor(private boiler: IWaterHeater[] = []) {

    }

    public testBoiler(boiler: IWaterHeater): void {
        boiler.turnOn();
        boiler.setTemp(40);
        boiler.heatWater();
        boiler.turnOff();
    }

    public addBoiler(boiler: IWaterHeater): void {
        this.boiler.push(boiler);
    }

    public sellBoiler(boiler: IWaterHeater): void {
        this.boiler.splice(this.boiler.indexOf(boiler), 1);
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
mBoiler.heatWater();

const boilerShop = new BoilerShop([gBoiler, eBoiler, mBoiler]);
boilerShop.testBoiler(gBoiler);
boilerShop.sellBoiler(gBoiler);
console.log(boilerShop.boilerss);
