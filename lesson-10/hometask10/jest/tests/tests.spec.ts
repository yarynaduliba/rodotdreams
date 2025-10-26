import { Van } from  '../src/implementation/van';
import { Car } from '../src/implementation/car';

describe('Unit tests for Van', () => {
    let van: Van;

    beforeEach(() => {
        van = new Van('Mercedes', 150, 8, 8, 'Sprinter', true, 'C', 1500, 800);

    });

    describe('canCarry', () => {
        it('should return message when cargo is within capacity', () => {
            expect(van.canCarry(400)).toBe('Sprinter can carry 400 kg of cargo');
        });
        it('should return message when cargo is exceeds capacity', () => {
            expect(van.canCarry(900)).toBe('Sprinter can not carry 900 kg of cargo');
        });
    });
});

describe('Unit tests for Car', () => {
    let car: Car;

    beforeEach(() => {
        car = new Car('Audi', 300, 4, 2, 'Q5', false, 'B', 700);
    });

    describe('If transport is public', () => {
        it('should return "Transport is not public" if false', () => {
            expect(car.ifThisTransportIsPublic(false)).toBe('Transport is not public');
        });
        it('should return "Transport is  public" if true', () => {
            expect(car.ifThisTransportIsPublic(true)).toBe('Transport is public');
        });
    });
});
