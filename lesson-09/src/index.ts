import { Car } from './implementation/car';
import { Van } from './implementation/van';
import { ITransport } from './interfaces/transport-interface';

function checkTransportInfo(transport: ITransport): void {
    transport.ifThisTransportIsPublic(true);
    transport.whatTypeOfLicenseNeeded(300);
}

const myCar = new Car('Volvo', 200, 4, 5, 'xc60', false, 'B', 100);
const myVan = new Van('Opel', 100, 6, 10, 'Model', true, 'C', 5000, 20000);

checkTransportInfo(myCar);
checkTransportInfo(myVan);

myVan.canCarry(2000);
myVan.canCarry(2500);
myCar.ifOld(10);
myVan.ifOld(40);
