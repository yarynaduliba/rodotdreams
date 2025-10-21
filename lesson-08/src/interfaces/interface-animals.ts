export interface IAnimals {
    speed: number;
    voice: string;

    howQuick(speed: number): number;
    whatSay(voice: string): string;
}
