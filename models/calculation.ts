export interface Calculation {
    // input
    id: string;
    nota: string;
    misura: number;
    nrPezzi: number;

    // output
    nrBattute: number;
    nrBarre: number;
}