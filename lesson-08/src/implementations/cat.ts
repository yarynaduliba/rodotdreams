import { AbstractAnimal } from '../abstract-classes/abstraction-animals';
import { IAnimals } from '../interfaces/interface-animals';

export class Cats extends AbstractAnimal implements IAnimals{

    public constructor(name: string, speed: number, voice: string, danger: boolean) {
        super (name, speed, voice, danger);
    }

    public howQuick(speed: number): number {
        if (speed >= 10) {
            console.log('Animal is very quick');
        } else if (speed < 9 && speed > 2){
            console.log('Animal is not very quick');
        } else {
            console.log('Animal is slow');
        } return speed;
    }

    public whatSay(voice: string): string {
        return voice;

    }

    public whatName(name: string): string {
        return name;
    }

}

export class SiameseСat extends Cats {

    public constructor(name: string, speed: number, voice: string, danger: boolean) {
        super (name, speed, voice, danger);
    }

    public getInfo():string {
        return `Animal name is ${this.whatName(this.name)}, it says ${this.whatSay(this.voice)} and it runs with speed ${this.speed}.`;
    }

}


