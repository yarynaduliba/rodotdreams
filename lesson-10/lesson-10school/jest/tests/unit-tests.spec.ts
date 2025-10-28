import { ElectricBoiler } from '../src/lesson9/electric-boiler';

describe('Unit tests', () => {
    let boiler : ElectricBoiler;

    beforeEach(() => {
        console.log('before each');
        // Arrange
        boiler = new ElectricBoiler('electric boiler');
    });

    describe('Electric boiler default temperature', () => {
        it('default temperature should be 20', () => {
            expect(boiler.getCurrentTemp()).toBe(20);
        });
        it('Heat and check temperature', () => {
            //Arrange
            boiler.setTemp(35);

            // Act
            boiler.turnOn();
            boiler.setTemp(35);
            boiler.heatWater();

            // Assert
            expect(boiler.getCurrentTemp()).toBe(35);
        });
    });
});
