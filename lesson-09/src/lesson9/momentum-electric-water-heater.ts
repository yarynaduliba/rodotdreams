import { ElectricBoiler } from './electric-boiler';

export class MomentumElectricWaterHeater extends ElectricBoiler {

    public waterRelayState = false;

    public constructor(public readonly name: string) {
        super(name);
    }

    public heatWater(): void {
        this.heatWaterInsideLogicForMomentum();
    }

    private heatWaterInsideLogicForMomentum(): void {
        if (!this.powerState) {
            console.log(`${this.name} is not on`);
            return;
        }

        if (this.waterRelayState) {
            console.log(`${this.name} is heating up...`);
            super.heatWater();
        } else {
            console.log('No water flow detected');
        }
    }
}
