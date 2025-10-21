export abstract class AbstractAnimal {
    public name: string;
    public speed: number;
    public voice: string;
    public danger: boolean;

    public constructor(name: string, speed: number, voice: string, danger: boolean) {
        this.name = name;
        this.speed = speed;
        this.voice = voice;
        this.danger = danger;
    }

    public howDanger(name: string, danger: boolean): void{
        if (danger === true) {
            console.log(`${name} is danger`);
        } else {
            console.log(`${name} isn't danger`);
        }
    }

    public abstract whatName(name: string): string;
}
