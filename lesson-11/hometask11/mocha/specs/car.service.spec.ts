import { expect } from 'chai';
import * as sinon from 'sinon';
import { Car } from '../src/implementation/car';
import { Van } from '../src/implementation/van';

describe('Van & Car classes', () => {

    let van: Van;

    beforeEach(() => {
        van = new Van('Sprinter', 160, 4, 5, 'Mercedes', true, 'B', 2500, 800);
    });

    afterEach(() => {
        sinon.restore();
    });

    it('should return correct message when it can carry cargo', () => {
        const result = van.canCarry(400);
        expect(result).to.equal('Mercedes can carry 400 kg of cargo');
    });

    it('should return correct message when it cannot carry cargo', () => {
        const result = van.canCarry(1000);
        expect(result).to.equal('Mercedes can not carry 1000 kg of cargo');
    });

    it('should return correct public/private message', () => {
        const result = van.ifThisTransportIsPublic(true);
        expect(result).to.equal('Van is public');
    });

    it('should spy on parent class method call', () => {
        const car = new Car('Audi', 220, 4, 2, 'AudiA6', false, 'B', 1800);
        const spy = sinon.spy(car, 'ifThisTransportIsPublic');

        car.ifThisTransportIsPublic(false);

        expect(spy.calledOnce).to.be.true;
        expect(spy.calledWith(false)).to.be.true;
    });

    it('should stub whatTypeOfLicenseNeeded to return fixed value', () => {
        const car = new Car('Audi', 220, 4, 2, 'AudiA6', false, 'B', 1800);
        const stub = sinon.stub(car, 'whatTypeOfLicenseNeeded').returns('Stubbed license response');

        const result = car.whatTypeOfLicenseNeeded(200);

        expect(result).to.equal('Stubbed license response');
        expect(stub.calledOnce).to.be.true;
    });

    it('should check loadCapacity property exists', () => {
        expect(van.loadCapacity).to.equal(800);
    });

});
