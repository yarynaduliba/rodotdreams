import { expect } from 'chai';
import { Car } from '../src/implementation/car';
import { Van } from '../src/implementation/van';

describe('Unit tests for Van', () => {
    let van: Van;

    beforeEach(() => {
        van = new Van('Opel', 150, 8, 10, 'pm1', true, 'C', 300, 500);
    });

    describe('Verify capacity of van', () => {
        it('verify weight that left', () => {
            expect(van.remainingCapacity(400)).to.equal(100);
        });
        it('verify that no weight left', () => {
            expect(van.remainingCapacity(500)).to.equal(0);
        });
    });
});

describe('Unit tests for Car', () => {
    let car: Car;

    beforeEach(() => {
        car = new Car('Volvo', 200, 4, 5, 'xc90', false, 'B', 100);
    });

    describe('What category type is needed', () => {
        it('should return "No license required" when weight < 100', () => {
            const result = car.whatTypeOfLicenseNeeded(50);
            expect(result).to.equal('No license required');
        });

        it('should return "License category B required" when weight between 100 and 499', () => {
            expect(car.whatTypeOfLicenseNeeded(150)).to.equal('License category B required');
        });

        it('should return "License category C required" when weight >= 500', () => {
            const result = car.whatTypeOfLicenseNeeded(600);
            expect(result).to.equal('License category C required');
        });
    });

    describe('If transport is public', () => {
        it('should return "Transport is not public" if false', () => {
            expect(car.ifThisTransportIsPublic(false)).to.equal('Transport is not public');
        });
        it('should return "Transport is public" if true', () => {
            expect(car.ifThisTransportIsPublic(true)).to.equal('Transport is public');
        });
    });
});


