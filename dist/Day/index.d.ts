import * as Month from './../Month';
export interface Day {
    key: string;
    year: number;
    month: Month.Month;
    day: number;
}
export declare const day: (year: number, month: Month.Month, d: number) => {
    key: string;
    year: number;
    month: Month.Month;
    day: number;
};
export declare const title: (d: Day) => string;
