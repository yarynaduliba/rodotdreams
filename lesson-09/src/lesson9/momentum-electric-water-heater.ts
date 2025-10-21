import { ElectricBoiler } from './electric-boiler';

export class MomentumElectricWaterHeater extends ElectricBoiler {
    public constructor(public readonly name: string) {
        super(name);
    }

    public heatWater(): void {
        this.heatWaterInsideLogicForMomentum;
    }

    private heatWaterInsideLogicForMomentum(): void {
        if (!this.powerState) {
            console.log(`${this.name} is not on`);
            return;
        }
    }
}
