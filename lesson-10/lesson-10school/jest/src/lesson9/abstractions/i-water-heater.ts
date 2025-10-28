export interface IWaterHeater {
    desiredTemp: number;
    currentTemp: number;
    powerState: boolean;

    turnOn(): void;

    turnOff(): void;

    setTemp(temp: number): number;

    heatWater(): void;

}
