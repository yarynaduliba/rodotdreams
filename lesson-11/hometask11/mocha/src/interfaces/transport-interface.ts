export interface ITransport {
    ifPublic: boolean;
    typeOfLicenseNeeded: string;
    weight: number;

    whatTypeOfLicenseNeeded(weight: number): void;
    ifThisTransportIsPublic(ifPublic: boolean): void;
}
