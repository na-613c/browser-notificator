export default interface eventT {
    key: string;
    day: number;
    month: number;
    year: number;
    time: string;
    event: string;
    repeating: boolean;
    position: string;
    prior: string;
};